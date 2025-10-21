'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Zap, Shield } from 'lucide-react'

export default function Hero() {
  // Función para scroll suave a una sección
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Función para el botón de auditoría
  const handleAuditRequest = () => {
    scrollToSection('contacto')
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-dark via-dark to-primary/20 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="text-center text-white max-w-6xl mx-auto relative z-10">
        {/* Badge superior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
        >
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium">Transformamos webs obsoletas en 72h</span>
        </motion.div>

        {/* Título principal */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          ¿Tu web
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary mt-2">
            ahuyenta clientes?
          </span>
        </motion.h1>
        
        {/* Subtítulo */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-light/80 max-w-3xl mx-auto leading-relaxed"
        >
          Te <span className="text-secondary font-semibold">rescatamos</span>. Convertimos sitios web obsoletos en 
          <span className="text-accent"> experiencias digitales que convierten visitantes en clientes</span>.
        </motion.p>

        {/* Métricas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-8 text-light/70"
        >
          <div className="flex items-center gap-2">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm">4.9/5 en Clutch</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm">+50 proyectos entregados</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">72h promedio de entrega</span>
          </div>
        </motion.div>

        {/* Botones de acción - AHORA CON FUNCIONALIDAD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={handleAuditRequest}
            className="group bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Solicitar Auditoría Gratuita
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => scrollToSection('proceso')}
            className="group border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Ver Casos de Éxito
            </span>
          </button>
        </motion.div>

        {/* Llamada adicional */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-light/60 mt-8 text-sm"
        >
          Análisis completo de tu web actual + propuesta de mejora en 24h
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}