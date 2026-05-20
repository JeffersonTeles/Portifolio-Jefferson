import React, { useState, useEffect } from 'react';
import { FiMapPin, FiClock, FiCloud, FiSun, FiCloudRain } from 'react-icons/fi';

const StatusWidget = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState({ temp: '--', condition: 'OPERACIONAL' });
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    
    const fetchWeather = async () => {
      try {
        // wttr.in is a developer-friendly weather API that doesn't require a key
        const res = await fetch('https://wttr.in/Sao+Paulo?format=j1');
        const data = await res.json();
        const current = data.current_condition[0];
        setWeather({
          temp: `${current.temp_C}°C`,
          condition: current.lang_pt ? current.lang_pt[0].value.toUpperCase() : current.weatherDesc[0].value.toUpperCase()
        });
      } catch (e) {
        console.error("Failed to fetch real-time weather");
        setWeather({ temp: '22°C', condition: 'OPERACIONAL' });
      }
    };

    fetchWeather();
    const weatherInterval = setInterval(fetchWeather, 600000); // Update every 10 mins

    return () => {
      clearInterval(timer);
      clearInterval(weatherInterval);
    };
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
        {weather.condition.includes('CHUVA') ? <FiCloudRain className="text-lusion-primary" /> : <FiSun className="text-lusion-primary" />}
        {weather.temp} {weather.condition}
      </div>
    </div>
  );
};

export default StatusWidget;
