'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartPulse, 
  Sparkles, 
  Flower2, 
  Activity, 
  Microscope, 
  Stethoscope, 
  Star, 
  ArrowRight, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown, 
  Phone, 
  MessageCircle, 
  Award,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { TiltCard } from '@/components/TiltCard';
import { SanctuaryAudioPlayer } from '@/components/SanctuaryAudioPlayer';
import { SymptomTriageNavigator } from '@/components/SymptomTriageNavigator';
import { ExecutiveCheckupCalculator } from '@/components/ExecutiveCheckupCalculator';
import { FloatingConcierge } from '@/components/FloatingConcierge';

const specialtyIconMap: Record<string, any> = {
  'cardiology': HeartPulse,
  'dental': Sparkles,
  'gynea': Flower2,
  'physiotherapy': Activity,
  'labs': Microscope,
  'family-phy': Stethoscope,
};

export function HomeClientWrapper({
  heroData,
  specialtiesData,
  doctorsData,
  trustSignals,
  faqData
}: any) {
  const [selectedDept, setSelectedDept] = useState('cardiology');
  const [selectedDoctor, setSelectedDoctor] = useState('any');
  const [selectedWindow, setSelectedWindow] = useState('morning');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <motion.div 
              className={styles.heroContent}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.heroBadge}>
                <span className={styles.pulseDot}></span>
                <span>{heroData.badge}</span>
              </div>

              <h1 className={styles.heroHeadline}>
                Multispecialty Medicine Elevated for{' '}
                <span className={styles.heroHeadlineGradient}>Calm, Unhurried Healing.</span>
              </h1>

              <p className={styles.heroSubheadline}>
                {heroData.subheadline}
              </p>

              <div className={styles.heroActions}>
                <Link href="/booking" className="btn-primary">
                  <span>{heroData.primaryCtaText}</span>
                  <ArrowRight size={17} />
                </Link>

                <a href="#specialties" className="btn-secondary">
                  <span>{heroData.secondaryCtaText}</span>
                </a>
              </div>

              <div className={styles.ratingSnippet}>
                <div className={styles.ratingStars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#c5a059" stroke="#c5a059" />
                  ))}
                </div>
                <span><strong>4.96/5 Star Rating</strong> from 1,450+ Verified Patients Across Pakistan &amp; Overseas</span>
              </div>
            </motion.div>

            {/* Right Visual Frame */}
            <motion.div 
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className={styles.floatingCardTop}>
                <div className={styles.floatingCardIcon}>
                  <HeartPulse size={20} />
                </div>
                <div>
                  <div className={styles.floatingCardTitle}>Live Cardiology Lounge Active</div>
                  <div className={styles.floatingCardSub}>Next Open Window: 2:00 PM Today</div>
                </div>
              </div>

              <div className={styles.heroImageFrame}>
                <div className={styles.visualInner}>
                  <span className={styles.visualPill}>
                    <Sparkles size={13} />
                    Integrated Medical Sanctuary
                  </span>
                  <h3 style={{ fontSize: '1.75rem', lineHeight: 1.3 }}>
                    Six Centers of Clinical Excellence Under One Soothing Roof
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#b5cdc6', maxWidth: 360 }}>
                    Cardiology • Dental Artistry • Obstetrics &amp; Gynea • Spinal Physiotherapy • Diagnostic Labs • Family Medicine
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', padding: '0.3rem 0.65rem', borderRadius: 6, background: 'rgba(255,255,255,0.1)' }}>
                      Zero Waiting Room Policy
                    </span>
                    <span style={{ fontSize: '0.75rem', padding: '0.3rem 0.65rem', borderRadius: 6, background: 'rgba(255,255,255,0.1)' }}>
                      Private Suites
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.floatingCardBottom}>
                <div className={styles.floatingCardIcon} style={{ background: '#ecfdf5', color: '#059669' }}>
                  <Award size={20} />
                </div>
                <div>
                  <div className={styles.floatingCardTitle}>British &amp; Royal College Fellows</div>
                  <div className={styles.floatingCardSub}>Senior Multidisciplinary Board</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. HERO QUICK-BOOKING BAR */}
      <section className={styles.bookingBarWrapper}>
        <div className="container">
          <motion.div 
            className={styles.bookingBar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.bookingField}>
              <label className={styles.fieldLabel}>
                <Sparkles size={13} /> Clinical Department
              </label>
              <select 
                className={styles.fieldSelect}
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                <option value="cardiology">Cardiology &amp; Vascular Medicine</option>
                <option value="dental">Aesthetic &amp; Painless Dentistry</option>
                <option value="gynea">Obstetrics &amp; Women&apos;s Health</option>
                <option value="physiotherapy">Physiotherapy &amp; Spine Rehab</option>
                <option value="labs">Diagnostic Molecular Labs (Roche)</option>
                <option value="family-phy">Family Medicine &amp; Primary Care</option>
              </select>
            </div>

            <div className={styles.bookingField}>
              <label className={styles.fieldLabel}>
                <Award size={13} /> Consultant Specialist
              </label>
              <select 
                className={styles.fieldSelect}
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

            <div className={styles.bookingField}>
              <label className={styles.fieldLabel}>
                <Clock size={13} /> Preferred Window
              </label>
              <select 
                className={styles.fieldSelect}
                value={selectedWindow}
                onChange={(e) => setSelectedWindow(e.target.value)}
              >
                <option value="morning">Morning Executive Slot (9 AM – 1 PM)</option>
                <option value="afternoon">Afternoon Priority Slot (1 PM – 5 PM)</option>
                <option value="evening">Late Evening Private Slot (5 PM – 8 PM)</option>
              </select>
            </div>

            <div>
              <Link 
                href={`/booking?department=${selectedDept}&doctor=${selectedDoctor}&window=${selectedWindow}`}
                className="btn-gold"
                style={{ padding: '0.85rem 1.75rem', width: '100%' }}
              >
                <Calendar size={16} />
                <span>Check Live Calendar</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CLINICAL SPECIALTIES DIRECTORY */}
      <section id="specialties" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Multidisciplinary Excellence</span>
            <h2 className="section-title">Six Integrated Medical Centers</h2>
            <p className="section-subtitle">
              World-class clinical expertise, European diagnostic instrumentation, and private consultation suites designed to restore both body and peace of mind.
            </p>
          </div>

          <div className={styles.specialtiesGrid}>
            {specialtiesData.map((spec: any, i: number) => {
              const Icon = specialtyIconMap[spec.id] || Sparkles;
              return (
                <TiltCard key={spec.id} maxTilt={6} scale={1.02}>
                  <motion.div 
                    className={styles.specialtyCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div>
                      <div className={styles.specialtyHeader}>
                        <div className={styles.specialtyIconBox}>
                          <Icon size={26} />
                        </div>
                        <span className={styles.specialtyBadge}>{spec.badge}</span>
                      </div>

                      <h3 className={styles.specialtyTitle}>{spec.title}</h3>
                      <div className={styles.specialtyDoctor}>Led by: {spec.leadDoctor}</div>
                      <p className={styles.specialtyDesc}>{spec.description}</p>

                      <div className={styles.procedureList}>
                        {spec.keyProcedures.map((proc: string, pIdx: number) => (
                          <div key={pIdx} className={styles.procedureItem}>
                            <CheckCircle2 size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                            <span>{proc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.specialtyFooter}>
                      <div>
                        <div className={styles.priceLabel}>Consultation From</div>
                        <div className={styles.priceValue}>{spec.priceFrom}</div>
                      </div>
                      <Link 
                        href={`/booking?department=${spec.id}`}
                        className="btn-primary"
                        style={{ padding: '0.65rem 1.35rem', fontSize: '0.85rem' }}
                      >
                        Reserve Slot
                      </Link>
                    </div>
                  </motion.div>
                </TiltCard>
              );
            })}
          </div>

          {/* Real-Time Ambient Soundscape Player */}
          <SanctuaryAudioPlayer />
        </div>
      </section>

      {/* 4. INTERACTIVE SYMPTOM & TRIAGE NAVIGATOR */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SymptomTriageNavigator />
        </div>
      </section>

      {/* 5. EXECUTIVE CHECKUP CALCULATOR */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ExecutiveCheckupCalculator />
        </div>
      </section>

      {/* 6. MEDICAL BOARD / DOCTORS */}
      <section id="doctors" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Clinical Stewardship</span>
            <h2 className="section-title">Senior Consultant Medical Board</h2>
            <p className="section-subtitle">
              Trained at the UK Royal Colleges, King&apos;s College London, and premier international teaching hospitals, our specialists dedicate unhurried attention to every patient.
            </p>
          </div>

          <div className={styles.doctorsGrid}>
            {doctorsData.map((doc: any, i: number) => (
              <TiltCard key={doc.id} maxTilt={6} scale={1.02}>
                <motion.div 
                  className={styles.doctorCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div>
                    <div className={styles.doctorHeader}>
                      <div className={styles.doctorAvatar}>
                        {doc.name.replace('Prof. ', '').replace('Dr. ', '').split(' ')[0][0]}
                        {doc.name.split(' ').slice(-1)[0][0]}
                      </div>
                      <div>
                        <h3 className={styles.doctorName}>{doc.name}</h3>
                        <div className={styles.doctorSpecialty}>{doc.specialty}</div>
                      </div>
                    </div>

                    <div className={styles.doctorCredentials}>{doc.credentials}</div>
                    <p className={styles.doctorBio}>{doc.bio}</p>
                  </div>

                  <Link 
                    href={`/booking?doctor=${doc.id}&department=${doc.department}`}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem' }}
                  >
                    <Calendar size={15} />
                    <span>Consult with {doc.name.split(',')[0].replace('Prof. ', '')}</span>
                  </Link>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PATIENT STORIES */}
      <section id="reviews" className="section" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Verified Patient Voices</span>
            <h2 className="section-title">Patient Testimonials &amp; Stories</h2>
            <p className="section-subtitle">
              Read authentic experiences from executives, families, and international patients who trust Aura Sanctuary for their clinical care.
            </p>
          </div>

          <div className={styles.reviewsGrid}>
            {trustSignals.map((review: any, i: number) => (
              <motion.div 
                key={i}
                className={styles.reviewCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.25rem' }}>
                    {[...Array(review.rating || 5)].map((_, r) => (
                      <Star key={r} size={16} fill="#c5a059" stroke="#c5a059" />
                    ))}
                  </div>
                  <p className={styles.reviewQuote}>&ldquo;{review.reviewText}&rdquo;</p>
                </div>

                <div className={styles.reviewerMeta}>
                  <div>
                    <div className={styles.reviewerName}>{review.author}</div>
                    <div className={styles.reviewerLoc}>{review.location}</div>
                  </div>
                  <div className={styles.reviewerDept}>{review.specialty}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section id="faq" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Transparent Care</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Answers regarding our private consultation windows, home phlebotomy, and insurance coordination.
            </p>
          </div>

          <div className={styles.faqContainer}>
            {faqData.map((faq: any, index: number) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={styles.faqItem}>
                  <button 
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={20} color="var(--primary)" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className={styles.faqAnswer}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. VIP CTA BANNER */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div 
            className={styles.vipBanner}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className={styles.visualPill} style={{ marginBottom: '1rem' }}>
              <Sparkles size={14} color="#c5a059" />
              Private Sanctuary Sessions
            </span>
            <h2 className={styles.vipTitle}>Experience Healthcare as It Should Be.</h2>
            <p className={styles.vipSub}>
              Reserve an unhurried, private consultation with our leading specialists in Clifton, Karachi and Gulberg, Lahore. Same-day urgent consultations protected.
            </p>
            <div className={styles.vipActions}>
              <Link href="/booking" className="btn-gold">
                <Calendar size={17} />
                <span>Reserve Appointment Online</span>
              </Link>
              <a href="tel:+922135879920" className="btn-secondary" style={{ background: 'transparent', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }}>
                <Phone size={16} />
                <span>Call Concierge: (021) 3587-9920</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. OMNIPRESENT FLOATING CONCIERGE */}
      <FloatingConcierge />
    </>
  );
}
