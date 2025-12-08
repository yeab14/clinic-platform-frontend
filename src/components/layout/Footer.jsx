import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Shield, Award, Clock, Globe, ChevronRight, Stethoscope, Sparkles, Users } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/services' },
    { name: 'Find Doctors', path: '/doctors' },
    { name: 'Book Appointment', path: '/appointment' },
    { name: 'Telemedicine', path: '/telemedicine' },
    { name: 'Emergency Care', path: '/emergency' },
  ]

  const services = [
    'General Medicine',
    'Cardiology',
    'Neurology',
    'Ophthalmology',
    'Dental Care',
    'Orthopedics',
    'Pediatrics',
    'Dermatology',
  ]

  const company = [
    'About Us',
    'Careers',
    'Press & Media',
    'Testimonials',
    'Research',
    'Partnerships',
  ]

  const trustBadges = [
    { icon: Shield, text: 'HIPAA Compliant', subText: 'Secure & Private' },
    { icon: Award, text: 'Award Winning', subText: '5 Years in a Row' },
    { icon: Users, text: '50+ Doctors', subText: 'Expert Team' },
    { icon: Globe, text: 'Global Standards', subText: 'International Care' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white mt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                             linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container-custom px-4 py-12 md:py-16">
        {/* Top Section - Newsletter & Trust */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12 pb-12 border-b border-gray-800">
          {/* Newsletter */}
          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-2xl p-6 md:p-8 border border-gray-800">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Stay Updated with Health Tips</h3>
                <p className="text-gray-400">Subscribe to our newsletter for the latest health insights and clinic updates.</p>
              </div>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-4">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-800 hover:border-gray-700 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white">{badge.text}</div>
                      <div className="text-sm text-gray-400">{badge.subText}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Clinic Info - Span 4 */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Stethoscope className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  ClinicCare+
                </h2>
                <p className="text-gray-400">Advanced Healthcare Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We provide comprehensive healthcare services with cutting-edge technology 
              and compassionate care for all our patients. Our mission is to make 
              quality healthcare accessible, affordable, and convenient for everyone.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="group w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 transition-all hover:shadow-lg"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Span 2 */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-cyan-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Span 3 */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-cyan-400" />
              Our Services
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm hover:bg-gray-800/50 rounded-lg px-2 py-1"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Company - Span 3 */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                  Company
                </h3>
                <ul className="space-y-3">
                  {company.map((item) => (
                    <li key={item}>
                      <Link
                        to={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                  Contact
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">
                      123 Medical Street,<br />
                      Health City, HC 12345
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors text-sm">
                      (123) 456-7890
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <a href="mailto:info@cliniccare.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                      info@cliniccare.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency & Hours */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 rounded-xl p-6 border border-red-900/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-white">Emergency Care</div>
                <div className="text-sm text-red-300">24/7 Available</div>
              </div>
            </div>
            <a
              href="tel:+911"
              className="inline-flex items-center gap-2 text-red-300 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>Emergency: 911</span>
            </a>
          </div>

          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-xl p-6 border border-cyan-900/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-white">Working Hours</div>
                <div className="text-sm text-cyan-300">Mon-Sun: 8AM-10PM</div>
              </div>
            </div>
            <p className="text-cyan-300 text-sm">Extended hours for your convenience</p>
          </div>

          <div className="bg-gradient-to-r from-purple-600/10 to-indigo-500/10 rounded-xl p-6 border border-purple-900/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-white">Support</div>
                <div className="text-sm text-purple-300">Always Here for You</div>
              </div>
            </div>
            <p className="text-purple-300 text-sm">Patient support available 24/7 via chat & phone</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright & Links */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-gray-400 text-sm">
                © {currentYear} <span className="text-cyan-300 font-medium">ClinicCare+</span>. All rights reserved.
              </p>
              
              <div className="flex items-center gap-6">
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Sitemap
                </Link>
                <Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Accessibility
                </Link>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-400">
                Certified by:
              </div>
              <div className="flex gap-2">
                {['JCI', 'ISO', 'HIPAA'].map((cert) => (
                  <div
                    key={cert}
                    className="px-3 py-1 bg-gray-800/50 rounded-lg border border-gray-700 text-gray-300 text-xs font-medium"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>

     
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50 group"
      >
        <ArrowRight className="w-5 h-5 text-white -rotate-90 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  )
}

export default Footer