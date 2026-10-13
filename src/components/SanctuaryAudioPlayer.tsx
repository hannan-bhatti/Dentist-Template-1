'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Music } from 'lucide-react';
import styles from './SanctuaryAudioPlayer.module.css';

export function SanctuaryAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const startSoundscape = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.28, ctx.currentTime + 1.2);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 432Hz Harmonic Solfeggio relaxation chord: 216Hz, 324Hz, 432Hz, 540Hz
      const frequencies = [216, 324, 432, 540];
      const oscs: OscillatorNode[] = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const lfo = ctx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(0.18 + idx * 0.05, ctx.currentTime);

        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(1.1, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        const individualVolume = idx === 0 ? 0.32 : idx === 1 ? 0.2 : idx === 2 ? 0.22 : 0.14;
        oscGain.gain.setValueAtTime(individualVolume, ctx.currentTime);

        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        oscs.push(osc);
      });

      oscillatorsRef.current = oscs;
      setIsPlaying(true);
    } catch (e) {
      console.warn('AudioContext not permitted or unsupported', e);
    }
  };

  const stopSoundscape = () => {
    if (audioCtxRef.current && gainNodeRef.current) {
      try {
        gainNodeRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 0.5);
        setTimeout(() => {
          oscillatorsRef.current.forEach((osc) => {
            try { osc.stop(); } catch (_) {}
          });
          oscillatorsRef.current = [];
          if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
            audioCtxRef.current.close();
          }
          setIsPlaying(false);
        }, 600);
      } catch (err) {
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(false);
    }
  };

  const togglePlayback = () => {
    if (isPlaying) {
      stopSoundscape();
    } else {
      startSoundscape();
    }
  };

  useEffect(() => {
    return () => {
      stopSoundscape();
    };
  }, []);

  return (
    <div className={styles.playerCard}>
      <div className={styles.playerLeft}>
        <div className={`${styles.iconDisc} ${isPlaying ? styles.playingAnim : ''}`}>
          {isPlaying ? <Music size={22} /> : <Volume2 size={22} />}
        </div>
        <div>
          <div className={styles.playerTitle}>
            Aura 432Hz Calm Lounge Soundscape
            {isPlaying && <span style={{ marginLeft: 8, fontSize: '0.75rem', color: 'var(--accent-gold)' }}>● Live Ambient Audio</span>}
          </div>
          <div className={styles.playerDesc}>
            Synthesized live in your browser via Web Audio API. Experience the soothing frequency played inside our private clinical suites.
          </div>
        </div>
      </div>

      <button 
        type="button" 
        onClick={togglePlayback} 
        className={`${styles.playToggleBtn} ${isPlaying ? styles.playToggleBtnActive : ''}`}
      >
        {isPlaying ? (
          <>
            <VolumeX size={16} />
            <span>Mute Soundscape</span>
          </>
        ) : (
          <>
            <Volume2 size={16} />
            <span>Play 432Hz Atmosphere</span>
          </>
        )}
      </button>
    </div>
  );
}
