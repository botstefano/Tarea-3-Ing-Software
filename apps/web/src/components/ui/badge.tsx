'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'neutral';
  className?: string;
}

export function Badge({ children, variant = 'neutral', className }: BadgeProps) {
  const variants = {
    primary: "bg-blue-50 text-blue-600 border-blue-100",
    success: "bg-emerald-50 text-emerald-600 border-emerald-100",
    warning: "bg-orange-50 text-orange-600 border-orange-100",
    error: "bg-rose-50 text-rose-600 border-rose-100",
    neutral: "bg-slate-50 text-slate-500 border-slate-100",
  };

  return (
    <span className={cn(
      "px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-colors",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
