import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Layout, 
  ShieldCheck, 
  FileCode2, 
  Database, 
  Layers,
  Moon,
  Sun,
  Music,
  ShoppingBag,
  Building2
} from 'lucide-react';

const BentoGrid = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Verificar si hay una preferencia guardada o si el sistema prefiere oscurom
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const skills = [
    { name: 'Testing Manual', icon: <ShieldCheck className="w-4 h-4" /> },
    { name: 'HTML', icon: <FileCode2 className="w-4 h-4" /> },
    { name: 'CSS', icon: <Layout className="w-4 h-4" /> },
    { name: 'React', icon: <Code2 className="w-4 h-4" /> },
    { name: 'Tailwind CSS', icon: <Layers className="w-4 h-4" /> },
    { name: 'Python', icon: <Database className="w-4 h-4" /> },
    { name: 'Git', icon: <Github className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-20 font-['Outfit',sans-serif] transition-colors duration-500">
      {/* Botón Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={toggleDarkMode}
          className="p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-lg dark:shadow-violet-900/20 border border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-100 hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-violet-600" />}
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
        
        {/* Caja Principal - Hero */}
        <div className="md:col-span-2 lg:col-span-2 bento-card flex-row items-center gap-8 bg-gradient-to-br from-white to-violet-50/50 dark:from-slate-900 dark:to-slate-900/50">
          <div className="flex-1 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-xs font-semibold tracking-wider uppercase">
              Disponible para proyectos
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-tight">
              Hola, soy <span className="text-violet-600 dark:text-violet-400">Micaela Argüello</span>
            </h1>
            <h2 className="text-xl font-medium text-slate-600 dark:text-slate-400">
              Desarrolladora Web Frontend y Productora Musical
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
              Combinando la precisión del desarrollo web con la creatividad de la producción sonora para crear experiencias digitales únicas e inmersivas.
            </p>
          </div>
          <div className="hidden sm:flex relative shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full blur opacity-25 transition duration-1000"></div>
            <div className="relative w-40 h-40 lg:w-52 lg:h-52 rounded-full border-4 border-white dark:border-slate-800 overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800 transition-all duration-500 hover:scale-105">
              <img 
                src="/Perfilnuevo.png" 
                alt="Micaela Argüello"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Caja de Habilidades */}
        <div className="md:col-span-1 lg:col-span-1 bento-card">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-100">
            <Code2 className="w-5 h-5 text-violet-600 dark:text-violet-400" /> Habilidades
          </h3>
          <div className="flex flex-wrap gap-2 mt-auto">
            {skills.map((skill) => (
              <span 
                key={skill.name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-50 dark:bg-violet-900/10 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-900/30 text-sm font-medium hover:bg-violet-100 dark:hover:bg-violet-900/20 transition-colors cursor-default"
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Contacto / Social */}
        <div className="md:col-span-1 lg:col-span-1 bento-card bg-gradient-to-br from-violet-900 to-violet-950 text-white border-none shadow-xl shadow-violet-900/20">
          <h3 className="text-lg font-bold mb-2">Conectemos</h3>
          <p className="text-violet-200 text-sm mb-6">
            Actualmente buscando nuevas oportunidades. Ya sea para un proyecto web, testing o simplemente para saludar, ¡mi bandeja de entrada está abierta!
          </p>
          <div className="space-y-3 mt-auto">
            <a 
              href="mailto:micaela.arg13@gmail.com" 
              className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              <div className="p-2.5 rounded-xl bg-violet-600 group-hover:bg-violet-500 transition-colors shrink-0 shadow-lg shadow-violet-900/40">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-[12px] sm:text-sm font-medium break-all tracking-tight">micaela.arg13@gmail.com</span>
            </a>
            
            <div className="grid grid-cols-2 gap-3">
              <a 
                href="https://github.com/micaarguello98-dot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white/10 border border-white/5 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span className="text-xs uppercase font-bold tracking-widest">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/micaela-arg%C3%BCello" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white/10 border border-white/5 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-xs uppercase font-bold tracking-widest">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Proyecto 1: Nexus Tienda */}
        <div className="md:col-span-2 lg:col-span-2 bento-card relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 dark:opacity-5 group-hover:opacity-20 transition-opacity">
            <Layout className="w-32 h-32 rotate-12 text-slate-900 dark:text-slate-100" />
          </div>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">
                <Layout className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Nexus Tienda</h3>
            <p className="text-slate-400 font-semibold text-xs uppercase tracking-widest">Sistema Multivendedor</p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
              Plataforma robusta con enfoque en la experiencia del vendedor. Destaca por su maquetación modular y sistema de punto de venta (POS) optimizado para flujos de trabajo rápidos.
            </p>
            <div className="flex gap-3 pt-2">
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded text-[10px] font-bold uppercase tracking-wider">React</span>
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded text-[10px] font-bold uppercase tracking-wider">Node.js</span>
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded text-[10px] font-bold uppercase tracking-wider">Tailwind</span>
            </div>
          </div>
          <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-sm font-medium text-slate-400 italic">Diseño UI & Arquitectura Frontend</span>
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto text-sm font-bold bg-violet-600 text-white px-6 py-2.5 rounded-2xl hover:bg-violet-700 transition-all shadow-lg shadow-violet-600/20 active:scale-95">
              Ver detalles <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Proyecto 2: ANMA Arquitectura */}
        <div className="md:col-span-2 lg:col-span-2 bento-card border-l-4 border-l-emerald-600 dark:border-l-emerald-400 bg-gradient-to-br from-white to-emerald-50/30 dark:from-slate-900 dark:to-emerald-900/5">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                <Building2 className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">ANMA Arquitectura</h3>
            <p className="text-emerald-600 dark:text-emerald-400 font-bold text-[10px] uppercase tracking-widest">Estudio de Arquitectura</p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
              Portfolio digital para un estudio de arquitectura. Un diseño minimalista y equilibrado que resalta la fotografía de obra y la filosofía espacial del estudio mediante una navegación elegante.
            </p>
            <div className="flex gap-2 pt-2">
              <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded">Next.js</span>
              <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded">Framer Motion</span>
            </div>
          </div>
          <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-sm font-medium text-slate-400 italic">Identidad Web Estructural</span>
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto text-sm font-bold bg-emerald-600 text-white px-6 py-2.5 rounded-2xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 active:scale-95">
              Ver detalles <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Proyecto 3: Tienda Emma */}
        <div className="md:col-span-1 lg:col-span-2 bento-card border-l-4 border-l-pink-500 dark:border-l-pink-400 bg-gradient-to-br from-white to-pink-50/30 dark:from-slate-900 dark:to-pink-900/5">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Tienda Emma</h3>
            <p className="text-pink-500 dark:text-pink-400 font-bold text-[10px] uppercase tracking-widest">E-commerce Infantil</p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
              Boutique online de ropa para niños. El diseño prioriza la ternura y la facilidad de compra, con un catálogo dinámico y una experiencia de usuario optimizada para familias.
            </p>
            <div className="flex gap-2 pt-2">
              <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded">React</span>
              <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded">Supabase</span>
            </div>
          </div>
          <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-sm font-medium text-slate-400 italic">E-commerce Experience</span>
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto text-sm font-bold bg-pink-500 text-white px-6 py-2.5 rounded-2xl hover:bg-pink-600 transition-all shadow-lg shadow-pink-500/20 active:scale-95">
              Ver detalles <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Proyecto 4: Producción Musical */}
        <div className="md:col-span-3 lg:col-span-2 bento-card border-l-4 border-l-purple-600 dark:border-l-purple-400 bg-gradient-to-br from-white to-purple-50/50 dark:from-slate-900 dark:to-slate-900/50">
          <div className="flex flex-col gap-6">
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  <Music className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Producción Musical</h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                Explorando la intersección entre tecnología y composición sonora. Portafolio en fase de curaduría.
              </p>
              <div className="flex pt-2">
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  En proceso
                </span>
              </div>
            </div>
            <div className="w-full h-24 rounded-2xl bg-slate-100 dark:bg-slate-800/50 flex flex-col items-center justify-center border border-dashed border-slate-300 dark:border-slate-700 group-hover:border-purple-400/50 transition-colors">
              <span className="text-slate-400 dark:text-slate-500 font-medium italic text-[10px] text-center px-4 uppercase tracking-tighter">Próximamente SoundCloud</span>
            </div>
          </div>
        </div>

      </div>
      
      {/* Footer minimalista */}
      <footer className="mt-16 text-center text-slate-400 dark:text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Micaela Argüello. Diseñado con ❤️ y precisión.</p>
      </footer>
    </div>
  );
};

export default BentoGrid;
