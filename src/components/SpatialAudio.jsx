import React, { useEffect, useRef } from 'react';
import useSound from 'use-sound';

const SpatialAudio = ({ isMuted }) => {
  const [playAmbient, { stop, sound }] = useSound(
    'https://assets.mixkit.co/active_storage/sfx/2558/2558-preview.mp3', // Sci-fi ambient hum
    { volume: 0.05, loop: true }
  );

  useEffect(() => {
    if (!isMuted) {
      playAmbient();
    } else {
      stop();
    }
    return () => stop();
  }, [isMuted, playAmbient, stop]);

  useEffect(() => {
    if (sound) {
      sound.rate(0.8 + (Math.random() * 0.4)); // Subtly vary pitch
    }
  }, [sound]);

  return null;
};

export default SpatialAudio;
