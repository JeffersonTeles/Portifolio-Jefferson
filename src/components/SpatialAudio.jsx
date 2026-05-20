import React, { useEffect, useRef } from 'react';
import useSound from 'use-sound';

const SpatialAudio = ({ isMuted }) => {
  const [playAmbient, { stop, sound }] = useSound(
    '', // Removed 403 URL
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
