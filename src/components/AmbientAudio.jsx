import React, { useState, useEffect, useRef } from 'react';
import { useSection } from '../context/SectionContext';

const AmbientAudio = () => {
  const { currentSection } = useSection();
  const [isMuted, setIsMuted] = useState(true);
  const audioContext = useRef(null);
  const osc = useRef(null);
  const gainNode = useRef(null);

  const initAudio = () => {
    if (audioContext.current) {
        if (isMuted) {
            audioContext.current.resume();
            setIsMuted(false);
        } else {
            audioContext.current.suspend();
            setIsMuted(true);
        }
        return;
    }
    
    audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
    osc.current = audioContext.current.createOscillator();
    gainNode.current = audioContext.current.createGain();

    osc.current.type = 'sine';
    osc.current.frequency.setValueAtTime(40, audioContext.current.currentTime);
    gainNode.current.gain.setValueAtTime(0.005, audioContext.current.currentTime);

    osc.current.connect(gainNode.current);
    gainNode.current.connect(audioContext.current.destination);
    
    osc.current.start();
    setIsMuted(false);
  };

  useEffect(() => {
    if (!audioContext.current || isMuted) return;

    const freqs = {
      hero: 40,
      about: 50,
      projects: 60,
      skills: 70,
      lab: 90,
      contact: 30
    };

    const targetFreq = freqs[currentSection] || 40;
    osc.current.frequency.exponentialRampToValueAtTime(targetFreq, audioContext.current.currentTime + 2);
  }, [currentSection, isMuted]);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-center gap-2 pointer-events-auto">
      <button 
        onClick={initAudio}
        className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${isMuted ? 'text-white/20' : 'text-white bg-white/5 shadow-glow'}`}
        title="Toggle Ambient Audio"
      >
        <span className="text-[10px] font-mono">{isMuted ? 'OFF' : 'ON'}</span>
      </button>
      <span className="text-[7px] font-mono text-white/20 uppercase tracking-widest rotate-90 origin-left translate-x-3 mt-4">Ambient_Freq</span>
    </div>
  );
};

export default AmbientAudio;
