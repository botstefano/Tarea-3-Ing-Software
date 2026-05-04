'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Briefcase, 
  GraduationCap, 
  Building2, 
  Users, 
  LogOut,
  Package,
  FileText
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Briefcase, label: 'Prácticas', href: '/practicas' },
  { icon: GraduationCap, label: 'Tesis', href: '/tesis' },
  { icon: Building2, label: 'Empresas', href: '/empresas' },
  { icon: Users, label: 'Usuarios', href: '/usuarios' },
  { icon: FileText, label: 'Reportes', href: '/reportes' },
];

export function Sidebar() {
  const pathname = usePathname();

  // No renderizar sidebar en la landing page
  if (pathname === '/') return null;

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-[#0f172a] text-slate-300 transition-transform">
      <div className="flex h-full flex-col px-3 py-6">
        {/* Logo - SGP PYMES Style */}
        <div className="mb-10 flex items-center gap-3 px-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg">
            <Package className="h-5 w-5" />
          </div>
          <h2 className="text-sm font-black tracking-widest text-white uppercase">SGP - UNT</h2>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1.5 px-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200",
                  isActive 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                )}
              >
                <item.icon className={cn(
                  "h-4 w-4 transition-colors",
                  isActive ? "text-white" : "text-slate-500 group-hover:text-white"
                )} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer Sidebar - User Profile */}
        <div className="mt-auto px-2 pt-6 border-t border-slate-800">
          <div className="flex items-center gap-3 px-3 py-4 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer group">
            <div className="h-9 w-9 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white group-hover:bg-blue-600 transition-colors">
              AD
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-black text-white truncate uppercase tracking-tighter">Admin User</p>
              <p className="text-[10px] text-slate-500 truncate font-bold">admin@unt.edu.pe</p>
            </div>
          </div>
          <button className="mt-2 flex w-full items-center gap-3 rounded-lg px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-rose-500 hover:bg-rose-500/10 transition-all">
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
