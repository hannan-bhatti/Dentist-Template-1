import React from 'react';
import { HeartPulse, Sparkles } from 'lucide-react';

export function AuraLogo({ variant = 'default' }: { variant?: 'default' | 'light' }) {
  const isLight = variant === 'light';
  return (
    <div className="brand-logo">
      <div 
        className="brand-icon-box"
        style={{
          background: isLight ? 'rgba(255, 255, 255, 0.12)' : 'linear-gradient(135deg, #1e3d36 0%, #122622 100%)',
          color: isLight ? '#c5a059' : '#ffffff',
          border: isLight ? '1px solid rgba(197, 160, 89, 0.3)' : 'none'
        }}
      >
        <HeartPulse size={22} />
      </div>
      <div>
        <div 
          className="brand-name" 
          style={{ color: isLight ? '#ffffff' : 'var(--text-heading)' }}
        >
          AURA <span>SANCTUARY</span>
        </div>
        <div 
          className="brand-sub" 
          style={{ color: isLight ? '#a4bab4' : 'var(--text-muted)' }}
        >
          Executive Multispecialty Care
        </div>
      </div>
    </div>
  );
}
