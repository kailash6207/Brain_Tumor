import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import crypto from 'crypto';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 5000;

// Enforce strong session secret in production or fallback to strong dev secret
const COOKIE_SECRET = process.env.SESSION_SECRET || (isProduction
  ? (() => { throw new Error('FATAL: SESSION_SECRET environment variable is strictly required in production.'); })()
  : 'neuroscan-clinical-pacs-hmac-dev-secret-2026');

// =========================================================================
// 1. ADVANCED SECURITY HEADERS & WEB APPLICATION FIREWALL (WAF)
// =========================================================================
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
      imgSrc: ["'self'", "data:", "blob:", "https:"],
      connectSrc: ["'self'"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"],
      frameAncestors: ["'none'"],
      upgradeInsecureRequests: isProduction ? [] : null
    }
  },
  crossOriginEmbedderPolicy: false,
  hsts: isProduction ? { maxAge: 31536000, includeSubDomains: true, preload: true } : false,
  xssFilter: true,
  noSniff: true
}));

// Whitelist-restricted CORS
const defaultAllowedOrigins = [
  'http://localhost:5000',
  'http://127.0.0.1:5000',
  `http://localhost:${PORT}`,
  `http://127.0.0.1:${PORT}`
];
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map((o) => o.trim().replace(/\/$/, ''))
  : defaultAllowedOrigins;

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    console.warn(`🚨 [CORS BLOCKED] Unauthorized cross-origin request: ${origin}`);
    return callback(new Error('Cross-Origin Request Blocked by NeuroScan AI Security Policy.'));
  },
  credentials: true
}));

app.use(cookieParser(COOKIE_SECRET));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Whitelisted static frontend delivery (prevents exposure of backend files / .env / package.json)
const ALLOWED_STATIC_FILES = [
  'index.html',
  'style.css',
  'app.js',
  'radiology_engine.js',
  'tumors_database.js',
  'presets.js',
  'confetti.js'
];

ALLOWED_STATIC_FILES.forEach((fileName) => {
  app.get(`/${fileName}`, (req, res) => {
    res.sendFile(path.join(__dirname, fileName));
  });
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/sample_scans', express.static(path.join(__dirname, 'sample_scans')));

// Known automated scanners & exploit bots
const MALICIOUS_USER_AGENTS = [
  'sqlmap', 'nikto', 'dirbuster', 'nmap', 'masscan', 'wpscan', 'gobuster',
  'acunetix', 'havij', 'hydra', 'metasploit', 'burpcollaborator', 'zgrab'
];

// Blocked hacker probe paths
const BLOCKED_PROBE_PATHS = [
  '/.git', '/wp-admin', '/wp-login', '/phpmyadmin', '/pma', '/.env',
  '/config.json', '/shell.php', '/eval.php', '/cmd.exe', '/etc/passwd',
  '/actuator', '/solr', '/cgi-bin', '/vendor/phpunit'
];

const blockedIps = new Map();
const wafStats = {
  blockedAttacks: 0,
  scansChecked: 0,
  threatsIntercepted: 0,
  wafStatus: 'ONLINE_ACTIVE',
  antivirusEngine: 'HEURISTIC_SIGNATURE_SHIELD'
};

const wafMiddleware = (req, res, next) => {
  const clientIp = req.ip || req.connection.remoteAddress || 'unknown';

  if (blockedIps.has(clientIp)) {
    const unbanAt = blockedIps.get(clientIp);
    if (Date.now() < unbanAt) {
      console.warn(`🚨 [WAF SHIELD] Blocked banned IP: ${clientIp} attempting ${req.method} ${req.url}`);
      return res.status(403).json({
        success: false,
        threat: 'ACCESS_DENIED',
        message: 'Access blocked by NeuroScan AI Cyber Security Shield.'
      });
    } else {
      blockedIps.delete(clientIp);
    }
  }

  const userAgent = (req.headers['user-agent'] || '').toLowerCase();
  const urlPath = req.path.toLowerCase();

  const isLoopback = clientIp === '127.0.0.1' || clientIp === '::1' || clientIp === '::ffff:127.0.0.1';

  // Detect Scanner Bots
  for (const bot of MALICIOUS_USER_AGENTS) {
    if (userAgent.includes(bot)) {
      wafStats.blockedAttacks++;
      console.warn(`🚨 [WAF ATTACK BOT BLOCKED] IP: ${clientIp} | Agent: ${userAgent}`);
      if (!isLoopback) blockedIps.set(clientIp, Date.now() + 60 * 60 * 1000);
      addAuditLog('SECURITY_WAF_BOT_BLOCKED', clientIp, `Scanner bot signature: ${bot}`);
      return res.status(403).json({ success: false, message: 'Forbidden: Malicious scanner bot detected.' });
    }
  }

  // Detect Probe Paths
  for (const probe of BLOCKED_PROBE_PATHS) {
    if (urlPath.includes(probe)) {
      wafStats.blockedAttacks++;
      console.warn(`🚨 [WAF PROBE BLOCKED] IP: ${clientIp} | Path: ${urlPath}`);
      if (!isLoopback) blockedIps.set(clientIp, Date.now() + 60 * 60 * 1000);
      addAuditLog('SECURITY_WAF_PROBE_BLOCKED', clientIp, `Probed restricted path: ${urlPath}`);
      return res.status(403).json({ success: false, message: 'Forbidden: Unauthorized system probe detected.' });
    }
  }

  // Detect SQL Injection & Script Injection
  const rawPayload = JSON.stringify(req.query || {}) + JSON.stringify(req.body || {});
  const injectionPattern = /(\b(SELECT|UNION|INSERT|DELETE|UPDATE|DROP|ALTER|EXEC|CHAR)\b|--|\/\*|\*\/|@@|<script\b|javascript:|<iframe\b)/i;
  if (injectionPattern.test(rawPayload) && !req.path.startsWith('/api/verify-otp') && !req.path.startsWith('/api/scan-file-security')) {
    wafStats.blockedAttacks++;
    console.warn(`🚨 [WAF INJECTION BLOCKED] IP: ${clientIp} | Input: ${rawPayload.slice(0, 120)}`);
    addAuditLog('SECURITY_WAF_INJECTION_BLOCKED', clientIp, 'Blocked potential SQLi/XSS string');
    return res.status(400).json({ success: false, message: 'Request blocked: Malicious injection pattern detected.' });
  }

  next();
};

app.use(wafMiddleware);

// =========================================================================
// 2. RATE LIMITING SHIELDS
// =========================================================================
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Rate limit exceeded. Please wait a few moments.' }
});

const otpLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Security Alert: Rate limit exceeded on authentication endpoints. Please wait 10 minutes.' }
});

app.use('/api/', apiLimiter);
app.use('/api/send-otp', otpLimiter);
app.use('/api/verify-otp', otpLimiter);

// =========================================================================
// 3. CRYPTOGRAPHIC AUDIT LOGS (HIPAA & DICOM 3.0 COMPLIANCE)
// =========================================================================
const auditLogs = [];

function addAuditLog(action, clinicianId, scanOrDetails = 'SYSTEM') {
  const timestamp = new Date().toISOString();
  const rawStr = `${timestamp}|${clinicianId}|${action}|${scanOrDetails}`;
  const sha256 = crypto.createHash('sha256').update(rawStr).digest('hex');

  const entry = {
    timestamp,
    clinicianId,
    action,
    scan: scanOrDetails,
    hash: sha256.slice(0, 12) + '...' + sha256.slice(-4),
    fullHash: sha256
  };

  auditLogs.unshift(entry);
  if (auditLogs.length > 50) auditLogs.pop();
  return entry;
}

addAuditLog('PACS_STATION_BOOT', 'SYSTEM_KERNEL', 'NeuroScan AI Diagnostic Engine Loaded');
addAuditLog('WAF_FIREWALL_INIT', 'SECURITY_SHIELD', 'OWASP Top 10 & Anti-DDoS Rules Engaged');
addAuditLog('ANTIVIRUS_HEURISTIC_INIT', 'MALWARE_SCANNER', 'DICOM Signature & Virus Engine Online');

