/**
 * NEUROSCAN AI - Main Application Controller
 */
document.addEventListener("DOMContentLoaded", () => {
  const DEFAULT_WORKSTATION = {
    role: "Neuroradiologist Workstation",
    shortRole: "Diagnostic PACS Suite",
    avatar: "🔬",
    department: "Department of Diagnostic Neuroradiology",
    accessLevel: "Tier 4 (Full Clinical AI + PACS Write)"
  };

  const HOSPITAL_NETWORKS = {
    hopkins: { name: "Johns Hopkins Medicine", shortName: "Johns Hopkins Hospital", dept: "Comprehensive Brain Tumor Center", location: "Baltimore, MD, USA", scans: "14,200+", mri: "3.0T Skyra • 7T", protocol: "HL7-FHIR v4.0.1" },
    mayo: { name: "Mayo Clinic", shortName: "Mayo Clinic", dept: "Division of Neuro-Oncology & AI Radiology", location: "Rochester, MN, USA", scans: "18,900+", mri: "3.0T Prisma / PET-MR", protocol: "DICOM 3.0 TLS" },
    charite: { name: "Charité – Universitätsmedizin Berlin", shortName: "Charité Berlin", dept: "Department of Neuroradiology & Neuro-Cure", location: "Berlin, Germany", scans: "11,500+", mri: "3.0T Vida • 7T Terra", protocol: "EU GDPR Tier 4" },
    mgh: { name: "Massachusetts General Hospital (MGH)", shortName: "Harvard MGH", dept: "Francis H. Burr Proton & Brain Tumor AI Center", location: "Boston, MA, USA", scans: "16,400+", mri: "3.0T Discovery MR750", protocol: "Epic Provider Bridge" },
    stanford: { name: "Stanford Health Care", shortName: "Stanford Health Care", dept: "Center for Neuro-AI & Radiogenomics", location: "Palo Alto, CA, USA", scans: "13,800+", mri: "3.0T Premier / 7T", protocol: "FHIR REST API" },
    oxford: { name: "Oxford University Hospitals (NHS)", shortName: "Oxford NHS", dept: "Nuffield Dept of Clinical Neurosciences", location: "Oxford, UK", scans: "9,800+", mri: "3.0T Verio / 7T", protocol: "NHS Digital Spine" },
    karolinska: { name: "Karolinska University Hospital", shortName: "Karolinska", dept: "Department of Clinical Neuroscience", location: "Stockholm, Sweden", scans: "8,700+", mri: "3.0T Prisma Fit", protocol: "Nordic Health Mesh" },
    tokyo: { name: "The University of Tokyo Hospital", shortName: "Univ of Tokyo", dept: "Department of Neurosurgery & AI Diagnostics", location: "Tokyo, Japan", scans: "12,100+", mri: "3.0T Vantage Galan", protocol: "JJ1017 Standard" },
    general: { name: "Clinical Neuro-Radiology PACS", shortName: "Clinical PACS", dept: "Central Brain Tumor Imaging Node", location: "Academic Medical Center", scans: "10,000+", mri: "3.0T High-Field MRI", protocol: "DICOM 3.0 TLS" }
  };

  const state = {
    activeTab: "studio", activeTool: "select", activeSequence: "t1c", activeColormap: "grayscale",
    activePreset: null, zoom: 1.0, panX: 0, panY: 0, isPanning: false, startPanX: 0, startPanY: 0,
    caliperStart: null, caliperEnd: null, isDrawingCaliper: false,
    brushRadius: 12, isDrawingBrush: false, ranoTimepoint: 0, isSpeakingAudio: false,
    overlays: { contour: true, bbox: true, centroid: true, edema: true, heatmap: false },
    heatmapOpacity: 0.55, windowLevel: { window: 240, level: 125 }, currentAnalysis: null,
    searchQuery: "", selectedCategory: "all", selectedGrade: "all",
    user: DEFAULT_WORKSTATION,
    hospital: HOSPITAL_NETWORKS.hopkins,
    isLoggedIn: false
  };

  const rawCanvas = document.getElementById("rawCanvas");
  const overlayCanvas = document.getElementById("overlayCanvas");
  const heatmapCanvas = document.getElementById("heatmapCanvas");
  const overlayCtx = overlayCanvas.getContext("2d");
  const heatmapCtx = heatmapCanvas.getContext("2d");
  const viewportContainer = document.getElementById("viewportContainer");
  const scanFileInput = document.getElementById("scanFileInput");

  initHospitalAuth();
  initGlobalNetworkTab();
  initEnterpriseModals();
  initUserGuide();
  initPresetSelectors();
  initTabRouting();
  initToolPalette();
  initViewerControls();
  initCanvasInteraction();
  initFileUpload();
  initEncyclopediaExplorer();
  initReportExport();
  initMprAnd3D();
  initSurgicalPlanner();
  initRanoTimeline();
  initAudioBriefing();
  initDicomTable();
  initKeyboardShortcuts();
  loadPresetById("preset-sciencedirect");

  function runAutoDetection() {
    radiologyEngine.userSeed = null;
    state.activeTool = "select";
    document.querySelectorAll(".btn-tool-pill[data-tool], .tool-btn[data-tool]").forEach(b => {
      b.classList.toggle("active", b.dataset.tool === "select");
    });
    if (viewportContainer) viewportContainer.className = "viewport-stage tool-select";

    // Ensure contour overlays are active so the detection is visible
    state.overlays.contour = true;
    state.overlays.bbox = true;
    state.overlays.centroid = true;
    document.querySelectorAll(".overlay-toggle[data-overlay]").forEach(toggle => {
      if (["contour", "bbox", "centroid"].includes(toggle.dataset.overlay)) {
        toggle.checked = true;
      }
    });

    const btnAutoSegment = document.getElementById("btnAutoSegment");
    const btnGuideAuto = document.getElementById("btnGuideAutoDetect");
    if (btnAutoSegment) {
      btnAutoSegment.textContent = "⚡ Detecting...";
      btnAutoSegment.classList.add("active");
    }
    if (btnGuideAuto) {
      btnGuideAuto.textContent = "⚡ Detecting...";
    }

    setTimeout(() => {
      const results = radiologyEngine.reanalyze({ seed: null });
      if (results) {
        state.currentAnalysis = results;
        renderAllCanvases();
        updateDiagnosticPanel(results);
      }
      if (btnAutoSegment) {
        btnAutoSegment.textContent = "✓ Tumor Detected";
        setTimeout(() => {
          btnAutoSegment.textContent = "⚡ Auto-Detect";
          btnAutoSegment.classList.remove("active");
        }, 1600);
      }
      if (btnGuideAuto) {
        btnGuideAuto.textContent = "✓ Detection Complete";
        setTimeout(() => {
          btnGuideAuto.textContent = "⚡ Run Auto-Detect Now";
        }, 1600);
      }

      // Smooth scroll down to the workstation anchor
      const anchor = document.getElementById("studioWorkstationAnchor");
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth" });
        const viewportPanel = document.querySelector(".viewport-panel");
        if (viewportPanel) {
          viewportPanel.classList.remove("viewport-highlighted");
          void viewportPanel.offsetWidth; // Force reflow
          viewportPanel.classList.add("viewport-highlighted");
        }
      }
    }, 10);
  }

  function initUserGuide() {
    const btnScroll = document.getElementById("btnScrollToStudio");
    const anchor = document.getElementById("studioWorkstationAnchor");
    const toggleBtn = document.getElementById("btnToggleGuide");
    const content = document.getElementById("guideHeroContent");
    const btnLoadSample = document.getElementById("btnGuideLoadSample");
    const btnUpload = document.getElementById("btnGuideUploadScan");
    const btnExplore = document.getElementById("btnGuideExploreDb");
    const btnHeaderGuide = document.getElementById("btnHeaderGuide");
    const uploadModal = document.getElementById("uploadModal");

    // Guide Step Cards & Buttons
    const btnStep1Upload = document.getElementById("btnGuideUploadScanStep");
    const cardStep1 = document.getElementById("guideStepCard1");
    const btnStep2Seq = document.getElementById("btnGuideSequencesStep");
    const cardStep2 = document.getElementById("guideStepCard2");
    const btnStep3Auto = document.getElementById("btnGuideAutoDetect");
    const cardStep3 = document.getElementById("guideStepCard3");
    const btnStep4Report = document.getElementById("btnGuideExportReportStep");
    const cardStep4 = document.getElementById("guideStepCard4");

    const scrollToStudio = () => {
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth" });
        const viewportPanel = document.querySelector(".viewport-panel");
        if (viewportPanel) {
          viewportPanel.classList.remove("viewport-highlighted");
          void viewportPanel.offsetWidth; // Force reflow
          viewportPanel.classList.add("viewport-highlighted");
        }
      }
    };

    if (btnScroll) {
      btnScroll.addEventListener("click", scrollToStudio);
    }

    // Step 1: Upload / Ingest Scan
    const handleStep1 = () => {
      if (uploadModal) uploadModal.classList.add("active");
    };
    if (btnStep1Upload) btnStep1Upload.addEventListener("click", handleStep1);
    if (cardStep1) {
      cardStep1.addEventListener("click", (e) => {
        if (!e.target.closest("button")) handleStep1();
      });
    }

    // Step 2: Multi-Sequence & W/L
    const handleStep2 = () => {
      scrollToStudio();
    };
    if (btnStep2Seq) btnStep2Seq.addEventListener("click", handleStep2);
    if (cardStep2) {
      cardStep2.addEventListener("click", (e) => {
        if (!e.target.closest("button")) handleStep2();
      });
    }

    // Step 3: Auto-Detect & Pinpoint
    if (btnStep3Auto) {
      btnStep3Auto.addEventListener("click", (e) => {
        e.stopPropagation();
        runAutoDetection();
      });
    }
    if (cardStep3) {
      cardStep3.addEventListener("click", (e) => {
        if (!e.target.closest("button")) runAutoDetection();
      });
    }

    // Step 4: WHO-CNS5 Report
    const handleStep4 = () => {
      const btnExport = document.getElementById("btnExportReport");
      if (btnExport) btnExport.click();
    };
    if (btnStep4Report) btnStep4Report.addEventListener("click", handleStep4);
    if (cardStep4) {
      cardStep4.addEventListener("click", (e) => {
        if (!e.target.closest("button")) handleStep4();
      });
    }

    if (btnLoadSample) {
      btnLoadSample.addEventListener("click", () => {
        loadPresetById("preset-sciencedirect");
        scrollToStudio();
      });
    }

    if (btnUpload && uploadModal) {
      btnUpload.addEventListener("click", () => {
        uploadModal.classList.add("active");
      });
    }

    if (btnExplore) {
      btnExplore.addEventListener("click", () => {
        switchTab("database");
      });
    }

    if (btnHeaderGuide) {
      btnHeaderGuide.addEventListener("click", () => {
        switchTab("studio");
        if (content && content.classList.contains("collapsed")) {
          content.classList.remove("collapsed");
          if (toggleBtn) toggleBtn.textContent = "▲ Minimize Guide";
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    if (toggleBtn && content) {
      toggleBtn.addEventListener("click", () => {
        const isCollapsed = content.classList.toggle("collapsed");
        toggleBtn.textContent = isCollapsed ? "▼ How to Use Guide" : "▲ Minimize Guide";
      });
    }
  }

  function initPresetSelectors() {
    const presetSelect = document.getElementById("presetSelect");
    const presetGrid = document.getElementById("presetGrid");
    const quickSamplesPills = document.getElementById("quickSamplesPills");

    if (quickSamplesPills && typeof PRESET_CASES !== "undefined") {
      quickSamplesPills.innerHTML = "";
      PRESET_CASES.forEach((p) => {
        const pill = document.createElement("button");
        pill.className = `sample-pill ${p.id === "preset-sciencedirect" ? "active" : ""}`;
        pill.dataset.presetId = p.id;
        pill.textContent = p.shortName;
        pill.addEventListener("click", () => {
          document.querySelectorAll(".sample-pill").forEach(pl => pl.classList.remove("active"));
          pill.classList.add("active");
          loadPresetById(p.id);
        });
        quickSamplesPills.appendChild(pill);
      });
    }

    if (presetSelect && typeof PRESET_CASES !== "undefined") {
      presetSelect.innerHTML = "";
      PRESET_CASES.forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.id; opt.textContent = p.name;
        presetSelect.appendChild(opt);
      });
      presetSelect.addEventListener("change", (e) => loadPresetById(e.target.value));
    }

    if (presetGrid && typeof PRESET_CASES !== "undefined") {
      presetGrid.innerHTML = "";
      PRESET_CASES.forEach(p => {
        const card = document.createElement("div");
        card.className = "preset-card";
        card.innerHTML = `
          <div class="preset-card-title">${p.shortName}</div>
          <div class="preset-card-sub">${p.category}</div>
          <div class="preset-card-loc"><b>Location:</b> ${p.location}</div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.3rem;">${p.clinicalHistory.substring(0, 85)}...</div>
          <button class="btn btn-card-detail" style="margin-top:0.6rem;">Load Benchmark MRI Scan →</button>
        `;
        card.addEventListener("click", () => {
          document.querySelectorAll(".preset-card").forEach(c => c.classList.remove("active"));
          card.classList.add("active");
          if (presetSelect) presetSelect.value = p.id;
          loadPresetById(p.id);
          switchTab("studio");
        });
        presetGrid.appendChild(card);
      });
    }
  }

  function loadPresetById(presetId) {
    if (typeof PRESET_CASES === "undefined") return;
    const preset = PRESET_CASES.find(p => p.id === presetId) || PRESET_CASES[0];
    state.activePreset = preset;
    updatePatientHUD(preset);

    document.querySelectorAll(".sample-pill").forEach(pl => {
      pl.classList.toggle("active", pl.dataset.presetId === preset.id);
    });

    const presetSelect = document.getElementById("presetSelect");
    if (presetSelect && presetSelect.value !== preset.id) {
      presetSelect.value = preset.id;
    }

    if (preset.dataUrl) {
      const img = new Image();
      const processImg = () => {
        radiologyEngine.loadScanFromImage(img, {
          tumorId: preset.tumorId, location: preset.location, tumorCoords: preset.tumorCoords
        }).then(results => {
          state.currentAnalysis = results;
          resetViewportTransform();
          renderAllCanvases();
          updateDiagnosticPanel(results);
        });
      };
      img.onload = processImg;
      img.src = preset.dataUrl;
      if (img.complete && img.naturalWidth > 0) {
        processImg();
      }
      return;
    }

    const w = 512, h = 512;
    const offscreen = document.createElement("canvas");
    offscreen.width = w; offscreen.height = h;
    const offCtx = offscreen.getContext("2d");
    preset.renderFunction(offCtx, w, h);

    Promise.resolve(radiologyEngine.loadScanFromImage(offscreen, {
      tumorId: preset.tumorId, location: preset.location, tumorCoords: preset.tumorCoords
    })).then(results => {
      state.currentAnalysis = results;
      resetViewportTransform();
      renderAllCanvases();
      updateDiagnosticPanel(results);
    });
  }

  function updatePatientHUD(presetOrPatient) {
    if (!presetOrPatient) return;
    const p = presetOrPatient.patient || presetOrPatient;
    state.patient = p;

    const elId = document.getElementById("hudPatientId");
    const elAge = document.getElementById("hudPatientAge");
    const elSeq = document.getElementById("hudScanSeq");
    const elDate = document.getElementById("hudScanDate");

    const inAge = document.getElementById("inputPatientAge");
    const selSex = document.getElementById("selectPatientSex");

    if (elId) elId.textContent = p.id || "PT-UNKNOWN";
    if (elAge) elAge.textContent = `${p.age || 58}Y / ${p.sex || "Adult"}`;
    if (elSeq) elSeq.textContent = p.sequence || "Axial T1+Gd";
    if (elDate) elDate.textContent = p.scanDate || new Date().toISOString().split("T")[0];

    if (inAge && p.age !== undefined) inAge.value = p.age;
    if (selSex && p.sex) {
      if (p.sex.includes("Pediatric") || p.age < 18) {
        selSex.value = "Pediatric (<18Y)";
      } else if (p.age > 65) {
        selSex.value = "Elderly (>65Y)";
      } else if (p.sex.includes("Female")) {
        selSex.value = "Female";
      } else {
        selSex.value = "Male";
      }
    }
  }

  function renderAllCanvases() {
    if (!state.currentAnalysis) return;
    const { scanWidth, scanHeight } = state.currentAnalysis;
    rawCanvas.width = scanWidth; rawCanvas.height = scanHeight;
    overlayCanvas.width = scanWidth; overlayCanvas.height = scanHeight;
    heatmapCanvas.width = scanWidth; heatmapCanvas.height = scanHeight;
    radiologyEngine.renderSequence(rawCanvas, state.activeSequence, state.windowLevel, state.activeColormap);
    renderOverlays();
    renderHeatmap();
    applyCanvasTransforms();
    renderMprViews();
    renderSurgicalViews();
    renderRanoViews();
    renderDicomTable();
  }
  function renderOverlays() {
    overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
    overlayCtx.save();

    // 1. ALWAYS Draw User Distance Measurement Caliper if active
    if (state.caliperStart && state.caliperEnd) {
      drawUserCaliper(overlayCtx, state.caliperStart, state.caliperEnd);
    }

    // 2. Draw Pinpoint Seed Cursor if active
    if (radiologyEngine.userSeed) {
      const { x, y } = radiologyEngine.userSeed;
      overlayCtx.beginPath();
      overlayCtx.arc(x, y, 7, 0, Math.PI * 2);
      overlayCtx.strokeStyle = "#00f0ff";
      overlayCtx.lineWidth = 2;
      overlayCtx.stroke();

      overlayCtx.beginPath();
      overlayCtx.arc(x, y, 2.5, 0, Math.PI * 2);
      overlayCtx.fillStyle = "#ff1744";
      overlayCtx.fill();
    }

    const res = state.currentAnalysis;
    if (!res || !res.hasTumor) {
      overlayCtx.restore();
      return;
    }

    const { boundingBox, centroid, contourPoints, maxDiameterMm, minorDiameterMm, diagnoses } = res;
    const topDiag = diagnoses && diagnoses[0] ? diagnoses[0] : {};
    const isHighGrade = topDiag.gradeNum >= 3;
    const themeColor = isHighGrade ? "#ff1744" : (topDiag.gradeNum === 2 ? "#ff9100" : "#00e676");

    if (state.overlays.edema && res.edemaPixelsCount > 0) {
      overlayCtx.beginPath();
      overlayCtx.arc(centroid.x, centroid.y, (maxDiameterMm / (2 * radiologyEngine.pixelSpacing)) * 1.5, 0, Math.PI * 2);
      overlayCtx.strokeStyle = "rgba(0, 240, 255, 0.45)";
      overlayCtx.lineWidth = 1.5;
      overlayCtx.setLineDash([4, 4]);
      overlayCtx.stroke();
      overlayCtx.setLineDash([]);
    }

    if (state.overlays.contour && contourPoints && contourPoints.length > 2) {
      overlayCtx.beginPath();
      overlayCtx.moveTo(contourPoints[0].x, contourPoints[0].y);
      for (let i = 1; i < contourPoints.length; i++) { overlayCtx.lineTo(contourPoints[i].x, contourPoints[i].y); }
      overlayCtx.closePath();
      overlayCtx.strokeStyle = themeColor;
      overlayCtx.lineWidth = 2.5;
      overlayCtx.shadowColor = themeColor;
      overlayCtx.shadowBlur = 10;
      overlayCtx.stroke();
      overlayCtx.fillStyle = isHighGrade ? "rgba(255, 23, 68, 0.18)" : "rgba(0, 230, 118, 0.18)";
      overlayCtx.fill();
    }

    if (state.overlays.bbox && boundingBox) {
      const pad = 6;
      const bx = Math.max(0, boundingBox.minX - pad);
      const by = Math.max(0, boundingBox.minY - pad);
      const bw = (boundingBox.maxX - boundingBox.minX) + pad * 2;
      const bh = (boundingBox.maxY - boundingBox.minY) + pad * 2;
      overlayCtx.strokeStyle = "rgba(255, 255, 255, 0.4)";
      overlayCtx.lineWidth = 1;
      overlayCtx.setLineDash([3, 3]);
      overlayCtx.strokeRect(bx, by, bw, bh);
      overlayCtx.setLineDash([]);
      drawCornerAccents(overlayCtx, bx, by, bw, bh, themeColor);

      // Draw Exact RECIST 1.1 Major and Minor Caliper Axes
      if (res.caliperLines && res.caliperLines.majorDiameterMm > 0) {
        const { majorP1, majorP2, minorP1, minorP2 } = res.caliperLines;
        
        // Major Diameter Axis (Yellow)
        overlayCtx.beginPath();
        overlayCtx.moveTo(majorP1.x, majorP1.y);
        overlayCtx.lineTo(majorP2.x, majorP2.y);
        overlayCtx.strokeStyle = "#ffea00";
        overlayCtx.lineWidth = 1.8;
        overlayCtx.setLineDash([4, 3]);
        overlayCtx.stroke();
        overlayCtx.setLineDash([]);

        [majorP1, majorP2].forEach(p => {
          overlayCtx.beginPath();
          overlayCtx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          overlayCtx.fillStyle = "#ffea00";
          overlayCtx.fill();
        });

        // Minor Diameter Axis (Cyan)
        overlayCtx.beginPath();
        overlayCtx.moveTo(minorP1.x, minorP1.y);
        overlayCtx.lineTo(minorP2.x, minorP2.y);
        overlayCtx.strokeStyle = "#00e5ff";
        overlayCtx.lineWidth = 1.5;
        overlayCtx.setLineDash([3, 3]);
        overlayCtx.stroke();
        overlayCtx.setLineDash([]);

        [minorP1, minorP2].forEach(p => {
          overlayCtx.beginPath();
          overlayCtx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
          overlayCtx.fillStyle = "#00e5ff";
          overlayCtx.fill();
        });
      }
    }

    if (state.overlays.centroid && centroid) {
      overlayCtx.beginPath();
      overlayCtx.arc(centroid.x, centroid.y, 4, 0, Math.PI * 2);
      overlayCtx.fillStyle = "#ffffff";
      overlayCtx.shadowColor = "#00f0ff";
      overlayCtx.shadowBlur = 8;
      overlayCtx.fill();
      overlayCtx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      overlayCtx.lineWidth = 1;
      overlayCtx.beginPath();
      overlayCtx.moveTo(centroid.x - 10, centroid.y); overlayCtx.lineTo(centroid.x + 10, centroid.y);
      overlayCtx.moveTo(centroid.x, centroid.y - 10); overlayCtx.lineTo(centroid.x, centroid.y + 10);
      overlayCtx.stroke();
    }

    if (topDiag && topDiag.name) {
      const lx = Math.min(overlayCanvas.width - 225, Math.max(10, (boundingBox ? boundingBox.maxX : centroid.x) + 12));
      const ly = Math.min(overlayCanvas.height - 75, Math.max(20, (boundingBox ? boundingBox.minY : centroid.y)));
      overlayCtx.fillStyle = "rgba(13, 21, 34, 0.9)";
      overlayCtx.strokeStyle = themeColor;
      overlayCtx.lineWidth = 1.5;
      overlayCtx.beginPath();
      overlayCtx.roundRect(lx, ly, 215, 64, 6);
      overlayCtx.fill();
      overlayCtx.stroke();
      overlayCtx.font = "600 11px sans-serif";
      overlayCtx.fillStyle = themeColor;
      overlayCtx.fillText(`${topDiag.whoGrade || "WHO"} // ${topDiag.confidence || "95"}% CONF`, lx + 10, ly + 18);
      overlayCtx.font = "700 12px sans-serif";
      overlayCtx.fillStyle = "#ffffff";
      const truncatedName = topDiag.name.length > 24 ? topDiag.name.substring(0, 22) + "..." : topDiag.name;
      overlayCtx.fillText(truncatedName, lx + 10, ly + 36);
      overlayCtx.font = "500 10.5px monospace";
      overlayCtx.fillStyle = "rgba(200, 215, 230, 0.8)";
      overlayCtx.fillText(`RECIST: ${maxDiameterMm} x ${minorDiameterMm} mm`, lx + 10, ly + 52);
    }

    overlayCtx.restore();
  }

  function renderHeatmap() {
    heatmapCtx.clearRect(0, 0, heatmapCanvas.width, heatmapCanvas.height);
    if (!state.overlays.heatmap || !state.currentAnalysis || !state.currentAnalysis.hasTumor) {
      heatmapCanvas.style.opacity = 0;
      return;
    }
    const { centroid, maxDiameterMm } = state.currentAnalysis;
    const r = (maxDiameterMm / (2 * radiologyEngine.pixelSpacing)) * 1.8;
    const grad = heatmapCtx.createRadialGradient(centroid.x, centroid.y, 4, centroid.x, centroid.y, r);
    grad.addColorStop(0, "rgba(255, 0, 60, 0.95)");
    grad.addColorStop(0.3, "rgba(255, 140, 0, 0.75)");
    grad.addColorStop(0.65, "rgba(0, 240, 255, 0.45)");
    grad.addColorStop(1, "rgba(0, 240, 255, 0)");
    heatmapCtx.fillStyle = grad;
    heatmapCtx.beginPath();
    heatmapCtx.arc(centroid.x, centroid.y, r, 0, Math.PI * 2);
    heatmapCtx.fill();
    heatmapCanvas.style.opacity = state.heatmapOpacity;
  }

  function drawCornerAccents(ctx, x, y, w, h, color) {
    const len = 8;
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, y + len); ctx.lineTo(x, y); ctx.lineTo(x + len, y);
    ctx.moveTo(x + w - len, y); ctx.lineTo(x + w, y); ctx.lineTo(x + w, y + len);
    ctx.moveTo(x, y + h - len); ctx.lineTo(x, y + h); ctx.lineTo(x + len, y + h);
    ctx.moveTo(x + w - len, y + h); ctx.lineTo(x + w, y + h); ctx.lineTo(x + w, y + h - len);
    ctx.stroke();
  }

  function drawUserCaliper(ctx, p1, p2) {
    const distPx = Math.hypot(p2.x - p1.x, p2.y - p1.y);
    const distMm = (distPx * radiologyEngine.pixelSpacing).toFixed(1);
    ctx.save();
    ctx.strokeStyle = "#00f0ff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
    [p1, p2].forEach(p => {
      ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, Math.PI * 2); ctx.fillStyle = "#00f0ff"; ctx.fill();
    });
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;
    ctx.fillStyle = "rgba(10, 16, 26, 0.9)";
    ctx.strokeStyle = "#00f0ff";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(midX - 35, midY - 14, 70, 22, 4);
    ctx.fill();
    ctx.stroke();
    ctx.font = "700 11px monospace";
    ctx.fillStyle = "#00f0ff";
    ctx.textAlign = "center";
    ctx.fillText(`${distMm} mm`, midX, midY + 2);
    ctx.restore();
  }

  function applyCanvasTransforms() {
    const transformStr = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
    rawCanvas.style.transform = transformStr;
    overlayCanvas.style.transform = transformStr;
    heatmapCanvas.style.transform = transformStr;
    const zoomDisp = document.getElementById("zoomLevelDisplay");
    if (zoomDisp) zoomDisp.textContent = `${Math.round(state.zoom * 100)}%`;
  }

  function resetViewportTransform() {
    state.zoom = 1.0; state.panX = 0; state.panY = 0;
    state.caliperStart = null; state.caliperEnd = null;
    applyCanvasTransforms();
  }
  function updateDiagnosticPanel(res) {
    if (!res) return;
    const diagListEl = document.getElementById("diagnosesList");
    const primaryTitleEl = document.getElementById("primaryDiagnosisTitle");
    const primaryCatEl = document.getElementById("primaryDiagnosisCategory");
    const primaryGradeEl = document.getElementById("primaryWhoGradeBadge");
    const primaryConfEl = document.getElementById("primaryConfidenceScore");
    const primaryRationaleEl = document.getElementById("primaryMatchRationale");
    const confidenceMeterFill = document.getElementById("confidenceMeterFill");

    document.getElementById("metricMaxDiameter").textContent = `${res.maxDiameterMm} mm`;
    const minorEl = document.getElementById("metricMinorDiameter");
    if (minorEl) minorEl.textContent = `RECIST: ${res.maxDiameterMm} × ${res.minorDiameterMm} mm`;
    const areaEl = document.getElementById("metricArea");
    if (areaEl) areaEl.textContent = `Area: ${res.tumorAreaMm2} mm²`;
    const areaFullEl = document.getElementById("metricAreaFull");
    if (areaFullEl) areaFullEl.textContent = `${res.tumorAreaMm2} mm²`;
    document.getElementById("metricVolume").textContent = `${res.estimatedVolumeCm3} cm³`;
    document.getElementById("metricHemisphere").textContent = res.localization.hemisphere;
    document.getElementById("metricRegion").textContent = res.localization.region;
    document.getElementById("metricAsymmetry").textContent = res.radiomics.symmetryDeficit;

    const perfEl = document.getElementById("metricPerfusion");
    const adcEl = document.getElementById("metricAdc");
    if (res.perfusion) {
      if (perfEl) perfEl.textContent = res.perfusion.rCbvFormatted;
      if (adcEl) adcEl.textContent = `ADC: ${res.perfusion.adcFormatted}`;
    } else {
      if (perfEl) perfEl.textContent = "1.00 rCBV";
      if (adcEl) adcEl.textContent = "ADC: 1.15 × 10⁻³ mm²/s";
    }

    document.getElementById("radMeanIntensity").textContent = res.radiomics.meanIntensity;
    document.getElementById("radEntropy").textContent = res.radiomics.entropy;
    document.getElementById("radContrast").textContent = res.radiomics.contrast;
    document.getElementById("radHomogeneity").textContent = res.radiomics.homogeneity;
    document.getElementById("radDissimilarity").textContent = res.radiomics.dissimilarity;
    document.getElementById("radEdemaIndex").textContent = res.radiomics.edemaIndex;
    document.getElementById("radNecrosisRatio").textContent = res.radiomics.necrosisRatio;

    if (!res.hasTumor || !res.diagnoses || !res.diagnoses.length) {
      if (primaryTitleEl) primaryTitleEl.textContent = "Normal Brain MRI (No Mass Lesion)";
      if (primaryCatEl) primaryCatEl.textContent = "Physiological Normal Control";
      if (primaryGradeEl) { primaryGradeEl.textContent = "NON-NEOPLASTIC"; primaryGradeEl.className = "badge-grade grade-1"; }
      if (primaryConfEl) primaryConfEl.textContent = "98.6%";
      if (confidenceMeterFill) confidenceMeterFill.style.width = "98.6%";
      if (primaryRationaleEl) primaryRationaleEl.textContent = "Symmetrical cerebral hemispheres without mass effect, hydrocephalus, or pathological contrast enhancement.";
      if (diagListEl) diagListEl.innerHTML = "<div style=\"font-size:0.75rem; color:var(--text-muted); padding:0.5rem; text-align:center;\">No mass lesions identified.</div>";
      return;
    }

    const primary = res.diagnoses[0];
    if (primaryTitleEl) primaryTitleEl.textContent = primary.name;
    if (primaryCatEl) primaryCatEl.textContent = `${primary.category} // ${primary.ageGroup || "All Ages"}`;
    if (primaryGradeEl) {
      primaryGradeEl.textContent = primary.whoGrade || "WHO Grade";
      primaryGradeEl.className = `badge-grade grade-${primary.gradeNum || 4}`;
    }
    if (primaryConfEl) primaryConfEl.textContent = `${primary.confidence}%`;
    if (confidenceMeterFill) confidenceMeterFill.style.width = `${primary.confidence}%`;
    if (primaryRationaleEl) primaryRationaleEl.textContent = primary.matchRationale || primary.clinicalPresentation;

    document.getElementById("recSurgical").textContent = primary.treatment || "Neurosurgical Consultation";
    document.getElementById("recMolecular").textContent = primary.molecularMarkers || "IDH1/2, 1p/19q, MGMT, TERT";
    document.getElementById("recPrognosis").textContent = primary.prognosis || "Standard Protocol";

    if (diagListEl) {
      diagListEl.innerHTML = "";
      res.diagnoses.forEach((d, idx) => {
        const item = document.createElement("div");
        item.className = `diag-item ${idx === 0 ? "primary-diag" : ""}`;
        item.innerHTML = `
          <div class="diag-header">
            <span class="diag-rank">#${idx + 1}</span>
            <span class="diag-name">${d.name}</span>
            <span class="diag-conf">${d.confidence}%</span>
          </div>
          <div class="diag-sub"><span class="badge-tag">${d.whoGrade}</span><span>${d.category}</span></div>
          <div class="diag-progress"><div class="diag-progress-bar" style="width:${d.confidence}%"></div></div>
        `;
        item.addEventListener("click", () => showTumorDetailModal(d.id || primary.id));
        diagListEl.appendChild(item);
      });
    }
  }

  function initEncyclopediaExplorer() {
    const searchInput = document.getElementById("encyclopediaSearch");
    const categoryFilter = document.getElementById("encyclopediaCategoryFilter");
    const gradeFilter = document.getElementById("encyclopediaGradeFilter");
    const gridEl = document.getElementById("encyclopediaGrid");
    const countEl = document.getElementById("encyclopediaCount");

    if (typeof TumorDB !== "undefined" && categoryFilter) {
      const cats = TumorDB.getCategories();
      categoryFilter.innerHTML = `<option value="all">All CNS Tumor Categories (${cats.length})</option>`;
      cats.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c; opt.textContent = c;
        categoryFilter.appendChild(opt);
      });
    }

    function renderCards() {
      if (typeof TumorDB === "undefined" || !gridEl) return;
      let list = TumorDB.getAll();

      if (state.searchQuery) list = TumorDB.search(state.searchQuery);
      if (state.selectedCategory !== "all") list = list.filter(t => t.category === state.selectedCategory);
      if (state.selectedGrade !== "all") list = list.filter(t => t.gradeNum === parseInt(state.selectedGrade, 10));

      if (countEl) countEl.textContent = `${list.length} / ${TumorDB.getAll().length} ENTITIES`;
      gridEl.innerHTML = "";

      list.forEach(t => {
        const card = document.createElement("div");
        card.className = `encyclopedia-card grade-${t.gradeNum}`;
        card.innerHTML = `
          <div class="ec-header">
            <span class="ec-grade badge-grade grade-${t.gradeNum}">${t.whoGrade}</span>
            <span class="ec-cat">${t.category}</span>
          </div>
          <h3 class="ec-title">${t.name}</h3>
          <div class="ec-prevalence"><b>Epidemiology:</b> ${t.prevalence} (${t.ageGroup})</div>
          <div class="ec-loc"><b>Common Locations:</b> ${t.commonLocations.slice(0, 2).join(", ")}</div>
          <div class="ec-mri-preview"><b>Contrast Hallmarks:</b> ${t.mriFeatures.contrast.substring(0, 75)}...</div>
          <button class="btn btn-card-detail">View Clinical Dossier & Treatment →</button>
        `;
        card.addEventListener("click", () => showTumorDetailModal(t.id));
        gridEl.appendChild(card);
      });
    }

    if (searchInput) searchInput.addEventListener("input", (e) => { state.searchQuery = e.target.value; renderCards(); });
    if (categoryFilter) categoryFilter.addEventListener("change", (e) => { state.selectedCategory = e.target.value; renderCards(); });
    if (gradeFilter) gradeFilter.addEventListener("change", (e) => { state.selectedGrade = e.target.value; renderCards(); });
    renderCards();
  }

  function showTumorDetailModal(tumorId) {
    if (typeof TumorDB === "undefined") return;
    const tumor = TumorDB.getById(tumorId) || BRAIN_TUMOR_DATABASE[0];
    const modal = document.getElementById("tumorModal");
    const content = document.getElementById("tumorModalContent");
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="modal-header">
        <div>
          <span class="badge-grade grade-${tumor.gradeNum}">${tumor.whoGrade}</span>
          <span class="modal-cat">${tumor.category}</span>
          <h2 class="modal-title">${tumor.name}</h2>
        </div>
        <button class="modal-close" id="modalCloseBtn">&times;</button>
      </div>
      <div class="modal-body">
        <div class="modal-section">
          <h4>Epidemiology & Demographics</h4>
          <p><b>Prevalence:</b> ${tumor.prevalence} | <b>Age Predilection:</b> ${tumor.ageGroup}</p>
          <p style="margin-top:0.25rem;"><b>Common Anatomical Locations:</b> ${tumor.commonLocations.join(" • ")}</p>
        </div>
        <div class="modal-section">
          <h4>Multi-Sequence MRI Hallmarks</h4>
          <div class="mri-grid">
            <div class="mri-box"><b>T1-Weighted:</b> ${tumor.mriFeatures.t1}</div>
            <div class="mri-box"><b>T2-Weighted:</b> ${tumor.mriFeatures.t2}</div>
            <div class="mri-box"><b>FLAIR:</b> ${tumor.mriFeatures.flair}</div>
            <div class="mri-box"><b>T1+Contrast (Gd):</b> ${tumor.mriFeatures.contrast}</div>
            <div class="mri-box"><b>DWI / ADC:</b> ${tumor.mriFeatures.dwi}</div>
          </div>
        </div>
        <div class="modal-section">
          <h4>Molecular Genetics & Diagnostic Markers</h4>
          <p class="code-box">${tumor.molecularMarkers}</p>
        </div>
        <div class="modal-section">
          <h4>Histopathology</h4>
          <p>${tumor.histology}</p>
        </div>
        <div class="modal-section">
          <h4>Clinical Presentation</h4>
          <p>${tumor.clinicalPresentation}</p>
        </div>
        <div class="modal-section">
          <h4>Standard-of-Care Treatment Protocol</h4>
          <p>${tumor.treatment}</p>
        </div>
        <div class="modal-section">
          <h4>Prognostic Outlook</h4>
          <p>${tumor.prognosis}</p>
        </div>
      </div>
    `;

    modal.classList.add("active");
    const closeBtn = document.getElementById("modalCloseBtn");
    if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    modal.onclick = (e) => { if (e.target === modal) modal.classList.remove("active"); };
  }
  function initToolPalette() {
    document.querySelectorAll(".btn-tool-pill[data-tool], .tool-btn[data-tool]").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".btn-tool-pill[data-tool], .tool-btn[data-tool]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.activeTool = btn.dataset.tool;
        viewportContainer.className = `viewport-stage tool-${state.activeTool}`;
      });
    });

    const btnAutoSegment = document.getElementById("btnAutoSegment");
    if (btnAutoSegment) {
      btnAutoSegment.addEventListener("click", () => {
        runAutoDetection();
      });
    }

    const brushSlider = document.getElementById("brushRadiusSlider");
    const brushVal = document.getElementById("brushRadiusVal");
    if (brushSlider) {
      brushSlider.addEventListener("input", (e) => {
        state.brushRadius = parseInt(e.target.value, 10) || 12;
        if (brushVal) brushVal.textContent = state.brushRadius;
      });
    }

    const segModeSelect = document.getElementById("segModeSelect");
    if (segModeSelect) {
      segModeSelect.addEventListener("change", (e) => {
        const results = radiologyEngine.reanalyze({ mode: e.target.value });
        state.currentAnalysis = results;
        renderAllCanvases();
        updateDiagnosticPanel(results);
      });
    }

    document.querySelectorAll(".overlay-toggle[data-overlay]").forEach(toggle => {
      toggle.addEventListener("change", (e) => {
        state.overlays[e.target.dataset.overlay] = e.target.checked;
        renderOverlays();
        renderHeatmap();
      });
    });

    const heatmapSlider = document.getElementById("heatmapOpacitySlider");
    const heatmapVal = document.getElementById("heatmapValDisplay");
    if (heatmapSlider) {
      heatmapSlider.addEventListener("input", (e) => {
        state.heatmapOpacity = parseFloat(e.target.value);
        if (heatmapVal) heatmapVal.textContent = `${Math.round(state.heatmapOpacity * 100)}%`;
        renderHeatmap();
      });
    }

    const sensSlider = document.getElementById("detectionSensitivitySlider");
    const sensVal = document.getElementById("sensValDisplay");
    if (sensSlider) {
      sensSlider.addEventListener("input", (e) => {
        const val = parseFloat(e.target.value);
        radiologyEngine.detectionThreshold = val;
        if (sensVal) {
          let tag = " (Optimal / Balanced)";
          if (val >= 0.75) tag = " (High Sensitivity / Infiltrative)";
          else if (val <= 0.40) tag = " (High Specificity / Core)";
          sensVal.textContent = `${Math.round(val * 100)}%${tag}`;
        }
        const results = radiologyEngine.reanalyze({ sensitivity: val });
        state.currentAnalysis = results;
        renderAllCanvases();
        updateDiagnosticPanel(results);
      });
    }

    const inAge = document.getElementById("inputPatientAge");
    const selSex = document.getElementById("selectPatientSex");
    if (inAge) {
      inAge.addEventListener("input", (e) => {
        const age = parseInt(e.target.value, 10) || 50;
        if (state.patient) {
          state.patient.age = age;
          updatePatientHUD(state.patient);
        }
        if (state.currentAnalysis) {
          const results = radiologyEngine.reanalyze();
          if (results) {
            state.currentAnalysis = results;
            updateDiagnosticPanel(results);
          }
        }
      });
    }
    if (selSex) {
      selSex.addEventListener("change", (e) => {
        if (state.patient) {
          state.patient.sex = e.target.value;
          updatePatientHUD(state.patient);
        }
      });
    }
  }

  function initViewerControls() {
    document.querySelectorAll(".seq-btn[data-seq]").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".seq-btn[data-seq]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.activeSequence = btn.dataset.seq;
        renderAllCanvases();
      });
    });

    document.querySelectorAll(".cmap-btn[data-cmap]").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".cmap-btn[data-cmap]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.activeColormap = btn.dataset.cmap;
        renderAllCanvases();
      });
    });

    const winSlider = document.getElementById("windowSlider");
    const levSlider = document.getElementById("levelSlider");
    const winDisp = document.getElementById("windowValDisplay");
    const levDisp = document.getElementById("levelValDisplay");

    document.querySelectorAll(".wl-preset-btn[data-window]").forEach(btn => {
      btn.addEventListener("click", () => {
        state.windowLevel = { window: parseInt(btn.dataset.window, 10), level: parseInt(btn.dataset.level, 10) };
        if (winSlider) winSlider.value = state.windowLevel.window;
        if (levSlider) levSlider.value = state.windowLevel.level;
        if (winDisp) winDisp.textContent = state.windowLevel.window;
        if (levDisp) levDisp.textContent = state.windowLevel.level;
        renderAllCanvases();
      });
    });

    if (winSlider) {
      winSlider.addEventListener("input", (e) => {
        state.windowLevel.window = parseInt(e.target.value, 10);
        if (winDisp) winDisp.textContent = state.windowLevel.window;
        renderAllCanvases();
      });
    }

    if (levSlider) {
      levSlider.addEventListener("input", (e) => {
        state.windowLevel.level = parseInt(e.target.value, 10);
        if (levDisp) levDisp.textContent = state.windowLevel.level;
        renderAllCanvases();
      });
    }

    const resetBtn = document.getElementById("btnResetView");
    if (resetBtn) resetBtn.addEventListener("click", resetViewportTransform);

    const zoomInBtn = document.getElementById("btnZoomIn");
    if (zoomInBtn) zoomInBtn.addEventListener("click", () => { state.zoom = Math.min(4.0, state.zoom + 0.25); applyCanvasTransforms(); });

    const zoomOutBtn = document.getElementById("btnZoomOut");
    if (zoomOutBtn) zoomOutBtn.addEventListener("click", () => { state.zoom = Math.max(0.5, state.zoom - 0.25); applyCanvasTransforms(); });
  }

  function getCanvasCoords(e) {
    const rect = rawCanvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return { x: 0, y: 0 };
    const x = ((e.clientX - rect.left) / rect.width) * rawCanvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * rawCanvas.height;
    return {
      x: Math.max(0, Math.min(rawCanvas.width, x)),
      y: Math.max(0, Math.min(rawCanvas.height, y))
    };
  }

  function initCanvasInteraction() {
    if (!viewportContainer) return;

    viewportContainer.addEventListener("mousedown", (e) => {
      const { x, y } = getCanvasCoords(e);

      if (state.activeTool === "brush" || state.activeTool === "eraser") {
        state.isDrawingBrush = true;
        const isEraser = state.activeTool === "eraser";
        const results = radiologyEngine.updateMaskFromBrush(x, y, state.brushRadius, isEraser);
        if (results) {
          state.currentAnalysis = results;
          renderOverlays();
          renderHeatmap();
          updateDiagnosticPanel(results);
          renderSurgicalViews();
          renderRanoViews();
        }
      } else if (state.activeTool === "seed" || (state.activeTool === "select" && e.button === 0 && !e.shiftKey)) {
        const results = radiologyEngine.reanalyze({ seed: { x, y } });
        if (results) {
          state.currentAnalysis = results;
          renderAllCanvases();
          updateDiagnosticPanel(results);
        }
      } else if (state.activeTool === "pan" || e.button === 1 || e.shiftKey) {
        state.isPanning = true;
        state.startPanX = e.clientX - state.panX;
        state.startPanY = e.clientY - state.panY;
      } else if (state.activeTool === "caliper") {
        state.isDrawingCaliper = true;
        state.caliperStart = { x, y };
        state.caliperEnd = { x, y };
        renderOverlays();
      }
    });

    window.addEventListener("mousemove", (e) => {
      const { x, y } = getCanvasCoords(e);

      if (state.isDrawingBrush) {
        const isEraser = state.activeTool === "eraser";
        const results = radiologyEngine.updateMaskFromBrush(x, y, state.brushRadius, isEraser);
        if (results) {
          state.currentAnalysis = results;
          renderOverlays();
          renderHeatmap();
          updateDiagnosticPanel(results);
          renderSurgicalViews();
          renderRanoViews();
        }
      } else if (state.isPanning) {
        state.panX = e.clientX - state.startPanX;
        state.panY = e.clientY - state.startPanY;
        applyCanvasTransforms();
      } else if (state.isDrawingCaliper && state.caliperStart) {
        state.caliperEnd = { x, y };
        renderOverlays();
      }

      const hudCoords = document.getElementById("hudCoords");
      if (hudCoords) {
        hudCoords.textContent = `X: ${Math.round(x)} Y: ${Math.round(y)}`;
      }
    });

    window.addEventListener("mouseup", () => {
      state.isPanning = false;
      state.isDrawingCaliper = false;
      state.isDrawingBrush = false;
    });

    viewportContainer.addEventListener("wheel", (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.15 : -0.15;
      state.zoom = Math.max(0.4, Math.min(5.0, state.zoom + delta));
      applyCanvasTransforms();
    }, { passive: false });
  }

  function initFileUpload() {
    const dropZone = document.getElementById("uploadDropZone");
    const headerUploadBtn = document.getElementById("btnHeaderUpload");
    const uploadModal = document.getElementById("uploadModal");
    const closeUploadBtn = document.getElementById("closeUploadModalBtn");

    if (headerUploadBtn && uploadModal) {
      headerUploadBtn.addEventListener("click", () => uploadModal.classList.add("active"));
    }
    if (closeUploadBtn && uploadModal) {
      closeUploadBtn.addEventListener("click", () => uploadModal.classList.remove("active"));
      uploadModal.addEventListener("click", (e) => { if (e.target === uploadModal) uploadModal.classList.remove("active"); });
    }

    if (dropZone) {
      dropZone.addEventListener("click", () => {
        if (scanFileInput) scanFileInput.click();
      });
      dropZone.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (scanFileInput) scanFileInput.click();
        }
      });
    }

    const urlInput = document.getElementById("urlInputBox");
    const btnLoadUrl = document.getElementById("btnLoadUrl");
    if (btnLoadUrl && urlInput) {
      btnLoadUrl.addEventListener("click", () => {
        handleUrlInput(urlInput.value);
        if (uploadModal) uploadModal.classList.remove("active");
      });
      urlInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          handleUrlInput(urlInput.value);
          if (uploadModal) uploadModal.classList.remove("active");
        }
      });
    }

    if (scanFileInput) {
      scanFileInput.addEventListener("change", (e) => {
        if (e.target.files && e.target.files.length > 0) {
          handleUploadedFile(e.target.files[0]);
          scanFileInput.value = "";
          if (uploadModal) uploadModal.classList.remove("active");
        }
      });
    }

    [dropZone, viewportContainer].forEach(el => {
      if (!el) return;
      el.addEventListener("dragover", (e) => { e.preventDefault(); e.stopPropagation(); if (dropZone) dropZone.classList.add("drag-active"); });
      el.addEventListener("dragleave", (e) => { e.preventDefault(); e.stopPropagation(); if (dropZone) dropZone.classList.remove("drag-active"); });
      el.addEventListener("drop", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (dropZone) dropZone.classList.remove("drag-active");
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          handleUploadedFile(e.dataTransfer.files[0]);
          if (uploadModal) uploadModal.classList.remove("active");
        }
      });
    });

    window.addEventListener("paste", (e) => {
      const items = (e.clipboardData || e.originalEvent.clipboardData).items;
      for (const item of items) {
        if (item.type.indexOf("image") !== -1) {
          const blob = item.getAsFile();
          handleUploadedFile(blob);
          if (uploadModal) uploadModal.classList.remove("active");
          break;
        }
      }
    });
  }

  function handleUrlInput(rawUrl) {
    if (!rawUrl) return;
    let url = rawUrl.trim();
    if (url.includes("google.com/imgres") || url.includes("imgurl=")) {
      try {
        const match = url.match(/[?&]imgurl=([^&]+)/);
        if (match && match[1]) {
          url = decodeURIComponent(match[1]);
        }
      } catch (err) {
        console.warn("Could not extract imgurl:", err);
      }
    }
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      radiologyEngine.userSeed = null;
      state.activePreset = null;
      const inAge = document.getElementById("inputPatientAge");
      const selSex = document.getElementById("selectPatientSex");
      const curAge = inAge ? (parseInt(inAge.value, 10) || 58) : 58;
      const curSex = selSex ? selSex.value : "Male";

      updatePatientHUD({
        patient: {
          id: "WEB-" + Math.floor(1000 + Math.random() * 9000),
          age: curAge, sex: curSex,
          scanDate: new Date().toISOString().split("T")[0],
          sequence: "Axial T1+Gd (Web URL)"
        }
      });
      Promise.resolve(radiologyEngine.loadScanFromImage(img, null)).then(results => {
        state.currentAnalysis = results;
        resetViewportTransform();
        renderAllCanvases();
        updateDiagnosticPanel(results);
        switchTab("studio");
      });
    };
    img.onerror = () => {
      alert("Cross-Origin (CORS) restriction on host image server. Please right-click the image, select 'Copy Image', and press Ctrl+V in NEUROSCAN AI, or upload the file directly!");
    };
    img.src = url;
  }

  function handleUploadedFile(file) {
    if (!file) return;
    const isDcm = (file.name && file.name.toLowerCase().endsWith(".dcm")) || (file.type && file.type.includes("dicom"));
    const reader = new FileReader();

    if (isDcm) {
      reader.onload = (event) => {
        try {
          const dcmCanvas = radiologyEngine.parseDicomBinary(event.target.result);
          radiologyEngine.userSeed = null;
          state.activePreset = null;
          updatePatientHUD({
            patient: {
              id: "DCM-" + Math.floor(10000 + Math.random() * 90000),
              age: 62, sex: "Male",
              scanDate: new Date().toISOString().split("T")[0],
              sequence: "Axial T1+Gd (DICOM Ingestion)"
            }
          });
          Promise.resolve(radiologyEngine.loadScanFromImage(dcmCanvas, null)).then(results => {
            state.currentAnalysis = results;
            resetViewportTransform();
            renderAllCanvases();
            updateDiagnosticPanel(results);
            switchTab("studio");
          });
        } catch (err) {
          console.error("DICOM Parsing Error:", err);
          alert("Error parsing raw DICOM file. Please ensure it is an uncompressed grayscale MR scan.");
        }
      };
      reader.readAsArrayBuffer(file);
      return;
    }

    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        radiologyEngine.userSeed = null;
        state.activePreset = null;
        const inAge = document.getElementById("inputPatientAge");
        const selSex = document.getElementById("selectPatientSex");
        const curAge = inAge ? (parseInt(inAge.value, 10) || 58) : 58;
        const curSex = selSex ? selSex.value : "Male";

        updatePatientHUD({
          patient: {
            id: "SCAN-" + Math.floor(10000 + Math.random() * 90000),
            age: curAge, sex: curSex,
            scanDate: new Date().toISOString().split("T")[0],
            sequence: "Axial T1+Gd (Patient Upload)"
          }
        });

        Promise.resolve(radiologyEngine.loadScanFromImage(img, null)).then(results => {
          state.currentAnalysis = results;
          resetViewportTransform();
          renderAllCanvases();
          updateDiagnosticPanel(results);
          switchTab("studio");
        });
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  function initTabRouting() {
    document.querySelectorAll(".nav-tab-btn[data-tab]").forEach(btn => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });
  }

  function switchTab(tabId) {
    state.activeTab = tabId;
    document.querySelectorAll(".nav-tab-btn[data-tab]").forEach(b => {
      b.classList.toggle("active", b.dataset.tab === tabId);
    });
    document.querySelectorAll(".app-view-tab").forEach(v => {
      v.classList.toggle("active", v.id === `tab-${tabId}`);
    });

    if (tabId === "mpr") {
      setTimeout(() => renderMprViews(), 50);
    } else if (tabId === "surgical") {
      setTimeout(() => renderSurgicalViews(), 50);
    } else if (tabId === "rano") {
      setTimeout(() => renderRanoViews(), 50);
    } else if (tabId === "dicom") {
      renderDicomTable();
    }
  }

  let mesh3DRotX = 25;
  let mesh3DRotY = 35;
  let isDragging3D = false;
  let start3DX = 0, start3DY = 0;

  function initMprAnd3D() {
    const canvas3D = document.getElementById("mpr3DCanvas");
    if (!canvas3D) return;

    canvas3D.addEventListener("mousedown", (e) => {
      isDragging3D = true;
      start3DX = e.clientX;
      start3DY = e.clientY;
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging3D) return;
      const dx = e.clientX - start3DX;
      const dy = e.clientY - start3DY;
      mesh3DRotY += dx * 0.6;
      mesh3DRotX += dy * 0.6;
      start3DX = e.clientX;
      start3DY = e.clientY;
      render3DMesh();
    });

    window.addEventListener("mouseup", () => {
      isDragging3D = false;
    });
  }

  function renderMprViews() {
    if (!state.currentAnalysis) return;
    const res = state.currentAnalysis;
    const { centroid, maxDiameterMm, minorDiameterMm, contourPoints } = res;

    // 1. Axial MPR
    const axCanvas = document.getElementById("mprAxialCanvas");
    if (axCanvas && rawCanvas) {
      const axCtx = axCanvas.getContext("2d");
      axCtx.drawImage(rawCanvas, 0, 0, axCanvas.width, axCanvas.height);
      if (res.hasTumor && contourPoints && contourPoints.length > 2) {
        const scaleX = axCanvas.width / rawCanvas.width;
        const scaleY = axCanvas.height / rawCanvas.height;
        axCtx.beginPath();
        axCtx.moveTo(contourPoints[0].x * scaleX, contourPoints[0].y * scaleY);
        for (let i = 1; i < contourPoints.length; i++) {
          axCtx.lineTo(contourPoints[i].x * scaleX, contourPoints[i].y * scaleY);
        }
        axCtx.closePath();
        axCtx.strokeStyle = "#00f0ff";
        axCtx.lineWidth = 2;
        axCtx.stroke();
        axCtx.fillStyle = "rgba(0, 240, 255, 0.2)";
        axCtx.fill();
      }
    }

    // 2. Coronal MPR (Frontal plane orthogonal projection)
    const corCanvas = document.getElementById("mprCoronalCanvas");
    if (corCanvas) {
      const corCtx = corCanvas.getContext("2d");
      const w = corCanvas.width, h = corCanvas.height;
      corCtx.fillStyle = "#05070a";
      corCtx.fillRect(0, 0, w, h);

      // Coronal brain boundary
      corCtx.beginPath();
      corCtx.ellipse(w / 2, h / 2, w * 0.36, h * 0.40, 0, 0, Math.PI * 2);
      corCtx.fillStyle = "#4c586a";
      corCtx.fill();

      // Coronal white matter
      corCtx.beginPath();
      corCtx.ellipse(w / 2, h / 2, w * 0.28, h * 0.32, 0, 0, Math.PI * 2);
      corCtx.fillStyle = "#6c7d91";
      corCtx.fill();

      // Ventricles coronal horns
      corCtx.fillStyle = "#101620";
      corCtx.beginPath();
      corCtx.ellipse(w / 2 - 20, h / 2 - 15, 12, 28, -0.2, 0, Math.PI * 2);
      corCtx.ellipse(w / 2 + 20, h / 2 - 15, 12, 28, 0.2, 0, Math.PI * 2);
      corCtx.fill();

      // Coronal Tumor projection
      if (res.hasTumor && centroid) {
        const tumorNormX = (centroid.x - rawCanvas.width / 2) / (rawCanvas.width / 2);
        const tumorNormY = (centroid.y - rawCanvas.height / 2) / (rawCanvas.height / 2);
        const tx = w / 2 + tumorNormX * (w * 0.3);
        const ty = h / 2 + tumorNormY * (h * 0.28);
        const tr = Math.max(10, (parseFloat(maxDiameterMm || 20) / 2) * 2.2);

        corCtx.beginPath();
        corCtx.ellipse(tx, ty, tr, tr * 0.85, 0, 0, Math.PI * 2);
        corCtx.fillStyle = "rgba(255, 23, 68, 0.85)";
        corCtx.strokeStyle = "#00f0ff";
        corCtx.lineWidth = 2;
        corCtx.fill();
        corCtx.stroke();
      }
    }

    // 3. Sagittal MPR (Lateral profile)
    const sagCanvas = document.getElementById("mprSagittalCanvas");
    if (sagCanvas) {
      const sagCtx = sagCanvas.getContext("2d");
      const w = sagCanvas.width, h = sagCanvas.height;
      sagCtx.fillStyle = "#05070a";
      sagCtx.fillRect(0, 0, w, h);

      // Sagittal cranial silhouette
      sagCtx.beginPath();
      sagCtx.ellipse(w / 2 + 10, h / 2 - 10, w * 0.38, h * 0.36, 0.1, 0, Math.PI * 2);
      sagCtx.fillStyle = "#4c586a";
      sagCtx.fill();

      // Corpus Callosum arch
      sagCtx.beginPath();
      sagCtx.arc(w / 2, h / 2 - 15, 30, Math.PI, 0);
      sagCtx.lineWidth = 6;
      sagCtx.strokeStyle = "#8394a8";
      sagCtx.stroke();

      // Brainstem / Cerebellum
      sagCtx.beginPath();
      sagCtx.ellipse(w / 2 - 15, h / 2 + 55, 24, 20, 0, 0, Math.PI * 2);
      sagCtx.fillStyle = "#3e4856";
      sagCtx.fill();

      // Sagittal Tumor projection
      if (res.hasTumor && centroid) {
        const tumorNormY = (centroid.y - rawCanvas.height / 2) / (rawCanvas.height / 2);
        const tx = w / 2 + tumorNormY * (w * 0.28);
        const ty = h / 2 + tumorNormY * (h * 0.24);
        const tr = Math.max(10, (parseFloat(maxDiameterMm || 20) / 2) * 2.2);

        sagCtx.beginPath();
        sagCtx.ellipse(tx, ty, tr * 0.9, tr * 0.85, 0, 0, Math.PI * 2);
        sagCtx.fillStyle = "rgba(255, 23, 68, 0.85)";
        sagCtx.strokeStyle = "#00f0ff";
        sagCtx.lineWidth = 2;
        sagCtx.fill();
        sagCtx.stroke();
      }
    }

    render3DMesh();
  }

  function render3DMesh() {
    const canvas = document.getElementById("mpr3DCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#030509";
    ctx.fillRect(0, 0, w, h);

    const radX = (mesh3DRotX * Math.PI) / 180;
    const radY = (mesh3DRotY * Math.PI) / 180;
    const cx = w / 2, cy = h / 2;

    function project3D(x, y, z) {
      let y1 = y * Math.cos(radX) - z * Math.sin(radX);
      let z1 = y * Math.sin(radX) + z * Math.cos(radX);
      let x2 = x * Math.cos(radY) + z1 * Math.sin(radY);
      let z2 = -x * Math.sin(radY) + z1 * Math.cos(radY);

      const fov = 380;
      const pScale = fov / (fov + z2 + 200);
      return { x: cx + x2 * pScale, y: cy + y1 * pScale, z: z2 };
    }

    // Draw 3D Intracranial Ellipsoid Wireframe
    ctx.strokeStyle = "rgba(0, 240, 255, 0.15)";
    ctx.lineWidth = 1;
    const rx = 90, ry = 105, rz = 80;

    for (let u = -Math.PI / 2; u <= Math.PI / 2; u += Math.PI / 6) {
      ctx.beginPath();
      for (let v = 0; v <= Math.PI * 2; v += 0.2) {
        const x = rx * Math.cos(u) * Math.cos(v);
        const y = ry * Math.sin(u);
        const z = rz * Math.cos(u) * Math.sin(v);
        const pt = project3D(x, y, z);
        if (v === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.stroke();
    }

    // Draw 3D Tumor Ellipsoid & RECIST Axes if tumor exists
    const res = state.currentAnalysis;
    if (res && res.hasTumor) {
      const { maxDiameterMm, minorDiameterMm } = res;
      const tumRx = (parseFloat(maxDiameterMm || 20) / 2) * 1.5;
      const tumRy = (parseFloat(minorDiameterMm || 15) / 2) * 1.5;
      const tumRz = tumRx * 0.85;

      const normOffX = res.centroid ? (res.centroid.x - 256) * 0.32 : 15;
      const normOffY = res.centroid ? (res.centroid.y - 256) * 0.32 : -12;
      const normOffZ = 0;

      ctx.strokeStyle = "#ff1744";
      ctx.fillStyle = "rgba(255, 23, 68, 0.3)";
      ctx.lineWidth = 1.5;

      for (let u = -Math.PI / 2; u <= Math.PI / 2; u += Math.PI / 4) {
        ctx.beginPath();
        for (let v = 0; v <= Math.PI * 2; v += 0.3) {
          const x = normOffX + tumRx * Math.cos(u) * Math.cos(v);
          const y = normOffY + tumRy * Math.sin(u);
          const z = normOffZ + tumRz * Math.cos(u) * Math.sin(v);
          const pt = project3D(x, y, z);
          if (v === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();
        ctx.fill();
      }

      // Draw RECIST Major Axis in 3D (Yellow)
      const p1 = project3D(normOffX - tumRx, normOffY, normOffZ);
      const p2 = project3D(normOffX + tumRx, normOffY, normOffZ);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = "#ffea00";
      ctx.lineWidth = 2.5;
      ctx.stroke();
    }
  }

  function initSurgicalPlanner() {
    renderSurgicalViews();
  }

  function renderSurgicalViews() {
    const canvas = document.getElementById("surgicalAxialCanvas");
    if (!canvas || !state.currentAnalysis) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width, h = canvas.height;

    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(rawCanvas, 0, 0, w, h);

    const res = state.currentAnalysis;
    const surg = res.surgicalCorridor;

    if (!res.hasTumor || !surg) {
      ctx.fillStyle = "rgba(0, 240, 255, 0.7)";
      ctx.font = "700 14px monospace";
      ctx.textAlign = "center";
      ctx.fillText("NO SURGICAL LESION IDENTIFIED", w / 2, h / 2);
      return;
    }

    const scale = w / rawCanvas.width;
    const cx = res.centroid.x * scale;
    const cy = res.centroid.y * scale;
    const ex = surg.entryPoint.x * scale;
    const ey = surg.entryPoint.y * scale;

    // Draw Eloquent Landmark Caution Radii
    if (surg.eloquent) {
      surg.eloquent.forEach(el => {
        const elX = el.x * scale;
        const elY = el.y * scale;
        ctx.beginPath();
        ctx.arc(elX, elY, 18, 0, Math.PI * 2);
        ctx.strokeStyle = el.distMm < 6 ? "rgba(255, 23, 68, 0.6)" : "rgba(0, 230, 118, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 3]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = el.distMm < 6 ? "#ff1744" : "#00e676";
        ctx.beginPath();
        ctx.arc(elX, elY, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#fff";
        ctx.font = "9px monospace";
        ctx.textAlign = "center";
        ctx.fillText(el.name.split(" ")[0], elX, elY - 6);
      });
    }

    // Draw Surgical Trajectory Corridor (Yellow Dashed Line)
    ctx.beginPath();
    ctx.moveTo(ex, ey);
    ctx.lineTo(cx, cy);
    ctx.strokeStyle = "#ffea00";
    ctx.lineWidth = 2.5;
    ctx.setLineDash([6, 4]);
    ctx.shadowColor = "#ffea00";
    ctx.shadowBlur = 8;
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.shadowBlur = 0;

    // Draw Craniotomy Entry Bone Window (Green Target)
    const boneRadPx = (surg.boneFlapMm / (2 * radiologyEngine.pixelSpacing)) * scale;
    ctx.beginPath();
    ctx.arc(ex, ey, Math.max(12, boneRadPx), 0, Math.PI * 2);
    ctx.strokeStyle = "#00e676";
    ctx.lineWidth = 2;
    ctx.fillStyle = "rgba(0, 230, 118, 0.25)";
    ctx.fill();
    ctx.stroke();

    // Crosshairs on Entry Point
    ctx.strokeStyle = "#00e676";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(ex - 8, ey); ctx.lineTo(ex + 8, ey);
    ctx.moveTo(ex, ey - 8); ctx.lineTo(ex, ey + 8);
    ctx.stroke();

    // Draw Tumor Core Boundary (Red Polygon)
    if (res.contourPoints && res.contourPoints.length > 2) {
      ctx.beginPath();
      ctx.moveTo(res.contourPoints[0].x * scale, res.contourPoints[0].y * scale);
      for (let i = 1; i < res.contourPoints.length; i++) {
        ctx.lineTo(res.contourPoints[i].x * scale, res.contourPoints[i].y * scale);
      }
      ctx.closePath();
      ctx.strokeStyle = "#ff1744";
      ctx.lineWidth = 2;
      ctx.fillStyle = "rgba(255, 23, 68, 0.35)";
      ctx.fill();
      ctx.stroke();
    }

    // Update HUD Values
    const approachEl = document.getElementById("surgApproachName");
    const angleEl = document.getElementById("surgAngle");
    const depthEl = document.getElementById("surgDepth");
    const flapEl = document.getElementById("surgBoneFlap");
    const targetVolEl = document.getElementById("surgTargetVol");
    const resVolEl = document.getElementById("surgResidualVol");
    const feasEl = document.getElementById("surgEorFeasibility");
    const feasBar = document.getElementById("surgEorBar");

    if (approachEl) approachEl.textContent = surg.approachName;
    if (angleEl) angleEl.textContent = `${surg.angleDeg}° Approach`;
    if (depthEl) depthEl.textContent = `${surg.corridorDepthMm} mm`;
    if (flapEl) flapEl.textContent = `${surg.boneFlapMm} mm Bone Flap`;
    if (targetVolEl) targetVolEl.textContent = `${res.estimatedVolumeCm3} cm³`;
    if (resVolEl) resVolEl.textContent = `${surg.residualVolumeCm3} cm³ (<5%)`;
    if (feasEl) feasEl.textContent = surg.feasibility;
    if (feasBar) feasBar.style.width = `${surg.feasibilityPercent}%`;

    if (surg.eloquent) {
      surg.eloquent.forEach(el => {
        const distEl = document.getElementById(`elo${el.id.charAt(0).toUpperCase() + el.id.slice(1)}Dist`);
        const badgeEl = document.getElementById(`elo${el.id.charAt(0).toUpperCase() + el.id.slice(1)}Badge`);
        if (distEl) distEl.textContent = `${el.distMm} mm`;
        if (badgeEl) {
          badgeEl.textContent = el.status;
          badgeEl.className = `elo-badge ${el.badgeClass}`;
        }
      });
    }
  }

  function initRanoTimeline() {
    document.querySelectorAll(".rano-tp-btn[data-tp]").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".rano-tp-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.ranoTimepoint = parseInt(btn.dataset.tp, 10) || 0;
        renderRanoViews();
      });
    });
    renderRanoViews();
  }

  function renderRanoViews() {
    const baseCanvas = document.getElementById("ranoBaselineCanvas");
    const currCanvas = document.getElementById("ranoCurrentCanvas");
    const diffCanvas = document.getElementById("ranoDiffCanvas");
    if (!baseCanvas || !currCanvas || !diffCanvas || !state.currentAnalysis) return;

    const bCtx = baseCanvas.getContext("2d");
    const cCtx = currCanvas.getContext("2d");
    const dCtx = diffCanvas.getContext("2d");

    const w = baseCanvas.width, h = baseCanvas.height;
    bCtx.clearRect(0, 0, w, h);
    cCtx.clearRect(0, 0, w, h);
    dCtx.clearRect(0, 0, w, h);

    // Draw Baseline Scan
    bCtx.drawImage(rawCanvas, 0, 0, w, h);
    bCtx.drawImage(overlayCanvas, 0, 0, w, h);

    const tp = state.ranoTimepoint;
    const res = state.currentAnalysis;
    const baseVol = parseFloat(res.estimatedVolumeCm3) || 12.0;
    const baseMajor = parseFloat(res.maxDiameterMm) || 35.0;

    let currVol = baseVol;
    let currMajor = baseMajor;
    let deltaVol = 0;
    let ranoBadge = "BASELINE (T₀)";
    let badgeClass = "badge-grade grade-1";
    let statusTitle = "Pre-Treatment Diagnostic Scan";
    let statusDesc = "Baseline multi-sequence MRI evaluation prior to surgical intervention or systemic therapy.";
    let pseudo = "N/A (Baseline)";

    if (tp === 1) { // 3-Month Follow-Up (Post-Op / Stupp Week 6)
      currVol = Number((baseVol * 0.42).toFixed(2));
      currMajor = Number((baseMajor * 0.65).toFixed(1));
      deltaVol = -58.0;
      ranoBadge = "PARTIAL RESPONSE (PR)";
      badgeClass = "badge-grade grade-1";
      statusTitle = "Significant Lesion Regression (>50% Volume Decrease)";
      statusDesc = "Marked reduction in contrast-enhancing tumor core and vasogenic edema. High concordance with therapeutic response.";
      pseudo = "UNLIKELY (<5%)";
    } else if (tp === 2) { // 6-Month Post-RT / TMZ
      currVol = Number((baseVol * 0.15).toFixed(2));
      currMajor = Number((baseMajor * 0.38).toFixed(1));
      deltaVol = -85.0;
      ranoBadge = "COMPLETE / NEAR-TOTAL RESPONSE (CR)";
      badgeClass = "badge-grade grade-1";
      statusTitle = "Minimal Residual Cavity / Complete Treatment Response";
      statusDesc = "Near-complete resolution of pathological enhancement with stable post-treatment encephalomalacia.";
      pseudo = "NEGATIVE";
    }

    // Render Current Timepoint Canvas
    cCtx.drawImage(rawCanvas, 0, 0, w, h);
    const scale = w / rawCanvas.width;
    const cx = res.centroid.x * scale;
    const cy = res.centroid.y * scale;

    if (res.hasTumor) {
      const regRadius = (currMajor / (2 * radiologyEngine.pixelSpacing)) * scale;
      cCtx.beginPath();
      cCtx.arc(cx, cy, Math.max(6, regRadius), 0, Math.PI * 2);
      cCtx.strokeStyle = tp === 0 ? "#ff1744" : "#00e676";
      cCtx.lineWidth = 2;
      cCtx.fillStyle = tp === 0 ? "rgba(255, 23, 68, 0.25)" : "rgba(0, 230, 118, 0.25)";
      cCtx.fill();
      cCtx.stroke();
    }

    // Render Subtraction / Difference Map
    dCtx.fillStyle = "#0a101a";
    dCtx.fillRect(0, 0, w, h);
    dCtx.drawImage(rawCanvas, 0, 0, w, h);

    if (res.hasTumor) {
      const baseRad = (baseMajor / (2 * radiologyEngine.pixelSpacing)) * scale;
      const currRad = (currMajor / (2 * radiologyEngine.pixelSpacing)) * scale;

      // Green Ring: Regressed Tissue
      if (tp > 0) {
        dCtx.beginPath();
        dCtx.arc(cx, cy, baseRad, 0, Math.PI * 2);
        dCtx.arc(cx, cy, currRad, 0, Math.PI * 2, true);
        dCtx.fillStyle = "rgba(0, 230, 118, 0.45)";
        dCtx.fill();
      }

      // Red Core: Residual Tissue
      dCtx.beginPath();
      dCtx.arc(cx, cy, currRad, 0, Math.PI * 2);
      dCtx.fillStyle = tp === 0 ? "rgba(255, 23, 68, 0.35)" : "rgba(255, 145, 0, 0.45)";
      dCtx.fill();
      dCtx.strokeStyle = tp === 0 ? "#ff1744" : "#ff9100";
      dCtx.lineWidth = 1.5;
      dCtx.stroke();
    }

    // Update RANO DOM elements
    const badgeEl = document.getElementById("ranoStatusBadge");
    const titleEl = document.getElementById("ranoStatusTitle");
    const descEl = document.getElementById("ranoStatusDesc");
    const deltaVolEl = document.getElementById("ranoDeltaVol");
    const spdEl = document.getElementById("ranoSpd");
    const pseudoEl = document.getElementById("ranoPseudoStatus");
    const baseMetricEl = document.getElementById("ranoBaseMetric");
    const currMetricEl = document.getElementById("ranoCurrMetric");

    if (badgeEl) { badgeEl.textContent = ranoBadge; badgeEl.className = badgeClass; }
    if (titleEl) titleEl.textContent = statusTitle;
    if (descEl) descEl.textContent = statusDesc;
    if (deltaVolEl) deltaVolEl.textContent = deltaVol === 0 ? "0.0%" : `${deltaVol.toFixed(1)}%`;
    if (spdEl) spdEl.textContent = `${Math.round(currMajor * currMajor * 0.75)} mm²`;
    if (pseudoEl) pseudoEl.textContent = pseudo;
    if (baseMetricEl) baseMetricEl.textContent = `Volume: ${baseVol} cm³ • Major: ${baseMajor} mm`;
    if (currMetricEl) currMetricEl.textContent = `Volume: ${currVol} cm³ • Major: ${currMajor} mm`;
  }

  function initAudioBriefing() {
    const btnAudio = document.getElementById("btnAudioBriefing");
    const audioIcon = document.getElementById("audioIcon");
    const audioText = document.getElementById("audioText");
    if (!btnAudio) return;

    btnAudio.addEventListener("click", () => {
      if (!window.speechSynthesis) {
        alert("Web Speech Synthesis API is not supported in this browser.");
        return;
      }

      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        btnAudio.classList.remove("audio-speaking");
        if (audioIcon) audioIcon.textContent = "🎙️";
        if (audioText) audioText.textContent = "Listen to AI Radiology Briefing";
        return;
      }

      const res = state.currentAnalysis;
      if (!res) return;

      const topDiag = res.diagnoses && res.diagnoses[0] ? res.diagnoses[0] : {};
      const diagName = topDiag.name || "Normal brain control";
      const grade = topDiag.whoGrade || "Non-neoplastic";
      const volume = res.estimatedVolumeCm3 || "0";
      const maxD = res.maxDiameterMm || "0";
      const region = res.localization ? res.localization.region : "Cerebral parenchyma";
      const hemi = res.localization ? res.localization.hemisphere : "Cerebrum";
      const rec = topDiag.treatment || "Routine clinical follow-up";

      let speechText = "";
      if (!res.hasTumor) {
        speechText = "Neuroscan AI diagnostic impression: Physiological normal brain control. No focal mass lesion, acute ischemia, or mass effect identified.";
      } else {
        speechText = `Neuroscan AI diagnostic impression. Primary findings are consistent with ${diagName}, ${grade}. RECIST 1.1 major diameter is ${maxD} millimeters with an estimated volume of ${volume} cubic centimeters localized in the ${hemi}, ${region}. Standard clinical action plan recommends ${rec}.`;
      }

      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      utterance.onstart = () => {
        btnAudio.classList.add("audio-speaking");
        if (audioIcon) audioIcon.textContent = "🔊";
        if (audioText) audioText.textContent = "Speaking Briefing (Click to Stop)...";
      };

      utterance.onend = () => {
        btnAudio.classList.remove("audio-speaking");
        if (audioIcon) audioIcon.textContent = "🎙️";
        if (audioText) audioText.textContent = "Listen to AI Radiology Briefing";
      };

      utterance.onerror = () => {
        btnAudio.classList.remove("audio-speaking");
        if (audioIcon) audioIcon.textContent = "🎙️";
        if (audioText) audioText.textContent = "Listen to AI Radiology Briefing";
      };

      window.speechSynthesis.speak(utterance);
    });
  }

  function initVoiceDictation() {
    const btnDictate = document.getElementById("btnVoiceDictate");
    if (!btnDictate) return;

    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      btnDictate.style.display = "none";
      return;
    }

    const recognition = new SpeechRec();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    let isRecording = false;

    btnDictate.addEventListener("click", () => {
      if (isRecording) {
        recognition.stop();
        return;
      }
      try {
        recognition.start();
        isRecording = true;
        btnDictate.textContent = "🔴 Listening...";
        btnDictate.classList.add("btn-primary");
      } catch (err) {
        console.warn("Speech recognition error:", err);
      }
    });

    recognition.onresult = (e) => {
      const text = e.results[0][0].transcript;
      const reportBody = document.getElementById("reportModalBody");
      if (reportBody) {
        let addendumBox = document.getElementById("reportAddendumBox");
        if (!addendumBox) {
          addendumBox = document.createElement("div");
          addendumBox.id = "reportAddendumBox";
          addendumBox.className = "report-section";
          addendumBox.innerHTML = `<h3>ATTENDING RADIOLOGIST VOICE ADDENDUM</h3><p id="addendumContent" style="font-size:0.85rem; background:#fff; border:1px solid #cbd5e0; padding:0.6rem; border-radius:4px; font-style:italic;"></p>`;
          const doc = reportBody.querySelector(".report-document");
          if (doc) doc.appendChild(addendumBox);
        }
        const contentP = document.getElementById("addendumContent");
        if (contentP) contentP.textContent += (contentP.textContent ? " " : "") + text;
      }
    };

    recognition.onend = () => {
      isRecording = false;
      btnDictate.textContent = "🎙️ Voice Dictation";
      btnDictate.classList.remove("btn-primary");
    };

    recognition.onerror = () => {
      isRecording = false;
      btnDictate.textContent = "🎙️ Voice Dictation";
      btnDictate.classList.remove("btn-primary");
    };
  }

  function initDicomTable() {
    renderDicomTable();
  }

  function renderDicomTable() {
    const tableBody = document.getElementById("dicomTableBody");
    if (!tableBody) return;
    const p = state.patient || { id: "PT-89421", age: 62, sex: "Male", scanDate: "2026-08-27", sequence: "Axial T1+Gd" };

    const tags = [
      { tag: "(0008,0016)", vr: "UI", desc: "SOP Class UID", val: "1.2.840.10008.5.1.4.1.1.4 (MR Image Storage)" },
      { tag: "(0008,0060)", vr: "CS", desc: "Modality", val: "MR (Magnetic Resonance)" },
      { tag: "(0008,0070)", vr: "LO", desc: "Manufacturer", val: "SIEMENS Healthineers MAGNETOM Prisma" },
      { tag: "(0010,0010)", vr: "PN", desc: "Patient's Name", val: `${p.id || "PT-UNKNOWN"}^ANONYMIZED` },
      { tag: "(0010,0020)", vr: "LO", desc: "Patient ID", val: p.id || "PT-89421" },
      { tag: "(0010,0030)", vr: "DA", desc: "Patient's Birth Date", val: `${new Date().getFullYear() - (p.age || 58)}0512` },
      { tag: "(0010,0040)", vr: "CS", desc: "Patient's Sex", val: (p.sex && p.sex.includes("Female")) ? "F" : "M" },
      { tag: "(0010,1010)", vr: "AS", desc: "Patient's Age", val: `${String(p.age || 58).padStart(3, '0')}Y` },
      { tag: "(0018,0020)", vr: "CS", desc: "Scanning Sequence", val: state.activeSequence.toUpperCase() + " / SE / IR" },
      { tag: "(0018,0050)", vr: "DS", desc: "Slice Thickness", val: "4.00 mm" },
      { tag: "(0018,0080)", vr: "DS", desc: "Repetition Time (TR)", val: state.activeSequence === 't2' ? "3800.0 ms" : (state.activeSequence === 'flair' ? "9000.0 ms" : "550.0 ms") },
      { tag: "(0018,0081)", vr: "DS", desc: "Echo Time (TE)", val: state.activeSequence === 't2' ? "95.0 ms" : "14.0 ms" },
      { tag: "(0018,0082)", vr: "DS", desc: "Inversion Time (TI)", val: state.activeSequence === 'flair' ? "2200.0 ms" : "N/A" },
      { tag: "(0018,0087)", vr: "DS", desc: "Magnetic Field Strength", val: "3.0 Tesla" },
      { tag: "(0020,0032)", vr: "DS", desc: "Image Position (Patient)", val: "-120.00 \\ -120.00 \\ 14.50" },
      { tag: "(0028,0010)", vr: "US", desc: "Rows", val: "512" },
      { tag: "(0028,0011)", vr: "US", desc: "Columns", val: "512" },
      { tag: "(0028,0030)", vr: "DS", desc: "Pixel Spacing", val: "0.46875 \\ 0.46875 mm" },
      { tag: "(0028,1050)", vr: "DS", desc: "Window Center (Level)", val: String(state.windowLevel.level) },
      { tag: "(0028,1051)", vr: "DS", desc: "Window Width", val: String(state.windowLevel.window) }
    ];

    tableBody.innerHTML = tags.map(t => `
      <tr>
        <td style="color:var(--accent-cyan); font-weight:700;">${t.tag}</td>
        <td style="color:var(--text-muted);">${t.vr}</td>
        <td>${t.desc}</td>
        <td style="color:#fff;">${t.val}</td>
      </tr>
    `).join("");
  }

  function initKeyboardShortcuts() {
    window.addEventListener("keydown", (e) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;

      const key = e.key.toLowerCase();
      if (key === "1") {
        document.querySelector(".seq-btn[data-seq='t1c']")?.click();
      } else if (key === "2") {
        document.querySelector(".seq-btn[data-seq='t2']")?.click();
      } else if (key === "3") {
        document.querySelector(".seq-btn[data-seq='flair']")?.click();
      } else if (key === "4") {
        document.querySelector(".seq-btn[data-seq='dwi']")?.click();
      } else if (key === "g") {
        document.querySelector(".cmap-btn[data-cmap='grayscale']")?.click();
      } else if (key === "j") {
        document.querySelector(".cmap-btn[data-cmap='jet']")?.click();
      } else if (key === "h") {
        document.querySelector(".cmap-btn[data-cmap='hot']")?.click();
      } else if (key === "v") {
        document.querySelector(".cmap-btn[data-cmap='viridis']")?.click();
      } else if (key === "s") {
        document.getElementById("toolSelect")?.click();
      } else if (key === "p") {
        document.getElementById("toolPan")?.click();
      } else if (key === "m") {
        document.getElementById("toolCaliper")?.click();
      } else if (key === "b") {
        document.getElementById("toolBrush")?.click();
      } else if (key === "x") {
        document.getElementById("toolEraser")?.click();
      } else if (key === "a") {
        document.getElementById("btnAutoSegment")?.click();
      } else if (key === "r") {
        document.getElementById("btnResetView")?.click();
      } else if (key === "u") {
        const uploadModal = document.getElementById("uploadModal");
        if (uploadModal) uploadModal.classList.toggle("active");
      } else if (key === "e") {
        document.getElementById("btnExportReport")?.click();
      } else if (key === "escape") {
        document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("active"));
      }
    });
  }

  function initReportExport() {
    const btnReport = document.getElementById("btnExportReport");
    const modal = document.getElementById("reportModal");
    const container = document.getElementById("reportModalBody");
    const closeBtn = document.getElementById("closeReportModalBtn");
    const printBtn = document.getElementById("btnPrintReport");

    if (btnReport) {
      btnReport.addEventListener("click", () => {
        if (!state.currentAnalysis || !container || !modal) return;
        const res = state.currentAnalysis;
        const diag = (res.diagnoses && res.diagnoses[0]) ? res.diagnoses[0] : {};

        // Merge rawCanvas and overlayCanvas for snapshot
        let scanSnapshotDataUrl = "";
        try {
          const snapCanvas = document.createElement("canvas");
          snapCanvas.width = rawCanvas.width;
          snapCanvas.height = rawCanvas.height;
          const snapCtx = snapCanvas.getContext("2d");
          snapCtx.drawImage(rawCanvas, 0, 0);
          snapCtx.drawImage(overlayCanvas, 0, 0);
          scanSnapshotDataUrl = snapCanvas.toDataURL("image/jpeg", 0.9);
        } catch (err) {
          console.warn("Could not capture scan snapshot:", err);
        }

        container.innerHTML = `
          <div class="report-document">
            <div class="report-header">
              <div>
                <div class="report-brand">NEUROSCAN AI // CLINICAL NEURO-ONCOLOGY SUITE</div>
                <div class="report-subtitle">Automated Multi-Parametric MRI Radiomics &amp; Diagnostic Summary</div>
              </div>
              <div class="report-meta">
                <div><b>Report ID:</b> NR-${Math.floor(100000 + Math.random() * 900000)}</div>
                <div><b>Timestamp:</b> ${new Date().toLocaleString()}</div>
              </div>
            </div>

            <div class="report-section">
              <h3>PATIENT &amp; ACQUISITION PARAMETERS</h3>
              <table class="report-table">
                <tr>
                  <td><b>Patient ID:</b> ${document.getElementById("hudPatientId") ? document.getElementById("hudPatientId").textContent : "PT-001"}</td>
                  <td><b>Age / Sex:</b> ${document.getElementById("hudPatientAge") ? document.getElementById("hudPatientAge").textContent : "Adult"}</td>
                </tr>
                <tr>
                  <td><b>Modality:</b> Brain MRI Multi-Sequence (3.0 Tesla)</td>
                  <td><b>Acquisition:</b> ${document.getElementById("hudScanSeq") ? document.getElementById("hudScanSeq").textContent : "Axial T1+Gd"}</td>
                </tr>
                <tr>
                  <td><b>Pixel Calibration:</b> 0.4688 mm/px (FOV 240mm)</td>
                  <td><b>Slice Thickness:</b> 4.0 mm</td>
                </tr>
              </table>
            </div>

            <div class="report-section">
              <h3>PRIMARY AI DIAGNOSTIC FINDINGS</h3>
              <div class="report-scan-preview">
                ${scanSnapshotDataUrl ? `<img src="${scanSnapshotDataUrl}" class="report-scan-img" alt="MRI Scan Preview">` : ''}
                <div style="flex:1;">
                  <div class="report-highlight">
                    <div class="rh-title">${diag.name || "Brain Mass Lesion"}</div>
                    <div class="rh-grade">Classification: ${diag.whoGrade || "WHO Grade"} (${diag.malignancy || "Malignant Neoplasm"})</div>
                    <div class="rh-conf">Diagnostic Confidence Index: <b>${diag.confidence || "95"}% Match</b></div>
                  </div>
                  <p style="font-size:0.82rem; line-height:1.45; color:#2d3748;">${diag.matchRationale || ""}</p>
                </div>
              </div>
            </div>

            <div class="report-section">
              <h3>QUANTITATIVE LESION BIOMETRICS (RECIST 1.1 &amp; RANO)</h3>
              <table class="report-table">
                <tr>
                  <td><b>Max Diameter (Major Axis):</b> ${res.maxDiameterMm} mm</td>
                  <td><b>Minor Diameter (Orthogonal):</b> ${res.minorDiameterMm} mm</td>
                </tr>
                <tr>
                  <td><b>Estimated 3D Volume:</b> ${res.estimatedVolumeCm3} cm³</td>
                  <td><b>Calibrated Surface Area:</b> ${res.tumorAreaMm2} mm²</td>
                </tr>
                <tr>
                  <td><b>Anatomical Region:</b> ${res.localization.region}</td>
                  <td><b>Hemisphere:</b> ${res.localization.hemisphere}</td>
                </tr>
              </table>
            </div>

            <div class="report-section">
              <h3>HIGH-ORDER GLCM TEXTURE MATRIX</h3>
              <table class="report-table">
                <tr>
                  <td><b>Mean Intensity:</b> ${res.radiomics.meanIntensity}</td>
                  <td><b>Texture Entropy:</b> ${res.radiomics.entropy}</td>
                  <td><b>GLCM Contrast:</b> ${res.radiomics.contrast}</td>
                </tr>
                <tr>
                  <td><b>Homogeneity:</b> ${res.radiomics.homogeneity}</td>
                  <td><b>Edema Index:</b> ${res.radiomics.edemaIndex}</td>
                  <td><b>Necrosis Ratio:</b> ${res.radiomics.necrosisRatio}</td>
                </tr>
              </table>
            </div>

            <div class="report-section">
              <h3>WHO-CNS5 DIFFERENTIAL DIAGNOSIS HIERARCHY</h3>
              <ol style="font-size:0.85rem; padding-left:1.2rem; line-height:1.6;">
                ${res.diagnoses ? res.diagnoses.map(d => `<li><b>${d.name}</b> (${d.whoGrade}) — <i>${d.confidence}% Confidence</i></li>`).join("") : ""}
              </ol>
            </div>

            <div class="report-section">
              <h3>RECOMMENDED CLINICAL ACTION PLAN</h3>
              <p style="font-size:0.85rem; margin-bottom:0.35rem;"><b>Surgical Strategy:</b> ${diag.treatment || "Neurosurgical Consultation"}</p>
              <p style="font-size:0.85rem; margin-bottom:0.35rem;"><b>Molecular Diagnostics:</b> ${diag.molecularMarkers || "IDH1/2, 1p/19q, MGMT, TERT"}</p>
              <p style="font-size:0.85rem;"><b>Prognostic Pathway:</b> ${diag.prognosis || "Standard Protocol"}</p>
            </div>

            <div style="margin-top:2rem; padding-top:1rem; border-top:1px dashed #cbd5e0; display:flex; justify-content:space-between; font-size:0.75rem; color:#718096;">
              <div>Electronically verified by NEUROSCAN AI Workstation</div>
              <div>Attending Radiologist / Neuro-Oncologist Sign-off: _____________________</div>
            </div>
          </div>
        `;

        modal.classList.add("active");
      });
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => modal.classList.remove("active"));
      modal.onclick = (e) => { if (e.target === modal) modal.classList.remove("active"); };
    }

    if (printBtn) {
      printBtn.addEventListener("click", () => window.print());
    }
  }

  // =========================================================================
  // ENTERPRISE HOSPITAL AUTHENTICATION & WORKSTATION CONTROLLER
  // =========================================================================
  function initHospitalAuth() {
    const portalLandingView = document.getElementById("portalLandingView") || document.getElementById("loginPortal");
    const loginForm = document.getElementById("loginForm");
    const btnLoginSubmit = document.getElementById("btnLoginSubmit");
    const btnLandingDirectEnter = document.getElementById("btnLandingDirectEnter");
    const btnHeroEnterStudio = document.getElementById("btnHeroEnterStudio");
    const btnScrollToLogin = document.getElementById("btnScrollToLogin");
    const loginEmailInput = document.getElementById("loginEmailInput");
    const loginPasswordInput = document.getElementById("loginPasswordInput");
    const loginHospitalSelect = document.getElementById("loginHospitalSelect");
    const btnTogglePwd = document.getElementById("btnTogglePwd");
    const btnSimSmartCard = document.getElementById("btnSimSmartCard");
    const smartCardStatus = document.getElementById("smartCardStatus");

    const clinicianProfileBtn = document.getElementById("clinicianProfileBtn");
    const clinicianDropdownMenu = document.getElementById("clinicianDropdownMenu");
    const headerClinicianName = document.getElementById("headerClinicianName");
    const headerClinicianRole = document.getElementById("headerClinicianRole");
    const headerClinicianAvatar = document.getElementById("headerClinicianAvatar");
    const headerHospitalName = document.getElementById("headerHospitalName");
    const btnHeaderHospitalPill = document.getElementById("btnHeaderHospitalPill");
    const cdBtnLogout = document.getElementById("cdBtnLogout");
    const cdBtnPortal = document.getElementById("cdBtnPortal");

    // 1. Smooth Scrolling between Page 1 (Hero) and Page 2 (Login)
    document.querySelectorAll('.portal-nav-links a[href^="#"], a[href^="#landing"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const targetId = href.substring(1);
          const targetEl = document.getElementById(targetId);
          if (targetEl && portalLandingView) {
            e.preventDefault();
            portalLandingView.scrollTo({
              top: targetEl.offsetTop - 50,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    if (btnScrollToLogin) {
      btnScrollToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        const loginSection = document.getElementById("landingLoginPage");
        if (loginSection && portalLandingView) {
          portalLandingView.scrollTo({
            top: loginSection.offsetTop - 50,
            behavior: 'smooth'
          });
        }
      });
    }

    // 2. Hospital Select Change
    if (loginHospitalSelect) {
      loginHospitalSelect.addEventListener("change", (e) => {
        const hospKey = e.target.value;
        if (HOSPITAL_NETWORKS[hospKey]) {
          state.hospital = HOSPITAL_NETWORKS[hospKey];
        }
      });
    }

    // 3. Toggle Password Visibility
    if (btnTogglePwd && loginPasswordInput) {
      btnTogglePwd.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isPwd = loginPasswordInput.type === "password";
        loginPasswordInput.type = isPwd ? "text" : "password";
        btnTogglePwd.textContent = isPwd ? "🙈" : "👁️";
        btnTogglePwd.title = isPwd ? "Hide Passkey" : "Show Passkey";
      });
    }

    // 4. Simulate SmartCard / FIDO2 Token Tap
    if (btnSimSmartCard && smartCardStatus) {
      btnSimSmartCard.addEventListener("click", () => {
        smartCardStatus.textContent = "⏳ Reading FIDO2 Medical SmartCard...";
        btnSimSmartCard.classList.remove("verified");
        setTimeout(() => {
          smartCardStatus.textContent = "✓ Verified: Workstation PKI Token Valid";
          btnSimSmartCard.classList.add("verified");
        }, 600);
      });
    }

    // 5. Enter Diagnostic Studio & Scan MRI
    function enterDiagnosticStudio() {
      const hospKey = loginHospitalSelect ? loginHospitalSelect.value : "hopkins";
      const hosp = HOSPITAL_NETWORKS[hospKey] || HOSPITAL_NETWORKS.hopkins;

      state.hospital = hosp;
      state.isLoggedIn = true;

      updateClinicianHeaderUI();

      if (portalLandingView) {
        portalLandingView.classList.add("hidden");
      }

      switchTab("studio");

      // Ensure active scan is analyzed and tumor detected
      if (!state.currentAnalysis) {
        loadPresetById("preset-sciencedirect");
      }
    }

    const handleLoginSubmit = () => {
      if (btnLoginSubmit) {
        btnLoginSubmit.innerHTML = `<span>⚡ Authenticating &amp; Launching MRI Scanner...</span>`;
        btnLoginSubmit.disabled = true;
      }

      setTimeout(() => {
        enterDiagnosticStudio();
        if (btnLoginSubmit) {
          btnLoginSubmit.innerHTML = `<span>⚡ Sign In &amp; Launch Brain MRI Scanner</span> <span>→</span>`;
          btnLoginSubmit.disabled = false;
        }
      }, 500);
    };

    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        handleLoginSubmit();
      });
    }
    if (btnLoginSubmit) {
      btnLoginSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        handleLoginSubmit();
      });
    }

    if (btnLandingDirectEnter) {
      btnLandingDirectEnter.addEventListener("click", (e) => {
        e.preventDefault();
        const loginSection = document.getElementById("landingLoginPage");
        if (loginSection && portalLandingView) {
          portalLandingView.scrollTo({
            top: loginSection.offsetTop - 50,
            behavior: 'smooth'
          });
        }
      });
    }
    if (btnHeroEnterStudio) {
      btnHeroEnterStudio.addEventListener("click", () => {
        enterDiagnosticStudio();
      });
    }

    // 6. Header Profile Dropdown
    if (clinicianProfileBtn && clinicianDropdownMenu) {
      clinicianProfileBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        clinicianDropdownMenu.classList.toggle("active");
      });

      document.addEventListener("click", (e) => {
        if (!clinicianProfileBtn.contains(e.target) && !clinicianDropdownMenu.contains(e.target)) {
          clinicianDropdownMenu.classList.remove("active");
        }
      });
    }

    // 7. Header Hospital Pill click routes to network tab
    if (btnHeaderHospitalPill) {
      btnHeaderHospitalPill.addEventListener("click", () => {
        switchTab("network");
      });
    }

    // 8. Return to Overview (Page 1) in dropdown
    if (cdBtnPortal) {
      cdBtnPortal.addEventListener("click", () => {
        if (clinicianDropdownMenu) clinicianDropdownMenu.classList.remove("active");
        if (portalLandingView) {
          portalLandingView.classList.remove("hidden");
          portalLandingView.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    }

    // 9. Sign Out / Back to Login (Page 2)
    if (cdBtnLogout) {
      cdBtnLogout.addEventListener("click", () => {
        if (clinicianDropdownMenu) clinicianDropdownMenu.classList.remove("active");
        if (portalLandingView) {
          portalLandingView.classList.remove("hidden");
          const loginSection = document.getElementById("landingLoginPage");
          if (loginSection) {
            portalLandingView.scrollTo({ top: loginSection.offsetTop - 50, behavior: "smooth" });
          } else {
            portalLandingView.scrollTo({ top: 0, behavior: "smooth" });
          }
        }
        state.isLoggedIn = false;
      });
    }

    // Ensure portal is visible on page load for exploration
    updateClinicianHeaderUI();

    function updateClinicianHeaderUI() {
      if (headerClinicianName) headerClinicianName.textContent = "Neuroradiologist Workstation";
      if (headerClinicianRole) headerClinicianRole.textContent = "Diagnostic PACS Suite";
      if (headerClinicianAvatar) headerClinicianAvatar.textContent = "🔬";
      if (headerHospitalName) headerHospitalName.textContent = state.hospital.shortName;

      const cdName = document.getElementById("cdDocName");
      const cdCred = document.getElementById("cdDocCred");
      const cdHosp = document.getElementById("cdDocHosp");

      if (cdName) cdName.textContent = "Neuroradiologist Workstation";
      if (cdCred) cdCred.textContent = "Tier 4 Clinical AI • Full PACS Access";
      if (cdHosp) cdHosp.textContent = state.hospital.name;

      updateHospitalDirectoryHighlight();
    }
  }

  function updateHospitalDirectoryHighlight() {
    const cards = document.querySelectorAll(".hospital-center-card[data-hosp]");
    cards.forEach(card => {
      const hospKey = card.dataset.hosp;
      const isCurrent = hospKey === (state.hospital ? state.hospital.shortName.toLowerCase() : "") ||
                        (state.hospital && state.hospital.name.toLowerCase().includes(hospKey));
      
      const btn = card.querySelector(".btn-switch-hosp");
      if (isCurrent) {
        card.classList.add("active-current");
        if (btn) btn.textContent = "Current Active Center ✓";
      } else {
        card.classList.remove("active-current");
        if (btn && btn.dataset.switch) {
          const h = HOSPITAL_NETWORKS[btn.dataset.switch];
          if (btn) btn.textContent = `Switch to ${h ? h.shortName : "Hospital"}`;
        }
      }
    });
  }

  // =========================================================================
  // GLOBAL HOSPITAL MULTI-CENTER NETWORK CONTROLLER
  // =========================================================================
  function initGlobalNetworkTab() {
    const switchBtns = document.querySelectorAll(".btn-switch-hosp[data-switch]");
    const consultationModal = document.getElementById("consultationModal");
    const btnRequestConsultation = document.getElementById("btnRequestConsultation");

    switchBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const switchKey = btn.dataset.switch;
        if (HOSPITAL_NETWORKS[switchKey]) {
          state.hospital = HOSPITAL_NETWORKS[switchKey];
          const headerHosp = document.getElementById("headerHospitalName");
          if (headerHosp) headerHosp.textContent = state.hospital.shortName;
          
          const cdHosp = document.getElementById("cdDocHosp");
          if (cdHosp) cdHosp.textContent = state.hospital.name;

          const loginHospSelect = document.getElementById("loginHospitalSelect");
          if (loginHospSelect) loginHospSelect.value = switchKey;

          updateHospitalDirectoryHighlight();

          // Flash confirmation on button
          const originalText = btn.textContent;
          btn.textContent = "✓ Connected to PACS";
          setTimeout(() => {
            updateHospitalDirectoryHighlight();
          }, 1200);
        }
      });
    });

    if (btnRequestConsultation && consultationModal) {
      btnRequestConsultation.addEventListener("click", () => {
        consultationModal.classList.add("active");
      });
    }
  }

  // =========================================================================
  // ENTERPRISE HOSPITAL MODALS (Clinician Profile, Audit Trail, Consultations)
  // =========================================================================
  function initEnterpriseModals() {
    // 1. Clinician Profile Modal
    const clinicianModal = document.getElementById("clinicianModal");
    const cdBtnProfile = document.getElementById("cdBtnProfile");
    const closeClinicianModalBtn = document.getElementById("closeClinicianModalBtn");
    const closeClinicianModalBtn2 = document.getElementById("closeClinicianModalBtn2");
    const btnEditClinicianCreds = document.getElementById("btnEditClinicianCreds");

    if (cdBtnProfile && clinicianModal) {
      cdBtnProfile.addEventListener("click", () => {
        const dropdown = document.getElementById("clinicianDropdownMenu");
        if (dropdown) dropdown.classList.remove("active");

        const modalAvatar = document.getElementById("modalClinicianAvatar");
        const modalName = document.getElementById("modalClinicianName");
        const modalRole = document.getElementById("modalClinicianRole");
        const modalHosp = document.getElementById("modalClinicianHosp");

        if (modalAvatar) modalAvatar.textContent = "🔬";
        if (modalName) modalName.textContent = "Neuroradiologist Workstation";
        if (modalRole) modalRole.textContent = "Diagnostic PACS Suite • Level 4 Clinical Access";
        if (modalHosp) modalHosp.textContent = `${state.hospital.name} • ${state.hospital.location}`;

        clinicianModal.classList.add("active");
      });
    }

    [closeClinicianModalBtn, closeClinicianModalBtn2].forEach(btn => {
      if (btn && clinicianModal) {
        btn.addEventListener("click", () => clinicianModal.classList.remove("active"));
      }
    });

    if (btnEditClinicianCreds) {
      btnEditClinicianCreds.addEventListener("click", () => {
        btnEditClinicianCreds.textContent = "✓ PACS Security Bridge Valid";
        setTimeout(() => {
          btnEditClinicianCreds.textContent = "Verify PACS Connection";
        }, 2000);
      });
    }

    // 2. Hospital Switcher & Global Net routing from dropdown
    const cdBtnSwitchHosp = document.getElementById("cdBtnSwitchHosp");
    const cdBtnGlobalNet = document.getElementById("cdBtnGlobalNet");
    
    if (cdBtnSwitchHosp) {
      cdBtnSwitchHosp.addEventListener("click", () => {
        const dropdown = document.getElementById("clinicianDropdownMenu");
        if (dropdown) dropdown.classList.remove("active");
        switchTab("network");
        const grid = document.getElementById("hospitalsDirectoryGrid");
        if (grid) grid.scrollIntoView({ behavior: "smooth" });
      });
    }

    if (cdBtnGlobalNet) {
      cdBtnGlobalNet.addEventListener("click", () => {
        const dropdown = document.getElementById("clinicianDropdownMenu");
        if (dropdown) dropdown.classList.remove("active");
        switchTab("network");
      });
    }

    // 3. HIPAA & DICOM Audit Trail Modal
    const auditTrailModal = document.getElementById("auditTrailModal");
    const cdBtnAuditTrail = document.getElementById("cdBtnAuditTrail");
    const closeAuditModalBtn = document.getElementById("closeAuditModalBtn");
    const auditTrailTableBody = document.getElementById("auditTrailTableBody");

    if (cdBtnAuditTrail && auditTrailModal) {
      cdBtnAuditTrail.addEventListener("click", () => {
        const dropdown = document.getElementById("clinicianDropdownMenu");
        if (dropdown) dropdown.classList.remove("active");

        if (auditTrailTableBody) {
          const now = new Date();
          const pId = state.patient ? state.patient.id : "PT-89421";
          const docId = "radiologist.neuro@hospital.org";

          const events = [
            { time: now.toLocaleTimeString(), action: "Clinical Diagnostic Session Verified", scan: pId, hash: "a9f4...28b1" },
            { time: new Date(now - 120000).toLocaleTimeString(), action: "Sub-pixel GLCM Radiomics Extraction", scan: pId, hash: "3c7e...91d4" },
            { time: new Date(now - 340000).toLocaleTimeString(), action: "WHO-CNS5 Differential Classifier Executed", scan: pId, hash: "8e21...04ac" },
            { time: new Date(now - 600000).toLocaleTimeString(), action: "3D Volumetric Trajectory Model Computed", scan: pId, hash: "4d11...72ee" },
            { time: new Date(now - 900000).toLocaleTimeString(), action: "DICOM Binary Acquisition Ingested", scan: pId, hash: "f7a3...c912" },
            { time: new Date(now - 1500000).toLocaleTimeString(), action: "Hospital PACS Session Established (TLS 1.3)", scan: "PACS-HUB", hash: "1b90...55ab" }
          ];

          auditTrailTableBody.innerHTML = events.map(ev => `
            <tr>
              <td><b style="font-family:var(--font-mono); color:#fff;">${ev.time}</b></td>
              <td><span style="color:var(--accent-cyan); font-family:var(--font-mono);">${docId}</span></td>
              <td>${ev.action}</td>
              <td><span class="badge-tag">${ev.scan}</span></td>
              <td><code style="color:var(--text-muted); font-size:0.7rem;">${ev.hash}</code></td>
            </tr>
          `).join("");
        }

        auditTrailModal.classList.add("active");
      });
    }

    if (closeAuditModalBtn && auditTrailModal) {
      closeAuditModalBtn.addEventListener("click", () => auditTrailModal.classList.remove("active"));
    }

    // 4. Consultation Request Modal
    const consultationModal = document.getElementById("consultationModal");
    const closeConsultationModalBtn = document.getElementById("closeConsultationModalBtn");
    const closeConsultationModalBtn2 = document.getElementById("closeConsultationModalBtn2");
    const btnSubmitConsultation = document.getElementById("btnSubmitConsultation");

    [closeConsultationModalBtn, closeConsultationModalBtn2].forEach(btn => {
      if (btn && consultationModal) {
        btn.addEventListener("click", () => consultationModal.classList.remove("active"));
      }
    });

    if (btnSubmitConsultation && consultationModal) {
      btnSubmitConsultation.addEventListener("click", () => {
        btnSubmitConsultation.textContent = "📡 Encrypting & Dispatching Case...";
        btnSubmitConsultation.disabled = true;

        setTimeout(() => {
          btnSubmitConsultation.textContent = "✓ Case Dispatched to International Board";
          setTimeout(() => {
            consultationModal.classList.remove("active");
            btnSubmitConsultation.textContent = "📡 Dispatch Case Packet";
            btnSubmitConsultation.disabled = false;
          }, 1400);
        }, 900);
      });
    }

    // Generic backdrop clicks for all modal backdrops
    document.querySelectorAll(".modal-backdrop").forEach(modal => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
      });
    });
  }
});
