import React from 'react';

interface StatusBadgeProps {
  status?: string | null;
  className?: string;
  size?: 'xs' | 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '', size = 'sm' }) => {
  if (!status) return null;

  const text = status.trim();

  // Determine styling based on restrained financial color system
  let colorClasses = 'bg-[#f7f7f7] text-[#5b616e] border-[#dee1e6]';
  let dotColor = 'bg-[#7c828a]';

  if (text.includes('Pending Source Audit')) {
    colorClasses = 'bg-[#fffbeb] text-[#b45309] border-[#fde68a] font-medium';
    dotColor = 'bg-[#d97706]';
  } else if (text.includes('Tier Undetermined') || text.includes('Not Disclosed') || text.includes('Not disclosed')) {
    colorClasses = 'bg-[#f7f7f7] text-[#7c828a] border-[#eef0f3]';
    dotColor = 'bg-[#a8acb3]';
  } else if (text.includes('Tier 1') || text.includes('Accelerating') || text.includes('Accretive') || text.includes('Disciplined') || text.includes('Fully Recovered') || text.includes('Durable') || text.includes('Good Downside Support') || text.includes('Rapid V-Shaped')) {
    colorClasses = 'bg-[#f0fdf4] text-[#15803d] border-[#bbf7d0] font-medium';
    dotColor = 'bg-[#16a34a]';
  } else if (text.includes('Tier 2') || text.includes('Moderate') || text.includes('Mixed') || text.includes('Partial')) {
    colorClasses = 'bg-[#fffbeb] text-[#b45309] border-[#fde68a]';
    dotColor = 'bg-[#d97706]';
  } else if (text.includes('Tier 3') || text.includes('Erosion') || text.includes('Contracting') || text.includes('Declining') || text.includes('Impaired') || text.includes('Fadeable') || text.includes('Weak')) {
    colorClasses = 'bg-[#fef2f2] text-[#b91c1c] border-[#fecaca]';
    dotColor = 'bg-[#dc2626]';
  } else if (text.includes('Formula Validated') || text.includes('Reported') || text.includes('Historical') || text.includes('Guidance') || text.includes('Derived')) {
    colorClasses = 'bg-[#eff6ff] text-[#1d4ed8] border-[#bfdbfe]';
    dotColor = 'bg-[#2563eb]';
  }

  const sizeClasses = {
    xs: 'text-[10px] px-1.5 py-0.5',
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1'
  }[size];

  return (
    <span className={`inline-flex items-center gap-1.5 rounded border ${sizeClasses} ${colorClasses} tracking-tight ${className}`}>
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColor}`} />
      <span className="truncate">{text}</span>
    </span>
  );
};
