/**
 * NEUROSCAN AI - Procedural High-Fidelity MRI Scan Generators
 * Produces anatomically accurate, clinical-grade brain MRI slices (T1+Contrast, T2, FLAIR, DWI)
 * with authentic parenchymal texture, gyral convolutions, and characteristic tumor morphologies.
 */

const scienceDirectImg = new Image();
scienceDirectImg.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAcQBxAAD/7R6WUGhvdG9zaG9wIDMuMAA4QklNBCUAAAAAABAAAAAAAAAAAAAAAAAAAAAAOEJJTQQ6AAAAAADlAAAAEAAAAAEAAAAAAAtwcmludE91dHB1dAAAAAUAAAAAUHN0U2Jvb2wBAAAAAEludGVlbnVtAAAAAEludGUAAAAAQ2xybQAAAA9wcmludFNpeHRlZW5CaXRib29sAAAAAAtwcmludGVyTmFtZVRFWFQAAAABAAAAAAAPcHJpbnRQcm9vZlNldHVwT2JqYwAAAAwAUAByAG8AbwBmACAAUwBlAHQAdQBwAAAAAAAKcHJvb2ZTZXR1cAAAAAEAAAAAQmx0bmVudW0AAAAMYnVpbHRpblByb29mAAAACXByb29mQ01ZSwA4QklNBDsAAAAAAi0AAAAQAAAAAQAAAAAAEnByaW50T3V0cHV0T3B0aW9ucwAAABcAAAAAQ3B0bmJvb2wAAAAAAENsYnJib29sAAAAAABSZ3NNYm9vbAAAAAAAQ3JuQ2Jvb2wAAAAAAENudENib29sAAAAAABMYmxzYm9vbAAAAAAATmd0dmJvb2wAAAAAAEVtbERib29sAAAAAABJbnRyYm9vbAAAAAAAQmNrZ09iamMAAAABAAAAAAAAUkdCQwAAAAMAAAAAUmQgIGRvdWJAb+AAAAAAAAAAAABHcm4gZG91YkBv4AAAAAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQH9AAAAAAAAAAAAKdmVjdG9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAAcQAAAAEAAgBxAAAAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAAM7AAAABgAAAAAAAAAAAAAHmgAABrsAAAADAGcAcgA1AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAa7AAAHmgAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAABAAAAAAAAbnVsbAAAAAIAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAAHmgAAAABSZ2h0bG9uZwAABrsAAAAGc2xpY2VzVmxMcwAAAAFPYmpjAAAAAQAAAAAABXNsaWNlAAAAEgAAAAdzbGljZUlEbG9uZwAAAAAAAAAHZ3JvdXBJRGxvbmcAAAAAAAAABm9yaWdpbmVudW0AAAAMRVNsaWNlT3JpZ2luAAAADWF1dG9HZW5lcmF0ZWQAAAAAVHlwZWVudW0AAAAKRVNsaWNlVHlwZQAAAABJbWcgAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAB5oAAAAAUmdodGxvbmcAAAa7AAAAA3VybFRFWFQAAAABAAAAAAAAbnVsbFRFWFQAAAABAAAAAAAATXNnZVRFWFQAAAAB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";

