import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Clock, Users, Shield, TrendingUp, ArrowRight, Star, Sparkles, Heart, Zap, CheckCircle, Award, Calendar, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedService, setSelectedService] = useState(null)
  const [viewMode, setViewMode] = useState('grid')

  const services = [
    {
      id: 1,
      name: 'General Health Checkup',
      description: 'Comprehensive physical examination and advanced health screening with personalized wellness plan',
      duration: '45 min',
      price: '$150',
      category: 'preventive',
      icon: '🩺',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'from-blue-500/10 via-blue-400/5 to-cyan-500/10',
      features: ['Complete Blood Count', 'ECG & Heart Monitoring', 'Doctor Consultation', 'Personalized Report'],
      rating: 4.9,
      popular: true,
      specialists: 12,
      waitTime: '15 min',
      badges: ['Most Popular', 'Instant Results']
    },
    {
      id: 2,
      name: 'Dental Care Excellence',
      description: 'Advanced dental examination with digital imaging and professional cleaning using latest technology',
      duration: '60 min',
      price: '$200',
      category: 'dental',
      icon: '🦷',
      color: 'from-blue-600 to-indigo-600',
      gradient: 'from-blue-600/10 via-blue-500/5 to-indigo-600/10',
      features: ['Digital X-Ray', 'Laser Cleaning', 'Cavity Detection', 'Oral Cancer Screening'],
      rating: 4.8,
      popular: true,
      specialists: 8,
      waitTime: '20 min',
      badges: ['Pain-Free', 'Advanced Tech']
    },
    {
      id: 3,
      name: 'Premium Eye Examination',
      description: 'Comprehensive eye test with retinal imaging and personalized vision correction plan',
      duration: '60 min',
      price: '$120',
      category: 'vision',
      icon: '👁️',
      color: 'from-cyan-500 to-blue-500',
      gradient: 'from-cyan-500/10 via-cyan-400/5 to-blue-500/10',
      features: ['Retinal Imaging', 'Vision Field Test', 'Pressure Analysis', 'Digital Prescription'],
      rating: 4.9,
      popular: false,
      specialists: 6,
      waitTime: '10 min',
      badges: ['Digital Imaging', 'Same Day Results']
    },
    {
      id: 4,
      name: 'Skin Care & Dermatology',
      description: 'Professional skin analysis with AI-powered diagnosis and customized treatment planning',
      duration: '45 min',
      price: '$180',
      category: 'dermatology',
      icon: '🌟',
      color: 'from-blue-700 to-violet-600',
      gradient: 'from-blue-700/10 via-blue-600/5 to-violet-600/10',
      features: ['AI Skin Analysis', 'Treatment Planning', 'Follow-up Care', 'Product Recommendations'],
      rating: 4.7,
      popular: true,
      specialists: 5,
      waitTime: '25 min',
      badges: ['AI-Powered', 'Holistic Care']
    },
    {
      id: 5,
      name: 'Cardiology Comprehensive',
      description: 'Advanced heart health assessment with echocardiogram and cardiovascular risk analysis',
      duration: '90 min',
      price: '$350',
      category: 'cardiology',
      icon: '❤️',
      color: 'from-blue-500 to-indigo-500',
      gradient: 'from-blue-500/10 via-blue-400/5 to-indigo-500/10',
      features: ['Echocardiogram', 'Stress Test', 'Holter Monitoring', 'Cardiologist Consultation'],
      rating: 4.9,
      popular: true,
      specialists: 10,
      waitTime: '30 min',
      badges: ['Advanced Diagnostics', 'Expert Team']
    },
    {
      id: 6,
      name: 'Pediatrics Excellence',
      description: 'Child health monitoring with growth tracking and comprehensive vaccination services',
      duration: '30 min',
      price: '$100',
      category: 'pediatrics',
      icon: '👶',
      color: 'from-blue-400 to-cyan-400',
      gradient: 'from-blue-400/10 via-blue-300/5 to-cyan-400/10',
      features: ['Growth Tracking', 'Vaccination Schedule', 'Nutrition Planning', 'Development Assessment'],
      rating: 4.8,
      popular: false,
      specialists: 7,
      waitTime: '15 min',
      badges: ['Child-Friendly', 'Growth Focused']
    },
    {
      id: 7,
      name: 'Mental Wellness Pro',
      description: 'Counseling and mental health support with licensed therapists and personalized therapy plans',
      duration: '60 min',
      price: '$120',
      category: 'mental',
      icon: '🧠',
      color: 'from-indigo-500 to-blue-500',
      gradient: 'from-indigo-500/10 via-indigo-400/5 to-blue-500/10',
      features: ['Therapy Sessions', 'Stress Management', 'Coping Strategies', 'Wellness Planning'],
      rating: 4.9,
      popular: true,
      specialists: 9,
      waitTime: '20 min',
      badges: ['Confidential', 'Expert Therapists']
    },
    {
      id: 8,
      name: 'Physical Therapy Elite',
      description: 'Advanced rehabilitation with mobility improvement programs and personalized exercise plans',
      duration: '45 min',
      price: '$110',
      category: 'therapy',
      icon: '💪',
      color: 'from-blue-500 to-teal-500',
      gradient: 'from-blue-500/10 via-blue-400/5 to-teal-500/10',
      features: ['Mobility Assessment', 'Personalized Therapy', 'Exercise Planning', 'Progress Tracking'],
      rating: 4.7,
      popular: false,
      specialists: 6,
      waitTime: '15 min',
      badges: ['Recovery Focused', 'Personalized']
    },
    {
      id: 9,
      name: 'Women\'s Health Suite',
      description: 'Comprehensive women\'s health services with specialized care and wellness programs',
      duration: '60 min',
      price: '$180',
      category: 'womens',
      icon: '🌸',
      color: 'from-pink-500 to-rose-500',
      gradient: 'from-pink-500/10 via-pink-400/5 to-rose-500/10',
      features: ['Wellness Screening', 'Specialist Consultation', 'Hormonal Analysis', 'Health Planning'],
      rating: 4.8,
      popular: true,
      specialists: 8,
      waitTime: '20 min',
      badges: ['Specialized Care', 'Holistic Approach']
    },
    {
      id: 10,
      name: 'Orthopedics Advanced',
      description: 'Musculoskeletal care with digital imaging and personalized treatment plans',
      duration: '50 min',
      price: '$220',
      category: 'orthopedics',
      icon: '🦴',
      color: 'from-blue-600 to-indigo-600',
      gradient: 'from-blue-600/10 via-blue-500/5 to-indigo-600/10',
      features: ['Digital Imaging', 'Pain Management', 'Rehabilitation Plan', 'Follow-up Care'],
      rating: 4.7,
      popular: false,
      specialists: 5,
      waitTime: '25 min',
      badges: ['Advanced Imaging', 'Pain Relief']
    },
    {
      id: 11,
      name: 'Nutrition & Dietetics',
      description: 'Personalized nutrition plans with metabolic analysis and dietary guidance',
      duration: '40 min',
      price: '$90',
      category: 'nutrition',
      icon: '🥗',
      color: 'from-green-500 to-emerald-500',
      gradient: 'from-green-500/10 via-green-400/5 to-emerald-500/10',
      features: ['Metabolic Analysis', 'Diet Planning', 'Progress Tracking', 'Recipe Guidance'],
      rating: 4.8,
      popular: true,
      specialists: 6,
      waitTime: '15 min',
      badges: ['Personalized Plans', 'Science-Based']
    },
    {
      id: 12,
      name: 'Executive Health Scan',
      description: 'Comprehensive executive health screening with advanced diagnostics and wellness planning',
      duration: '120 min',
      price: '$500',
      category: 'executive',
      icon: '💼',
      color: 'from-blue-800 to-indigo-800',
      gradient: 'from-blue-800/10 via-blue-700/5 to-indigo-800/10',
      features: ['Full Body Scan', 'Advanced Blood Work', 'Stress Analysis', 'Executive Report'],
      rating: 4.9,
      popular: true,
      specialists: 15,
      waitTime: '45 min',
      badges: ['Premium Service', 'Complete Analysis']
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services', count: services.length, icon: '🌟' },
    { id: 'preventive', name: 'Preventive Care', count: services.filter(s => s.category === 'preventive').length, icon: '🩺' },
    { id: 'dental', name: 'Dental Care', count: services.filter(s => s.category === 'dental').length, icon: '🦷' },
    { id: 'vision', name: 'Vision Care', count: services.filter(s => s.category === 'vision').length, icon: '👁️' },
    { id: 'dermatology', name: 'Dermatology', count: services.filter(s => s.category === 'dermatology').length, icon: '🌟' },
    { id: 'cardiology', name: 'Cardiology', count: services.filter(s => s.category === 'cardiology').length, icon: '❤️' },
    { id: 'pediatrics', name: 'Pediatrics', count: services.filter(s => s.category === 'pediatrics').length, icon: '👶' },
    { id: 'mental', name: 'Mental Wellness', count: services.filter(s => s.category === 'mental').length, icon: '🧠' },
    { id: 'womens', name: "Women's Health", count: services.filter(s => s.category === 'womens').length, icon: '🌸' },
  ]

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const stats = [
    { icon: Users, value: '50K+', label: 'Happy Patients', color: 'from-blue-500 to-cyan-500' },
    { icon: Shield, value: '100+', label: 'Specialist Doctors', color: 'from-blue-600 to-indigo-600' },
    { icon: Clock, value: '15 min', label: 'Avg. Wait Time', color: 'from-cyan-500 to-blue-500' },
    { icon: TrendingUp, value: '98%', label: 'Satisfaction Rate', color: 'from-blue-500 to-indigo-500' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl" />
        
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
            className={`absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full ${
              i % 4 === 0 ? 'top-1/4 left-1/4' :
              i % 4 === 1 ? 'top-2/3 right-1/3' :
              i % 4 === 2 ? 'bottom-1/4 left-1/3' :
              'top-2/3 left-2/3'
            }`}
          />
        ))}
      </div>

      <div className="relative container-custom px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-sm font-medium text-blue-700">Comprehensive Healthcare Services</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
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
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Choose from our wide range of specialized medical services designed with cutting-edge technology 
            and delivered by expert healthcare professionals.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400 group-hover:text-blue-600 transition-colors" />
            <input
              type="text"
              placeholder="Search services, treatments, or specialists..."
              className="w-full pl-14 pr-6 py-4 bg-white rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-lg shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <motion.div
              animate={{ rotate: searchTerm ? [0, 360] : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              <Filter className="w-5 h-5 text-blue-400" />
            </motion.div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-200 hover:bg-blue-50'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center justify-between">
            <div className="text-gray-600">
              Showing {filteredServices.length} of {services.length} services
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-6"}>
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedService(service)}
                className={`group relative cursor-pointer ${
                  viewMode === 'grid' 
                    ? 'bg-white rounded-3xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all overflow-hidden'
                    : 'bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all'
                }`}
              >
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Popular Badge */}
                {service.popular && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full z-10"
                  >
                    <Sparkles className="w-3 h-3 inline mr-1" />
                    Popular
                  </motion.div>
                )}
                
                {viewMode === 'grid' ? (
                  // Grid View
                  <>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl`}>
                          {service.icon}
                        </div>
                        <div className="flex items-center gap-1 text-blue-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-bold">{service.rating}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.badges.map((badge, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-xs font-medium rounded-lg"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <div className="text-sm text-gray-500">Duration</div>
                          <div className="font-bold text-gray-900 flex items-center gap-1">
                            <Clock className="w-4 h-4 text-blue-400" />
                            {service.duration}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Starting at</div>
                          <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            {service.price}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent"
                    >
                      <Link
                        to="/appointment"
                        className="group/btn inline-flex items-center justify-center gap-3 w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                      >
                        <span>Book Now</span>
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                      </Link>
                    </motion.div>
                  </>
                ) : (
                  // List View
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl flex-shrink-0`}>
                      {service.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {service.name}
                          </h3>
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-2 text-blue-400">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="font-bold">{service.rating}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Users className="w-4 h-4" />
                              <span>{service.specialists} specialists</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span>{service.waitTime} wait time</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            {service.price}
                          </div>
                          <div className="text-gray-600">Starting price</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium text-blue-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {service.badges.map((badge, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-medium rounded-full"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                        <Link
                          to="/appointment"
                          className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                          <span>Schedule Appointment</span>
                          <Calendar className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-16 h-16 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No services found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Try adjusting your search or filter criteria. We offer a wide range of medical services.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <X className="w-5 h-5" />
              <span>Clear All Filters</span>
            </button>
          </motion.div>
        )}

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className={`bg-gradient-to-br ${selectedService.gradient} rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
              >
                <div className="bg-white rounded-3xl p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center text-4xl`}>
                        {selectedService.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                          {selectedService.name}
                        </h2>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 text-blue-400">
                            <Star className="w-5 h-5 fill-current" />
                            <span className="font-bold text-lg">{selectedService.rating}</span>
                            <span className="text-gray-600">Rating</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-5 h-5" />
                            <span>{selectedService.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Users className="w-5 h-5" />
                            <span>{selectedService.specialists} specialists</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Service Overview</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {selectedService.description}
                      </p>
                      
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 mb-6">
                        <h4 className="font-bold text-gray-900 mb-4">Key Features</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {selectedService.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white mb-6">
                        <h4 className="font-bold text-white mb-4">Service Details</h4>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span>Duration</span>
                            <span className="font-bold">{selectedService.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Specialists Available</span>
                            <span className="font-bold">{selectedService.specialists} Doctors</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Average Wait Time</span>
                            <span className="font-bold">{selectedService.waitTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Starting Price</span>
                            <span className="font-bold text-2xl">{selectedService.price}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-2xl p-6">
                        <h4 className="font-bold text-gray-900 mb-4">Why Choose This Service?</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-600">Board-certified specialists</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-600">Latest medical technology</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-600">HIPAA compliant & secure</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Heart className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-600">Patient-centered care</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {selectedService.badges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/appointment"
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                      onClick={() => setSelectedService(null)}
                    >
                      <Calendar className="w-6 h-6" />
                      <span>Book Appointment Now</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-white shadow-2xl overflow-hidden relative">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.sin(i) * 10, 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className={`absolute w-16 h-16 border-2 border-white/20 rounded-full ${
                    i === 0 ? 'top-10 left-10' :
                    i === 1 ? 'top-20 right-20' :
                    i === 2 ? 'bottom-10 left-1/4' :
                    i === 3 ? 'bottom-20 right-1/3' :
                    'top-1/2 left-1/2'
                  }`}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
                  <p className="text-blue-100 text-lg mb-6 max-w-2xl">
                    Our medical team can create personalized treatment plans tailored to your specific needs and health goals.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-cyan-300" />
                      <span>100% Confidential</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-cyan-300" />
                      <span>Same Day Consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-cyan-300" />
                      <span>Expert Team</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ServicesPage