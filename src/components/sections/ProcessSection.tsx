'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Search, Palette, Rocket, CheckCircle, ArrowRight, Clock, Users, Target } from 'lucide-react'

export default function ProcessSection() {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Auditoría Gratuita',
      description: 'Analizamos tu web actual identificando puntos críticos de mejora en UX, velocidad y conversión.',
      duration: '24-48h',
      features: ['Análisis de velocidad', 'SEO audit', 'UX review', 'Reporte detallado'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      number: '02',
      icon: Palette,
      title: 'Diseño & Prototipo',
      description: 'Creamos un diseño moderno y funcional que refleje tu marca y convierta visitantes en clientes.',
      duration: '2-3 días',
      features: ['Diseño responsive', 'Prototipo interactivo', 'UI/UX optimizado', 'Aprobación cliente'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Desarrollo & Implementación',
      description: 'Desarrollamos con las últimas tecnologías para garantizar máxima velocidad y rendimiento.',
      duration: '3-4 días',
      features: ['Desarrollo React/Next.js', 'Optimización SEO', 'Integraciones', 'Testing completo'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Lanzamiento & Soporte',
      description: 'Desplegamos tu nueva web y te acompañamos con soporte continuo para garantizar resultados.',
      duration: 'Continuo',
      features: ['Despliegue profesional', 'Soporte 24/7', 'Analytics configurado', 'Training equipo'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    }
  ]

  const metrics = [
    { icon: Clock, value: '7-10 días', label: 'Tiempo promedio' },
    { icon: Users, value: '50+', label: 'Clientes satisfechos' },
    { icon: Target, value: '99%', label: 'Proyectos a tiempo' },
    { icon: CheckCircle, value: '4.9/5', label: 'Rating clientes' }
  ]

  return (
    <section id="proceso" className="py-20 bg-gradient-to-br from-dark to-slate-900 relative overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proceso de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Rescate
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un método probado que transforma tu web obsoleta en una máquina de conversión en menos de 2 semanas.
          </p>
        </motion.div>

        {/* Métricas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {metrics.map((metric, index) => (
            <div key={metric.label} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-white/10 rounded-xl">
                  <metric.icon className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Pasos del proceso */}
        <div className="relative">
          {/* Línea conectadora */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Contenido */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} />
                    <span className="text-sm text-gray-300">Paso {step.number}</span>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      {step.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <step.icon className={`w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r ${step.color}`} />
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {step.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Número del paso */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-20 h-20 rounded-2xl border-2 ${step.borderColor} ${step.bgColor} backdrop-blur-sm flex items-center justify-center relative z-10`}>
                    <span className={`text-2xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Flecha conectadora (solo en móvil) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-500 rotate-90" />
                    </div>
                  )}
                </div>

                {/* Espacio para alineación */}
                <div className="flex-1 md:block hidden" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10 rounded-3xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Listo para rescatar tu web?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Comienza con una auditoría gratuita y descubre exactamente cómo podemos mejorar tu presencia digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-400 hover:to-accent text-dark font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                Comenzar Auditoría Gratuita
              </button>
              <button className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
                Ver Casos de Éxito
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}