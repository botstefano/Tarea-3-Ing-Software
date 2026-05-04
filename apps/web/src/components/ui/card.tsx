'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function Card({ children, className, animate = true }: CardProps) {
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500",
          className
        )}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={cn(
        "bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, icon: Icon, color = "blue" }: { title: string; subtitle?: string; icon?: any; color?: string }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        {Icon && (
          <div className={cn(
            "p-3 rounded-2xl",
            color === "blue" && "bg-blue-50 text-blue-600",
            color === "green" && "bg-emerald-50 text-emerald-600",
            color === "purple" && "bg-purple-50 text-purple-600",
            color === "orange" && "bg-orange-50 text-orange-600",
          )}>
            <Icon className="w-6 h-6" />
          </div>
        )}
        <div>
          <h3 className="text-xl font-black text-slate-900 tracking-tight">{title}</h3>
          {subtitle && <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
