'use client';

import React from 'react';
import { 
  Briefcase, 
  FileText, 
  TrendingUp,
  ClipboardList,
  GraduationCap,
  Building2,
  Bell,
  Search,
  ArrowUpRight,
  MoreVertical,
  Calendar,
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const stats = [
    { label: 'Estudiantes en Práctica', value: '124', icon: Briefcase, color: 'blue', change: '+12.5%' },
    { label: 'Tesis en Curso', value: '45', icon: GraduationCap, color: 'green', change: '+3.2%' },
    { label: 'Convenios Activos', value: '12', icon: Building2, color: 'purple', change: '+0%' },
    { label: 'Informes Pendientes', value: '8', icon: ClipboardList, color: 'orange', change: '-2.4%' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-slate-50/30">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-10 space-y-12">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Welcome Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="primary">Semestre 2026-I</Badge>
                <div className="h-1 w-1 rounded-full bg-slate-300"></div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> Mayo 03, 2026
                </span>
              </div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight">Panel de Control</h1>
              <p className="text-slate-500 mt-2 font-medium text-lg italic">Bienvenido, aquí está el resumen de la gestión hoy.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex gap-3"
            >
              <button className="px-6 py-3.5 bg-white border border-slate-200 text-slate-600 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm active:scale-95">
                Reportes PDF
              </button>
              <button className="px-6 py-3.5 bg-blue-600 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-2 active:scale-95">
                Nueva Tesis
              </button>
            </motion.div>
          </div>

          {/* Statistics Grid */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={item}>
                <Card className="p-8 group">
                  <div className="flex items-center justify-between mb-8">
                    <div className={cn(
                      "p-4 rounded-2xl shadow-inner group-hover:scale-110 transition-transform duration-500",
                      stat.color === 'blue' && "bg-blue-50 text-blue-600",
                      stat.color === 'green' && "bg-emerald-50 text-emerald-600",
                      stat.color === 'purple' && "bg-purple-50 text-purple-600",
                      stat.color === 'orange' && "bg-orange-50 text-orange-600"
                    )}>
                      <stat.icon className="w-7 h-7" />
                    </div>
                    <Badge variant={stat.change.startsWith('+') ? 'success' : 'error'} className="flex items-center gap-1">
                      {stat.change}
                      <ArrowUpRight className="h-3 w-3" />
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
                    <p className="text-4xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Chart Area */}
            <Card className="lg:col-span-2 p-10">
              <CardHeader 
                title="Evolución de Prácticas" 
                subtitle="Seguimiento Mensual" 
                icon={TrendingUp} 
                color="blue" 
              />
              
              <div className="h-80 flex items-end justify-between gap-6 px-4">
                {[40, 65, 45, 90, 55, 75, 85].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-5 group">
                    <div className="w-full bg-slate-50/50 rounded-3xl relative overflow-hidden h-full flex items-end border border-slate-100/50">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "circOut" }}
                        className="w-full bg-gradient-to-t from-blue-700 via-blue-500 to-blue-400 rounded-3xl shadow-lg shadow-blue-100 relative group-hover:brightness-110 transition-all"
                      >
                        <div className="absolute top-4 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
                           <Badge variant="primary" className="bg-slate-900 text-white border-none">%{h}</Badge>
                        </div>
                      </motion.div>
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Activities Area */}
            <Card className="p-10 flex flex-col">
              <CardHeader 
                title="Actividad Reciente" 
                subtitle="Últimas 48 horas" 
                icon={Bell} 
                color="blue" 
              />
              
              <div className="space-y-8 flex-1">
                {[
                  { text: "Convenio: TechSolutions S.A.C", time: "2h ago", icon: Building2, color: 'blue' },
                  { text: "Informe: Juan Pérez", time: "5h ago", icon: ClipboardList, color: 'green' },
                  { text: "Tesis: Algoritmos ML", time: "1d ago", icon: GraduationCap, color: 'purple' },
                  { text: "Aprobado: Plan de Tesis María G.", time: "2d ago", icon: FileText, color: 'orange' }
                ].map((act, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-5 group cursor-pointer"
                  >
                    <div className={cn(
                      "h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm border border-transparent group-hover:border-slate-100",
                      act.color === 'blue' ? "bg-blue-50 text-blue-600" : 
                      act.color === 'green' ? "bg-emerald-50 text-emerald-600" :
                      act.color === 'purple' ? "bg-purple-50 text-purple-600" : "bg-orange-50 text-orange-600"
                    )}>
                      <act.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-black text-slate-900 truncate group-hover:text-blue-600 transition-colors">{act.text}</p>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Clock className="h-3 w-3" />
                        <span className="text-[10px] font-black uppercase tracking-widest">{act.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <button className="w-full mt-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 bg-blue-50/30 rounded-3xl hover:bg-blue-600 hover:text-white transition-all duration-500 border border-blue-100/30 shadow-sm active:scale-95">
                Historial Completo
              </button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
