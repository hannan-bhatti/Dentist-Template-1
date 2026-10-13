'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './booking.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar as CalendarIcon, 
  FileText, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Shield, 
  Clock, 
  UserCheck, 
  Sparkles, 
  Check,
  CalendarCheck
} from 'lucide-react';

export function BookingClientWrapper() {
  const searchParams = useSearchParams();

  const initialDept = searchParams.get('department') || 'cardiology';
  const initialDoctor = searchParams.get('doctor') || 'any';

  const [selectedDept, setSelectedDept] = useState(initialDept);
  const [selectedDoctor, setSelectedDoctor] = useState(initialDoctor);

  const upcomingDays = useMemo(() => {
    const days = [];
    const base = new Date();
    let count = 0;
    let offset = 0;

    while (count < 5) {
      const d = new Date(base);
      d.setDate(base.getDate() + offset);
      const dayOfWeek = d.getDay();
      if (dayOfWeek !== 0) { // Monday to Saturday
        days.push({
          dateObj: d,
          dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
          dayNum: d.getDate(),
          monthName: d.toLocaleDateString('en-US', { month: 'short' }),
          fullDateString: d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }),
        });
        count++;
      }
      offset++;
    }
    return days;
  }, []);

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState('10:30 AM');

  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [healthNotes, setHealthNotes] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(['Bose 432Hz Soundscape', 'Private Suite Aromatherapy']);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleAmenity = (item: string) => {
    if (selectedAmenities.includes(item)) {
      setSelectedAmenities(selectedAmenities.filter(i => i !== item));
    } else {
      setSelectedAmenities([...selectedAmenities, item]);
    }
  };

  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const deptNames: Record<string, string> = {
    'cardiology': 'Cardiology & Vascular Medicine',
    'dental': 'Aesthetic & Painless Dentistry',
    'gynea': 'Obstetrics & Women\'s Health',
    'physiotherapy': 'Physiotherapy & Spine Rehab',
    'labs': 'Diagnostic Molecular Labs',
    'family-phy': 'Family Medicine & Primary Care'
  };

  const doctorNames: Record<string, string> = {
    'dr-mansoor': 'Prof. Dr. Mansoor Tariq (Cardiology Lead)',
    'dr-dania': 'Dr. Dania Tariq (Aesthetic Dental Lead)',
    'dr-zill': 'Dr. Syeda Zill-e-Huma (Gynecology Lead)',
    'dr-hammad': 'Dr. Hammad Sher (Physiotherapy Lead)',
    'dr-kamran': 'Dr. Kamran Baig (Family Medicine Lead)',
    'any': 'First Available Department Consultant'
  };

  const selectedDay = upcomingDays[selectedDayIndex] || upcomingDays[0];

  return (
    <>
      <section className={styles.bookingHero}>
        <div className="container">
          <span className="section-tag">Direct Clinical Scheduling</span>
          <h1 className="section-title">Reserve Your Sanctuary Consultation</h1>
          <p className="section-subtitle">
            Synchronize your private appointment in real time, or complete paperless check-in before arrival.
          </p>

          <div className={styles.stepBar}>
            <div className={styles.stepItem}>
              <div className={styles.stepNum}>1</div>
              <span>Select Date &amp; Window</span>
            </div>
            <div style={{ color: 'var(--text-muted)' }}>&rarr;</div>
            <div className={styles.stepItem}>
              <div className={styles.stepNum} style={{ background: isSubmitted ? 'var(--accent-emerald)' : 'var(--primary)' }}>2</div>
              <span>Digital Health Intake</span>
            </div>
            <div style={{ color: 'var(--text-muted)' }}>&rarr;</div>
            <div className={styles.stepItem}>
              <div 
                className={styles.stepNum}
                style={{ 
                  background: isSubmitted ? 'var(--accent-emerald)' : 'var(--bg-subtle)',
                  color: isSubmitted ? '#ffffff' : 'var(--text-muted)',
                  border: isSubmitted ? 'none' : '1px solid var(--border-subtle)'
                }}
              >
                ✓
              </div>
              <span style={{ color: isSubmitted ? 'var(--accent-emerald)' : 'inherit' }}>Instant Confirmation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.portalContainer}>
            {/* Step 1: Slot Chooser */}
            <motion.div 
              className={styles.bookingCard}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <CalendarIcon size={24} />
                </div>
                <div>
                  <h2 className={styles.cardTitle}>Step 1: Choose Specialty &amp; Time</h2>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>Zero-Wait Window Protected</span>
                </div>
              </div>

              <p className={styles.cardDesc}>
                Select an open consultation window with our department leaders. You will receive an instant calendar invite and SMS confirmation.
              </p>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Clinical Department</label>
                <select 
                  className={styles.customSelect}
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                >
                  <option value="cardiology">Cardiology &amp; Vascular Medicine</option>
                  <option value="dental">Aesthetic &amp; Painless Dentistry</option>
                  <option value="gynea">Obstetrics &amp; Women&apos;s Health</option>
                  <option value="physiotherapy">Physiotherapy &amp; Spine Rehab</option>
                  <option value="labs">Diagnostic Molecular Labs</option>
                  <option value="family-phy">Family Medicine &amp; Primary Care</option>
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Consultant Specialist</label>
                <select 
                  className={styles.customSelect}
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                >
                  <option value="any">First Available Senior Consultant</option>
                  <option value="dr-mansoor">Prof. Dr. Mansoor Tariq (Cardiology)</option>
                  <option value="dr-dania">Dr. Dania Tariq (Aesthetic Dental)</option>
                  <option value="dr-zill">Dr. Syeda Zill-e-Huma (Gynecology)</option>
                  <option value="dr-hammad">Dr. Hammad Sher (Physiotherapy)</option>
                  <option value="dr-kamran">Dr. Kamran Baig (Family Medicine)</option>
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Select Consultation Date</label>
                <div className={styles.dateStrip}>
                  {upcomingDays.map((day, idx) => {
                    const isActive = selectedDayIndex === idx;
                    return (
                      <button
                        key={day.dayName + day.dayNum}
                        type="button"
                        className={`${styles.datePill} ${isActive ? styles.datePillActive : ''}`}
                        onClick={() => setSelectedDayIndex(idx)}
                      >
                        <span className={styles.dateDay}>{day.dayName}</span>
                        <span className={styles.dateNum}>{day.dayNum}</span>
                        <span className={styles.dateMonth}>{day.monthName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={styles.slotsContainer}>
                <div className={styles.slotPeriodTitle}>Morning Windows (9 AM – 1 PM)</div>
                <div className={styles.slotGrid}>
                  {['09:30 AM', '10:30 AM', '11:45 AM'].map((slot) => {
                    const isActive = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        className={`${styles.slotBtn} ${isActive ? styles.slotBtnActive : ''}`}
                        onClick={() => setSelectedSlot(slot)}
                      >
                        {isActive && <Check size={14} />}
                        {slot}
                      </button>
                    );
                  })}
                </div>

                <div className={styles.slotPeriodTitle}>Afternoon Windows (2 PM – 6 PM)</div>
                <div className={styles.slotGrid}>
                  {['02:15 PM', '03:30 PM', '05:00 PM'].map((slot) => {
                    const isActive = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        className={`${styles.slotBtn} ${isActive ? styles.slotBtnActive : ''}`}
                        onClick={() => setSelectedSlot(slot)}
                      >
                        {isActive && <Check size={14} />}
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={styles.selectedSummary}>
                <div>
                  <div className={styles.summaryDoc}>
                    {doctorNames[selectedDoctor] || 'Senior Department Consultant'}
                  </div>
                  <div className={styles.summaryTime}>
                    {deptNames[selectedDept]} &bull; {selectedDay.fullDateString} at {selectedSlot}
                  </div>
                </div>
                <CheckCircle2 size={22} color="var(--primary)" />
              </div>
            </motion.div>

            {/* Step 2: Intake Card */}
            <motion.div 
              className={styles.intakeCard}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <FileText size={24} />
                </div>
                <div>
                  <h2 className={styles.cardTitle}>Step 2: Paperless Check-in</h2>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>HIPAA &amp; PMDC Encrypted</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className={styles.cardDesc}>
                      Skip the waiting room paperwork entirely. Submit your medical background before arrival for seamless triage.
                    </p>

                    <form onSubmit={handleIntakeSubmit}>
                      <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Full Legal Name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Sajjad Ahmed"
                          className={styles.formInput}
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                        />
                      </div>

                      <div className={styles.twoCol}>
                        <div className={styles.fieldGroup}>
                          <label className={styles.fieldLabel}>Mobile Number *</label>
                          <input 
                            type="tel" 
                            required
                            placeholder="+92 300 1234567"
                            className={styles.formInput}
                            value={patientPhone}
                            onChange={(e) => setPatientPhone(e.target.value)}
                          />
                        </div>

                        <div className={styles.fieldGroup}>
                          <label className={styles.fieldLabel}>Email Address *</label>
                          <input 
                            type="email" 
                            required
                            placeholder="sajjad@example.com"
                            className={styles.formInput}
                            value={patientEmail}
                            onChange={(e) => setPatientEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Sanctuary Lounge Comfort Preferences</label>
                        <div className={styles.tagPillContainer}>
                          {[
                            'Bose 432Hz Soundscape',
                            'Private Suite Aromatherapy',
                            'Kashmiri Kahwa Refresher',
                            'Zero-Pinch Numbing Protocol',
                            'Female Chaperone Present'
                          ].map((item) => {
                            const isChosen = selectedAmenities.includes(item);
                            return (
                              <button
                                key={item}
                                type="button"
                                className={`${styles.tagPill} ${isChosen ? styles.tagPillActive : ''}`}
                                onClick={() => toggleAmenity(item)}
                              >
                                {isChosen ? '✓ ' : '+ '} {item}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Primary Health Symptom or Clinical Goal</label>
                        <textarea 
                          rows={3}
                          placeholder="e.g., Follow up on high blood pressure readings; interested in 3D echocardiogram..."
                          className={styles.formTextarea}
                          value={healthNotes}
                          onChange={(e) => setHealthNotes(e.target.value)}
                        />
                      </div>

                      <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                        <Shield size={18} />
                        <span>{isSubmitting ? 'Securing Priority Window...' : 'Confirm & Reserve Sanctuary Slot'}</span>
                      </button>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.75rem' }}>
                        <Shield size={12} color="var(--accent-emerald)" />
                        <span>256-Bit SSL Encrypted &bull; Strictly Confidential Medical Record</span>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="confirmation"
                    className={styles.confirmationContainer}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.confirmIconBox}>
                      <CalendarCheck size={32} />
                    </div>
                    <h3 className={styles.confirmTitle}>Sanctuary Window Reserved!</h3>
                    <p className={styles.confirmSub}>
                      Thank you, <strong>{patientName || 'Guest'}</strong>. Your consultation has been synchronized with the senior care desk.
                    </p>

                    <div className={styles.confirmDetailCard}>
                      <div className={styles.confirmDetailRow}>
                        <span>Department:</span>
                        <span>{deptNames[selectedDept]}</span>
                      </div>
                      <div className={styles.confirmDetailRow}>
                        <span>Doctor:</span>
                        <span>{doctorNames[selectedDoctor]}</span>
                      </div>
                      <div className={styles.confirmDetailRow}>
                        <span>Date &amp; Time:</span>
                        <span>{selectedDay.fullDateString} at {selectedSlot}</span>
                      </div>
                      <div className={styles.confirmDetailRow}>
                        <span>Location:</span>
                        <span>Sanctuary Tower, Clifton Block 4, Karachi</span>
                      </div>
                    </div>

                    <div className={styles.confirmActions}>
                      <a 
                        href={`https://wa.me/923008899920?text=Hello%20Aura%20Sanctuary,%20I%20just%20reserved%20a%20consultation%20for%20${encodeURIComponent(deptNames[selectedDept])}%20on%20${encodeURIComponent(selectedDay.fullDateString)}%20at%20${encodeURIComponent(selectedSlot)}.%20Please%20confirm%20my%20details.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        <MessageCircle size={16} color="#ffffff" />
                        <span>Open WhatsApp Care Desk</span>
                      </a>

                      <button 
                        type="button"
                        className="btn-secondary"
                        onClick={() => setIsSubmitted(false)}
                        style={{ justifyContent: 'center' }}
                      >
                        Modify or Book Another Slot
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
