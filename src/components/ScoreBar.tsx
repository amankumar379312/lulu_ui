import React from 'react';

interface ScoreBarProps {
  score: number;
  max?: number;
  showScoreText?: boolean;
  className?: string;
  height?: number;
  tierLabel?: string;
}

export const ScoreBar: React.FC<ScoreBarProps> = ({
  score,
  max = 10,
  showScoreText = true,
  className = '',
  height = 6,
  tierLabel,
}) => {
  const percentage = Math.min(Math.max((score / max) * 100, 0), 100);

  let barBg = 'bg-[#05b169]';
  let textColor = 'text-[#05b169]';

  if (score < 3.0) {
    barBg = 'bg-[#cf202f]';
    textColor = 'text-[#cf202f]';
  } else if (score < 5.0) {
    barBg = 'bg-[#ea580c]';
    textColor = 'text-[#ea580c]';
  } else if (score < 7.0) {
    barBg = 'bg-[#d97706]';
    textColor = 'text-[#d97706]';
  } else if (score < 8.5) {
    barBg = 'bg-[#05b169]';
    textColor = 'text-[#05b169]';
  } else {
    barBg = 'bg-[#0052ff]';
    textColor = 'text-[#0052ff]';
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between gap-2 mb-1 text-xs">
        {tierLabel && <span className="text-[#5b616e] text-[11px] truncate">{tierLabel}</span>}
        {showScoreText && (
          <div className="ml-auto flex items-baseline gap-1 font-mono text-xs tabular-nums">
            <span className={`font-semibold ${textColor}`}>{score}</span>
            <span className="text-[#7c828a] text-[10px]">/{max}</span>
          </div>
        )}
      </div>
      <div className="w-full bg-[#eef0f3] rounded-full overflow-hidden" style={{ height }}>
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${barBg}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
