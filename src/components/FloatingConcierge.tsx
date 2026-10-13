'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Calendar, Phone, Clock, HeartPulse, Sparkles } from 'lucide-react';
import Link from 'next/link';
import styles from './FloatingConcierge.module.css';

export function FloatingConcierge() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.conciergeContainer}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.conciergeCard}
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.22 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.statusGroup}>
                <div className={styles.liveDot}></div>
                <div>
                  <div className={styles.cardTitle}>VIP Sanctuary Concierge</div>
                  <div className={styles.cardSubtitle}>Clifton &amp; Gulberg Multidisciplinary Desk</div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className={styles.closeBtn}
                aria-label="Close care desk"
              >
                <X size={15} />
              </button>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.cardIntro}>
                Welcome to Aura Health Sanctuary. Connect directly with our Senior Medical Care Coordinator for priority bookings or specialty inquiries.
              </p>

              <div className={styles.actionList}>
                <a 
                  href="https://wa.me/923008899920?text=Hello%20Aura%20Health%20Sanctuary%2C%20I%20would%20like%20to%20inquire%20about%20a%20specialist%20consultation." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.actionItem}
                >
                  <div className={styles.actionIcon} style={{ background: '#ecfdf5', color: '#16a34a' }}>
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <div className={styles.actionTitle}>WhatsApp Care Desk</div>
                    <div className={styles.actionDesc}>Live triage replies in &lt; 3 minutes</div>
                  </div>
                </a>

                <Link 
                  href="/booking" 
                  onClick={() => setIsOpen(false)}
                  className={styles.actionItem}
                >
                  <div className={styles.actionIcon} style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                    <Calendar size={18} />
                  </div>
                  <div>
                    <div className={styles.actionTitle}>Check Live Calendar</div>
                    <div className={styles.actionDesc}>Cardiology, Gynea, Dental &amp; Physio slots</div>
                  </div>
                </Link>

                <a 
                  href="tel:+922135879920"
                  className={styles.actionItem}
                >
                  <div className={styles.actionIcon} style={{ background: '#fef3c7', color: '#d97706' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className={styles.actionTitle}>Call Direct: (021) 3587-9920</div>
                    <div className={styles.actionDesc}>Executive Sanctuary Front Desk</div>
                  </div>
                </a>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <Clock size={12} />
              <span>Priority Response • PMDC &amp; ISO 15189 Certified</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.floatingTrigger}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle Sanctuary Concierge"
      >
        <div className={styles.triggerPulse}></div>
        {isOpen ? <X size={22} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}
