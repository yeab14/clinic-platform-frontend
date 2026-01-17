import React, { useState } from 'react';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Heart,
  Phone,
  Shield,
  Sparkles,
  Star,
  Users,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AppointmentCTA = () => {
  const [isHovered, setIsHovered] = useState(false)
  
  const appointmentStats = [
    { icon: Clock, value: '24/7', label: 'Booking Available', subLabel: 'Online Access', color: 'text-cyan-300' },
    { icon: Calendar, value: '15 min', label: 'Avg. Wait Time', subLabel: 'Same Day Slots', color: 'text-blue-300' },
    { icon: Shield, value: '100%', label: 'HIPAA Secure', subLabel: 'Encrypted', color: 'text-green-300' },
    { icon: Users, value: '50+', label: 'Doctors Online', subLabel: 'Now Available', color: 'text-purple-300' },
  ]

  const bookingBenefits = [
    'No paperwork required',
    'Instant confirmation',
    'Insurance pre-verified',
    'Flexible rescheduling'
  ]

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">

      <div className="absolute inset-0 bg-white" />
      
   
      <div className="absolute inset-0 overflow-hidden">
    
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-full blur-3xl"
        />
        
    
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            className={`absolute w-1 h-1 bg-blue-200 rounded-full ${
              i % 4 === 0 ? 'top-1/4 left-1/4' :
              i % 4 === 1 ? 'top-1/3 right-1/3' :
              i % 4 === 2 ? 'bottom-1/4 left-2/3' :
              'top-2/3 left-1/3'
            }`}
          />
        ))}
      </div>

      <div className="relative container-custom px-4">
  
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-3xl md:rounded-[2rem] p-8 md:p-12 lg:p-16 text-white overflow-hidden border border-white/20 shadow-2xl relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
     
          <motion.div
            animate={{
              opacity: isHovered ? 0.6 : 0.3,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-indigo-500/30 blur-3xl"
          />
          
         
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/30"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-medium">Limited Time: No Booking Fees</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-400 rounded-full"
            />
          </motion.div>

          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
             
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                >
                  <span className="block">Your Health Journey</span>
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-transparent">
                      Starts Here
                    </span>
                    <motion.div
                      animate={{ width: ["0%", "100%", "0%"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                    />
                  </span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed"
                >
                  Experience seamless healthcare with our intelligent booking system. 
                  Get matched with the perfect specialist and schedule appointments 
                  that fit your life, not the other way around.
                </motion.p>
                
             
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-2 gap-3 mb-10"
                >
                  {bookingBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-2 text-sm md:text-base"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-5 h-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <CheckCircle className="w-3 h-3 text-white" />
                      </motion.div>
                      <span className="text-blue-100">{benefit}</span>
                    </motion.div>
                  ))}
                </motion.div>
                
             
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    to="/appointment"
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-blue-700 font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Calendar className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
                    <span className="relative z-10 text-lg">Book Smart Appointment</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-4 -right-4 w-16 h-16 border-2 border-white/20 rounded-full"
                    />
                  </Link>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:+1234567890"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md text-white font-bold rounded-xl border-2 border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 shadow-lg"
                  >
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="text-xs opacity-80">Call us 24/7</div>
                      <div className="text-lg">(123) 456-7890</div>
                    </div>
                  </motion.a>
                </motion.div>
              </div>

         
              <div>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {appointmentStats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer overflow-hidden"
                      >
                       
                        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center">
                              <Icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                              className={`text-3xl md:text-4xl font-bold ${stat.color}`}
                            >
                              {stat.value}
                            </motion.div>
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                            <div className="text-sm text-blue-200">{stat.subLabel}</div>
                          </div>
                        </div>
                        
                      
                        <motion.div
                          animate={{ rotate: [0, 90, 180, 270, 360] }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/30 rounded-tr-xl"
                        />
                      </motion.div>
                    )
                  })}
                </div>
                
         
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="mt-8 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-white font-bold ml-2">4.9/5</span>
                      </div>
                      <p className="text-blue-100 text-sm">
                        "Booking was effortless. Saw a specialist in 15 minutes!"
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full" />
                        <span className="text-blue-200 text-sm">Sarah M., Patient</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
             
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="flex flex-wrap gap-3 mt-8"
                >
                  {[
                    { label: 'View Doctors', icon: Users },
                    { label: 'Services', icon: Zap },
                    { label: 'Insurance', icon: Shield },
                  ].map((link, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                    >
                      {React.createElement(link.icon, { className: "w-4 h-4 text-blue-300" })}
                      <span className="text-blue-200 text-sm font-medium">{link.label}</span>
                      <ChevronRight className="w-3 h-3 text-blue-400" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            
    
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
              className="mt-12 pt-8 border-t border-white/20"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-blue-100">Instant confirmation</span>
                  </div>
                  <div className="w-1 h-1 bg-white/30 rounded-full" />
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-blue-100">Secure & encrypted</span>
                  </div>
                </div>
                
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center gap-2 text-cyan-300 font-medium"
                >
                  <span>Need help?</span>
                  <a href="#chat" className="underline hover:text-cyan-200 transition-colors">
                    Chat with our team
                  </a>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          </div>
          
    
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-6 right-6 w-12 h-12 border-2 border-white/20 rounded-full flex items-center justify-center"
          >
            <Sparkles className="w-5 h-5 text-white/40" />
          </motion.div>
          
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default AppointmentCTA