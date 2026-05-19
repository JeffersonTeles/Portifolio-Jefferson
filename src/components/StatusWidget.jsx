import React, { useState, useEffect } from 'react';
import { FiMapPin, FiClock, FiCloud } from 'react-icons/fi';

const StatusWidget = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-6 text-[9px] font-bold tracking-widest uppercase text-lusion-text/40">
      <div className="flex items-center gap-2">
        <FiMapPin className="text-lusion-primary" />
        SÃO PAULO, BR
      </div>
      <div className="flex items-center gap-2">
        <FiClock className="text-lusion-primary" />
        {time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
      </div>
      <div className="flex items-center gap-2">
        <FiCloud className="text-lusion-primary" />
        22°C OPERACIONAL
      </div>
    </div>
  );
};

export default StatusWidget;
