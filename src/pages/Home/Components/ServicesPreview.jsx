import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Stethoscope, Eye, Heart, Activity, Microscope, Brain, Bone, Syringe, Pill, Thermometer, Shield, Sparkles, Zap, Star, Plus } from 'lucide-react'

const ServicesPreview = () => {
  const [hoveredService, setHoveredService] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const services = [
    { 
      icon: Stethoscope, 
      name: 'General Medicine', 
      description: 'Comprehensive health assessments and preventative care with our expert physicians', 
      category: 'preventive',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'from-blue-500/10 to-cyan-500/10',
      iconBg: 'bg-gradient-to-br from-blue-100 to-cyan-100',
      duration: '30-45 min',
      specialists: '12 Doctors',
      rating: '4.9',
      features: ['Annual Checkups', 'Vaccinations', 'Health Screenings', 'Chronic Care']
    },
    { 
      icon: Activity, 
      name: 'Cardiology', 
      description: 'Advanced heart care with state-of-the-art diagnostic equipment and expert cardiologists', 
      category: 'specialist',
      color: 'from-red-500 to-pink-600',
      gradient: 'from-red-500/10 to-pink-600/10',
      iconBg: 'bg-gradient-to-br from-red-100 to-pink-100',
      duration: '45-60 min',
      specialists: '8 Cardiologists',
      rating: '4.8',
      features: ['Echocardiograms', 'Stress Tests', 'Heart Monitoring', 'Preventive Care']
    },
    { 
      icon: Eye, 
      name: 'Ophthalmology', 
      description: 'Complete eye care services from routine exams to advanced surgical procedures', 
      category: 'specialist',
      color: 'from-purple-500 to-indigo-600',
      gradient: 'from-purple-500/10 to-indigo-600/10',
      iconBg: 'bg-gradient-to-br from-purple-100 to-indigo-100',
      duration: '20-30 min',
      specialists: '6 Ophthalmologists',
      rating: '4.9',
      features: ['Vision Correction', 'Cataract Surgery', 'Glaucoma Care', 'Retina Services']
    },
    { 
      icon: Brain, 
      name: 'Neurology', 
      description: 'Comprehensive neurological care with cutting-edge diagnostic technology', 
      category: 'specialist',
      color: 'from-indigo-500 to-blue-600',
      gradient: 'from-indigo-500/10 to-blue-600/10',
      iconBg: 'bg-gradient-to-br from-indigo-100 to-blue-100',
      duration: '60 min',
      specialists: '5 Neurologists',
      rating: '4.7',
      features: ['MRI/CT Scans', 'EEG Testing', 'Headache Management', 'Movement Disorders']
    },
  ]

  const additionalServices = [
    { icon: Microscope, name: 'Lab Tests', category: 'diagnostic', color: 'from-green-500 to-teal-600' },
    { icon: Bone, name: 'Orthopedics', category: 'specialist', color: 'from-amber-500 to-orange-600' },
    { icon: Syringe, name: 'Vaccinations', category: 'preventive', color: 'from-cyan-500 to-blue-500' },
    { icon: Pill, name: 'Pharmacy', category: 'support', color: 'from-violet-500 to-purple-600' },
  ]

  const categories = [
    { id: 'all', label: 'All Services', count: 12 },
    { id: 'specialist', label: 'Specialist Care', count: 8 },
    { id: 'preventive', label: 'Preventive Care', count: 3 },
    { id: 'diagnostic', label: 'Diagnostics', count: 4 },
  ]

  const stats = [
    { value: '15 min', label: 'Avg. Wait Time', icon: Thermometer },
    { value: '98%', label: 'Accuracy Rate', icon: Shield },
    { value: '24/7', label: 'Support', icon: Zap },
    { value: '4.9★', label: 'Patient Rating', icon: Star },
  ]

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Medical Elements */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                             linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="relative container-custom px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-sm font-medium text-blue-700">Comprehensive Care</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">Advanced</span>{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Medical Services
              </span>
              <motion.div
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              />
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            From routine checkups to specialized treatments, we provide comprehensive healthcare 
            with the latest technology and expert medical professionals.
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2.5 rounded-xl font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{category.label}</span>
                <span className={`px-1.5 py-0.5 text-xs rounded-full ${
                  activeCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {category.count}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Service Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              const isHovered = hoveredService === index
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onHoverStart={() => setHoveredService(index)}
                  onHoverEnd={() => setHoveredService(null)}
                  className="relative group"
                >
                  {/* Animated Border Glow */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300`} />
                  
                  <div className="relative bg-white rounded-3xl p-6 shadow-lg border border-gray-100 overflow-hidden">
                    {/* Icon with Animation */}
                    <motion.div
                      animate={isHovered ? { rotate: [0, 10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 relative z-10`}
                    >
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
                      <Icon className="w-8 h-8 text-blue-600 relative z-10" />
                    </motion.div>

                    {/* Service Name with Gradient */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        {service.name}
                      </span>
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                    
                    {/* Service Stats */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-gray-700 font-medium">{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-bold">{service.rating}</span>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-xs font-medium rounded-lg"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                          +{service.features.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* CTA */}
                    <Link
                      to="/appointment"
                      className="group/btn inline-flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300"
                    >
                      <span className="font-medium text-blue-700">Book Appointment</span>
                      <ArrowRight className="w-5 h-5 text-blue-600 group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                    
                    {/* Hover Glow Effect */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isHovered ? { scale: 1, opacity: 0.3 } : {}}
                      className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-r ${service.color} blur-xl`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right: Service Details & Additional Services */}
          <div className="space-y-8">
            {/* Featured Service Detail */}
            <AnimatePresence mode="wait">
              {hoveredService !== null ? (
                <motion.div
                  key={hoveredService}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={`bg-gradient-to-br ${services[hoveredService]?.gradient} rounded-3xl p-8 border border-gray-100 shadow-xl overflow-hidden`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full mb-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-gray-700">Available Now</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {services[hoveredService]?.name}
                      </h3>
                      <div className="text-lg text-gray-700 mb-4">
                        {services[hoveredService]?.specialists} Available
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900 mb-1">{services[hoveredService]?.duration}</div>
                      <div className="text-gray-600">Average Session</div>
                    </div>
                  </div>
                  
                  {/* Service Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {services[hoveredService]?.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-xl"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                          <Plus className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Link
                    to="/appointment"
                    className="group inline-flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <span>Book {services[hoveredService]?.name} Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl p-8 border border-gray-100 shadow-xl overflow-hidden"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Stethoscope className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        Expert Care Awaits
                      </span>
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Hover over any service to see detailed information, 
                      available specialists, and book your appointment instantly.
                    </p>
                    <div className="inline-flex items-center gap-2 text-blue-600 font-medium">
                      <Sparkles className="w-5 h-5" />
                      <span>Select a service to continue</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Additional Services */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  More Services Available
                </span>
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                {additionalServices.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 hover:border-blue-200 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                        <div className="relative">
                          <div className={`absolute -left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="pl-6">
                            <div className="font-bold text-gray-900 text-sm">{service.name}</div>
                            <div className="text-xs text-gray-500">{service.category}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
            
            {/* CTA Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-white shadow-xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Can't Find Your Service?</h3>
                  <p className="opacity-90">Contact our team for specialized medical consultations</p>
                </div>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 font-bold rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all shadow-lg hover:shadow-xl"
          >
            <span className="text-lg">View All 20+ Medical Services</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview