import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Shield, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-accent-teal/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-600 font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Trusted by 10,000+ Patients
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Advanced Healthcare{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-teal bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Experience the future of healthcare with our intelligent appointment system, 
              world-class specialists, and cutting-edge medical technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/appointment"
                className="btn-primary inline-flex items-center justify-center group"
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Book Appointment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Clock, value: '24/7', label: 'Online Booking', color: 'bg-blue-500' },
              { icon: Shield, value: '98%', label: 'Satisfaction Rate', color: 'bg-green-500' },
              { value: '50+', label: 'Specialists', color: 'bg-purple-500' },
              { value: '15 min', label: 'Avg. Wait Time', color: 'bg-pink-500' },
            ].map((stat, index) => (
              <div
                key={index}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                  {stat.icon ? (
                    <stat.icon className="w-6 h-6 text-white" />
                  ) : (
                    <span className="text-white text-xl font-bold">{stat.value}</span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.icon ? stat.value : ''}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero