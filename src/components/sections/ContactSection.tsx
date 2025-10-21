'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
 try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    const data = await response.json()

    if (response.ok) {
      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', website: '', message: '' })
    } else {
      throw new Error(data.error || 'Error al enviar el mensaje')
    }
  } catch (error) {
    console.error('Error:', error)
    // Corrige esta línea:
    alert(error instanceof Error ? error.message : 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.')
  } finally {
    setIsSubmitting(false)
  }
}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hola@uxrescue.com',
      description: 'Respuesta en menos de 24h'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+34 123 456 789',
      description: 'Lunes a Viernes 9:00-18:00'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Remoto - España',
      description: 'Trabajamos con clientes de toda España'
    },
    {
      icon: Clock,
      title: 'Auditoría Express',
      value: '48h',
      description: 'Análisis gratuito de tu web actual'
    }
  ]

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-dark to-slate-900 relative overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0 bg-dot-white/[0.02] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Listo para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Rescatar Tu Web?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comienza con una auditoría gratuita. Analizaremos tu web y te enviaremos un reporte detallado con oportunidades de mejora.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Hablemos de tu proyecto</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-300 font-medium">{item.value}</p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Garantías */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">¿Por qué elegirnos?</h4>
              <div className="space-y-3">
                {[
                  'Auditoría gratuita sin compromiso',
                  'Presupuesto transparente',
                  'Proceso definido y claro',
                  'Soporte continuo post-lanzamiento',
                  'Resultados medibles y garantizados'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.4 }}
          >
            {isSubmitted ? (
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-8 text-center backdrop-blur-sm">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-gray-300 mb-6">
                  Hemos recibido tu solicitud. Te contactaremos en menos de 24 horas para programar tu auditoría gratuita.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Web Actual
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="https://tuweb.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-white text-sm font-medium mb-2">
                    ¿En qué podemos ayudarte? *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntanos sobre tu proyecto y objetivos..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-400 hover:to-accent text-dark font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Solicitar Auditoría Gratuita
                    </>
                  )}
                </button>

                <p className="text-gray-400 text-sm text-center mt-4">
                  * Te contactaremos en menos de 24h para programar tu auditoría
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}