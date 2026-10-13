import type { Metadata } from 'next';
import './globals.css';
import { AuraLogo } from '@/components/AuraLogo';
import { MobileNavigation } from '@/components/MobileNavigation';
import { Phone, Calendar, Clock, MapPin, ArrowRight, Sparkles, MessageCircle, ShieldCheck, HeartPulse } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Aura Health Sanctuary | Executive Multispecialty Lounge & Medical Care Center",
  description: "Experience boutique, integrated medical care across Cardiology, Aesthetic Dental, Obstetrics & Gynea, Physiotherapy, Diagnostic Labs, and Family Medicine in Clifton, Karachi & Gulberg, Lahore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Top Announcement Bar */}
        <div className="top-banner">
          <div className="container top-banner-inner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={14} color="#c5a059" />
              <span><strong>Accepting New Patients:</strong> Appointments Available Across Karachi &amp; Lahore</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <span>Concierge Desk: <strong>+92 (21) 3587-9920</strong></span>
              <a href="https://wa.me/923008899920" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <MessageCircle size={14} color="#22c55e" /> WhatsApp Care Desk
              </a>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/">
              <AuraLogo />
            </Link>

            <nav className="nav-links">
              <Link href="/#specialties" className="nav-link">Specialties</Link>
              <Link href="/#triage" className="nav-link">Symptom Check</Link>
              <Link href="/#packages" className="nav-link">Health Packages</Link>
              <Link href="/#doctors" className="nav-link">Our Doctors</Link>
              <Link href="/services" className="nav-link">All Services</Link>
              <Link href="/#reviews" className="nav-link">Reviews</Link>
            </nav>

            <div className="nav-actions">
              <a href="tel:+922135879920" className="header-phone">
                <Phone size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>(021) 3587-9920</span>
              </a>
              <Link href="/booking" className="btn-primary" style={{ padding: '0.65rem 1.45rem', fontSize: '0.875rem' }}>
                <Calendar size={15} style={{ flexShrink: 0 }} />
                <span>Book Appointment</span>
              </Link>
            </div>

            <MobileNavigation />
          </div>
        </header>

        <main>{children}</main>

        {/* Luxury Footer */}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <Link href="/" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
                  <AuraLogo variant="light" />
                </Link>
                <p style={{ maxWidth: '340px', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '0.925rem' }}>
                  Pakistan&apos;s premier boutique multispecialty medical sanctuary. Uniting Cardiology, Dental Artistry, Gynecology, Physical Therapy, Diagnostic Labs, and Family Medicine in unhurried private suites.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: '6px' }}>
                    <ShieldCheck size={13} color="#c5a059" /> PMDC Registered
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: '6px' }}>
                    ISO 15189 Molecular Lab
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: '6px' }}>
                    4.96 ★ Google Top Medical Lounge
                  </span>
                </div>
              </div>

              <div className="footer-col">
                <h4>Clinical Specialties</h4>
                <ul>
                  <li><Link href="/services#cardiology">Cardiology &amp; 3D Echo</Link></li>
                  <li><Link href="/services#dental">Aesthetic &amp; Painless Dentistry</Link></li>
                  <li><Link href="/services#gynea">Obstetrics &amp; 4D Fetal Scans</Link></li>
                  <li><Link href="/services#physiotherapy">Spinal Decompression &amp; Rehab</Link></li>
                  <li><Link href="/services#labs">Diagnostic Molecular Labs</Link></li>
                  <li><Link href="/services#family-phy">Family Medicine &amp; Executive Physicals</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Sanctuary Navigation</h4>
                <ul>
                  <li><Link href="/#triage">Intelligent Symptom Triage</Link></li>
                  <li><Link href="/#packages">Executive Longevity Packages</Link></li>
                  <li><Link href="/#doctors">Multidisciplinary Medical Board</Link></li>
                  <li><Link href="/#reviews">Patient Testimonials</Link></li>
                  <li><Link href="/booking">Real-Time Booking Portal</Link></li>
                  <li><Link href="/#faq">Insurance &amp; Takaful FAQs</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Sanctuary Locations &amp; Care</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <MapPin size={18} color="#c5a059" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>Executive Enclave, Marine Promenade<br/>Clifton Block 4, Karachi, Pakistan</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Clock size={16} color="#c5a059" style={{ flexShrink: 0 }} />
                    <span>Mon – Sat: 8:00 AM – 9:00 PM (24/7 ER Desk)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Phone size={16} color="#c5a059" style={{ flexShrink: 0 }} />
                    <span>Direct Desk: +92 (21) 3587-9920</span>
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    <Link href="/booking" className="btn-gold" style={{ width: '100%', fontSize: '0.85rem', padding: '0.65rem 1rem' }}>
                      Reserve Priority Slot Online <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div>
                &copy; {new Date().getFullYear()} Aura Health Sanctuary. All rights reserved. Precision Multispecialty Medicine &amp; Wellness Arts.
              </div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="#charter">Patient Charter</a>
                <a href="#confidentiality">HIPAA &amp; Data Confidentiality</a>
                <a href="#overseas">Overseas Executive Protocols</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
