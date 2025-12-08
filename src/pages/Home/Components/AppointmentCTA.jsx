import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Phone, ArrowRight } from 'lucide-react'

const AppointmentCTA = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Take Control of Your Health?
                </h2>
                <p className="text-primary-100 text-lg mb-8">
                  Book your appointment today and experience healthcare that works around your schedule.
                  Our intelligent system finds you the best time with the right specialist.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/appointment"
                    className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-3 group"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Appointment Online</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <a
                    href="tel:+1234567890"
                    className="bg-white/10 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors flex items-center justify-center space-x-3"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now: (123) 456-7890</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-6 rounded-2xl">
                  <Clock className="w-8 h-8 mb-4" />
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-primary-200">Booking Available</div>
                </div>
                
                <div className="bg-white/10 p-6 rounded-2xl">
                  <Calendar className="w-8 h-8 mb-4" />
                  <div className="text-2xl font-bold">Same Day</div>
                  <div className="text-sm text-primary-200">Appointments</div>
                </div>
                
                <div className="bg-white/10 p-6 rounded-2xl">
                  <div className="text-2xl font-bold">No Wait</div>
                  <div className="text-sm text-primary-200">Virtual Queue</div>
                </div>
                
                <div className="bg-white/10 p-6 rounded-2xl">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-primary-200">Secure</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AppointmentCTA