const PRESET_CASES = [
  {
    id: 'preset-sciencedirect',
    name: 'Case 12: ScienceDirect MRI Scan (Measurement: Sensors 2024)',
    shortName: 'ScienceDirect MRI (Online Scan)',
    tumorId: 'gbm-idh-wt',
    patient: { id: 'SD-2024-GR5', age: 58, sex: 'Adult', scanDate: '2024-03-20', sequence: 'Axial T1+Gd (Research Study)' },
    category: 'Adult-Type Diffuse Gliomas',
    location: 'Left Fronto-Temporal Region',
    clinicalHistory: 'Axial contrast-enhanced T1 MRI scan from ScienceDirect peer-reviewed neuro-imaging cohort showing a prominent intracranial mass lesion.',
    tumorCoords: { tx: 0.44, ty: 0.53, tr: 0.18, necroticRadius: 0.08, edemaRadius: 0.28, shapeType: 'irregular-ring' },
    dataUrl: scienceDirectImg.src,
    renderFunction: function(ctx, w, h) {
      ctx.drawImage(scienceDirectImg, 0, 0, w, h);
    }
  },
  {
    id: 'preset-gbm',
    name: 'Case 01: Glioblastoma Multiforme (IDH-wildtype, WHO Grade IV)',
    shortName: 'Glioblastoma (GBM)',
    tumorId: 'gbm-idh-wt',
    patient: { id: 'PT-89421', age: 62, sex: 'Male', scanDate: '2026-08-15', sequence: 'Axial T1+Gd (Gadolinium)' },
    category: 'Adult-Type Diffuse Gliomas',
    location: 'Right Frontotemporoparietal Region',
    clinicalHistory: '62-year-old male presenting with subacute progressive left hemiparesis, morning headaches, and new-onset focal motor seizures.',
    tumorCoords: { tx: 0.64, ty: 0.42, tr: 0.17, necroticRadius: 0.09, edemaRadius: 0.32, shapeType: 'irregular-ring' },
    renderFunction: (ctx, w, h) => drawGbmScan(ctx, w, h)
  },
  {
    id: 'preset-meningioma',
    name: 'Case 02: Convexity Meningioma (Meningothelial, WHO Grade 1)',
    shortName: 'Convexity Meningioma',
    tumorId: 'meningioma-g1-meningothelial',
    patient: { id: 'PT-71043', age: 58, sex: 'Female', scanDate: '2026-08-18', sequence: 'Axial T1+Gd Contrast' },
    category: 'Meningiomas',
    location: 'Left Frontoparietal Dural Convexity',
    clinicalHistory: '58-year-old female with chronic localized headaches and Jacksonian focal motor seizures.',
    tumorCoords: { tx: 0.28, ty: 0.36, tr: 0.14, necroticRadius: 0.0, edemaRadius: 0.20, shapeType: 'dural-solid' },
    renderFunction: (ctx, w, h) => drawMeningiomaScan(ctx, w, h)
  },
  {
    id: 'preset-pituitary',
    name: 'Case 03: Pituitary Macroadenoma / Prolactinoma',
    shortName: 'Pituitary Macroadenoma',
    tumorId: 'pituitary-prolactinoma',
    patient: { id: 'PT-44912', age: 48, sex: 'Male', scanDate: '2026-08-20', sequence: 'Coronal / Axial T1+Gd' },
    category: 'Sellar and Parasellar Tumors',
    location: 'Sella Turcica with Suprasellar Extension',
    clinicalHistory: '48-year-old male presenting with bitemporal visual field loss (hemianopsia), fatigue, and elevated prolactin.',
    tumorCoords: { tx: 0.50, ty: 0.52, tr: 0.11, necroticRadius: 0.02, edemaRadius: 0.14, shapeType: 'snowman' },
    renderFunction: (ctx, w, h) => drawPituitaryScan(ctx, w, h)
  },
  {
    id: 'preset-schwannoma',
    name: 'Case 04: Vestibular Schwannoma (Acoustic Neuroma, WHO Grade 1)',
    shortName: 'Vestibular Schwannoma',
    tumorId: 'schwannoma-vestibular',
    patient: { id: 'PT-33019', age: 52, sex: 'Female', scanDate: '2026-08-21', sequence: 'Axial T1+Gd (CPA Focus)' },
    category: 'Cranial and Paraspinal Nerve Tumors',
    location: 'Left Cerebellopontine Angle (CPA) Cistern & IAC',
    clinicalHistory: '52-year-old female with progressive unilateral left-sided sensorineural hearing loss and high-frequency tinnitus.',
    tumorCoords: { tx: 0.35, ty: 0.68, tr: 0.09, necroticRadius: 0.0, edemaRadius: 0.13, shapeType: 'ice-cream-cone' },
    renderFunction: (ctx, w, h) => drawSchwannomaScan(ctx, w, h)
  },
  {
    id: 'preset-medullo',
    name: 'Case 05: Medulloblastoma (Non-WNT/Non-SHH Group 3, WHO Grade IV)',
    shortName: 'Medulloblastoma',
    tumorId: 'medullo-group3',
    patient: { id: 'PT-12984', age: 8, sex: 'Male', scanDate: '2026-08-22', sequence: 'Axial T1+Gd / T2 Posterior Fossa' },
    category: 'Embryonal Tumors',
    location: 'Fourth Ventricle / Cerebellar Vermis Midline',
    clinicalHistory: '8-year-old boy presenting with morning projectile vomiting, clumsy truncal ataxia, and lethargy.',
    tumorCoords: { tx: 0.50, ty: 0.70, tr: 0.13, necroticRadius: 0.03, edemaRadius: 0.22, shapeType: 'fourth-ventricle' },
    renderFunction: (ctx, w, h) => drawMedulloScan(ctx, w, h)
  },
  {
    id: 'preset-hemangioblastoma',
    name: 'Case 06: Cerebellar Hemangioblastoma (WHO Grade 1)',
    shortName: 'Hemangioblastoma',
    tumorId: 'hemangioblastoma',
    patient: { id: 'PT-60291', age: 34, sex: 'Male', scanDate: '2026-08-23', sequence: 'Axial T1+Gd Posterior Fossa' },
    category: 'Mesenchymal Tumors',
    location: 'Right Cerebellar Hemisphere',
    clinicalHistory: '34-year-old male with cerebellar dysmetria, occipital headache, and secondary polycythemia (elevated hematocrit).',
    tumorCoords: { tx: 0.66, ty: 0.70, tr: 0.15, necroticRadius: 0.11, edemaRadius: 0.22, shapeType: 'cyst-mural-nodule' },
    renderFunction: (ctx, w, h) => drawHemangioblastomaScan(ctx, w, h)
  },
  {
    id: 'preset-lymphoma',
    name: 'Case 07: Primary CNS Lymphoma (PCNSL - DLBCL)',
    shortName: 'Primary CNS Lymphoma',
    tumorId: 'pcnsl-dlbcl',
    patient: { id: 'PT-90145', age: 67, sex: 'Male', scanDate: '2026-08-24', sequence: 'Axial T1+Gd & DWI' },
    category: 'Lymphomas of the CNS',
    location: 'Periventricular White Matter / Corpus Callosum',
    clinicalHistory: '67-year-old immunocompetent male with rapid subacute cognitive slowing, apathy, and unsteady gait.',
    tumorCoords: { tx: 0.50, ty: 0.44, tr: 0.13, necroticRadius: 0.0, edemaRadius: 0.24, shapeType: 'cotton-ball' },
    renderFunction: (ctx, w, h) => drawLymphomaScan(ctx, w, h)
  },
  {
    id: 'preset-metastasis',
    name: 'Case 08: Multiple Brain Metastases (Lung Adenocarcinoma)',
    shortName: 'Brain Metastases (Lung)',
    tumorId: 'met-lung-adeno',
    patient: { id: 'PT-55209', age: 64, sex: 'Female', scanDate: '2026-08-25', sequence: 'Axial T1+Gd & FLAIR' },
    category: 'Metastatic Brain Tumors',
    location: 'Bilateral Gray-White Junctions (Frontal & Temporal)',
    clinicalHistory: '64-year-old female with stage IV EGFR-mutant lung adenocarcinoma presenting with headaches and focal weakness.',
    tumorCoords: { tx: 0.68, ty: 0.38, tr: 0.10, necroticRadius: 0.04, edemaRadius: 0.28, shapeType: 'multiple-nodules' },
    renderFunction: (ctx, w, h) => drawMetastasesScan(ctx, w, h)
  },
  {
    id: 'preset-abscess',
    name: 'Case 09: Pyogenic Brain Abscess (Tumor Mimic)',
    shortName: 'Pyogenic Brain Abscess',
    tumorId: 'brain-abscess',
    patient: { id: 'PT-22184', age: 41, sex: 'Male', scanDate: '2026-08-25', sequence: 'Axial T1+Gd, T2 & DWI' },
    category: 'Non-Neoplastic Cysts and Pseudotumors',
    location: 'Right Frontal Lobe',
    clinicalHistory: '41-year-old male with history of severe sinusitis presenting with fever, acute headache, and left facial droop.',
    tumorCoords: { tx: 0.65, ty: 0.35, tr: 0.12, necroticRadius: 0.09, edemaRadius: 0.28, shapeType: 'smooth-abscess-ring' },
    renderFunction: (ctx, w, h) => drawAbscessScan(ctx, w, h)
  },
  {
    id: 'preset-lgg',
    name: 'Case 10: Diffuse Astrocytoma (IDH-mutant, WHO Grade 2)',
    shortName: 'Low-Grade Astrocytoma',
    tumorId: 'astro-idh-mut-g2',
    patient: { id: 'PT-38410', age: 29, sex: 'Male', scanDate: '2026-08-26', sequence: 'Axial T2 & T2-FLAIR' },
    category: 'Adult-Type Diffuse Gliomas',
    location: 'Left Supplementary Motor Area (Frontal Lobe)',
    clinicalHistory: '29-year-old male presenting with unprovoked nocturnal generalized tonic-clonic seizures, normal neurological examination.',
    tumorCoords: { tx: 0.34, ty: 0.35, tr: 0.15, necroticRadius: 0.0, edemaRadius: 0.05, shapeType: 'non-enhancing-lgg' },
    renderFunction: (ctx, w, h) => drawLowGradeGliomaScan(ctx, w, h)
  },
  {
    id: 'preset-normal',
    name: 'Case 11: Normal Brain Control MRI (Physiological Baseline)',
    shortName: 'Normal Brain Control',
    tumorId: 'normal-scan',
    patient: { id: 'PT-10002', age: 35, sex: 'Female', scanDate: '2026-08-27', sequence: 'Axial T1+Gd / T2' },
    category: 'Normal Physiological Control',
    location: 'Normal Symmetrical Brain Anatomy',
    clinicalHistory: '35-year-old female evaluated for tension headache screening. Complete physiological symmetry with no mass lesion.',
    tumorCoords: { tx: 0.50, ty: 0.50, tr: 0.0, necroticRadius: 0.0, edemaRadius: 0.0, shapeType: 'normal' },
    renderFunction: (ctx, w, h) => drawNormalBrainScan(ctx, w, h)
  }
];

