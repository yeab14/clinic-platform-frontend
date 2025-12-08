import React, { useState } from 'react'
import AppointmentWizard from '../../components/appointment/AppointmentWizard'
import { Calendar, Clock, User, Stethoscope, CheckCircle, Shield, Zap, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const AppointmentPage = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    { id: 1, name: 'Select Service', icon: Stethoscope },
    { id: 2, name: 'Choose Doctor', icon: User },
    { id: 3, name: 'Pick Date', icon: Calendar },
    { id: 4, name: 'Select Time', icon: Clock },
    { id: 5, name: 'Confirm', icon: CheckCircle },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50/30 to-white">
      <div className="container-custom section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-600 mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Smart Appointment System
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your <span className="bg-gradient-to-r from-primary-600 to-accent-teal bg-clip-text text-transparent">Appointment</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our intelligent booking system that helps you find the perfect time
            with the right specialist for your needs.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="flex justify-between relative">
            <div className="absolute top-4 left-0 right-0 h-1.5 bg-gray-200 -z-10 rounded-full"></div>
            <div 
              className="absolute top-4 left-0 h-1.5 bg-gradient-to-r from-primary-500 to-accent-teal -z-10 transition-all duration-500 rounded-full"
              style={{ width: `${(currentStep - 1) * 25}%` }}
            ></div>
            
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.id} className="flex flex-col items-center relative">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center mb-2
                    ${currentStep >= step.id 
                      ? 'bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg' 
                      : 'bg-white text-gray-400 shadow-md'
                    }
                    ${currentStep === step.id ? 'ring-4 ring-primary-200 scale-110' : ''}
                    transition-all duration-300 z-10
                  `}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`
                    text-sm font-medium
                    ${currentStep >= step.id ? 'text-primary-600' : 'text-gray-500'}
                  `}>
                    {step.name}
                  </span>
                  <div className={`
                    absolute top-6 -left-1/2 -right-1/2 h-0.5
                    ${currentStep > step.id ? 'bg-primary-500' : 'bg-transparent'}
                  `}></div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Appointment Wizard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <AppointmentWizard 
            currentStep={currentStep} 
            setCurrentStep={setCurrentStep} 
          />
        </motion.div>

        {/* Stats & Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="card text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">24/7</div>
            <p className="text-gray-600">Online Booking Available</p>
            <p className="text-sm text-gray-500 mt-2">Book anytime, anywhere</p>
          </div>
          
          <div className="card text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">15 Min</div>
            <p className="text-gray-600">Average Response Time</p>
            <p className="text-sm text-gray-500 mt-2">Quick confirmation</p>
          </div>
          
          <div className="card text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">98%</div>
            <p className="text-gray-600">Patient Satisfaction</p>
            <p className="text-sm text-gray-500 mt-2">Highly recommended</p>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'How do I reschedule an appointment?',
                a: 'You can reschedule up to 24 hours before your appointment through your dashboard or by calling our office.'
              },
              {
                q: 'What if I need to cancel?',
                a: 'Cancellations made 24 hours in advance are free. Late cancellations may incur a fee.'
              },
              {
                q: 'Do you accept insurance?',
                a: 'Yes, we accept most major insurance plans. Please verify with our billing department.'
              },
              {
                q: 'Can I book for family members?',
                a: 'Yes, you can book appointments for family members through your patient portal.'
              },
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AppointmentPage