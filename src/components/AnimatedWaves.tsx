import React from "react";

export default function AnimatedWaves() {
  return (
    <div className="waves" aria-hidden="true">
      <svg viewBox="0 0 1400 180" preserveAspectRatio="none">
        <g className="waveLayer wave1">
          <path
            d="M0,70 C220,20 420,20 700,70 C980,120 1180,120 1400,70 L1400,0 L0,0 Z"
            fill="black"
            opacity=".35"
          />
        </g>
        <g className="waveLayer wave2">
          <path
            d="M0,110 C260,40 480,40 700,110 C920,180 1140,180 1400,110 L1400,0 L0,0 Z"
            fill="black"
            opacity=".22"
          />
        </g>
      </svg>
    </div>
  );
}
