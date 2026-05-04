'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Search, Bell, User } from 'lucide-react';

export function TopHeader() {
  const pathname = usePathname();

  // No renderizar header en la landing page
  if (pathname === '/') return null;

  // Obtener nombre de la página actual
  const pageName = pathname.split('/').pop() || 'Dashboard';
  const formattedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-30 ml-64">
      <div className="flex items-center gap-4">
        <h1 className="text-sm font-black text-slate-900 uppercase tracking-widest">{formattedPageName}</h1>
      </div>

      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-full w-80 group focus-within:ring-2 focus-within:ring-blue-500/20 transition-all border border-transparent focus-within:bg-white focus-within:border-slate-200">
          <Search className="h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Buscar en el sistema..." 
            className="bg-transparent text-xs font-bold outline-none w-full placeholder:text-slate-400 text-slate-700 uppercase tracking-tight"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition-colors relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </button>
          <div className="h-8 w-px bg-slate-200 mx-2"></div>
          <button className="h-9 w-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
