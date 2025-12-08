import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Star, Award, Calendar, MessageSquare, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const DoctorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')
  const [selectedAvailability, setSelectedAvailability] = useState('all')

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'General Physician',
      experience: '12 years',
      rating: 4.9,
      patients: 5200,
      available: true,
      nextAvailable: 'Today 2 PM',
      consultationFee: '$120',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      education: 'MD, Harvard Medical School',
      languages: ['English', 'Spanish'],
      features: ['Telemedicine', 'Same-day Appointments']
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Dentist',
      experience: '8 years',
      rating: 4.8,
      patients: 3800,
      available: true,
      nextAvailable: 'Tomorrow 10 AM',
      consultationFee: '$150',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      education: 'DDS, UCLA School of Dentistry',
      languages: ['English', 'Mandarin'],
      features: ['Emergency Care', 'Pediatric Dentistry']
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Ophthalmologist',
      experience: '15 years',
      rating: 4.9,
      patients: 6200,
      available: false,
      nextAvailable: 'Friday 3 PM',
      consultationFee: '$180',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      education: 'MD, Johns Hopkins University',
      languages: ['English', 'Spanish', 'French'],
      features: ['Laser Surgery', 'Pediatric Ophthalmology']
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Cardiologist',
      experience: '18 years',
      rating: 4.7,
      patients: 7500,
      available: true,
      nextAvailable: 'Today 4 PM',
      consultationFee: '$250',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      education: 'MD, Stanford University',
      languages: ['English'],
      features: ['Non-invasive Procedures', 'Cardiac Rehab']
    },
    {
      id: 5,
      name: 'Dr. Lisa Wang',
      specialty: 'Dermatologist',
      experience: '10 years',
      rating: 4.8,
      patients: 4200,
      available: true,
      nextAvailable: 'Tomorrow 11 AM',
      consultationFee: '$160',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
      education: 'MD, Yale School of Medicine',
      languages: ['English', 'Mandarin', 'Cantonese'],
      features: ['Cosmetic Procedures', 'Skin Cancer Screening']
    },
    {
      id: 6,
      name: 'Dr. Robert Kim',
      specialty: 'Pediatrician',
      experience: '14 years',
      rating: 4.9,
      patients: 6800,
      available: true,
      nextAvailable: 'Today 3 PM',
      consultationFee: '$140',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
      education: 'MD, Boston Children\'s Hospital',
      languages: ['English', 'Korean'],
      features: ['Vaccinations', 'Developmental Screenings']
    },
  ]

  const specialties = [
    'all', 'General Physician', 'Dentist', 'Ophthalmologist', 
    'Cardiologist', 'Dermatologist', 'Pediatrician'
  ]

  const availabilityOptions = [
    { id: 'all', label: 'All Doctors' },
    { id: 'available', label: 'Available Today' },
    { id: 'telemedicine', label: 'Telemedicine' },
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50/30 to-white">
      <div className="container-custom section-padding">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-600 mb-4"
          >
            <Award className="w-4 h-4 mr-2" />
            Board Certified Specialists
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Meet Our <span className="bg-gradient-to-r from-primary-600 to-accent-teal bg-clip-text text-transparent">Expert Doctors</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Our team of highly qualified medical professionals is dedicated to providing you with exceptional healthcare.
          </motion.p>
        </div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card mb-8"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Specialty Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter className="w-4 h-4 inline mr-2" />
                Specialty
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>
                    {specialty === 'all' ? 'All Specialties' : specialty}
                  </option>
                ))}
              </select>
            </div>

            {/* Availability Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Availability
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
              >
                {availabilityOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card group relative overflow-hidden"
            >
              {/* Availability Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium z-10 ${
                doctor.available 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {doctor.available ? 'Available Today' : 'Limited Availability'}
              </div>

              {/* Doctor Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500 to-primary-700 p-1">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full rounded-2xl bg-white"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-primary-600 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">{doctor.specialty}</p>
                  <div className="flex items-center">
                    <div className="flex items-center text-yellow-600">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 font-bold">{doctor.rating}</span>
                      <span className="ml-1 text-gray-600">({doctor.patients.toLocaleString()})</span>
                    </div>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-gray-600">{doctor.experience} experience</span>
                  </div>
                </div>
              </div>

              {/* Education & Languages */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Education</div>
                  <div className="text-gray-900">{doctor.education}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Languages</div>
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map(lang => (
                      <span key={lang} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">Special Features</div>
                <div className="flex flex-wrap gap-2">
                  {doctor.features.map(feature => (
                    <span key={feature} className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Next Available</div>
                  <div className="font-bold text-gray-900">{doctor.nextAvailable}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Consultation Fee</div>
                  <div className="font-bold text-gray-900">{doctor.consultationFee}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Link
                  to="/appointment"
                  className="btn-primary flex-1 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </Link>
                <button className="btn-secondary flex items-center justify-center px-4">
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDoctors.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No doctors found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">{doctors.length}</div>
            <div className="text-gray-600">Specialist Doctors</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Telemedicine Support</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">99%</div>
            <div className="text-gray-600">Patient Satisfaction</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">15 min</div>
            <div className="text-gray-600">Average Response Time</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DoctorsPage