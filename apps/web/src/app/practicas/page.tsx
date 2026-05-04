'use client';

import React from 'react';
import { 
  Search, 
  MapPin, 
  Building, 
  Filter, 
  Plus, 
  ChevronDown,
  Clock,
  ExternalLink,
  Bookmark,
  TrendingUp,
  Target,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export default function PracticasPage() {
  const ofertas = [
    {
      id: 1,
      titulo: "Desarrollador Fullstack Junior",
      empresa: "Interbank",
      ubicacion: "Remoto / Lima",
      fecha: "2 días",
      tipo: "Full-time",
      descripcion: "Buscamos estudiantes de últimos ciclos para participar en la modernización de banca móvil utilizando tecnologías de vanguardia y metodologías ágiles.",
      etiquetas: ["React", "Node.js", "SQL"],
      salario: "S/ 1,500 - S/ 2,000",
      featured: true
    },
    {
      id: 2,
      titulo: "Analista de Datos BI",
      empresa: "BCP",
      ubicacion: "Sede Trujillo",
      fecha: "4 días",
      tipo: "Part-time",
      descripcion: "Oportunidad para integrarse al equipo de Business Intelligence. Se requiere manejo de Excel avanzado y fundamentos de Power BI para visualización de KPIs.",
      etiquetas: ["Power BI", "Excel", "Python"],
      salario: "S/ 1,200",
      featured: false
    },
    {
      id: 3,
      titulo: "Practicante de Ciberseguridad",
      empresa: "TechSolutions",
      ubicacion: "Híbrido / Trujillo",
      fecha: "1 día",
      tipo: "Prácticas",
      descripcion: "Apoyo en el monitoreo de redes y detección de vulnerabilidades. Buscamos perfiles curiosos con ganas de aprender sobre seguridad defensiva.",
      etiquetas: ["Redes", "Linux", "Security+"],
      salario: "S/ 1,025",
      featured: true
    }
  ];

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-12 bg-slate-50/30 min-h-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-2"
        >
          <div className="flex items-center gap-2">
            <Badge variant="primary" className="bg-blue-600 text-white border-none px-4">En Vivo</Badge>
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">42 Oportunidades activas</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Oportunidades de Prácticas</h1>
          <p className="text-slate-500 font-medium text-lg">Impulsa tu carrera profesional con las mejores empresas del país.</p>
        </motion.div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl text-sm font-black uppercase tracking-widest shadow-2xl shadow-slate-200 hover:bg-blue-600 transition-all group"
        >
          <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
          Publicar Oferta
        </motion.button>
      </div>

      {/* Filter and Search Bar */}
      <Card className="p-4 bg-white/80 backdrop-blur-md border-slate-200/50">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Buscar por cargo, tecnología o empresa..." 
              className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50/50 border-none text-sm font-bold outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all"
            />
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-3 px-8 py-5 bg-white border border-slate-100 rounded-2xl text-sm font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all shadow-sm active:scale-95">
              <Filter className="w-4 h-4" />
              Filtros
            </button>
            <button className="flex items-center gap-3 px-8 py-5 bg-white border border-slate-100 rounded-2xl text-sm font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all shadow-sm active:scale-95">
              Ordenar por
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Card>

      {/* Stats Quick View */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: 'Total Ofertas', val: '42', icon: Zap, color: 'blue' },
          { label: 'Nuevas Hoy', val: '12', icon: TrendingUp, color: 'green' },
          { label: 'Empresas Top', val: '8', icon: Target, color: 'purple' },
          { label: 'Postulaciones', val: '3', icon: Bookmark, color: 'orange' },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-default">
            <div className={cn(
              "h-12 w-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6",
              s.color === 'blue' && "bg-blue-50 text-blue-600",
              s.color === 'green' && "bg-emerald-50 text-emerald-600",
              s.color === 'purple' && "bg-purple-50 text-purple-600",
              s.color === 'orange' && "bg-orange-50 text-orange-600",
            )}>
              <s.icon className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</span>
              <span className="text-2xl font-black text-slate-900 tracking-tighter">{s.val}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Grid of Offers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ofertas.map((oferta, idx) => (
          <Card key={oferta.id} className="flex flex-col h-full group relative overflow-hidden">
            {oferta.featured && (
              <div className="absolute top-0 right-0 px-6 py-2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-bl-3xl z-10">
                Destacado
              </div>
            )}
            
            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <div className="h-16 w-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 ring-8 ring-slate-50/50">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <button className="p-3 text-slate-300 hover:text-blue-500 hover:bg-blue-50 rounded-2xl transition-all active:scale-90">
                  <Bookmark className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-3 mb-6">
                <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight tracking-tight">
                  {oferta.titulo}
                </h3>
                <div className="flex flex-wrap gap-y-2 gap-x-4">
                  <span className="flex items-center gap-1.5 text-xs font-black text-slate-400 uppercase tracking-tighter"><Building className="w-3.5 h-3.5" /> {oferta.empresa}</span>
                  <span className="flex items-center gap-1.5 text-xs font-black text-slate-400 uppercase tracking-tighter"><MapPin className="w-3.5 h-3.5" /> {oferta.ubicacion}</span>
                </div>
              </div>

              <p className="text-slate-500 text-sm mb-8 line-clamp-3 leading-relaxed font-medium">
                {oferta.descripcion}
              </p>

              <div className="flex flex-wrap gap-2 mb-10 mt-auto">
                {oferta.etiquetas.map((tag) => (
                  <Badge key={tag} className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-50 flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Remuneración</span>
                  <span className="text-lg font-black text-slate-900 tracking-tighter">{oferta.salario}</span>
                </div>
                <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 active:scale-95 group/btn">
                  Postular
                  <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
              
              <div className="mt-6 flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
                <Clock className="h-3.5 w-3.5" />
                Publicado hace {oferta.fecha}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