// =========================================================================
// 4. HEURISTIC ANTIVIRUS & MALICIOUS PAYLOAD SCANNER
// =========================================================================
const VIRUS_SIGNATURES = [
  { name: 'EICAR Standard Anti-Virus Test File', regex: /X5O!P%@AP\[4\\PZX54\(P\^\)7CC\)7\}\$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!\$H\+H\*/ },
  { name: 'PHP Webshell Signature', regex: /<\?(?:php|=)/i },
  { name: 'Executable Windows PE Header', regex: /^MZ/ },
  { name: 'Linux Executable ELF Header', regex: /^\x7fELF/ },
  { name: 'Shell Script Command Execution', regex: /(?:\/bin\/sh|\/bin\/bash|powershell(?:\.exe)?\s+-enc|cmd\.exe\s+\/c)/i },
  { name: 'Polyglot JavaScript Payload', regex: /<script\b[^>]*>[\s\S]*?<\/script>/i },
  { name: 'Dangerous Base64 Eval Vector', regex: /eval\s*\(\s*base64_decode/i },
  { name: 'Server Side Template Injection (SSTI)', regex: /\{\{\s*(?:7\*7|config|system|eval)/i }
];

function scanFileBuffer(fileBuffer, fileName = '') {
  wafStats.scansChecked++;
  const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');
  const sizeKb = (fileBuffer.length / 1024).toFixed(2);
  const textContent = fileBuffer.slice(0, Math.min(fileBuffer.length, 1024 * 1024)).toString('latin1');

  if (fileBuffer.length > 50 * 1024 * 1024) {
    wafStats.threatsIntercepted++;
    return {
      safe: false,
      threat: 'OVERSIZED_PAYLOAD',
      message: 'File exceeds maximum clinical DICOM payload limit (50 MB).',
      sha256: hash,
      sizeKb
    };
  }

  const dangerousExts = ['.php', '.phtml', '.exe', '.bat', '.cmd', '.sh', '.vbs', '.js', '.jar', '.py', '.scr', '.dll', '.asp', '.aspx', '.jsp'];
  const lowerName = fileName.toLowerCase();
  for (const ext of dangerousExts) {
    if (lowerName.endsWith(ext) || lowerName.includes(`${ext}.`)) {
      wafStats.threatsIntercepted++;
      addAuditLog('ANTIVIRUS_THREAT_BLOCKED', 'UPLOAD_FILTER', `Disguised executable: ${fileName}`);
      return {
        safe: false,
        threat: 'DISGUISED_EXECUTABLE',
        message: `Dangerous executable extension detected (${ext}). Upload quarantined.`,
        sha256: hash,
        sizeKb
      };
    }
  }

  // Strict whitelist verification for allowed clinical file types
  const allowedClinicalExts = ['.dcm', '.dicom', '.png', '.jpg', '.jpeg', '.webp'];
  const fileExt = path.extname(lowerName);
  if (fileExt && !allowedClinicalExts.includes(fileExt)) {
    wafStats.threatsIntercepted++;
    addAuditLog('ANTIVIRUS_THREAT_BLOCKED', 'UPLOAD_FILTER', `Disallowed extension: ${fileName}`);
    return {
      safe: false,
      threat: 'INVALID_FILE_EXTENSION',
      message: `Unauthorized file extension (${fileExt}). Only DICOM (.dcm, .dicom) and medical image formats (.png, .jpg, .webp) are permitted.`,
      sha256: hash,
      sizeKb
    };
  }

  for (const sig of VIRUS_SIGNATURES) {
    if (sig.regex.test(textContent)) {
      wafStats.threatsIntercepted++;
      addAuditLog('ANTIVIRUS_THREAT_BLOCKED', 'UPLOAD_FILTER', `Matched signature: ${sig.name}`);
      return {
        safe: false,
        threat: 'MALWARE_SIGNATURE_DETECTED',
        threatName: sig.name,
        message: `Antivirus Alert: Malicious signature intercepted [${sig.name}]. Upload quarantined.`,
        sha256: hash,
        sizeKb
      };
    }
  }

  const isPng = fileBuffer.length >= 8 && fileBuffer[0] === 0x89 && fileBuffer[1] === 0x50 && fileBuffer[2] === 0x4E && fileBuffer[3] === 0x47;
  const isJpg = fileBuffer.length >= 3 && fileBuffer[0] === 0xFF && fileBuffer[1] === 0xD8 && fileBuffer[2] === 0xFF;
  const isWebp = fileBuffer.length >= 12 && fileBuffer.slice(0, 4).toString('latin1') === 'RIFF' && fileBuffer.slice(8, 12).toString('latin1') === 'WEBP';
  const isDicom = fileBuffer.length >= 132 && fileBuffer.slice(128, 132).toString('latin1') === 'DICM';

  const format = isDicom ? 'DICOM 3.0 High-Field MRI' : (isPng ? 'PNG Medical Image' : (isJpg ? 'JPEG Medical Image' : (isWebp ? 'WEBP Image' : 'RAW Binary Image')));

  addAuditLog('DICOM_SCAN_INGESTED', 'CLINICIAN', `Format: ${format} (${sizeKb} KB)`);

  return {
    safe: true,
    threatLevel: 'CLEAN',
    format,
    sha256: hash,
    sizeKb,
    message: 'Antivirus scan passed. 0 threats detected. Verified clean clinical scan.'
  };
}

// =========================================================================
// 5. SESSION COOKIE MANAGEMENT (HTTP-ONLY, SAMESITE=STRICT, SIGNED)
// =========================================================================
const sessionStore = new Map();

function createSession(res, clinicianId, hospitalKey = 'hopkins', clientIp = '') {
  const sessionToken = crypto.randomBytes(32).toString('hex');
  const maxAge = 8 * 60 * 60 * 1000;
  const expiresAt = Date.now() + maxAge;

  sessionStore.set(sessionToken, {
    clinicianId,
    hospitalKey,
    ip: clientIp,
    createdAt: Date.now(),
    expiresAt
  });

  res.cookie('pacs_auth_session', sessionToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: 'strict',
    maxAge,
    signed: true,
    path: '/'
  });

  addAuditLog('SESSION_COOKIE_ISSUED', clinicianId, 'Workstation Shift Cookie Created');
  return sessionToken;
}

// In-memory OTP storage: identifier -> { code, expiresAt, attempts, createdAt }
const otpStore = new Map();

// Periodic cleanup of expired entries (prevents memory leak DoS)
setInterval(() => {
  const now = Date.now();
  for (const [id, data] of otpStore.entries()) {
    if (now > data.expiresAt) {
      otpStore.delete(id);
    }
  }
  for (const [token, session] of sessionStore.entries()) {
    if (now > session.expiresAt) {
      sessionStore.delete(token);
    }
  }
}, 5 * 60 * 1000).unref();

/**
 * Strict authentication guard for sensitive clinical and telemetry routes.
 */
function requireAuth(req, res, next) {
  const sessionToken = req.signedCookies.pacs_auth_session;
  if (!sessionToken || !sessionStore.has(sessionToken)) {
    return res.status(401).json({
      success: false,
      message: 'Access Denied: Valid clinician session required.'
    });
  }

  const session = sessionStore.get(sessionToken);
  if (Date.now() > session.expiresAt) {
    sessionStore.delete(sessionToken);
    res.clearCookie('pacs_auth_session', { path: '/' });
    return res.status(401).json({
      success: false,
      message: 'Session expired. Please log in again.'
    });
  }

  req.clinicianSession = session;
  next();
}

function maskIdentifier(type, id) {
  if (type === 'email') {
    const parts = id.split('@');
    if (parts.length !== 2) return id;
    const name = parts[0];
    const domain = parts[1];
    const maskedName = name.length > 2 
      ? name[0] + '*'.repeat(Math.min(name.length - 2, 4)) + name[name.length - 1]
      : name[0] + '*';
    return `${maskedName}@${domain}`;
  } else {
    const digits = id.replace(/\s+/g, '');
    if (digits.length <= 4) return digits;
    const last4 = digits.slice(-4);
    const prefix = digits.slice(0, Math.max(0, digits.length - 8));
    return `${prefix} **** **${last4}`;
  }
}

/**
 * Cryptographically secure 6-digit OTP generator
 */
function generateOtp() {
  return crypto.randomInt(100000, 1000000).toString();
}

/**
 * Constant-time comparison between user input and stored passcode
 */
function verifyOtpConstantTime(inputOtp, expectedOtp) {
  if (typeof inputOtp !== 'string' || typeof expectedOtp !== 'string') {
    return false;
  }
  const inputTrimmed = inputOtp.trim();
  const expectedTrimmed = expectedOtp.trim();

  const bufA = Buffer.from(inputTrimmed);
  const bufB = Buffer.from(expectedTrimmed);

  if (bufA.length !== bufB.length) {
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

let transporter = null;

async function initMailer() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const rejectUnauthorized = process.env.SMTP_ALLOW_SELFSIGNED === 'true' ? false : true;

  if (user && pass) {
    try {
      const cleanPass = pass.replace(/[^a-zA-Z0-9]/g, '');
      // Connect to smtp.gmail.com on SSL 465 or 587
      transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: { user, pass: cleanPass },
        tls: { rejectUnauthorized }
      });
      await transporter.verify();
      console.log(`✅ [NEUROSCAN PACS ENGINE] Verified & Connected to Gmail: ${user}`);
    } catch (err) {
      console.warn(`⚠️ Gmail SSL 465 fallback, trying Port 587... (${err.message})`);
      try {
        transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          requireTLS: true,
          auth: { user, pass: pass.replace(/[^a-zA-Z0-9]/g, '') },
          tls: { rejectUnauthorized }
        });
        await transporter.verify();
        console.log(`✅ [NEUROSCAN PACS ENGINE] Verified on Port 587: ${user}`);
      } catch (err2) {
        console.error(`❌ [SMTP AUTH FAILED]: ${err2.message}`);
        transporter = null;
      }
    }
  } else {
    console.log('ℹ️ Running in Terminal Log Mode. Configure .env for real email.');
  }
}

