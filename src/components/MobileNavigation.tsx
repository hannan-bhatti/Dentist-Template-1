'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, MessageCircle, ChevronRight, ShieldCheck, HeartPulse } from 'lucide-react';
import styles from './MobileNavigation.module.css';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const links = [
    { href: '/#specialties', label: 'Medical Specialties', desc: 'Cardiology, Dental, Gynea, Physio, Labs & Family' },
    { href: '/#triage', label: 'Symptom Triage', desc: 'Intelligent Specialist Pathway Guide' },
    { href: '/#packages', label: 'Executive Checkups', desc: 'Preventive Health & Longevity Batteries' },
    { href: '/#doctors', label: 'Medical Board', desc: 'Consultants & Department Leaders' },
    { href: '/#reviews', label: 'Patient Stories', desc: '1,450+ Verified 5-Star Reviews' },
    { href: '/services', label: 'Full Clinical Menu', desc: 'Complete Treatment & Diagnostic Directory' },
    { href: '/booking', label: 'Priority Booking', desc: 'Live Real-Time Calendar Synchronization' }
  ];

  return (
    <div className={styles.mobileNavWrapper}>
      <a href="tel:+922135879920" className={styles.quickCallBtn} aria-label="Direct Phone Line">
        <Phone size={17} />
      </a>

      <Link href="/booking" className={styles.quickBookBtn}>
        <Calendar size={14} />
        <span>Book</span>
      </Link>

      <button 
        className={styles.hamburgerBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Menu" : "Open Navigation"}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div 
              className={styles.drawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            >
              <div className={styles.drawerHeader}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    <HeartPulse size={18} />
                  </div>
                  <strong style={{ fontSize: '1.05rem', color: 'var(--text-heading)' }}>Aura Sanctuary</strong>
                </div>
                <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                  <X size={18} />
                </button>
              </div>

              <div className={styles.drawerBody}>
                <div className={styles.navLinksList}>
                  {links.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href}
                      className={styles.navItem}
                      onClick={() => setIsOpen(false)}
                    >
                      <div>
                        <div className={styles.navLabel}>{link.label}</div>
                        <div className={styles.navDesc}>{link.desc}</div>
                      </div>
                      <ChevronRight size={16} color="var(--primary)" />
                    </Link>
                  ))}
                </div>

                <div className={styles.drawerActions}>
                  <Link 
                    href="/booking" 
                    className="btn-primary" 
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Calendar size={16} />
                    <span>Reserve Consultation</span>
                  </Link>

                  <a 
                    href="https://wa.me/923008899920" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-whatsapp" 
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <MessageCircle size={17} color="#ffffff" />
                    <span>WhatsApp Care Desk</span>
                  </a>
                </div>
              </div>

              <div className={styles.drawerFooter}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                  <ShieldCheck size={14} color="var(--accent-emerald)" />
                  <span>PMDC &amp; ISO 15189 Accredited Sanctuary</span>
                </div>
                <div>Executive Enclave, Clifton Block 4, Karachi</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