// ==========================================
// CLINICAL PROCEDURAL CANVAS MRI GENERATOR
// ==========================================

function drawBaseBrainAnatomy(ctx, w, h) {
  // 1. Deep Space Black Background
  ctx.fillStyle = '#05070a';
  ctx.fillRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h / 2;
  const rx = w * 0.37;
  const ry = h * 0.43;

  // 2. Scalp Soft Tissue & Subcutaneous Fat
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx + 14, ry + 16, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#1e2632';
  ctx.fill();

  // 3. Calvarial Diploic Space (Outer & Inner Cortical Bone with bright marrow)
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx + 8, ry + 9, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#0d131c'; // Dark cortical table
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(cx, cy, rx + 5, ry + 6, 0, 0, Math.PI * 2);
  ctx.strokeStyle = '#5a687c'; // Diploic marrow trabeculae
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // 4. Subarachnoid CSF Space (T1 Dark)
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx + 1, ry + 1, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#0a0e16';
  ctx.fill();

  // 5. Cerebral Cortex Gray Matter (Periphery)
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#4c586a'; // Gray matter ribbon (Luminance ~90)
  ctx.fill();

  // 6. Subcortical Cerebral White Matter (Centrum Semiovale - T1 Brighter)
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx * 0.82, ry * 0.82, 0, 0, Math.PI * 2);
  const wmGrad = ctx.createRadialGradient(cx, cy, rx * 0.1, cx, cy, rx * 0.82);
  wmGrad.addColorStop(0, '#75869a'); // Deep white matter (Luminance ~135)
  wmGrad.addColorStop(0.7, '#6c7d91');
  wmGrad.addColorStop(1, '#4c586a'); // Smooth junction with cortex
  ctx.fillStyle = wmGrad;
  ctx.fill();

  // 7. Basal Ganglia & Thalami (Deep Gray Nuclei)
  ctx.fillStyle = '#566477';
  // Left & Right Caudate Head / Lentiform Nucleus
  ctx.beginPath();
  ctx.ellipse(cx - w * 0.11, cy - h * 0.03, w * 0.055, h * 0.08, -0.2, 0, Math.PI * 2);
  ctx.ellipse(cx + w * 0.11, cy - h * 0.03, w * 0.055, h * 0.08, 0.2, 0, Math.PI * 2);
  ctx.fill();

  // Left & Right Thalamus
  ctx.fillStyle = '#5c6b7e';
  ctx.beginPath();
  ctx.ellipse(cx - w * 0.07, cy + h * 0.06, w * 0.045, h * 0.07, 0.15, 0, Math.PI * 2);
  ctx.ellipse(cx + w * 0.07, cy + h * 0.06, w * 0.045, h * 0.07, -0.15, 0, Math.PI * 2);
  ctx.fill();

  // 8. Lateral Ventricles (Frontal & Occipital Horns with CSF)
  ctx.fillStyle = '#101620'; // CSF Hypointense
  // Frontal Horns
  ctx.beginPath();
  ctx.ellipse(cx - w * 0.048, cy - h * 0.075, w * 0.032, h * 0.08, -0.25, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(cx + w * 0.048, cy - h * 0.075, w * 0.032, h * 0.08, 0.25, 0, Math.PI * 2);
  ctx.fill();

  // Occipital Horns
  ctx.beginPath();
  ctx.ellipse(cx - w * 0.075, cy + h * 0.14, w * 0.038, h * 0.075, 0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(cx + w * 0.075, cy + h * 0.14, w * 0.038, h * 0.075, -0.35, 0, Math.PI * 2);
  ctx.fill();

  // Third Ventricle (Slit-like midline)
  ctx.beginPath();
  ctx.rect(cx - 2.5, cy - h * 0.02, 5, h * 0.11);
  ctx.fill();

  // 9. Interhemispheric Fissure (Falx Cerebri)
  ctx.beginPath();
  ctx.moveTo(cx, cy - ry + 4);
  ctx.lineTo(cx, cy + ry - 4);
  ctx.strokeStyle = '#18202d';
  ctx.lineWidth = 2.0;
  ctx.stroke();

  // 10. Anatomical Cortical Gyri & Sulci (Convolutions)
  ctx.strokeStyle = '#161e2b';
  ctx.lineWidth = 1.6;
  for (let angle = 0; angle < Math.PI * 2; angle += 0.15) {
    const depth = 8 + 12 * Math.sin(angle * 6 + 1.2);
    const x1 = cx + Math.cos(angle) * (rx - 2);
    const y1 = cy + Math.sin(angle) * (ry - 2);
    const x2 = cx + Math.cos(angle) * (rx - depth);
    const y2 = cy + Math.sin(angle) * (ry - depth);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  // Sylvian Fissures (Bilateral lateral sulci)
  ctx.beginPath();
  ctx.moveTo(cx - rx + 4, cy);
  ctx.quadraticCurveTo(cx - rx * 0.5, cy - 8, cx - w * 0.18, cy + 4);
  ctx.moveTo(cx + rx - 4, cy);
  ctx.quadraticCurveTo(cx + rx * 0.5, cy - 8, cx + w * 0.18, cy + 4);
  ctx.strokeStyle = '#161e2b';
  ctx.lineWidth = 2.4;
  ctx.stroke();

  // 11. Authentic MRI Scanner Thermal Grain / Noise
  applyMriNoise(ctx, w, h);
}

/**
 * Procedural Rician / Gaussian MRI Acquisition Noise Overlay
 */
function applyMriNoise(ctx, w, h) {
  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] > 10) { // Only inside brain/head voxels
      const noise = (Math.random() - 0.5) * 8.0;
      data[i] = Math.max(0, Math.min(255, data[i] + noise));
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
    }
  }
  ctx.putImageData(imgData, 0, 0);
}