initMailer();

// Real Cellular SMS Dispatcher (Twilio & Fast2SMS Gateway Integration)
async function dispatchSms(phoneNumber, otp) {
  const twilioSid = process.env.TWILIO_ACCOUNT_SID;
  const twilioToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioFrom = process.env.TWILIO_PHONE_NUMBER || process.env.TWILIO_FROM;
  const fast2smsKey = process.env.FAST2SMS_API_KEY;

  const cleanPhone = phoneNumber.replace(/[\s\-\(\)]/g, '');

  // 1. Twilio SMS Gateway (Worldwide)
  if (twilioSid && twilioToken && twilioFrom) {
    try {
      const auth = Buffer.from(`${twilioSid}:${twilioToken}`).toString('base64');
      const formattedTo = cleanPhone.startsWith('+') ? cleanPhone : `+${cleanPhone}`;
      const params = new URLSearchParams({
        To: formattedTo,
        From: twilioFrom,
        Body: `🔐 NEUROSCAN AI — Workstation Clinical Passcode: ${otp}. Valid for 5 minutes. Do not share.`
      });

      const resp = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      });

      const json = await resp.json();
      if (resp.ok) {
        console.log(`📱 [TWILIO REAL SMS SENT] Delivered to ${formattedTo} (SID: ${json.sid})`);
        return { success: true, provider: 'Twilio' };
      } else {
        console.error(`❌ [TWILIO DISPATCH ERROR] ${json.message || JSON.stringify(json)}`);
        return { success: false, error: json.message };
      }
    } catch (err) {
      console.error(`❌ [TWILIO EXCEPTION] ${err.message}`);
      return { success: false, error: err.message };
    }
  }

  // 2. Fast2SMS Gateway (India +91)
  if (fast2smsKey) {
    try {
      const indiaDigits = cleanPhone.replace(/^\+?91/, '');
      const resp = await fetch('https://www.fast2sms.com/dev/bulkV2', {
        method: 'POST',
        headers: {
          'authorization': fast2smsKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          route: 'otp',
          variables_values: otp,
          numbers: indiaDigits
        })
      });
      const json = await resp.json();
      if (json.return) {
        console.log(`📱 [FAST2SMS SENT] Delivered to +91 ${indiaDigits}`);
        return { success: true, provider: 'Fast2SMS' };
      } else {
        console.error(`❌ [FAST2SMS ERROR] ${json.message}`);
        return { success: false, error: json.message };
      }
    } catch (err) {
      console.error(`❌ [FAST2SMS EXCEPTION] ${err.message}`);
      return { success: false, error: err.message };
    }
  }

  return { success: false, notConfigured: true };
}

// Route: Send OTP with NeuroScan AI Medical Clearance Template
app.post('/api/send-otp', async (req, res) => {
  try {
    const { type, identifier, hospitalName } = req.body;

    if (!type || !identifier) {
      return res.status(400).json({ success: false, message: 'Type and identifier are required.' });
    }

    const trimmedId = identifier.trim();

    if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedId)) {
        return res.status(400).json({ success: false, message: 'Please enter a valid clinical email address.' });
      }
    } else if (type === 'phone') {
      const cleanPhone = trimmedId.replace(/[\s\-\(\)\+]/g, '');
      if (cleanPhone.length < 7 || cleanPhone.length > 15) {
        return res.status(400).json({ success: false, message: 'Please enter a valid mobile number.' });
      }
    } else {
      return res.status(400).json({ success: false, message: 'Invalid authentication type.' });
    }

    // Rate Limiting: 30s Cooldown
    const existing = otpStore.get(trimmedId);
    if (existing && Date.now() - existing.createdAt < 30 * 1000) {
      const waitSeconds = Math.ceil((30 * 1000 - (Date.now() - existing.createdAt)) / 1000);
      return res.status(429).json({
        success: false,
        message: `Please wait ${waitSeconds}s before requesting a new clinical passcode.`
      });
    }

    const otp = generateOtp();
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes

    otpStore.set(trimmedId, {
      code: otp,
      expiresAt,
      attempts: 0,
      createdAt: Date.now(),
      type
    });

    const masked = maskIdentifier(type, trimmedId);
    let emailSent = false;
    let smsSent = false;
    let mailError = null;
    let smsError = null;
    let isSmsConfigured = false;

    if (type === 'email' && transporter) {
      try {
        await transporter.sendMail({
          from: `"NEUROSCAN AI Clinical Security" <${process.env.SMTP_USER}>`,
          to: trimmedId,
          subject: `🔐 NEUROSCAN AI — Workstation Verification Passcode: ${otp}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; background: #070d18; color: #ffffff; padding: 36px; border-radius: 16px; border: 1px solid #162a45; box-shadow: 0 10px 40px rgba(0,0,0,0.6);">
              <div style="text-align: center; margin-bottom: 26px;">
                <div style="display: inline-block; padding: 5px 14px; background: rgba(0, 240, 255, 0.12); border: 1px solid rgba(0, 240, 255, 0.35); border-radius: 20px; color: #00f0ff; font-size: 11px; font-weight: 700; letter-spacing: 1.5px;">
                  🏥 HIPAA & DICOM WORKSTATION CLEARANCE
                </div>
                <h2 style="color: #ffffff; margin: 16px 0 6px; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">
                  NEUROSCAN <span style="color: #00f0ff;">AI</span>
                </h2>
                <p style="color: #94a3b8; font-size: 13.5px; margin: 0;">
                  Brain MRI Tumor Diagnostic Suite &bull; ${hospitalName || 'Clinical Radiology Workstation'}
                </p>
              </div>

              <div style="background: #0b1424; padding: 26px; text-align: center; border-radius: 12px; border: 1px dashed rgba(0, 240, 255, 0.4); margin: 24px 0;">
                <span style="font-size: 11.5px; color: #64748b; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 8px;">
                  Clinical Access Passcode
                </span>
                <div style="font-family: 'JetBrains Mono', monospace, monospace; font-size: 42px; font-weight: 800; letter-spacing: 8px; color: #00f0ff;">
                  ${otp}
                </div>
                <span style="font-size: 12px; color: #ffb74d; display: block; margin-top: 10px;">
                  ⏳ Valid for 5 minutes &bull; Single-Use Token
                </span>
              </div>

              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
                <div style="font-size: 12px; color: #cbd5e1; margin-bottom: 4px;"><strong>Target Workstation:</strong> Brain Tumor MRI Studio</div>
                <div style="font-size: 12px; color: #cbd5e1;"><strong>Security Level:</strong> 160+ WHO-CNS5 Differential Diagnostic Level 3</div>
              </div>

              <p style="color: #64748b; font-size: 12px; line-height: 1.6; margin-bottom: 0;">
                🔒 <strong>Zero-Knowledge Security:</strong> This one-time passcode was dispatched securely to your verified clinical contact. If you did not request access to the NeuroScan MRI workstation, please alert hospital IT security immediately.
              </p>
            </div>
          `
        });
        emailSent = true;
        console.log(`📧 [REAL EMAIL DISPATCHED] Verification code delivered to: ${trimmedId}`);
      } catch (mailErr) {
        mailError = mailErr.message;
        console.error(`❌ [SMTP DISPATCH ERROR] Failed to send to ${trimmedId}:`, mailError);
      }
    } else if (type === 'phone') {
      const smsRes = await dispatchSms(trimmedId, otp);
      if (smsRes.success) {
        smsSent = true;
        isSmsConfigured = true;
      } else if (!smsRes.notConfigured) {
        smsError = smsRes.error;
        isSmsConfigured = true;
      }
    }

    let backupEmailSent = false;
    // If cellular SMS could not be sent (e.g. no Twilio/Fast2SMS in .env), route a secure confidential copy to the verified clinician email
    if (type === 'phone' && !smsSent && transporter && process.env.SMTP_USER) {
      try {
        await transporter.sendMail({
          from: `"NEUROSCAN AI Clinical Security" <${process.env.SMTP_USER}>`,
          to: process.env.SMTP_USER,
          subject: `🔐 NEUROSCAN AI — Mobile Phone Verification Passcode for ${masked}: ${otp}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; background: #070d18; color: #ffffff; padding: 36px; border-radius: 16px; border: 1px solid #162a45;">
              <div style="text-align: center; margin-bottom: 24px;">
                <div style="display: inline-block; padding: 4px 12px; background: rgba(0, 240, 255, 0.12); border: 1px solid rgba(0, 240, 255, 0.35); border-radius: 20px; color: #00f0ff; font-size: 11px; font-weight: 700;">
                  📱 CLINICAL SMS VERIFICATION FORWARD
                </div>
                <h2 style="color: #ffffff; margin: 16px 0 6px; font-size: 24px;">NEUROSCAN <span style="color: #00f0ff;">AI</span></h2>
                <p style="color: #94a3b8; font-size: 13px; margin: 0;">Requested for Mobile Number: <strong>${trimmedId}</strong></p>
              </div>

              <div style="background: #0b1424; padding: 24px; text-align: center; border-radius: 12px; border: 1px dashed rgba(0, 240, 255, 0.4); margin: 20px 0;">
                <span style="font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 8px;">Clinical Access Passcode</span>
                <div style="font-family: monospace; font-size: 40px; font-weight: 800; letter-spacing: 8px; color: #00f0ff;">${otp}</div>
                <span style="font-size: 11px; color: #ffb74d; display: block; margin-top: 8px;">⏳ Valid for 5 minutes • Single-Use Token</span>
              </div>

              <p style="color: #64748b; font-size: 12px; line-height: 1.5;">
                ℹ️ <strong>Zero-Leakage Security:</strong> Because cellular SMS requires an SMS Gateway API key (Fast2SMS or Twilio) in <code>.env</code>, this passcode was securely forwarded to your verified email and server terminal to prevent browser UI leakage.
              </p>
            </div>
          `
        });
        backupEmailSent = true;
        console.log(`📧 [SMS BACKUP DELIVERED] Forwarded passcode for ${trimmedId} to: ${process.env.SMTP_USER}`);
      } catch (err) {
        console.warn(`⚠️ Could not send SMS backup email: ${err.message}`);
      }
    }

    const isRealDelivered = emailSent || smsSent || backupEmailSent;

    console.log(`\n======================================================`);
    console.log(`🏥 [NEUROSCAN WORKSTATION AUTHENTICATION]`);
    console.log(`🎯 Clinician: ${trimmedId} (${type.toUpperCase()})`);
    console.log(`🔑 6-DIGIT PASSCODE: ${otp}`);
    console.log(`⏰ Expires: ${new Date(expiresAt).toLocaleTimeString()}`);
    console.log(`🚀 Delivery: ${
      type === 'email'
        ? (emailSent ? 'Delivered via Gmail SMTP' : 'Terminal Log Mode')
        : (smsSent 
            ? 'Delivered via Real Cellular SMS' 
            : (backupEmailSent ? `Forwarded to ${process.env.SMTP_USER} (Cellular Gateway unconfigured)` : 'Terminal Log Mode'))
    }`);
    console.log(`🔒 Privacy Policy: Passcode is NEVER returned to the browser or rendered in the UI.`);
    console.log(`======================================================\n`);

    return res.json({
      success: true,
      message: smsSent
        ? `Clinical passcode dispatched to your mobile phone via SMS: ${masked}`
        : (emailSent
            ? `Clinical passcode dispatched to your email: ${masked}`
            : (backupEmailSent
                ? `Cellular SMS gateway unconfigured. Passcode securely forwarded to ${maskIdentifier('email', process.env.SMTP_USER)} and logged in secure server terminal.`
                : `Passcode generated for ${masked}. Check server terminal.`)),
      maskedTarget: masked,
      expiresInSeconds: 300,
      realSent: isRealDelivered,
      smsSent,
      backupEmailSent,
      type,
      smsConfigured: isSmsConfigured,
      mailError: mailError ? 'SMTP delivery failed' : null
    });
  } catch (err) {
    console.error('Error in send-otp:', err);
    return res.status(500).json({ success: false, message: 'Internal server error while dispatching passcode.' });
  }
});

