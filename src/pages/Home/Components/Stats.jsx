import React from 'react'
import { motion } from 'framer-motion'
import { Users, Shield, Clock, TrendingUp } from 'lucide-react'

const Stats = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Patients', color: 'bg-blue-500' },
    { icon: Shield, value: '50+', label: 'Specialist Doctors', color: 'bg-green-500' },
    { icon: Clock, value: '15 min', label: 'Avg. Wait Time', color: 'bg-purple-500' },
    { icon: TrendingUp, value: '98%', label: 'Satisfaction Rate', color: 'bg-pink-500' },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats