import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Shield, Clock, Play, Star, Users, Award, CheckCircle, Sparkles, Heart } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0)
  const controls = useAnimation()

  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Patients', color: 'from-blue-500 to-blue-600' },
    { icon: Star, value: '4.9', label: 'Patient Rating', color: 'from-yellow-500 to-yellow-600' },
    { icon: Award, value: '50+', label: 'Expert Doctors', color: 'from-purple-500 to-purple-600' },
    { icon: Clock, value: '15 min', label: 'Avg Wait Time', color: 'from-green-500 to-green-600' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    controls.start({
      scale: [1, 1.1, 1],
      transition: { duration: 0.5 }
    })
  }, [currentStat, controls])

  const features = [
    "AI-Powered Appointment System",
    "24/7 Telemedicine Support",
    "Same-Day Appointments",
    "No Paperwork Required"
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-accent-teal/20 pt-4 md:pt-8 lg:pt-12">
      {/* Animated Background Elements - Adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-primary-200/40 to-accent-teal/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-accent-teal/20 to-primary-300/30 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern - Reduced opacity on mobile */}
        <div className="absolute inset-0 opacity-5 md:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                             linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="relative container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center py-6 md:py-10 lg:py-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 order-2 lg:order-1 mt-8 lg:mt-0"
          >
            {/* Trust Badge - Adjusted for mobile */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary-100 shadow-sm md:shadow-lg mb-4 md:mb-6 max-w-max"
            >
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary-600 to-accent-teal rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
                </div>
                <div className="max-w-[140px] md:max-w-none">
                  <div className="text-xs md:text-sm font-semibold text-primary-700 leading-tight">Trusted Healthcare</div>
                  <div className="text-[10px] md:text-xs text-gray-600 leading-tight">Since 2010</div>
                </div>
              </div>
            </motion.div>

            {/* Main Headline - Responsive text sizes */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6"
            >
              <span className="text-gray-900">Healthcare That</span>{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-teal bg-clip-text text-transparent">
                  Cares About You
                </span>
                <motion.div
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-1 md:-bottom-2 left-0 h-0.5 md:h-1 bg-gradient-to-r from-primary-500 to-accent-teal rounded-full"
                />
              </span>
            </motion.h1>

            {/* Description - Adjusted for mobile */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-2xl"
            >
              Experience next-generation healthcare with our intelligent platform. 
              Book appointments in seconds, connect with top specialists, and 
              manage your health journey seamlessly.
            </motion.p>

            {/* Features List - Responsive grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-8 md:mb-10"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start md:items-center gap-2 py-1"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-sm md:text-base text-gray-700 font-medium leading-tight">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Stack on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <Link
                to="/appointment"
                className="group relative inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-sm md:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-teal to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Calendar className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:rotate-12 transition-transform flex-shrink-0" />
                <span className="relative z-10 text-center">Book Appointment</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-2 transition-transform flex-shrink-0" />
                <Sparkles className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-white border border-primary-200 text-primary-700 font-bold rounded-lg md:rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
              >
                <Play className="w-4 h-4 md:w-5 md:h-5" />
                <span>Watch Demo</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative lg:pl-4 xl:pl-8 order-1 lg:order-2"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Floating Card Behind - Hidden on mobile */}
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 w-full h-64 md:h-96 bg-gradient-to-br from-primary-400 to-accent-teal rounded-2xl md:rounded-3xl rotate-3 md:rotate-6 opacity-20 blur-xl hidden md:block"
              />
              
              {/* Main Image Card */}
              <div className="relative rounded-xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-teal/20 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80"
                  alt="Modern Clinic Environment"
                  className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover"
                />
                
                {/* Image Overlay Content */}
                <div className="absolute inset-0 z-20 p-4 md:p-6 lg:p-8 flex flex-col justify-between">
                  {/* Top Badge */}
                  <div className="inline-flex items-center gap-1.5 md:gap-2 self-end bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
                    <Heart className="w-3.5 h-3.5 md:w-5 md:h-5 text-red-500 animate-pulse" />
                    <span className="font-semibold text-gray-800">Live Now</span>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>

                  {/* Bottom Stats */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">12 Doctors</div>
                        <div className="text-xs md:text-sm text-gray-600">Available Now</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary-600">15 min</div>
                        <div className="text-xs md:text-sm text-gray-600">Average Wait</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards - Adjusted for mobile */}
              <motion.div
                animate={controls}
                className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 md:-top-6 md:-right-6 w-48 sm:w-56 md:w-64 bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl p-3 md:p-4 lg:p-6 border border-gray-100"
              >
                <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
                  <div className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg md:rounded-xl bg-gradient-to-br ${stats[currentStat].color} flex items-center justify-center flex-shrink-0`}>
                    {React.createElement(stats[currentStat].icon, { className: "w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" })}
                  </div>
                  <div className="min-w-0">
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 truncate">{stats[currentStat].value}</div>
                    <div className="text-xs md:text-sm text-gray-600 truncate">{stats[currentStat].label}</div>
                  </div>
                </div>
                {/* Progress Dots */}
                <div className="flex gap-1 mt-2 md:mt-4">
                  {stats.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${index === currentStat ? 'bg-primary-600 w-4 md:w-6 lg:w-8' : 'bg-gray-300 w-2 md:w-3'}`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating Doctor Card - Adjusted for mobile */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-3 right-4 md:-bottom-4 md:right-8 bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl p-2 md:p-3 lg:p-4 border border-gray-100 max-w-[180px] md:max-w-none"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-500 to-accent-teal rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs md:text-sm">DR</span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-gray-900 text-xs md:text-sm lg:text-base truncate">Dr. Sarah Johnson</div>
                    <div className="text-xs text-gray-600 truncate">Available Today</div>
                  </div>
                  <div className="ml-2 flex items-center text-yellow-500 flex-shrink-0">
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                    <span className="ml-0.5 font-bold text-xs md:text-sm">4.9</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Additional Stats Row - Responsive */}
            <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-4 mt-4 md:mt-6 lg:mt-8">
              {[
                { value: "24/7", label: "Online Support", color: "bg-blue-100 text-blue-600" },
                { value: "98%", label: "Accuracy", color: "bg-green-100 text-green-600" },
                { value: "AI", label: "Powered", color: "bg-purple-100 text-purple-600" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 lg:p-4 text-center border border-gray-100 shadow-md md:shadow-lg"
                >
                  <div className={`text-base md:text-lg lg:text-xl font-bold mb-0.5 md:mb-1 ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Only show on desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <div className="text-xs text-gray-500 mb-1 md:mb-2">Scroll to explore</div>
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 md:h-3 bg-primary-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero