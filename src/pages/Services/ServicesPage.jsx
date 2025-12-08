import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Clock, Users, Shield, TrendingUp, ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services = [
    {
      id: 1,
      name: 'General Health Checkup',
      description: 'Comprehensive physical examination and health screening',
      duration: '45 min',
      price: '$150',
      category: 'preventive',
      icon: '🩺',
      color: 'from-blue-500 to-blue-600',
      features: ['Blood Tests', 'ECG', 'Doctor Consultation'],
      rating: 4.9,
      popular: true
    },
    {
      id: 2,
      name: 'Dental Care',
      description: 'Complete dental examination and professional cleaning',
      duration: '60 min',
      price: '$200',
      category: 'dental',
      icon: '🦷',
      color: 'from-teal-500 to-teal-600',
      features: ['Teeth Cleaning', 'Cavity Check', 'X-Ray'],
      rating: 4.8,
      popular: true
    },
    {
      id: 3,
      name: 'Eye Examination',
      description: 'Comprehensive eye test and vision correction',
      duration: '60 min',
      price: '$120',
      category: 'vision',
      icon: '👁️',
      color: 'from-purple-500 to-purple-600',
      features: ['Vision Test', 'Pressure Check', 'Retina Scan'],
      rating: 4.9
    },
    {
      id: 4,
      name: 'Skin Care Consultation',
      description: 'Professional skin analysis and treatment planning',
      duration: '45 min',
      price: '$180',
      category: 'dermatology',
      icon: '🌟',
      color: 'from-pink-500 to-pink-600',
      features: ['Skin Analysis', 'Treatment Plan', 'Follow-up'],
      rating: 4.7
    },
    {
      id: 5,
      name: 'Cardiology Check',
      description: 'Heart health assessment and cardiovascular screening',
      duration: '90 min',
      price: '$350',
      category: 'cardiology',
      icon: '❤️',
      color: 'from-red-500 to-red-600',
      features: ['Echocardiogram', 'Stress Test', 'Consultation'],
      rating: 4.9,
      popular: true
    },
    {
      id: 6,
      name: 'Pediatrics',
      description: 'Child health monitoring and vaccination services',
      duration: '30 min',
      price: '$100',
      category: 'pediatrics',
      icon: '👶',
      color: 'from-yellow-500 to-yellow-600',
      features: ['Growth Check', 'Vaccination', 'Nutrition Advice'],
      rating: 4.8
    },
    {
      id: 7,
      name: 'Mental Wellness',
      description: 'Counseling and mental health support sessions',
      duration: '60 min',
      price: '$120',
      category: 'mental',
      icon: '🧠',
      color: 'from-indigo-500 to-indigo-600',
      features: ['Counseling', 'Therapy', 'Support Sessions'],
      rating: 4.9
    },
    {
      id: 8,
      name: 'Physical Therapy',
      description: 'Rehabilitation and mobility improvement programs',
      duration: '45 min',
      price: '$110',
      category: 'therapy',
      icon: '💪',
      color: 'from-green-500 to-green-600',
      features: ['Assessment', 'Therapy Session', 'Exercise Plan'],
      rating: 4.7
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'preventive', name: 'Preventive Care', count: services.filter(s => s.category === 'preventive').length },
    { id: 'dental', name: 'Dental', count: services.filter(s => s.category === 'dental').length },
    { id: 'vision', name: 'Vision Care', count: services.filter(s => s.category === 'vision').length },
    { id: 'dermatology', name: 'Dermatology', count: services.filter(s => s.category === 'dermatology').length },
    { id: 'cardiology', name: 'Cardiology', count: services.filter(s => s.category === 'cardiology').length },
    { id: 'pediatrics', name: 'Pediatrics', count: services.filter(s => s.category === 'pediatrics').length },
  ]

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom section-padding">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-600 mb-4"
          >
            <Shield className="w-4 h-4 mr-2" />
            Comprehensive Healthcare Services
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our <span className="bg-gradient-to-r from-primary-600 to-accent-teal bg-clip-text text-transparent">Medical Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Choose from our wide range of specialized medical services designed to meet your healthcare needs with the highest standards of care.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Users, value: '10,000+', label: 'Happy Patients' },
            { icon: Shield, value: '50+', label: 'Specialist Doctors' },
            { icon: Clock, value: '15 min', label: 'Avg. Wait Time' },
            { icon: TrendingUp, value: '98%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <div key={index} className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-gray-200'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card group relative overflow-hidden"
            >
              {service.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent-teal text-white text-xs font-bold rounded-full z-10">
                  Popular
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                <span className="text-3xl">{service.icon}</span>
              </div>
              
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>
                <div className="flex items-center text-yellow-600">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1 font-bold">{service.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-bold text-gray-900">{service.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Price</div>
                  <div className="font-bold text-gray-900">{service.price}</div>
                </div>
                <Link
                  to="/appointment"
                  className="btn-primary flex items-center space-x-2 text-sm py-2 px-4"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ServicesPage