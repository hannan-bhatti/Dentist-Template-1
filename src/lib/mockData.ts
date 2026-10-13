export const clinicConfig = {
  name: "Aura Health Sanctuary",
  tagline: "Executive Multispecialty Lounge & Medical Sanctuary",
  phone: "+92 (21) 3587-9920",
  emergencyPhone: "+92 (21) 3587-9911",
  whatsappNumber: "+923008899920",
  address: "Sanctuary Tower, Executive Enclave, Marine Drive, Clifton Block 4, Karachi",
  secondaryBranch: "M.M. Alam Road, Gulberg III, Lahore",
  hours: "Mon – Sat: 8:00 AM – 9:00 PM | Priority ER & Virtual Desk: 24/7",
  calComLink: "https://cal.com/aura-health/consultation",
  googleRating: "4.96",
  reviewCount: "1,450+"
};

export const heroData = {
  headline: "Multispecialty Healthcare Elevated into a Soothing Art.",
  subheadline: "Experience world-class integrated medicine across Cardiology, Dental Artistry, Gynecology, Physiotherapy, Advanced Labs, and Family Medicine in an unhurried, private sanctuary.",
  badge: "✨ Accepting Private Patients • Executive Priority Same-Day Consultations",
  primaryCtaText: "Reserve Sanctuary Consultation",
  secondaryCtaText: "Explore Medical Specialties",
  ratingText: "4.96/5 Star Rating from 1,450+ Verified Patients Across Pakistan & Overseas"
};

export const specialtiesData = [
  {
    id: "cardiology",
    title: "Cardiology & Vascular Medicine",
    shortTitle: "Cardiology",
    iconName: "HeartPulse",
    tagline: "Preventive Cardiovascular Health & Precision Heart Mapping",
    leadDoctor: "Prof. Dr. Mansoor Tariq, FRCP (London), FCPS",
    description: "From 3D echocardiography and continuous Holter rhythm telemetry to preventive coronary calcium scoring, our heart lounge combines British clinical protocols with unhurried cardiac consultations.",
    keyProcedures: [
      "Color Doppler 3D Echocardiography",
      "24-Hour Digital Holter Telemetry",
      "Preventive Atherosclerosis Screening",
      "Executive Hypertension Optimization"
    ],
    duration: "45-60 min comprehensive workup",
    priceFrom: "Rs. 9,500",
    badge: "Heart Center of Excellence"
  },
  {
    id: "dental",
    title: "Aesthetic & Restorative Dentistry",
    shortTitle: "Dental Lounge",
    iconName: "Sparkles",
    tagline: "Virtually Painless Digital Smile Architecture & Swiss Veneers",
    leadDoctor: "Dr. Dania Tariq, BDS, MSc (King's College London)",
    description: "Equipped with German 3D intraoral optical scanning, computer-regulated Wand™ micro-anesthesia, and Swiss ceramic artistry for dental transformations with zero anxiety.",
    keyProcedures: [
      "Bespoke Swiss Porcelain Veneers",
      "Guided 3D Titanium Dental Implants",
      "Enlighten In-Studio Laser Whitening",
      "Ultrasonic Biofilm Airflow Hygiene"
    ],
    duration: "45-90 min session",
    priceFrom: "Rs. 8,500",
    badge: "Painless Anesthesia Protocol"
  },
  {
    id: "gynea",
    title: "Obstetrics & Women's Health",
    shortTitle: "Gynecology",
    iconName: "Flower2",
    tagline: "Empowering Compassionate Care for Every Stage of Womanhood",
    leadDoctor: "Dr. Syeda Zill-e-Huma, MBBS, MRCOG (UK), FCPS",
    description: "Private, comforting gynecological consultations covering prenatal fetal monitoring, high-definition 4D anomaly scanning, hormonal endocrinology, and comprehensive well-woman longevity screens.",
    keyProcedures: [
      "4D HD Anomaly Ultrasound & Fetal Scan",
      "PCOS & Hormonal Endocrine Optimization",
      "Prenatal Concierge Care & Delivery Advisory",
      "Comprehensive Well-Woman Cervical Screening"
    ],
    duration: "45 min private consultation",
    priceFrom: "Rs. 7,500",
    badge: "100% Private Female Suite"
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy & Spine Rehabilitation",
    shortTitle: "Physiotherapy",
    iconName: "Activity",
    tagline: "Evidence-Based Musculoskeletal Recovery & Posture Science",
    leadDoctor: "Dr. Hammad Sher, DPT, MS OMPT (Australia)",
    description: "Combining dry needling, computerized spinal decompression, laser biostimulation, and tailored movement re-education to eliminate chronic spinal, sports, and joint pain.",
    keyProcedures: [
      "Targeted Spinal Decompression Therapy",
      "Sports Injury & ACL Rehabilitation",
      "Trigger Point Dry Needling & Shockwave",
      "Ergonomic Posture Realignment"
    ],
    duration: "60 min clinical therapy",
    priceFrom: "Rs. 6,000",
    badge: "Private Rehab Gymnasium"
  },
  {
    id: "labs",
    title: "Diagnostic Labs & 3D Imaging",
    shortTitle: "Diagnostic Labs",
    iconName: "Microscope",
    tagline: "Automated Roche Diagnostics with Rapid 4-Hour Turnaround",
    leadDoctor: "Dr. Shireen Qureshi, MBBS, FRCPath (UK)",
    description: "Hospital-grade automated molecular pathology, cardiac biomarker panels, metabolic profiles, and sterile home sample collection by certified phlebotomists.",
    keyProcedures: [
      "Executive Longevity Blood Panel (72 Parameters)",
      "High-Sensitivity Cardiac Troponin & CRP",
      "Comprehensive Thyroid & Hormone Battery",
      "Doorstep Sterile Home Phlebotomy Dispatch"
    ],
    duration: "Results in 2–4 hours digital portal",
    priceFrom: "Rs. 4,500",
    badge: "ISO 15189 Accredited"
  },
  {
    id: "family-phy",
    title: "Family Medicine & Preventive Health",
    shortTitle: "Family Physician",
    iconName: "Stethoscope",
    tagline: "Holistic Primary Care for Lifelong Multi-Generational Wellness",
    leadDoctor: "Dr. Kamran Baig, MBBS, MRCGP (UK), Dip. Diab",
    description: "Dedicated primary physicians who understand your medical history, managing chronic conditions (diabetes, metabolic health, gut wellness) and acute seasonal ailments with compassionate continuity.",
    keyProcedures: [
      "Comprehensive Annual Executive Physical",
      "Metabolic Health & Diabetes Reversal",
      "Pediatric & Adult Vaccination Schedules",
      "Rapid Same-Day Urgent Care Consultations"
    ],
    duration: "30-45 min consultation",
    priceFrom: "Rs. 5,500",
    badge: "Same-Day Priority Access"
  }
];

