import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    appointmentType: 'general'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

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
        appointmentType: 'general'
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
      title: 'Emergency',
      details: '(123) 456-7890',
      description: '24/7 Emergency Line',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@cliniccare.com',
      description: 'Response within 2 hours',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: '123 Medical Street',
      description: 'Health City, HC 12345',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon - Sat: 8AM - 8PM',
      description: 'Sunday: 9AM - 4PM',
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  const appointmentTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'appointment', label: 'Book Appointment' },
    { value: 'billing', label: 'Billing Inquiry' },
    { value: 'feedback', label: 'Feedback/Suggestion' },
    { value: 'emergency', label: 'Emergency Contact' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom section-padding">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Get in <span className="bg-gradient-to-r from-primary-600 to-accent-teal bg-clip-text text-transparent">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Have questions or need to schedule an appointment? We're here to help. Contact us through any of the following methods.
          </motion.p>
        </div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {contactInfo.map((info, index) => (
            <div key={index} className="card text-center hover:shadow-lg transition-shadow">
              <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <info.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-1">{info.title}</h3>
              <p className="text-gray-900 font-medium mb-2">{info.details}</p>
              <p className="text-sm text-gray-600">{info.description}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="card relative"
          >
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center z-10"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-center mb-6">
                  We've received your message and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="input-field"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="input-field"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="input-field"
                    placeholder="(123) 456-7890"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    name="appointmentType"
                    required
                    className="input-field"
                    value={formData.appointmentType}
                    onChange={handleChange}
                  >
                    {appointmentTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
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
                  className="input-field"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="input-field resize-none"
                  placeholder="Please provide details about your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="btn-primary flex items-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
                
                <a
                  href="/appointment"
                  className="btn-secondary flex items-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </a>
              </div>
            </form>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Map Placeholder */}
            <div className="card p-0 overflow-hidden">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 h-64 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">ClinicCare+ Medical Center</h3>
                  <p>123 Medical Street, Health City</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Our Location</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Main Campus</p>
                      <p className="text-gray-600">123 Medical Street, Health City, HC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Contact Number</p>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Appointment */}
            <div className="card bg-gradient-to-br from-primary-600 to-primary-800 text-white">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
                  <p className="text-primary-100 mb-4">
                    Our team is available 24/7 for emergency consultations and appointments.
                  </p>
                  <a
                    href="/appointment"
                    className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Emergency Appointment</span>
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="card">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  { q: 'What are your working hours?', a: 'Mon-Sat: 8AM-8PM, Sun: 9AM-4PM' },
                  { q: 'Do you accept insurance?', a: 'Yes, we accept most major insurance plans' },
                  { q: 'Can I book same-day appointments?', a: 'Yes, subject to availability' }
                ].map((faq, index) => (
                  <div key={index} className="pb-4 border-b last:border-0">
                    <p className="font-medium text-gray-900 mb-1">{faq.q}</p>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
                <a href="/faq" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  View all FAQs
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage