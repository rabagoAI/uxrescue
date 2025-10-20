'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Check, Star, Zap, Clock, Users, Shield, ArrowRight } from 'lucide-react'

export default function PricingSection() {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)
  
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

  const packages = [
    {
      name: 'Rescate Básico',
      description: 'Perfecto para negocios que necesitan un rediseño urgente',
      price: { monthly: 1490, annual: 1290 },
      originalPrice: 1990,
      popular: false,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      features: [
        'Diseño web moderno y responsive',
        'Optimización SEO básica',
        'Hasta 5 páginas',
        'Formulario de contacto',
        'Integración redes sociales',
        'Soporte 30 días',
        'Entrega: 7-10 días'
      ],
      cta: 'Contratar Rescate Básico'
    },
    {
      name: 'Rescate Profesional',
      description: 'Ideal para negocios que buscan máximo impacto',
      price: { monthly: 2990, annual: 2490 },
      originalPrice: 3990,
      popular: true,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      features: [
        'Todo lo del plan Básico +',
        'Diseño UI/UX premium',
        'Hasta 10 páginas',
        'Blog integrado',
        'SEO avanzado',
        'Analytics configurado',
        'Soporte 90 días',
        'Entrega: 10-14 días',
        'Certificado SSL incluido'
      ],
      cta: 'Contratar Rescate Profesional'
    },
    {
      name: 'Rescate Enterprise',
      description: 'Solución completa para crecimiento acelerado',
      price: { monthly: 4990, annual: 4290 },
      originalPrice: 6990,
      popular: false,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      features: [
        'Todo lo del plan Profesional +',
        'Web app personalizada',
        'Páginas ilimitadas',
        'E-commerce básico',
        'CMS personalizado',
        'Soporte prioritario 24/7',
        'Mantenimiento 6 meses',
        'Hosting premium 1 año',
        'Entrega: 14-21 días'
      ],
      cta: 'Contratar Rescate Enterprise'
    }
  ]

  const guarantees = [
    {
      icon: Shield,
      title: 'Garantía de Satisfacción',
      description: '30 días de garantía o te devolvemos tu dinero'
    },
    {
      icon: Zap,
      title: 'Lanzamiento Rápido',
      description: 'Tu nueva web funcionando en máximo 21 días'
    },
    {
      icon: Users,
      title: 'Soporte Dedicado',
      description: 'Equipo especializado asignado a tu proyecto'
    },
    {
      icon: Star,
      title: 'Resultados Comprobados',
      description: '+50% de conversión en promedio'
    }
  ]

  return (
    <section id="precios" className="py-20 bg-gradient-to-br from-slate-900 to-dark relative overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0 bg-dot-white/[0.02] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Inversión que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Genera Resultados
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Precios transparentes sin sorpresas. Elige el plan que se adapte a tus necesidades y comienza a convertir visitantes en clientes.
          </p>

          {/* Toggle Anual/Mensual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual 
                  ? 'bg-accent text-dark shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Pago único
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isAnnual 
                  ? 'bg-green-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-1">
                Financiado
                <span className="text-xs bg-green-600 text-white px-1 rounded">-17%</span>
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Grid de Precios */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`relative rounded-3xl backdrop-blur-sm border-2 ${
                pkg.popular 
                  ? 'bg-gradient-to-br from-white/10 to-white/5 border-purple-500/40 scale-105 shadow-2xl' 
                  : 'bg-white/5 border-white/10'
              } p-8 hover:scale-105 transition-all duration-300`}
            >
              {/* Badge Popular */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    MÁS POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm">{pkg.description}</p>
              </div>

              {/* Precio */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    ${isAnnual ? pkg.price.annual : pkg.price.monthly}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <span className="line-through text-sm">${pkg.originalPrice}</span>
                  <span className="text-green-400 text-sm font-medium">
                    Ahorras ${pkg.originalPrice - (isAnnual ? pkg.price.annual : pkg.price.monthly)}
                  </span>
                </div>
                {isAnnual && (
                  <div className="text-gray-400 text-sm mt-1">
                    12 cuotas de ${Math.round(pkg.price.annual / 12)}
                  </div>
                )}
              </div>

              {/* Características */}
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center flex-shrink-0`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl'
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white'
              } hover:scale-105 flex items-center justify-center gap-2`}>
                {pkg.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Garantías */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Tu éxito es nuestra prioridad
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={guarantee.title} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <guarantee.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{guarantee.title}</h4>
                <p className="text-gray-300 text-sm">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Nota adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm">
            ¿Necesitas un plan personalizado?{' '}
            <button className="text-accent hover:text-yellow-400 underline transition-colors">
              Contáctanos para una cotización a medida
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  )
}