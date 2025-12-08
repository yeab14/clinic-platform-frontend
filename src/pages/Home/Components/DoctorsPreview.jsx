import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Award, Calendar, Clock, Users, Heart, Sparkles, Zap, Shield, CheckCircle, MessageCircle, Video, MapPin, Stethoscope, Brain, Activity, Eye, Plus, ChevronRight } from 'lucide-react'

const DoctorsPreview = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(0)
  const [viewMode, setViewMode] = useState('grid')
  const [availabilityFilter, setAvailabilityFilter] = useState('all')

  const doctors = [
    { 
      id: 1,
      name: 'Dr. Sarah Johnson', 
      specialty: 'General Medicine', 
      subSpecialty: 'Preventive Care Specialist',
      rating: 4.9, 
      patients: 5200,
      experience: '15 years',
      education: 'Harvard Medical School',
      languages: ['English', 'Spanish', 'French'],
      avatar: 'SJ',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'from-blue-500/10 to-cyan-500/10',
      icon: Stethoscope,
      available: true,
      nextSlot: 'Today, 3:30 PM',
      waitTime: '15 min',
      consultationFee: '$120',
      highlights: ['Patient Choice Award 2023', 'Top 10 Physicians', '15+ Years Experience'],
      expertise: ['Preventive Medicine', 'Chronic Disease Management', 'Health Screenings']
    },
    { 
      id: 2,
      name: 'Dr. Michael Chen', 
      specialty: 'Cardiology', 
      subSpecialty: 'Interventional Cardiologist',
      rating: 4.8, 
      patients: 3800,
      experience: '12 years',
      education: 'Johns Hopkins University',
      languages: ['English', 'Mandarin'],
      avatar: 'MC',
      color: 'from-red-500 to-pink-600',
      gradient: 'from-red-500/10 to-pink-600/10',
      icon: Heart,
      available: true,
      nextSlot: 'Today, 4:45 PM',
      waitTime: '25 min',
      consultationFee: '$180',
      highlights: ['Fellow of American College', 'Research Published', 'Minimally Invasive Expert'],
      expertise: ['Echocardiography', 'Heart Failure', 'Preventive Cardiology']
    },
    { 
      id: 3,
      name: 'Dr. Emily Rodriguez', 
      specialty: 'Neurology', 
      subSpecialty: 'Cognitive Specialist',
      rating: 4.9, 
      patients: 6200,
      experience: '18 years',
      education: 'Stanford Medical School',
      languages: ['English', 'Spanish', 'Portuguese'],
      avatar: 'ER',
      color: 'from-indigo-500 to-purple-600',
      gradient: 'from-indigo-500/10 to-purple-600/10',
      icon: Brain,
      available: true,
      nextSlot: 'Tomorrow, 9:00 AM',
      waitTime: '30 min',
      consultationFee: '$200',
      highlights: ['Neuroimaging Expert', 'Clinical Researcher', 'Teaching Professor'],
      expertise: ['Memory Disorders', 'Headache Medicine', 'Neurodegenerative Diseases']
    },
    { 
      id: 4,
      name: 'Dr. James Wilson', 
      specialty: 'Ophthalmology', 
      subSpecialty: 'Retina Specialist',
      rating: 4.7, 
      patients: 7500,
      experience: '22 years',
      education: 'Mayo Clinic School',
      languages: ['English', 'German'],
      avatar: 'JW',
      color: 'from-amber-500 to-orange-600',
      gradient: 'from-amber-500/10 to-orange-600/10',
      icon: Eye,
      available: false,
      nextSlot: 'Monday, 10:15 AM',
      waitTime: '45 min',
      consultationFee: '$160',
      highlights: ['Surgical Excellence Award', 'Laser Surgery Pioneer', 'International Speaker'],
      expertise: ['Cataract Surgery', 'Retinal Diseases', 'Corneal Transplants']
    },
  ]

  const stats = [
    { value: '50+', label: 'Expert Doctors', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { value: '4.8★', label: 'Avg. Rating', icon: Star, color: 'text-amber-500', bg: 'bg-amber-100' },
    { value: '98%', label: 'Success Rate', icon: Award, color: 'text-green-600', bg: 'bg-green-100' },
    { value: '24/7', label: 'Availability', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-100' },
  ]

  const consultationTypes = [
    { type: 'In-Person', icon: MapPin, color: 'from-blue-500 to-cyan-500' },
    { type: 'Video Call', icon: Video, color: 'from-indigo-500 to-purple-500' },
    { type: 'Chat', icon: MessageCircle, color: 'from-green-500 to-teal-500' },
  ]

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Medical Icons */}
        {[Stethoscope, Heart, Brain, Eye].map((Icon, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 20, 0],
            }}
            transition={{
              duration: 15 + index * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute text-blue-200/30 ${index === 0 ? 'top-20 left-10 w-16 h-16' : 
                       index === 1 ? 'top-1/3 right-20 w-20 h-20' :
                       index === 2 ? 'bottom-1/4 left-20 w-14 h-14' :
                       'bottom-20 right-10 w-18 h-18'}`}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative container-custom px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-sm font-medium text-blue-700">Board Certified Experts</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">Meet Our</span>{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Medical Experts
              </span>
              <motion.div
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              />
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Connect with board-certified specialists who bring decades of experience, 
            cutting-edge knowledge, and compassionate care to every consultation.
          </p>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl p-1 shadow-sm border border-gray-100">
              {['grid', 'list'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${viewMode === mode 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {mode === 'grid' ? 'Grid View' : 'List View'}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl p-1 shadow-sm border border-gray-100">
              {['all', 'available', 'specialist'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setAvailabilityFilter(filter)}
                  className={`px-3 py-2 text-sm rounded-lg font-medium transition-all ${availabilityFilter === filter 
                    ? 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {filter === 'all' ? 'All' : filter === 'available' ? 'Available Now' : 'Specialists'}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Doctors Grid/List */}
          <div className="lg:col-span-2">
            {viewMode === 'grid' ? (
              <div className="grid md:grid-cols-2 gap-6">
                {doctors.map((doctor, index) => {
                  const Icon = doctor.icon
                  const isSelected = selectedDoctor === index
                  
                  return (
                    <motion.div
                      key={doctor.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      onClick={() => setSelectedDoctor(index)}
                      className={`relative group cursor-pointer ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
                    >
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${doctor.color} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300`} />
                      
                      <div className="relative bg-white rounded-3xl p-6 shadow-lg border border-gray-100 overflow-hidden">
                        <div className="flex items-start gap-4 mb-6">
                          {/* Avatar */}
                          <motion.div
                            animate={isSelected ? { scale: [1, 1.1, 1] } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${doctor.color} flex items-center justify-center shadow-lg`}
                          >
                            <span className="text-2xl font-bold text-white">{doctor.avatar}</span>
                            {doctor.available && (
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white" />
                            )}
                          </motion.div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                                <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                                <p className="text-gray-600 text-sm mt-1">{doctor.subSpecialty}</p>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="font-bold text-gray-900">{doctor.rating}</span>
                              </div>
                            </div>
                            
                            {/* Quick Stats */}
                            <div className="flex flex-wrap gap-2 mt-4">
                              <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-lg">
                                <Users className="w-3 h-3 text-blue-600" />
                                <span className="text-xs font-medium text-blue-700">{doctor.patients.toLocaleString()}+</span>
                              </div>
                              <div className="flex items-center gap-1 px-2 py-1 bg-green-50 rounded-lg">
                                <Clock className="w-3 h-3 text-green-600" />
                                <span className="text-xs font-medium text-green-700">{doctor.experience}</span>
                              </div>
                              <div className="flex items-center gap-1 px-2 py-1 bg-purple-50 rounded-lg">
                                <Award className="w-3 h-3 text-purple-600" />
                                <span className="text-xs font-medium text-purple-700">Top Rated</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Availability */}
                        <div className="flex items-center justify-between mb-6 p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${doctor.available ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                            <span className="font-medium text-gray-900">
                              {doctor.available ? 'Available Today' : 'Available Soon'}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-gray-900">{doctor.nextSlot}</div>
                            <div className="text-xs text-gray-600">{doctor.waitTime} wait</div>
                          </div>
                        </div>
                        
                        {/* Languages */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {doctor.languages.map((lang, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-xs font-medium rounded-lg">
                              {lang}
                            </span>
                          ))}
                        </div>
                        
                        {/* Quick Actions */}
                        <div className="flex gap-2">
                          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 font-medium rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all">
                            <Calendar className="w-4 h-4" />
                            <span>Book</span>
                          </button>
                          <button className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-xl hover:shadow-md transition-shadow">
                            <MessageCircle className="w-4 h-4" />
                          </button>
                          <button className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-xl hover:shadow-md transition-shadow">
                            <Video className="w-4 h-4" />
                          </button>
                        </div>
                        
                        {/* Selected Indicator */}
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
                          >
                            <CheckCircle className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            ) : (
              <div className="space-y-4">
                {doctors.map((doctor, index) => (
                  <motion.div
                    key={doctor.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedDoctor(index)}
                    className={`p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer ${
                      selectedDoctor === index ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${doctor.color} flex items-center justify-center`}>
                        <span className="text-xl font-bold text-white">{doctor.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                            <p className="text-blue-600">{doctor.specialty}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="font-bold">{doctor.rating}</span>
                            </div>
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <span>{doctor.experience} experience</span>
                          <span>•</span>
                          <span>{doctor.patients.toLocaleString()} patients</span>
                          <span>•</span>
                          <span>Next: {doctor.nextSlot}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Doctor Details */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDoctor}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="sticky top-6"
              >
                <div className={`bg-gradient-to-br ${doctors[selectedDoctor]?.gradient} rounded-3xl p-8 border border-gray-100 shadow-xl overflow-hidden`}>
                  {/* Doctor Header */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${doctors[selectedDoctor]?.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-3xl font-bold text-white">{doctors[selectedDoctor]?.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900">{doctors[selectedDoctor]?.name}</h3>
                      <p className="text-blue-600 font-medium text-lg">{doctors[selectedDoctor]?.specialty}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-bold text-gray-900">{doctors[selectedDoctor]?.rating}</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{doctors[selectedDoctor]?.patients.toLocaleString()}+ patients</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Education & Experience */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                        <Award className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{doctors[selectedDoctor]?.education}</div>
                        <div className="text-sm text-gray-600">Medical Education</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{doctors[selectedDoctor]?.experience} Experience</div>
                        <div className="text-sm text-gray-600">Years of Practice</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expertise */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctors[selectedDoctor]?.expertise.map((item, index) => (
                        <span key={index} className="px-3 py-2 bg-white/80 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-lg">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Consultation Types */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Available For</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {consultationTypes.map((type, index) => {
                        const Icon = type.icon
                        return (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-3 text-center border border-gray-100 cursor-pointer"
                          >
                            <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${type.color} flex items-center justify-center`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-xs font-medium text-gray-700">{type.type}</div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                  
                  {/* Quick Booking */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{doctors[selectedDoctor]?.consultationFee}</div>
                        <div className="text-gray-600">Consultation Fee</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">{doctors[selectedDoctor]?.nextSlot}</div>
                        <div className="text-gray-600">Next Available</div>
                      </div>
                    </div>
                    <Link
                      to="/appointment"
                      className="group inline-flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Book Appointment Now</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Highlights */}
                  <div className="space-y-3">
                    {doctors[selectedDoctor]?.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                          <Zap className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* View All Doctors */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl border border-gray-100 shadow-lg max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  50+ Expert Doctors
                </span>
              </h3>
              <p className="text-gray-600">Explore our full team of specialists across 15+ medical fields</p>
            </div>
            <Link
              to="/doctors"
              className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-xl transition-all shadow-lg"
            >
              <span>View All Doctors</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DoctorsPreview