import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Stethoscope, Tooth, Eye, Heart } from 'lucide-react'

const ServicesPreview = () => {
  const services = [
    { icon: Stethoscope, name: 'General Checkup', description: 'Comprehensive health assessment', color: 'bg-blue-100 text-blue-600' },
    { icon: Tooth, name: 'Dental Care', description: 'Complete dental solutions', color: 'bg-teal-100 text-teal-600' },
    { icon: Eye, name: 'Eye Care', description: 'Vision correction & eye health', color: 'bg-purple-100 text-purple-600' },
    { icon: Heart, name: 'Cardiology', description: 'Heart health & diagnostics', color: 'bg-red-100 text-red-600' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-primary-600 to-accent-teal bg-clip-text text-transparent">Medical Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Comprehensive healthcare services tailored to meet all your medical needs.
            </p>
          </div>
          <Link
            to="/services"
            className="btn-secondary mt-4 md:mt-0 inline-flex items-center space-x-2"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:border-primary-500 transition-all duration-300"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to="/appointment"
                  className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview