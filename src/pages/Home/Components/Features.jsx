import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Shield, Clock, Users, Activity, Heart, Stethoscope, ChevronRight, Sparkles, Target, Globe, ShieldCheck, Calendar, Smartphone, UserCheck, FileCheck } from 'lucide-react'

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  
  const features = [
    {
      icon: Calendar,
      title: 'Intelligent Booking',
      description: 'Our system analyzes wait times, doctor availability, and your preferences to find the perfect appointment time based on real-time data.',
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
      gradient: 'from-blue-500/10 via-blue-400/5 to-cyan-500/10',
      details: [
        'Real-time wait time optimization',
        'Automated follow-up scheduling',
        'Priority booking for urgent cases',
        'Smart calendar synchronization'
      ],
      stat: 'Reduces wait time by 68%'
    },
    {
      icon: ShieldCheck,
      title: 'Military-Grade Security',
      description: 'HIPAA-compliant, end-to-end encrypted patient portal with advanced medical records security protocols.',
      color: 'from-blue-600 to-indigo-600',
      iconBg: 'bg-gradient-to-br from-blue-600/20 to-indigo-600/20',
      gradient: 'from-blue-600/10 via-blue-500/5 to-indigo-600/10',
      details: [
        'Bank-level 256-bit encryption',
        'Complete audit trail system',
        'Biometric authentication',
        'Real-time access monitoring'
      ],
      stat: '100% HIPAA compliance'
    },
    {
      icon: Globe,
      title: '24/7 Global Access',
      description: 'Access your medical records, schedule appointments, and connect with doctors from anywhere in the world, anytime.',
      color: 'from-cyan-500 to-blue-500',
      iconBg: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20',
      gradient: 'from-cyan-500/10 via-cyan-400/5 to-blue-500/10',
      details: [
        'Multilingual support available',
        'Telemedicine across all timezones',
        'International prescription service',
        'Global specialist network'
      ],
      stat: 'Available in 50+ countries'
    },
    {
      icon: Users,
      title: 'Expert Care Network',
      description: 'Connect with board-certified specialists who collaborate using our integrated care coordination platform.',
      color: 'from-blue-700 to-violet-600',
      iconBg: 'bg-gradient-to-br from-blue-700/20 to-violet-600/20',
      gradient: 'from-blue-700/10 via-blue-600/5 to-violet-600/10',
      details: [
        'Multi-disciplinary medical teams',
        'Second opinion consultation network',
        'Continuous medical education programs',
        'Clinical research participation'
      ],
      stat: '200+ specialist doctors'
    },
  ]

  const floatingElements = [
    { icon: Activity, style: 'top-1/4 left-5 w-8 h-8 text-blue-400/20' },
    { icon: Heart, style: 'top-3/4 right-10 w-10 h-10 text-cyan-400/15' },
    { icon: Stethoscope, style: 'bottom-1/3 left-8 w-12 h-12 text-blue-500/10' },
    { icon: Target, style: 'top-10 right-1/4 w-6 h-6 text-indigo-400/20' }
  ]

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Elements */}
        {floatingElements.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={index}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 8 + index * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`absolute ${item.style}`}
            >
              <Icon className="w-full h-full" />
            </motion.div>
          )
        })}
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl" />
        
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="relative container-custom px-4">
        {/* Section Header with Interactive Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-sm font-medium text-blue-700">Advanced Healthcare Technology</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">Healthcare Powered by</span>{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Intelligent Technology
              </span>
              <motion.div
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              />
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Experience next-generation healthcare with our advanced platform that adapts to your needs, 
            protects your data, and connects you with top medical professionals worldwide.
          </p>
          
          {/* Interactive Feature Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${activeFeature === index 
                    ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 shadow-md' 
                    : 'bg-white border-gray-200 hover:border-blue-200'}`}
                >
                  <div className={`w-10 h-10 rounded-lg ${feature.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${activeFeature === index ? 'text-blue-600' : 'text-gray-500'}`} />
                  </div>
                  <span className={`font-medium ${activeFeature === index ? 'text-blue-700' : 'text-gray-700'}`}>
                    {feature.title}
                  </span>
                  {activeFeature === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Main Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Feature Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${features[activeFeature].gradient} rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl overflow-hidden`}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
                    backgroundSize: '30px 30px'
                  }} />
                </div>
                
                {/* Feature Header */}
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center shadow-lg`}
                  >
                    {React.createElement(features[activeFeature].icon, { className: "w-8 h-8 text-white" })}
                  </motion.div>
                  
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {features[activeFeature].title}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full">
                      <Sparkles className="w-3 h-3 text-blue-600" />
                      <span className="text-sm font-medium text-blue-700">
                        {features[activeFeature].stat}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Feature Description */}
                <p className="text-lg text-gray-700 mb-8 relative z-10 leading-relaxed">
                  {features[activeFeature].description}
                </p>
                
                {/* Feature Details List */}
                <div className="space-y-4 mb-8 relative z-10">
                  {features[activeFeature].details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{detail}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${features[activeFeature].color} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-white/50" />
                </motion.button>
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">2.5x</div>
                    <div className="text-sm text-gray-600">Faster than traditional</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Visualization Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
              
              {/* Interactive Visualization */}
              <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
                {/* Central Hub */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      '0 0 0px rgba(59, 130, 246, 0)',
                      '0 0 40px rgba(59, 130, 246, 0.3)',
                      '0 0 0px rgba(59, 130, 246, 0)'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
                >
                  <Heart className="w-16 h-16 text-white" />
                </motion.div>
                
                {/* Orbiting Elements */}
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  const angle = (index * 90) * (Math.PI / 180)
                  const radius = 140
                  const x = radius * Math.cos(angle)
                  const y = radius * Math.sin(angle)
                  
                  return (
                    <motion.div
                      key={index}
                      animate={{
                        x: [0, x, 0],
                        y: [0, y, 0],
                        rotate: [0, 360, 0]
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 2
                      }}
                      className={`absolute w-20 h-20 rounded-2xl ${activeFeature === index 
                        ? `bg-gradient-to-br ${feature.color} shadow-lg` 
                        : 'bg-white/90 backdrop-blur-sm'} flex items-center justify-center border border-gray-100 cursor-pointer`}
                      onClick={() => setActiveFeature(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      <Icon className={`w-8 h-8 ${activeFeature === index ? 'text-white' : 'text-blue-600'}`} />
                    </motion.div>
                  )
                })}
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {features.map((_, index) => {
                    const angle = (index * 90) * (Math.PI / 180)
                    const radius = 140
                    const x = radius * Math.cos(angle)
                    const y = radius * Math.sin(angle)
                    
                    return (
                      <motion.line
                        key={index}
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${x}px)`}
                        y2={`calc(50% + ${y}px)`}
                        stroke={activeFeature === index ? "#3b82f6" : "#dbeafe"}
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    )
                  })}
                </svg>
              </div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent p-6">
                <div className="text-white">
                  <div className="text-lg font-semibold mb-1">Interactive Platform</div>
                  <div className="text-sm opacity-90">Click on any feature to explore</div>
                </div>
              </div>
            </div>

            {/* Side Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { value: "99.9%", label: "Uptime", icon: Shield },
                { value: "0ms", label: "Encryption Delay", icon: Zap },
                { value: "150ms", label: "Response Time", icon: Clock },
                { value: "∞", label: "Scalability", icon: Activity },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Stethoscope, title: "Advanced Diagnostics", desc: "Advanced medical analysis tools", stat: "95% accuracy" },
            { icon: Shield, title: "Privacy First", desc: "Zero-knowledge architecture", stat: "100% secure" },
            { icon: Smartphone, title: "Mobile Access", desc: "Full platform on your phone", stat: "< 1s load time" },
            { icon: UserCheck, title: "Expert Teams", desc: "Collaborative treatment plans", stat: "50+ specialists" },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all" />
                
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full">
                    <span className="text-xs font-medium text-blue-700">{item.stat}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Features