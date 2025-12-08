import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Appointment', path: '/appointment' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-white font-bold text-2xl">C</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                ClinicCare+
              </h1>
              <p className="text-xs text-gray-500">Advanced Healthcare Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary-600 rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg">
              <Phone className="w-5 h-5 text-primary-600" />
              <div>
                <p className="text-sm text-gray-500">Emergency</p>
                <a href="tel:+1234567890" className="font-bold text-gray-800 hover:text-primary-600 transition-colors">
                  (123) 456-7890
                </a>
              </div>
            </div>
            <Link
              to="/appointment"
              className="btn-primary flex items-center space-x-2 group"
            >
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Book Now</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg font-medium ${
                      location.pathname === item.path
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100 space-y-4">
                  <div className="flex items-center space-x-2 px-4 py-3 bg-gray-50 rounded-lg">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="text-sm text-gray-500">Emergency</p>
                      <a href="tel:+1234567890" className="font-bold text-gray-800">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  <Link
                    to="/appointment"
                    className="btn-primary flex items-center justify-center space-x-2 mx-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Appointment</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header