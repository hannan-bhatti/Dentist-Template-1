'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle, 
  Calendar,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { executivePackages } from '@/lib/mockData';
import styles from './ExecutiveCheckupCalculator.module.css';

interface AddOnOption {
  id: string;
  name: string;
  department: string;
  price: number;
}

const addOnsList: AddOnOption[] = [
  { id: 'fetal-ultrasound', name: 'High-Definition 4D Fetal & Anomaly Scan', department: 'Gynecology', price: 12000 },
  { id: 'spine-decompression', name: 'Computerized Spinal Decompression Therapy', department: 'Physiotherapy', price: 8000 },
  { id: 'dental-3d-scan', name: 'German 3D Intraoral Scan & Airflow Hygiene', department: 'Dental', price: 11000 },
  { id: 'home-sample-dispatch', name: 'VIP Doorstep Phlebotomy Home Collection', department: 'Diagnostic Labs', price: 3500 },
  { id: 'holter-telemetry', name: '24-Hour Continuous Holter Rhythm Telemetry', department: 'Cardiology', price: 9500 }
];

export function ExecutiveCheckupCalculator() {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('executive-longevity');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['dental-3d-scan']);

  const activePackage = executivePackages.find(p => p.id === selectedPackageId) || executivePackages[0];

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter(item => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const { totalPrice, emiMonthly } = useMemo(() => {
    let total = activePackage.price;
    selectedAddOns.forEach(addOnId => {
      const match = addOnsList.find(a => a.id === addOnId);
      if (match) total += match.price;
    });
    const emi = Math.round(total / 6);
    return { totalPrice: total, emiMonthly: emi };
  }, [activePackage, selectedAddOns]);

  const whatsappMessage = encodeURIComponent(
    `Hello Aura Sanctuary! I used your Executive Checkup Estimator to configure the "${activePackage.name}" with ${selectedAddOns.length} selected clinical add-ons (Total Estimate: Rs. ${totalPrice.toLocaleString()}). I would like to schedule this executive session.`
  );

  return (
    <div className={styles.calcSection} id="packages">
      <div className={styles.calcHeader}>
        <span className="section-tag">
          <Calculator size={14} style={{ display: 'inline', marginRight: 4 }} />
          Health Packages
        </span>
        <h2 className="section-title">Health Check Package Calculator</h2>
        <p className="section-subtitle">
          Clear, transparent pricing. Choose a health check package below, customize with any extra tests you need, and view your estimate instantly.
        </p>
      </div>

      <div className={styles.calcGrid}>
        <div className={styles.optionsCard}>
          <span className={styles.sectionLabel}>1. Select Core Health Battery</span>
          <div className={styles.packageSelector}>
            {executivePackages.map((pkg) => {
              const isSelected = selectedPackageId === pkg.id;
              return (
                <button
                  key={pkg.id}
                  type="button"
                  className={`${styles.packageBtn} ${isSelected ? styles.packageBtnActive : ''}`}
                  onClick={() => setSelectedPackageId(pkg.id)}
                >
                  <div>
                    <div className={styles.packageName}>
                      {pkg.name}
                      <span style={{ marginLeft: 8, fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                        [{pkg.badge}]
                      </span>
                    </div>
                    <div className={styles.packageTarget}>{pkg.target}</div>
                  </div>
                  <div className={styles.packagePriceTag}>
                    Rs. {pkg.price.toLocaleString()}
                  </div>
                </button>
              );
            })}
          </div>

          <span className={styles.sectionLabel}>2. Tailor Additional Multispecialty Add-Ons</span>
          <div className={styles.addOnList}>
            {addOnsList.map((addon) => {
              const isChecked = selectedAddOns.includes(addon.id);
              return (
                <button
                  key={addon.id}
                  type="button"
                  className={`${styles.addOnItem} ${isChecked ? styles.addOnItemActive : ''}`}
                  onClick={() => toggleAddOn(addon.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textAlign: 'left' }}>
                    <div style={{
                      width: 22, 
                      height: 22, 
                      borderRadius: 6, 
                      border: '1px solid var(--border-subtle)',
                      background: isChecked ? 'var(--primary)' : '#ffffff',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {isChecked && <Check size={14} />}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-heading)' }}>
                        {addon.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {addon.department} Specialty Unit
                      </div>
                    </div>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary)' }}>
                    +Rs. {addon.price.toLocaleString()}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryBadge}>
            <Sparkles size={14} />
            <span>Consolidated Executive Assessment</span>
          </div>

          <div style={{ fontSize: '0.85rem', color: '#b5cdc6', marginBottom: '0.35rem' }}>
            Estimated Package Total
          </div>
          <div className={styles.totalPrice}>
            Rs. {totalPrice.toLocaleString()}
          </div>
          <div className={styles.emiText}>
            Or 6 monthly payments of <strong>Rs. {emiMonthly.toLocaleString()} / mo</strong> (0% markup)
          </div>

          <div className={styles.highlightsList}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Core Inclusions:
            </div>
            {activePackage.highlights.map((h, i) => (
              <div key={i} className={styles.highlightItem}>
                <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>{h}</span>
              </div>
            ))}
          </div>

          <div className={styles.actionStack}>
            <Link 
              href={`/booking?package=${activePackage.id}`}
              className="btn-gold"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Calendar size={16} />
              <span>Reserve Executive Session</span>
            </Link>

            <a 
              href={`https://wa.me/923008899920?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center', background: 'transparent', color: '#ffffff', borderColor: 'rgba(255,255,255,0.25)' }}
            >
              <MessageCircle size={16} color="#22c55e" />
              <span>Inquire via WhatsApp Desk</span>
            </a>
          </div>

          <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem', fontSize: '0.75rem', color: '#b5cdc6' }}>
            <ShieldCheck size={14} color="var(--accent-gold)" />
            <span>Dedicated Private Suite &bull; Complimentary Kashmiri Kahwa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
