'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Smartphone, Zap, Users, TrendingDown, X, CheckCircle2 } from 'lucide-react'

// Define los tipos para la comparación antes/después
type BeforeSection = {
  label: string
  problems: string[]
  color: string
}

type AfterSection = {
  label: string
  solutions: string[]
  color: string
}

type Section = BeforeSection | AfterSection

// Función de guardia de tipo
function isBeforeSection(section: Section): section is BeforeSection {
  return 'problems' in section
}

export default function ProblemSection() {
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

  const problems = [
    {
      icon: Smartphone,
      title: 'No funciona en móviles',
      description: 'Más del 60% del tráfico viene de dispositivos móviles. Si tu web no es responsive, estás perdiendo clientes.',
      consequence: 'Pérdida del 60% de posibles clientes',
      stat: '60%',
      gradient: 'from-blue-500/10 to-purple-500/10',
      border: 'border-blue-500/20'
    },
    {
      icon: Zap,
      title: 'Velocidad lenta',
      description: 'Una web que tarda más de 3 segundos en cargar aumenta la tasa de rebote en un 32%.',
      consequence: '32% de visitantes abandonan',
      stat: '3s+',
      gradient: 'from-orange-500/10 to-red-500/10',
      border: 'border-orange-500/20'
    },
    {
      icon: Users,
      title: 'Mala experiencia de usuario',
      description: 'Navegación confusa, información difícil de encontrar y diseño anticuado frustran a tus visitantes.',
      consequence: 'Frustración y abandono',
      stat: '90%',
      gradient: 'from-green-500/10 to-emerald-500/10',
      border: 'border-green-500/20'
    },
    {
      icon: TrendingDown,
      title: 'Baja conversión',
      description: 'Los visitantes no saben cómo contactarte o comprar tus productos. Falta de llamadas a la acción claras.',
      consequence: 'Dinero dejado sobre la mesa',
      stat: '-70%',
      gradient: 'from-purple-500/10 to-pink-500/10',
      border: 'border-purple-500/20'
    }
  ]

  const beforeAfter: Section[] = [
    {
      label: 'Antes',
      problems: [
        'Diseño desactualizado',
        'No responsive',
        'Velocidad lenta',
        'Navegación confusa',
        'Baja conversión'
      ],
      color: 'text-red-400'
    },
    {
      label: 'Después',
      solutions: [
        'Diseño moderno y profesional',
        'Optimizado para todos los dispositivos',
        'Carga ultrarrápida',
        'Experiencia intuitiva',
        'Conversión optimizada'
      ],
      color: 'text-green-400'
    }
  ]

  return (
    <section id="problemas" className="py-20 bg-gradient-to-br from-slate-900 via-dark to-slate-800 relative overflow-hidden">
      {/* Elementos de fondo más sutiles */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute inset-0 bg-dot-white/[0.02] bg-[size:40px_40px]" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Reconoces alguno de estos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              problemas?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estos son los síntomas más comunes de webs que están costando clientes y dinero a negocios como el tuyo.
          </p>
        </motion.div>

        {/* Grid de problemas - NUEVOS COLORES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${problem.gradient} backdrop-blur-sm border ${problem.border} rounded-2xl p-6 hover:scale-105 transition-all duration-300 group shadow-xl hover:shadow-2xl`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                  <problem.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">{problem.stat}</span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{problem.description}</p>
              <div className="flex items-center gap-2 text-red-300 text-sm font-medium bg-white/5 rounded-lg px-3 py-2">
                <X className="w-4 h-4" />
                {problem.consequence}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparación Antes/Después - CORREGIDO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Transformación{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Garantizada
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfter.map((section, index) => (
              <div key={section.label} className="text-center">
                <h4 className={`text-2xl font-bold mb-6 ${section.color}`}>
                  {section.label}
                </h4>

                <div className="space-y-3">
                  {isBeforeSection(section) ? (
                    section.problems.map((problem: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 text-white bg-red-500/20 rounded-xl p-4 border border-red-500/30">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="font-medium">{problem}</span>
                      </div>
                    ))
                  ) : (
                    section.solutions.map((solution: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 text-white bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="font-medium">{solution}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA intermedio - MEJORADO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-gray-300 mb-6 text-lg">
              ¿Ves alguno de estos problemas en tu web actual?
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contacto')
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  })
                }
              }}
              className="bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-400 hover:to-accent text-dark font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-lg cursor-pointer"
            >
              🚀 Diagnosticar Mi Web Gratis
            </button>
            <p className="text-gray-400 text-sm mt-4">
              Análisis completo + propuesta de mejora en 24h
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}