import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Award } from 'lucide-react'

const DoctorsPreview = () => {
  const doctors = [
    { name: 'Dr. Sarah Johnson', specialty: 'General Physician', rating: 4.9, patients: 5200 },
    { name: 'Dr. Michael Chen', specialty: 'Dentist', rating: 4.8, patients: 3800 },
    { name: 'Dr. Emily Rodriguez', specialty: 'Ophthalmologist', rating: 4.9, patients: 6200 },
    { name: 'Dr. James Wilson', specialty: 'Cardiologist', rating: 4.7, patients: 7500 },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-600 rounded-full mb-4">
              <Award className="w-4 h-4 mr-2" />
              Board Certified
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-primary-600 to-accent-teal bg-clip-text text-transparent">Expert Doctors</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Our team of highly qualified medical professionals is dedicated to providing exceptional care.
            </p>
          </div>
          <Link
            to="/doctors"
            className="btn-secondary mt-4 md:mt-0 inline-flex items-center space-x-2"
          >
            <span>View All Doctors</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:border-primary-500 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">
                  {doctor.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{doctor.name}</h3>
              <p className="text-primary-600 text-center mb-4">{doctor.specialty}</p>
              
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center text-yellow-600">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1 font-bold">{doctor.rating}</span>
                </div>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-600 text-sm">{doctor.patients.toLocaleString()}+ patients</span>
              </div>

              <Link
                to="/appointment"
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DoctorsPreview