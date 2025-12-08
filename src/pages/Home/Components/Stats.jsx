import React from 'react'
import { motion } from 'framer-motion'
import { Users, Shield, Clock, TrendingUp, Heart, Stethoscope, Brain, Activity } from 'lucide-react'

const Stats = () => {
  const stats = [
    { 
      icon: Users, 
      value: '10,000+', 
      label: 'Happy Patients', 
      gradient: 'from-blue-400 to-cyan-400',
      iconBg: 'bg-blue-100',
      description: 'Successfully treated',
      shape: 'circle',
      animationDelay: 0.1
    },
    { 
      icon: Shield, 
      value: '50+', 
      label: 'Specialist Doctors', 
      gradient: 'from-blue-500 to-indigo-500',
      iconBg: 'bg-indigo-100',
      description: 'Expert medical professionals',
      shape: 'hexagon',
      animationDelay: 0.2
    },
    { 
      icon: Clock, 
      value: '15 min', 
      label: 'Avg. Wait Time', 
      gradient: 'from-cyan-500 to-blue-500',
      iconBg: 'bg-cyan-100',
      description: 'Fast appointments',
      shape: 'triangle',
      animationDelay: 0.3
    },
    { 
      icon: TrendingUp, 
      value: '98%', 
      label: 'Satisfaction Rate', 
      gradient: 'from-blue-600 to-violet-500',
      iconBg: 'bg-violet-100',
      description: 'Patient satisfaction',
      shape: 'square',
      animationDelay: 0.4
    },
  ]

  // Additional floating icons for background
  const floatingIcons = [Heart, Stethoscope, Brain, Activity]

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50/50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating medical icons */}
        {floatingIcons.map((Icon, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, 30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + index * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute text-blue-200/30 ${index === 0 ? 'top-10 left-1/4 w-16 h-16' : 
                       index === 1 ? 'top-1/3 right-10 w-20 h-20' :
                       index === 2 ? 'bottom-20 left-10 w-14 h-14' :
                       'bottom-1/4 right-1/3 w-18 h-18'}`}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        ))}
        
        {/* Blue gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* Pulse wave effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"
      />

      <div className="relative container-custom px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Heart className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Healthcare Excellence</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gray-900">Numbers That</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Speak For Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to exceptional healthcare is reflected in every milestone we achieve
          </p>
        </motion.div>

        {/* Creative Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: stat.animationDelay, duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                {/* Animated border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300`} />
                
                <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 overflow-hidden">
                  {/* Background shape based on stat type */}
                  <div className={`absolute top-0 right-0 w-24 h-24 opacity-5 ${
                    stat.shape === 'circle' ? 'rounded-full bg-gradient-to-br from-blue-400 to-cyan-400' :
                    stat.shape === 'hexagon' ? 'clip-hexagon bg-gradient-to-br from-blue-500 to-indigo-500' :
                    stat.shape === 'triangle' ? 'clip-triangle bg-gradient-to-br from-cyan-500 to-blue-500' :
                    'bg-gradient-to-br from-blue-600 to-violet-500'
                  }`} />
                  
                  {/* Icon with floating animation */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className={`relative w-16 h-16 ${stat.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                    <Icon className="w-8 h-8 text-blue-600 relative z-10" />
                    
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300 blur-md" />
                  </motion.div>

                  {/* Value with gradient */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-4xl md:text-5xl font-bold mb-2"
                  >
                    <span className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.value}
                    </span>
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6">{stat.description}</p>

                  {/* Animated progress bar */}
                  <div className="relative h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                      className={`absolute h-full rounded-full bg-gradient-to-r ${stat.gradient}`}
                    />
                  </div>

                  {/* Pulse effect on hover */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.2, opacity: 0.3 }}
                    className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-r ${stat.gradient} blur-xl`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Interactive Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-24 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl p-6 md:p-8 border border-blue-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <span className="text-blue-600">96% Faster</span> Recovery Times
              </h3>
              <p className="text-gray-600">
                Our advanced treatment protocols and personalized care plans have significantly improved patient recovery rates compared to industry standards.
              </p>
            </div>
            
            {/* Animated comparison bars */}
            <div className="md:w-1/2 space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Industry Average</span>
                  <span>72%</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "72%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-full bg-gradient-to-r from-gray-400 to-gray-500 rounded-full"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Our Clinic</span>
                  <span className="font-semibold text-blue-600">96%</span>
                </div>
                <div className="h-4 bg-blue-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "96%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full relative"
                  >
                    {/* Glowing effect on our clinic bar */}
                    <motion.div
                      animate={{ x: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-y-0 w-4 bg-white/30 blur-sm"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Mini Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "24/7", label: "Emergency Support", color: "text-blue-600" },
            { value: "99.8%", label: "Accuracy Rate", color: "text-green-600" },
            { value: "200+", label: "Medical Equipment", color: "text-indigo-600" },
            { value: "5★", label: "Patient Reviews", color: "text-amber-500" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`text-xl font-bold ${item.color}`}>{item.value}</div>
              <div className="text-sm text-gray-600 mt-1">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Add CSS for custom shapes */}
      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </section>
  )
}

export default Stats