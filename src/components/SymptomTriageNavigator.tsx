'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartPulse, 
  Sparkles, 
  Flower2, 
  Activity, 
  Microscope, 
  Stethoscope, 
  ArrowRight, 
  CheckCircle2, 
  Calendar,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';
import styles from './SymptomTriageNavigator.module.css';

interface TriageOption {
  id: string;
  symptom: string;
  departmentKey: string;
  departmentName: string;
  specialistName: string;
  icon: any;
  recommendation: string;
  suggestedCheck: string;
  duration: string;
  startingFee: string;
}

const triageOptions: TriageOption[] = [
  {
    id: 'heart-flutter',
    symptom: 'Chest Flutter, Palpitations or Hypertension',
    departmentKey: 'cardiology',
    departmentName: 'Cardiology & Vascular Medicine',
    specialistName: 'Prof. Dr. Mansoor Tariq (FRCP London)',
    icon: HeartPulse,
    recommendation: 'Immediate 12-lead digital ECG, blood pressure rhythm mapping, and 3D echocardiogram review in our private cardiac lounge.',
    suggestedCheck: 'Preventive Echocardiogram + Cardiac Biomarker Screen',
    duration: '45-60 min session',
    startingFee: 'Rs. 9,500'
  },
  {
    id: 'back-spine',
    symptom: 'Chronic Lower Back, Sciatica or Neck Stiffness',
    departmentKey: 'physiotherapy',
    departmentName: 'Physiotherapy & Spine Rehabilitation',
    specialistName: 'Dr. Hammad Sher (DPT, MS Australia)',
    icon: Activity,
    recommendation: 'Biomechanical spinal decompression, functional movement analysis, and targeted dry needling to decompress pinched nerves without surgery.',
    suggestedCheck: 'Computerized Spinal Decompression + Posture Audit',
    duration: '60 min clinical therapy',
    startingFee: 'Rs. 6,000'
  },
  {
    id: 'maternal-hormonal',
    symptom: 'Prenatal Care, 4D Ultrasound or PCOS / Hormones',
    departmentKey: 'gynea',
    departmentName: 'Obstetrics & Women\'s Health',
    specialistName: 'Dr. Syeda Zill-e-Huma (MRCOG UK, FCPS)',
    icon: Flower2,
    recommendation: 'Private, unhurried consultation with high-definition 4D ultrasound fetal evaluation, endocrine profiling, and tailored lifestyle therapy.',
    suggestedCheck: '4D Anomaly Fetal Ultrasound or Well-Woman Hormone Battery',
    duration: '45 min private consultation',
    startingFee: 'Rs. 7,500'
  },
  {
    id: 'dental-smile',
    symptom: 'Cosmetic Veneers, Missing Tooth or Tooth Pain',
    departmentKey: 'dental',
    departmentName: 'Aesthetic & Restorative Dental Lounge',
    specialistName: 'Dr. Dania Tariq (BDS, MSc King\'s College)',
    icon: Sparkles,
    recommendation: 'High-resolution German 3D intraoral digital scanning with zero-pinch Wand anesthesia for painless smile restoration and veneer architecture.',
    suggestedCheck: 'Digital Smile Makeover Scan + German 3D Intraoral Exam',
    duration: '45-60 min session',
    startingFee: 'Rs. 8,500'
  },
  {
    id: 'routine-labs',
    symptom: 'Full Executive Bloods, Fatigue or Home Collection',
    departmentKey: 'labs',
    departmentName: 'Diagnostic Labs & 3D Imaging',
    specialistName: 'Dr. Shireen Qureshi (FRCPath UK)',
    icon: Microscope,
    recommendation: 'Automated 72-parameter molecular blood profile with doorstep sterile cold-chain sample dispatch and digital results delivered in under 4 hours.',
    suggestedCheck: 'Executive Longevity Blood Panel (72 Parameters)',
    duration: 'Results in 2-4 hours',
    startingFee: 'Rs. 4,500'
  },
  {
    id: 'general-wellness',
    symptom: 'Unexplained Fatigue, Chronic Disease or Annual Physical',
    departmentKey: 'family-phy',
    departmentName: 'Family Medicine & Primary Care',
    specialistName: 'Dr. Kamran Baig (MRCGP UK, Dip. Diab)',
    icon: Stethoscope,
    recommendation: 'Comprehensive whole-body physical examination, metabolic health review, and proactive preventative plan for your lifelong wellbeing.',
    suggestedCheck: 'Comprehensive Executive Annual Physical Exam',
    duration: '45 min consultation',
    startingFee: 'Rs. 5,500'
  }
];

export function SymptomTriageNavigator() {
  const [selectedId, setSelectedId] = useState<string>('heart-flutter');

  const selectedTriage = triageOptions.find(item => item.id === selectedId) || triageOptions[0];

  return (
    <div className={styles.triageWrapper} id="triage">
      <div className={styles.triageHeader}>
        <span className="section-tag">
          <ShieldCheck size={14} style={{ display: 'inline', marginRight: 4 }} />
          Clinical Navigation Tool
        </span>
        <h2 className={styles.triageTitle}>Intelligent Specialist Triage Navigator</h2>
        <p className={styles.triageSub}>
          Select your primary symptom or health goal below. Our triage engine will pinpoint the recommended clinical department, lead specialist, and next diagnostic step.
        </p>
      </div>

      <div className={styles.symptomGrid}>
        {triageOptions.map((opt) => {
          const Icon = opt.icon;
          const isSelected = selectedId === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              className={`${styles.symptomPill} ${isSelected ? styles.symptomPillActive : ''}`}
              onClick={() => setSelectedId(opt.id)}
            >
              <div className={styles.symptomIcon}>
                <Icon size={20} />
              </div>
              <div>
                <div className={styles.symptomName}>{opt.symptom}</div>
                <div className={styles.symptomDept}>{opt.departmentName.split('&')[0]}</div>
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTriage.id}
          className={styles.resultCard}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <div>
            <div className={styles.resultBadge}>
              <CheckCircle2 size={13} />
              <span>Recommended Specialty Pathway</span>
            </div>
            <h3 className={styles.resultTitle}>{selectedTriage.departmentName}</h3>
            <p className={styles.resultDesc}>{selectedTriage.recommendation}</p>

            <div className={styles.metaList}>
              <div className={styles.metaBox}>
                <div className={styles.metaLabel}>Attending Consultant</div>
                <div className={styles.metaValue}>{selectedTriage.specialistName}</div>
              </div>
              <div className={styles.metaBox}>
                <div className={styles.metaLabel}>Recommended Assessment</div>
                <div className={styles.metaValue}>{selectedTriage.suggestedCheck}</div>
              </div>
              <div className={styles.metaBox}>
                <div className={styles.metaLabel}>Consultation Duration</div>
                <div className={styles.metaValue}>{selectedTriage.duration}</div>
              </div>
              <div className={styles.metaBox}>
                <div className={styles.metaLabel}>Starting Investment</div>
                <div className={styles.metaValue}>{selectedTriage.startingFee}</div>
              </div>
            </div>
          </div>

          <div className={styles.resultActionCol}>
            <div className={styles.actionNote}>
              Direct private consultation with guaranteed zero wait time and dedicated care concierge.
            </div>

            <Link 
              href={`/booking?department=${selectedTriage.departmentKey}`}
              className="btn-gold"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Calendar size={16} />
              <span>Book Priority Window</span>
            </Link>

            <a 
              href={`https://wa.me/923008899920?text=Hi%20Aura%20Sanctuary,%20I%20used%20your%20triage%20navigator%20for%20${encodeURIComponent(selectedTriage.symptom)}.%20I%20would%20like%20to%20consult%20with%20${encodeURIComponent(selectedTriage.specialistName)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center', background: 'transparent', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <MessageCircle size={16} color="#22c55e" />
              <span>Inquire via WhatsApp Desk</span>
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
