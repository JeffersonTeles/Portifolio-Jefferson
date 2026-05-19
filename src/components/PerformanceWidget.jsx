import React, { useState, useEffect } from 'react';

const PerformanceWidget = () => {
  const [fps, setFps] = useState(60);
  const [ping, setPing] = useState(12);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();

    const updateStats = () => {
      const currentTime = performance.now();
      frameCount++;

      if (currentTime - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)));
        setPing(10 + Math.floor(Math.random() * 8));
        frameCount = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(updateStats);
    };

    const animId = requestAnimationFrame(updateStats);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="flex items-center gap-6 px-4 py-2 border border-lusion-text/5 bg-lusion-text/[0.02] rounded-sm backdrop-blur-md">
      <div className="flex flex-col">
        <span className="text-[8px] font-bold tracking-widest uppercase text-lusion-text/30">System Status</span>
        <span className="text-[9px] font-bold text-green-500 uppercase">Optimal</span>
      </div>
      
      <div className="w-px h-6 bg-lusion-text/5" />
      
      <div className="flex flex-col">
        <span className="text-[8px] font-bold tracking-widest uppercase text-lusion-text/30">Framerate</span>
        <span className="text-[10px] font-mono font-bold text-lusion-text">{fps} FPS</span>
      </div>

      <div className="flex flex-col">
        <span className="text-[8px] font-bold tracking-widest uppercase text-lusion-text/30">Latency</span>
        <span className="text-[10px] font-mono font-bold text-lusion-text">{ping} MS</span>
      </div>
    </div>
  );
};

export default PerformanceWidget;