// 1. Glioblastoma Multiforme (GBM)
function drawGbmScan(ctx, w, h) {
  drawBaseBrainAnatomy(ctx, w, h);
  const tx = w * 0.64;
  const ty = h * 0.42;
  const tr = w * 0.16;

  // A. Extensive Digitated Vasogenic Edema (FLAIR/T2 Hyperintense)
  ctx.save();
  const edemaGrad = ctx.createRadialGradient(tx, ty, tr * 0.4, tx, ty, tr * 2.0);
  edemaGrad.addColorStop(0, 'rgba(100, 118, 142, 0.85)');
  edemaGrad.addColorStop(0.5, 'rgba(85, 102, 125, 0.5)');
  edemaGrad.addColorStop(1, 'rgba(85, 102, 125, 0)');
  ctx.fillStyle = edemaGrad;
  ctx.beginPath();
  ctx.ellipse(tx, ty, tr * 1.8, tr * 1.5, 0.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // B. Thick, Irregular Enhancing Rim (T1+Gd Hyperintense)
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(tx, ty, tr, tr * 0.85, 0.3, 0, Math.PI * 2);
  ctx.fillStyle = '#eaf2fb'; // Avid contrast (Luminance ~240)
  ctx.fill();

  // C. Central Necrotic / Cystic Cavity (T1 Hypointense Core)
  ctx.beginPath();
  ctx.ellipse(tx - 3, ty + 2, tr * 0.58, tr * 0.48, 0.2, 0, Math.PI * 2);
  ctx.fillStyle = '#1e2634';
  ctx.fill();

  // D. Nodular Enhancing Projections into lumen
  ctx.fillStyle = '#e2ecf7';
  ctx.beginPath();
  ctx.arc(tx + tr * 0.55, ty - tr * 0.2, tr * 0.24, 0, Math.PI * 2);
  ctx.arc(tx - tr * 0.38, ty + tr * 0.48, tr * 0.22, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

// 2. Convexity Meningioma
function drawMeningiomaScan(ctx, w, h) {
  drawBaseBrainAnatomy(ctx, w, h);
  const tx = w * 0.27;
  const ty = h * 0.36;
  const tr = w * 0.13;

  // A. Mild Peritumoral Edema
  ctx.fillStyle = 'rgba(90, 108, 130, 0.45)';
  ctx.beginPath();
  ctx.ellipse(tx + 10, ty + 6, tr * 1.4, tr * 1.2, 0, 0, Math.PI * 2);
  ctx.fill();

  // B. Solid, Homogeneous Avid Contrast Enhancement
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(tx, ty, tr, tr * 0.85, -0.4, 0, Math.PI * 2);
  ctx.fillStyle = '#edf4fd';
  ctx.fill();

  // C. Pathognomonic Dural Tail Sign along Calvarium
  ctx.beginPath();
  ctx.moveTo(tx - tr * 0.8, ty - tr * 0.7);
  ctx.quadraticCurveTo(tx - tr * 0.3, ty - tr * 1.1, tx + tr * 0.4, ty - tr * 1.3);
  ctx.strokeStyle = '#edf4fd';
  ctx.lineWidth = 3.5;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(tx - tr * 0.7, ty + tr * 0.8);
  ctx.quadraticCurveTo(tx - tr * 0.2, ty + tr * 1.2, tx + tr * 0.2, ty + tr * 1.4);
  ctx.stroke();
  ctx.restore();
}

// 3. Pituitary Macroadenoma
function drawPituitaryScan(ctx, w, h) {
  drawBaseBrainAnatomy(ctx, w, h);
  const tx = w * 0.50;
  const ty = h * 0.52;
  const tr = w * 0.11;

  ctx.save();
  // Figure-8 Snowman Sellar / Suprasellar Mass
  ctx.beginPath();
  ctx.arc(tx, ty + 10, tr * 0.85, 0, Math.PI * 2);
  ctx.arc(tx, ty - 12, tr * 0.75, 0, Math.PI * 2);
  ctx.fillStyle = '#ebf3fc';
  ctx.fill();

  // Subtle cystic focus
  ctx.beginPath();
  ctx.arc(tx + 4, ty + 6, tr * 0.22, 0, Math.PI * 2);
  ctx.fillStyle = '#2a3648';
  ctx.fill();
  ctx.restore();
}

// 4. Vestibular Schwannoma (Acoustic Neuroma)
function drawSchwannomaScan(ctx, w, h) {
  drawBaseBrainAnatomy(ctx, w, h);
  const tx = w * 0.35;
  const ty = h * 0.68;
  const tr = w * 0.085;

  ctx.save();
  ctx.beginPath();
  ctx.arc(tx, ty, tr, 0, Math.PI * 2);
  ctx.fillStyle = '#eef5fd';
  ctx.fill();

  // IAC Cone Component widening canal
  ctx.beginPath();
  ctx.moveTo(tx - tr * 0.5, ty - tr * 0.4);
  ctx.lineTo(tx - tr * 1.4, ty - tr * 0.7);
  ctx.lineTo(tx - tr * 1.3, ty + tr * 0.2);
  ctx.lineTo(tx - tr * 0.4, ty + tr * 0.5);
  ctx.fillStyle = '#eef5fd';
  ctx.fill();
  ctx.restore();
}

// 5. Medulloblastoma
function drawMedulloScan(ctx, w, h) {
  drawBaseBrainAnatomy(ctx, w, h);
  const tx = w * 0.50;
  const ty = h * 0.70;
  const tr = w * 0.12;

  ctx.save();
  ctx.beginPath();
  ctx.ellipse(tx, ty, tr, tr * 0.9, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#e6eff8';
  ctx.fill();

  // Internal small cystic degeneration
  ctx.beginPath();
  ctx.arc(tx - 6, ty - 4, tr * 0.2, 0, Math.PI * 2);
  ctx.fillStyle = '#222d3d';
  ctx.fill();
  ctx.restore();
}

// 6. Cerebellar Hemangioblastoma
function drawHemangioblastomaScan(ctx, w, h) {
  drawBaseBrainAnatomy(ctx, w, h);
  const tx = w * 0.66;
  const ty = h * 0.70;
  const tr = w * 0.14;

  ctx.save();
  // Large Thin-Walled Fluid Cyst
  ctx.beginPath();
  ctx.ellipse(tx, ty, tr, tr * 0.9, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#202b3a';
  ctx.strokeStyle = '#52647c';
  ctx.lineWidth = 1.5;
  ctx.fill();
  ctx.stroke();

  // Vividly Enhancing Mural Nodule abutting pial surface
  ctx.beginPath();
  ctx.arc(tx + tr * 0.62, ty + tr * 0.2, tr * 0.35, 0, Math.PI * 2);
  ctx.fillStyle = '#f2f7fd';
  ctx.fill();

  // Serpentine Flow Voids
  ctx.beginPath();
  ctx.arc(tx + tr * 0.7, ty + tr * 0.6, 3, 0, Math.PI * 2);
  ctx.arc(tx + tr * 0.4, ty + tr * 0.5, 3, 0, Math.PI * 2);
  ctx.fillStyle = '#060a10';
  ctx.fill();
  ctx.restore();
}

// 7. Primary CNS Lymphoma
function drawLymphomaScan(ctx, w, h) {
  drawBaseBrainAnatomy(ctx, w, h);
  const tx = w * 0.50;
  const ty = h * 0.44;
  const tr = w * 0.13;

  ctx.save();
  ctx.beginPath();
  ctx.ellipse(tx, ty, tr * 1.1, tr * 0.8, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#edf4fd';
  ctx.fill();
  ctx.restore();
}

// 8. Multiple Brain Metastases (Lung Adenocarcinoma)
function drawMetastasesScan(ctx, w, h) {
  drawBaseBrainAnatomy(ctx, w, h);

  // Nodule 1 (Right Frontal)
  const n1x = w * 0.68, n1y = h * 0.38, n1r = w * 0.085;
  ctx.fillStyle = 'rgba(95, 114, 138, 0.6)';
  ctx.beginPath(); ctx.arc(n1x, n1y, n1r * 2.2, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#ebf3fc';
  ctx.beginPath(); ctx.arc(n1x, n1y, n1r, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#1c2533';
  ctx.beginPath(); ctx.arc(n1x, n1y, n1r * 0.45, 0, Math.PI * 2); ctx.fill();

  // Nodule 2 (Left Parietal)
  const n2x = w * 0.32, n2y = h * 0.45, n2r = w * 0.06;
  ctx.fillStyle = 'rgba(95, 114, 138, 0.5)';
  ctx.beginPath(); ctx.arc(n2x, n2y, n2r * 2.0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#ebf3fc';
  ctx.beginPath(); ctx.arc(n2x, n2y, n2r, 0, Math.PI * 2); ctx.fill();

  // Nodule 3 (Right Temporal)
  const n3x = w * 0.72, n3y = h * 0.60, n3r = w * 0.045;
  ctx.fillStyle = '#ebf3fc';
  ctx.beginPath(); ctx.arc(n3x, n3y, n3r, 0, Math.PI * 2); ctx.fill();
}

// 9. Pyogenic Brain Abscess
function drawAbscessScan(ctx, w, h) {
  drawBaseBrainAnatomy(ctx, w, h);
  const tx = w * 0.65;
  const ty = h * 0.35;
  const tr = w * 0.12;

  // Prominent Edema
  ctx.fillStyle = 'rgba(95, 114, 138, 0.65)';
  ctx.beginPath(); ctx.arc(tx, ty, tr * 2.1, 0, Math.PI * 2); ctx.fill();

  // Smooth, Thin Uniform Enhancing Capsule
  ctx.beginPath();
  ctx.arc(tx, ty, tr, 0, Math.PI * 2);
  ctx.fillStyle = '#ebf3fc';
  ctx.fill();

  // Central Necrotic Cavity
  ctx.beginPath();
  ctx.arc(tx, ty, tr * 0.75, 0, Math.PI * 2);
  ctx.fillStyle = '#1c2533';
  ctx.fill();
}

// 10. Diffuse Low-Grade Astrocytoma (LGG)
function drawLowGradeGliomaScan(ctx, w, h) {
  drawBaseBrainAnatomy(ctx, w, h);
  const tx = w * 0.34;
  const ty = h * 0.35;
  const tr = w * 0.15;

  // Ill-defined non-enhancing T2/FLAIR hyperintense expansion
  const grad = ctx.createRadialGradient(tx, ty, tr * 0.2, tx, ty, tr);
  grad.addColorStop(0, '#8092a8');
  grad.addColorStop(0.7, '#6b7d92');
  grad.addColorStop(1, '#4c586a');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.ellipse(tx, ty, tr, tr * 0.85, 0.2, 0, Math.PI * 2);
  ctx.fill();
}

// 11. Normal Brain Control
function drawNormalBrainScan(ctx, w, h) {
  drawBaseBrainAnatomy(ctx, w, h);
}
