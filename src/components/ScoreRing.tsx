import React from 'react';

interface ScoreRingProps {
  score: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
  showTenFraction?: boolean;
}

export const ScoreRing: React.FC<ScoreRingProps> = ({
  score,
  max = 10,
  size = 110,
  strokeWidth = 8,
  label,
  sublabel,
  showTenFraction = true,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const normalizedScore = Math.min(Math.max(score, 0), max);
  const strokeDashoffset = circumference - (normalizedScore / max) * circumference;

  // Restrained financial palette
  let strokeColor = '#05b169'; // default green
  let textColor = 'text-[#05b169]';

  if (score < 3.0) {
    strokeColor = '#cf202f'; // red
    textColor = 'text-[#cf202f]';
  } else if (score < 5.0) {
    strokeColor = '#ea580c'; // orange
    textColor = 'text-[#ea580c]';
  } else if (score < 7.0) {
    strokeColor = '#d97706'; // amber
    textColor = 'text-[#d97706]';
  } else if (score < 8.5) {
    strokeColor = '#05b169'; // green
    textColor = 'text-[#05b169]';
  } else {
    strokeColor = '#0052ff'; // strong institutional blue / emerald
    textColor = 'text-[#0052ff]';
  }

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#eef0f3"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-700 ease-out"
          />
        </svg>

        {/* Center score */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-mono text-2xl font-bold tracking-tight ${textColor} tabular-nums`}>
            {score.toFixed(score % 1 === 0 ? 1 : (score.toString().split('.')[1]?.length || 1))}
          </span>
          {showTenFraction && (
            <span className="text-[10px] text-[#7c828a] font-mono tracking-normal">
              / {max}
            </span>
          )}
        </div>
      </div>

      {label && <div className="mt-2 text-xs font-semibold text-[#0a0b0d] tracking-tight">{label}</div>}
      {sublabel && <div className="text-[11px] text-[#5b616e] mt-0.5">{sublabel}</div>}
    </div>
  );
};
