// ==========================================================================
// NEUROSCAN AI - Comprehensive WHO CNS Brain Tumor & Mass Lesion Database
// Total Classified Entities: 160
// Formatted to 5th Edition WHO Classification of Tumours of the CNS (2021)
// ==========================================================================

const BRAIN_TUMOR_DATABASE = [
  {
    "id": "gbm-idh-wt",
    "name": "Glioblastoma, IDH-wildtype",
    "category": "Adult-Type Diffuse Gliomas",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "High-grade malignant",
    "prevalence": "Most common primary malignant CNS tumor in adults (~49%)",
    "ageGroup": "Adults (55-75 yrs)",
    "commonLocations": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Parietal Lobe",
      "Centrum Semiovale"
    ],
    "mriFeatures": {
      "t1": "Heterogeneous hypointense mass with central irregular necrotic core",
      "t2": "Heterogeneously hyperintense with extensive digitated vasogenic edema",
      "flair": "Hyperintense infiltrative margins extending well beyond visible contrast enhancement",
      "contrast": "Thick, irregular, nodular peripheral ring-enhancement surrounding central necrosis",
      "dwi": "Restricted diffusion in hypercellular enhancing rim (low ADC); elevated ADC in necrotic center"
    },
    "radiomicSignature": {
      "intensityMean": 185,
      "heterogeneity": 0.92,
      "contrastRimThickness": "Thick / Irregular (4-8mm)",
      "edemaIndex": 0.9,
      "necrosisRatio": 0.45,
      "symmetryDeficit": 0.94
    },
    "molecularMarkers": "IDH-wildtype, TERT promoter mutation (~80%), EGFR amplification (~40%), PTEN loss, +7/-10 chromosome signature, MGMT promoter methylation",
    "histology": "Pleomorphic astrocytic cells, microvascular endothelial proliferation, pseudopalisading necrosis, brisk atypical mitoses",
    "clinicalPresentation": "Rapid progressive headache, seizures, focal motor deficits (hemiparesis), aphasia, cognitive decline, raised ICP",
    "treatment": "Maximal safe surgical resection (5-ALA guided) + Stupp Protocol (RT 60 Gy + Temozolomide) + adjuvant TMZ +/- TTFields (Optune)",
    "prognosis": "Aggressive; median overall survival ~14-16 months with standard multimodal therapy"
  },
  {
    "id": "astro-idh-mut-g4",
    "name": "Astrocytoma, IDH-mutant, WHO Grade 4",
    "category": "Adult-Type Diffuse Gliomas",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "High-grade malignant",
    "prevalence": "Less common than GBM, younger adults (~5-10% of high-grade gliomas)",
    "ageGroup": "Young Adults (25-45 yrs)",
    "commonLocations": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Insular Cortex"
    ],
    "mriFeatures": {
      "t1": "Heterogeneous hypointense lesion with necrotic or cystic areas",
      "t2": "Marked hyperintensity with surrounding vasogenic edema",
      "flair": "Hyperintense infiltrative border; partial T2-FLAIR mismatch in non-necrotic areas",
      "contrast": "Ring-like or nodular heterogeneous enhancement",
      "dwi": "Restricted diffusion in hypercellular solid regions"
    },
    "radiomicSignature": {
      "intensityMean": 175,
      "heterogeneity": 0.82,
      "contrastRimThickness": "Variable / Nodular (3-6mm)",
      "edemaIndex": 0.75,
      "necrosisRatio": 0.3,
      "symmetryDeficit": 0.88
    },
    "molecularMarkers": "IDH1 (R132H) or IDH2 mutant, ATRX loss, TP53 mutation, homozygous CDKN2A/B deletion (defines Grade 4), 1p/19q intact",
    "histology": "High-grade astrocytic neoplasm with CDKN2A/B homozygous deletion OR microvascular proliferation and necrosis",
    "clinicalPresentation": "Seizures, focal motor deficits, progressive headache",
    "treatment": "Maximal safe resection + RT (60 Gy) + Temozolomide / PCV chemotherapy; IDH inhibitors (Vorasidenib/Ivosidenib)",
    "prognosis": "Significantly better prognosis than GBM IDH-wildtype; median overall survival ~3-6 years"
  },
  {
    "id": "astro-idh-mut-g3",
    "name": "Astrocytoma, IDH-mutant, WHO Grade 3 (Anaplastic)",
    "category": "Adult-Type Diffuse Gliomas",
    "whoGrade": "WHO Grade III",
    "gradeNum": 3,
    "malignancy": "Intermediate-to-high grade",
    "prevalence": "~10% of diffuse astrocytic tumors",
    "ageGroup": "Young Adults (30-45 yrs)",
    "commonLocations": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Parietal Lobe"
    ],
    "mriFeatures": {
      "t1": "Hypointense ill-defined mass expanding cerebral cortex and subcortical white matter",
      "t2": "Hyperintense with moderate mass effect",
      "flair": "Hyperintense with infiltrative margins",
      "contrast": "Patchy, focal, or absent enhancement (lacks classic necrosis/thick ring)",
      "dwi": "Mild to moderate diffusion restriction in cellular foci"
    },
    "radiomicSignature": {
      "intensityMean": 162,
      "heterogeneity": 0.68,
      "contrastRimThickness": "Patchy / Incomplete",
      "edemaIndex": 0.55,
      "necrosisRatio": 0.05,
      "symmetryDeficit": 0.78
    },
    "molecularMarkers": "IDH1/2 mutant, ATRX loss, TP53 mutation, CDKN2A/B intact (wildtype), 1p/19q intact",
    "histology": "Diffusely infiltrating astrocytoma with nuclear atypia and brisk mitotic activity; absence of necrosis",
    "clinicalPresentation": "Focal motor or sensory seizures, progressive cognitive changes, headache",
    "treatment": "Maximal safe resection + Radiotherapy (59.4 Gy) + adjuvant PCV or Temozolomide chemotherapy",
    "prognosis": "Median overall survival ~5-8 years"
  },
  {
    "id": "astro-idh-mut-g2",
    "name": "Astrocytoma, IDH-mutant, WHO Grade 2",
    "category": "Adult-Type Diffuse Gliomas",
    "whoGrade": "WHO Grade II",
    "gradeNum": 2,
    "malignancy": "Low-grade infiltrative",
    "prevalence": "~15% of all low-grade gliomas",
    "ageGroup": "Young Adults (20-40 yrs)",
    "commonLocations": [
      "Frontal Lobe",
      "Supplementary Motor Area (SMA)",
      "Temporal Lobe",
      "Insula"
    ],
    "mriFeatures": {
      "t1": "Homogeneously hypointense infiltrative lesion expanding gyri and blurring gray-white junction",
      "t2": "Homogeneously hyperintense with well-defined sharp borders",
      "flair": "Hyperintense; classic T2-FLAIR mismatch sign (complete internal suppression with peripheral hyperintense rim)",
      "contrast": "TYPICALLY NO CONTRAST ENHANCEMENT (enhancement suggests high-grade transformation)",
      "dwi": "Elevated ADC (facilitated diffusion, no restriction)"
    },
    "radiomicSignature": {
      "intensityMean": 145,
      "heterogeneity": 0.32,
      "contrastRimThickness": "None (0mm)",
      "edemaIndex": 0.12,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.65
    },
    "molecularMarkers": "IDH1 (R132H) or IDH2 mutation, ATRX mutation (loss of expression), TP53 mutation, 1p/19q intact",
    "histology": "Well-differentiated neoplastic astrocytes with mild nuclear atypia; low Ki-67 (<4%), absence of mitosis/necrosis",
    "clinicalPresentation": "Onset of generalized or focal seizures in young healthy adults, normal neurological exam",
    "treatment": "Supratotal/Gross total surgical resection with awake mapping; early surveillance or RT + PCV; Vorasidenib",
    "prognosis": "Favorable with complete resection; median overall survival >12-15+ years"
  },
  {
    "id": "oligo-g2",
    "name": "Oligodendroglioma, IDH-mutant and 1p/19q-codeleted, WHO Grade 2",
    "category": "Adult-Type Diffuse Gliomas",
    "whoGrade": "WHO Grade II",
    "gradeNum": 2,
    "malignancy": "Low-grade infiltrative (chemosensitive)",
    "prevalence": "~5-8% of all adult gliomas",
    "ageGroup": "Adults (35-50 yrs)",
    "commonLocations": [
      "Frontal Lobe (cortex & subcortical white matter)",
      "Parietal Lobe"
    ],
    "mriFeatures": {
      "t1": "Hypointense to isointense cortical-subcortical mass with calvarial remodeling/scalloping",
      "t2": "Heterogeneously hyperintense, characteristic dense calcifications (blooming on T2/SWI in ~90%)",
      "flair": "Heterogeneous hyperintensity, cyst-like spaces",
      "contrast": "Minimal or no enhancement (~70%), mild patchy/heterogeneous enhancement in ~30%",
      "dwi": "Facilitated diffusion, no restriction"
    },
    "radiomicSignature": {
      "intensityMean": 150,
      "heterogeneity": 0.52,
      "contrastRimThickness": "Patchy / None",
      "edemaIndex": 0.18,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.7
    },
    "molecularMarkers": "IDH1/2 mutation AND complete whole-arm 1p/19q co-deletion, TERT promoter mutation (~95%), FUBP1 mutation, CIC mutation",
    "histology": "Uniform round nuclei with clear perinuclear halos (fried-egg appearance), chicken-wire capillary network, microcalcifications",
    "clinicalPresentation": "Refractory seizures (most common presenting symptom >80%), subtle cognitive symptoms, headache",
    "treatment": "Maximal safe resection + observation or Radiation therapy (50.4-54 Gy) + adjuvant PCV chemotherapy",
    "prognosis": "Excellent compared to astrocytomas; median overall survival >15-20+ years"
  },
  {
    "id": "oligo-g3",
    "name": "Oligodendroglioma, IDH-mutant and 1p/19q-codeleted, WHO Grade 3 (Anaplastic)",
    "category": "Adult-Type Diffuse Gliomas",
    "whoGrade": "WHO Grade III",
    "gradeNum": 3,
    "malignancy": "High-grade malignant",
    "prevalence": "~3-5% of gliomas",
    "ageGroup": "Adults (40-60 yrs)",
    "commonLocations": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Parietal Lobe"
    ],
    "mriFeatures": {
      "t1": "Heterogeneous hypointense cortical-subcortical mass with necrotic and cystic foci",
      "t2": "Heterogeneously hyperintense with coarse calcifications and cystic degeneration",
      "flair": "Hyperintense with moderate surrounding infiltration",
      "contrast": "Prominent, heterogeneous, nodular or ring-like enhancement",
      "dwi": "Restricted diffusion in cellular solid regions"
    },
    "radiomicSignature": {
      "intensityMean": 170,
      "heterogeneity": 0.74,
      "contrastRimThickness": "Nodular / Moderate (2-5mm)",
      "edemaIndex": 0.55,
      "necrosisRatio": 0.15,
      "symmetryDeficit": 0.82
    },
    "molecularMarkers": "IDH1/2 mutation, 1p/19q co-deletion, TERT promoter mutation, high Ki-67 index (>10-15%), CDKN2A/B status",
    "histology": "High cellularity, frequent atypical mitoses, prominent microvascular proliferation, dense fried-egg morphology",
    "clinicalPresentation": "Worsening seizure frequency, focal motor/sensory deficits, raised ICP",
    "treatment": "Maximal safe surgical resection followed by adjuvant Radiotherapy + PCV Chemotherapy",
    "prognosis": "Significantly more favorable than Grade 3/4 astrocytomas; median overall survival ~12-15 years"
  },
  {
    "id": "gliosarcoma",
    "name": "Gliosarcoma, IDH-wildtype",
    "category": "Adult-Type Diffuse Gliomas",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "High-grade biphasic malignant neoplasm",
    "prevalence": "~2% of glioblastomas",
    "ageGroup": "Older Adults (50-70 yrs)",
    "commonLocations": [
      "Temporal Lobe",
      "Parietal Lobe (frequently dural-based abutting falx or convexity)"
    ],
    "mriFeatures": {
      "t1": "Well-demarcated peripheral mass mimicking meningioma with thick dural abutment",
      "t2": "Heterogeneously hyperintense with extensive surrounding vasogenic edema",
      "flair": "Marked infiltrative hyperintensity",
      "contrast": "Intense, thick, nodular and ring-like enhancement with dural tail sign",
      "dwi": "Restricted diffusion in mesenchymal sarcomatous and glial cellular components"
    },
    "radiomicSignature": {
      "intensityMean": 188,
      "heterogeneity": 0.9,
      "contrastRimThickness": "Thick Nodular Dural-Based",
      "edemaIndex": 0.88,
      "necrosisRatio": 0.4,
      "symmetryDeficit": 0.92
    },
    "molecularMarkers": "IDH-wildtype, TERT promoter mutation, PTEN loss, TP53 mutation, reticulin-rich matrix in sarcomatous component",
    "histology": "Biphasic tissue: malignant glial component (GFAP+) intermingled with malignant sarcomatous component (reticulin-rich, GFAP-)",
    "clinicalPresentation": "Rapidly progressive hemiparesis, headaches, seizures, intracranial hypertension",
    "treatment": "Maximal surgical resection + Stupp protocol (RT 60 Gy + Temozolomide)",
    "prognosis": "Poor; median overall survival ~12-14 months, higher propensity for extracranial metastasis"
  },
  {
    "id": "giant-cell-gbm",
    "name": "Giant Cell Glioblastoma",
    "category": "Adult-Type Diffuse Gliomas",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "High-grade malignant",
    "prevalence": "~1% of glioblastomas",
    "ageGroup": "Younger Adults & Children (Peak 30-45 yrs)",
    "commonLocations": [
      "Frontal Lobe",
      "Temporal Lobe"
    ],
    "mriFeatures": {
      "t1": "Well-circumscribed, compact, rounded hypointense mass",
      "t2": "Hyperintense with moderate edema (often sharper border than classic GBM)",
      "flair": "Hyperintense with distinct margins",
      "contrast": "Prominent, thick, solid-nodular or ring enhancement",
      "dwi": "Marked restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 184,
      "heterogeneity": 0.8,
      "contrastRimThickness": "Well-Circumscribed Ring",
      "edemaIndex": 0.65,
      "necrosisRatio": 0.25,
      "symmetryDeficit": 0.85
    },
    "molecularMarkers": "TP53 mutation (>80%), PTEN mutation, IDH-wildtype, lack of EGFR amplification",
    "histology": "Marked predominance of bizarre, multinucleated, hyperchromatic monstrous giant cells surrounded by dense reticulin",
    "clinicalPresentation": "Short duration of headaches, seizures, focal deficits",
    "treatment": "Complete surgical resection + Chemoradiation (Stupp protocol)",
    "prognosis": "Slightly better median survival than classic GBM (~20-24 months)"
  },
  {
    "id": "epithelioid-gbm",
    "name": "Epithelioid Glioblastoma",
    "category": "Adult-Type Diffuse Gliomas",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "Extremely high-grade aggressive malignant",
    "prevalence": "Rare (<1% of GBMs)",
    "ageGroup": "Children, Adolescents, and Young Adults (10-30 yrs)",
    "commonLocations": [
      "Cerebral Cortex",
      "Diencephalon",
      "Superficial Leptomeningeal Location"
    ],
    "mriFeatures": {
      "t1": "Superficial cortical-subcortical mass with hemorrhage and necrosis",
      "t2": "Heterogeneous with significant perilesional edema",
      "flair": "Infiltrative hyperintensity with leptomeningeal spread",
      "contrast": "Intense heterogeneous enhancement; high frequency of leptomeningeal dissemination",
      "dwi": "Restricted diffusion in cellular clusters"
    },
    "radiomicSignature": {
      "intensityMean": 186,
      "heterogeneity": 0.88,
      "contrastRimThickness": "Superficial Heterogeneous",
      "edemaIndex": 0.82,
      "necrosisRatio": 0.35,
      "symmetryDeficit": 0.9
    },
    "molecularMarkers": "BRAF V600E mutation (~50%), TERT promoter mutation, CDKN2A deletion, INI1 preserved",
    "histology": "Sheets of uniform, discohesive, plump epithelioid and rhabdoid cells with abundant eosinophilic cytoplasm, eccentric nuclei",
    "clinicalPresentation": "Rapid neurological deterioration, seizures, signs of leptomeningeal spread",
    "treatment": "Maximal surgical resection + Chemoradiation + BRAF/MEK inhibitors (Dabrafenib + Trametinib)",
    "prognosis": "Poor; median survival ~10-14 months; BRAF-targeted therapies offer meaningful responses"
  },
  {
    "id": "gemistocytic-astro",
    "name": "Gemistocytic Astrocytoma, IDH-mutant",
    "category": "Adult-Type Diffuse Gliomas",
    "whoGrade": "WHO Grade III",
    "gradeNum": 3,
    "malignancy": "High propensity for rapid malignant transformation",
    "prevalence": "~5% of astrocytomas",
    "ageGroup": "Adults (35-50 yrs)",
    "commonLocations": [
      "Frontal Lobe",
      "Parietal Lobe"
    ],
    "mriFeatures": {
      "t1": "Hypointense to isointense subcortical mass",
      "t2": "Markedly hyperintense with mass effect",
      "flair": "Hyperintense with moderate edema",
      "contrast": "Faint patchy enhancement to non-enhancing",
      "dwi": "Facilitated or mild restriction"
    },
    "radiomicSignature": {
      "intensityMean": 158,
      "heterogeneity": 0.6,
      "contrastRimThickness": "Faint Patchy",
      "edemaIndex": 0.45,
      "necrosisRatio": 0.05,
      "symmetryDeficit": 0.75
    },
    "molecularMarkers": "IDH1/2 mutation, TP53 mutation (~80%), ATRX loss, rapid accumulation of secondary genetic alterations",
    "histology": "Predominance of plump gemistocytes (>20% of cells) with abundant ballooned, eosinophilic glassy cytoplasm, eccentric nucleus",
    "clinicalPresentation": "Seizures, progressive focal weakness",
    "treatment": "Maximal surgical resection + early adjuvant chemoradiotherapy",
    "prognosis": "More aggressive clinical course than typical Grade 2 astrocytoma"
  },
  {
    "id": "dmg-h3k27m",
    "name": "Diffuse Midline Glioma, H3 K27-altered",
    "category": "Pediatric-Type Diffuse High-Grade Gliomas",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "Extremely high-grade malignant",
    "prevalence": "Leading cause of pediatric brain tumor mortality (DIPG)",
    "ageGroup": "Children (5-12 yrs, occasionally adults)",
    "commonLocations": [
      "Pons / Brainstem (DIPG)",
      "Thalamus (Bilateral)",
      "Spinal Cord",
      "Third Ventricle"
    ],
    "mriFeatures": {
      "t1": "Expansile hypointense mass engulfing basilar artery (>50% pontine diameter)",
      "t2": "Diffuse hyperintensity expanding the pons/thalamus",
      "flair": "Prominent diffuse hyperintensity",
      "contrast": "Variable, from minimal/patchy to irregular ring-enhancement (classic DIPG)",
      "dwi": "Patchy restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 170,
      "heterogeneity": 0.78,
      "contrastRimThickness": "Diffuse / Infiltrative (1-4mm)",
      "edemaIndex": 0.65,
      "necrosisRatio": 0.2,
      "symmetryDeficit": 0.9
    },
    "molecularMarkers": "H3-3A or H3C2 K27M mutation, loss of H3K27me3, TP53 mutation, PPM1D or ACVR1 mutations",
    "histology": "Infiltrating astrocytic tumor of midline structures; designated WHO Grade 4 regardless of histologic appearance",
    "clinicalPresentation": "Classic triad: Cranial nerve palsies (VI/VII), Long tract signs (ataxia, hemiparesis), Hydrocephalus",
    "treatment": "Palliative focal radiotherapy (54-60 Gy); experimental clinical trials (ONC201, CAR-T, CED convection-enhanced delivery)",
    "prognosis": "Very poor; median overall survival 9-11 months"
  },
  {
    "id": "dhg-h3g34r",
    "name": "Diffuse Hemispheric Glioma, H3 G34-mutant",
    "category": "Pediatric-Type Diffuse High-Grade Gliomas",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "High-grade malignant",
    "prevalence": "Rare subtype in adolescents/young adults (~15%)",
    "ageGroup": "Adolescents & Young Adults (15-25 yrs)",
    "commonLocations": [
      "Cerebral Hemispheres (Temporal / Parietal lobes)"
    ],
    "mriFeatures": {
      "t1": "Large, hypointense infiltrative hemispheric mass",
      "t2": "Hyperintense with moderate mass effect",
      "flair": "Hyperintense infiltrative borders",
      "contrast": "Patchy to non-enhancing, or focal ring enhancement",
      "dwi": "Restricted diffusion due to dense primitive embryonal/neuroectodermal cellularity"
    },
    "radiomicSignature": {
      "intensityMean": 172,
      "heterogeneity": 0.8,
      "contrastRimThickness": "Variable / Patchy",
      "edemaIndex": 0.62,
      "necrosisRatio": 0.25,
      "symmetryDeficit": 0.86
    },
    "molecularMarkers": "H3-3A G34R/V mutation, ATRX loss, TP53 mutation, MGMT methylation variable",
    "histology": "High-grade glioma with glioblastoma-like or CNS embryonal-like primitive small-cell morphology",
    "clinicalPresentation": "New onset seizures, headaches, hemiparesis, personality changes",
    "treatment": "Maximal surgical resection + chemoradiotherapy",
    "prognosis": "Median overall survival ~18-24 months"
  },
  {
    "id": "diffuse-astro-myb",
    "name": "Diffuse Astrocytoma, MYB- or MYBL1-altered",
    "category": "Pediatric-Type Diffuse Low-Grade Gliomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign / Low-grade indolent",
    "prevalence": "Rare pediatric diffuse glioma (~2%)",
    "ageGroup": "Children (Peak 5-12 yrs)",
    "commonLocations": [
      "Cerebral Cortex (Frontal / Temporal lobes)"
    ],
    "mriFeatures": {
      "t1": "Well-demarcated cortical hypointense mass",
      "t2": "Hyperintense with minimal or no mass effect",
      "flair": "Hyperintense with sharp boundaries",
      "contrast": "Typically NO contrast enhancement",
      "dwi": "Facilitated diffusion (elevated ADC)"
    },
    "radiomicSignature": {
      "intensityMean": 140,
      "heterogeneity": 0.28,
      "contrastRimThickness": "None (0mm)",
      "edemaIndex": 0.05,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.55
    },
    "molecularMarkers": "MYB or MYBL1 gene fusions or truncations, IDH-wildtype, ATRX intact, BRAF-wildtype",
    "histology": "Monomorphic isomorphic astrocytic cells with fine fibrillary processes infiltrating cortex without mitosis or necrosis",
    "clinicalPresentation": "Long-standing intractable pediatric epilepsy, cognitive preservation",
    "treatment": "Complete surgical lesionectomy / epileptogenic focus resection (often curative for seizures)",
    "prognosis": "Excellent; virtually non-progressive with >95% long-term survival"
  },
  {
    "id": "angiocentric-glioma",
    "name": "Angiocentric Glioma",
    "category": "Pediatric-Type Diffuse Low-Grade Gliomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign epileptogenic neuroepithelial tumor",
    "prevalence": "Rare pediatric tumor (~1%)",
    "ageGroup": "Children & Young Adults (5-18 yrs)",
    "commonLocations": [
      "Cerebral Cortex (Parietal / Temporal / Frontal)"
    ],
    "mriFeatures": {
      "t1": "Cortical lesion with pathognomonic T1-hyperintense rim along cerebral cortex",
      "t2": "Hyperintense cortical mass, often stalk-like pointing toward adjacent ventricle",
      "flair": "Hyperintense cortical expansion with radial subependymal stalk",
      "contrast": "Non-enhancing (or faint patchy)",
      "dwi": "No restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 145,
      "heterogeneity": 0.35,
      "contrastRimThickness": "T1-Bright Cortical Rim",
      "edemaIndex": 0.05,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.58
    },
    "molecularMarkers": "MYB-QKI gene fusion (pathognomonic hallmark in >85%), EMA dot-like / ring-like positivity",
    "histology": "Elongated, slender, bipolar tumor cells arranged circumferentially in perivascular cuffs (angiocentric pseudorosettes)",
    "clinicalPresentation": "Chronic pharmacoresistant focal epilepsy starting in early childhood",
    "treatment": "Surgical resection of lesion; curative for epilepsy",
    "prognosis": "Excellent; no malignant progression reported"
  },
  {
    "id": "plnty",
    "name": "Polymorphous Low-Grade Neuroepithelial Tumor of the Young (PLNTY)",
    "category": "Pediatric-Type Diffuse Low-Grade Gliomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign epileptogenic neoplasm",
    "prevalence": "Rare, recently classified entity",
    "ageGroup": "Children & Young Adults (Mean 16 yrs)",
    "commonLocations": [
      "Temporal Lobe (cortex and subcortical white matter)"
    ],
    "mriFeatures": {
      "t1": "Well-circumscribed cortical mass, hypointense with intense central/peripheral calcifications",
      "t2": "Hyperintense with extensive dense calcification",
      "flair": "Hyperintense with sharp demarcation",
      "contrast": "Variable, minimal to patchy enhancement",
      "dwi": "No diffusion restriction"
    },
    "radiomicSignature": {
      "intensityMean": 155,
      "heterogeneity": 0.5,
      "contrastRimThickness": "Calcified Cortical / Patchy",
      "edemaIndex": 0.08,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.62
    },
    "molecularMarkers": "BRAF V600E mutation (~40-50%) or FGFR2/FGFR3 fusions, CD34 strongly and diffusely positive (ramified network)",
    "histology": "Polymorphous cellular architecture: oligodendroglioma-like cells, astrocytic cells, dense calcifications, perivascular pseudorosettes",
    "clinicalPresentation": "Intractable drug-resistant focal seizures",
    "treatment": "Surgical resection of epileptogenic zone",
    "prognosis": "Excellent; benign course without recurrence after total resection"
  },
  {
    "id": "pilocytic-astro",
    "name": "Pilocytic Astrocytoma",
    "category": "Circumscribed Astrocytic Gliomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign / Low-grade circumscribed",
    "prevalence": "Most common pediatric brain tumor (~30%)",
    "ageGroup": "Children & Adolescents (Peak 5-14 yrs)",
    "commonLocations": [
      "Cerebellum (posterior fossa)",
      "Optic Pathway / Chiasm",
      "Hypothalamus",
      "Brainstem"
    ],
    "mriFeatures": {
      "t1": "Large cyst with hypointense fluid, discrete solid mural nodule",
      "t2": "Hyperintense cyst with hyperintense solid mural nodule",
      "flair": "Hyperintense cyst content and bright mural nodule",
      "contrast": "Intense, vivid contrast enhancement of the solid mural nodule; cyst wall usually does not enhance",
      "dwi": "No diffusion restriction (facilitated ADC)"
    },
    "radiomicSignature": {
      "intensityMean": 190,
      "heterogeneity": 0.6,
      "contrastRimThickness": "Intense Mural Nodule (5-15mm)",
      "edemaIndex": 0.18,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.72
    },
    "molecularMarkers": "KIAA1549-BRAF gene fusion (>70%), BRAF V600E mutation, NF1 association in optic pathway tumors",
    "histology": "Biphasic architecture (compact fibrillary areas + microcystic loose areas), Rosenthal fibers, eosinophilic granular bodies",
    "clinicalPresentation": "Signs of elevated ICP (morning vomiting, ataxia, clumsiness), visual deficits in optic chiasm lesions",
    "treatment": "Complete surgical resection is curative (>95% 10-yr survival); targeted BRAF/MEK inhibitors (Trametinib, Dabrafenib) for inoperable tumors",
    "prognosis": "Excellent; 10-year overall survival >90-95%"
  },
  {
    "id": "sega",
    "name": "Subependymal Giant Cell Astrocytoma (SEGA)",
    "category": "Circumscribed Astrocytic Gliomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign intraventricular",
    "prevalence": "Occurs almost exclusively in Tuberous Sclerosis Complex (TSC, ~15%)",
    "ageGroup": "Children & Adolescents (<20 yrs)",
    "commonLocations": [
      "Foramen of Monro / Lateral Ventricle Wall"
    ],
    "mriFeatures": {
      "t1": "Well-circumscribed intraventricular mass near the Foramen of Monro, iso-to-hypointense",
      "t2": "Heterogeneously hyperintense with calcifications and flow voids",
      "flair": "Hyperintense, associated with cortical tubers and subependymal nodules (SEN)",
      "contrast": "Marked, homogeneous, vivid contrast enhancement",
      "dwi": "No restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 195,
      "heterogeneity": 0.52,
      "contrastRimThickness": "Solid Vivid Intraventricular",
      "edemaIndex": 0.1,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.6
    },
    "molecularMarkers": "TSC1 (Hamartin) or TSC2 (Tuberin) gene mutation resulting in constitutive mTOR pathway hyperactivation",
    "histology": "Large ganglioid/gemistocyte-like giant cells, round-to-oval vesicular nuclei with prominent nucleoli, low mitotic activity",
    "clinicalPresentation": "Obstructive hydrocephalus, acute headaches, vomiting, visual blurring, worsening seizures in TSC patient",
    "treatment": "mTOR inhibitors (Everolimus / Rapamycin) can dramatically shrink tumor; surgical resection if acute obstructive hydrocephalus",
    "prognosis": "Excellent with medical or surgical management"
  },
  {
    "id": "pxa",
    "name": "Pleomorphic Xanthoastrocytoma (PXA)",
    "category": "Circumscribed Astrocytic Gliomas",
    "whoGrade": "WHO Grade II",
    "gradeNum": 2,
    "malignancy": "Low to intermediate grade",
    "prevalence": "<1% of all astrocytomas",
    "ageGroup": "Children and Young Adults (10-30 yrs)",
    "commonLocations": [
      "Superficial Temporal Lobe",
      "Parietal Lobe (abutting leptomeninges)"
    ],
    "mriFeatures": {
      "t1": "Cortically-based cystic lesion with an avidly enhancing mural nodule abutting the dura",
      "t2": "Hyperintense cyst with isointense/hyperintense nodule",
      "flair": "Perilesional hyperintensity, cortical expansion",
      "contrast": "Vivid enhancement of the mural nodule, frequent dural tail sign mimicking meningioma",
      "dwi": "No significant diffusion restriction"
    },
    "radiomicSignature": {
      "intensityMean": 182,
      "heterogeneity": 0.65,
      "contrastRimThickness": "Mural Nodule / Dural Abutment",
      "edemaIndex": 0.3,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.74
    },
    "molecularMarkers": "BRAF V600E mutation (~60-70%), CDKN2A/B homozygous deletion (~65%)",
    "histology": "Marked nuclear pleomorphism, bizarre multinucleated giant cells, lipid-laden xanthomatous astrocytes, eosinophilic granular bodies",
    "clinicalPresentation": "Chronic refractory focal seizures (>75%), cortical signs",
    "treatment": "Gross total surgical resection; BRAF inhibitor (Dabrafenib/Trametinib) for residual/recurrent cases",
    "prognosis": "Favorable with complete resection (~80% 5-year survival)"
  },
  {
    "id": "ganglioglioma",
    "name": "Ganglioglioma, WHO Grade 1",
    "category": "Glioneuronal and Neuronal Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign / Low-grade glioneuronal",
    "prevalence": "Most common neoplastic cause of chronic intractable temporal lobe epilepsy",
    "ageGroup": "Children and Young Adults (10-30 yrs)",
    "commonLocations": [
      "Temporal Lobe (>70%)",
      "Frontal Lobe",
      "Parietal Lobe"
    ],
    "mriFeatures": {
      "t1": "Cortical-subcortical cyst with an enhancing mural nodule or solid mass",
      "t2": "Hyperintense, often with internal calcifications (hypointense)",
      "flair": "Well-demarcated hyperintensity",
      "contrast": "Variable enhancement (from solid nodular to ring-like or non-enhancing)",
      "dwi": "No diffusion restriction"
    },
    "radiomicSignature": {
      "intensityMean": 165,
      "heterogeneity": 0.48,
      "contrastRimThickness": "Mural Nodule / Solid",
      "edemaIndex": 0.15,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.62
    },
    "molecularMarkers": "BRAF V600E mutation (~20-50%), CD34 positive immunophenotype",
    "histology": "Mixture of dysplastic, binucleated ganglion cells (neuronal component) and neoplastic astrocytes (glial component)",
    "clinicalPresentation": "Longstanding, drug-resistant focal epilepsy (temporal lobe seizures)",
    "treatment": "Complete surgical resection (epileptogenic zone resection usually cures seizures >85%)",
    "prognosis": "Excellent; recurrence rate is <5-10%"
  },
  {
    "id": "anaplastic-ganglioglioma",
    "name": "Anaplastic Ganglioglioma, WHO Grade 3",
    "category": "Glioneuronal and Neuronal Tumors",
    "whoGrade": "WHO Grade III",
    "gradeNum": 3,
    "malignancy": "High-grade malignant glioneuronal",
    "prevalence": "Rare (<5% of gangliogliomas)",
    "ageGroup": "Young Adults (20-40 yrs)",
    "commonLocations": [
      "Temporal Lobe",
      "Frontal Lobe"
    ],
    "mriFeatures": {
      "t1": "Heterogeneous mass with necrosis and mass effect",
      "t2": "Hyperintense with surrounding edema",
      "flair": "Infiltrative margins",
      "contrast": "Heterogeneous, irregular ring-enhancement",
      "dwi": "Restricted diffusion in high-grade glial regions"
    },
    "radiomicSignature": {
      "intensityMean": 175,
      "heterogeneity": 0.78,
      "contrastRimThickness": "Irregular Ring",
      "edemaIndex": 0.6,
      "necrosisRatio": 0.2,
      "symmetryDeficit": 0.82
    },
    "molecularMarkers": "BRAF V600E mutation, CDKN2A/B deletion, high Ki-67 (>10%)",
    "histology": "Ganglioglioma background with high-grade malignant transformation in the glial component (mitoses, necrosis, endothelial proliferation)",
    "clinicalPresentation": "Rapid worsening of long-standing epilepsy, new focal motor deficits",
    "treatment": "Maximal surgical resection + adjuvant Radiotherapy + Chemotherapy",
    "prognosis": "Guarded; median survival ~3-5 years"
  },
  {
    "id": "dig-dia",
    "name": "Desmoplastic Infantile Ganglioglioma / Astrocytoma (DIG/DIA)",
    "category": "Glioneuronal and Neuronal Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign infantile supratentorial tumor",
    "prevalence": "Rare infant tumor (<1%)",
    "ageGroup": "Infants (<24 months, peak 6 months)",
    "commonLocations": [
      "Supratentorial Lobar Cortex (Frontal / Parietal) abutting dura"
    ],
    "mriFeatures": {
      "t1": "Massive, voluminous cystic mass with a thick, enhancing, dural-based solid mural component",
      "t2": "Hyperintense cyst with hypointense collagenous/desmoplastic solid portion",
      "flair": "Marked mass effect and ventricular distortion without proportional edema",
      "contrast": "Intense, vivid contrast enhancement of the dural-based solid component",
      "dwi": "Facilitated diffusion in cyst; mild restriction in dense desmoplastic tissue"
    },
    "radiomicSignature": {
      "intensityMean": 188,
      "heterogeneity": 0.65,
      "contrastRimThickness": "Large Cyst + Dural Solid (10-30mm)",
      "edemaIndex": 0.2,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.88
    },
    "molecularMarkers": "BRAF V600E mutation, RAF1 alterations, RET fusions, dense reticulin fiber network",
    "histology": "Abundant desmoplastic collagenous stroma containing neoplastic astrocytes +/- dysplastic ganglion cells; reticulin-rich",
    "clinicalPresentation": "Rapidly enlarging head circumference (macrocephaly), bulging fontanelle, sunset eyes, vomiting, seizures",
    "treatment": "Complete surgical excision of the solid mural component (curative; cyst collapses spontaneously)",
    "prognosis": "Outstanding; >90-95% long-term cure with complete resection despite frightening massive initial size"
  },
  {
    "id": "dnt",
    "name": "Dysembryoplastic Neuroepithelial Tumor (DNT / DNET)",
    "category": "Glioneuronal and Neuronal Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign glioneuronal hamartomatous",
    "prevalence": "Common cause of childhood epilepsy (~10-15% of surgical cases)",
    "ageGroup": "Children and Young Adults (<20 yrs)",
    "commonLocations": [
      "Temporal Lobe (cortex)",
      "Frontal Lobe"
    ],
    "mriFeatures": {
      "t1": "Well-demarcated pseudocystic or multinodular cortical mass, hypointense, scalloping calvarium",
      "t2": "Bright hyperintense soap-bubble / multicystic appearance",
      "flair": "Bright rim sign / hypointense central bubbles with hyperintense peripheral halo",
      "contrast": "Usually NO enhancement (~80%); mild nodular enhancement in ~20%",
      "dwi": "No restriction (elevated ADC)"
    },
    "radiomicSignature": {
      "intensityMean": 140,
      "heterogeneity": 0.42,
      "contrastRimThickness": "None / Bright Rim",
      "edemaIndex": 0.05,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.58
    },
    "molecularMarkers": "FGFR1 tyrosine kinase domain duplication or mutation, MAP-kinase alterations, 1p/19q intact",
    "histology": "Specific glioneuronal element: columns of axons perpendicular to cortical surface lined by oligodendroglia-like cells with floating neurons",
    "clinicalPresentation": "Refractory complex partial seizures starting in childhood, normal neurological exam",
    "treatment": "Surgical lesionectomy; curative for epilepsy",
    "prognosis": "Excellent; benign with virtually no recurrence after complete resection"
  },
  {
    "id": "central-neurocytoma",
    "name": "Central Neurocytoma",
    "category": "Glioneuronal and Neuronal Tumors",
    "whoGrade": "WHO Grade II",
    "gradeNum": 2,
    "malignancy": "Low-grade intraventricular neuronal",
    "prevalence": "~0.5% of primary brain tumors",
    "ageGroup": "Young adults (20-40 yrs)",
    "commonLocations": [
      "Lateral Ventricle (attached to Septum Pellucidum near Foramen of Monro)"
    ],
    "mriFeatures": {
      "t1": "Heterogeneous isointense to hypointense intraventricular mass with bubbly cysts",
      "t2": "Heterogeneously hyperintense with Swiss cheese cystic voids and calcifications",
      "flair": "Hyperintense with internal cystic cavities",
      "contrast": "Moderate to strong heterogeneous contrast enhancement",
      "dwi": "Mild restricted diffusion in cellular areas"
    },
    "radiomicSignature": {
      "intensityMean": 176,
      "heterogeneity": 0.7,
      "contrastRimThickness": "Heterogeneous Intraventricular",
      "edemaIndex": 0.2,
      "necrosisRatio": 0.05,
      "symmetryDeficit": 0.68
    },
    "molecularMarkers": "Synaptophysin strongly positive, NeuN positive, GFAP negative in neuronal cells, low Ki-67 (<2-3%)",
    "histology": "Uniform round cells with clear perinuclear halos mimicking oligodendroglioma, fine fibrillary neuropil-rich islands",
    "clinicalPresentation": "Headaches from obstructive hydrocephalus, visual changes, nausea, papilledema",
    "treatment": "Complete microsurgical resection or endoscopic resection; adjuvant SRS for residual tumor",
    "prognosis": "Favorable; >80-90% 10-year survival"
  },
  {
    "id": "extraventricular-neurocytoma",
    "name": "Extraventricular Neurocytoma (EVN)",
    "category": "Glioneuronal and Neuronal Tumors",
    "whoGrade": "WHO Grade II",
    "gradeNum": 2,
    "malignancy": "Low-grade parenchymal neuronal neoplasm",
    "prevalence": "Rare (<0.2%)",
    "ageGroup": "Young Adults (20-40 yrs)",
    "commonLocations": [
      "Frontal Lobe",
      "Parietal Lobe (Cerebral Parenchyma)"
    ],
    "mriFeatures": {
      "t1": "Well-demarcated parenchymal mass with cystic components, hypointense",
      "t2": "Heterogeneously hyperintense with calcifications and cysts",
      "flair": "Moderate surrounding edema",
      "contrast": "Strong heterogeneous contrast enhancement",
      "dwi": "Mild diffusion restriction in solid component"
    },
    "radiomicSignature": {
      "intensityMean": 174,
      "heterogeneity": 0.68,
      "contrastRimThickness": "Parenchymal Solid-Cystic",
      "edemaIndex": 0.35,
      "necrosisRatio": 0.05,
      "symmetryDeficit": 0.72
    },
    "molecularMarkers": "Synaptophysin+, NeuN+, lack of IDH mutation and 1p/19q codeletion",
    "histology": "Neuronal differentiation with neuropil islands and round uniform cells",
    "clinicalPresentation": "Seizures, focal neurological deficits",
    "treatment": "Complete surgical resection +/- post-op radiation for atypical EVN",
    "prognosis": "Good overall survival with gross total resection"
  },
  {
    "id": "cerebellar-liponeurocytoma",
    "name": "Cerebellar Liponeurocytoma",
    "category": "Glioneuronal and Neuronal Tumors",
    "whoGrade": "WHO Grade II",
    "gradeNum": 2,
    "malignancy": "Low-grade neuronal tumor with lipomatous differentiation",
    "prevalence": "Extremely rare (<0.1%)",
    "ageGroup": "Adults (35-55 yrs)",
    "commonLocations": [
      "Cerebellar Hemisphere",
      "Vermis"
    ],
    "mriFeatures": {
      "t1": "Well-circumscribed cerebellar mass with focal intrinsic T1-hyperintensity (fat elements)",
      "t2": "Heterogeneously hyperintense with characteristic fat suppression on fat-sat sequences",
      "flair": "Hyperintense with fourth ventricle displacement",
      "contrast": "Heterogeneous, patchy to moderate enhancement",
      "dwi": "Mild restriction in dense neurocytic islands"
    },
    "radiomicSignature": {
      "intensityMean": 168,
      "heterogeneity": 0.65,
      "contrastRimThickness": "Fat-Containing Cerebellar",
      "edemaIndex": 0.2,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.7
    },
    "molecularMarkers": "NEUROD1 expression, Synaptophysin+, MAP2+, low MIB-1 index",
    "histology": "Small round neurocytic cells intermingled with clusters of mature adipocytes and lipid-vacuolated cells",
    "clinicalPresentation": "Ataxia, vertigo, occipital headache, unsteadiness",
    "treatment": "Complete surgical resection",
    "prognosis": "Favorable; low recurrence rate (~15-20% at 10 years)"
  },
  {
    "id": "rgnt",
    "name": "Rosette-Forming Glioneuronal Tumor (RGNT)",
    "category": "Glioneuronal and Neuronal Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign fourth ventricular/midline neoplasm",
    "prevalence": "Rare (~0.2%)",
    "ageGroup": "Young Adults (Peak 20-35 yrs)",
    "commonLocations": [
      "Fourth Ventricle",
      "Aqueduct of Sylvius",
      "Cerebellar Vermis",
      "Pineal Region"
    ],
    "mriFeatures": {
      "t1": "Well-defined intraventricular / midline mass, hypointense with cystic areas",
      "t2": "Heterogeneously hyperintense with characteristic multilocular cysts",
      "flair": "Hyperintense with aqueductal compression",
      "contrast": "Variable, from nodular/ring-like to non-enhancing",
      "dwi": "No restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 160,
      "heterogeneity": 0.55,
      "contrastRimThickness": "Multilocular Ring / Nodular",
      "edemaIndex": 0.15,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.6
    },
    "molecularMarkers": "FGFR1 mutation (co-occurring with PIK3CA or NF1 mutations in >90%), Synaptophysin positive in rosettes",
    "histology": "Neurocytic rosettes (eosinophilic neuropil core surrounded by uniform round nuclei) and astrocytic component",
    "clinicalPresentation": "Obstructive hydrocephalus, ataxia, headache",
    "treatment": "Surgical resection; often curative",
    "prognosis": "Excellent; indolent benign clinical course"
  },
  {
    "id": "pgnt",
    "name": "Papillary Glioneuronal Tumor (PGNT)",
    "category": "Glioneuronal and Neuronal Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign glioneuronal neoplasm",
    "prevalence": "Rare (<0.1%)",
    "ageGroup": "Young Adults & Children",
    "commonLocations": [
      "Periventricular White Matter (Frontal / Temporal / Parietal)"
    ],
    "mriFeatures": {
      "t1": "Large, well-circumscribed solid-cystic paraventricular mass",
      "t2": "Heterogeneously hyperintense with prominent mural nodule",
      "flair": "Hyperintense with minimal peritumoral edema",
      "contrast": "Strong, homogeneous to heterogeneous enhancement of mural nodule and cyst wall",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 182,
      "heterogeneity": 0.58,
      "contrastRimThickness": "Mural Nodule Avid",
      "edemaIndex": 0.2,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.68
    },
    "molecularMarkers": "PRKCA-SLC44A1 gene fusion (pathognomonic hallmark in >90%), CD34 variable",
    "histology": "Papillary structures with hyalinized vascular cores lined by GFAP+ astrocytes with interpapillary synaptophysin+ neurocytes",
    "clinicalPresentation": "Seizures, headache, visual changes",
    "treatment": "Complete surgical resection is curative",
    "prognosis": "Outstanding; benign outcome with no recurrence after resection"
  },
  {
    "id": "lhermitte-duclos",
    "name": "Dysplastic Cerebellar Gangliocytoma (Lhermitte-Duclos Disease)",
    "category": "Glioneuronal and Neuronal Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign hamartomatous overgrowth",
    "prevalence": "Associated with Cowden Syndrome (PTEN hamartoma tumor syndrome)",
    "ageGroup": "Young Adults (20-40 yrs)",
    "commonLocations": [
      "Cerebellar Hemisphere (unilateral expansion)"
    ],
    "mriFeatures": {
      "t1": "Unilateral cerebellar expansion with thickened folia, hypointense bands",
      "t2": "PATHOGNOMONIC TIGROID / STRIPED PATTERN (alternating hyperintense and isointense parallel laminated folia on T2)",
      "flair": "Expanded cerebellar folia without true mass effect or necrosis",
      "contrast": "TYPICALLY NO CONTRAST ENHANCEMENT (or rare superficial venous blush)",
      "dwi": "Facilitated diffusion, no restriction"
    },
    "radiomicSignature": {
      "intensityMean": 155,
      "heterogeneity": 0.4,
      "contrastRimThickness": "Tigroid Striated Foliar Pattern",
      "edemaIndex": 0.1,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.7
    },
    "molecularMarkers": "PTEN germline or somatic loss-of-function mutation (leads to hyperactivation of PI3K/AKT/mTOR pathway)",
    "histology": "Hypertrophy of the cerebellar internal granule layer with dysplastic ganglion-like neurons replacing Purkinje cells",
    "clinicalPresentation": "Progressive cerebellar ataxia, occipital headache, hydrocephalus; screen for Cowden syndrome",
    "treatment": "Surgical decompression / subtotal resection if causing posterior fossa herniation/hydrocephalus",
    "prognosis": "Benign; slowly progressive or static over decades"
  },
  {
    "id": "ependymoma-pfa",
    "name": "Posterior Fossa Ependymoma, Group PFA",
    "category": "Ependymal Tumors",
    "whoGrade": "WHO Grade III",
    "gradeNum": 3,
    "malignancy": "Malignant / High recurrence risk",
    "prevalence": "Most common pediatric ependymoma subtype",
    "ageGroup": "Infants & Toddlers (Mean age 1-3 yrs)",
    "commonLocations": [
      "Fourth Ventricle",
      "Foramen of Luschka / Magendie",
      "Cerebellopontine Angle"
    ],
    "mriFeatures": {
      "t1": "Plastic/pliable mass conforming to fourth ventricle, extending through foramina (toothpaste sign)",
      "t2": "Heterogeneously hyperintense with cystic, hemorrhagic, and calcified foci",
      "flair": "Hyperintense, causing obstructive hydrocephalus",
      "contrast": "Heterogeneous, patchy to intense enhancement",
      "dwi": "Restricted diffusion in hypercellular solid regions"
    },
    "radiomicSignature": {
      "intensityMean": 180,
      "heterogeneity": 0.75,
      "contrastRimThickness": "Plastic / Infiltrative (2-5mm)",
      "edemaIndex": 0.45,
      "necrosisRatio": 0.15,
      "symmetryDeficit": 0.82
    },
    "molecularMarkers": "Epigenetic hypermethylation (CpG island methylator phenotype), loss of H3K27me3, 1q gain (adverse prognosis)",
    "histology": "True ependymal rosettes (around central lumen) and perivascular pseudorosettes, high cellularity, necrosis",
    "clinicalPresentation": "Ataxia, vomiting, macrocephaly in infants, lethargy, hydrocephalus",
    "treatment": "Gross total surgical resection + adjuvant local proton beam or photon radiotherapy; craniospinal axis screening",
    "prognosis": "Poor to moderate; higher recurrence and metastasis rate than PFB group"
  },
  {
    "id": "ependymoma-pfb",
    "name": "Posterior Fossa Ependymoma, Group PFB",
    "category": "Ependymal Tumors",
    "whoGrade": "WHO Grade II",
    "gradeNum": 2,
    "malignancy": "Intermediate grade",
    "prevalence": "Second posterior fossa ependymoma group",
    "ageGroup": "Older Children and Adults (10-35 yrs)",
    "commonLocations": [
      "Fourth Ventricle (Midline/Floor)"
    ],
    "mriFeatures": {
      "t1": "Well-circumscribed fourth ventricular mass",
      "t2": "Hyperintense, less infiltrative than PFA",
      "flair": "Hyperintense with hydrocephalus",
      "contrast": "Moderate to strong enhancement",
      "dwi": "Moderate diffusion restriction"
    },
    "radiomicSignature": {
      "intensityMean": 172,
      "heterogeneity": 0.58,
      "contrastRimThickness": "Well-Circumscribed",
      "edemaIndex": 0.25,
      "necrosisRatio": 0.05,
      "symmetryDeficit": 0.7
    },
    "molecularMarkers": "Preserved H3K27me3, genome-wide chromosomal instability, normal DNA methylation",
    "histology": "Classic ependymal pseudorosettes, lower mitotic index, blepharoplasts (basal bodies) visible on EM",
    "clinicalPresentation": "Morning headaches, unsteady gait, nausea",
    "treatment": "Gross total resection +/- focal radiation therapy",
    "prognosis": "Good; >80-90% 10-year overall survival"
  },
  {
    "id": "ependymoma-zfta",
    "name": "Supratentorial Ependymoma, ZFTA-fusion positive",
    "category": "Ependymal Tumors",
    "whoGrade": "WHO Grade III",
    "gradeNum": 3,
    "malignancy": "High-grade malignant",
    "prevalence": "~70% of pediatric supratentorial ependymomas",
    "ageGroup": "Children and Young Adults (Mean 5-10 yrs)",
    "commonLocations": [
      "Periventricular Supratentorial Parenchyma (Frontal/Parietal)"
    ],
    "mriFeatures": {
      "t1": "Large, well-demarcated parenchymal and periventricular mass with cystic areas",
      "t2": "Heterogeneous hyperintensity with hemorrhagic foci and calcifications",
      "flair": "Prominent surrounding vasogenic edema",
      "contrast": "Avid, solid-cystic heterogeneous contrast enhancement",
      "dwi": "Diffusion restriction in dense cellular portions"
    },
    "radiomicSignature": {
      "intensityMean": 184,
      "heterogeneity": 0.82,
      "contrastRimThickness": "Solid-Cystic Enhancing",
      "edemaIndex": 0.6,
      "necrosisRatio": 0.22,
      "symmetryDeficit": 0.88
    },
    "molecularMarkers": "ZFTA (formerly RELA) gene fusions (e.g. ZFTA-RELA), L1CAM overexpression, NF-kB pathway activation",
    "histology": "High-grade clear cell ependymoma morphology, dense perivascular pseudorosettes, microvascular proliferation",
    "clinicalPresentation": "Focal neurological deficit, seizures, signs of elevated ICP",
    "treatment": "Maximal safe surgical resection + adjuvant focal radiotherapy",
    "prognosis": "Aggressive; 5-year progression-free survival ~50-60%"
  },
  {
    "id": "subependymoma",
    "name": "Subependymoma",
    "category": "Ependymal Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign non-invasive",
    "prevalence": "~0.5% of intracranial tumors, often incidental",
    "ageGroup": "Middle-aged & Elderly Adults (40-60+ yrs)",
    "commonLocations": [
      "Fourth Ventricle",
      "Lateral Ventricles (Frontal Horns)"
    ],
    "mriFeatures": {
      "t1": "Lobulated, well-circumscribed intraventricular lesion, isointense to hypointense to white matter",
      "t2": "Uniformly hyperintense with little or no edema",
      "flair": "Hyperintense with minimal surrounding reaction",
      "contrast": "Minimal to NO contrast enhancement (key differentiator from ependymoma)",
      "dwi": "No diffusion restriction"
    },
    "radiomicSignature": {
      "intensityMean": 135,
      "heterogeneity": 0.25,
      "contrastRimThickness": "None / Minimal",
      "edemaIndex": 0.02,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.5
    },
    "molecularMarkers": "GFAP positive, S100 positive, low Ki-67 (<1%)",
    "histology": "Clusters/nests of bland ependymal nuclei embedded in an abundant fibrillary matrix, microcystic changes, absence of mitotic figures",
    "clinicalPresentation": "Asymptomatic incidental finding or slow obstructive hydrocephalus",
    "treatment": "Observation if asymptomatic; surgical resection if causing CSF obstruction",
    "prognosis": "Excellent; curative after resection with no recurrence"
  },
  {
    "id": "myxopapillary-ependymoma",
    "name": "Myxopapillary Ependymoma",
    "category": "Ependymal Tumors",
    "whoGrade": "WHO Grade II",
    "gradeNum": 2,
    "malignancy": "Intermediate risk (upgraded to Grade 2)",
    "prevalence": "Most common neoplasm of the Conus Medullaris and Filum Terminale",
    "ageGroup": "Young adults (20-40 yrs)",
    "commonLocations": [
      "Filum Terminale",
      "Cauda Equina",
      "Conus Medullaris"
    ],
    "mriFeatures": {
      "t1": "Lobulated intradural extramedullary spinal mass, isointense to hyperintense (mucin/hemorrhage)",
      "t2": "Markedly hyperintense with hypointense cap sign of hemosiderin at poles",
      "flair": "Hyperintense with mass effect on cauda equina",
      "contrast": "Intense, homogeneous contrast enhancement",
      "dwi": "Facilitated diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 190,
      "heterogeneity": 0.5,
      "contrastRimThickness": "Avid Solid Extramedullary",
      "edemaIndex": 0.15,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.45
    },
    "molecularMarkers": "HOXB13 expression, NEFL expression, high vascularity",
    "histology": "Papillary structures with central vascular cores surrounded by myxoid/mucinous stroma and cuboidal ependymal cells",
    "clinicalPresentation": "Low back pain, sciatica, saddle anesthesia, bladder/bowel dysfunction (cauda equina syndrome)",
    "treatment": "En bloc surgical excision with preservation of nerve roots +/- post-op radiotherapy if subtotal",
    "prognosis": "Good, but upgraded to Grade 2 due to propensity for late local recurrence and drop metastasis"
  },
  {
    "id": "cpp",
    "name": "Choroid Plexus Papilloma (CPP)",
    "category": "Choroid Plexus Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign intraventricular",
    "prevalence": "~2-4% of pediatric brain tumors",
    "ageGroup": "Infants <2 yrs (lateral ventricle) / Adults (4th ventricle)",
    "commonLocations": [
      "Lateral Ventricles (Atrium / Trigonum)",
      "Fourth Ventricle",
      "Third Ventricle"
    ],
    "mriFeatures": {
      "t1": "Lobulated cauliflower-like intraventricular mass, iso- to hypointense",
      "t2": "Hyperintense with internal flow voids and speckled calcifications",
      "flair": "Hyperintense with massive hydrocephalus (CSF overproduction + obstruction)",
      "contrast": "Intense, vivid, homogeneous contrast enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 198,
      "heterogeneity": 0.62,
      "contrastRimThickness": "Vivid Cauliflower",
      "edemaIndex": 0.12,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.75
    },
    "molecularMarkers": "Kir7.1 positive, TTR (transthyretin) positive, low Ki-67 (<2%), intact TP53",
    "histology": "Single layer of uniform cuboidal-to-columnar epithelial cells resting on fibrovascular fronds",
    "clinicalPresentation": "Rapid head enlargement in infants (sunsetting eyes), vomiting, hydrocephalus due to hypersecretion of CSF",
    "treatment": "Complete surgical resection (often curative and resolves hydrocephalus)",
    "prognosis": "Excellent; >95% 10-year survival"
  },
  {
    "id": "atypical-cpp",
    "name": "Atypical Choroid Plexus Papilloma",
    "category": "Choroid Plexus Tumors",
    "whoGrade": "WHO Grade II",
    "gradeNum": 2,
    "malignancy": "Intermediate grade",
    "prevalence": "~15-20% of choroid plexus tumors",
    "ageGroup": "Children <5 yrs",
    "commonLocations": [
      "Lateral Ventricle"
    ],
    "mriFeatures": {
      "t1": "Lobulated intraventricular mass with focal necrosis/cystic areas",
      "t2": "Heterogeneously hyperintense",
      "flair": "Hyperintense with periventricular transependymal edema",
      "contrast": "Strong, slightly heterogeneous enhancement",
      "dwi": "Mild diffusion restriction in cellular foci"
    },
    "radiomicSignature": {
      "intensityMean": 188,
      "heterogeneity": 0.7,
      "contrastRimThickness": "Strong Heterogeneous",
      "edemaIndex": 0.3,
      "necrosisRatio": 0.08,
      "symmetryDeficit": 0.78
    },
    "molecularMarkers": "Increased mitotic rate (>=2 mitoses per 10 HPF), TTR positive",
    "histology": "Papillary architecture with increased mitotic activity, loss of cobblestone pattern, nuclear pleomorphism",
    "clinicalPresentation": "Hydrocephalus, macrocephaly, irritability",
    "treatment": "Complete surgical resection +/- close monitoring or adjuvant chemotherapy if subtotal",
    "prognosis": "Good with complete resection, but higher recurrence risk than Grade 1 CPP"
  },
  {
    "id": "cpc",
    "name": "Choroid Plexus Carcinoma (CPC)",
    "category": "Choroid Plexus Tumors",
    "whoGrade": "WHO Grade III",
    "gradeNum": 3,
    "malignancy": "High-grade malignant",
    "prevalence": "~15% of choroid plexus neoplasms",
    "ageGroup": "Infants and Young Children (<3 yrs)",
    "commonLocations": [
      "Lateral Ventricle with parenchymal invasion"
    ],
    "mriFeatures": {
      "t1": "Large, bulky, heterogeneous intraventricular mass invading adjacent brain parenchyma",
      "t2": "Heterogeneously hyperintense with necrosis, hemorrhage, and calcification",
      "flair": "Marked peritumoral parenchymal vasogenic edema",
      "contrast": "Intense, heterogeneous enhancement; propensity for leptomeningeal seeding",
      "dwi": "Prominent restricted diffusion in solid portions"
    },
    "radiomicSignature": {
      "intensityMean": 182,
      "heterogeneity": 0.88,
      "contrastRimThickness": "Invasive / Necrotic",
      "edemaIndex": 0.72,
      "necrosisRatio": 0.35,
      "symmetryDeficit": 0.92
    },
    "molecularMarkers": "TP53 mutations (>50%, strongly associated with Li-Fraumeni syndrome), genomic instability",
    "histology": "Frank epithelial malignancy with sheet-like architecture, nuclear pleomorphism, brisk mitoses (>5 per 10 HPF), necrosis, brain invasion",
    "clinicalPresentation": "Acute intracranial hypertension, rapid neurological deterioration, leptomeningeal drop metastases",
    "treatment": "Maximal surgical resection + systemic chemotherapy + craniospinal irradiation (in older children)",
    "prognosis": "Guarded; 5-year survival ~30-50%"
  },
  {
    "id": "medullo-wnt",
    "name": "Medulloblastoma, WNT-activated",
    "category": "Embryonal Tumors",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "High-grade embryonal (best prognosis subgroup)",
    "prevalence": "~10% of all medulloblastomas",
    "ageGroup": "Older children and adolescents (7-14 yrs)",
    "commonLocations": [
      "Cerebellopontine Angle / Cerebellar Peduncle / Foramen of Luschka"
    ],
    "mriFeatures": {
      "t1": "Hypointense to isointense mass in the lateral 4th ventricle / CPA cistern",
      "t2": "Isointense to hyperintense",
      "flair": "Hyperintense with moderate mass effect and brainstem displacement",
      "contrast": "Moderate to marked heterogeneous contrast enhancement",
      "dwi": "Marked restricted diffusion (hyperintense DWI, very low ADC due to high cellular packing)"
    },
    "radiomicSignature": {
      "intensityMean": 192,
      "heterogeneity": 0.7,
      "contrastRimThickness": "Solid Cellular",
      "edemaIndex": 0.4,
      "necrosisRatio": 0.1,
      "symmetryDeficit": 0.85
    },
    "molecularMarkers": "CTNNB1 (beta-catenin) somatic mutation, Monosomy 6 (~85%), nuclear beta-catenin accumulation",
    "histology": "Classic medulloblastoma: sheets of small round blue cells with hyperchromatic nuclei, Homer Wright rosettes",
    "clinicalPresentation": "Subacute ataxia, morning headache, vomiting, VI/VII cranial nerve palsies",
    "treatment": "Gross total resection + reduced-intensity craniospinal irradiation + chemotherapy",
    "prognosis": "Excellent; >90-95% 5-year overall survival"
  },
  {
    "id": "medullo-shh",
    "name": "Medulloblastoma, SHH-activated",
    "category": "Embryonal Tumors",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "High-grade embryonal",
    "prevalence": "~30% of medulloblastomas",
    "ageGroup": "Bimodal: Infants (<3 yrs) and Adults (>16 yrs)",
    "commonLocations": [
      "Cerebellar Hemispheres (lateral location classic)"
    ],
    "mriFeatures": {
      "t1": "Hypointense to isointense mass located in the cerebellar hemisphere rather than midline",
      "t2": "Iso- to hyperintense with frequent microcysts",
      "flair": "Hyperintense hemispheric mass with perilesional edema",
      "contrast": "Variable, often robust nodular/solid enhancement",
      "dwi": "Intense diffusion restriction (high cellular density)"
    },
    "radiomicSignature": {
      "intensityMean": 190,
      "heterogeneity": 0.74,
      "contrastRimThickness": "Hemispheric Solid-Nodular",
      "edemaIndex": 0.5,
      "necrosisRatio": 0.15,
      "symmetryDeficit": 0.88
    },
    "molecularMarkers": "PTCH1, SMO, or SUFU mutations, GLI2 amplification, MYCN amplification, TP53 status",
    "histology": "Desmoplastic/nodular or extensive nodularity variant (reticulin-free pale islands) or classic",
    "clinicalPresentation": "Appendicular cerebellar ataxia (limb dysmetria), headache, vomiting",
    "treatment": "Maximal surgical resection + risk-adapted craniospinal irradiation + chemotherapy +/- SMO inhibitors (Sonidegib)",
    "prognosis": "Infants & TP53-wildtype: ~75% survival; TP53-mutant: very poor (<30%)"
  },
  {
    "id": "medullo-group3",
    "name": "Medulloblastoma, Non-WNT/Non-SHH (Group 3)",
    "category": "Embryonal Tumors",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "Extremely high-grade malignant",
    "prevalence": "~25% of medulloblastomas",
    "ageGroup": "Infants and Young Children (Peak 3-5 yrs)",
    "commonLocations": [
      "Fourth Ventricle Midline (Vermis)"
    ],
    "mriFeatures": {
      "t1": "Midline vermian mass filling fourth ventricle, pushing into brainstem",
      "t2": "Isointense to hypointense (dense small blue cells)",
      "flair": "Hyperintense with hydrocephalus",
      "contrast": "Heterogeneous contrast enhancement; very high rate of leptomeningeal sugar coating (drop metastases)",
      "dwi": "Extreme restricted diffusion with lowest ADC values (<0.5 x 10^-3 mm2/s)"
    },
    "radiomicSignature": {
      "intensityMean": 194,
      "heterogeneity": 0.85,
      "contrastRimThickness": "Midline Invasive / Seeding",
      "edemaIndex": 0.58,
      "necrosisRatio": 0.22,
      "symmetryDeficit": 0.92
    },
    "molecularMarkers": "MYC (c-MYC) amplification (hallmark of poor prognosis), isochromosome 17q",
    "histology": "Classic or Large Cell / Anaplastic (marked nuclear pleomorphism, nuclear molding, prominent apoptosis and mitoses)",
    "clinicalPresentation": "Rapid intracranial hypertension, truncal ataxia, spinal drop metastasis symptoms (radiculopathy, paraparesis)",
    "treatment": "Aggressive surgical resection + high-dose craniospinal radiotherapy + intensive chemotherapy with autologous stem cell rescue",
    "prognosis": "Poor; 5-year overall survival ~40-50%"
  },
  {
    "id": "atrt",
    "name": "Atypical Teratoid / Rhabdoid Tumor (ATRT)",
    "category": "Embryonal Tumors",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "Highly aggressive malignant embryonal",
    "prevalence": "~10-15% of infant brain tumors",
    "ageGroup": "Infants & Toddlers (<3 yrs, peak <18 months)",
    "commonLocations": [
      "Cerebellopontine Angle",
      "Cerebellum (Posterior Fossa)",
      "Supratentorial cortex"
    ],
    "mriFeatures": {
      "t1": "Large, bulky, heterogeneous mass with necrosis and hemorrhage",
      "t2": "Heterogeneous with peripheral solid rhabdoid areas and central necrosis",
      "flair": "Prominent edema, brainstem compression",
      "contrast": "Heterogeneous rim and nodular enhancement, frequent early leptomeningeal dissemination",
      "dwi": "Marked restricted diffusion in solid cellular components"
    },
    "radiomicSignature": {
      "intensityMean": 186,
      "heterogeneity": 0.9,
      "contrastRimThickness": "Bulky Heterogeneous",
      "edemaIndex": 0.7,
      "necrosisRatio": 0.4,
      "symmetryDeficit": 0.94
    },
    "molecularMarkers": "Biallelic inactivation/mutation of SMARCB1 (INI1) gene on chromosome 22q11 (~95%) or SMARCA4 (BRG1); Loss of INI1 nuclear staining",
    "histology": "Sheets of rhabdoid cells with abundant eccentric eosinophilic cytoplasm, vesicular nuclei, prominent nucleoli, intracytoplasmic whorls",
    "clinicalPresentation": "Rapid decline in infants: vomiting, lethargy, macrocephaly, cranial nerve palsies",
    "treatment": "Maximal surgical resection + intensive multimodal chemotherapy (e.g. European Rhabdoid protocol) +/- proton radiation",
    "prognosis": "Historically poor, improving with intensive protocols (median OS ~2-3 years)"
  },
  {
    "id": "etmr",
    "name": "Embryonal Tumor with Multilayered Rosettes (ETMR)",
    "category": "Embryonal Tumors",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "Extremely malignant",
    "prevalence": "Rare highly aggressive pediatric tumor",
    "ageGroup": "Infants & Toddlers (<4 yrs, peak 1-2 yrs)",
    "commonLocations": [
      "Supratentorial Lobar White Matter",
      "Brainstem / Cerebellum"
    ],
    "mriFeatures": {
      "t1": "Very large, well-demarcated heterogeneous mass with cystic and necrotic components",
      "t2": "Heterogeneous with microcysts and focal calcification",
      "flair": "Marked mass effect and perilesional edema",
      "contrast": "Variable, patchy to intense heterogeneous enhancement",
      "dwi": "Profound diffusion restriction (dense cellular multilayered rosettes)"
    },
    "radiomicSignature": {
      "intensityMean": 188,
      "heterogeneity": 0.86,
      "contrastRimThickness": "Bulky Multilayered",
      "edemaIndex": 0.75,
      "necrosisRatio": 0.3,
      "symmetryDeficit": 0.93
    },
    "molecularMarkers": "C19MC (chromosome 19 microRNA cluster) amplification at 19q13.42, LIN28A positive on immunohistochemistry",
    "histology": "Multilayered ependymoblastic rosettes embedded in primitive embryonal neuroepithelium with neuropil-like areas",
    "clinicalPresentation": "Rapidly increasing head circumference, seizure, focal deficit, coma",
    "treatment": "Aggressive surgical resection + high-dose chemotherapy + focal radiation",
    "prognosis": "Extremely guarded; median survival <12 months"
  },
  {
    "id": "pineocytoma",
    "name": "Pineocytoma",
    "category": "Pineal Region Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign",
    "prevalence": "~15-30% of pineal parenchymal tumors",
    "ageGroup": "Young to Middle-aged Adults (25-50 yrs)",
    "commonLocations": [
      "Pineal Gland / Quadrigeminal Cistern"
    ],
    "mriFeatures": {
      "t1": "Well-circumscribed small round mass (<3 cm), isointense to hypointense",
      "t2": "Homogeneously hyperintense, peripheral exploded calcifications pushed outward",
      "flair": "Hyperintense with tectal compression",
      "contrast": "Strong, homogeneous, vivid enhancement",
      "dwi": "Facilitated or mild restriction"
    },
    "radiomicSignature": {
      "intensityMean": 192,
      "heterogeneity": 0.38,
      "contrastRimThickness": "Solid Homogeneous (5-20mm)",
      "edemaIndex": 0.1,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.55
    },
    "molecularMarkers": "Synaptophysin positive, Neurofilament positive, low Ki-67 (<1%)",
    "histology": "Mature small uniform cells resembling normal pineocytes with abundant pineocytomatous rosettes (large fibrillary centers)",
    "clinicalPresentation": "Parinaud Syndrome (upward gaze palsy, convergence-retraction nystagmus, light-near dissociation); Obstructive hydrocephalus",
    "treatment": "Complete surgical resection or Stereotactic Radiosurgery (SRS)",
    "prognosis": "Excellent; 5-year survival >90-95%"
  },
  {
    "id": "pineoblastoma",
    "name": "Pineoblastoma",
    "category": "Pineal Region Tumors",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "Highly malignant embryonal pineal tumor",
    "prevalence": "~40% of pineal parenchymal neoplasms",
    "ageGroup": "Children & Young Adults (Peak <12 yrs)",
    "commonLocations": [
      "Pineal Gland expanding into Third Ventricle and Tectum"
    ],
    "mriFeatures": {
      "t1": "Large, lobulated, ill-defined hypointense to isointense mass (>3 cm)",
      "t2": "Iso- to hyperintense with internal necrosis and engulfed peripheral exploded calcifications",
      "flair": "Hyperintense, causing severe aqueductal obstruction and hydrocephalus",
      "contrast": "Intense, heterogeneous contrast enhancement; high propensity for CSF dissemination",
      "dwi": "Severe restricted diffusion (hyperdense small round blue cells)"
    },
    "radiomicSignature": {
      "intensityMean": 188,
      "heterogeneity": 0.84,
      "contrastRimThickness": "Bulky Infiltrative (15-40mm)",
      "edemaIndex": 0.65,
      "necrosisRatio": 0.3,
      "symmetryDeficit": 0.88
    },
    "molecularMarkers": "RB1 mutation (associated with trilateral retinoblastoma), DICER1 mutations, DROSHA alterations",
    "histology": "Primitive small round blue cell tumor with high nuclear-to-cytoplasmic ratio, abundant mitoses, necrosis",
    "clinicalPresentation": "Acute Parinaud syndrome, rapid hydrocephalus, ataxia, lethargy",
    "treatment": "Maximal safe resection + craniospinal irradiation + intensive chemotherapy",
    "prognosis": "Guarded; 5-year survival ~40-60%"
  },
  {
    "id": "pptid",
    "name": "Pineal Parenchymal Tumor of Intermediate Differentiation (PPTID)",
    "category": "Pineal Region Tumors",
    "whoGrade": "WHO Grade II or III",
    "gradeNum": 2,
    "malignancy": "Intermediate grade",
    "prevalence": "~20% of pineal parenchymal tumors",
    "ageGroup": "Adults (All ages, mean 35-40 yrs)",
    "commonLocations": [
      "Pineal Gland"
    ],
    "mriFeatures": {
      "t1": "Well to moderately circumscribed lobulated pineal mass",
      "t2": "Heterogeneously hyperintense",
      "flair": "Hyperintense with aqueductal mass effect",
      "contrast": "Moderate to strong heterogeneous enhancement",
      "dwi": "Moderate diffusion restriction"
    },
    "radiomicSignature": {
      "intensityMean": 178,
      "heterogeneity": 0.6,
      "contrastRimThickness": "Moderate Lobulated",
      "edemaIndex": 0.35,
      "necrosisRatio": 0.08,
      "symmetryDeficit": 0.68
    },
    "molecularMarkers": "KDM6A, ATM, or PTEN mutations, intermediate Ki-67 (3-10%)",
    "histology": "Intermediate features between pineocytoma and pineoblastoma; higher cellularity and mitoses than pineocytoma",
    "clinicalPresentation": "Parinaud syndrome, headache, hydrocephalus",
    "treatment": "Surgical resection + radiotherapy (stereotactic or whole ventricular/craniospinal)",
    "prognosis": "Intermediate; 5-year survival ~70-80%"
  },
  {
    "id": "schwannoma-vestibular",
    "name": "Vestibular Schwannoma (Acoustic Neuroma)",
    "category": "Cranial and Paraspinal Nerve Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign extra-axial nerve sheath tumor",
    "prevalence": "Most common CPA tumor (~80% of CPA lesions, ~8% of all intracranial tumors)",
    "ageGroup": "Adults (Peak 40-60 yrs; bilateral in NF2)",
    "commonLocations": [
      "Internal Auditory Canal (IAC) extending into Cerebellopontine Angle (CPA) Cistern"
    ],
    "mriFeatures": {
      "t1": "Classic ice-cream cone configuration (cone in IAC, scoop in CPA cistern), isointense to hypointense",
      "t2": "Heterogeneously hyperintense with microcysts and CSF cleft sign",
      "flair": "Hyperintense CPA mass with brainstem/middle cerebellar peduncle compression",
      "contrast": "Intense, vivid contrast enhancement with widening of the internal acoustic meatus",
      "dwi": "No restricted diffusion (distinguishes from epidermoid cyst)"
    },
    "radiomicSignature": {
      "intensityMean": 196,
      "heterogeneity": 0.65,
      "contrastRimThickness": "Ice-Cream Cone Avid (10-35mm)",
      "edemaIndex": 0.2,
      "necrosisRatio": 0.05,
      "symmetryDeficit": 0.85
    },
    "molecularMarkers": "NF2 gene mutation (Merlin/Schwannomin inactivation on 22q12), S100 strongly and diffusely positive, SOX10 positive",
    "histology": "Antoni A areas (compact elongated spindle cells with nuclear palisading forming Verocay bodies) and Antoni B areas (hypocellular microcystic myxoid)",
    "clinicalPresentation": "Progressive unilateral sensorineural hearing loss, high-frequency tinnitus, vestibular imbalance/disequilibrium, facial numbness (CN V)",
    "treatment": "Observation (Wait-and-Scan) / Stereotactic Radiosurgery (Gamma Knife/CyberKnife) / Microsurgical resection (Retrosigmoid/Translabyrinthine)",
    "prognosis": "Excellent; >98% control rate with SRS or complete surgical excision"
  },
  {
    "id": "schwannoma-trigeminal",
    "name": "Trigeminal Schwannoma",
    "category": "Cranial and Paraspinal Nerve Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign",
    "prevalence": "Second most common intracranial schwannoma (~2-5%)",
    "ageGroup": "Adults (30-50 yrs)",
    "commonLocations": [
      "Meckels Cave / Middle & Posterior Cranial Fossa (dumbbell configuration)"
    ],
    "mriFeatures": {
      "t1": "Dumbbell-shaped mass spanning middle and posterior fossa through petrous apex, hypointense",
      "t2": "Heterogeneously hyperintense",
      "flair": "Hyperintense with temporal lobe compression",
      "contrast": "Strong, homogeneous to heterogeneous enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 190,
      "heterogeneity": 0.58,
      "contrastRimThickness": "Dumbbell Shaped Avid",
      "edemaIndex": 0.18,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.8
    },
    "molecularMarkers": "S100+, SOX10+, NF2 loss",
    "histology": "Antoni A and B tissue with Verocay bodies",
    "clinicalPresentation": "Trigeminal neuralgia, facial numbness, weakness of masticatory muscles (V3)",
    "treatment": "Microsurgical resection or Stereotactic Radiosurgery (SRS)",
    "prognosis": "Excellent with high curative rate"
  },
  {
    "id": "neurofibroma",
    "name": "Neurofibroma (Localized & Plexiform)",
    "category": "Cranial and Paraspinal Nerve Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign nerve sheath tumor (Plexiform has malignant transformation risk)",
    "prevalence": "Common in Neurofibromatosis Type 1 (NF1)",
    "ageGroup": "Children & Young Adults (NF1) / Adults (Sporadic)",
    "commonLocations": [
      "Paraspinal Nerves",
      "Peripheral Nerves",
      "Cranial Nerves"
    ],
    "mriFeatures": {
      "t1": "Fusiform enlargement of nerve root, isointense to muscle",
      "t2": "Classic target sign (hyperintense rim of myxoid tissue with central hypointense fibrous collagenous core)",
      "flair": "Hyperintense target appearance",
      "contrast": "Moderate to marked enhancement of central region",
      "dwi": "Facilitated diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 175,
      "heterogeneity": 0.52,
      "contrastRimThickness": "Target Sign",
      "edemaIndex": 0.1,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.6
    },
    "molecularMarkers": "NF1 gene mutation (loss of Neurofibromin on chromosome 17q11.2)",
    "histology": "Interlacing bundles of elongated spindle cells with wavy/comma-shaped nuclei, mixed with collagen fibrils and wire-like axons",
    "clinicalPresentation": "Radiculopathy, palpable soft-tissue masses, cutaneous cafe-au-lait spots, scoliosis",
    "treatment": "Conservative monitoring; MEK inhibitors (Selumetinib for inoperable plexiform in NF1 children); surgical resection",
    "prognosis": "Good; plexiform type carries 8-12% lifetime risk of transformation to MPNST"
  },
  {
    "id": "mpnst",
    "name": "Malignant Peripheral Nerve Sheath Tumor (MPNST)",
    "category": "Cranial and Paraspinal Nerve Tumors",
    "whoGrade": "WHO Grade III/IV",
    "gradeNum": 4,
    "malignancy": "High-grade malignant sarcoma",
    "prevalence": "~50% arise in patients with NF1; ~10% radiation-induced",
    "ageGroup": "Young to Middle-aged Adults (20-50 yrs)",
    "commonLocations": [
      "Paraspinal Plexus (Brachial/Lumbosacral)",
      "Sciatic Nerve",
      "Spinal Roots"
    ],
    "mriFeatures": {
      "t1": "Large (>5 cm), infiltrative, heterogeneous soft-tissue mass along nerve",
      "t2": "Heterogeneously hyperintense, loss of normal target sign, necrotic/hemorrhagic foci",
      "flair": "Marked surrounding tissue edema and local invasion",
      "contrast": "Irregular, intense peripheral and nodular enhancement",
      "dwi": "Marked diffusion restriction in cellular malignant regions"
    },
    "radiomicSignature": {
      "intensityMean": 182,
      "heterogeneity": 0.88,
      "contrastRimThickness": "Invasive Heterogeneous",
      "edemaIndex": 0.72,
      "necrosisRatio": 0.38,
      "symmetryDeficit": 0.9
    },
    "molecularMarkers": "PRC2 complex loss (EED or SUZ12 mutations causing loss of H3K27me3), CDKN2A/B deletion, TP53 mutation",
    "histology": "High-grade spindle cell sarcoma, alternating hypocellular and hypercellular fascicles (marble pattern), brisk mitoses, necrosis",
    "clinicalPresentation": "Rapidly enlarging, painful mass in a pre-existing plexiform neurofibroma, progressive motor deficit",
    "treatment": "Radical wide surgical resection with negative margins + adjuvant high-dose radiation +/- anthracycline-based chemotherapy",
    "prognosis": "Poor; high rate of local recurrence and hematogenous metastasis (lungs); 5-year survival ~35-50%"
  },
  {
    "id": "meningioma-g1-meningothelial",
    "name": "Meningothelial Meningioma, WHO Grade 1",
    "category": "Meningiomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign extra-axial",
    "prevalence": "Most common subtype of Grade 1 meningioma (~60%)",
    "ageGroup": "Adults (Peak 50-70 yrs; Female > Male 2:1)",
    "commonLocations": [
      "Parasagittal / Falx Cerebri",
      "Cerebral Convexity",
      "Sphenoid Wing",
      "Olfactory Groove",
      "Tuberculum Sellae"
    ],
    "mriFeatures": {
      "t1": "Well-circumscribed extra-axial broad-based dural mass, isointense to cortex",
      "t2": "Isointense to slightly hyperintense, prominent CSF cleft sign separating from brain parenchyma",
      "flair": "Variable mild hyperintensity with minimal brain edema",
      "contrast": "Intense, rapid, homogeneous contrast enhancement with classic Dural Tail Sign",
      "dwi": "No restriction (facilitated ADC)"
    },
    "radiomicSignature": {
      "intensityMean": 210,
      "heterogeneity": 0.3,
      "contrastRimThickness": "Avid Homogeneous + Dural Tail (15-45mm)",
      "edemaIndex": 0.15,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.82
    },
    "molecularMarkers": "TRAF7, KLF4, AKT1 (E17K), or SMO mutations (skull base); NF2 wildtype",
    "histology": "Sheets and lobules of uniform polygonal meningothelial cells with syncytial appearance, intranuclear pseudoinclusions",
    "clinicalPresentation": "Slow onset headaches, focal seizures, focal deficits depending on location (anosmia in olfactory groove, visual loss in tuberculum sellae)",
    "treatment": "Observation / Complete Simpson Grade 1 resection (curative) / Stereotactic Radiosurgery for skull base",
    "prognosis": "Excellent; 10-year recurrence rate <10-15% after complete resection"
  },
  {
    "id": "meningioma-g1-fibrous",
    "name": "Fibrous (Fibroblastic) Meningioma, WHO Grade 1",
    "category": "Meningiomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign extra-axial",
    "prevalence": "~25% of Grade 1 meningiomas",
    "ageGroup": "Adults (45-65 yrs)",
    "commonLocations": [
      "Convexity",
      "Parasagittal",
      "Spinal Dural Space"
    ],
    "mriFeatures": {
      "t1": "Extra-axial dural mass, isointense to hypointense to cortex",
      "t2": "Characteristically hypointense on T2 (dense collagen and fibrous stroma)",
      "flair": "Mild hyperintensity, minimal edema",
      "contrast": "Homogeneous vivid enhancement with dural tail",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 205,
      "heterogeneity": 0.28,
      "contrastRimThickness": "Homogeneous T2-Hypointense",
      "edemaIndex": 0.12,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.8
    },
    "molecularMarkers": "NF2 gene mutation (22q loss), S100 negative, EMA positive",
    "histology": "Spindle-shaped cells in intersecting fascicles embedded in abundant collagenous and reticulin-rich matrix",
    "clinicalPresentation": "Seizures, localized skull hyperostosis, headaches",
    "treatment": "Surgical resection (Simpson Grade 1)",
    "prognosis": "Excellent; recurrence rate ~5-10%"
  },
  {
    "id": "meningioma-g1-transitional",
    "name": "Transitional (Mixed) Meningioma, WHO Grade 1",
    "category": "Meningiomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign extra-axial",
    "prevalence": "Common Grade 1 subtype",
    "ageGroup": "Adults (50-70 yrs)",
    "commonLocations": [
      "Convexity",
      "Parasagittal",
      "Tentorium Cerebelli"
    ],
    "mriFeatures": {
      "t1": "Isointense dural mass",
      "t2": "Mixed isointense/hyperintense with psammoma body calcifications",
      "flair": "Well-demarcated with CSF cleft",
      "contrast": "Vivid homogeneous enhancement",
      "dwi": "No diffusion restriction"
    },
    "radiomicSignature": {
      "intensityMean": 208,
      "heterogeneity": 0.35,
      "contrastRimThickness": "Vivid Homogeneous",
      "edemaIndex": 0.18,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.82
    },
    "molecularMarkers": "NF2 mutation or POLR2A mutations, EMA+, PR strongly positive",
    "histology": "Features of both meningothelial and fibrous subtypes; prominent concentric cellular whorls and psammoma bodies",
    "clinicalPresentation": "Headaches, motor weakness, seizures",
    "treatment": "Surgical resection (Simpson 1-2)",
    "prognosis": "Excellent"
  },
  {
    "id": "meningioma-g1-psammomatous",
    "name": "Psammomatous Meningioma, WHO Grade 1",
    "category": "Meningiomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign",
    "prevalence": "Common in thoracic spine and elderly females",
    "ageGroup": "Elderly Adults & Spinal (60-80 yrs)",
    "commonLocations": [
      "Thoracic Spine (intradural extramedullary)",
      "Olfactory Groove"
    ],
    "mriFeatures": {
      "t1": "Hypointense dural mass",
      "t2": "Markedly hypointense on T2/GRE/SWI due to dense extensive calcification (rock-hard tumor)",
      "flair": "Hypointense",
      "contrast": "Moderate to strong enhancement (attenuated by calcification)",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 175,
      "heterogeneity": 0.45,
      "contrastRimThickness": "Dense Calcified",
      "edemaIndex": 0.05,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.7
    },
    "molecularMarkers": "NF2 inactivation, EMA+, PR+",
    "histology": "Massive abundance of lamellated, calcified psammoma bodies replacing majority of tumor parenchyma",
    "clinicalPresentation": "Slow progressive thoracic myelopathy, spastic paraparesis, sensory level",
    "treatment": "Complete surgical resection",
    "prognosis": "Excellent; very low recurrence"
  },
  {
    "id": "meningioma-g1-secretory",
    "name": "Secretory Meningioma, WHO Grade 1",
    "category": "Meningiomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign",
    "prevalence": "~1-2% of meningiomas",
    "ageGroup": "Adults (Female predominance)",
    "commonLocations": [
      "Sphenoid Wing",
      "Skull Base",
      "Frontal Convexity"
    ],
    "mriFeatures": {
      "t1": "Isointense dural mass",
      "t2": "Hyperintense with dramatic, massive peritumoral vasogenic brain edema (edema out of proportion to size)",
      "flair": "Severe hyperintense white matter edema",
      "contrast": "Strong homogeneous enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 205,
      "heterogeneity": 0.4,
      "contrastRimThickness": "Avid + Severe Edema",
      "edemaIndex": 0.85,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.86
    },
    "molecularMarkers": "TRAF7 + KLF4 co-mutations (pathognomonic hallmark), elevated serum CEA, Cytokeratin+, CEA+",
    "histology": "Eosinophilic, PAS-positive pseudopsammoma bodies in intracytoplasmic lumina",
    "clinicalPresentation": "High ICP symptoms from severe edema, focal neurological signs",
    "treatment": "Surgical excision; preoperative steroids to control profound edema",
    "prognosis": "Favorable once resected"
  },
  {
    "id": "meningioma-g2-atypical",
    "name": "Atypical Meningioma, WHO Grade 2",
    "category": "Meningiomas",
    "whoGrade": "WHO Grade II",
    "gradeNum": 2,
    "malignancy": "Intermediate grade (higher recurrence risk)",
    "prevalence": "~15-20% of all meningiomas",
    "ageGroup": "Adults (Peak 50-70 yrs; slight Male predominance)",
    "commonLocations": [
      "Parasagittal / Falcine",
      "Convexity"
    ],
    "mriFeatures": {
      "t1": "Large, lobulated, mushrooming or irregular extra-axial mass with loss of clear CSF cleft",
      "t2": "Heterogeneous hyperintensity with prominent parenchymal brain edema and brain invasion signs",
      "flair": "Irregular hyperintense tumor-brain interface",
      "contrast": "Heterogeneous, intense enhancement with thick, irregular dural tail",
      "dwi": "Mild to moderate diffusion restriction in cellular foci"
    },
    "radiomicSignature": {
      "intensityMean": 198,
      "heterogeneity": 0.72,
      "contrastRimThickness": "Irregular / Nodular (20-60mm)",
      "edemaIndex": 0.75,
      "necrosisRatio": 0.15,
      "symmetryDeficit": 0.88
    },
    "molecularMarkers": "NF2 mutation, frequent chromosomal losses (1p, 14q, 22q), TERT promoter mutation (identifies high-risk), BAP1 loss",
    "histology": ">=4 mitoses per 10 HPF OR brain invasion OR >=3 of: spontaneous necrosis, sheeting, prominent nucleoli, high cellularity, small cell formation",
    "clinicalPresentation": "Headaches, rapid growth, focal seizures, focal deficits",
    "treatment": "Maximal safe resection (Simpson 1) + adjuvant Fractionated Radiotherapy (54-60 Gy)",
    "prognosis": "Moderate; 5-year recurrence rate ~30-40%"
  },
  {
    "id": "meningioma-g3-anaplastic",
    "name": "Anaplastic (Malignant) Meningioma, WHO Grade 3",
    "category": "Meningiomas",
    "whoGrade": "WHO Grade III",
    "gradeNum": 3,
    "malignancy": "High-grade malignant sarcoma-like",
    "prevalence": "~1-3% of all meningiomas",
    "ageGroup": "Adults (60-80 yrs)",
    "commonLocations": [
      "Convexity",
      "Parasagittal"
    ],
    "mriFeatures": {
      "t1": "Large, aggressive, infiltrative mass destructively invading skull bone, scalp, and brain parenchyma",
      "t2": "Heterogeneously hyperintense with massive vasogenic edema and internal necrosis",
      "flair": "Extensive infiltrative hyperintensity",
      "contrast": "Irregular, rim-like, nodular heterogeneous enhancement",
      "dwi": "Prominent diffusion restriction in high-grade cellular areas"
    },
    "radiomicSignature": {
      "intensityMean": 180,
      "heterogeneity": 0.9,
      "contrastRimThickness": "Destructive Infiltrative",
      "edemaIndex": 0.85,
      "necrosisRatio": 0.4,
      "symmetryDeficit": 0.95
    },
    "molecularMarkers": "TERT promoter mutation, homozygous CDKN2A/B deletion (establish Grade 3 regardless of histology), BAP1 mutation",
    "histology": "Frank malignant cytology resembling carcinoma, melanoma, or high-grade sarcoma; >=20 mitoses per 10 HPF, geographic necrosis",
    "clinicalPresentation": "Rapidly enlarging palpable scalp/skull mass, seizures, severe focal deficits",
    "treatment": "Maximal surgical resection + adjuvant high-dose fractionated Radiotherapy (60 Gy) + clinical trials",
    "prognosis": "Poor; median overall survival <3-5 years; high risk of distant metastases"
  },
  {
    "id": "hemangioblastoma",
    "name": "Hemangioblastoma",
    "category": "Mesenchymal Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign, highly vascular",
    "prevalence": "~2% of all intracranial tumors; ~10% of posterior fossa tumors; ~25% in VHL",
    "ageGroup": "Young to Middle-aged Adults (20-45 yrs)",
    "commonLocations": [
      "Cerebellar Hemisphere (>80%)",
      "Spinal Cord",
      "Brainstem (Area Postrema)",
      "Retina"
    ],
    "mriFeatures": {
      "t1": "Cyst with an isointense/hypointense fluid, small peripheral mural nodule abutting pial surface",
      "t2": "Hyperintense cyst with isointense/hyperintense mural nodule and prominent serpentine flow voids",
      "flair": "Bright cyst fluid with surrounding cerebellar edema",
      "contrast": "Intense, vivid, rapid homogeneous enhancement of the solid mural nodule; cyst wall does NOT enhance",
      "dwi": "No restriction in nodule (distinguishes from metastasis or medulloblastoma)"
    },
    "radiomicSignature": {
      "intensityMean": 220,
      "heterogeneity": 0.6,
      "contrastRimThickness": "Hypervascular Mural Nodule + Flow Voids (5-20mm)",
      "edemaIndex": 0.35,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.78
    },
    "molecularMarkers": "VHL gene mutation (3p25.3 inactivation), elevated HIF-1alpha, VEGF, and Erythropoietin (EPO)",
    "histology": "Abundant capillary network lined by endothelial cells surrounded by large lipid-rich stromal vacuolated cells; Inhibin-A+, CD34+",
    "clinicalPresentation": "Cerebellar ataxia, morning headaches, polycythemia/erythrocytosis (secondary to ectopic EPO secretion)",
    "treatment": "Complete surgical excision of the mural nodule (curative; cyst collapses); Belzutifan (HIF-2a inhibitor) for VHL",
    "prognosis": "Excellent; >95% cure rate with complete nodule resection"
  },
  {
    "id": "sft-hpc",
    "name": "Solitary Fibrous Tumor (formerly Hemangiopericytoma)",
    "category": "Mesenchymal Tumors",
    "whoGrade": "WHO Grade I, II, or III",
    "gradeNum": 3,
    "malignancy": "Malignant propensity / High local recurrence",
    "prevalence": "~1% of meningeal tumors",
    "ageGroup": "Adults (Peak 40-60 yrs)",
    "commonLocations": [
      "Parasagittal / Dural Sinuses",
      "Occipital / Tentorial Dural Surface",
      "Spine"
    ],
    "mriFeatures": {
      "t1": "Lobulated, hypervascular extra-axial dural mass, isointense, prominent flow voids, skull erosion",
      "t2": "Heterogeneous yin-yang pattern (hypointense collagenous mixed with hyperintense cellular/vascular areas)",
      "flair": "Hyperintense with moderate vasogenic brain edema",
      "contrast": "Intense, heterogeneous, prolonged contrast blush with thick dural attachment",
      "dwi": "Restricted diffusion in high-grade cellular foci"
    },
    "radiomicSignature": {
      "intensityMean": 200,
      "heterogeneity": 0.8,
      "contrastRimThickness": "Hypervascular Lobulated Yin-Yang",
      "edemaIndex": 0.6,
      "necrosisRatio": 0.2,
      "symmetryDeficit": 0.86
    },
    "molecularMarkers": "NAB2-STAT6 gene fusion pathognomonic hallmark; Strong nuclear STAT6 immunoreactivity; CD34 positive",
    "histology": "Patternless architecture of spindle cells surrounding branched staghorn hemangiopericytomatous sinusoidal blood vessels",
    "clinicalPresentation": "Headaches, intracranial hemorrhage, local bone destruction",
    "treatment": "Preoperative embolization + Radical surgical resection + adjuvant Radiotherapy",
    "prognosis": "Guarded; notorious for late recurrence (>10-15 yrs) and distant hematogenous metastases (bone/liver/lungs in ~25%)"
  },
  {
    "id": "chordoma",
    "name": "Chordoma (Clival / Skull Base)",
    "category": "Mesenchymal Tumors",
    "whoGrade": "WHO Grade II",
    "gradeNum": 2,
    "malignancy": "Locally aggressive and destructive malignant bone tumor",
    "prevalence": "~1-4% of malignant bone tumors; ~40% at skull base",
    "ageGroup": "Adults (Peak 40-60 yrs)",
    "commonLocations": [
      "Spheno-occipital Clivus (skull base)",
      "Sacrococcygeal Region",
      "Vertebral Bodies"
    ],
    "mriFeatures": {
      "t1": "Destructive midline skull base mass eroding clivus, hypointense with hemorrhage/calcification",
      "t2": "Extremely, brilliantly T2-hyperintense (light-bulb bright due to physaliferous mucinous matrix)",
      "flair": "Hyperintense clival mass engulfing basilar artery and compressing pons",
      "contrast": "Prominent, classic honeycomb / heterogeneous contrast enhancement",
      "dwi": "Moderate restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 195,
      "heterogeneity": 0.75,
      "contrastRimThickness": "Honeycomb T2-Bright Destructive",
      "edemaIndex": 0.45,
      "necrosisRatio": 0.15,
      "symmetryDeficit": 0.84
    },
    "molecularMarkers": "Brachyury (TBXT gene) positive (definitive diagnostic marker), Cytokeratin+, EMA+, S100+",
    "histology": "Lobules and cords of classic large physaliferous cells (bubbly, vacuolated cytoplasm) floating in pale basophilic mucinous matrix",
    "clinicalPresentation": "Diplopia (CN VI Abducens nerve palsy from Dorello canal compression), headache, retro-orbital pain, dysphagia",
    "treatment": "Endoscopic Endonasal Skull Base Resection + High-dose Particle/Proton Beam Radiotherapy (70-74 CGE)",
    "prognosis": "Recurrent; 5-year survival ~65-75%, 10-year ~40-50%"
  },
  {
    "id": "lch-cns",
    "name": "Langerhans Cell Histiocytosis (LCH) of the CNS",
    "category": "Histiocytic Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Clonal Histiocytic Neoplasm",
    "prevalence": "Most common histiocytic disorder in children",
    "ageGroup": "Children (2-10 yrs)",
    "commonLocations": [
      "Pituitary Stalk (Infundibulum) / Hypothalamus",
      "Calvarium (Eosinophilic Granuloma)"
    ],
    "mriFeatures": {
      "t1": "Thickened, expansile pituitary stalk (>3-4 mm) with loss of normal posterior pituitary T1 bright spot",
      "t2": "Hyperintense infundibular mass",
      "flair": "Perilesional hypothalamic hyperintensity",
      "contrast": "Intense, uniform contrast enhancement of the thickened stalk",
      "dwi": "Mild restriction"
    },
    "radiomicSignature": {
      "intensityMean": 198,
      "heterogeneity": 0.4,
      "contrastRimThickness": "Thickened Stalk Enhancing",
      "edemaIndex": 0.2,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.65
    },
    "molecularMarkers": "BRAF V600E mutation (~55-60%), MAP2K1 mutations, CD1a positive, Langerin (CD207) positive, S100 positive",
    "histology": "Clonal dendritic Langerhans histiocytes with grooved coffee-bean nuclei mixed with eosinophils and lymphocytes; Birbeck granules",
    "clinicalPresentation": "Diabetes Insipidus (central DI: polyuria/polydipsia, >90%), anterior pituitary deficiency, growth failure, skull osteolytic mass",
    "treatment": "Systemic chemotherapy (Vinblastine + Prednisone) or targeted BRAF inhibitor (Dabrafenib); curettage for solitary bone lesions",
    "prognosis": "Good with therapy; endocrine deficits often permanent"
  },
  {
    "id": "germinoma",
    "name": "CNS Germinoma",
    "category": "Germ Cell Tumors",
    "whoGrade": "Malignant Germ Cell Neoplasm",
    "gradeNum": 4,
    "malignancy": "Malignant (exquisitely radiosensitive/curable)",
    "prevalence": "Most common intracranial germ cell tumor (~65-70%)",
    "ageGroup": "Children & Young Adults (Peak 10-21 yrs; Male > Female 3:1)",
    "commonLocations": [
      "Pineal Gland (males)",
      "Suprasellar Region (females)",
      "Bifocal (Pineal + Suprasellar synchronous)"
    ],
    "mriFeatures": {
      "t1": "Solid, well-circumscribed, isointense to slightly hyperintense mass",
      "t2": "Isointense to hypointense (high cellularity with low free water)",
      "flair": "Homogeneously hyperintense with loss of posterior pituitary bright spot in suprasellar lesions",
      "contrast": "Intense, uniform, homogeneous contrast enhancement",
      "dwi": "Marked restricted diffusion (hyperintense DWI, low ADC)"
    },
    "radiomicSignature": {
      "intensityMean": 205,
      "heterogeneity": 0.35,
      "contrastRimThickness": "Homogeneous Solid Avid (10-30mm)",
      "edemaIndex": 0.25,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.76
    },
    "molecularMarkers": "KIT (CD117) positive, OCT3/4 positive, SALL4 positive, elevated CSF beta-hCG (mild <50 IU/L), normal CSF AFP",
    "histology": "Two-cell pattern: large uniform polygonal germ cells with clear cytoplasm and large nucleoli, interspersed with mature T-lymphocytes",
    "clinicalPresentation": "Pineal: Parinaud syndrome, hydrocephalus. Suprasellar: Diabetes insipidus (polydipsia, polyuria), delayed puberty, visual deficits",
    "treatment": "Low-dose Chemotherapy (Carboplatin/Etoposide) + Reduced-dose Whole Ventricular / Craniospinal Irradiation (exquisitely radiosensitive)",
    "prognosis": "Outstanding; >90-95% long-term cure rate"
  },
  {
    "id": "teratoma-mature",
    "name": "Mature Teratoma",
    "category": "Germ Cell Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign non-germinomatous germ cell tumor",
    "prevalence": "~15-20% of intracranial GCTs",
    "ageGroup": "Infants, Children, Young Adults",
    "commonLocations": [
      "Pineal Region",
      "Suprasellar Cistern"
    ],
    "mriFeatures": {
      "t1": "Markedly heterogeneous mass with high T1 fat content (hyperintense), fluid, and calcifications",
      "t2": "Extremely heterogeneous multilocular cysts, fat, bone, teeth",
      "flair": "Heterogeneous multi-intensity lesion",
      "contrast": "Variable, patchy enhancement of solid non-fat components",
      "dwi": "No restriction in cysts; susceptibility artifact from calcification"
    },
    "radiomicSignature": {
      "intensityMean": 170,
      "heterogeneity": 0.95,
      "contrastRimThickness": "Multi-tissue Heterogeneous",
      "edemaIndex": 0.1,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.7
    },
    "molecularMarkers": "Negative serum/CSF tumor markers (normal AFP and beta-hCG)",
    "histology": "Fully differentiated mature tissues derived from all three germ layers (ectoderm, mesoderm, endoderm)",
    "clinicalPresentation": "Mass effect, congenital hydrocephalus in neonates",
    "treatment": "Complete surgical resection is curative (radioresistant and chemoresistant)",
    "prognosis": "Excellent after complete resection (>90% 10-yr survival)"
  },
  {
    "id": "yolk-sac-tumor",
    "name": "Yolk Sac Tumor (Endodermal Sinus Tumor)",
    "category": "Germ Cell Tumors",
    "whoGrade": "Malignant NGGCT",
    "gradeNum": 4,
    "malignancy": "Highly malignant non-germinomatous GCT",
    "prevalence": "~5% of intracranial GCTs",
    "ageGroup": "Children & Young Adults (<25 yrs; Male predominance)",
    "commonLocations": [
      "Pineal Region",
      "Suprasellar"
    ],
    "mriFeatures": {
      "t1": "Heterogeneous mass with necrosis and hemorrhage",
      "t2": "Heterogeneously hyperintense with prominent tumor vascularity",
      "flair": "Perilesional edema and hydrocephalus",
      "contrast": "Strong, irregular, heterogeneous enhancement",
      "dwi": "Restricted diffusion in cellular portions"
    },
    "radiomicSignature": {
      "intensityMean": 185,
      "heterogeneity": 0.88,
      "contrastRimThickness": "Irregular Necrotic Hypervascular",
      "edemaIndex": 0.6,
      "necrosisRatio": 0.3,
      "symmetryDeficit": 0.88
    },
    "molecularMarkers": "Markedly elevated Alpha-Fetoprotein (AFP) in serum and CSF (>1000 ng/mL, diagnostic); Glypican-3 positive, SALL4 positive",
    "histology": "Reticular/microcystic pattern with classic Schiller-Duval bodies (papillary projections with central vessel mimicking glomerulus)",
    "clinicalPresentation": "Acute Parinaud syndrome, rapidly increasing ICP",
    "treatment": "Platinum-based intensive Chemotherapy (PEB / JEB regimen) + Craniospinal Irradiation +/- second-look surgery",
    "prognosis": "Guarded; ~60-75% 5-year survival"
  },
  {
    "id": "pituitary-prolactinoma",
    "name": "Pituitary Neuroendocrine Tumor (PitNET) / Prolactinoma",
    "category": "Sellar and Parasellar Tumors",
    "whoGrade": "Benign PitNET (WHO Grade 1 equivalent)",
    "gradeNum": 1,
    "malignancy": "Benign endocrine neoplasm",
    "prevalence": "Most common functioning pituitary adenoma (~40% of PitNETs)",
    "ageGroup": "Young Females (20-40 yrs) & Older Males (>50 yrs)",
    "commonLocations": [
      "Intrasellar / Sella Turcica with suprasellar expansion into chiasmatic cistern"
    ],
    "mriFeatures": {
      "t1": "Microadenoma (<10mm): focal hypointense lesion on dynamic contrast. Macroadenoma: expansile snowman mass expanding sella with suprasellar extension",
      "t2": "Isointense to hyperintense",
      "flair": "Isointense with optic chiasm displacement (optic chiasm compression)",
      "contrast": "Enhances more slowly than normal intense pituitary gland on dynamic contrast; macroadenomas show avid enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 185,
      "heterogeneity": 0.4,
      "contrastRimThickness": "Figure-8 / Snowman Suprasellar (5-35mm)",
      "edemaIndex": 0.05,
      "necrosisRatio": 0.02,
      "symmetryDeficit": 0.72
    },
    "molecularMarkers": "PIT1 lineage transcription factor, Prolactin positive on IHC, serum Prolactin markedly elevated (>200 ng/mL)",
    "histology": "Densely or sparsely granulated lactotroph cells with uniform round nuclei",
    "clinicalPresentation": "Females: Amenorrhea-galactorrhea syndrome, infertility. Males: Bitemporal hemianopsia (optic chiasm compression), hypogonadism, headache",
    "treatment": "Medical therapy with Dopamine Agonists (Cabergoline / Bromocriptine) is FIRST-LINE (induces tumor shrinkage in >85%); Transsphenoidal surgery if refractory",
    "prognosis": "Excellent with dopamine agonist therapy"
  },
  {
    "id": "pituitary-nonfunctioning",
    "name": "Non-Functioning Pituitary Adenoma (Null-Cell / Gonadotroph PitNET)",
    "category": "Sellar and Parasellar Tumors",
    "whoGrade": "Benign PitNET",
    "gradeNum": 1,
    "malignancy": "Benign endocrine neoplasm",
    "prevalence": "~30% of all pituitary adenomas",
    "ageGroup": "Adults (Peak 50-70 yrs)",
    "commonLocations": [
      "Sella Turcica extending into Suprasellar and Sphenoid Sinus"
    ],
    "mriFeatures": {
      "t1": "Large sellar-suprasellar macroadenoma (>2-3 cm), snowman-shaped waist at diaphragma sellae",
      "t2": "Heterogeneously isointense with cystic changes",
      "flair": "Elevation of optic chiasm (classic compression)",
      "contrast": "Heterogeneous, robust contrast enhancement",
      "dwi": "No diffusion restriction"
    },
    "radiomicSignature": {
      "intensityMean": 180,
      "heterogeneity": 0.45,
      "contrastRimThickness": "Snowman Suprasellar (20-40mm)",
      "edemaIndex": 0.08,
      "necrosisRatio": 0.05,
      "symmetryDeficit": 0.75
    },
    "molecularMarkers": "SF1 positive (Gonadotroph) or TPIT/PIT1 negative (Null-cell), LH/FSH beta subunits variable",
    "histology": "Sheets, cords, and nests of chromophobic cells with low mitotic index",
    "clinicalPresentation": "Gradual bitemporal hemianopsia (visual field deficit from chiasm compression), hypopituitarism (fatigue, cold intolerance), headache",
    "treatment": "Endoscopic Endonasal Transsphenoidal Surgery (EETS) for optic decompression; Stereotactic Radiosurgery for cavernous sinus residual",
    "prognosis": "Good; >90% visual field recovery if operated promptly"
  },
  {
    "id": "craniopharyngioma-adeno",
    "name": "Adamantinomatous Craniopharyngioma (aCP)",
    "category": "Sellar and Parasellar Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign but locally destructive and invasive",
    "prevalence": "Most common non-glial pediatric brain tumor",
    "ageGroup": "Bimodal: Children (5-14 yrs) and Older Adults (50-75 yrs)",
    "commonLocations": [
      "Suprasellar Cistern / Sellar and Third Ventricle"
    ],
    "mriFeatures": {
      "t1": "Lobulated complex cystic-solid mass, cysts are classic motor oil hyperintense on T1 (cholesterol fluid)",
      "t2": "Markedly hyperintense cyst fluid, mixed solid components with peripheral nodular calcification (>90%)",
      "flair": "Prominent optic chiasm displacement, peritumoral hypothalamic edema",
      "contrast": "Vivid rim enhancement of cyst walls and strong enhancement of solid components",
      "dwi": "Facilitated diffusion in cyst fluid"
    },
    "radiomicSignature": {
      "intensityMean": 215,
      "heterogeneity": 0.85,
      "contrastRimThickness": "Multicystic Enhancing + Calcification (20-50mm)",
      "edemaIndex": 0.4,
      "necrosisRatio": 0.3,
      "symmetryDeficit": 0.8
    },
    "molecularMarkers": "CTNNB1 (beta-catenin) exon 3 mutations (pathognomonic), nuclear beta-catenin accumulation, LEF1 positive",
    "histology": "Adamantinomatous epithelium: palisading basal epithelial layer, stellate reticulum, anucleated squames (wet keratin which calcifies)",
    "clinicalPresentation": "Triad of: Visual disturbance (bitemporal hemianopsia), Endocrine deficiency (growth failure, DI, panhypopituitarism), Hydrocephalus",
    "treatment": "Endoscopic endonasal or transcranial resection + adjuvant Stereotactic Radiotherapy (proton/photon); intracystic interferon/bleomycin",
    "prognosis": "High survival (>85-90% at 10 yrs), but significant morbidity (hypothalamic obesity, hypopituitarism, visual deficit)"
  },
  {
    "id": "craniopharyngioma-papillary",
    "name": "Papillary Craniopharyngioma (pCP)",
    "category": "Sellar and Parasellar Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign",
    "prevalence": "~10-15% of craniopharyngiomas",
    "ageGroup": "Adults almost exclusively (40-60 yrs)",
    "commonLocations": [
      "Suprasellar / Floor of Third Ventricle"
    ],
    "mriFeatures": {
      "t1": "Predominantly SOLID suprasellar mass, isointense to hypointense, rarely calcified (<15%)",
      "t2": "Heterogeneously isointense to hyperintense",
      "flair": "Hyperintense with hypothalamic displacement",
      "contrast": "Strong, homogeneous to heterogeneous vivid contrast enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 198,
      "heterogeneity": 0.5,
      "contrastRimThickness": "Solid Suprasellar Avid (15-35mm)",
      "edemaIndex": 0.25,
      "necrosisRatio": 0.05,
      "symmetryDeficit": 0.72
    },
    "molecularMarkers": "BRAF V600E mutation (>95% of cases; definitive molecular signature), absence of CTNNB1 mutation",
    "histology": "Sheets of well-differentiated non-keratinizing squamous epithelium forming pseudopapillae around fibrovascular cores; absence of wet keratin",
    "clinicalPresentation": "Visual field impairment, panhypopituitarism, cognitive/hypothalamic dysfunction",
    "treatment": "Targeted BRAF/MEK inhibitors (Dabrafenib + Trametinib) achieve dramatic tumor shrinkage (>80-90% response); surgical resection",
    "prognosis": "Excellent with targeted BRAF inhibitor therapy and surgery"
  },
  {
    "id": "raths-cleft-cyst",
    "name": "Rathke Cleft Cyst (RCC)",
    "category": "Sellar and Parasellar Tumors",
    "whoGrade": "Benign Non-Neoplastic Cyst",
    "gradeNum": 1,
    "malignancy": "Benign cyst",
    "prevalence": "Common incidental sellar finding (~10-15% of autopsies)",
    "ageGroup": "Adults (30-50 yrs; Female > Male)",
    "commonLocations": [
      "Intrasellar between anterior and posterior pituitary lobes with suprasellar extension"
    ],
    "mriFeatures": {
      "t1": "Well-circumscribed non-calcified sellar cyst; variable T1 (hypointense if serous, hyperintense if mucoid)",
      "t2": "Hyperintense or hypointense; pathognomonic intracystic non-enhancing waxy nodule in ~75%",
      "flair": "Variable intensity",
      "contrast": "NO internal enhancement (thin rim of displaced normal pituitary tissue may enhance)",
      "dwi": "No restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 155,
      "heterogeneity": 0.2,
      "contrastRimThickness": "None / Thin Rim (5-20mm)",
      "edemaIndex": 0.0,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.45
    },
    "molecularMarkers": "Cytokeratin positive, non-neoplastic cyst lining",
    "histology": "Single layer of ciliated cuboidal or columnar epithelium with interspersed goblet cells containing mucinous fluid",
    "clinicalPresentation": "Asymptomatic; if large (>15mm): headaches, visual disturbance, mild hyperprolactinemia (stalk effect)",
    "treatment": "Observation if asymptomatic; transsphenoidal simple drainage and cyst wall fenestration if symptomatic mass effect",
    "prognosis": "Excellent"
  },
  {
    "id": "pcnsl-dlbcl",
    "name": "Primary CNS Lymphoma (PCNSL) - DLBCL",
    "category": "Lymphomas of the CNS",
    "whoGrade": "Malignant Hematopoietic Neoplasm",
    "gradeNum": 4,
    "malignancy": "High-grade malignant",
    "prevalence": "~4-6% of all primary brain tumors; increased in immunocompromised (HIV/AIDS) and elderly",
    "ageGroup": "Elderly (60-80 yrs) / Immunocompromised",
    "commonLocations": [
      "Periventricular White Matter",
      "Corpus Callosum",
      "Basal Ganglia / Thalami",
      "Deep Periventricular Structures"
    ],
    "mriFeatures": {
      "t1": "Periventricular or subependymal mass, isointense to hypointense, abutting ependymal surface",
      "t2": "Characteristically isointense to hypointense to gray matter (due to extreme hypercellularity)",
      "flair": "Moderate vasogenic edema, subependymal tracking",
      "contrast": "Classic intense, dense, homogeneous, cotton-ball or open-ring (in AIDS) enhancement (butterfly corpus callosum lesion)",
      "dwi": "Marked, profound restricted diffusion (hyperintense on DWI with very low ADC values, lower than GBM)"
    },
    "radiomicSignature": {
      "intensityMean": 210,
      "heterogeneity": 0.4,
      "contrastRimThickness": "Dense Homogeneous Cotton-Ball (15-40mm)",
      "edemaIndex": 0.5,
      "necrosisRatio": 0.05,
      "symmetryDeficit": 0.9
    },
    "molecularMarkers": "MYD88 L265P mutation (>70-80%), CD79B mutations, BCL6 rearrangement, CD20 strongly positive, CD19+, PAX5+, EBV in HIV",
    "histology": "Diffuse large B-cell lymphoma (DLBCL): dense sheets of large transformed lymphoid cells with angiocentric perivascular cuffing",
    "clinicalPresentation": "Rapid cognitive decline, subacute dementia, ataxia, focal deficit. Steroids cause rapid vanishing tumor response",
    "treatment": "CRITICAL: Avoid steroids before biopsy! High-dose Methotrexate (HD-MTX)-based chemo (MATRix regimen) + ASCT. Surgical resection NOT indicated",
    "prognosis": "Favorable in younger patients with MTX-based chemo; 5-year survival ~50-60%"
  },
  {
    "id": "met-lung-adeno",
    "name": "Brain Metastasis - Lung Adenocarcinoma",
    "category": "Metastatic Brain Tumors",
    "whoGrade": "Malignant Secondary Carcinoma",
    "gradeNum": 4,
    "malignancy": "High-grade secondary malignancy",
    "prevalence": "Most common source of brain metastases (~40-50%)",
    "ageGroup": "Adults (50-75 yrs)",
    "commonLocations": [
      "Gray-White Matter Junction",
      "Watershed Arterial Territories (MCA-PCA, ACA-MCA)",
      "Cerebellar Hemispheres"
    ],
    "mriFeatures": {
      "t1": "Well-demarcated round mass at gray-white junction, hypointense with central necrosis",
      "t2": "Isointense to hyperintense with disproportionate, extensive finger-like vasogenic edema",
      "flair": "Massive FLAIR hyperintense peritumoral edema surrounding relatively small enhancing core",
      "contrast": "Intense, thin, smooth ring-enhancement or solid nodular enhancement; often multiple lesions",
      "dwi": "Elevated/facilitated diffusion in central necrotic core (differentiates from brain abscess which restricts)"
    },
    "radiomicSignature": {
      "intensityMean": 190,
      "heterogeneity": 0.82,
      "contrastRimThickness": "Thin Smooth Ring / Disproportionate Edema (5-30mm)",
      "edemaIndex": 0.92,
      "necrosisRatio": 0.35,
      "symmetryDeficit": 0.9
    },
    "molecularMarkers": "TTF-1 positive, Napsin-A positive, CK7+, CK20-, EGFR mutations, ALK rearrangements, ROS1, KRAS G12C, PD-L1",
    "histology": "Metastatic adenocarcinoma forming glandular and papillary structures with mucin production and high mitotic index",
    "clinicalPresentation": "New onset headaches, focal seizures, focal weakness, cognitive slowing, stroke-like symptoms",
    "treatment": "Stereotactic Radiosurgery (SRS for 1-10+ lesions) +/- Surgical resection for single large lesion (>3 cm); Targeted TKIs (Osimertinib, Alectinib)",
    "prognosis": "Significantly improved with CNS-active targeted therapies; median OS >2-4+ years in oncogene-driven NSCLC"
  },
  {
    "id": "met-breast-her2",
    "name": "Brain Metastasis - Breast Carcinoma (HER2+ / Triple Negative)",
    "category": "Metastatic Brain Tumors",
    "whoGrade": "Malignant Secondary Carcinoma",
    "gradeNum": 4,
    "malignancy": "High-grade secondary malignancy",
    "prevalence": "Second most common source of brain metastases (~15-25%)",
    "ageGroup": "Females (40-65 yrs)",
    "commonLocations": [
      "Cerebellar Hemispheres (posterior fossa predilection)",
      "Cerebral Hemispheres",
      "Leptomeninges"
    ],
    "mriFeatures": {
      "t1": "Well-circumscribed nodular or cystic-solid mass at corticomedullary junction",
      "t2": "Heterogeneously hyperintense with massive surrounding white matter edema",
      "flair": "Extensive vasogenic edema",
      "contrast": "Intense, robust solid or ring enhancement; leptomeningeal enhancement in ~15%",
      "dwi": "Variable diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 195,
      "heterogeneity": 0.8,
      "contrastRimThickness": "Robust Solid / Ring (10-35mm)",
      "edemaIndex": 0.88,
      "necrosisRatio": 0.28,
      "symmetryDeficit": 0.88
    },
    "molecularMarkers": "HER2/neu (ERBB2) amplified, Estrogen Receptor (ER), Progesterone Receptor (PR), GATA3 positive, Mammaglobin positive",
    "histology": "Infiltrating ductal carcinoma nests with prominent pleomorphism and necrosis",
    "clinicalPresentation": "Ataxia, nausea, morning headache, focal deficits in a patient with history of breast cancer",
    "treatment": "Stereotactic Radiosurgery (SRS) + CNS-penetrating HER2-targeted therapy (Tucatinib + Trastuzumab + Capecitabine / T-DXd)",
    "prognosis": "Favorable in HER2+ subgroup (median OS >3 years with tucatinib/T-DXd); poorer in Triple Negative"
  },
  {
    "id": "met-melanoma",
    "name": "Brain Metastasis - Malignant Melanoma",
    "category": "Metastatic Brain Tumors",
    "whoGrade": "Malignant Secondary Melanocytic Neoplasm",
    "gradeNum": 4,
    "malignancy": "Highly aggressive secondary malignancy with spontaneous hemorrhage risk",
    "prevalence": "Highest propensity of any cancer to metastasize to brain (~50-75%)",
    "ageGroup": "Adults (35-70 yrs)",
    "commonLocations": [
      "Cortex and Gray-White Junction",
      "Multiple intracranial locations simultaneously"
    ],
    "mriFeatures": {
      "t1": "Classic high T1 intrinsic hyperintensity (T1-bright) due to melanin pigment and frequent hemorrhage",
      "t2": "Characteristically T2-hypointense (T2-dark) due to paramagnetic melanin and hemosiderin",
      "flair": "Marked surrounding vasogenic edema",
      "contrast": "Avid, intense enhancement of non-hemorrhagic components",
      "dwi": "Variable due to susceptibility artifact"
    },
    "radiomicSignature": {
      "intensityMean": 225,
      "heterogeneity": 0.9,
      "contrastRimThickness": "Intrinsically T1-Bright / Hemorrhagic (5-25mm)",
      "edemaIndex": 0.85,
      "necrosisRatio": 0.4,
      "symmetryDeficit": 0.92
    },
    "molecularMarkers": "BRAF V600E / V600K mutation (~50%), NRAS mutation, S100 positive, SOX10 positive, HMB-45 positive, Melan-A positive",
    "histology": "High-grade pleomorphic cells containing brown intracytoplasmic melanin granules with brisk mitoses and prominent hemorrhage",
    "clinicalPresentation": "Acute neurological deficit / apoplexy from intratumoral bleeding, seizures, progressive headaches",
    "treatment": "Combination Immunotherapy (Ipilimumab + Nivolumab - >55% intracranial response rate) +/- SRS; BRAF/MEK inhibitors",
    "prognosis": "Dramatically improved with dual immunotherapy (5-year survival >50% in asymptomatic brain mets)"
  },
  {
    "id": "met-rcc",
    "name": "Brain Metastasis - Renal Cell Carcinoma (Clear Cell RCC)",
    "category": "Metastatic Brain Tumors",
    "whoGrade": "Malignant Secondary Carcinoma",
    "gradeNum": 4,
    "malignancy": "Highly vascular secondary malignancy",
    "prevalence": "~10% of brain metastases",
    "ageGroup": "Adults (50-70 yrs)",
    "commonLocations": [
      "Cerebral and Cerebellar Hemispheres"
    ],
    "mriFeatures": {
      "t1": "Iso- to hypointense, hypervascular mass with internal hemorrhage",
      "t2": "Heterogeneously hyperintense with internal flow voids and hemosiderin deposition",
      "flair": "Prominent vasogenic edema",
      "contrast": "Intense, rapid, vivid, homogeneous to heterogeneous enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 215,
      "heterogeneity": 0.78,
      "contrastRimThickness": "Hypervascular Vivid Flow Voids (10-30mm)",
      "edemaIndex": 0.8,
      "necrosisRatio": 0.2,
      "symmetryDeficit": 0.86
    },
    "molecularMarkers": "PAX8 positive, Carbonic Anhydrase IX (CAIX) positive, CD10+, VHL gene loss",
    "histology": "Nests of clear cells with abundant glycogen and lipids surrounded by a prominent sinusoidal capillary network",
    "clinicalPresentation": "Seizures, focal motor weakness, intratumoral hemorrhage",
    "treatment": "Stereotactic Radiosurgery (SRS is preferred over WBRT due to radioresistance) + VEGF-TKIs / Immunotherapy",
    "prognosis": "Median overall survival ~15-24 months with SRS and targeted therapy"
  },
  {
    "id": "met-colorectal",
    "name": "Brain Metastasis - Colorectal Adenocarcinoma",
    "category": "Metastatic Brain Tumors",
    "whoGrade": "Malignant Secondary Carcinoma",
    "gradeNum": 4,
    "malignancy": "Malignant secondary carcinoma",
    "prevalence": "~5-8% of brain metastases",
    "ageGroup": "Older Adults (55-75 yrs)",
    "commonLocations": [
      "Posterior Fossa / Cerebellum (higher predilection for cerebellar hemisphere)"
    ],
    "mriFeatures": {
      "t1": "Hypointense solitary or multiple cerebellar/cerebral mass with central necrosis",
      "t2": "Heterogeneously hyperintense with dense peripheral rim",
      "flair": "Severe surrounding edema causing 4th ventricle compression",
      "contrast": "Thick, irregular ring-enhancement; often solitary large cerebellar lesion",
      "dwi": "Facilitated central ADC"
    },
    "radiomicSignature": {
      "intensityMean": 182,
      "heterogeneity": 0.84,
      "contrastRimThickness": "Thick Ring / Posterior Fossa (15-40mm)",
      "edemaIndex": 0.88,
      "necrosisRatio": 0.4,
      "symmetryDeficit": 0.88
    },
    "molecularMarkers": "CDX2 positive, CK20 positive, CK7 negative, KRAS/NRAS/BRAF mutations, MSI-H status",
    "histology": "Tall columnar epithelial cells forming irregular glands with dirty necrosis (luminal apoptotic debris)",
    "clinicalPresentation": "Ataxia, vertigo, hydrocephalus, increased ICP from posterior fossa mass effect",
    "treatment": "Surgical resection (especially for solitary cerebellar mass) followed by SRS + systemic chemo (FOLFIRI/FOLFOX)",
    "prognosis": "Median overall survival ~10-18 months"
  },
  {
    "id": "epidermoid-cyst",
    "name": "Intracranial Epidermoid Cyst (Beautiful Tumor)",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Benign Congenital Inclusion Cyst",
    "gradeNum": 1,
    "malignancy": "Benign congenital cyst",
    "prevalence": "~1-2% of all intracranial tumors; ~5-7% of CPA tumors",
    "ageGroup": "Adults (20-50 yrs)",
    "commonLocations": [
      "Cerebellopontine Angle (CPA) Cistern",
      "Parasellar / Prepontine Cistern",
      "Fourth Ventricle"
    ],
    "mriFeatures": {
      "t1": "Lobulated extra-axial mass with frond-like margins filling cisterns, isointense to CSF (hypointense)",
      "t2": "Hyperintense, identical or slightly brighter than CSF, creeping along subarachnoid spaces",
      "flair": "Heterogeneously hyperintense / incomplete suppression (crucial differentiator from arachnoid cyst)",
      "contrast": "NO internal enhancement (rare thin marginal peripheral rim)",
      "dwi": "PATHOGNOMONIC PROFOUND RESTRICTED DIFFUSION (bright hyperintense on DWI with low ADC; gold-standard diagnostic feature)"
    },
    "radiomicSignature": {
      "intensityMean": 145,
      "heterogeneity": 0.65,
      "contrastRimThickness": "None / Pathognomonic DWI Bright (15-45mm)",
      "edemaIndex": 0.02,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.82
    },
    "molecularMarkers": "Cytokeratin positive, non-neoplastic squamous lining",
    "histology": "Thin fibrous capsule lined by simple stratified squamous epithelium with abundant lamellated, desquamated keratin crystals",
    "clinicalPresentation": "Trigeminal neuralgia (tic douloureux, most common symptom), hemifacial spasm, hearing loss, recurrent aseptic meningitis",
    "treatment": "Microsurgical resection with meticulous dissection of cyst contents off cranial nerves and basilar vessels",
    "prognosis": "Excellent; slow growing; recurrence takes decades"
  },
  {
    "id": "arachnoid-cyst",
    "name": "Arachnoid Cyst",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Benign Congenital CSF Cyst",
    "gradeNum": 1,
    "malignancy": "Benign congenital non-neoplastic cyst",
    "prevalence": "~1% of all intracranial space-occupying lesions",
    "ageGroup": "All ages (Children & Adults; Incidental)",
    "commonLocations": [
      "Middle Cranial Fossa / Sylvian Fissure (>50%)",
      "Cerebellopontine Angle",
      "Supracellar Cistern",
      "Retrocerebellar Space"
    ],
    "mriFeatures": {
      "t1": "Sharply circumscribed extra-axial fluid collection, exactly isointense to CSF on all sequences",
      "t2": "Identical to CSF signal (homogeneously bright hyperintense)",
      "flair": "COMPLETE, 100% FLUID SUPPRESSION (turns completely black like ventricular CSF; key differentiator from epidermoid)",
      "contrast": "NO contrast enhancement whatsoever (neither cyst nor wall enhances)",
      "dwi": "NO RESTRICTION (completely black/hypointense on DWI, high ADC identical to CSF)"
    },
    "radiomicSignature": {
      "intensityMean": 100,
      "heterogeneity": 0.05,
      "contrastRimThickness": "None (0mm)",
      "edemaIndex": 0.0,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.65
    },
    "molecularMarkers": "Avascular arachnoid membrane",
    "histology": "Duplication of normal arachnoid membrane lined by flattened meningothelial arachnoid cells containing normal CSF",
    "clinicalPresentation": "Asymptomatic incidental finding in >90%; large lesions can cause localized calvarial scalloping, headache, seizures",
    "treatment": "No treatment / Reassurance for asymptomatic cysts; Endoscopic fenestration if symptomatic mass effect",
    "prognosis": "Benign normal life expectancy"
  },
  {
    "id": "dermoid-cyst",
    "name": "Intracranial Dermoid Cyst",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Benign Congenital Inclusion Cyst",
    "gradeNum": 1,
    "malignancy": "Benign congenital cyst with chemical rupture risk",
    "prevalence": "Rare (<0.5% of intracranial tumors)",
    "ageGroup": "Children and Young Adults (15-35 yrs)",
    "commonLocations": [
      "Parasellar / Subfrontal",
      "Posterior Fossa (Vermis / 4th ventricle)",
      "Midline"
    ],
    "mriFeatures": {
      "t1": "Midline extra-axial lesion, MARKEDLY T1-HYPERINTENSE (bright due to internal sebum and fatty cholesterol content)",
      "t2": "Heterogeneous T2 signal with chemical shift artifact",
      "flair": "Hyperintense; if ruptured: multiple bright fat droplets scattered throughout subarachnoid spaces (fat-fluid level)",
      "contrast": "No enhancement (or mild rim)",
      "dwi": "Variable restricted diffusion in viscous elements"
    },
    "radiomicSignature": {
      "intensityMean": 220,
      "heterogeneity": 0.85,
      "contrastRimThickness": "Intrinsic T1-Fat Bright (10-35mm)",
      "edemaIndex": 0.05,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.6
    },
    "molecularMarkers": "Cytokeratin+, dermal appendages",
    "histology": "Stratified squamous epithelium containing mature dermal elements: hair follicles, sebaceous glands, and sweat glands with thick oily sebum",
    "clinicalPresentation": "Headache, seizures; upon spontaneous rupture: severe acute chemical meningitis, coma, vasospasm",
    "treatment": "Surgical excision + high-dose corticosteroids if chemical arachnoiditis",
    "prognosis": "Excellent if unruptured"
  },
  {
    "id": "brain-abscess",
    "name": "Pyogenic Brain Abscess",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Infectious Lesion (Tumor Mimic)",
    "gradeNum": 1,
    "malignancy": "Infectious / Non-neoplastic",
    "prevalence": "Common infectious mass lesion mimicking high-grade brain tumor",
    "ageGroup": "All ages (Peak 30-50 yrs)",
    "commonLocations": [
      "Frontal Lobe",
      "Temporal Lobe (otogenic)",
      "Parietal Lobe",
      "Cerebellum"
    ],
    "mriFeatures": {
      "t1": "Hypointense central necrotic/pus cavity with isointense-to-hyperintense rim",
      "t2": "Central high T2 pus surrounded by classic hypointense dual-rim sign on T2/SWI (free radicals and collagen)",
      "flair": "Massive surrounding vasogenic brain edema",
      "contrast": "Smooth, thin, uniform ring-enhancement, thinner on medial ventricular side",
      "dwi": "INTENSE, PROFOUND RESTRICTED DIFFUSION IN CENTRAL PUS CAVITY (homogeneously bright on DWI, very low ADC; critical differentiator from necrotic GBM/metastasis)"
    },
    "radiomicSignature": {
      "intensityMean": 175,
      "heterogeneity": 0.7,
      "contrastRimThickness": "Smooth Uniform Ring + Dual-Rim Sign (10-35mm)",
      "edemaIndex": 0.9,
      "necrosisRatio": 0.5,
      "symmetryDeficit": 0.9
    },
    "molecularMarkers": "Bacterial/fungal culture positive (Streptococcus anginosus, S. aureus, Enterobacteriaceae), high CRP/ESR",
    "histology": "Central liquefactive necrosis (neutrophils and dead debris) surrounded by a vascularized collagenous capsule and outer gliosis",
    "clinicalPresentation": "Classic triad (<50%): Fever, headache, focal neurological deficit; history of dental infection, sinusitis, or otitis media",
    "treatment": "Urgent Stereotactic Aspiration/Burr hole evacuation + prolonged targeted IV Antibiotics (6-8 weeks)",
    "prognosis": "Curable with prompt drainage and antibiotics (>90% recovery)"
  },
  {
    "id": "tdl-demyelinating",
    "name": "Tumefactive Demyelinating Lesion (TDL)",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Inflammatory Demyelinating Disease (MS Variant)",
    "gradeNum": 1,
    "malignancy": "Inflammatory / Non-neoplastic",
    "prevalence": "Rare manifestation of Multiple Sclerosis (~1-3 per 1000 MS cases)",
    "ageGroup": "Young Adults (20-40 yrs; Female > Male)",
    "commonLocations": [
      "Centrum Semiovale / Frontal & Parietal White Matter"
    ],
    "mriFeatures": {
      "t1": "Large (>2 cm) solitary white matter lesion, hypointense, minimal mass effect relative to large lesion size",
      "t2": "Hyperintense with central isointense/hyperintense core",
      "flair": "Hyperintense white matter lesion",
      "contrast": "PATHOGNOMONIC OPEN-RING / INCOMPLETE HORSESHOE ENHANCEMENT (open side faces cerebral cortex / gray matter)",
      "dwi": "Leading edge shows restricted diffusion; central core has facilitated diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 168,
      "heterogeneity": 0.6,
      "contrastRimThickness": "Incomplete Open-Ring / Horseshoe (15-45mm)",
      "edemaIndex": 0.35,
      "necrosisRatio": 0.1,
      "symmetryDeficit": 0.75
    },
    "molecularMarkers": "CSF oligoclonal bands positive (>80%), elevated IgG index, Aquaporin-4 (NMO) negative, MOG-IgG negative",
    "histology": "Loss of myelin with relative preservation of axons, abundant foamy lipid-laden macrophages, perivascular lymphocytes, Creutzfeldt-Peters cells",
    "clinicalPresentation": "Subacute onset of hemiparesis, dysphasia, sensory loss, visual disturbance, often mistaken for malignant glioma",
    "treatment": "High-dose IV Methylprednisolone (1000 mg daily for 5 days); Plasma Exchange (PLEX) if steroid-resistant; DMT for MS",
    "prognosis": "Favorable; rapid radiological and clinical improvement with corticosteroids"
  },
  {
    "id": "radiation-necrosis",
    "name": "Cerebral Radiation Necrosis",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Treatment-Induced Complication",
    "gradeNum": 1,
    "malignancy": "Non-neoplastic / Iatrogenic",
    "prevalence": "~5-25% of patients treated with SRS or chemoradiation for brain tumors",
    "ageGroup": "Adults with prior brain radiation history (3-24 months post-RT)",
    "commonLocations": [
      "Previous radiation treatment field / Tumor cavity margin"
    ],
    "mriFeatures": {
      "t1": "Heterogeneous mass in previous radiation bed",
      "t2": "Marked T2-hyperintensity with extensive surrounding vasogenic brain edema",
      "flair": "Widespread hyperintense edema",
      "contrast": "Classic Swiss-cheese or soap-bubble / spreading wave-cut heterogeneous enhancement",
      "dwi": "High/facilitated ADC (differentiates from recurrent tumor which has low ADC; MR Perfusion shows low rCBV <1.0)"
    },
    "radiomicSignature": {
      "intensityMean": 172,
      "heterogeneity": 0.75,
      "contrastRimThickness": "Soap-Bubble / Swiss-Cheese Low rCBV (10-35mm)",
      "edemaIndex": 0.85,
      "necrosisRatio": 0.45,
      "symmetryDeficit": 0.85
    },
    "molecularMarkers": "High VEGF expression, vessel hyalinization and thrombosis",
    "histology": "Fibrinoid vascular necrosis, endothelial cell proliferation with thrombosis, extensive coagulative necrosis, absence of viable tumor cells",
    "clinicalPresentation": "Re-emergence of neurological deficits, worsening seizures, or increased ICP months after completing radiotherapy",
    "treatment": "Bevacizumab (anti-VEGF monoclonal antibody, gold standard medical treatment); Hyperbaric Oxygen therapy / Corticosteroids",
    "prognosis": "Reversible and manageable with Bevacizumab"
  },
  {
    "id": "cavernous-malformation",
    "name": "Cerebral Cavernous Malformation (Cavernoma / CCM)",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Benign Vascular Malformation",
    "gradeNum": 1,
    "malignancy": "Benign vascular hamartoma",
    "prevalence": "~0.5% of the general population",
    "ageGroup": "Adults (20-40 yrs; Familial CCM1/2/3 causes multiple lesions)",
    "commonLocations": [
      "Subcortical White Matter (Frontal/Temporal)",
      "Brainstem (Pons)",
      "Basal Ganglia"
    ],
    "mriFeatures": {
      "t1": "Well-demarcated popcorn or mulberry lesion with mixed internal T1 hyper- and hypointense blood degradation products",
      "t2": "Classic central reticulated core surrounded by a COMPLETE, continuous hypointense HEMOSIDERIN RIM on T2/SWI",
      "flair": "No or minimal surrounding edema (unless recent acute microhemorrhage)",
      "contrast": "Minimal to no contrast enhancement",
      "dwi": "Marked magnetic susceptibility / blooming artifact on SWI/T2*"
    },
    "radiomicSignature": {
      "intensityMean": 160,
      "heterogeneity": 0.9,
      "contrastRimThickness": "Popcorn Hemosiderin Rim (5-25mm)",
      "edemaIndex": 0.05,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.65
    },
    "molecularMarkers": "CCM1 (KRIT1), CCM2 (MGC4607), or CCM3 (PDCD10) gene mutations",
    "histology": "Clusters of grossly dilated, thin-walled endothelial-lined capillary/venous channels (caverns) without intervening brain parenchyma",
    "clinicalPresentation": "New onset seizures (most common, ~50%), focal stroke symptoms from microhemorrhage, chronic headache",
    "treatment": "Observation for asymptomatic lesions; Microsurgical complete excision for medically refractory epilepsy or symptomatic brainstem cavernoma",
    "prognosis": "Excellent after complete resection; annual bleeding risk ~0.5-2%"
  },
  {
    "id": "colloid-cyst",
    "name": "Colloid Cyst of the Third Ventricle",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Benign Congenital Neuroepithelial Cyst",
    "gradeNum": 1,
    "malignancy": "Benign cyst with sudden death risk",
    "prevalence": "~0.5-1% of all primary brain tumors",
    "ageGroup": "Adults (20-50 yrs)",
    "commonLocations": [
      "Anterior-Superior Third Ventricle (obstructing Foramen of Monro)"
    ],
    "mriFeatures": {
      "t1": "Well-circumscribed round/ovoid mass at foramen of Monro, characteristically T1-HYPERINTENSE (bright due to thick mucinous/cholesterol content)",
      "t2": "T2-hypointense (black dot) or isointense due to high viscosity and paramagnetism",
      "flair": "Normal brain parenchyma except progressive bilateral lateral ventricular hydrocephalus",
      "contrast": "NO contrast enhancement (rare thin peripheral rim)",
      "dwi": "No restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 195,
      "heterogeneity": 0.3,
      "contrastRimThickness": "Foramen of Monro Round (5-20mm)",
      "edemaIndex": 0.0,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.6
    },
    "molecularMarkers": "MUC1/MUC5AC mucin expression, non-neoplastic epithelial lining",
    "histology": "Fibrous capsule lined by single layer of pseudostratified ciliated columnar and mucin-producing goblet cells filled with dense PAS-positive gelatinous colloid",
    "clinicalPresentation": "Position-dependent paroxysmal headaches (relieved by lying down), drop attacks, Brun syndrome (sudden severe headache with vomiting and syncope on neck movement), acute fatal brain herniation",
    "treatment": "URGENT Endoscopic / Microsurgical transcallosal or transcortical cyst aspiration and excision for symptomatic or large (>10mm) cysts",
    "prognosis": "Curative with complete excision"
  },
  {
    "id": "fibrillary-astro-g2",
    "name": "Fibrillary Astrocytoma, IDH-mutant, WHO Grade 2",
    "category": "Adult-Type Diffuse Gliomas",
    "whoGrade": "WHO Grade II",
    "gradeNum": 2,
    "malignancy": "Low-grade infiltrative",
    "prevalence": "Common histological variant of diffuse astrocytoma",
    "ageGroup": "Young Adults (20-40 yrs)",
    "commonLocations": [
      "Frontal Lobe",
      "Temporal Lobe"
    ],
    "mriFeatures": {
      "t1": "Hypointense expansile white matter lesion",
      "t2": "Uniformly hyperintense with indistinct borders",
      "flair": "Hyperintense without sharp boundary",
      "contrast": "No contrast enhancement",
      "dwi": "Facilitated diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 142,
      "heterogeneity": 0.3,
      "contrastRimThickness": "None (0mm)",
      "edemaIndex": 0.1,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.6
    },
    "molecularMarkers": "IDH1/2 mutation, ATRX loss, TP53 mutation",
    "histology": "Fibrillary neoplastic astrocytes with fine elongated GFAP+ hair-like fibrillary processes",
    "clinicalPresentation": "New onset focal or generalized seizures",
    "treatment": "Gross total resection + surveillance or RT/PCV",
    "prognosis": "Median survival >10-12 years"
  },
  {
    "id": "protoplasmic-astro-g2",
    "name": "Protoplasmic Astrocytoma",
    "category": "Adult-Type Diffuse Gliomas",
    "whoGrade": "WHO Grade II",
    "gradeNum": 2,
    "malignancy": "Low-grade variant",
    "prevalence": "Rare histological variant",
    "ageGroup": "Young Adults (20-35 yrs)",
    "commonLocations": [
      "Superficial Cerebral Cortex"
    ],
    "mriFeatures": {
      "t1": "Cortical hypointense expansile mass with microcysts",
      "t2": "Hyperintense with prominent microcystic degeneration",
      "flair": "Hyperintense cortical lesion",
      "contrast": "Non-enhancing",
      "dwi": "Facilitated diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 138,
      "heterogeneity": 0.35,
      "contrastRimThickness": "None (0mm)",
      "edemaIndex": 0.08,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.58
    },
    "molecularMarkers": "IDH mutation, low proliferation index",
    "histology": "Small neoplastic astrocytes with low GFAP expression and prominent microcysts filled with mucinous fluid",
    "clinicalPresentation": "Epilepsy, cortical focal signs",
    "treatment": "Surgical resection",
    "prognosis": "Favorable"
  },
  {
    "id": "small-cell-gbm",
    "name": "Small Cell Glioblastoma",
    "category": "Adult-Type Diffuse Gliomas",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "High-grade malignant (GBM variant)",
    "prevalence": "~10% of glioblastomas",
    "ageGroup": "Adults (50-70 yrs)",
    "commonLocations": [
      "Centrum Semiovale",
      "Frontal Lobe"
    ],
    "mriFeatures": {
      "t1": "Hypointense infiltrative mass resembling high-grade oligodendroglioma",
      "t2": "Hyperintense with surrounding edema",
      "flair": "Hyperintense with infiltrative borders",
      "contrast": "Thick ring or nodular enhancement",
      "dwi": "Marked restricted diffusion (hypercellular)"
    },
    "radiomicSignature": {
      "intensityMean": 188,
      "heterogeneity": 0.85,
      "contrastRimThickness": "Thick Ring Hypercellular",
      "edemaIndex": 0.85,
      "necrosisRatio": 0.35,
      "symmetryDeficit": 0.92
    },
    "molecularMarkers": "EGFR amplification (>70%), PTEN loss, IDH-wildtype, 1p/19q intact",
    "histology": "Monomorphic small cells with high nuclear-to-cytoplasmic ratio resembling oligodendrocytes or small cell carcinoma",
    "clinicalPresentation": "Rapid neurological decline, cognitive deficits",
    "treatment": "Maximal surgical resection + Stupp protocol",
    "prognosis": "Aggressive; median OS ~12-14 months"
  },
  {
    "id": "granular-cell-gbm",
    "name": "Granular Cell Glioblastoma",
    "category": "Adult-Type Diffuse Gliomas",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "High-grade malignant variant",
    "prevalence": "Rare (<0.5%)",
    "ageGroup": "Adults (50-65 yrs)",
    "commonLocations": [
      "Temporal Lobe",
      "Parietal Lobe"
    ],
    "mriFeatures": {
      "t1": "Heterogeneous hypointense mass",
      "t2": "Hyperintense with necrosis and edema",
      "flair": "Hyperintense with mass effect",
      "contrast": "Heterogeneous ring enhancement",
      "dwi": "Restricted diffusion in granular cell sheets"
    },
    "radiomicSignature": {
      "intensityMean": 180,
      "heterogeneity": 0.82,
      "contrastRimThickness": "Heterogeneous Ring",
      "edemaIndex": 0.8,
      "necrosisRatio": 0.3,
      "symmetryDeficit": 0.88
    },
    "molecularMarkers": "IDH-wildtype, PAS positive diastase resistant granules",
    "histology": "Infiltrating astrocytes with abundant granular, PAS-positive cytoplasm containing autophagic lysosomal granules",
    "clinicalPresentation": "Headache, hemiparesis, aphasia",
    "treatment": "Surgical resection + chemoradiation",
    "prognosis": "Poor; median OS ~10-12 months"
  },
  {
    "id": "dlgnt",
    "name": "Diffuse Leptomeningeal Glioneuronal Tumor (DLGNT)",
    "category": "Glioneuronal and Neuronal Tumors",
    "whoGrade": "WHO Grade I-II",
    "gradeNum": 2,
    "malignancy": "Low-grade glioneuronal with diffuse meningeal spread",
    "prevalence": "Rare pediatric/young adult disease",
    "ageGroup": "Children and Young Adults (Mean 10-15 yrs)",
    "commonLocations": [
      "Leptomeninges of Brainstem, Spine, and Basal Cisterns"
    ],
    "mriFeatures": {
      "t1": "Diffuse leptomeningeal thickening and multiple tiny subpial cysts (T1-hypointense)",
      "t2": "Characteristic tiny subpial microcysts along spinal cord and brain surface",
      "flair": "Diffuse hyperintense leptomeningeal coating",
      "contrast": "Nodular and thick linear leptomeningeal enhancement along spinal cord and brainstem",
      "dwi": "No restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 170,
      "heterogeneity": 0.65,
      "contrastRimThickness": "Diffuse Leptomeningeal Nodular",
      "edemaIndex": 0.3,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.75
    },
    "molecularMarkers": "1p deletion, KIAA1549-BRAF fusion, or other MAPK alterations, OLIG2+, Synaptophysin+",
    "histology": "Oligodendroglioma-like cells in the subarachnoid space surrounded by dense collagenous/desmoplastic stroma",
    "clinicalPresentation": "Chronic headache, spinal radiculopathy, cranial nerve palsies, communicating hydrocephalus",
    "treatment": "Targeted MEK inhibitors (Trametinib) or chemotherapy (Carboplatin/Vincristine) + craniospinal irradiation if progressive",
    "prognosis": "Indolent but chronic progressive; 10-year overall survival ~70-80%"
  },
  {
    "id": "myxoid-glioneuronal",
    "name": "Myxoid Glioneuronal Tumor of the Septum Pellucidum",
    "category": "Glioneuronal and Neuronal Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign glioneuronal intraventricular",
    "prevalence": "Newly recognized WHO entity",
    "ageGroup": "Children and Young Adults (10-30 yrs)",
    "commonLocations": [
      "Septum Pellucidum / Lateral and Third Ventricles"
    ],
    "mriFeatures": {
      "t1": "Well-circumscribed intraventricular mass centered in septum pellucidum, hypointense",
      "t2": "Uniformly hyperintense with prominent myxoid matrix",
      "flair": "Hyperintense with Foramen of Monro displacement",
      "contrast": "Minimal to absent contrast enhancement",
      "dwi": "No diffusion restriction"
    },
    "radiomicSignature": {
      "intensityMean": 145,
      "heterogeneity": 0.3,
      "contrastRimThickness": "None / Minimal",
      "edemaIndex": 0.05,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.55
    },
    "molecularMarkers": "PDGFRA K385L/I somatic mutation (hallmark pathognomonic in >95%), OLIG2+, Synaptophysin+",
    "histology": "Oligodendrocyte-like round cells floating in prominent myxoid/mucinous pools with interspersed neurocytic elements",
    "clinicalPresentation": "Headaches from obstructive hydrocephalus, cognitive changes",
    "treatment": "Complete surgical or endoscopic resection is curative",
    "prognosis": "Outstanding; benign outcome with no recurrence after resection"
  },
  {
    "id": "dgonc",
    "name": "Diffuse Glioneuronal Tumor with Oligo-like features and Nuclear Clusters (DGONC)",
    "category": "Glioneuronal and Neuronal Tumors",
    "whoGrade": "WHO Grade II",
    "gradeNum": 2,
    "malignancy": "Low to intermediate grade",
    "prevalence": "Recently defined molecular entity",
    "ageGroup": "Children (Peak 5-12 yrs)",
    "commonLocations": [
      "Cerebral Hemispheres (Temporal / Frontal cortex)"
    ],
    "mriFeatures": {
      "t1": "Well-demarcated cortical-subcortical mass",
      "t2": "Hyperintense with cortical expansion",
      "flair": "Hyperintense with sharp margins",
      "contrast": "Variable, minimal to patchy enhancement",
      "dwi": "Facilitated diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 150,
      "heterogeneity": 0.45,
      "contrastRimThickness": "Patchy / Minimal",
      "edemaIndex": 0.15,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.65
    },
    "molecularMarkers": "Monosomy 14, PDGFRA alterations, OLIG2 positive, Synaptophysin positive",
    "histology": "Oligodendroglioma-like cells arranged in distinctive multinodular clusters and linear arrays in a neuropil-rich background",
    "clinicalPresentation": "Intractable focal seizures",
    "treatment": "Surgical resection",
    "prognosis": "Favorable"
  },
  {
    "id": "gangliocytoma",
    "name": "Gangliocytoma, WHO Grade 1",
    "category": "Glioneuronal and Neuronal Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign purely neuronal tumor",
    "prevalence": "Rare (<0.5%)",
    "ageGroup": "Children & Young Adults",
    "commonLocations": [
      "Temporal Lobe",
      "Third Ventricle / Sellar Region"
    ],
    "mriFeatures": {
      "t1": "Well-circumscribed cortical mass, hypointense",
      "t2": "Hyperintense with calcifications",
      "flair": "Hyperintense without edema",
      "contrast": "Minimal to non-enhancing",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 145,
      "heterogeneity": 0.35,
      "contrastRimThickness": "None / Minimal",
      "edemaIndex": 0.05,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.5
    },
    "molecularMarkers": "Synaptophysin+, NeuN+, absence of neoplastic glial component",
    "histology": "Mature dysplastic ganglion cells without neoplastic astrocytic/glial element",
    "clinicalPresentation": "Long-standing epilepsy",
    "treatment": "Surgical resection (curative)",
    "prognosis": "Excellent; no recurrence"
  },
  {
    "id": "anaplastic-ependymoma",
    "name": "Anaplastic Ependymoma, WHO Grade 3",
    "category": "Ependymal Tumors",
    "whoGrade": "WHO Grade III",
    "gradeNum": 3,
    "malignancy": "High-grade malignant ependymoma",
    "prevalence": "~20% of ependymomas",
    "ageGroup": "Children & Adults",
    "commonLocations": [
      "Fourth Ventricle",
      "Supratentorial Parenchyma"
    ],
    "mriFeatures": {
      "t1": "Large heterogeneous mass with necrosis and hemorrhage",
      "t2": "Heterogeneously hyperintense with prominent edema",
      "flair": "Infiltrative mass effect",
      "contrast": "Intense, heterogeneous, nodular enhancement",
      "dwi": "Restricted diffusion in dense cellular portions"
    },
    "radiomicSignature": {
      "intensityMean": 182,
      "heterogeneity": 0.82,
      "contrastRimThickness": "Thick Nodular Enhancing",
      "edemaIndex": 0.65,
      "necrosisRatio": 0.25,
      "symmetryDeficit": 0.88
    },
    "molecularMarkers": "High Ki-67 index (>15%), 1q gain, CDKN2A deletion",
    "histology": "High cellularity, brisk atypical mitoses, geographic necrosis, endothelial proliferation, perivascular pseudorosettes",
    "clinicalPresentation": "Rapid raised ICP, cranial nerve palsies, ataxia",
    "treatment": "Maximal resection + local/craniospinal Radiotherapy",
    "prognosis": "Guarded; 5-year survival ~50-60%"
  },
  {
    "id": "spinal-ependymoma",
    "name": "Spinal Ependymoma, WHO Grade 2",
    "category": "Ependymal Tumors",
    "whoGrade": "WHO Grade II",
    "gradeNum": 2,
    "malignancy": "Low-grade intramedullary spinal tumor",
    "prevalence": "Most common primary intramedullary spinal cord tumor in adults (~60%)",
    "ageGroup": "Adults (30-50 yrs)",
    "commonLocations": [
      "Cervical and Thoracic Spinal Cord (Centrally located)"
    ],
    "mriFeatures": {
      "t1": "Centrally located expansile intramedullary spinal mass, isointense to hypointense",
      "t2": "Hyperintense with rostral and caudal peritumoral syrinx cavities; hemosiderin cap sign",
      "flair": "Spinal cord expansion with polar cysts",
      "contrast": "Intense, sharp, homogeneous contrast enhancement",
      "dwi": "Facilitated diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 195,
      "heterogeneity": 0.45,
      "contrastRimThickness": "Central Intramedullary Avid (15-40mm)",
      "edemaIndex": 0.2,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.7
    },
    "molecularMarkers": "NF2 gene mutations (22q loss), GFAP+, S100+, EMA dot-like",
    "histology": "Uniform ependymal cells forming true rosettes and prominent perivascular pseudorosettes",
    "clinicalPresentation": "Sensory level, progressive spastic paraparesis, neck/back pain, bladder dysfunction",
    "treatment": "Complete microsurgical en bloc resection through posterior myelotomy (curative with clean plane)",
    "prognosis": "Excellent; >90% long-term cure with preserved neurological function if operated early"
  },
  {
    "id": "spinal-ependymoma-mycn",
    "name": "Spinal Ependymoma, MYCN-amplified",
    "category": "Ependymal Tumors",
    "whoGrade": "WHO Grade III",
    "gradeNum": 3,
    "malignancy": "Aggressive malignant spinal ependymoma (new entity)",
    "prevalence": "Rare high-risk spinal variant",
    "ageGroup": "Young Adults and Adolescents",
    "commonLocations": [
      "Thoracic / Lumbar Spinal Cord with diffuse leptomeningeal drop metastases"
    ],
    "mriFeatures": {
      "t1": "Expansile intramedullary mass with nodular extramedullary leptomeningeal coating",
      "t2": "Heterogeneously hyperintense with hemorrhage",
      "flair": "Extensive cord edema",
      "contrast": "Intense heterogeneous enhancement with diffuse spinal CSF seeding",
      "dwi": "Restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 185,
      "heterogeneity": 0.85,
      "contrastRimThickness": "Spinal Invasive Seeding",
      "edemaIndex": 0.7,
      "necrosisRatio": 0.3,
      "symmetryDeficit": 0.9
    },
    "molecularMarkers": "High-level MYCN gene amplification, chromosomal instability",
    "histology": "High-grade ependymal cytology with rapid leptomeningeal dissemination",
    "clinicalPresentation": "Rapid paraplegia, sensory level, urinary retention",
    "treatment": "Surgical decompression + Craniospinal Radiotherapy + Chemotherapy",
    "prognosis": "Poor; aggressive course with high mortality"
  },
  {
    "id": "medullo-group4",
    "name": "Medulloblastoma, Non-WNT/Non-SHH (Group 4)",
    "category": "Embryonal Tumors",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "High-grade embryonal",
    "prevalence": "Most common medulloblastoma subgroup (~35-40%)",
    "ageGroup": "Children & Adolescents (Peak 7-12 yrs; Male > Female 2:1)",
    "commonLocations": [
      "Fourth Ventricle / Cerebellar Vermis Midline"
    ],
    "mriFeatures": {
      "t1": "Midline 4th ventricular solid mass, isointense to hypointense",
      "t2": "Isointense to hypointense with minimal cystic degeneration",
      "flair": "Hyperintense with obstructive hydrocephalus",
      "contrast": "Moderate, homogeneous to heterogeneous enhancement; frequent spinal drop metastases",
      "dwi": "Profound restricted diffusion (very low ADC)"
    },
    "radiomicSignature": {
      "intensityMean": 192,
      "heterogeneity": 0.68,
      "contrastRimThickness": "Solid Midline Enhancing (15-35mm)",
      "edemaIndex": 0.45,
      "necrosisRatio": 0.08,
      "symmetryDeficit": 0.88
    },
    "molecularMarkers": "Isochromosome 17q (i(17q) in >65%), KDM6A mutations, PRDM6 activation, absence of MYC amplification",
    "histology": "Classic small round blue cells with hyperchromatic nuclei and Homer Wright rosettes",
    "clinicalPresentation": "Morning vomiting, ataxia, papilledema, spinal drop metastasis signs",
    "treatment": "Gross total resection + Craniospinal Irradiation + Cisplatin-based Chemotherapy",
    "prognosis": "Intermediate-to-good; 5-year overall survival ~75-85%"
  },
  {
    "id": "medullo-desmoplastic",
    "name": "Desmoplastic / Nodular Medulloblastoma",
    "category": "Embryonal Tumors",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "High-grade embryonal with favorable histology in infants",
    "prevalence": "~15% of medulloblastomas",
    "ageGroup": "Infants (<3 yrs) & Young Adults",
    "commonLocations": [
      "Cerebellar Hemisphere"
    ],
    "mriFeatures": {
      "t1": "Hypointense hemispheric cerebellar mass",
      "t2": "Heterogeneously hyperintense with nodular texture",
      "flair": "Moderate surrounding edema",
      "contrast": "Strong nodular enhancement",
      "dwi": "Restricted diffusion in internodular cellular areas"
    },
    "radiomicSignature": {
      "intensityMean": 188,
      "heterogeneity": 0.72,
      "contrastRimThickness": "Nodular Hemispheric",
      "edemaIndex": 0.4,
      "necrosisRatio": 0.05,
      "symmetryDeficit": 0.82
    },
    "molecularMarkers": "SHH pathway activation (PTCH1/SMO mutations), reticulin-free pale islands",
    "histology": "Biphasic architecture: reticulin-free pale neurocytic islands (lobules) surrounded by hypercellular reticulin-rich internodular zones",
    "clinicalPresentation": "Ataxia, headache, vomiting",
    "treatment": "Maximal surgical resection + risk-adapted therapy (chemotherapy alone in infants avoids radiation)",
    "prognosis": "Favorable in infants; >85% cure without radiotherapy"
  },
  {
    "id": "cns-neuroblastoma-foxr2",
    "name": "CNS Neuroblastoma, FOXR2-activated",
    "category": "Embryonal Tumors",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "High-grade supratentorial embryonal",
    "prevalence": "Rare pediatric entity (formerly supratentorial PNET)",
    "ageGroup": "Young Children (<6 yrs)",
    "commonLocations": [
      "Supratentorial Lobar White Matter"
    ],
    "mriFeatures": {
      "t1": "Large, well-circumscribed, bulky lobar mass with hemorrhage/cysts",
      "t2": "Heterogeneously hyperintense with calcifications",
      "flair": "Marked mass effect",
      "contrast": "Intense heterogeneous enhancement",
      "dwi": "Profound diffusion restriction"
    },
    "radiomicSignature": {
      "intensityMean": 190,
      "heterogeneity": 0.82,
      "contrastRimThickness": "Bulky Lobar Enhancing",
      "edemaIndex": 0.65,
      "necrosisRatio": 0.25,
      "symmetryDeficit": 0.9
    },
    "molecularMarkers": "FOXR2 structural rearrangements / fusions, Olig2+, Synaptophysin+",
    "histology": "Primitive neuroepithelial small round blue cells with prominent Homer Wright rosettes and neuropil islands",
    "clinicalPresentation": "Rapid neurological deficits, seizures, macrocephaly",
    "treatment": "Surgical resection + high-dose Chemotherapy + Craniospinal Radiotherapy",
    "prognosis": "Moderate; ~60-70% 5-year survival"
  },
  {
    "id": "ptpr",
    "name": "Papillary Tumor of the Pineal Region (PTPR)",
    "category": "Pineal Region Tumors",
    "whoGrade": "WHO Grade II or III",
    "gradeNum": 2,
    "malignancy": "Intermediate-to-high grade pineal tumor",
    "prevalence": "Rare (<1% of pineal tumors)",
    "ageGroup": "Adults (Mean 30-40 yrs)",
    "commonLocations": [
      "Pineal Region / Posterior Third Ventricle"
    ],
    "mriFeatures": {
      "t1": "Large, well-demarcated pineal mass with cystic components, isointense to hypointense",
      "t2": "Heterogeneously hyperintense with focal intrinsic T1-hyperintense secretions",
      "flair": "Hyperintense with aqueductal compression",
      "contrast": "Strong, heterogeneous, vivid contrast enhancement",
      "dwi": "Moderate diffusion restriction"
    },
    "radiomicSignature": {
      "intensityMean": 185,
      "heterogeneity": 0.7,
      "contrastRimThickness": "Pineal Papillary Avid (15-35mm)",
      "edemaIndex": 0.35,
      "necrosisRatio": 0.1,
      "symmetryDeficit": 0.72
    },
    "molecularMarkers": "PTEN loss, chromosome 10 loss, Cytokeratin+, S100+, Kir7.1 positive",
    "histology": "Papillary and solid architecture with cells showing clear to eosinophilic cytoplasm arranged around fibrovascular cores",
    "clinicalPresentation": "Obstructive hydrocephalus, headaches, Parinaud syndrome",
    "treatment": "Gross total surgical resection +/- adjuvant Radiotherapy (focal or SRS)",
    "prognosis": "High propensity for late local recurrence (~50-70% at 5 yrs); requires long-term surveillance"
  },
  {
    "id": "schwannoma-facial",
    "name": "Facial Nerve Schwannoma (CN VII)",
    "category": "Cranial and Paraspinal Nerve Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign nerve sheath tumor",
    "prevalence": "Rare cranial schwannoma (~1-2%)",
    "ageGroup": "Adults (30-50 yrs)",
    "commonLocations": [
      "Fallopian Canal / Geniculate Ganglion / Middle Cranial Fossa"
    ],
    "mriFeatures": {
      "t1": "Expansile mass along facial nerve canal, isointense",
      "t2": "Hyperintense with bony canal widening on CT/MRI",
      "flair": "Minimal surrounding edema",
      "contrast": "Intense, homogeneous contrast enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 192,
      "heterogeneity": 0.5,
      "contrastRimThickness": "Intense Canal Avid",
      "edemaIndex": 0.1,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.75
    },
    "molecularMarkers": "NF2 mutation, S100+, SOX10+",
    "histology": "Antoni A and B tissue with Verocay bodies",
    "clinicalPresentation": "Slow progressive facial nerve palsy / hemifacial weakness, conductive or sensorineural hearing loss",
    "treatment": "Stereotactic Radiosurgery (preserves facial function) or microsurgical decompression/resection with nerve grafting",
    "prognosis": "Excellent tumor control; priority is facial nerve function preservation"
  },
  {
    "id": "schwannoma-jugular",
    "name": "Jugular Foramen Schwannoma (CN IX, X, XI)",
    "category": "Cranial and Paraspinal Nerve Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign nerve sheath tumor",
    "prevalence": "~3-5% of non-vestibular schwannomas",
    "ageGroup": "Adults (35-55 yrs)",
    "commonLocations": [
      "Jugular Foramen with intracranial and extracranial extension (dumbbell)"
    ],
    "mriFeatures": {
      "t1": "Dumbbell-shaped mass widening jugular foramen with smooth sclerotic margins",
      "t2": "Heterogeneously hyperintense with cystic changes",
      "flair": "Hyperintense with cerebellar/brainstem compression",
      "contrast": "Intense, robust contrast enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 190,
      "heterogeneity": 0.6,
      "contrastRimThickness": "Jugular Dumbbell Avid (15-40mm)",
      "edemaIndex": 0.18,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.8
    },
    "molecularMarkers": "NF2 mutation, S100+, SOX10+",
    "histology": "Schwannoma architecture (Antoni A and B)",
    "clinicalPresentation": "Vernet Syndrome (dysphagia, hoarseness, loss of gag reflex, trapezius weakness, tongue deviation)",
    "treatment": "Stereotactic Radiosurgery (Gamma Knife) or Skull Base microsurgical resection",
    "prognosis": "Excellent long-term control (>95%)"
  },
  {
    "id": "meningioma-g1-microcystic",
    "name": "Microcystic Meningioma, WHO Grade 1",
    "category": "Meningiomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign extra-axial variant",
    "prevalence": "~1-2% of meningiomas",
    "ageGroup": "Adults (50-70 yrs)",
    "commonLocations": [
      "Convexity",
      "Parasagittal",
      "Tentorium"
    ],
    "mriFeatures": {
      "t1": "Hypointense extra-axial mass with spongy/cystic texture",
      "t2": "CHARACTERISTICALLY MARKEDLY HYPERINTENSE on T2 (due to abundant microcysts and extracellular fluid)",
      "flair": "Hyperintense with disproportionate brain edema",
      "contrast": "Variable, patchy to intense heterogeneous enhancement",
      "dwi": "Facilitated diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 180,
      "heterogeneity": 0.65,
      "contrastRimThickness": "Spongy T2-Bright Enhancing",
      "edemaIndex": 0.6,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.78
    },
    "molecularMarkers": "NF2 mutation, EMA+, PR positive",
    "histology": "Intercellular microcysts and loose stellate cells resembling mucinous tissue; absence of nuclear atypia",
    "clinicalPresentation": "Headache, focal seizures, focal neurological signs",
    "treatment": "Surgical resection (Simpson 1)",
    "prognosis": "Excellent; benign course"
  },
  {
    "id": "meningioma-g1-lymphoplasmacyte",
    "name": "Lymphoplasmacyte-Rich Meningioma, WHO Grade 1",
    "category": "Meningiomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign with dense chronic inflammatory infiltrate",
    "prevalence": "Rare (<0.5%)",
    "ageGroup": "Young Adults and Children",
    "commonLocations": [
      "Convexity",
      "Skull Base"
    ],
    "mriFeatures": {
      "t1": "Isointense to hypointense dural mass",
      "t2": "Isointense to hyperintense with peritumoral edema",
      "flair": "Moderate hyperintensity",
      "contrast": "Strong homogeneous enhancement with dural tail",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 195,
      "heterogeneity": 0.4,
      "contrastRimThickness": "Avid Dural-Based",
      "edemaIndex": 0.45,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.75
    },
    "molecularMarkers": "Polyclonal plasma cell infiltrate, EMA+, PR+",
    "histology": "Meningothelial elements overshadowed by massive chronic inflammatory infiltrate of mature lymphocytes and plasma cells",
    "clinicalPresentation": "Headaches, anemia, hypergammaglobulinemia (systemic inflammatory response)",
    "treatment": "Complete surgical excision (resolves systemic abnormalities)",
    "prognosis": "Excellent"
  },
  {
    "id": "meningioma-g1-metaplastic",
    "name": "Metaplastic Meningioma (Osseous / Lipomatous / Chondroid)",
    "category": "Meningiomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign with mesenchymal metaplasia",
    "prevalence": "~1-2% of meningiomas",
    "ageGroup": "Adults (50-70 yrs)",
    "commonLocations": [
      "Convexity",
      "Parasagittal"
    ],
    "mriFeatures": {
      "t1": "Dural mass with focal intrinsic T1-hyperintensity (fat) or signal void (bone)",
      "t2": "Heterogeneous with fat suppression or calcification artifact",
      "flair": "Minimal edema",
      "contrast": "Heterogeneous contrast enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 185,
      "heterogeneity": 0.6,
      "contrastRimThickness": "Heterogeneous Metaplastic",
      "edemaIndex": 0.1,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.75
    },
    "molecularMarkers": "EMA+, PR+, S100+ in lipomatous areas",
    "histology": "Meningothelial cells with prominent focal transformation into mature mesenchymal tissues: bone, cartilage, fat, or myxoid",
    "clinicalPresentation": "Incidental finding, focal seizures, localized calvarial bulging",
    "treatment": "Surgical resection",
    "prognosis": "Excellent"
  },
  {
    "id": "meningioma-convexity",
    "name": "Convexity Meningioma, WHO Grade 1",
    "category": "Meningiomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Classic anatomical meningioma location",
    "prevalence": "~35% of all intracranial meningiomas",
    "ageGroup": "Adults (Peak 50-70 yrs; Female > Male 2:1)",
    "commonLocations": [
      "Cerebral Convexity (Frontal, Parietal, Temporal, Occipital lobes)"
    ],
    "mriFeatures": {
      "t1": "Classic hemisphere dural-based hemispheric extra-axial mass, isointense to cortex",
      "t2": "Iso- to slightly hyperintense with distinct CSF cleft sign",
      "flair": "Variable peritumoral edema; buckle sign of displaced cerebral cortex",
      "contrast": "VIVID, HOMOGENEOUS, INTENSE CONTRAST ENHANCEMENT WITH CLASSIC DURAL TAIL SIGN",
      "dwi": "No restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 215,
      "heterogeneity": 0.25,
      "contrastRimThickness": "Vivid Homogeneous + Dural Tail (20-60mm)",
      "edemaIndex": 0.2,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.85
    },
    "molecularMarkers": "NF2 loss (22q), TRAF7, AKT1 mutations, EMA positive, PR positive",
    "histology": "Meningothelial or transitional architecture with psammoma bodies",
    "clinicalPresentation": "Focal cortical seizures (Jacksonian march), progressive contralateral hemiparesis, localized headache",
    "treatment": "Curative Simpson Grade 1 surgical resection (complete tumor + dural origin excision + skull margin)",
    "prognosis": "Outstanding; >95% cure rate with complete excision"
  },
  {
    "id": "meningioma-parasagittal",
    "name": "Parasagittal / Falcine Meningioma, WHO Grade 1",
    "category": "Meningiomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Major anatomical subgroup",
    "prevalence": "~25% of all meningiomas",
    "ageGroup": "Adults (50-70 yrs)",
    "commonLocations": [
      "Superior Sagittal Sinus (SSS) / Falx Cerebri"
    ],
    "mriFeatures": {
      "t1": "Extra-axial mass arising from falx or parasagittal dura, often encasing or invading SSS",
      "t2": "Iso- to hyperintense with venous collateral flow voids",
      "flair": "Bilateral or unilateral parasagittal brain edema",
      "contrast": "Intense, rapid, homogeneous contrast enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 210,
      "heterogeneity": 0.35,
      "contrastRimThickness": "Parasagittal SSS Encasement",
      "edemaIndex": 0.4,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.88
    },
    "molecularMarkers": "NF2 mutation, PR+, EMA+",
    "histology": "Meningothelial / transitional histology",
    "clinicalPresentation": "Contralateral lower extremity weakness (paraparesis from motor strip compression), bilateral leg weakness if bilateral falx, seizures",
    "treatment": "Microsurgical resection +/- SSS sinus reconstruction or radiosurgery for sinus invasion",
    "prognosis": "Excellent; sinus invasion increases recurrence risk"
  },
  {
    "id": "meningioma-olfactory",
    "name": "Olfactory Groove Meningioma, WHO Grade 1",
    "category": "Meningiomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Skull base anatomical variant",
    "prevalence": "~10% of intracranial meningiomas",
    "ageGroup": "Adults (Peak 45-65 yrs)",
    "commonLocations": [
      "Cribriform Plate / Olfactory Groove of Anterior Cranial Fossa"
    ],
    "mriFeatures": {
      "t1": "Large, rounded subfrontal extra-axial mass growing upward into frontal lobes",
      "t2": "Isointense to hyperintense with dense subfrontal edema",
      "flair": "Marked bilateral frontal lobe vasogenic edema (claw sign)",
      "contrast": "Intense, homogeneous contrast enhancement with broad-based cribriform dural attachment",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 212,
      "heterogeneity": 0.3,
      "contrastRimThickness": "Subfrontal Symmetrical Avid (30-70mm)",
      "edemaIndex": 0.55,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.86
    },
    "molecularMarkers": "TRAF7 / AKT1 (E17K) or SMO mutations (non-NF2 skull base profile), EMA+, PR+",
    "histology": "Meningothelial syncytial histology",
    "clinicalPresentation": "Foster Kennedy Syndrome (ipsilateral optic atrophy from direct compression + contralateral papilledema from raised ICP) + Anosmia, personality changes (frontal lobe apathy)",
    "treatment": "Bifrontal, Pterional, or Endoscopic Endonasal Skull Base Resection",
    "prognosis": "Excellent; >90% long-term cure with complete resection"
  },
  {
    "id": "meningioma-sphenoid",
    "name": "Sphenoid Wing Meningioma, WHO Grade 1",
    "category": "Meningiomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Skull base anatomical variant",
    "prevalence": "~15-20% of meningiomas",
    "ageGroup": "Adults (45-65 yrs; Female > Male)",
    "commonLocations": [
      "Inner, Middle, or Outer Third of Sphenoid Ridge / En Plaque"
    ],
    "mriFeatures": {
      "t1": "En plaque hyperostosing or globoid mass along sphenoid bone with bony invasion/hyperostosis",
      "t2": "Iso- to hyperintense with cavernous sinus or orbital apex involvement",
      "flair": "Temporal and frontal lobe edema",
      "contrast": "Intense, sheet-like or globoid enhancement with extensive bony enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 208,
      "heterogeneity": 0.4,
      "contrastRimThickness": "En Plaque / Hyperostotic Sphenoid",
      "edemaIndex": 0.4,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.85
    },
    "molecularMarkers": "TRAF7, KLF4, or NF2 mutations, EMA+, PR+",
    "histology": "Meningothelial sheets interdigitating within bone haversian canals",
    "clinicalPresentation": "Progressive painless proptosis (bulging eye), visual deterioration, CN III/IV/VI diplopia, temporal swelling",
    "treatment": "Pterional / Orbitozygomatic skull base craniotomy with optic canal unroofing + SRS for cavernous sinus remnant",
    "prognosis": "Good; en plaque variants have higher recurrence due to bone infiltration"
  },
  {
    "id": "meningioma-petroclival",
    "name": "Petroclival Meningioma, WHO Grade 1",
    "category": "Meningiomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Complex skull base meningioma",
    "prevalence": "~5-10% of skull base meningiomas",
    "ageGroup": "Adults (40-60 yrs)",
    "commonLocations": [
      "Petroclival Junction / Upper Clivus & Petrous Apex"
    ],
    "mriFeatures": {
      "t1": "Large, lobulated skull base mass displacing brainstem and basilar artery",
      "t2": "Isointense to hypointense with prominent brainstem compression",
      "flair": "Brainstem and cerebellar peduncle edema",
      "contrast": "Intense, homogeneous contrast enhancement spanning middle and posterior fossa",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 205,
      "heterogeneity": 0.45,
      "contrastRimThickness": "Petroclival Skull Base Avid",
      "edemaIndex": 0.5,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.9
    },
    "molecularMarkers": "TRAF7, AKT1, or NF2 mutations, EMA+, PR+",
    "histology": "Meningothelial histology",
    "clinicalPresentation": "Multiple cranial neuropathies (CN V trigeminal numbness, CN VI diplopia, CN VII/VIII palsy), cerebellar ataxia, hemiparesis",
    "treatment": "Combined petrosal / retrosigmoid / Kawase approach or staged subtotal resection + Stereotactic Radiosurgery (SRS)",
    "prognosis": "High surgical complexity; SRS achieves >90-95% long-term tumor control"
  },
  {
    "id": "meningioma-intraventricular",
    "name": "Intraventricular Meningioma, WHO Grade 1",
    "category": "Meningiomas",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Deep intraventricular variant",
    "prevalence": "~1-2% of all meningiomas",
    "ageGroup": "Adults (Peak 35-55 yrs; Female predominance)",
    "commonLocations": [
      "Trigone / Atrium of Lateral Ventricle (Left > Right)"
    ],
    "mriFeatures": {
      "t1": "Large, lobulated intraventricular mass arising from choroid plexus/tela choroidea, isointense",
      "t2": "Iso- to hyperintense with trapped temporal/occipital horn (temporal horn entrapment)",
      "flair": "Periventricular transependymal and vasogenic edema",
      "contrast": "Intense, rapid, homogeneous, vivid contrast enhancement with feeding anterior/posterior choroidal arteries",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 215,
      "heterogeneity": 0.35,
      "contrastRimThickness": "Intraventricular Atrial Avid (30-65mm)",
      "edemaIndex": 0.35,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.84
    },
    "molecularMarkers": "NF2 mutation, EMA+, PR+",
    "histology": "Fibrous or transitional meningioma histology with psammoma bodies",
    "clinicalPresentation": "Headaches from obstructive/entrapment hydrocephalus, homonymous hemianopsia (optic radiation stretching), speech difficulties",
    "treatment": "Parieto-occipital trans-sulcal or transtemporal surgical resection (curative)",
    "prognosis": "Excellent; >95% long-term cure with complete excision"
  },
  {
    "id": "pituitary-thyrotroph",
    "name": "Thyrotroph Adenoma (TSH-secreting PitNET)",
    "category": "Sellar and Parasellar Tumors",
    "whoGrade": "Benign PitNET",
    "gradeNum": 1,
    "malignancy": "Rare functioning pituitary adenoma",
    "prevalence": "<1% of pituitary adenomas",
    "ageGroup": "Adults (30-50 yrs)",
    "commonLocations": [
      "Sella Turcica with suprasellar expansion"
    ],
    "mriFeatures": {
      "t1": "Large invasive sellar-suprasellar macroadenoma, often fibrous and firm",
      "t2": "Heterogeneously hyperintense with encasement of cavernous carotid",
      "flair": "Suprasellar extension with chiasm compression",
      "contrast": "Strong heterogeneous enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 185,
      "heterogeneity": 0.45,
      "contrastRimThickness": "Invasive Sellar Macroadenoma",
      "edemaIndex": 0.08,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.75
    },
    "molecularMarkers": "PIT1 positive, TSH beta-subunit positive, elevated free T3/T4 with inappropriately normal or elevated TSH (central hyperthyroidism)",
    "histology": "Chromophobic or basophilic thyrotroph cells with prominent nuclear pleomorphism",
    "clinicalPresentation": "Central hyperthyroidism (palpitations, weight loss, tremor, goiter without exophthalmos) + bitemporal visual field loss",
    "treatment": "Endoscopic Transsphenoidal Surgery + Somatostatin analogues (Octreotide/Lanreotide - very effective in lowering TSH)",
    "prognosis": "Good with biochemical cure"
  },
  {
    "id": "pituitary-gonadotroph",
    "name": "Gonadotroph Adenoma (FSH/LH-secreting PitNET)",
    "category": "Sellar and Parasellar Tumors",
    "whoGrade": "Benign PitNET",
    "gradeNum": 1,
    "malignancy": "Non-functioning / functioning PitNET",
    "prevalence": "~25-30% of all pituitary macroadenomas",
    "ageGroup": "Adults (50-70 yrs; Male predominance)",
    "commonLocations": [
      "Sella Turcica / Suprasellar Cistern"
    ],
    "mriFeatures": {
      "t1": "Large sellar macroadenoma (>2.5 cm) with snowman configuration",
      "t2": "Isointense to hyperintense with cystic/necrotic areas",
      "flair": "Elevation and stretching of optic chiasm",
      "contrast": "Robust heterogeneous contrast enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 180,
      "heterogeneity": 0.42,
      "contrastRimThickness": "Snowman Macroadenoma",
      "edemaIndex": 0.06,
      "necrosisRatio": 0.05,
      "symmetryDeficit": 0.72
    },
    "molecularMarkers": "SF1 positive (Steroidogenic Factor-1, lineage defining), FSH-beta / LH-beta positive, alpha-subunit positive",
    "histology": "Cords and sheets of uniform polygonal chromophobic cells",
    "clinicalPresentation": "Visual disturbance (bitemporal hemianopsia), hypopituitarism (hypogonadism, fatigue), incidental finding",
    "treatment": "Endoscopic Transsphenoidal Resection (first-line) + Radiosurgery for residual cavernous sinus tumor",
    "prognosis": "Good; >90% visual recovery"
  },
  {
    "id": "pituicytoma",
    "name": "Pituicytoma",
    "category": "Sellar and Parasellar Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign neurohypophyseal neoplasm",
    "prevalence": "Rare (<0.1%)",
    "ageGroup": "Adults (40-60 yrs)",
    "commonLocations": [
      "Sellar / Suprasellar Infundibulum"
    ],
    "mriFeatures": {
      "t1": "Well-circumscribed solid sellar/suprasellar mass separate from pituitary gland, isointense",
      "t2": "Iso- to hyperintense without calcification",
      "flair": "Optic chiasm compression",
      "contrast": "Intense, rapid, homogeneous contrast enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 205,
      "heterogeneity": 0.35,
      "contrastRimThickness": "Solid Sellar Avid (10-30mm)",
      "edemaIndex": 0.05,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.7
    },
    "molecularMarkers": "TTF-1 (Thyroid Transcription Factor-1) positive (pathognomonic hallmark), S100 positive, GFAP variable",
    "histology": "Interlacing fascicles of spindle-shaped to plump pituicytes with eosinophilic cytoplasm and round nuclei",
    "clinicalPresentation": "Visual loss, headaches, hypopituitarism, hyperprolactinemia (stalk effect)",
    "treatment": "Transsphenoidal or transcranial surgical resection",
    "prognosis": "Excellent with complete resection"
  },
  {
    "id": "granular-cell-sella",
    "name": "Granular Cell Tumor of the Sellar Region",
    "category": "Sellar and Parasellar Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign posterior pituitary neoplasm",
    "prevalence": "Rare (<0.1%)",
    "ageGroup": "Adults (40-60 yrs)",
    "commonLocations": [
      "Neurohypophysis / Pituitary Stalk / Suprasellar"
    ],
    "mriFeatures": {
      "t1": "Well-circumscribed suprasellar mass, isointense to hypointense",
      "t2": "Isointense with sharp margins",
      "flair": "Optic chiasm compression",
      "contrast": "Strong homogeneous enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 195,
      "heterogeneity": 0.38,
      "contrastRimThickness": "Suprasellar Homogeneous",
      "edemaIndex": 0.05,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.68
    },
    "molecularMarkers": "TTF-1 positive, PAS positive diastase-resistant granules, CD68+, S100+",
    "histology": "Sheets and nests of large polygonal cells filled with coarse, eosinophilic, PAS-positive lysosomal granules",
    "clinicalPresentation": "Visual field loss, panhypopituitarism",
    "treatment": "Surgical resection",
    "prognosis": "Favorable"
  },
  {
    "id": "met-sclc",
    "name": "Brain Metastasis - Small Cell Lung Cancer (SCLC)",
    "category": "Metastatic Brain Tumors",
    "whoGrade": "Malignant Secondary Neuroendocrine Carcinoma",
    "gradeNum": 4,
    "malignancy": "Extremely aggressive secondary malignancy",
    "prevalence": "~15-20% of brain metastases; high early brain metastasis rate (>50% at 2 yrs)",
    "ageGroup": "Adults (50-70 yrs; Heavy smokers)",
    "commonLocations": [
      "Cortex, Subcortical White Matter, Cerebellum (frequently multiple, diffuse)"
    ],
    "mriFeatures": {
      "t1": "Multiple small, well-demarcated round nodules at gray-white junction, hypointense",
      "t2": "Iso- to hyperintense with massive, extensive peritumoral vasogenic edema",
      "flair": "Severe FLAIR hyperintense finger-like edema out of proportion to tiny nodule size",
      "contrast": "Intense, solid, homogeneous nodular or thin-ring enhancement; frequently >5-10 synchronous lesions",
      "dwi": "Marked restricted diffusion in solid nodules (extreme cellular packing with high N/C ratio)"
    },
    "radiomicSignature": {
      "intensityMean": 205,
      "heterogeneity": 0.75,
      "contrastRimThickness": "Multiple Tiny Solid Enhancing (3-15mm)",
      "edemaIndex": 0.95,
      "necrosisRatio": 0.15,
      "symmetryDeficit": 0.95
    },
    "molecularMarkers": "Synaptophysin positive, Chromogranin-A positive, CD56 positive, TTF-1 positive, Ki-67 >90%, high-level genomic loss of RB1 and TP53",
    "histology": "Sheets of small round/oval primitive cells with scant cytoplasm, fine salt-and-pepper chromatin, absent nucleoli, frequent crush artifact and necrosis",
    "clinicalPresentation": "Rapid onset headaches, multiple cranial nerve deficits, seizures, ataxia, confusion, altered mental status",
    "treatment": "Whole Brain Radiation Therapy (WBRT 30 Gy in 10 fractions) or Stereotactic Radiosurgery (SRS for selected cases) + Platinum-Etoposide Chemotherapy + Immunotherapy (Atezolizumab/Durvalumab); Prophylactic Cranial Irradiation (PCI) prevents brain relapse",
    "prognosis": "Poor; median overall survival ~6-12 months despite initial high chemo/radiosensitivity"
  },
  {
    "id": "met-ovarian",
    "name": "Brain Metastasis - Ovarian High-Grade Serous Carcinoma",
    "category": "Metastatic Brain Tumors",
    "whoGrade": "Malignant Secondary Carcinoma",
    "gradeNum": 4,
    "malignancy": "Secondary malignancy",
    "prevalence": "~2-3% of ovarian cancer patients",
    "ageGroup": "Females (50-70 yrs)",
    "commonLocations": [
      "Cerebral and Cerebellar Hemispheres"
    ],
    "mriFeatures": {
      "t1": "Cystic-solid mass with central necrosis, hypointense",
      "t2": "Hyperintense with surrounding edema",
      "flair": "Perilesional vasogenic edema",
      "contrast": "Thick, irregular ring and nodular enhancement",
      "dwi": "Variable diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 188,
      "heterogeneity": 0.78,
      "contrastRimThickness": "Thick Ring-Enhancing",
      "edemaIndex": 0.8,
      "necrosisRatio": 0.3,
      "symmetryDeficit": 0.85
    },
    "molecularMarkers": "WT1 positive, PAX8 positive, p53 mutant, CA-125 positive, BRCA1/2 mutation status",
    "histology": "Papillary and glandular architecture with marked cellular atypia and psammoma bodies",
    "clinicalPresentation": "Ataxia, headaches, seizures in a patient with history of advanced ovarian cancer",
    "treatment": "Stereotactic Radiosurgery (SRS) + PARP Inhibitors (Olaparib/Niraparib) / Platinum chemotherapy",
    "prognosis": "Median overall survival ~15-20 months with PARP inhibitors"
  },
  {
    "id": "met-thyroid",
    "name": "Brain Metastasis - Thyroid Carcinoma (Papillary / Follicular)",
    "category": "Metastatic Brain Tumors",
    "whoGrade": "Malignant Secondary Carcinoma",
    "gradeNum": 4,
    "malignancy": "Secondary malignancy with hemorrhage risk",
    "prevalence": "Rare (<1-2% of thyroid cancers)",
    "ageGroup": "Adults (40-65 yrs)",
    "commonLocations": [
      "Cerebral Cortex / Gray-White Junction"
    ],
    "mriFeatures": {
      "t1": "Heterogeneous mass with intrinsic T1-hyperintensity (intratumoral hemorrhage / colloid)",
      "t2": "Heterogeneously hyperintense with hemosiderin rim",
      "flair": "Prominent vasogenic edema",
      "contrast": "Intense, robust, vascular contrast enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 210,
      "heterogeneity": 0.8,
      "contrastRimThickness": "Hypervascular Hemorrhagic",
      "edemaIndex": 0.75,
      "necrosisRatio": 0.25,
      "symmetryDeficit": 0.85
    },
    "molecularMarkers": "TTF-1 positive, Thyroglobulin positive, PAX8 positive, BRAF V600E (in papillary) or RAS mutation",
    "histology": "Papillary structures with ground-glass Orphan Annie eye nuclei or follicular architecture filled with colloid",
    "clinicalPresentation": "Focal neurological deficit from hemorrhage, seizures, headache",
    "treatment": "Surgical resection + SRS + Radioactive Iodine (RAI-131 if iodine-avid) / Lenvatinib/Cabozantinib (VEGF-TKIs)",
    "prognosis": "Median survival ~18-30 months"
  },
  {
    "id": "avm-brain",
    "name": "Brain Arteriovenous Malformation (AVM)",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "High-Flow Vascular Malformation",
    "gradeNum": 1,
    "malignancy": "High-flow congenital vascular lesion",
    "prevalence": "~0.1% prevalence; leading cause of non-traumatic hemorrhage in young adults",
    "ageGroup": "Young Adults (20-40 yrs)",
    "commonLocations": [
      "Cerebral Hemispheres (Parietal/Frontal/Temporal)",
      "Cerebellum"
    ],
    "mriFeatures": {
      "t1": "Tangle of tightly packed serpentine vessel flow voids (bag of black worms) with mixed subacute/chronic hematoma",
      "t2": "Prominent honeycomb of flow voids with low/no parenchymal signal; minimal edema unless acute bleed",
      "flair": "Normal brain surrounding nidus; gliotic hemosiderin rim",
      "contrast": "Intense, rapid enhancement of the vascular nidus and dilated draining veins on CTA/MRA",
      "dwi": "Flow-related signal loss on DWI"
    },
    "radiomicSignature": {
      "intensityMean": 185,
      "heterogeneity": 0.9,
      "contrastRimThickness": "Bag of Black Worms Flow Voids (10-60mm)",
      "edemaIndex": 0.1,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.8
    },
    "molecularMarkers": "Endothelial genetic alterations (KRAS, BRAF, ENG, ACVRL1 in HHT)",
    "histology": "Plexus of abnormal, dysplastic arteries directly connecting to dilated arterialized veins without an intervening capillary bed; gliotic intervening parenchyma",
    "clinicalPresentation": "Intracranial hemorrhage (subarachnoid or intraparenchymal, ~50%), seizures (~30%), pulsatile tinnitus, progressive neurological steal syndrome",
    "treatment": "Multimodal treatment based on Spetzler-Martin Grade: Microsurgical resection / Endovascular embolization (Onyx/Squid) / Stereotactic Radiosurgery (Gamma Knife)",
    "prognosis": "Curative with complete nidus obliteration; untreated annual hemorrhage risk is ~2-4% per year"
  },
  {
    "id": "tuberculoma-cns",
    "name": "CNS Tuberculoma / Tuberculous Granuloma",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Chronic Infectious Granuloma (Tumor Mimic)",
    "gradeNum": 1,
    "malignancy": "Infectious mass lesion",
    "prevalence": "Common in TB-endemic regions (~10-30% of intracranial mass lesions in developing nations)",
    "ageGroup": "All ages (Children & Young Adults)",
    "commonLocations": [
      "Basal Cisterns",
      "Frontal / Parietal Lobes",
      "Cerebellum",
      "Brainstem"
    ],
    "mriFeatures": {
      "t1": "Non-caseating: hypointense. Caseating with solid center: isointense to hypointense on T1",
      "t2": "Caseating with solid center: MARKEDLY T2-HYPOINTENSE (T2-black) center with hyperintense peripheral edema rim; Caseating with liquid center: T2-bright",
      "flair": "Severe surrounding vasogenic edema and basal leptomeningeal thickening",
      "contrast": "Intense, thick, nodular or ring-enhancement; target sign on T2/Contrast (central calcification/punctate enhancement surrounded by hypointense rim)",
      "dwi": "Restricted diffusion in liquid caseous necrosis"
    },
    "radiomicSignature": {
      "intensityMean": 175,
      "heterogeneity": 0.75,
      "contrastRimThickness": "Thick Ring + T2-Dark Target Sign (5-25mm)",
      "edemaIndex": 0.85,
      "necrosisRatio": 0.35,
      "symmetryDeficit": 0.85
    },
    "molecularMarkers": "Acid-fast bacilli (Ziehl-Neelsen stain), GeneXpert MTB/RIF positive, elevated CSF ADA (Adenosine Deaminase), high CSF protein, low glucose",
    "histology": "Caseating necrotizing granulomas with central amorphous eosinophilic necrosis surrounded by epithelioid histiocytes, Langhans multinucleated giant cells, and lymphocytes",
    "clinicalPresentation": "Subacute fever, weight loss, night sweats, progressive headache, cranial nerve palsies (CN III, VI, VII from basal meningitis), seizures",
    "treatment": "Quadruple Anti-Tubercular Therapy (ATT: Isoniazid, Rifampin, Pyrazinamide, Ethambutol for 9-12 months) + high-dose Dexamethasone/Prednisone to control paradoxical reaction",
    "prognosis": "Curable with medical ATT; surgery reserved for acute hydrocephalus or diagnostic biopsy"
  },
  {
    "id": "neurocysticercosis",
    "name": "Neurocysticercosis (NCC - Racemose & Vesicular Stages)",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Parasitic Infection (Taenia solium)",
    "gradeNum": 1,
    "malignancy": "Most common parasitic infection of the human CNS",
    "prevalence": "Leading cause of acquired epilepsy in developing countries (>30% of adult-onset seizures worldwide)",
    "ageGroup": "All ages (Peak 15-40 yrs)",
    "commonLocations": [
      "Gray-White Junction (Parenchymal)",
      "Subarachnoid Space / Basal Cisterns (Racemose)",
      "Ventricles (4th ventricle)"
    ],
    "mriFeatures": {
      "t1": "Vesicular stage: small rounded CSF-like cyst with a pathognomonic 1-2 mm hyperintense mural nodule (THE SCOLEX / TAPEWORM HEAD)",
      "t2": "Hyperintense cyst with hypointense scolex (hole-with-a-dot sign); Colloid stage shows high T2 fluid with surrounding edema; Calcified stage shows blooming on SWI",
      "flair": "Severe edema during granular/colloidal degenerating stage; absent in vesicular and calcified stages",
      "contrast": "Vesicular stage: NO enhancement. Colloidal stage: Vivid ring-enhancement. Calcified stage: Non-enhancing calcified nodule",
      "dwi": "No restriction in cyst fluid"
    },
    "radiomicSignature": {
      "intensityMean": 160,
      "heterogeneity": 0.6,
      "contrastRimThickness": "Hole-With-A-Dot / Scolex (5-20mm)",
      "edemaIndex": 0.5,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.7
    },
    "molecularMarkers": "Serum/CSF Western Blot / ELISA positive for Taenia solium antibodies, stool microscopy for tapeworm proglottids/eggs",
    "histology": "Encysted larva (Cysticercus cellulosae) with a double-layered membrane and invaginated scolex with four suckers and hooklets; surrounded by eosinophilic and histiocytic inflammation",
    "clinicalPresentation": "Adult-onset focal or generalized tonic-clonic seizures (>70%), severe chronic headaches, raised ICP/hydrocephalus from intraventricular cysts",
    "treatment": "Anthelmintic therapy (Albendazole + Praziquantel) CO-ADMINISTERED WITH Corticosteroids (Dexamethasone to prevent brain edema during parasite die-off) + Antiseizure medications; Endoscopic cyst removal for intraventricular NCC",
    "prognosis": "Excellent with anthelmintic therapy and seizure control"
  },
  {
    "id": "toxoplasmosis-cns",
    "name": "CNS Toxoplasmosis",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Opportunistic Protozoal Infection (Toxoplasma gondii)",
    "gradeNum": 1,
    "malignancy": "Most common opportunistic intracranial mass lesion in HIV/AIDS (CD4 < 100/uL)",
    "prevalence": "Common in immunocompromised patients",
    "ageGroup": "Adults (Immunocompromised / HIV-positive)",
    "commonLocations": [
      "Basal Ganglia (Caudate / Putamen / Thalamus >75%)",
      "Corticomedullary Junction",
      "Hemispheric White Matter"
    ],
    "mriFeatures": {
      "t1": "Multiple hypointense to isointense nodular/ring lesions in basal ganglia and corticomedullary junction",
      "t2": "Heterogeneously hyperintense with target appearance and extensive surrounding vasogenic brain edema",
      "flair": "Massive surrounding vasogenic edema",
      "contrast": "PATHOGNOMONIC ECCENTRIC TARGET SIGN (smooth rim-enhancement with an eccentric, nodular enhancing projection along the internal wall)",
      "dwi": "Elevated/facilitated ADC in central necrotic core (differentiates from pyogenic abscess which has low ADC)"
    },
    "radiomicSignature": {
      "intensityMean": 180,
      "heterogeneity": 0.8,
      "contrastRimThickness": "Eccentric Target Sign / Multiple (5-30mm)",
      "edemaIndex": 0.88,
      "necrosisRatio": 0.4,
      "symmetryDeficit": 0.88
    },
    "molecularMarkers": "Toxoplasma gondii IgG serology positive, CSF Toxoplasma PCR positive, CD4 count <100 cells/uL, Thallium-201 SPECT cold (distinguishes from lymphoma which is hot)",
    "histology": "Central vascular thrombosis and coagulative necrosis surrounded by a hypervascular inflammatory capsule containing encysted bradyzoites and free tachyzoites (Giemsa stain)",
    "clinicalPresentation": "Subacute headache, confusion, fever, lethargy, focal hemiparesis, cranial neuropathies in an immunocompromised host",
    "treatment": "Empiric dual therapy: Pyrimethamine + Sulfadiazine + Leucovorin (folinic acid) OR Trimethoprim-Sulfamethoxazole (TMP-SMX) for 6 weeks; dramatic clinical and radiologic improvement within 10-14 days confirms diagnosis",
    "prognosis": "Excellent response to antiparasitic therapy; secondary maintenance prophylaxis required until CD4 > 200/uL on ART"
  },
  {
    "id": "sarcoidosis-cns",
    "name": "Neurosarcoidosis",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Non-Caseating Granulomatous Inflammatory Disease",
    "gradeNum": 1,
    "malignancy": "Systemic granulomatous disease (~5-10% of sarcoidosis patients have CNS involvement)",
    "prevalence": "Young to Middle-aged Adults (20-50 yrs; Female > Male)",
    "ageGroup": "Adults (20-50 yrs)",
    "commonLocations": [
      "Leptomeninges / Basal Cisterns",
      "Pituitary Stalk & Hypothalamus",
      "Cranial Nerves (CN VII, II)",
      "Brainstem"
    ],
    "mriFeatures": {
      "t1": "Thick, nodular leptomeningeal enhancement along basal cisterns and infundibulum, isointense",
      "t2": "T2-hypointense to isointense dural/leptomeningeal thickening; perivascular Virchow-Robin space hyperintensities",
      "flair": "Perilesional brain edema along cranial nerves and hypothalamus",
      "contrast": "Intense, diffuse, nodular and smooth leptomeningeal, dural, and cranial nerve enhancement (leptomeningeal enhancement)",
      "dwi": "No restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 190,
      "heterogeneity": 0.55,
      "contrastRimThickness": "Nodular Leptomeningeal / Basal (5-30mm)",
      "edemaIndex": 0.35,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.75
    },
    "molecularMarkers": "Serum/CSF Angiotensin-Converting Enzyme (ACE) elevated, elevated CSF sIL-2R, non-caseating granulomas on biopsy, chest CT showing bilateral hilar lymphadenopathy",
    "histology": "Discrete, tightly formed, non-caseating epithelioid cell granulomas with Langhans giant cells, asteroid bodies, and Schaumann bodies without central necrosis",
    "clinicalPresentation": "Heerfordt Syndrome (uveoparotid fever: uveitis, parotitis, facial nerve palsy) + Diabetes insipidus (hypothalamic/infundibular involvement), visual loss, aseptic meningitis",
    "treatment": "High-dose systemic Corticosteroids (Prednisone / IV Methylprednisolone) + Immunosuppressants (Methotrexate, Azathioprine) + Anti-TNF-alpha biologics (Infliximab - highly effective in refractory neurosarcoidosis)",
    "prognosis": "Favorable in steroid-responsive cases; chronic relapsing course requires maintenance immunosuppression"
  },
  {
    "id": "capillary-telangiectasia",
    "name": "Capillary Telangiectasia of the Pons",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Benign Low-Flow Vascular Malformation",
    "gradeNum": 1,
    "malignancy": "Benign asymptomatic low-flow vascular anomaly",
    "prevalence": "~0.4-0.7% on autopsies / MRI",
    "ageGroup": "Adults (30-60 yrs; Incidental)",
    "commonLocations": [
      "Pons / Brainstem Midline"
    ],
    "mriFeatures": {
      "t1": "Normal or subtle hypointense focus on unenhanced T1",
      "t2": "Isointense to slightly hyperintense on T2; characteristic blooming / susceptibility loss on GRE/SWI",
      "flair": "Normal surrounding brain without edema or mass effect",
      "contrast": "Classic faint brush-like or stippled contrast enhancement on post-gadolinium T1",
      "dwi": "No restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 150,
      "heterogeneity": 0.4,
      "contrastRimThickness": "Brush-Like / Stippled (3-15mm)",
      "edemaIndex": 0.0,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.5
    },
    "molecularMarkers": "Dilated thin-walled capillaries with intervening normal brain parenchyma",
    "histology": "Nests of ectatic capillaries lined by single layer of endothelium separated by normal neural brainstem tissue",
    "clinicalPresentation": "Asymptomatic incidental finding; rarely associated with dizziness or headache",
    "treatment": "No treatment required / Reassurance (do not biopsy or resect)",
    "prognosis": "Benign normal life expectancy"
  },
  {
    "id": "dva",
    "name": "Developmental Venous Anomaly (DVA / Venous Angioma)",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Extreme Anatomical Venous Variant",
    "gradeNum": 1,
    "malignancy": "Most common intracranial vascular malformation (~50-60% of all vascular anomalies)",
    "prevalence": "Benign congenital anatomical variation",
    "ageGroup": "All ages (Incidental finding in ~2-3% of population)",
    "commonLocations": [
      "Frontal Lobe (Periventricular white matter)",
      "Cerebellar Hemisphere"
    ],
    "mriFeatures": {
      "t1": "Linear transcerebral collecting vein draining toward ependyma or cortical sinus",
      "t2": "T2 flow void corresponding to collecting vein; normal brain parenchyma",
      "flair": "Normal surrounding brain",
      "contrast": "PATHOGNOMONIC CAPUT MEDUSAE SIGN (spoke-wheel radical cluster of medullary veins converging into a single dilated collector)",
      "dwi": "No diffusion restriction"
    },
    "radiomicSignature": {
      "intensityMean": 165,
      "heterogeneity": 0.5,
      "contrastRimThickness": "Caput Medusae / Medullary Radial",
      "edemaIndex": 0.0,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.55
    },
    "molecularMarkers": "Anatomical venous variation providing normal venous drainage of adjacent brain tissue",
    "histology": "Radial tributaries of medullary veins converging into a dilated transcerebral or subependymal draining vein",
    "clinicalPresentation": "Asymptomatic in >95%; provides essential normal brain drainage; often associated with adjacent cavernoma (CCM)",
    "treatment": "CRITICAL: NEVER SURGICALLY RESECT OR EMBOLIZE A DVA (resection causes massive fatal venous infarction)",
    "prognosis": "Benign; normal life expectancy"
  },
  {
    "id": "pineal-cyst",
    "name": "Pineal Parenchymal Cyst",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Benign Neuroepithelial Cyst",
    "gradeNum": 1,
    "malignancy": "Common incidental finding (~1-4% of brain MRIs)",
    "prevalence": "Benign asymptomatic pineal cyst",
    "ageGroup": "Young Adults (20-40 yrs; Female > Male 3:1)",
    "commonLocations": [
      "Pineal Gland"
    ],
    "mriFeatures": {
      "t1": "Well-circumscribed unilocular round/oval cyst in pineal gland (<15mm), isointense to hypointense",
      "t2": "Homogeneously hyperintense fluid with smooth thin wall",
      "flair": "Isointense with tectal plate preservation",
      "contrast": "Smooth, thin (<2mm), uniform peripheral rim enhancement of displaced normal pineal gland; NO nodular internal enhancement",
      "dwi": "No restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 170,
      "heterogeneity": 0.2,
      "contrastRimThickness": "Smooth Thin Peripheral Rim (<2mm)",
      "edemaIndex": 0.0,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.5
    },
    "molecularMarkers": "Normal pineal parenchymal lining with Rosenthal fibers in gliotic wall",
    "histology": "Three-layered cyst wall: inner hypocellular glial layer, middle pineal parenchymal layer with calcification, outer fibrous capsule",
    "clinicalPresentation": "Asymptomatic in >95%; large cysts (>15-20mm) can cause Parinaud syndrome or aqueductal stenosis",
    "treatment": "Conservative observation / Serial MRI; Endoscopic fenestration or resection only if symptomatic hydrocephalus",
    "prognosis": "Benign; stable over lifetime"
  },
  {
    "id": "cryptococcoma",
    "name": "CNS Cryptococcoma / Gelatinous Pseudocysts (Soap-Bubble)",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Opportunistic Fungal Infection (Cryptococcus neoformans)",
    "gradeNum": 1,
    "malignancy": "Opportunistic fungal infection in immunocompromised / HIV-positive",
    "prevalence": "Common in advanced HIV (CD4 < 100/uL)",
    "ageGroup": "Adults (Immunocompromised / Transplant / Cirrhosis)",
    "commonLocations": [
      "Basal Ganglia (Dilated Virchow-Robin spaces)",
      "Midbrain",
      "Cerebellum"
    ],
    "mriFeatures": {
      "t1": "Multiple punctate round cysts along Virchow-Robin spaces in basal ganglia (T1-hypointense)",
      "t2": "PATHOGNOMONIC SOAP-BUBBLE LESIONS (clusters of hyperintense mucoid/gelatinous pseudocysts in basal ganglia)",
      "flair": "Variable perilesional edema",
      "contrast": "Non-enhancing or faint peripheral rim enhancement (due to lack of immune response in AIDS); solid cryptococcomas enhance",
      "dwi": "Facilitated diffusion in mucinous cysts"
    },
    "radiomicSignature": {
      "intensityMean": 160,
      "heterogeneity": 0.65,
      "contrastRimThickness": "Soap-Bubble Basal Ganglia",
      "edemaIndex": 0.25,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.7
    },
    "molecularMarkers": "India Ink preparation positive (encapsulated budding yeast in CSF), Cryptococcal Antigen (CrAg) lateral flow assay positive (>98% sensitive)",
    "histology": "Masses of encapsulated yeast forms (Cryptococcus) expanding perivascular spaces with abundant capsular mucopolysaccharides (mucicarmine positive)",
    "clinicalPresentation": "Subacute headache, fever, neck stiffness, cranial neuropathies, elevated ICP, cognitive changes",
    "treatment": "Induction: Liposomal Amphotericin B + Flucytosine for 2 weeks, followed by consolidation Fluconazole (400-800 mg daily for 8 weeks) + maintenance prophylaxis; therapeutic lumbar punctures to manage high opening pressure",
    "prognosis": "Guarded in untreated; curable with prompt antifungal therapy"
  },
  {
    "id": "aspergilloma-cns",
    "name": "CNS Aspergilloma / Invasive Fungal Granuloma",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Opportunistic Invasive Fungal Infection (Aspergillus fumigatus)",
    "gradeNum": 1,
    "malignancy": "Aggressive angioinvasive fungal mass",
    "prevalence": "Severe immunocompromised hosts (Neutropenia, Leukemia, Bone marrow transplant)",
    "ageGroup": "All ages (Immunocompromised / Diabetic ketoacidosis)",
    "commonLocations": [
      "Frontal Lobe",
      "Temporal Lobe (extension from sphenoid/ethmoid sinuses)",
      "Basal Ganglia"
    ],
    "mriFeatures": {
      "t1": "Ill-defined mass with internal hypointensity and ring components",
      "t2": "CHARACTERISTIC MARKED T2-HYPOINTENSITY (T2-black) in wall and solid fungal core (due to paramagnetic fungal elements: iron, manganese, zinc)",
      "flair": "Extensive surrounding vasogenic edema with ring enhancement",
      "contrast": "Thick, irregular, nodular peripheral ring-enhancement with multiple targetoid satellite abscesses",
      "dwi": "Restricted diffusion in central fungal hyphal elements"
    },
    "radiomicSignature": {
      "intensityMean": 175,
      "heterogeneity": 0.85,
      "contrastRimThickness": "T2-Dark Wall Ring (10-40mm)",
      "edemaIndex": 0.9,
      "necrosisRatio": 0.4,
      "symmetryDeficit": 0.88
    },
    "molecularMarkers": "Serum/CSF Galactomannan antigen positive, 1,3-beta-D-glucan positive, fungal culture/PCR positive",
    "histology": "Dichotomously branching (45-degree angle) septate hyphae with vascular thrombosis, vessel wall invasion, and coagulative necrosis",
    "clinicalPresentation": "Fever, acute stroke-like focal neurological deficit (due to fungal angioinvasion and thrombosis), rapidly progressive headache",
    "treatment": "High-dose IV Voriconazole (or Isavuconazole) is FIRST-LINE + urgent surgical debridement/resection of mass lesion; control underlying immunosuppression",
    "prognosis": "High mortality (~40-60%) due to angioinvasion and fatal intracranial hemorrhage"
  },
  {
    "id": "igg4-pachymeningitis",
    "name": "IgG4-Related Hypertrophic Pachymeningitis",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Fibro-Inflammatory Immune-Mediated Disorder",
    "gradeNum": 1,
    "malignancy": "Systemic IgG4-related fibro-inflammatory disease",
    "prevalence": "Rare autoimmune condition",
    "ageGroup": "Middle-aged to Elderly Adults (50-70 yrs; Male > Female)",
    "commonLocations": [
      "Tentorium Cerebelli",
      "Dural Convexity",
      "Cavernous Sinus / Skull Base Dura"
    ],
    "mriFeatures": {
      "t1": "Thick, sheet-like plaque dural thickening (>5-10 mm), isointense to hypointense",
      "t2": "PROMINENT T2-HYPOINTENSE DURAL THICKENING (due to dense storiform fibrosis and collagen deposition)",
      "flair": "Mild perilesional brain edema",
      "contrast": "Intense, diffuse, linear, nodular, homogeneous dural contrast enhancement with thick dural tail",
      "dwi": "No restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 195,
      "heterogeneity": 0.45,
      "contrastRimThickness": "Plaque Dural T2-Dark Thickening",
      "edemaIndex": 0.2,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.82
    },
    "molecularMarkers": "Elevated serum IgG4 levels (>135 mg/dL), IgG4/IgG positive plasma cell ratio >40% on biopsy (>10-30 IgG4+ plasma cells/HPF)",
    "histology": "Dense lymphoplasmacytic infiltrate rich in IgG4+ plasma cells, storiform (cartwheel) fibrosis, and obliterative phlebitis",
    "clinicalPresentation": "Chronic intractable daily headaches, multiple cranial neuropathies (CN II visual loss, CN III/IV/VI diplopia, CN VIII hearing loss), ataxia",
    "treatment": "High-dose Corticosteroids (Prednisone 0.6-1.0 mg/kg/day) produce dramatic, rapid dural thinning and symptom relief; Rituximab (anti-CD20) for maintenance/refractory cases",
    "prognosis": "Excellent response to steroids and rituximab; relapses common if immunosuppression tapered prematurely"
  },
  {
    "id": "fcd-type2b",
    "name": "Focal Cortical Dysplasia Type IIb (Taylor-Type with Balloon Cells)",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Congenital Cortical Malformation (Epileptogenic Tumor Mimic)",
    "gradeNum": 1,
    "malignancy": "Most common surgically remediable cause of intractable pediatric focal epilepsy",
    "prevalence": "Benign malformation of cortical development",
    "ageGroup": "Children & Young Adults",
    "commonLocations": [
      "Frontal Lobe (Bottom of sulcus predilection >75%)",
      "Parietal Lobe"
    ],
    "mriFeatures": {
      "t1": "Focal cortical thickening and blurring of the gray-white matter junction, subtle hypointensity",
      "t2": "PATHOGNOMONIC TRANSMANTLE SIGN (tapering wedge of hyperintensity extending from cortex all the way to ventricular ependyma on T2/FLAIR)",
      "flair": "Cortical hyperintensity with transmantle linear stalk to lateral ventricle",
      "contrast": "NO CONTRAST ENHANCEMENT (critical feature differentiating from cortical glioma/DNT)",
      "dwi": "No restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 155,
      "heterogeneity": 0.4,
      "contrastRimThickness": "Transmantle Sign Cortical",
      "edemaIndex": 0.05,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.6
    },
    "molecularMarkers": "Somatic mosaic mutations in mTOR pathway genes (MTOR, PIK3CA, AKT3, DEPDC5), NeuN+, Vimentin positive in balloon cells",
    "histology": "Complete disruption of cortical laminations (layers I-VI lost) with dysmorphic cytomegalic neurons and pathognomonic large, pale Balloon Cells with glassy eosinophilic cytoplasm",
    "clinicalPresentation": "Severe, pharmacoresistant focal epilepsy (frequent daily motor seizures, epilepsia partialis continua), developmental delay",
    "treatment": "Complete microsurgical resection of the epileptogenic dysplastic zone (guided by intraoperative ECoG electrocorticography) achieves >85-90% seizure freedom",
    "prognosis": "Curative for epilepsy with complete surgical resection; benign non-neoplastic biology"
  },
  {
    "id": "met-breast-tnbc",
    "name": "Brain Metastasis - Triple Negative Breast Carcinoma (TNBC)",
    "category": "Metastatic Brain Tumors",
    "whoGrade": "Malignant Secondary Carcinoma",
    "gradeNum": 4,
    "malignancy": "Extremely aggressive secondary malignancy",
    "prevalence": "High propensity for CNS recurrence in TNBC (~30-40%)",
    "ageGroup": "Young Females (30-55 yrs; BRCA1 carrier association)",
    "commonLocations": [
      "Frontal and Parietal Lobes",
      "Basal Ganglia",
      "Cerebellum"
    ],
    "mriFeatures": {
      "t1": "Rapidly enlarging round mass with central liquefactive necrosis, hypointense",
      "t2": "Heterogeneously hyperintense with massive, severe digitated vasogenic edema",
      "flair": "Extensive perilesional FLAIR edema",
      "contrast": "Thick, irregular, ragged peripheral ring-enhancement surrounding central necrosis",
      "dwi": "Facilitated central ADC; restricted diffusion in cellular rim"
    },
    "radiomicSignature": {
      "intensityMean": 188,
      "heterogeneity": 0.85,
      "contrastRimThickness": "Ragged Thick Ring (15-40mm)",
      "edemaIndex": 0.92,
      "necrosisRatio": 0.45,
      "symmetryDeficit": 0.92
    },
    "molecularMarkers": "ER negative, PR negative, HER2 negative, CK5/6 positive, EGFR positive, high Ki-67 (>80%), BRCA1 germline mutations common",
    "histology": "High-grade poorly differentiated invasive ductal carcinoma with sheets of anaplastic cells, atypical mitoses, and central necrosis",
    "clinicalPresentation": "Rapidly progressive neurological deficits, seizures, headaches, early neurological deterioration",
    "treatment": "Stereotactic Radiosurgery (SRS) + Platinum/PARP inhibitors (Talazoparib/Olaparib for BRCA-mutant) + Antibody-Drug Conjugates (Sacituzumab govitecan - Trop-2 directed ADC)",
    "prognosis": "Guarded; median overall survival ~8-14 months; ADCs improving outcomes"
  },
  {
    "id": "met-prostate-dural",
    "name": "Brain Metastasis - Prostate Carcinoma (Dural / Skull Base)",
    "category": "Metastatic Brain Tumors",
    "whoGrade": "Malignant Secondary Adenocarcinoma",
    "gradeNum": 4,
    "malignancy": "Secondary malignancy with osteoblastic predilection",
    "prevalence": "Rare (<1-2% of prostate cancer patients; late-stage CRPC)",
    "ageGroup": "Older Males (60-80 yrs)",
    "commonLocations": [
      "Calvarium (Skull bone)",
      "Dura Mater / Sphenoid Bone (Pachymeningeal)"
    ],
    "mriFeatures": {
      "t1": "Dense osteoblastic (sclerotic) thickening of the skull bone with soft-tissue dural mass",
      "t2": "Hypointense to isointense bone marrow replacement with overlying dural thickening",
      "flair": "Mild perilesional brain edema",
      "contrast": "Intense, sheet-like dural and bony contrast enhancement closely mimicking meningioma",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 195,
      "heterogeneity": 0.6,
      "contrastRimThickness": "Osteosclerotic Dural Mass (15-45mm)",
      "edemaIndex": 0.3,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.82
    },
    "molecularMarkers": "PSA (Prostate-Specific Antigen) positive, NKX3.1 positive, AR (Androgen Receptor) positive, elevated serum PSA",
    "histology": "Metastatic adenocarcinoma forming small crowded glands with prominent nucleoli invading bone trabeculae and dura",
    "clinicalPresentation": "Localized skull lump, cranial neuropathies (CN VI diplopia in skull base lesions), headache",
    "treatment": "Stereotactic Radiosurgery (SRS) + Next-generation Androgen Receptor Pathway Inhibitors (Enzalutamide, Abiraterone) / Lutetium-177 PSMA radioligand therapy",
    "prognosis": "Median overall survival ~12-18 months in castration-resistant setting"
  },
  {
    "id": "met-cup",
    "name": "Brain Metastasis - Carcinoma of Unknown Primary (CUP)",
    "category": "Metastatic Brain Tumors",
    "whoGrade": "Malignant Secondary Carcinoma",
    "gradeNum": 4,
    "malignancy": "Secondary brain tumor without identified primary source (~10-15% of all brain metastasis presentations)",
    "prevalence": "Common initial presentation of occult cancer",
    "ageGroup": "Adults (50-75 yrs)",
    "commonLocations": [
      "Gray-White Matter Junction (Single or Multiple)"
    ],
    "mriFeatures": {
      "t1": "Well-demarcated round hypointense mass at gray-white interface with central necrosis",
      "t2": "Hyperintense with extensive surrounding finger-like vasogenic edema",
      "flair": "Severe peritumoral FLAIR hyperintensity",
      "contrast": "Intense, smooth or nodular ring-enhancement",
      "dwi": "Facilitated central ADC"
    },
    "radiomicSignature": {
      "intensityMean": 188,
      "heterogeneity": 0.82,
      "contrastRimThickness": "Ring-Enhancing Gray-White (10-35mm)",
      "edemaIndex": 0.9,
      "necrosisRatio": 0.35,
      "symmetryDeficit": 0.9
    },
    "molecularMarkers": "Comprehensive IHC diagnostic panel (CK7, CK20, TTF-1, CDX2, GATA3, PAX8, PSA, S100), circulating tumor DNA (ctDNA) Next-Gen Sequencing",
    "histology": "Poorly differentiated metastatic carcinoma or adenocarcinoma requiring immunohistochemical profiling to elucidate primary site",
    "clinicalPresentation": "New onset seizure, headache, focal neurological deficit in an adult with no prior known cancer history",
    "treatment": "Stereotactic Radiosurgery (SRS) +/- Surgical resection for solitary mass + whole-body PET-CT / CT chest-abdomen-pelvis to identify primary source",
    "prognosis": "Prognosis depends on underlying identified primary cancer histology and molecular drivers"
  },
  {
    "id": "cavernous-hemangioma",
    "name": "Cavernous Hemangioma (Cavernoma of Brain)",
    "category": "Mesenchymal Tumors",
    "whoGrade": "Benign Vascular Hamartoma",
    "gradeNum": 1,
    "malignancy": "Benign low-flow vascular malformation",
    "prevalence": "~0.5% of general population",
    "ageGroup": "Adults (20-45 yrs)",
    "commonLocations": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Brainstem (Pons)",
      "Basal Ganglia"
    ],
    "mriFeatures": {
      "t1": "Well-demarcated popcorn lesion with mixed T1 signals from subacute methemoglobin",
      "t2": "Reticulated popcorn appearance with a complete, hypointense hemosiderin rim on T2/SWI",
      "flair": "No edema unless recent acute bleed",
      "contrast": "Minimal to no enhancement",
      "dwi": "Blooming artifact on SWI"
    },
    "radiomicSignature": {
      "intensityMean": 160,
      "heterogeneity": 0.9,
      "contrastRimThickness": "Popcorn Hemosiderin Rim",
      "edemaIndex": 0.05,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.65
    },
    "molecularMarkers": "CCM1 (KRIT1), CCM2, CCM3 gene mutations",
    "histology": "Clusters of grossly dilated sinusoidal vascular channels without intervening brain parenchyma",
    "clinicalPresentation": "Focal seizures, microhemorrhages, chronic headache",
    "treatment": "Observation / Microsurgical resection for refractory epilepsy or progressive deficits",
    "prognosis": "Excellent with complete resection"
  },
  {
    "id": "angiosarcoma-cns",
    "name": "Primary Intracranial Angiosarcoma",
    "category": "Mesenchymal Tumors",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "High-grade malignant endothelial vascular sarcoma",
    "prevalence": "Extremely rare (<0.1%)",
    "ageGroup": "Adults (40-65 yrs)",
    "commonLocations": [
      "Cerebral Hemispheres",
      "Dural Surface"
    ],
    "mriFeatures": {
      "t1": "Large, highly hemorrhagic, infiltrative mass with multiple fluid levels",
      "t2": "Heterogeneous with extensive flow voids and massive peritumoral edema",
      "flair": "Severe infiltrative edema",
      "contrast": "Intense, rapid, heterogeneous enhancement",
      "dwi": "Restricted diffusion in solid sarcoma components"
    },
    "radiomicSignature": {
      "intensityMean": 188,
      "heterogeneity": 0.92,
      "contrastRimThickness": "Hypervascular Hemorrhagic",
      "edemaIndex": 0.88,
      "necrosisRatio": 0.45,
      "symmetryDeficit": 0.94
    },
    "molecularMarkers": "CD31 positive, ERG positive, CD34 positive, high Ki-67 (>60%)",
    "histology": "Anaplastic endothelial cells forming irregular vascular channels with brisk atypical mitoses and necrosis",
    "clinicalPresentation": "Rapid onset apoplexy, focal deficits, catastrophic intracranial bleeding",
    "treatment": "Surgical resection + high-dose Radiotherapy + Taxane / Anthracycline chemotherapy",
    "prognosis": "Extremely poor; median survival <6-9 months"
  },
  {
    "id": "epithelioid-hemangioendothelioma",
    "name": "Epithelioid Hemangioendothelioma (EHE)",
    "category": "Mesenchymal Tumors",
    "whoGrade": "WHO Grade III",
    "gradeNum": 3,
    "malignancy": "Malignant vascular neoplasm of intermediate-to-high grade",
    "prevalence": "Rare (<0.1%)",
    "ageGroup": "Young Adults (20-40 yrs)",
    "commonLocations": [
      "Dura Mater",
      "Skull Base",
      "Cerebral Parenchyma"
    ],
    "mriFeatures": {
      "t1": "Lobulated dural-based or parenchymal mass, isointense to hypointense",
      "t2": "Heterogeneously hyperintense with myxoid/hyaline matrix",
      "flair": "Moderate surrounding vasogenic edema",
      "contrast": "Strong, heterogeneous contrast enhancement",
      "dwi": "Mild restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 180,
      "heterogeneity": 0.72,
      "contrastRimThickness": "Lobulated Enhancing",
      "edemaIndex": 0.45,
      "necrosisRatio": 0.1,
      "symmetryDeficit": 0.8
    },
    "molecularMarkers": "WWTR1-CAMTA1 gene fusion (hallmark in >90%), CD31+, CD34+, ERG+",
    "histology": "Cords and nests of epithelioid endothelial cells with intracytoplasmic lumina containing erythrocytes (vacuoles/blister cells)",
    "clinicalPresentation": "Headaches, focal seizures, cranial neuropathies",
    "treatment": "Complete surgical resection + adjuvant Radiotherapy",
    "prognosis": "Moderate; prone to local recurrence and distant metastasis"
  },
  {
    "id": "chondroid-chordoma",
    "name": "Chondroid Chordoma",
    "category": "Mesenchymal Tumors",
    "whoGrade": "WHO Grade II",
    "gradeNum": 2,
    "malignancy": "Chordoma variant with abundant cartilaginous matrix",
    "prevalence": "~30% of spheno-occipital chordomas",
    "ageGroup": "Adults (35-55 yrs)",
    "commonLocations": [
      "Spheno-occipital Clivus / Skull Base"
    ],
    "mriFeatures": {
      "t1": "Destructive midline clival mass, hypointense with chondroid calcifications",
      "t2": "Markedly T2-hyperintense with internal lobulated chondroid low-signal septa",
      "flair": "Hyperintense with pontine displacement",
      "contrast": "Heterogeneous honeycomb and peripheral ring-like enhancement",
      "dwi": "Facilitated diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 190,
      "heterogeneity": 0.7,
      "contrastRimThickness": "Honeycomb T2-Bright Clival",
      "edemaIndex": 0.35,
      "necrosisRatio": 0.1,
      "symmetryDeficit": 0.82
    },
    "molecularMarkers": "Brachyury positive, S100 positive, Cytokeratin positive",
    "histology": "Physaliferous chordoma cells intermingled with areas of true hyaline cartilage matrix",
    "clinicalPresentation": "Diplopia (CN VI palsy), retro-orbital headache",
    "treatment": "Endoscopic Endonasal Skull Base Resection + Proton Beam Radiotherapy (74 CGE)",
    "prognosis": "Significantly better prognosis than conventional chordoma; 10-year survival ~70%"
  },
  {
    "id": "dedifferentiated-chordoma",
    "name": "Dedifferentiated Chordoma",
    "category": "Mesenchymal Tumors",
    "whoGrade": "WHO Grade III",
    "gradeNum": 3,
    "malignancy": "Extremely high-grade aggressive biphasic malignancy",
    "prevalence": "~5% of chordomas (often post-radiation transformation)",
    "ageGroup": "Adults (45-70 yrs)",
    "commonLocations": [
      "Clivus / Sacrococcygeal Region"
    ],
    "mriFeatures": {
      "t1": "Large, highly destructive skull base mass with massive soft tissue extension and rapid bone destruction",
      "t2": "Heterogeneous with necrosis and loss of classic high T2 signal",
      "flair": "Severe surrounding brainstem and temporal edema",
      "contrast": "Thick, irregular, nodular enhancement",
      "dwi": "Marked restricted diffusion in sarcomatous component"
    },
    "radiomicSignature": {
      "intensityMean": 182,
      "heterogeneity": 0.88,
      "contrastRimThickness": "Destructive Heterogeneous",
      "edemaIndex": 0.75,
      "necrosisRatio": 0.4,
      "symmetryDeficit": 0.92
    },
    "molecularMarkers": "Loss of Brachyury expression in the high-grade sarcomatous component, TP53 mutations, INI1 loss",
    "histology": "Biphasic: classic chordoma juxtaposed with high-grade spindle cell sarcoma or undifferentiated pleomorphic sarcoma",
    "clinicalPresentation": "Rapid neurological deterioration, severe intractable skull base pain, cranial neuropathies",
    "treatment": "Maximal surgical debulking + high-dose Radiation + Sarcoma Chemotherapy (Doxorubicin/Ifosfamide)",
    "prognosis": "Extremely poor; median survival <12 months"
  },
  {
    "id": "skullbase-chondrosarcoma",
    "name": "Skull Base Chondrosarcoma (Grade 1-2)",
    "category": "Mesenchymal Tumors",
    "whoGrade": "WHO Grade I-II",
    "gradeNum": 2,
    "malignancy": "Malignant cartilaginous neoplasm",
    "prevalence": "~6% of skull base neoplasms",
    "ageGroup": "Adults (30-50 yrs)",
    "commonLocations": [
      "Petroclival Synchondrosis (off-midline clivus)"
    ],
    "mriFeatures": {
      "t1": "Off-midline destructive mass centered at petroclival fissure, hypointense",
      "t2": "Extremely T2-hyperintense with rings and arcs chondroid calcifications",
      "flair": "Hyperintense mass with brainstem compression",
      "contrast": "Heterogeneous peripheral and nodular enhancement",
      "dwi": "Facilitated diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 192,
      "heterogeneity": 0.72,
      "contrastRimThickness": "Rings & Arcs Off-Midline",
      "edemaIndex": 0.3,
      "necrosisRatio": 0.05,
      "symmetryDeficit": 0.82
    },
    "molecularMarkers": "IDH1 or IDH2 mutations common (~70-80%), S100 positive, Brachyury NEGATIVE",
    "histology": "Lobules of hyaline cartilage with atypical chondrocytes, binucleated cells, and chondroid matrix",
    "clinicalPresentation": "CN VI, VII, VIII palsies, dizziness, facial numbness",
    "treatment": "Surgical resection + Proton beam radiotherapy",
    "prognosis": "Significantly better than chordoma; 10-year overall survival >85-90%"
  },
  {
    "id": "osteosarcoma-skull",
    "name": "Primary Osteosarcoma of the Skull Base",
    "category": "Mesenchymal Tumors",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "High-grade malignant bone-forming sarcoma",
    "prevalence": "Rare (<1% of all osteosarcomas; ~20% radiation-induced)",
    "ageGroup": "Young Adults (20-40 yrs) & Post-Radiation (50-70 yrs)",
    "commonLocations": [
      "Calvarium / Sphenoid / Temporal Bone"
    ],
    "mriFeatures": {
      "t1": "Destructive bony mass with osteoid matrix, mixed signal",
      "t2": "Heterogeneous with dense osteoid mineralized low-signal areas and soft-tissue mass",
      "flair": "Severe surrounding vasogenic edema",
      "contrast": "Intense, heterogeneous sunburst / patchy enhancement",
      "dwi": "Restricted diffusion in cellular osteoid portions"
    },
    "radiomicSignature": {
      "intensityMean": 185,
      "heterogeneity": 0.88,
      "contrastRimThickness": "Sunburst Mineralized",
      "edemaIndex": 0.75,
      "necrosisRatio": 0.35,
      "symmetryDeficit": 0.9
    },
    "molecularMarkers": "SATB2 positive, Osteocalcin positive, TP53 mutations, complex genomic karyotype",
    "histology": "Malignant mesenchymal spindle cells directly producing neoplastic osteoid (bone matrix), brisk mitoses, necrosis",
    "clinicalPresentation": "Rapidly enlarging painful scalp/skull mass, proptosis, cranial nerve palsies",
    "treatment": "Complete wide surgical resection with clear margins + high-dose Neoadjuvant/Adjuvant Chemotherapy (MAP: Methotrexate, Doxorubicin, Cisplatin)",
    "prognosis": "Poor; 5-year survival ~35-45%"
  },
  {
    "id": "cns-ewing-sarcoma",
    "name": "Primary CNS Ewing Sarcoma / pPNET",
    "category": "Mesenchymal Tumors",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "High-grade malignant small round blue cell sarcoma",
    "prevalence": "Rare pediatric/young adult primary CNS sarcoma",
    "ageGroup": "Children and Young Adults (Mean 15 yrs)",
    "commonLocations": [
      "Dura Mater / Cerebral Parenchyma"
    ],
    "mriFeatures": {
      "t1": "Large, well-demarcated, lobulated extra-axial or parenchymal mass with hemorrhage and necrosis",
      "t2": "Isointense to hypointense on T2 (dense small blue cell packing)",
      "flair": "Marked surrounding vasogenic edema",
      "contrast": "Intense, heterogeneous contrast enhancement",
      "dwi": "Extreme restricted diffusion (very low ADC values)"
    },
    "radiomicSignature": {
      "intensityMean": 192,
      "heterogeneity": 0.85,
      "contrastRimThickness": "Solid Dense Enhancing (20-50mm)",
      "edemaIndex": 0.7,
      "necrosisRatio": 0.3,
      "symmetryDeficit": 0.92
    },
    "molecularMarkers": "EWSR1-FLI1 gene fusion (t(11;22)(q24;q12) in >85%), CD99 (MIC2) strongly and diffusely membranous positive",
    "histology": "Sheets of uniform small round blue cells with round nuclei, finely stippled chromatin, scant clear glycogen-rich cytoplasm (PAS+)",
    "clinicalPresentation": "Rapid elevated ICP, seizures, focal motor weakness",
    "treatment": "Gross total resection + multimodal intensive Chemotherapy (VDC/IE: Vincristine, Doxorubicin, Cyclophosphamide, Ifosfamide, Etoposide) + focal Radiotherapy",
    "prognosis": "Favorable with intensive multimodal therapy; 5-year overall survival ~65-75%"
  },
  {
    "id": "rhabdomyosarcoma-cns",
    "name": "Primary Intracranial Rhabdomyosarcoma",
    "category": "Mesenchymal Tumors",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "Highly malignant skeletal muscle sarcoma",
    "prevalence": "Rare pediatric CNS malignancy",
    "ageGroup": "Children (<10 yrs, peak 2-5 yrs)",
    "commonLocations": [
      "Meninges / Skull Base / Parameningeal"
    ],
    "mriFeatures": {
      "t1": "Large, bulky, rapidly expanding destructive mass invading bone and parenchyma",
      "t2": "Heterogeneously hyperintense with necrosis and hemorrhage",
      "flair": "Severe surrounding vasogenic edema",
      "contrast": "Intense, heterogeneous enhancement",
      "dwi": "Restricted diffusion in cellular rhabdomyoblast sheets"
    },
    "radiomicSignature": {
      "intensityMean": 186,
      "heterogeneity": 0.88,
      "contrastRimThickness": "Bulky Destructive",
      "edemaIndex": 0.8,
      "necrosisRatio": 0.4,
      "symmetryDeficit": 0.92
    },
    "molecularMarkers": "MyoD1 positive, Myogenin positive, Desmin positive; FOXO1 fusions in alveolar type",
    "histology": "Embryonal or alveolar rhabdomyoblasts (strap cells with cross-striations, tennis racket cells) with brisk mitoses and necrosis",
    "clinicalPresentation": "Rapid proptosis, multiple cranial nerve palsies, intracranial hypertension",
    "treatment": "Surgical debulking + intensive multi-agent Chemotherapy (VAC: Vincristine, Actinomycin-D, Cyclophosphamide) + high-dose Proton/Photon Radiotherapy",
    "prognosis": "Guarded; 5-year survival ~45-55%"
  },
  {
    "id": "corpus-callosum-lipoma",
    "name": "Lipoma of the Corpus Callosum",
    "category": "Mesenchymal Tumors",
    "whoGrade": "Benign Congenital Malformation",
    "gradeNum": 1,
    "malignancy": "Benign congenital intracranial fat collection",
    "prevalence": "~0.1% on imaging / autopsies; ~50% of all intracranial lipomas",
    "ageGroup": "All ages (Incidental / Congenital)",
    "commonLocations": [
      "Interhemispheric Fissure / Dorsal Corpus Callosum"
    ],
    "mriFeatures": {
      "t1": "HOMOGENEOUSLY AND BRIGHTLY T1-HYPERINTENSE (identical to subcutaneous fat signal)",
      "t2": "Hyperintense on T2; COMPLETELY DROPS OUT / SUPPRESSES ON FAT-SAT SEQUENCES",
      "flair": "Normal surrounding brain; often associated with corpus callosum dysgenesis/agenesis and curvilinear peripheral calcification",
      "contrast": "NO CONTRAST ENHANCEMENT whatsoever",
      "dwi": "Chemical shift artifact on boundaries"
    },
    "radiomicSignature": {
      "intensityMean": 230,
      "heterogeneity": 0.15,
      "contrastRimThickness": "Pure T1-Bright Fat (10-40mm)",
      "edemaIndex": 0.0,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.4
    },
    "molecularMarkers": "Mature non-neoplastic adipose tissue with fibrous capsule",
    "histology": "Lobules of mature adipocytes traversed by dense collagenous bands and encasing anterior cerebral arteries (ACA)",
    "clinicalPresentation": "Asymptomatic in >80%; incidental finding; can be associated with refractory seizures or developmental delay due to dysgenesis",
    "treatment": "CRITICAL: NEVER SURGICALLY EXCISE A CORPUS CALLOSUM LIPOMA (anterior cerebral arteries run through center of lipoma; resection causes fatal stroke)",
    "prognosis": "Benign lifelong stability"
  },
  {
    "id": "meningeal-melanocytoma",
    "name": "Meningeal Melanocytoma",
    "category": "Melanocytic Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign primary leptomeningeal melanocytic neoplasm",
    "prevalence": "Rare (<0.1%)",
    "ageGroup": "Adults (30-50 yrs)",
    "commonLocations": [
      "Posterior Cranial Fossa / Meckels Cave",
      "Cervical / Thoracic Spine (Extramedullary)"
    ],
    "mriFeatures": {
      "t1": "Well-demarcated extra-axial mass, characteristically T1-HYPERINTENSE (bright due to melanin)",
      "t2": "T2-hypointense (dark due to paramagnetic melanin pigment)",
      "flair": "Minimal surrounding edema",
      "contrast": "Strong homogeneous contrast enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 215,
      "heterogeneity": 0.4,
      "contrastRimThickness": "Melanin T1-Bright Extra-Axial",
      "edemaIndex": 0.1,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.75
    },
    "molecularMarkers": "GNAQ or GNA11 somatic mutations, HMB-45+, Melan-A+, S100+, low Ki-67 (<2%)",
    "histology": "Sheets and whorls of uniform polygonal cells filled with fine brown melanin pigment; absence of mitoses or necrosis",
    "clinicalPresentation": "Cranial neuropathies, myelopathy in spinal cases, chronic headache",
    "treatment": "Complete surgical resection (curative) or Radiosurgery for skull base lesions",
    "prognosis": "Excellent; >90% long-term cure with complete resection"
  },
  {
    "id": "primary-cns-melanoma",
    "name": "Primary Meningeal Melanoma",
    "category": "Melanocytic Tumors",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "High-grade malignant primary melanocytic neoplasm",
    "prevalence": "Extremely rare primary CNS malignancy",
    "ageGroup": "Adults (40-60 yrs)",
    "commonLocations": [
      "Leptomeninges / Cerebellar Convexity / Spine"
    ],
    "mriFeatures": {
      "t1": "Infiltrative mass with intrinsic high T1 signal from melanin and spontaneous hemorrhage",
      "t2": "T2-hypointense with marked surrounding vasogenic edema",
      "flair": "Severe infiltrative edema",
      "contrast": "Heterogeneous, intense contrast enhancement with diffuse leptomeningeal melanomatosis",
      "dwi": "Restricted diffusion in cellular clusters"
    },
    "radiomicSignature": {
      "intensityMean": 220,
      "heterogeneity": 0.88,
      "contrastRimThickness": "Infiltrative Melanin-Bright",
      "edemaIndex": 0.85,
      "necrosisRatio": 0.35,
      "symmetryDeficit": 0.9
    },
    "molecularMarkers": "GNAQ / GNA11 mutations (unlike cutaneous melanoma which has BRAF/NRAS), HMB-45+, Melan-A+, S100+, high Ki-67 (>15%)",
    "histology": "Malignant pleomorphic melanocytes with nuclear pseudoinclusions, prominent cherry-red nucleoli, brisk mitoses, necrosis, and melanin granules",
    "clinicalPresentation": "Rapid neurological decline, multiple cranial neuropathies, seizures, hydrocephalus",
    "treatment": "Maximal surgical resection + Craniospinal Radiotherapy + MEK inhibitors (Trametinib) or Checkpoint Immunotherapy",
    "prognosis": "Poor; median overall survival ~12-18 months"
  },
  {
    "id": "teratoma-immature",
    "name": "Immature Teratoma of the CNS",
    "category": "Germ Cell Tumors",
    "whoGrade": "Malignant NGGCT",
    "gradeNum": 3,
    "malignancy": "Malignant non-germinomatous germ cell tumor",
    "prevalence": "Rare (<5% of intracranial GCTs)",
    "ageGroup": "Infants & Young Males (<20 yrs)",
    "commonLocations": [
      "Pineal Region",
      "Suprasellar Cistern"
    ],
    "mriFeatures": {
      "t1": "Large, bulky, heterogeneous mass with fat, calcium, and necrotic areas",
      "t2": "Heterogeneous with prominent solid component and cysts",
      "flair": "Moderate surrounding edema and mass effect",
      "contrast": "Heterogeneous marked enhancement of immature solid elements",
      "dwi": "Patchy diffusion restriction"
    },
    "radiomicSignature": {
      "intensityMean": 178,
      "heterogeneity": 0.92,
      "contrastRimThickness": "Bulky Solid Heterogeneous",
      "edemaIndex": 0.45,
      "necrosisRatio": 0.25,
      "symmetryDeficit": 0.85
    },
    "molecularMarkers": "AFP mildly elevated, SALL4 positive, primitive neuroectodermal elements",
    "histology": "Incompletely differentiated embryonic/fetal-like tissues (most commonly immature neuroepithelium) mixed with mature elements",
    "clinicalPresentation": "Rapidly progressive hydrocephalus, Parinaud syndrome, focal deficits",
    "treatment": "Neoadjuvant chemotherapy + surgical resection + craniospinal irradiation",
    "prognosis": "Moderate; ~60-70% 5-year survival"
  },
  {
    "id": "choriocarcinoma-cns",
    "name": "Primary CNS Choriocarcinoma",
    "category": "Germ Cell Tumors",
    "whoGrade": "Malignant NGGCT",
    "gradeNum": 4,
    "malignancy": "Extremely aggressive malignant GCT with severe hemorrhage risk",
    "prevalence": "Rare (<2% of GCTs)",
    "ageGroup": "Adolescents and Young Males",
    "commonLocations": [
      "Pineal Gland",
      "Suprasellar"
    ],
    "mriFeatures": {
      "t1": "Large, hypervascular mass with catastrophic internal intratumoral hemorrhage (high T1 methemoglobin)",
      "t2": "Heterogeneous salt-and-pepper / blood-fluid levels and hemosiderin rim",
      "flair": "Extensive surrounding vasogenic edema",
      "contrast": "Intense, heterogeneous enhancement of viable non-hemorrhagic components",
      "dwi": "Variable due to blood products"
    },
    "radiomicSignature": {
      "intensityMean": 195,
      "heterogeneity": 0.96,
      "contrastRimThickness": "Hemorrhagic Hypervascular (15-40mm)",
      "edemaIndex": 0.8,
      "necrosisRatio": 0.45,
      "symmetryDeficit": 0.92
    },
    "molecularMarkers": "Extremely high serum and CSF beta-hCG (often >10,000-100,000 mIU/mL, diagnostic); GATA3 positive, Cytokeratin positive",
    "histology": "Biphasic mixture of syncytiotrophoblasts (multinucleated giant cells producing beta-hCG) and cytotrophoblasts with massive hemorrhage and necrosis",
    "clinicalPresentation": "Sudden onset apoplexy/intracranial hemorrhage, precocious puberty in young boys, coma",
    "treatment": "Urgent decompression/stabilization + intensive high-dose chemotherapy + craniospinal irradiation",
    "prognosis": "Poor due to fatal hemorrhagic complications"
  },
  {
    "id": "embryonal-carcinoma-cns",
    "name": "Primary CNS Embryonal Carcinoma",
    "category": "Germ Cell Tumors",
    "whoGrade": "Malignant NGGCT",
    "gradeNum": 4,
    "malignancy": "Highly malignant GCT",
    "prevalence": "Rare (<3% of GCTs)",
    "ageGroup": "Young adults (15-30 yrs)",
    "commonLocations": [
      "Pineal Region",
      "Suprasellar"
    ],
    "mriFeatures": {
      "t1": "Infiltrative heterogeneous mass with necrosis",
      "t2": "Heterogeneously hyperintense",
      "flair": "Marked mass effect and hydrocephalus",
      "contrast": "Heterogeneous strong enhancement",
      "dwi": "Restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 184,
      "heterogeneity": 0.85,
      "contrastRimThickness": "Infiltrative Necrotic",
      "edemaIndex": 0.65,
      "necrosisRatio": 0.35,
      "symmetryDeficit": 0.88
    },
    "molecularMarkers": "OCT3/4 positive, CD30 positive, SOX2 positive, elevated serum/CSF beta-hCG and AFP variable",
    "histology": "Sheets, glands, and papillae of large anaplastic primitive epithelial cells with high mitotic rate and necrosis",
    "clinicalPresentation": "Rapid elevated ICP, hydrocephalus, Parinaud syndrome",
    "treatment": "Intensive multimodal chemotherapy + craniospinal radiation",
    "prognosis": "Intermediate-to-poor; 5-year survival ~50-60%"
  },
  {
    "id": "pcnsl-tcell",
    "name": "Primary CNS T-Cell Lymphoma",
    "category": "Lymphomas of the CNS",
    "whoGrade": "Malignant T-Cell Neoplasm",
    "gradeNum": 4,
    "malignancy": "Rare aggressive variant of primary CNS lymphoma",
    "prevalence": "~2-4% of all primary CNS lymphomas",
    "ageGroup": "Adults (50-70 yrs)",
    "commonLocations": [
      "Cerebral Hemispheres",
      "Cerebellum",
      "Brainstem (Infiltrative)"
    ],
    "mriFeatures": {
      "t1": "Infiltrative mass with necrosis and ring-like components, hypointense",
      "t2": "Heterogeneously hyperintense with surrounding edema",
      "flair": "Prominent mass effect",
      "contrast": "Heterogeneous, patchy to ring enhancement (less uniform than DLBCL)",
      "dwi": "Restricted diffusion in cellular infiltrates"
    },
    "radiomicSignature": {
      "intensityMean": 188,
      "heterogeneity": 0.78,
      "contrastRimThickness": "Infiltrative Ring Enhancing",
      "edemaIndex": 0.65,
      "necrosisRatio": 0.2,
      "symmetryDeficit": 0.85
    },
    "molecularMarkers": "CD3 positive, CD4/CD8 positive, CD30 variable, clonal T-cell receptor (TCR) gene rearrangement, CD20 negative",
    "histology": "Infiltrating sheets of atypical pleomorphic T-lymphoblasts with angiocentric invasion and necrosis",
    "clinicalPresentation": "Rapid cognitive decline, focal motor weakness, seizures",
    "treatment": "High-dose Methotrexate (HD-MTX) based chemotherapy regimens + whole brain radiotherapy / ASCT",
    "prognosis": "Worse prognosis than B-cell PCNSL; median OS ~18-24 months"
  },
  {
    "id": "burkitt-lymphoma-cns",
    "name": "Primary CNS Burkitt Lymphoma",
    "category": "Lymphomas of the CNS",
    "whoGrade": "Malignant High-Grade B-Cell Neoplasm",
    "gradeNum": 4,
    "malignancy": "Extremely rapid-growing high-grade lymphoma",
    "prevalence": "Rare (<1% of PCNSL; higher in HIV/AIDS)",
    "ageGroup": "Children & Young Adults (Peak 5-15 yrs)",
    "commonLocations": [
      "Periventricular White Matter",
      "Leptomeninges",
      "Dural Surface"
    ],
    "mriFeatures": {
      "t1": "Bulky, expansile homogeneous mass abutting ependyma, isointense",
      "t2": "Iso- to hypointense on T2 (extreme hypercellularity and nuclear density)",
      "flair": "Moderate surrounding edema",
      "contrast": "Intense, vivid, uniform contrast enhancement with diffuse leptomeningeal seeding",
      "dwi": "Extreme diffusion restriction (lowest ADC values)"
    },
    "radiomicSignature": {
      "intensityMean": 215,
      "heterogeneity": 0.4,
      "contrastRimThickness": "Solid Bulky Avid (20-50mm)",
      "edemaIndex": 0.5,
      "necrosisRatio": 0.05,
      "symmetryDeficit": 0.92
    },
    "molecularMarkers": "MYC gene translocation (t(8;14)(q24;q32) in >95%), Ki-67 proliferation index ~100%, CD20+, CD10+, BCL6+, BCL2 negative",
    "histology": "Starry-sky appearance: monomorphic medium-sized round lymphoid cells with cytoplasmic lipid vacuoles interspersed with tingible body macrophages",
    "clinicalPresentation": "Acute onset headaches, cranial neuropathies, rapid cognitive deterioration, meningismus",
    "treatment": "Intensive multi-agent systemic & intrathecal Chemotherapy (CODOX-M/IVAC or DA-EPOCH-R) + Rituximab; avoid surgical resection",
    "prognosis": "Favorable in pediatric/immunocompetent patients with intensive chemo (>80% cure); aggressive if untreated"
  },
  {
    "id": "lymphomatoid-granulomatosis",
    "name": "Lymphomatoid Granulomatosis of the CNS",
    "category": "Lymphomas of the CNS",
    "whoGrade": "EBV-Driven Angiodestructive Lymphoproliferative Disorder",
    "gradeNum": 3,
    "malignancy": "Rare EBV-associated angiocentric disease with malignant potential",
    "prevalence": "Rare (~30% have CNS involvement)",
    "ageGroup": "Adults (30-60 yrs; Male > Female 2:1)",
    "commonLocations": [
      "Cerebral White Matter",
      "Basal Ganglia",
      "Brainstem (Perivascular distribution)"
    ],
    "mriFeatures": {
      "t1": "Multiple punctate and nodular perivascular lesions, hypointense",
      "t2": "Heterogeneously hyperintense with target-like perivascular appearance",
      "flair": "Extensive perilesional vasogenic edema",
      "contrast": "Multiple punctate, nodular, and ring-like contrast enhancements along Virchow-Robin spaces",
      "dwi": "Patchy diffusion restriction"
    },
    "radiomicSignature": {
      "intensityMean": 180,
      "heterogeneity": 0.75,
      "contrastRimThickness": "Multiple Perivascular Nodular",
      "edemaIndex": 0.7,
      "necrosisRatio": 0.15,
      "symmetryDeficit": 0.85
    },
    "molecularMarkers": "Epstein-Barr Virus (EBV) encoded RNA (EBER) in situ hybridization positive, clonal immunoglobulin gene rearrangements",
    "histology": "Angiodestructive and angiocentric infiltrate of atypical EBV+ B-cells surrounded by abundant reactive T-lymphocytes, histiocytes, and transmural vascular necrosis",
    "clinicalPresentation": "Subacute encephalopathy, seizures, focal neurological deficits, systemic pulmonary lesions",
    "treatment": "Corticosteroids + Interferon-alpha (for low-grade Grade 1-2); R-CHOP chemotherapy / HD-MTX for high-grade (Grade 3)",
    "prognosis": "Variable; high-grade progresses to diffuse large B-cell lymphoma"
  },
  {
    "id": "histiocytic-sarcoma",
    "name": "Histiocytic Sarcoma of the Brain",
    "category": "Histiocytic Tumors",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "Extremely aggressive malignant histiocytic neoplasm",
    "prevalence": "Extremely rare (<0.1%)",
    "ageGroup": "Adults (40-65 yrs)",
    "commonLocations": [
      "Cerebral Parenchyma",
      "Dural Surface (Infiltrative)"
    ],
    "mriFeatures": {
      "t1": "Large, rapidly growing, infiltrative mass with necrosis and hemorrhage",
      "t2": "Heterogeneously hyperintense with massive brain edema",
      "flair": "Severe infiltrative edema",
      "contrast": "Intense, heterogeneous, thick ragged ring and nodular enhancement",
      "dwi": "Restricted diffusion in cellular histiocytic sheets"
    },
    "radiomicSignature": {
      "intensityMean": 184,
      "heterogeneity": 0.88,
      "contrastRimThickness": "Ragged Thick Ring (20-60mm)",
      "edemaIndex": 0.9,
      "necrosisRatio": 0.4,
      "symmetryDeficit": 0.94
    },
    "molecularMarkers": "CD68 positive, CD163 positive, Lysozyme positive, S100 variable, CD1a negative, Langerin negative, BRAF/MAPK mutations",
    "histology": "Sheets of large, pleomorphic, non-cohesive malignant histiocytic cells with abundant eosinophilic cytoplasm, multinucleation, atypical mitoses, and geographic necrosis",
    "clinicalPresentation": "Rapid neurological decline, hemiparesis, severe raised ICP",
    "treatment": "Surgical resection + systemic Chemotherapy (CHOP-like) + focal Radiotherapy + targeted MEK/BRAF inhibitors",
    "prognosis": "Poor; aggressive clinical course with high recurrence rate"
  },
  {
    "id": "pituitary-blastoma",
    "name": "Pituitary Blastoma",
    "category": "Sellar and Parasellar Tumors",
    "whoGrade": "WHO Grade IV (Infantile Embryonal)",
    "gradeNum": 4,
    "malignancy": "Rare highly aggressive infantile sellar malignancy",
    "prevalence": "Associated with DICER1 Syndrome",
    "ageGroup": "Infants (<24 months, peak 7-12 months)",
    "commonLocations": [
      "Sella Turcica with suprasellar expansion into hypothalamus"
    ],
    "mriFeatures": {
      "t1": "Large, destructive sellar-suprasellar mass with necrosis and hemorrhage",
      "t2": "Heterogeneously hyperintense with severe hypothalamic compression",
      "flair": "Marked hypothalamic edema",
      "contrast": "Strong, heterogeneous contrast enhancement",
      "dwi": "Restricted diffusion in primitive blastematous cells"
    },
    "radiomicSignature": {
      "intensityMean": 188,
      "heterogeneity": 0.85,
      "contrastRimThickness": "Destructive Sellar-Suprasellar (15-40mm)",
      "edemaIndex": 0.7,
      "necrosisRatio": 0.35,
      "symmetryDeficit": 0.9
    },
    "molecularMarkers": "Germline or somatic DICER1 loss-of-function mutations (pathognomonic hallmark in >95%), ACTH positive, Pit-1 positive",
    "histology": "Embryonal blastematous cells mixed with rosettes, primitive neuroendocrine cells, and Rathke pouch-like epithelial structures",
    "clinicalPresentation": "Severe infantile Cushing syndrome (rapid weight gain, moon face, hirsutism, hypertension), bilateral ophthalmoplegia, hydrocephalus",
    "treatment": "Transsphenoidal/Transcranial surgical resection + multi-agent chemotherapy + focal Radiotherapy",
    "prognosis": "Guarded; 5-year survival ~60-70% with intensive multimodal therapy"
  },
  {
    "id": "pituitary-carcinoma",
    "name": "Pituitary Carcinoma (Metastatic PitNET)",
    "category": "Sellar and Parasellar Tumors",
    "whoGrade": "Malignant Pituitary Neoplasm",
    "gradeNum": 4,
    "malignancy": "Malignant pituitary tumor defined by non-contiguous CNS or systemic metastasis",
    "prevalence": "Rare (~0.2% of all pituitary neoplasms)",
    "ageGroup": "Adults (40-65 yrs)",
    "commonLocations": [
      "Sella Turcica with drop metastases in spinal cord, cortex, liver, or bone"
    ],
    "mriFeatures": {
      "t1": "Invasive sellar mass with multiple satellite nodular dural and leptomeningeal lesions",
      "t2": "Heterogeneously hyperintense with necrosis and cavernous sinus invasion",
      "flair": "Extensive edema around metastatic deposits",
      "contrast": "Intense, heterogeneous enhancement of primary and distant metastases",
      "dwi": "Restricted diffusion in metastatic nodules"
    },
    "radiomicSignature": {
      "intensityMean": 185,
      "heterogeneity": 0.82,
      "contrastRimThickness": "Invasive Metastatic (20-50mm)",
      "edemaIndex": 0.75,
      "necrosisRatio": 0.3,
      "symmetryDeficit": 0.92
    },
    "molecularMarkers": "High Ki-67 index (>10-20%), elevated p53, elevated circulating pituitary hormones (PRL or ACTH most common)",
    "histology": "Atypical pituitary cytology with marked nuclear pleomorphism, frequent atypical mitoses, geographic necrosis, non-contiguous metastases",
    "clinicalPresentation": "Severe endocrine syndrome resistant to medical therapy, multiple cranial neuropathies, radicular spinal pain",
    "treatment": "Temozolomide (first-line standard medical therapy for aggressive PitNET/carcinoma) + Stereotactic Radiosurgery + Checkpoint Immunotherapy (Ipilimumab + Nivolumab)",
    "prognosis": "Poor; median survival ~1-3 years; Temozolomide and immunotherapy have produced durable complete remissions in responders"
  },
  {
    "id": "spindle-cell-oncocytoma",
    "name": "Spindle Cell Oncocytoma of the Sella (SCO)",
    "category": "Sellar and Parasellar Tumors",
    "whoGrade": "WHO Grade I",
    "gradeNum": 1,
    "malignancy": "Benign non-endocrine sellar neoplasm",
    "prevalence": "Rare (<0.1%)",
    "ageGroup": "Adults (Peak 50-70 yrs)",
    "commonLocations": [
      "Sella Turcica and Suprasellar Cistern"
    ],
    "mriFeatures": {
      "t1": "Well-circumscribed sellar-suprasellar mass, isointense to hypointense",
      "t2": "Isointense to hyperintense with cavernous sinus abutment",
      "flair": "Suprasellar extension with chiasm compression",
      "contrast": "Marked, intense, homogeneous contrast enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 195,
      "heterogeneity": 0.4,
      "contrastRimThickness": "Solid Sellar Avid (15-35mm)",
      "edemaIndex": 0.08,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.72
    },
    "molecularMarkers": "TTF-1 positive (diagnostic marker), S100 positive, Antimitochondrial antibody (EMA) positive, Galectin-3 positive",
    "histology": "Fascicles of spindle-shaped to polygonal cells with abundant, granular, eosinophilic (oncocytic) cytoplasm packed with mitochondria",
    "clinicalPresentation": "Visual field defects (bitemporal hemianopsia), hypopituitarism, headaches",
    "treatment": "Endoscopic Transsphenoidal complete surgical resection +/- SRS for cavernous remnant",
    "prognosis": "Good; prone to local recurrence if subtotal resection"
  },
  {
    "id": "plurihormonal-pitnet",
    "name": "Plurihormonal Pituitary Neuroendocrine Tumor",
    "category": "Sellar and Parasellar Tumors",
    "whoGrade": "Benign Functioning PitNET",
    "gradeNum": 1,
    "malignancy": "Functioning adenoma producing multiple distinct hormone lineages",
    "prevalence": "~10-15% of functioning PitNETs",
    "ageGroup": "Adults (30-60 yrs)",
    "commonLocations": [
      "Sella Turcica / Suprasellar"
    ],
    "mriFeatures": {
      "t1": "Expansile sellar-suprasellar macroadenoma with suprasellar dome",
      "t2": "Heterogeneously hyperintense",
      "flair": "Optic chiasm elevation",
      "contrast": "Robust heterogeneous contrast enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 182,
      "heterogeneity": 0.45,
      "contrastRimThickness": "Sellar Macroadenoma (15-35mm)",
      "edemaIndex": 0.06,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.7
    },
    "molecularMarkers": "Co-expression of multiple transcription factors (PIT1 + SF1 or TPIT), multi-hormone secretion (GH + Prolactin + TSH)",
    "histology": "Mixture of monomorphous or plurihormonal cell populations with distinct secretory granules on electron microscopy",
    "clinicalPresentation": "Combined endocrine manifestations: Acromegaly + Galactorrhea/Amenorrhea + Hyperthyroidism, visual field defects",
    "treatment": "Endoscopic Transsphenoidal Resection + Multimodal medical therapy (Somatostatin analogues + Dopamine agonists)",
    "prognosis": "Good with biochemical and surgical control"
  },
  {
    "id": "crooke-cell-adenoma",
    "name": "Crooke Cell Pituitary Adenoma",
    "category": "Sellar and Parasellar Tumors",
    "whoGrade": "Aggressive PitNET Variant (Grade 2 equivalent)",
    "gradeNum": 2,
    "malignancy": "Aggressive functioning or silent corticotroph adenoma variant",
    "prevalence": "Rare (~3% of ACTH adenomas)",
    "ageGroup": "Adults (35-60 yrs; Female > Male)",
    "commonLocations": [
      "Sella Turcica with extensive sphenoid sinus and cavernous invasion"
    ],
    "mriFeatures": {
      "t1": "Large, invasive, erosive sellar-suprasellar macroadenoma destructively expanding sella",
      "t2": "Heterogeneously hyperintense with bone erosion",
      "flair": "Severe suprasellar mass effect",
      "contrast": "Intense, heterogeneous contrast enhancement",
      "dwi": "Mild restricted diffusion in cellular foci"
    },
    "radiomicSignature": {
      "intensityMean": 188,
      "heterogeneity": 0.65,
      "contrastRimThickness": "Invasive Erosive Sellar (20-45mm)",
      "edemaIndex": 0.25,
      "necrosisRatio": 0.05,
      "symmetryDeficit": 0.82
    },
    "molecularMarkers": "TPIT positive, ACTH positive, marked circumferential cytokeratin (CAM5.2) ring filaments (>50% of cells)",
    "histology": "Corticotroph cells demonstrating massive ring-like accumulation of perinuclear cytokeratin filaments (Crooke hyaline change) with nuclear displacement",
    "clinicalPresentation": "Severe, refractory Cushing disease or silent aggressive macroadenoma with visual compromise",
    "treatment": "Aggressive Transsphenoidal resection + adjuvant Radiotherapy + Temozolomide / Osilodrostat (cortisol inhibitor)",
    "prognosis": "High recurrence and invasion rate (~60-70%); requires aggressive multimodal therapy"
  },
  {
    "id": "silent-corticotroph",
    "name": "Silent Corticotroph Adenoma (SCA)",
    "category": "Sellar and Parasellar Tumors",
    "whoGrade": "Aggressive PitNET Subtype",
    "gradeNum": 1,
    "malignancy": "Non-functioning pituitary macroadenoma with corticotroph differentiation",
    "prevalence": "~5-10% of non-functioning PitNETs",
    "ageGroup": "Adults (40-65 yrs)",
    "commonLocations": [
      "Sella Turcica / Suprasellar with cavernous sinus invasion"
    ],
    "mriFeatures": {
      "t1": "Large macroadenoma with high propensity for spontaneous apoplexy/hemorrhage",
      "t2": "Heterogeneous on T1/T2 with fluid-fluid levels from microhemorrhage",
      "flair": "Chiasm compression",
      "contrast": "Strong heterogeneous enhancement",
      "dwi": "No restriction"
    },
    "radiomicSignature": {
      "intensityMean": 180,
      "heterogeneity": 0.55,
      "contrastRimThickness": "Hemorrhagic Sellar (20-40mm)",
      "edemaIndex": 0.1,
      "necrosisRatio": 0.1,
      "symmetryDeficit": 0.75
    },
    "molecularMarkers": "TPIT positive, ACTH positive on IHC, absence of clinical hypercortisolemia (normal serum cortisol)",
    "histology": "Densely or sparsely granulated basophilic corticotroph cells without clinical cortisol hypersecretion",
    "clinicalPresentation": "Visual disturbance (bitemporal hemianopsia), headache, acute pituitary apoplexy",
    "treatment": "Endoscopic Transsphenoidal Resection; higher recurrence rate than typical null-cell adenoma",
    "prognosis": "Good with surgery; requires close MRI surveillance due to higher recurrence propensity"
  },
  {
    "id": "teratoma-somatic-malignancy",
    "name": "Mature Teratoma with Somatic-Type Malignancy",
    "category": "Germ Cell Tumors",
    "whoGrade": "WHO Grade IV",
    "gradeNum": 4,
    "malignancy": "Malignant transformation of teratoma components into carcinoma or sarcoma",
    "prevalence": "Extremely rare (<1% of GCTs)",
    "ageGroup": "Young Adults (15-35 yrs)",
    "commonLocations": [
      "Pineal Region",
      "Suprasellar Cistern"
    ],
    "mriFeatures": {
      "t1": "Large, complex, multilocular mass with fat, dense calcification, and aggressive infiltrative solid soft-tissue mass",
      "t2": "Heterogeneous with necrosis and rapid destructive growth",
      "flair": "Severe surrounding vasogenic edema",
      "contrast": "Intense, irregular, heterogeneous enhancement of the transformed somatic component",
      "dwi": "Restricted diffusion in malignant transformed areas"
    },
    "radiomicSignature": {
      "intensityMean": 188,
      "heterogeneity": 0.94,
      "contrastRimThickness": "Complex Multilocular Infiltrative",
      "edemaIndex": 0.7,
      "necrosisRatio": 0.35,
      "symmetryDeficit": 0.92
    },
    "molecularMarkers": "Somatic malignant transformation: Adenocarcinoma, Squamous cell carcinoma, Rhabdomyosarcoma, or Glioblastoma arising within teratoma",
    "histology": "Mature teratomatous tissues (skin, teeth, fat) containing an overt secondary malignant somatic neoplasm",
    "clinicalPresentation": "Rapid raised ICP, Parinaud syndrome, rapid neurological decline",
    "treatment": "Radical surgical resection + tailored Chemotherapy directed against the specific somatic malignancy + Craniospinal Radiotherapy",
    "prognosis": "Guarded; prognosis determined by the grade of the transformed somatic malignancy"
  },
  {
    "id": "mixed-gct-cns",
    "name": "Mixed Malignant Germ Cell Tumor of the CNS",
    "category": "Germ Cell Tumors",
    "whoGrade": "Malignant NGGCT",
    "gradeNum": 4,
    "malignancy": "Biphasic or polyphasic malignant germ cell neoplasm",
    "prevalence": "~15-20% of intracranial GCTs",
    "ageGroup": "Children & Young Adults (Peak 10-20 yrs; Male > Female)",
    "commonLocations": [
      "Pineal Region",
      "Suprasellar Cistern",
      "Bifocal"
    ],
    "mriFeatures": {
      "t1": "Large, lobulated, heterogeneous solid-cystic mass with hemorrhage, calcification, and necrosis",
      "t2": "Heterogeneously hyperintense with fluid levels and solid nodules",
      "flair": "Marked aqueductal compression and edema",
      "contrast": "Intense, heterogeneous contrast enhancement with high risk of CSF dissemination",
      "dwi": "Restricted diffusion in high-cellularity germinoma/embryonal components"
    },
    "radiomicSignature": {
      "intensityMean": 190,
      "heterogeneity": 0.88,
      "contrastRimThickness": "Heterogeneous Solid-Cystic (15-45mm)",
      "edemaIndex": 0.6,
      "necrosisRatio": 0.25,
      "symmetryDeficit": 0.9
    },
    "molecularMarkers": "Simultaneously elevated serum and/or CSF AFP and beta-hCG (diagnostic of mixed NGGCT components), SALL4+, OCT3/4+, CD30+",
    "histology": "Combination of two or more GCT subtypes: Germinoma + Yolk Sac Tumor + Teratoma + Choriocarcinoma + Embryonal Carcinoma",
    "clinicalPresentation": "Parinaud syndrome, diabetes insipidus, precocious puberty, visual loss, morning headaches",
    "treatment": "Neoadjuvant Platinum-based Chemotherapy (PEB: Cisplatin, Etoposide, Bleomycin) followed by second-look resection + Craniospinal Radiotherapy",
    "prognosis": "Intermediate-to-good; 5-year overall survival ~70-80% with modern multimodal protocols"
  },
  {
    "id": "neuroepithelial-cyst",
    "name": "Neuroepithelial (Glioependymal) Cyst",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Benign Congenital Neuroepithelial Cyst",
    "gradeNum": 1,
    "malignancy": "Benign congenital intraparenchymal fluid-filled cyst",
    "prevalence": "Rare (~0.1-0.5% of non-neoplastic cysts)",
    "ageGroup": "All ages (Children & Adults; Incidental)",
    "commonLocations": [
      "Frontal Lobe / Parietal White Matter",
      "Thalamus",
      "Cerebellar Hemisphere"
    ],
    "mriFeatures": {
      "t1": "Sharply demarcated smooth round/oval intraparenchymal cyst, EXACTLY ISOINTENSE TO CSF on all sequences",
      "t2": "Identical to CSF signal (homogeneously bright hyperintense on T2)",
      "flair": "COMPLETE FLUID SUPPRESSION ON FLAIR (turns completely dark/black like CSF); NO surrounding edema or gliosis",
      "contrast": "NO CONTRAST ENHANCEMENT whatsoever (neither cyst nor wall enhances)",
      "dwi": "NO RESTRICTION (high ADC, completely dark on DWI)"
    },
    "radiomicSignature": {
      "intensityMean": 100,
      "heterogeneity": 0.05,
      "contrastRimThickness": "None (0mm)",
      "edemaIndex": 0.0,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.45
    },
    "molecularMarkers": "Simple non-neoplastic epithelial lining with basement membrane",
    "histology": "Single layer of cuboidal to columnar ciliated or non-ciliated epithelial cells resting on a delicate basement membrane without glial or inflammatory reaction",
    "clinicalPresentation": "Asymptomatic incidental finding in >90%; large lesions (>3-4 cm) can cause localized focal seizures or mild mass effect",
    "treatment": "Observation / Reassurance for asymptomatic cysts; Stereotactic aspiration or endoscopic fenestration only if symptomatic mass effect",
    "prognosis": "Benign normal life expectancy"
  },
  {
    "id": "neurenteric-cyst",
    "name": "Neurenteric (Enterogenous) Cyst of the CNS",
    "category": "Non-Neoplastic Cysts and Pseudotumors",
    "whoGrade": "Benign Congenital Endodermal Inclusion Cyst",
    "gradeNum": 1,
    "malignancy": "Benign congenital endodermal inclusion cyst",
    "prevalence": "Rare (~0.3-0.5% of spinal and intracranial cysts)",
    "ageGroup": "Young Adults (20-40 yrs)",
    "commonLocations": [
      "Ventral Cervicothoracic Spinal Canal (Intradural extramedullary >80%)",
      "Pre-Pontine Cistern / Clivus"
    ],
    "mriFeatures": {
      "t1": "Well-circumscribed smooth lobulated extra-axial cyst anterior to brainstem/spinal cord, isointense to slightly hyperintense (proteinaceous)",
      "t2": "Homogeneously hyperintense on T2",
      "flair": "Incomplete suppression on FLAIR due to protein/mucin content; brainstem/cord compression",
      "contrast": "NO internal enhancement (rare thin non-nodular peripheral wall enhancement)",
      "dwi": "No diffusion restriction (distinguishes from epidermoid cyst)"
    },
    "radiomicSignature": {
      "intensityMean": 155,
      "heterogeneity": 0.25,
      "contrastRimThickness": "None / Thin Rim (10-30mm)",
      "edemaIndex": 0.05,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.7
    },
    "molecularMarkers": "Cytokeratin positive, CEA positive, EMA positive, non-neoplastic mucinous lining; associated with vertebral segmentation anomalies",
    "histology": "Single layer of pseudostratified mucin-secreting columnar or cuboidal GI/respiratory-type epithelium resting on a basement membrane (endodermal origin)",
    "clinicalPresentation": "Intermittent progressive myelopathy (spasticity, sensory loss, radiculopathy), neck pain, aseptic chemical meningitis upon micro-leakage",
    "treatment": "Complete microsurgical excision of the cyst and mucinous contents with preservation of ventral spinal cord / basilar artery perforators",
    "prognosis": "Curative with complete resection; low recurrence rate"
  },
  {
    "id": "pcnsl-hodgkin",
    "name": "Primary CNS Hodgkin Lymphoma",
    "category": "Lymphomas of the CNS",
    "whoGrade": "Malignant Hematopoietic Neoplasm (Hodgkin)",
    "gradeNum": 4,
    "malignancy": "Extremely rare primary intracranial manifestation of Hodgkin Lymphoma",
    "prevalence": "Extremely rare (<0.2% of PCNSL)",
    "ageGroup": "Adults (30-60 yrs)",
    "commonLocations": [
      "Dura Mater / Cerebral Convexity",
      "Periventricular White Matter"
    ],
    "mriFeatures": {
      "t1": "Well-demarcated dural-based or parenchymal mass, isointense to hypointense",
      "t2": "Iso- to hypointense on T2 (dense cellular and fibrous stroma)",
      "flair": "Moderate surrounding vasogenic edema",
      "contrast": "Intense, homogeneous to nodular contrast enhancement with dural tail",
      "dwi": "Restricted diffusion in cellular areas"
    },
    "radiomicSignature": {
      "intensityMean": 195,
      "heterogeneity": 0.55,
      "contrastRimThickness": "Dural-Based Solid Avid",
      "edemaIndex": 0.4,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.8
    },
    "molecularMarkers": "CD30 positive (membrane & Golgi dot-like), CD15 positive, PAX5 weak positive, CD20 negative, CD45 negative, EBV positive in ~60%",
    "histology": "Classic diagnostic binucleated Reed-Sternberg cells (owl-eye nuclei with prominent inclusion-like macronucleoli) embedded in a background of non-neoplastic lymphocytes, histiocytes, and eosinophils",
    "clinicalPresentation": "Headache, focal neurological deficits, cranial neuropathies, seizures",
    "treatment": "Systemic Chemotherapy (ABVD or brentuximab-vedotin-based regimens) + high-dose Methotrexate + focal Radiotherapy",
    "prognosis": "Favorable compared to systemic refractory Hodgkin lymphoma; 5-year survival ~60-70%"
  },
  {
    "id": "juvenile-xanthogranuloma",
    "name": "Juvenile Xanthogranuloma (JXG) of the CNS",
    "category": "Histiocytic Tumors",
    "whoGrade": "Non-Langerhans Histiocytic Neoplasm",
    "gradeNum": 1,
    "malignancy": "Benign clonal non-Langerhans histiocytosis with CNS mass",
    "prevalence": "Rare (~1-2% of JXG have systemic/CNS involvement)",
    "ageGroup": "Infants & Children (<5 yrs)",
    "commonLocations": [
      "Choroid Plexus (Lateral Ventricle)",
      "Dural Surface",
      "Hypothalamus / Pituitary Stalk"
    ],
    "mriFeatures": {
      "t1": "Well-demarcated intraventricular or dural mass, isointense on T1",
      "t2": "Characteristically T2-hypointense to isointense (due to lipid/cholesterol and dense fibrosis)",
      "flair": "Minimal surrounding brain edema",
      "contrast": "Intense, homogeneous, vivid contrast enhancement",
      "dwi": "No restricted diffusion"
    },
    "radiomicSignature": {
      "intensityMean": 198,
      "heterogeneity": 0.45,
      "contrastRimThickness": "Intraventricular / Dural Avid (10-30mm)",
      "edemaIndex": 0.1,
      "necrosisRatio": 0.0,
      "symmetryDeficit": 0.72
    },
    "molecularMarkers": "CD68 positive, Factor XIIIa positive, CD163 positive, CD1a NEGATIVE, Langerin NEGATIVE, S100 negative, BRAF V600E or MAP2K1 mutations",
    "histology": "Sheets of lipid-laden foamy histiocytes intermingled with pathognomonic Touton giant cells (wreath-like ring of nuclei surrounding central eosinophilic cytoplasm with peripheral clear foamy zone) and fibrosis",
    "clinicalPresentation": "Obstructive hydrocephalus (choroid plexus lesions), seizures, visual deficits, cutaneous orange-yellow papules (skin xanthogranulomas)",
    "treatment": "Complete surgical excision is curative; low-dose chemotherapy (Vinblastine/Prednisone) or MEK inhibitors for unresectable hypothalamic lesions",
    "prognosis": "Excellent; benign clinical course with high cure rate"
  }
];


// Helper Database Search & Query Functions
const TumorDB = {
  getAll: () => BRAIN_TUMOR_DATABASE,
  getById: (id) => BRAIN_TUMOR_DATABASE.find(t => t.id === id) || null,
  getByCategory: (cat) => BRAIN_TUMOR_DATABASE.filter(t => t.category === cat),
  getByGrade: (gradeNum) => BRAIN_TUMOR_DATABASE.filter(t => t.gradeNum === gradeNum),
  getCategories: () => [...new Set(BRAIN_TUMOR_DATABASE.map(t => t.category))],
  search: (query) => {
    if (!query) return BRAIN_TUMOR_DATABASE;
    const q = query.toLowerCase().trim();
    return BRAIN_TUMOR_DATABASE.filter(t => 
      t.name.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q) ||
      t.whoGrade.toLowerCase().includes(q) ||
      t.molecularMarkers.toLowerCase().includes(q) ||
      t.commonLocations.some(l => l.toLowerCase().includes(q)) ||
      t.clinicalPresentation.toLowerCase().includes(q) ||
      t.histology.toLowerCase().includes(q)
    );
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BRAIN_TUMOR_DATABASE, TumorDB };
}
