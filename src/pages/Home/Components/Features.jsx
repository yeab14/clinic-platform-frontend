import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, Clock, Users } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Smart Booking',
      description: 'AI-powered appointment scheduling for optimal timing',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Secure Portal',
      description: 'HIPAA-compliant patient records and communication',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Clock,
      title: '24/7 Access',
      description: 'Book appointments and access records anytime',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Expert Care',
      description: 'Board-certified specialists with extensive experience',
      color: 'from-pink-500 to-pink-600'
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-primary-600 to-accent-teal bg-clip-text text-transparent">ClinicCare+</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience healthcare designed around your needs and schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features