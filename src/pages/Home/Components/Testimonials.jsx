import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, Heart, Sparkles, ChevronLeft, ChevronRight, Award, CheckCircle, Zap, Users, TrendingUp, ThumbsUp, Shield, Award as AwardIcon } from 'lucide-react'

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      rating: 5,
      content: "The smart appointment system saved me hours of waiting. I was able to see a specialist in under 15 minutes during a medical emergency. The entire experience was seamless!",
      avatar: "SJ",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      stats: "3x faster than traditional clinics",
      icon: Zap,
      tags: ["Emergency", "Quick Response", "Specialist"]
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      rating: 5,
      content: "As a doctor, I appreciate how efficiently this platform connects me with patients who need my specific expertise. The scheduling system is brilliant and reduces no-shows by 80%.",
      avatar: "MC",
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      stats: "80% fewer no-shows",
      icon: Users,
      tags: ["Doctor", "Efficiency", "Technology"]
    },
    {
      id: 3,
      name: "Robert Davis",
      role: "Chronic Patient",
      rating: 4.8,
      content: "Managing my chronic condition became so much easier. The automated reminders, prescription refills, and virtual consultations have improved my quality of life significantly.",
      avatar: "RD",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
      stats: "95% medication adherence",
      icon: Heart,
      tags: ["Chronic Care", "Convenience", "Management"]
    },
    {
      id: 4,
      name: "Lisa Park",
      role: "Busy Mom",
      rating: 5,
      content: "With three kids and a full-time job, this service has been a lifesaver. I can book appointments during lunch breaks and get prescriptions refilled without leaving work.",
      avatar: "LP",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      stats: "Saved 12 hours monthly",
      icon: TrendingUp,
      tags: ["Family", "Convenience", "Time-saving"]
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Senior Patient",
      rating: 4.9,
      content: "The interface is so simple even for someone like me who isn't tech-savvy. The video calls are crystal clear and I feel truly cared for by the medical team.",
      avatar: "DW",
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      stats: "99% satisfaction rate",
      icon: Shield,
      tags: ["Senior Friendly", "Easy to Use", "Quality Care"]
    }
  ]

  const stats = [
    { value: "4.9/5", label: "Average Rating", icon: Star, color: "text-blue-500" },
    { value: "10K+", label: "Happy Patients", icon: Heart, color: "text-blue-500" },
    { value: "98%", label: "Would Recommend", icon: ThumbsUp, color: "text-blue-500" },
    { value: "50+", label: "Awards", icon: Award, color: "text-blue-500" }
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 w-16 h-16 text-blue-200/20"
        >
          <Quote className="w-full h-full rotate-12" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/3 right-12 w-20 h-20 text-blue-200/15"
        >
          <Quote className="w-full h-full -rotate-12" />
        </motion.div>

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tr from-blue-500/3 to-indigo-500/3 rounded-full blur-3xl" />
        
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className={`absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full ${
              i % 5 === 0 ? 'top-1/5 left-1/4' :
              i % 5 === 1 ? 'top-2/3 right-1/3' :
              i % 5 === 2 ? 'bottom-1/4 left-1/3' :
              i % 5 === 3 ? 'top-1/3 right-1/4' :
              'bottom-2/3 left-2/3'
            }`}
          />
        ))}
      </div>

      <div className="relative container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-sm font-medium text-blue-700">Trusted by Thousands</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">Real Stories,</span>{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Real Impact
              </span>
              <motion.div
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              />
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Join thousands of satisfied patients and doctors who have transformed their healthcare experience 
            with our intelligent platform.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        <div className="relative">
          <div className="relative mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className={`${testimonials[activeTestimonial].bgColor} rounded-3xl md:rounded-[2rem] p-8 md:p-12 border border-gray-200 shadow-2xl overflow-hidden`}>
                  <motion.div
                    animate={{
                      opacity: isHovered ? 0.6 : 0.3,
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-r ${testimonials[activeTestimonial].color} opacity-30 blur-3xl`}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                      <div className="lg:w-1/4">
                        <motion.div
                          animate={{ rotate: [0, 5, 0, -5, 0] }}
                          transition={{ duration: 8, repeat: Infinity }}
                          className="relative"
                        >
                          <div className={`w-32 h-32 bg-gradient-to-br ${testimonials[activeTestimonial].color} rounded-3xl flex items-center justify-center mb-4 mx-auto shadow-2xl`}>
                            <div className="text-4xl font-bold text-white">
                              {testimonials[activeTestimonial].avatar}
                            </div>
                            
                            <motion.div
                              animate={{ 
                                y: [0, -10, 0],
                                rotate: [0, 10, 0]
                              }}
                              transition={{ duration: 4, repeat: Infinity }}
                              className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-lg border border-gray-200"
                            >
                              <Quote className="w-5 h-5 text-blue-500" />
                            </motion.div>
                          </div>
                          
                          <div className="flex justify-center gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.2, rotate: 360 }}
                              
                              >
                                <Star className="w-6 h-6 text-blue-400 fill-current" />
                              </motion.div>
                            ))}
                          </div>
                          
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">
                              {testimonials[activeTestimonial].name}
                            </div>
                            <div className="text-gray-600">
                              {testimonials[activeTestimonial].role}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      <div className="lg:w-3/4">
                        <Quote className="w-12 h-12 text-blue-300 mb-4" />
                        
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-relaxed"
                        >
                          "{testimonials[activeTestimonial].content}"
                        </motion.p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {testimonials[activeTestimonial].tags.map((tag, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                              className={`px-4 py-1.5 bg-gradient-to-r ${testimonials[activeTestimonial].color} bg-opacity-10 text-gray-700 rounded-full text-sm font-medium border border-opacity-20`}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                        
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-lg border border-gray-100"
                        >
                          {(() => {
                            const Icon = testimonials[activeTestimonial].icon
                            return (
                              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${testimonials[activeTestimonial].color} flex items-center justify-center`}>
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                            )
                          })()}
                          <div>
                            <div className="text-lg font-bold text-gray-900">
                              {testimonials[activeTestimonial].stats}
                            </div>
                            <div className="text-sm text-gray-600">Based on user experience</div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-200 flex items-center justify-center hover:shadow-2xl transition-all z-20"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-200 flex items-center justify-center hover:shadow-2xl transition-all z-20"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </motion.button>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setActiveTestimonial(index)}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center`}>
                        <div className="text-white font-bold">
                          {testimonial.avatar}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-blue-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 line-clamp-3 mb-4">
                    "{testimonial.content.substring(0, 120)}..."
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {testimonial.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span>Read full story</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 pt-12 border-t border-gray-100"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <AwardIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Trusted Worldwide</div>
                    <div className="text-gray-600">Industry-recognized excellence</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6">
                {[
                  { label: "HIPAA Compliant", icon: Shield },
                  { label: "24/7 Support", icon: Zap },
                  { label: "Verified Doctors", icon: CheckCircle },
                ].map((badge, index) => {
                  const Icon = badge.icon
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 px-4 py-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100"
                    >
                      <Icon className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-blue-700">{badge.label}</span>
                    </motion.div>
                  )
                })}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 text-blue-600 font-medium cursor-pointer group"
              >
                <span>View all testimonials</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials