import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Star, Award, Calendar, MessageSquare, Phone, Sparkles, Heart, Users, Clock, CheckCircle, Zap, ArrowRight, X, Eye, Activity, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'

const DoctorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')
  const [selectedAvailability, setSelectedAvailability] = useState('all')
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [viewMode, setViewMode] = useState('grid')

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'General Physician',
      experience: '12 years',
      rating: 4.9,
      patients: '5.2K',
      available: true,
      nextAvailable: 'Today 2:00 PM',
      consultationFee: '120 ETB',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      education: 'MD, Harvard Medical School',
      languages: ['EN', 'ES'],
      features: ['Telemedicine', '24/7 Support'],
      color: 'from-blue-500 to-cyan-500',
      schedule: ['Mon-Fri: 9AM-6PM'],
      about: 'Board-certified physician specializing in preventive medicine and chronic disease management.',
      expertise: ['Preventive Care', 'Chronic Disease']
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Dentist',
      experience: '8 years',
      rating: 4.8,
      patients: '3.8K',
      available: true,
      nextAvailable: 'Tomorrow 10:30 AM',
      consultationFee: '150 ETB',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      education: 'DDS, UCLA School of Dentistry',
      languages: ['EN', 'CH'],
      features: ['Emergency Care', 'Cosmetic'],
      color: 'from-blue-600 to-indigo-600',
      schedule: ['Tue-Thu: 8AM-7PM'],
      about: 'Specializes in pain-free dentistry and advanced cosmetic procedures with state-of-the-art technology.',
      expertise: ['Cosmetic Dentistry', 'Implants']
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Ophthalmologist',
      experience: '15 years',
      rating: 4.9,
      patients: '6.2K',
      available: true,
      nextAvailable: 'Today 4:15 PM',
      consultationFee: '200 ETB',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      education: 'MD, Johns Hopkins University',
      languages: ['EN', 'ES', 'FR'],
      features: ['Laser Surgery', 'Retina Specialist'],
      color: 'from-cyan-500 to-blue-500',
      schedule: ['Mon-Wed: 9AM-5PM'],
      about: 'Renowned ophthalmologist with expertise in laser surgery and retinal diseases.',
      expertise: ['Cataract Surgery', 'Glaucoma']
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Cardiologist',
      experience: '18 years',
      rating: 4.7,
      patients: '7.5K',
      available: true,
      nextAvailable: 'Tomorrow 3:45 PM',
      consultationFee: '300 ETB',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      education: 'MD, Stanford University',
      languages: ['EN'],
      features: ['Non-invasive', 'Advanced Diagnostics'],
      color: 'from-blue-700 to-violet-600',
      schedule: ['Mon-Tue: 8AM-6PM'],
      about: 'Leading cardiologist specializing in non-invasive cardiac procedures and rehabilitation.',
      expertise: ['Echocardiography', 'Heart Failure']
    },
    {
      id: 5,
      name: 'Dr. Lisa Wang',
      specialty: 'Dermatologist',
      experience: '10 years',
      rating: 4.8,
      patients: '4.2K',
      available: true,
      nextAvailable: 'Today 5:30 PM',
      consultationFee: ' 600 ETB',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
      education: 'MD, Yale School of Medicine',
      languages: ['EN', 'CH'],
      features: ['Skin Cancer', 'Aesthetic'],
      color: 'from-blue-500 to-indigo-500',
      schedule: ['Mon-Wed: 10AM-7PM'],
      about: 'Board-certified dermatologist specializing in skin cancer prevention and aesthetic dermatology.',
      expertise: ['Skin Cancer', 'Laser Therapy']
    },
    {
      id: 6,
      name: 'Dr. Robert Kim',
      specialty: 'Pediatrician',
      experience: '14 years',
      rating: 4.9,
      patients: '6.8K',
      available: true,
      nextAvailable: 'Today 11:45 AM',
      consultationFee: '400 ETB',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
      education: 'MD, Boston Children\'s Hospital',
      languages: ['EN', 'KR'],
      features: ['Vaccinations', '24/7 On-call'],
      color: 'from-blue-400 to-cyan-400',
      schedule: ['Mon-Fri: 8AM-6PM'],
      about: 'Dedicated pediatrician with expertise in child development and preventive care.',
      expertise: ['Child Development', 'Vaccinations']
    },
    {
      id: 7,
      name: 'Dr. Maria Garcia',
      specialty: 'Neurologist',
      experience: '16 years',
      rating: 4.8,
      patients: '4.9K',
      available: true,
      nextAvailable: 'Tomorrow 1:15 PM',
      consultationFee: '250 ETB',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
      education: 'MD, Mayo Clinic',
      languages: ['EN', 'ES', 'PT'],
      features: ['Advanced Diagnostics', 'Headache Specialist'],
      color: 'from-indigo-500 to-blue-500',
      schedule: ['Tue-Thu: 9AM-7PM'],
      about: 'Specializes in neurological disorders with advanced diagnostic techniques.',
      expertise: ['Migraine Management', 'Parkinson\'s']
    },
    {
      id: 8,
      name: 'Dr. David Miller',
      specialty: 'Orthopedic Surgeon',
      experience: '20 years',
      rating: 4.7,
      patients: '8.1K',
      available: true,
      nextAvailable: 'Friday 9:30 AM',
      consultationFee: '200 ETB',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      education: 'MD, Johns Hopkins University',
      languages: ['EN', 'DE'],
      features: ['Joint Replacement', 'Sports Medicine'],
      color: 'from-blue-600 to-cyan-600',
      schedule: ['Mon-Wed: 7AM-5PM'],
      about: 'Expert in joint replacement and sports medicine with minimally invasive techniques.',
      expertise: ['Joint Replacement', 'Sports Injuries']
    }
  ]

  const specialties = [
    { id: 'all', name: 'All Specialties', icon: Stethoscope },
    { id: 'General Physician', name: 'General Physician', icon: Stethoscope },
    { id: 'Dentist', name: 'Dentist', icon: Activity },
    { id: 'Ophthalmologist', name: 'Ophthalmologist', icon: Eye },
    { id: 'Cardiologist', name: 'Cardiologist', icon: Heart },
    { id: 'Dermatologist', name: 'Dermatologist', icon: Sparkles },
    { id: 'Pediatrician', name: 'Pediatrician', icon: Users },
    { id: 'Neurologist', name: 'Neurologist', icon: Activity },
    { id: 'Orthopedic Surgeon', name: 'Orthopedic Surgeon', icon: Award },
  ]

  const availabilityOptions = [
    { id: 'all', label: 'All Doctors', icon: Users },
    { id: 'available', label: 'Available Today', icon: Calendar },
    { id: 'telemedicine', label: 'Telemedicine', icon: MessageSquare },
  ]

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty
    const matchesAvailability = selectedAvailability === 'all' || 
                              (selectedAvailability === 'available' && doctor.available) ||
                              (selectedAvailability === 'telemedicine' && doctor.features.includes('Telemedicine'))
    return matchesSearch && matchesSpecialty && matchesAvailability
  })

  const stats = [
    { icon: Users, value: '50K+', label: 'Patients', color: 'from-blue-500 to-cyan-500' },
    { icon: Award, value: '100%', label: 'Certified', color: 'from-blue-600 to-indigo-600' },
    { icon: Clock, value: '15 min', label: 'Response', color: 'from-cyan-500 to-blue-500' },
    { icon: Star, value: '4.8', label: 'Rating', color: 'from-blue-500 to-indigo-500' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/10 to-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tr from-blue-500/3 to-indigo-500/3 rounded-full blur-3xl" />
        
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 15, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            className={`absolute w-1 h-1 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full ${
              i % 4 === 0 ? 'top-1/4 left-1/4' :
              i % 4 === 1 ? 'top-2/3 right-1/3' :
              i % 4 === 2 ? 'bottom-1/4 left-1/3' :
              'top-2/3 left-2/3'
            }`}
          />
        ))}
      </div>

      <div className="relative container-custom px-4 py-8 md:py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full mb-4 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Expert Medical Team</span>
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gray-900">Meet Our</span>{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Specialists
              </span>
              <motion.div
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              />
            </span>
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
            Our team of board-certified medical professionals provides exceptional healthcare with personalized attention.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 md:mb-12"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-2 md:mb-3`}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-gray-900 mb-0.5">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 md:mb-12 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-blue-400" />
            <input
              type="text"
              placeholder="Search doctors..."
              className="w-full pl-10 pr-4 md:pl-12 md:pr-6 py-3 md:py-4 bg-white rounded-xl md:rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-sm md:text-base shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Specialty Filter */}
            <div className="flex-1">
              <div className="text-xs md:text-sm font-medium text-gray-700 mb-2">Specialty</div>
              <div className="flex flex-wrap gap-2">
                {specialties.slice(0, 6).map((specialty) => {
                  const Icon = specialty.icon
                  return (
                    <motion.button
                      key={specialty.id}
                      onClick={() => setSelectedSpecialty(specialty.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-lg font-medium transition-all ${
                        selectedSpecialty === specialty.id
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                          : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-200 hover:bg-blue-50'
                      }`}
                    >
                      <Icon className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="text-xs md:text-sm">{specialty.name}</span>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-end gap-2">
              <div className="text-xs md:text-sm font-medium text-gray-700 mb-2">View</div>
              <div className="flex bg-white rounded-lg border border-gray-200 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-xs md:text-sm text-gray-600">
            Showing {filteredDoctors.length} of {doctors.length} doctors
          </div>
        </motion.div>

        {/* Doctors Grid/List */}
        <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6" : "space-y-4 md:space-y-6"}>
          <AnimatePresence>
            {filteredDoctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -2 }}
                onClick={() => setSelectedDoctor(doctor)}
                className={`group relative cursor-pointer ${
                  viewMode === 'grid' 
                    ? 'bg-white rounded-xl md:rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden'
                    : 'bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all'
                }`}
              >
                {/* Hover Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${doctor.color} opacity-0 group-hover:opacity-3 transition-opacity duration-300`} />
                
                {viewMode === 'grid' ? (
                  // Grid View - Clean and Minimal
                  <>
                    {/* Doctor Header */}
                    <div className="relative flex items-start gap-3 md:gap-4 mb-4">
                      {/* Doctor Image */}
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5">
                          <img 
                            src={doctor.image} 
                            alt={doctor.name}
                            className="w-full h-full rounded-xl md:rounded-2xl bg-white object-cover"
                          />
                        </div>
                        {/* Availability Indicator */}
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                            doctor.available ? 'bg-green-500' : 'bg-amber-500'
                          }`}
                        />
                      </div>
                      
                      {/* Doctor Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-0.5 group-hover:text-blue-600 transition-colors truncate">
                          {doctor.name}
                        </h3>
                        <p className="text-blue-600 font-medium text-xs md:text-sm mb-2 truncate">
                          {doctor.specialty}
                        </p>
                        
                        {/* Rating and Experience */}
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current" />
                            <span className="font-bold text-gray-900 text-xs md:text-sm">{doctor.rating}</span>
                          </div>
                          <div className="w-px h-3 bg-gray-200" />
                          <span className="text-gray-600 text-xs">{doctor.experience}</span>
                        </div>
                        
                        {/* Quick Stats */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3 text-gray-400" />
                            <span className="text-gray-600 text-xs">{doctor.patients}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-gray-400" />
                            <span className="text-gray-600 text-xs">{doctor.nextAvailable.split(' ')[0]}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Features and CTA */}
                    <div className="space-y-3">
                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5">
                        {doctor.features.slice(0, 2).map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-xs font-medium rounded-lg"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      {/* CTA Section */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div>
                          <div className="text-xs text-gray-500">Consultation</div>
                          <div className="font-bold text-gray-900 text-sm md:text-base">{doctor.consultationFee}</div>
                        </div>
                        <Link
                          to="/appointment"
                          className="group/btn inline-flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:shadow-md transition-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="text-xs md:text-sm">Book</span>
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  // List View - Clean and Minimal
                  <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                    {/* Doctor Image */}
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5">
                        <img 
                          src={doctor.image} 
                          alt={doctor.name}
                          className="w-full h-full rounded-xl md:rounded-2xl bg-white object-cover"
                        />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                          doctor.available ? 'bg-green-500' : 'bg-amber-500'
                        }`}
                      />
                    </div>
                    
                    {/* Doctor Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1 group-hover:text-blue-600 transition-colors">
                            {doctor.name}
                          </h3>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-blue-600 font-medium text-sm md:text-base">{doctor.specialty}</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current" />
                              <span className="font-bold text-gray-900 text-sm md:text-base">{doctor.rating}</span>
                              <span className="text-gray-600 text-xs md:text-sm">({doctor.patients})</span>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {doctor.about}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900 text-lg md:text-xl">{doctor.consultationFee}</div>
                          <div className="text-gray-600 text-xs md:text-sm">Consultation</div>
                        </div>
                      </div>
                      
                      {/* Bottom Section */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                            <span className="text-gray-600 text-xs md:text-sm">{doctor.nextAvailable}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            {doctor.languages.map((lang, idx) => (
                              <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                                {lang}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                            <MessageSquare className="w-4 h-4" />
                          </button>
                          <Link
                            to="/appointment"
                            className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:shadow-md transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">Book Now</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredDoctors.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 md:py-16"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Search className="w-12 h-12 md:w-16 md:h-16 text-blue-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">No doctors found</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm md:text-base">
              Try adjusting your search or filter criteria.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedSpecialty('all'); }}
              className="inline-flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:shadow-md transition-all"
            >
              <X className="w-4 h-4" />
              <span className="text-sm md:text-base">Clear Filters</span>
            </button>
          </motion.div>
        )}

        {/* Doctor Detail Modal */}
        <AnimatePresence>
          {selectedDoctor && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedDoctor(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl md:rounded-3xl max-w-2xl md:max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="relative">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5">
                          <img 
                            src={selectedDoctor.image} 
                            alt={selectedDoctor.name}
                            className="w-full h-full rounded-xl md:rounded-2xl bg-white object-cover"
                          />
                        </div>
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center"
                        >
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </motion.div>
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                          {selectedDoctor.name}
                        </h2>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-blue-600 font-medium">{selectedDoctor.specialty}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
                            <span className="font-bold">{selectedDoctor.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                            {selectedDoctor.experience} experience
                          </span>
                          <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                            Available Today
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedDoctor(null)}
                      className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <X className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                    </button>
                  </div>

                  {/* Main Content */}
                  <div className="space-y-6 md:space-y-8">
                    {/* About */}
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">About</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedDoctor.about}
                      </p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <div className="text-sm text-gray-500">Education</div>
                        <div className="font-medium text-gray-900 text-sm md:text-base">{selectedDoctor.education}</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-gray-500">Next Available</div>
                        <div className="font-medium text-gray-900 text-sm md:text-base flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          {selectedDoctor.nextAvailable}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-gray-500">Consultation Fee</div>
                        <div className="font-bold text-xl text-gray-900">{selectedDoctor.consultationFee}</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-gray-500">Languages</div>
                        <div className="flex gap-1.5">
                          {selectedDoctor.languages.map((lang, idx) => (
                            <span key={idx} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-gray-500">Schedule</div>
                        <div className="font-medium text-gray-900 text-sm md:text-base">{selectedDoctor.schedule[0]}</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-gray-500">Special Features</div>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedDoctor.features.map((feature, idx) => (
                            <span key={idx} className="px-2.5 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-xs font-medium rounded-lg">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Expertise */}
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Areas of Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedDoctor.expertise.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-blue-500" />
                            <span className="font-medium text-gray-900">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-100">
                      <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 font-medium rounded-lg hover:from-blue-100 hover:to-cyan-100 transition-all">
                        <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                        <span>Send Message</span>
                      </button>
                      <Link
                        to="/appointment"
                        className="group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg transition-all"
                        onClick={() => setSelectedDoctor(null)}
                      >
                        <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                        <span>Book Appointment</span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
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
          className="mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl md:rounded-2xl p-6 md:p-8 text-white shadow-lg overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Need help choosing?</h3>
                  <p className="text-blue-100 text-sm md:text-base mb-4">
                    Our medical team can help you find the right specialist.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-cyan-300" />
                      <span className="text-sm">24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-cyan-300" />
                      <span className="text-sm">Expert Guidance</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-all"
                >
                  <span>Get Assistance</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DoctorsPage