export const doctorsData = [
  {
    id: "dr-mansoor",
    name: "Prof. Dr. Mansoor Tariq",
    specialty: "Consultant Cardiologist & Heart Specialist",
    department: "cardiology",
    credentials: "FRCP (London) • FCPS (Cardiology) • Member British Cardiovascular Society",
    experience: "24+ Years Clinical Leadership",
    bio: "Former Chief of Cardiology at leading teaching hospitals, Prof. Mansoor pioneers non-invasive cardiac imaging, preventive cardiovascular medicine, and personalized lipid optimization.",
    image: "/images/doctor-mansoor.jpg"
  },
  {
    id: "dr-dania",
    name: "Dr. Dania Tariq",
    specialty: "Lead Cosmetic & Restorative Dental Surgeon",
    department: "dental",
    credentials: "BDS • MSc Aesthetic Dentistry (King's College London) • AACD Member",
    experience: "12+ Years Artistry & Restorations",
    bio: "Specializing in minimal-prep Swiss porcelain veneers and zero-anxiety digital smile design, Dr. Dania pairs British clinical mastery with gentle patient reassurance.",
    image: "/images/doctor-dania.jpg"
  },
  {
    id: "dr-zill",
    name: "Dr. Syeda Zill-e-Huma",
    specialty: "Consultant Obstetrician & Gynecologist",
    department: "gynea",
    credentials: "MBBS • MRCOG (Royal College London) • FCPS (Obs & Gynae)",
    experience: "18+ Years Women's Wellness",
    bio: "Renowned for compassionate, patient-centered prenatal management, advanced gynecological ultrasound, and evidence-based hormone therapy for women across all stages of life.",
    image: "/images/doctor-zill.jpg"
  },
  {
    id: "dr-hammad",
    name: "Dr. Hammad Sher",
    specialty: "Head of Physical Therapy & Musculoskeletal Rehab",
    department: "physiotherapy",
    credentials: "DPT • MS Orthopedic Manual Therapy (Australia) • Certified Dry Needling",
    experience: "10+ Years Elite Rehabilitation",
    bio: "Pioneering posture science, non-surgical disc recovery, and functional sports rehabilitation, Dr. Hammad has treated national athletes and corporate executives with lasting results.",
    image: "/images/doctor-hammad.jpg"
  },
  {
    id: "dr-kamran",
    name: "Dr. Kamran Baig",
    specialty: "Principal Family Physician & Preventive Medicine Lead",
    department: "family-phy",
    credentials: "MBBS • MRCGP (UK) • Postgraduate Diploma in Diabetes (UK)",
    experience: "15+ Years Primary Healthcare",
    bio: "A British-trained family physician dedicated to proactive wellness, metabolic disease reversal, and long-term health stewardship for the entire household.",
    image: "/images/doctor-kamran.jpg"
  }
];

export const executivePackages = [
  {
    id: "executive-cardio",
    name: "Executive Cardio-Vascular Shield",
    target: "Executives & Individuals with Family History of Heart Disease",
    badge: "Most Popular",
    price: 38000,
    testsIncluded: 18,
    highlights: [
      "Color Doppler 3D Echocardiogram",
      "Resting 12-Lead Digital ECG",
      "Full Cardiac Biomarkers (High-Sensitivity CRP, Troponin)",
      "Advanced Lipid Subfractions & Apolipoproteins",
      "Detailed 45-Min Review with Prof. Dr. Mansoor"
    ]
  },
  {
    id: "executive-longevity",
    name: "Total Sanctuary Longevity Battery",
    target: "Comprehensive Head-to-Toe Multi-Specialty Screening",
    badge: "Flagship Assessment",
    price: 65000,
    testsIncluded: 42,
    highlights: [
      "Cardiology: Echocardiogram & ECG",
      "Labs: Full 72-Parameter Blood & Metabolic Profile",
      "Dental: 3D German Optical Scan & Airflow Hygiene",
      "Physio: Spine & Joint Ergonomic Posture Analysis",
      "Family Medicine: Comprehensive Executive Life Review"
    ]
  },
  {
    id: "well-woman-luxe",
    name: "Bespoke Well-Woman & Maternal Longevity",
    target: "Women Seeking Proactive Hormonal, Fetal or Gynecological Care",
    badge: "Dedicated Suite",
    price: 32000,
    testsIncluded: 24,
    highlights: [
      "High-Definition Pelvic & 4D Obstetric Ultrasound",
      "Complete Hormonal Screen (Thyroid, Estrogen, AMH, Prolactin)",
      "Cervical Screening & Breast Health Evaluation",
      "Bone Mineral Density & Vitamin D/B12 Matrix",
      "Private Consultation with Dr. Syeda Zill-e-Huma"
    ]
  }
];

export const trustSignals = [
  {
    author: "Zainab Shahbaz",
    location: "DHA Phase 5, Karachi",
    specialty: "Gynecology & Women's Health",
    rating: 5,
    reviewText: "Visiting Aura was completely unlike any clinical experience in Pakistan. Dr. Zill-e-Huma gave me 45 uninterrupted minutes in a tranquil, private suite with zero waiting room tension. The level of dignity, warmth, and precision was unforgettable.",
    source: "Verified Google Review"
  },
  {
    author: "Tariq Mahmood Khan",
    location: "Executive F-7, Islamabad / Overseas UAE",
    specialty: "Cardiology & Labs",
    rating: 5,
    reviewText: "I flew in from Dubai for my annual executive health checkup. Prof. Mansoor analyzed my 3D echocardiogram and lab results with incredible depth. The lab results arrived securely on WhatsApp within 3 hours. Phenomenal institution.",
    source: "Verified Executive Patient"
  },
  {
    author: "Amina Rezvi",
    location: "Gulberg III, Lahore",
    specialty: "Physiotherapy & Spine Rehab",
    rating: 5,
    reviewText: "I had suffered from cervical spinal nerve pinch for 8 months. Three sessions with Dr. Hammad's decompression and dry needling completely restored my neck mobility without surgery. The calm atmosphere made healing effortless.",
    source: "Verified Patient Review"
  }
];

export const faqData = [
  {
    question: "How does Aura Health Sanctuary ensure a zero-wait experience for busy executives and families?",
    answer: "Every appointment at Aura is strictly protected with dedicated 30 to 60-minute consultation windows. You are guided directly to a private, soundproofed consultation suite upon arrival with complimentary herbal refreshments, completely eliminating crowded, stressful waiting lobbies."
  },
  {
    question: "Can I receive cross-specialty consultations (e.g., Cardiology + Labs + Dental) in a single visit?",
    answer: "Yes. Our Multispecialty Care Coordinator can bundle multiple consultations and on-site diagnostic investigations into a unified 2-hour executive window, ensuring seamless medical collaboration between our cardiologists, physicians, and lab directors."
  },
  {
    question: "Do you offer doorstep home blood sample collection and mobile ECG dispatch?",
    answer: "Yes. Our certified phlebotomy fleet provides sterile home and office sample collection across Karachi and Lahore within 90 minutes of booking. Samples are transported in temperature-controlled cold chains directly to our automated Roche laboratory."
  },
  {
    question: "How does the virtual patient care desk and emergency protocol work?",
    answer: "Our patient care desk is active 24/7 on WhatsApp (+92 300 8899920) and direct priority telephone lines (+92 21 3587-9920). For acute medical queries or priority slot reservations, our senior clinical triage team responds in an average of under 3 minutes."
  }
];
