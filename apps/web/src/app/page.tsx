'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, CheckCircle2, Building2, Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl space-y-8"
      >
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-3xl bg-blue-700 flex items-center justify-center text-white shadow-2xl shadow-blue-200">
            <GraduationCap className="h-10 w-10" />
          </div>
        </div>

        <Badge variant="primary" className="px-6 py-2">Sistema Oficial UNT</Badge>

        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Gestión de Prácticas y Tesis <span className="text-blue-600 italic">UNT</span>
        </h1>

        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
          Plataforma integral para la administración, seguimiento y titulación de estudiantes de la Universidad Nacional de Trujillo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link href="/dashboard" className="w-full sm:w-auto px-10 py-5 bg-blue-700 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-800 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 group">
            Ingresar al Sistema
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/practicas" className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-slate-100 text-slate-600 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
            Ver Ofertas
            <Briefcase className="h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-slate-100 mt-16">
          {[
            { label: 'Prácticas', icon: Building2, desc: 'Gestión de convenios y ofertas laborales.' },
            { label: 'Tesis', icon: GraduationCap, desc: 'Seguimiento de proyectos y sustentaciones.' },
            { label: 'Seguridad', icon: CheckCircle2, desc: 'Acceso seguro basado en roles académicos.' },
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-slate-50 rounded-xl text-blue-600">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900">{feature.label}</h3>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <footer className="mt-24 text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
        © 2026 Universidad Nacional de Trujillo · Dirección de Sistemas
      </footer>
    </div>
  );
}
