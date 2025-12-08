import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, Sparkles, Users, Shield, Zap, Heart, ArrowRight, Star, Award, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactType: 'general'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeInfo, setActiveInfo] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        contactType: 'general'
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Emergency Line',
      details: '(123) 456-7890',
      description: '24/7 emergency support for urgent medical needs',
      color: 'from-blue-500 to-cyan-500',
      features: ['Immediate Response', 'Medical Emergency', 'Urgent Care'],
      gradient: 'from-blue-500/10 via-blue-400/5 to-cyan-500/10'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: 'support@cliniccare.com',
      description: 'Response within 2 hours, comprehensive assistance',
      color: 'from-blue-600 to-indigo-600',
      features: ['Detailed Response', 'Attachment Support', 'Follow-up'],
      gradient: 'from-blue-600/10 via-blue-500/5 to-indigo-600/10'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      details: 'Available 24/7',
      description: 'Instant messaging with our medical team',
      color: 'from-cyan-500 to-blue-500',
      features: ['Instant Replies', 'File Sharing', 'Screenshot Support'],
      gradient: 'from-cyan-500/10 via-cyan-400/5 to-blue-500/10'
    },
    {
      icon: Users,
      title: 'Patient Portal',
      details: 'portal.cliniccare.com',
      description: 'Secure messaging and appointment management',
      color: 'from-blue-700 to-violet-600',
      features: ['Secure Messaging', 'Appointment History', 'Prescription Refills'],
      gradient: 'from-blue-700/10 via-blue-600/5 to-violet-600/10'
    }
  ]

  const contactTypes = [
    { value: 'general', label: 'General Inquiry', icon: MessageSquare },
    { value: 'appointment', label: 'Book Appointment', icon: Calendar },
    { value: 'billing', label: 'Billing & Insurance', icon: Shield },
    { value: 'feedback', label: 'Feedback & Suggestions', icon: Heart },
    { value: 'emergency', label: 'Medical Emergency', icon: Zap },
    { value: 'technical', label: 'Technical Support', icon: Award },
  ]

  const supportHours = [
    { day: 'Monday - Friday', time: '8:00 AM - 8:00 PM', emergency: true },
    { day: 'Saturday', time: '9:00 AM - 5:00 PM', emergency: true },
    { day: 'Sunday', time: '10:00 AM - 4:00 PM', emergency: true },
    { day: '24/7', time: 'Emergency Line', emergency: true, highlight: true },
  ]

  const locations = [
    {
      name: 'Main Medical Center',
      address: '123 Medical Street, Health City, HC 12345',
      phone: '(123) 456-7890',
      hours: 'Mon-Fri: 8AM-8PM, Sat: 9AM-5PM',
      specialties: ['General Medicine', 'Emergency Care', 'Specialty Clinics']
    },
    {
      name: 'Downtown Clinic',
      address: '456 Wellness Avenue, Downtown, DT 67890',
      phone: '(123) 456-7891',
      hours: 'Mon-Fri: 9AM-7PM, Sat: 9AM-3PM',
      specialties: ['Primary Care', 'Pediatrics', 'Women\'s Health']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tr from-blue-500/3 to-indigo-500/3 rounded-full blur-3xl" />
        
        {Array.from({ length: 20 }).map((_, i) => (
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
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-sm font-medium text-blue-700">24/7 Support Available</span>
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gray-900">Get in</span>{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Touch
              </span>
              <motion.div
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              />
            </span>
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
            Our dedicated support team is ready to assist you. Choose the most convenient way 
            to reach us for medical inquiries, appointments, or emergencies.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            const isActive = activeInfo === index
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveInfo(isActive ? null : index)}
                className={`relative cursor-pointer ${
                  isActive ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                }`}
              >
                <div className={`bg-gradient-to-br ${info.gradient} rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      {info.title.includes('Emergency') && (
                        <span className="px-2.5 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full">
                          24/7
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {info.description}
                    </p>
                    
                    <div className="text-blue-600 font-medium text-sm md:text-base mb-3">
                      {info.details}
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {info.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-xs font-medium rounded-lg"
                        >
                          {feature}
                        </span>
                      ))}
                      {info.features.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                          +{info.features.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 hover:opacity-5 rounded-xl md:rounded-2xl transition-opacity`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
              <div className="p-5 md:p-6 lg:p-8">
                {/* Success Message */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 text-lg mb-2">Message Sent Successfully!</h3>
                            <p className="text-gray-600 mb-4">
                              We've received your message and our team will get back to you within 24 hours. 
                              For urgent matters, please call our emergency line.
                            </p>
                            <button
                              onClick={() => setIsSubmitted(false)}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:shadow-md transition-all"
                            >
                              <Send className="w-4 h-4" />
                              <span>Send Another Message</span>
                            </button>
                          </div>
                          <button
                            onClick={() => setIsSubmitted(false)}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                          >
                            <X className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">Send Us a Message</h2>
                    <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      How can we help you? *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {contactTypes.map((type, index) => {
                        const Icon = type.icon
                        const isSelected = formData.contactType === type.value
                        
                        return (
                          <motion.button
                            key={type.value}
                            type="button"
                            onClick={() => handleChange({ target: { name: 'contactType', value: type.value } })}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${
                              isSelected
                                ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 shadow-sm'
                                : 'bg-white border-gray-200 hover:border-blue-200'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              isSelected
                                ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                                : 'bg-gray-100'
                            }`}>
                              <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-gray-500'}`} />
                            </div>
                            <span className={`text-xs font-medium ${
                              isSelected ? 'text-blue-700' : 'text-gray-700'
                            }`}>
                              {type.label}
                            </span>
                          </motion.button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                          <Users className="w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                          <Mail className="w-5 h-5" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                          <Phone className="w-5 h-5" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                          placeholder="(123) 456-7890"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all resize-none"
                      placeholder="Please provide details about your inquiry, including any specific concerns or questions you may have..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-gray-100">
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-500" />
                        <span>Your information is secure and encrypted</span>
                      </div>
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-xl hover:shadow-lg transition-all"
                    >
                      <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Operating Hours */}
            <div className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-lg p-5 md:p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Operating Hours</h3>
                  <p className="text-gray-600 text-sm">When you can reach us</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {supportHours.map((hour, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-xl ${
                      hour.highlight
                        ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200'
                        : 'bg-gray-50'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-gray-900">{hour.day}</div>
                      <div className="text-sm text-gray-600">{hour.time}</div>
                    </div>
                    {hour.emergency && (
                      <div className="flex items-center gap-1">
                        <Zap className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-medium text-blue-600">Emergency</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-lg p-5 md:p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Our Locations</h3>
                  <p className="text-gray-600 text-sm">Find us near you</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-xl border border-blue-100">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-gray-900">{location.name}</h4>
                      <span className="px-2.5 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full">
                        {index === 0 ? 'Main' : 'Branch'}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{location.address}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{location.phone}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{location.hours}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {location.specialties.slice(0, 2).map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-white text-blue-700 text-xs font-medium rounded-lg"
                          >
                            {specialty}
                          </span>
                        ))}
                        {location.specialties.length > 2 && (
                          <span className="px-2 py-1 bg-white text-gray-600 text-xs font-medium rounded-lg">
                            +{location.specialties.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Appointment CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl md:rounded-2xl p-5 md:p-6 text-white shadow-lg overflow-hidden relative">
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 3 }).map((_, i) => (
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
                    className={`absolute w-12 h-12 border-2 border-white/20 rounded-full ${
                      i === 0 ? 'top-4 left-4' :
                      i === 1 ? 'bottom-4 right-4' :
                      'top-1/2 left-1/2'
                    }`}
                  />
                ))}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
                    <p className="text-blue-100">
                      Our medical team is available 24/7 for emergency consultations and appointments.
                    </p>
                  </div>
                </div>
                
                <Link
                  to="/appointment"
                  className="group w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Emergency Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-lg p-5 md:p-6">
              <h3 className="font-bold text-gray-900 mb-4">Why Contact Us</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">HIPAA Secure</div>
                    <div className="text-sm text-gray-600">100% encrypted communication</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Expert Support</div>
                    <div className="text-sm text-gray-600">Medical professionals available</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Fast Response</div>
                    <div className="text-sm text-gray-600">Typically within 2 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage