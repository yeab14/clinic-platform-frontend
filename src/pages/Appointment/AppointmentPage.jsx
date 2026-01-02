import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Award, Bell, Calendar, CheckCircle, Clock, Clock as ClockIcon, Heart, Shield, ShieldCheck, Sparkles, Star, Stethoscope, TrendingUp, User, Users, Zap } from 'lucide-react'
import { useState } from 'react'
import AppointmentWizard from '../../components/appointment/AppointmentWizard'

const AppointmentPage = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    { id: 1, name: 'Select Service', icon: Stethoscope, description: 'Choose your medical service' },
    { id: 2, name: 'Choose Doctor', icon: User, description: 'Pick your specialist' },
    { id: 3, name: 'Pick Date', icon: Calendar, description: 'Select appointment date' },
    { id: 4, name: 'Select Time', icon: Clock, description: 'Choose time slot' },
    { id: 5, name: 'Confirm', icon: CheckCircle, description: 'Review and book' },
  ]

  const stats = [
    { icon: Shield, value: '24/7', label: 'Online Booking', sublabel: 'Always Available', color: 'from-blue-500 to-cyan-500' },
    { icon: ClockIcon, value: '15 min', label: 'Avg. Response', sublabel: 'Quick Confirmation', color: 'from-blue-600 to-indigo-600' },
    { icon: Users, value: '98%', label: 'Satisfaction', sublabel: 'Highly Recommended', color: 'from-cyan-500 to-blue-500' },
    { icon: TrendingUp, value: '50+', label: 'Specialists', sublabel: 'Expert Doctors', color: 'from-blue-500 to-indigo-500' },
  ]

  const features = [
    { icon: ShieldCheck, title: 'HIPAA Secure', description: '100% encrypted and compliant' },
    { icon: Bell, title: 'Smart Reminders', description: 'Automated notifications and alerts' },
    { icon: Zap, title: 'Instant Booking', description: 'Real-time availability' },
    { icon: Award, title: 'Quality Guarantee', description: 'Verified specialists only' },
  ]

  const faqs = [
    {
      q: 'How do I reschedule an appointment?',
      a: 'You can reschedule up to 24 hours before your appointment through your dashboard or by calling our office. Changes are instant and free of charge.',
      tags: ['Rescheduling', 'Flexibility']
    },
    {
      q: 'What if I need to cancel?',
      a: 'Cancellations made 24 hours in advance are free. Late cancellations may incur a fee. We understand emergencies happen and are flexible.',
      tags: ['Cancellation', 'Policy']
    },
    {
      q: 'Do you accept insurance?',
      a: 'Yes, we accept most major insurance plans. Our system automatically verifies coverage and provides cost estimates before booking.',
      tags: ['Insurance', 'Coverage']
    },
    {
      q: 'Can I book for family members?',
      a: 'Yes, you can book appointments for family members through your patient portal. Manage multiple profiles in one account.',
      tags: ['Family', 'Multiple Profiles']
    },
    {
      q: 'What happens if I\'m late?',
      a: 'We have a 15-minute grace period. If you\'re running late, notify us through the app. We\'ll do our best to accommodate.',
      tags: ['Late Arrival', 'Grace Period']
    },
    {
      q: 'Are telemedicine appointments available?',
      a: 'Yes, many of our doctors offer telemedicine. You can filter by "Telemedicine Available" when choosing a doctor.',
      tags: ['Telemedicine', 'Virtual']
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white">
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
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-sm font-medium text-blue-700">Intelligent Appointment System</span>
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gray-900">Book Your</span>{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Appointment
              </span>
              <motion.div
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              />
            </span>
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
            Experience our intelligent booking system that matches you with the perfect specialist 
            at the right time. Fast, secure, and effortless.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 md:mb-12"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-2 md:mb-3`}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-gray-900 mb-0.5">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-900 font-medium">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.sublabel}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Progress Steps - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-8 md:mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = currentStep === step.id
              const isCompleted = currentStep > step.id
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  {/* Step Circle */}
                  <div className="relative">
                    <motion.div
                      animate={{
                        scale: isActive ? [1, 1.1, 1] : 1,
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`
                        w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center relative z-10
                        ${isCompleted ? 'bg-gradient-to-br from-green-500 to-emerald-500' : 
                          isActive ? 'bg-gradient-to-br from-blue-600 to-cyan-500' : 
                          'bg-white border border-gray-200'}
                        ${isActive ? 'shadow-lg' : 'shadow-sm'}
                      `}
                    >
                      <Icon className={`w-5 h-5 md:w-6 md:h-6 ${
                        isCompleted || isActive ? 'text-white' : 'text-gray-400'
                      }`} />
                      
                      {/* Checkmark for completed */}
                      {isCompleted && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center"
                        >
                          <CheckCircle className="w-3 h-3 text-green-500" />
                        </motion.div>
                      )}
                    </motion.div>
                    
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-16 md:w-24 h-0.5 bg-gray-200 -translate-y-1/2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: isCompleted ? '100%' : currentStep > index + 1 ? '100%' : '0%' }}
                          transition={{ duration: 0.5 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Step Text */}
                  <div className="hidden md:block">
                    <div className={`font-bold ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                      Step {step.id}
                    </div>
                    <div className={`text-sm ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                      {step.name}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {step.description}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          {/* Mobile Step Indicator */}
          <div className="md:hidden mt-4">
            <div className="text-center">
              <div className="font-bold text-gray-900">
                Step {currentStep} of {steps.length}
              </div>
              <div className="text-sm text-blue-600">
                {steps.find(s => s.id === currentStep)?.name}
              </div>
              <div className="text-xs text-gray-500">
                {steps.find(s => s.id === currentStep)?.description}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Appointment Wizard */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
                <div className="p-6 md:p-8">
                  <AppointmentWizard 
                    currentStep={currentStep} 
                    setCurrentStep={setCurrentStep} 
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Features & Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {/* Features Card */}
              <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <span>Why Book With Us</span>
                </h3>
                
                <div className="space-y-4">
                  {features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-3 p-3 hover:bg-blue-50/50 rounded-xl transition-colors"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{feature.title}</div>
                          <div className="text-sm text-gray-600">{feature.description}</div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Quick Tips Card */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl md:rounded-3xl p-6 text-white">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span>Quick Tips</span>
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <div className="text-sm text-blue-100">
                      Have your insurance information ready
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <div className="text-sm text-blue-100">
                      Complete health questionnaire beforehand
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <div className="text-sm text-blue-100">
                      Arrive 10 minutes early for check-in
                    </div>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full py-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors text-sm font-medium"
                >
                  View Full Guide
                </motion.button>
              </div>

              {/* Support Card */}
              <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Need Help?</h3>
                    <p className="text-sm text-gray-600">Our team is here for you</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all"
                  >
                    <span className="font-medium text-blue-700">Chat with Support</span>
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all"
                  >
                    <span className="font-medium text-blue-700">Call+90 553 418 6776</span>
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all"
                  >
                    <span className="font-medium text-blue-700">FAQ Center</span>
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 md:mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about booking and managing appointments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <AnimatePresence>
              {faqs.slice(0, 6).map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="group bg-white rounded-xl md:rounded-2xl border border-gray-100 p-5 md:p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {faq.q}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {faq.a}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: 90 }}
                      className="w-6 h-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <ArrowRight className="w-3 h-3 text-blue-600" />
                    </motion.div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {faq.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-xs font-medium rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-8 text-center"
          >
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-xl hover:shadow-lg transition-all">
              <span>View All FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
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
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Book with Confidence</h3>
                  <p className="text-blue-100 text-sm md:text-base mb-4">
                    Your health and privacy are our top priorities
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-cyan-300" />
                      <span className="text-sm">HIPAA Compliant</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-4 h-4 text-cyan-300" />
                      <span className="text-sm">Patient-First</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-cyan-300" />
                      <span className="text-sm">Quality Guarantee</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors cursor-pointer"
                >
                  <Star className="w-5 h-5 text-yellow-300 fill-current" />
                  <div>
                    <div className="font-bold">4.9/5</div>
                    <div className="text-sm text-blue-100">Patient Rating</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AppointmentPage