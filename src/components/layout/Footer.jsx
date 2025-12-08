import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white mt-20">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Clinic Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                <span className="text-primary-600 font-bold text-2xl">C</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">ClinicCare+</h2>
                <p className="text-gray-400">Advanced Healthcare Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We provide comprehensive healthcare services with cutting-edge technology 
              and compassionate care for all our patients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-400 hover:text-white transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-gray-400 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1" />
                <span className="text-gray-400">
                  123 Medical Street, Health City<br />
                  HC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:info@cliniccare.com" className="text-gray-400 hover:text-white transition-colors">
                  info@cliniccare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {currentYear} ClinicCare+. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <div className="flex items-center text-gray-400 text-sm">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" /> for better health
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer