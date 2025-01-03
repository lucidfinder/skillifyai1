import React, { useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const VoiceActivityVisualizer = ({ audioUrl }) => {
  const wavesurferRef = useRef(null);
  const [waveform, setWaveform] = useState(null);

  useEffect(() => {
    if (audioUrl) {
      const wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple',
        barWidth: 3,
        barHeight: 1,
        cursorWidth: 0,
        responsive: true,
      });

      wavesurfer.load(audioUrl);

      wavesurfer.on('ready', () => {
        setWaveform(wavesurfer.getWaveformData());
      });

      wavesurfer.on('audioprocess', () => {
        // Update waveform data here if needed for real-time visualization
      });

      return () => {
        if (wavesurfer) {
          wavesurfer.destroy();
        }
      };
    }
  }, [audioUrl]);

  return (
    <div>
      <div id="waveform" style={{ width: '100%', height: '100px' }} />
    </div>
  );
};

export default VoiceActivityVisualizer;