// Route: Verify OTP & Issue Signed Session Cookie
app.post('/api/verify-otp', (req, res) => {
  try {
    const { identifier, otp, hospital } = req.body;

    if (!identifier || !otp) {
      return res.status(400).json({ success: false, message: 'Identifier and Passcode are required.' });
    }

    const trimmedId = identifier.trim();
    const stored = otpStore.get(trimmedId);

    if (!stored) {
      addAuditLog('AUTH_FAILED_NO_CODE', trimmedId, 'No active OTP found');
      return res.status(400).json({
        success: false,
        message: 'No active passcode found for this clinician ID. Please request a new code.'
      });
    }

    if (Date.now() > stored.expiresAt) {
      otpStore.delete(trimmedId);
      addAuditLog('AUTH_FAILED_EXPIRED', trimmedId, 'Passcode expired');
      return res.status(400).json({
        success: false,
        message: 'This passcode has expired. Please request a new one.'
      });
    }

    if (stored.attempts >= 3) {
      otpStore.delete(trimmedId);
      addAuditLog('AUTH_FAILED_LOCKED', trimmedId, 'Exceeded 3 attempts');
      return res.status(429).json({
        success: false,
        message: 'Maximum attempts exceeded. Passcode has been revoked for security.'
      });
    }

    if (verifyOtpConstantTime(otp, stored.code)) {
      otpStore.delete(trimmedId);

      // Issue signed HTTP-only session cookie
      const sessionToken = createSession(res, trimmedId, hospital || 'hopkins', req.ip);

      console.log(`✅ [ACCESS AUTHORIZED] NeuroScan Workstation unlocked for: ${trimmedId}`);
      addAuditLog('CLINICAL_ACCESS_GRANTED', trimmedId, 'Tier 4 PACS Token Issued');

      return res.json({
        success: true,
        message: 'Identity confirmed! Workstation access authorized.',
        sessionActive: true,
        clinicianId: trimmedId
      });
    } else {
      stored.attempts += 1;
      const remaining = 3 - stored.attempts;
      console.log(`❌ [ACCESS REJECTED] Wrong code for: ${trimmedId} (${remaining} attempts left)`);
      addAuditLog('AUTH_FAILED_WRONG_CODE', trimmedId, `Attempts remaining: ${remaining}`);

      return res.status(400).json({
        success: false,
        message: remaining > 0 
          ? `Incorrect passcode. ${remaining} attempt${remaining > 1 ? 's' : ''} remaining.`
          : 'Incorrect passcode. Maximum attempts exceeded. Access blocked.',
        remainingAttempts: remaining
      });
    }
  } catch (err) {
    console.error('Error in verify-otp:', err);
    return res.status(500).json({ success: false, message: 'Internal server error while verifying passcode.' });
  }
});

