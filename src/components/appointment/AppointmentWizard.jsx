
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, User, Stethoscope, CheckCircle, ChevronRight, ChevronLeft, Zap, Star, TrendingUp } from 'lucide-react'

const AppointmentWizard = ({ currentStep, setCurrentStep }) => {
  const [appointmentData, setAppointmentData] = useState({
    service: null,
    doctor: null,
    date: null,
    time: null,
    patientInfo: {
      name: '',
      email: '',
      phone: '',
      reason: ''
    }
  })

  const services = [
    { id: 1, name: 'General Checkup', duration: 30, icon: '🩺', color: 'bg-blue-100 text-blue-600' },
    { id: 2, name: 'Dental Care', duration: 45, icon: '🦷', color: 'bg-teal-100 text-teal-600' },
    { id: 3, name: 'Eye Examination', duration: 60, icon: '👁️', color: 'bg-purple-100 text-purple-600' },
    { id: 4, name: 'Skin Care', duration: 45, icon: '🌟', color: 'bg-pink-100 text-pink-600' },
    { id: 5, name: 'Cardiology', duration: 60, icon: '❤️', color: 'bg-red-100 text-red-600' },
    { id: 6, name: 'Pediatrics', duration: 30, icon: '👶', color: 'bg-yellow-100 text-yellow-600' },
  ]

  const doctors = [
    { id: 1, name: 'Dr. Sarah Johnson', specialty: 'General Physician', rating: 4.9, available: true, nextAvailable: 'Today 2 PM' },
    { id: 2, name: 'Dr. Michael Chen', specialty: 'Dentist', rating: 4.8, available: true, nextAvailable: 'Tomorrow 10 AM' },
    { id: 3, name: 'Dr. Emily Rodriguez', specialty: 'Ophthalmologist', rating: 4.9, available: false, nextAvailable: 'Friday 3 PM' },
    { id: 4, name: 'Dr. James Wilson', specialty: 'Cardiologist', rating: 4.7, available: true, nextAvailable: 'Today 4 PM' },
  ]

  const generateTimeSlots = () => {
    const slots = []
    const startHour = 9
    const endHour = 17
    
    // Smart time slot generation algorithm
    const currentHour = new Date().getHours()
    const isMorning = currentHour < 12
    
    for (let hour = startHour; hour < endHour; hour++) {
      // Generate more slots during preferred times
      const preferredTimes = isMorning ? [9, 10, 11] : [14, 15, 16]
      const isPreferred = preferredTimes.includes(hour)
      
      // Generate slots with intelligent spacing
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        const isBooked = Math.random() > 0.7 // Simulate booked slots
        const isPeak = (hour >= 11 && hour <= 13) || (hour >= 16 && hour <= 18)
        
        slots.push({
          time,
          available: !isBooked,
          isPeak,
          isPreferred,
          smartScore: calculateSmartScore(hour, minute, isBooked, isPeak, isPreferred)
        })
      }
    }
    
    // Sort by smart score (highest first)
    return slots.sort((a, b) => b.smartScore - a.smartScore)
  }

  const calculateSmartScore = (hour, minute, isBooked, isPeak, isPreferred) => {
    let score = 100
    
    // Penalize booked slots
    if (isBooked) score -= 100
    
    // Reward preferred times
    if (isPreferred) score += 30
    
    // Penalize peak hours
    if (isPeak) score -= 20
    
    // Reward times that are multiples of 15 minutes
    if (minute % 15 === 0) score += 10
    
    // Reward morning appointments (less wait time)
    if (hour < 12) score += 15
    
    return score
  }

  const getRecommendedSlots = () => {
    const allSlots = generateTimeSlots()
    const availableSlots = allSlots.filter(slot => slot.available)
    
    // Group by smart score tiers
    const recommended = availableSlots.slice(0, 3) // Top 3 slots
    const alternative = availableSlots.slice(3, 6) // Next 3 slots
    
    return { recommended, alternative }
  }

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Smart Service Matching
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your Service</h2>
              <p className="text-gray-600">Choose the service you need. We'll match you with the best specialist.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map(service => (
                <motion.button
                  key={service.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setAppointmentData({ ...appointmentData, service })
                    handleNext()
                  }}
                  className={`card text-left hover:border-primary-500 transition-all duration-300 ${
                    appointmentData.service?.id === service.id ? 'border-2 border-primary-500 bg-primary-50' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.color} mb-4`}>
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 text-sm">{service.duration} min consultation</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Doctor</h2>
              <p className="text-gray-600">Select from our expert medical professionals.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doctors.map(doctor => (
                <motion.button
                  key={doctor.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setAppointmentData({ ...appointmentData, doctor })
                    handleNext()
                  }}
                  className={`card text-left hover:border-primary-500 transition-all duration-300 ${
                    appointmentData.doctor?.id === doctor.id ? 'border-2 border-primary-500 bg-primary-50' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl font-bold">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">{doctor.name}</h3>
                          <p className="text-gray-600">{doctor.specialty}</p>
                        </div>
                        <div className="flex items-center bg-yellow-50 text-yellow-700 px-2 py-1 rounded">
                          <Star className="w-4 h-4 mr-1 fill-current" />
                          <span className="font-bold">{doctor.rating}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                          doctor.available 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          <div className={`w-2 h-2 rounded-full mr-2 ${doctor.available ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                          {doctor.available ? 'Available Now' : 'Limited Availability'}
                        </div>
                        <div className="text-sm text-gray-500">
                          Next: {doctor.nextAvailable}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )

      case 3:
        const today = new Date()
        const dates = Array.from({ length: 14 }, (_, i) => {
          const date = new Date()
          date.setDate(today.getDate() + i)
          return {
            date,
            day: date.toLocaleDateString('en-US', { weekday: 'short' }),
            dateNum: date.getDate(),
            month: date.toLocaleDateString('en-US', { month: 'short' }),
            isToday: i === 0,
            isTomorrow: i === 1,
            slots: Math.floor(Math.random() * 6) + 1 // Random available slots
          }
        })

        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-600 mb-4">
                <TrendingUp className="w-4 h-4 mr-2" />
                Smart Date Suggestions
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Pick a Date</h2>
              <p className="text-gray-600">We recommend dates with more availability for faster booking.</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3">
              {dates.map((day, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setAppointmentData({ ...appointmentData, date: day.date })
                    handleNext()
                  }}
                  className={`card p-4 text-center hover:border-primary-500 transition-all duration-300 ${
                    appointmentData.date?.getDate() === day.date.getDate() 
                      ? 'border-2 border-primary-500 bg-primary-50' 
                      : ''
                  } ${day.isToday ? 'ring-2 ring-accent-teal' : ''}`}
                >
                  <div className="text-sm text-gray-500 mb-1">{day.day}</div>
                  <div className={`text-2xl font-bold mb-1 ${
                    day.isToday ? 'text-accent-teal' : 'text-gray-900'
                  }`}>
                    {day.dateNum}
                  </div>
                  <div className="text-xs text-gray-500 mb-2">{day.month}</div>
                  {day.isToday && (
                    <div className="text-xs bg-accent-teal text-white px-2 py-1 rounded-full">
                      Today
                    </div>
                  )}
                  {day.isTomorrow && (
                    <div className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      Tomorrow
                    </div>
                  )}
                  <div className="mt-2 text-xs text-gray-600">
                    {day.slots} slots
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )

      case 4:
        const { recommended, alternative } = getRecommendedSlots()

        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Time Slot</h2>
              <p className="text-gray-600">Smart recommendations based on availability and wait times.</p>
            </div>

            {/* Recommended Slots */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <h3 className="font-bold text-lg text-gray-900">Recommended for You</h3>
                <div className="ml-2 px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">
                  Lowest Wait Time
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {recommended.map((slot, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setAppointmentData({ ...appointmentData, time: slot.time })
                      handleNext()
                    }}
                    className={`card text-center hover:border-green-500 transition-all duration-300 ${
                      appointmentData.time === slot.time 
                        ? 'border-2 border-green-500 bg-green-50' 
                        : ''
                    }`}
                  >
                    <div className="text-lg font-bold text-gray-900 mb-1">{slot.time}</div>
                    <div className="text-sm text-gray-600">Available</div>
                    <div className="mt-2 text-xs text-green-600">
                      <Zap className="w-3 h-3 inline mr-1" />
                      Smart Pick
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Alternative Slots */}
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">Alternative Times</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {alternative.map((slot, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setAppointmentData({ ...appointmentData, time: slot.time })
                      handleNext()
                    }}
                    className={`card text-center hover:border-primary-500 transition-all duration-300 ${
                      appointmentData.time === slot.time 
                        ? 'border-2 border-primary-500 bg-primary-50' 
                        : ''
                    }`}
                  >
                    <div className="text-lg font-bold text-gray-900 mb-1">{slot.time}</div>
                    <div className="text-sm text-gray-600">Available</div>
                    {slot.isPeak && (
                      <div className="mt-2 text-xs text-yellow-600">
                        <Clock className="w-3 h-3 inline mr-1" />
                        Peak Hour
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Confirm Your Appointment</h2>
              <p className="text-gray-600">Review your appointment details before confirming.</p>
            </div>

            {/* Appointment Summary */}
            <div className="card space-y-6">
              <div className="flex items-center justify-between pb-4 border-b">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${appointmentData.service?.color || 'bg-gray-100'}`}>
                    <span className="text-2xl">{appointmentData.service?.icon || '🩺'}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{appointmentData.service?.name || 'General Checkup'}</h3>
                    <p className="text-sm text-gray-600">{appointmentData.service?.duration || 30} minutes</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span className="text-sm">Doctor</span>
                  </div>
                  <p className="font-medium text-gray-900">{appointmentData.doctor?.name || 'Dr. Sarah Johnson'}</p>
                  <p className="text-sm text-gray-600">{appointmentData.doctor?.specialty || 'General Physician'}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">Date & Time</span>
                  </div>
                  <p className="font-medium text-gray-900">
                    {appointmentData.date ? appointmentData.date.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    }) : 'Tomorrow'}
                  </p>
                  <p className="text-sm text-gray-600">{appointmentData.time || '10:00 AM'}</p>
                </div>
              </div>

              {/* Patient Info Form */}
              <div className="pt-6 border-t">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Patient Information</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      className="input-field"
                      placeholder="John Doe"
                      value={appointmentData.patientInfo.name}
                      onChange={(e) => setAppointmentData({
                        ...appointmentData,
                        patientInfo: { ...appointmentData.patientInfo, name: e.target.value }
                      })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="input-field"
                      placeholder="john@example.com"
                      value={appointmentData.patientInfo.email}
                      onChange={(e) => setAppointmentData({
                        ...appointmentData,
                        patientInfo: { ...appointmentData.patientInfo, email: e.target.value }
                      })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      className="input-field"
                      placeholder="(123) 456-7890"
                      value={appointmentData.patientInfo.phone}
                      onChange={(e) => setAppointmentData({
                        ...appointmentData,
                        patientInfo: { ...appointmentData.patientInfo, phone: e.target.value }
                      })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit</label>
                    <input 
                      type="text" 
                      className="input-field"
                      placeholder="Brief description"
                      value={appointmentData.patientInfo.reason}
                      onChange={(e) => setAppointmentData({
                        ...appointmentData,
                        patientInfo: { ...appointmentData.patientInfo, reason: e.target.value }
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Confirmation Button */}
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  alert('Appointment booked successfully! A confirmation email has been sent.')
                  // Reset and go to step 1
                  setCurrentStep(1)
                  setAppointmentData({
                    service: null,
                    doctor: null,
                    date: null,
                    time: null,
                    patientInfo: { name: '', email: '', phone: '', reason: '' }
                  })
                }}
                className="btn-primary flex items-center space-x-2"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Confirm Appointment</span>
              </motion.button>
            </div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <AnimatePresence mode="wait">
        {renderStep()}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8 pt-6 border-t">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            currentStep === 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`step-indicator ${currentStep >= step ? 'active' : ''} ${
                currentStep === step ? 'active' : ''
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentStep === 5}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            currentStep === 5 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
          }`}
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default AppointmentWizard