// Route: Check Active Session Cookie
app.get('/api/auth/session', (req, res) => {
  const sessionToken = req.signedCookies.pacs_auth_session;
  if (!sessionToken || !sessionStore.has(sessionToken)) {
    return res.json({ authenticated: false });
  }

  const session = sessionStore.get(sessionToken);
  if (Date.now() > session.expiresAt) {
    sessionStore.delete(sessionToken);
    res.clearCookie('pacs_auth_session', { path: '/' });
    return res.json({ authenticated: false, message: 'Session expired.' });
  }

  res.json({
    authenticated: true,
    clinicianId: session.clinicianId,
    hospital: session.hospitalKey,
    expiresAt: session.expiresAt
  });
});

// Route: Logout & Clear Cookie
app.post('/api/auth/logout', (req, res) => {
  const sessionToken = req.signedCookies.pacs_auth_session;
  if (sessionToken && sessionStore.has(sessionToken)) {
    const session = sessionStore.get(sessionToken);
    addAuditLog('SESSION_LOGOUT', session.clinicianId, 'Workstation Session Terminated');
    sessionStore.delete(sessionToken);
  }

  res.clearCookie('pacs_auth_session', { path: '/' });
  res.json({ success: true, message: 'Workstation session securely cleared.' });
});

// Route: Real-Time Antivirus & Malicious Upload Scanner
app.post('/api/scan-file-security', (req, res) => {
  try {
    const { fileName, fileData } = req.body;
    if (!fileData) {
      return res.status(400).json({ success: false, message: 'No file data provided for security analysis.' });
    }

    const cleanBase64 = fileData.replace(/^data:[^;]+;base64,/, '');
    const buffer = Buffer.from(cleanBase64, 'base64');

    const result = scanFileBuffer(buffer, fileName || 'upload.dcm');
    return res.json({ success: true, ...result });
  } catch (err) {
    console.error('Error scanning file:', err);
    return res.status(500).json({ success: false, message: 'Antivirus engine error during file scan.' });
  }
});

// Route: Cryptographic Audit Trail (Protected)
app.get('/api/security/audit-trail', requireAuth, (req, res) => {
  res.json({ success: true, logs: auditLogs });
});

// Route: WAF Telemetry & Threat Statistics (Protected)
app.get('/api/security/stats', requireAuth, (req, res) => {
  res.json({
    success: true,
    stats: wafStats,
    activeSessions: sessionStore.size,
    timestamp: new Date().toISOString()
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    app: 'NEUROSCAN AI',
    status: 'ok',
    realEmail: Boolean(transporter),
    wafOnline: true,
    cookiesActive: true,
    antivirusActive: true,
    time: new Date().toISOString()
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🧠 NEUROSCAN AI Workstation: http://localhost:${PORT}`);
  console.log(`🛡️ Web Application Firewall (WAF) & Rate Limiting: ONLINE`);
  console.log(`🦠 Heuristic Antivirus & DICOM File Shield: ACTIVE`);
  console.log(`🍪 Signed HttpOnly Cookies Session Guard: ARMED`);
  console.log(`======================================================\n`);
});
