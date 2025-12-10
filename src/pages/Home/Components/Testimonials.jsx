import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Star, 
  Quote, 
  Heart, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  CheckCircle, 
  Users, 
  Shield,
  ThumbsUp,
  Calendar,
  Clock,
  BadgeCheck,
  MessageCircle
} from 'lucide-react'

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      age: "35",
      condition: "Emergency Care",
      rating: 5,
      content: "The smart appointment system saved me hours of waiting. I was able to see a specialist in under 15 minutes during a medical emergency. The entire experience was seamless!",
      avatar: "SJ",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      treatment: "Emergency Consultation",
      waitTime: "15 minutes",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      age: "42",
      condition: "Medical Professional",
      rating: 5,
      content: "As a doctor, I appreciate how efficiently this platform connects me with patients who need my specific expertise. The scheduling system reduces no-shows by 80%.",
      avatar: "MC",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      treatment: "Virtual Consultations",
      waitTime: "Instant",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Robert Davis",
      role: "Chronic Patient",
      age: "68",
      condition: "Diabetes Management",
      rating: 4.8,
      content: "Managing my chronic condition became so much easier. The automated reminders and virtual consultations have improved my quality of life significantly.",
      avatar: "RD",
      color: "text-sky-600",
      bgColor: "bg-sky-50",
      treatment: "Chronic Care Program",
      waitTime: "30 minutes",
      date: "3 days ago"
    },
    {
      id: 4,
      name: "Lisa Park",
      role: "Busy Mom",
      age: "32",
      condition: "Family Care",
      rating: 5,
      content: "With three kids, this service has been a lifesaver. I can book appointments during lunch breaks and get prescriptions refilled without leaving work.",
      avatar: "LP",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      treatment: "Family Wellness",
      waitTime: "20 minutes",
      date: "5 days ago"
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Senior Patient",
      age: "72",
      condition: "Regular Checkups",
      rating: 4.9,
      content: "The interface is so simple even for someone like me who isn't tech-savvy. The video calls are crystal clear and I feel truly cared for.",
      avatar: "DW",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      treatment: "Senior Care Plan",
      waitTime: "25 minutes",
      date: "1 week ago"
    }
  ]

  const stats = [
    { value: "4.9/5", label: "Patient Rating", icon: Star, color: "bg-blue-50 text-blue-600" },
    { value: "10K+", label: "Patients Served", icon: Users, color: "bg-cyan-50 text-cyan-600" },
    { value: "98%", label: "Satisfaction", icon: ThumbsUp, color: "bg-sky-50 text-sky-600" },
    { value: "24/7", label: "Support", icon: Clock, color: "bg-indigo-50 text-indigo-600" }
  ]

  const benefits = [
    { icon: Calendar, text: "Same-day Appointments", color: "text-blue-600 bg-blue-50" },
    { icon: Clock, text: "Minimal Waiting Time", color: "text-cyan-600 bg-cyan-50" },
    { icon: BadgeCheck, text: "Verified Specialists", color: "text-sky-600 bg-sky-50" },
    { icon: Shield, text: "Secure & Private", color: "text-indigo-600 bg-indigo-50" }
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-100/10 rounded-full blur-3xl" />
        
        {/* Subtle floating dots */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="absolute w-2 h-2 bg-blue-300/30 rounded-full"
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + i * 8}%`
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Patient Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Thousands of Patients
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
              />
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from patients and doctors who have experienced our comprehensive healthcare services.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 transition-colors"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.color.split(' ')[0]} mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-16 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Patient Info Sidebar */}
                  <div className="lg:w-1/3">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-20 h-20 rounded-2xl ${testimonials[activeTestimonial].bgColor} flex items-center justify-center`}>
                          <span className="text-2xl font-bold text-gray-900">{testimonials[activeTestimonial].avatar}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{testimonials[activeTestimonial].name}</h3>
                          <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                          <div className="flex items-center gap-1 mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-blue-400 fill-current" />
                            ))}
                            <span className="text-sm text-gray-500 ml-2">{testimonials[activeTestimonial].rating}/5</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Heart className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Condition</div>
                            <div className="font-medium text-gray-900">{testimonials[activeTestimonial].condition}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                            <Clock className="w-4 h-4 text-cyan-600" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Wait Time</div>
                            <div className="font-medium text-gray-900">{testimonials[activeTestimonial].waitTime}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-sky-600" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Treatment</div>
                            <div className="font-medium text-gray-900">{testimonials[activeTestimonial].treatment}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="lg:w-2/3">
                    <div className="mb-8">
                      <Quote className="w-12 h-12 text-blue-200 mb-4" />
                      <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed mb-6">
                        "{testimonials[activeTestimonial].content}"
                      </p>
                      <div className="text-sm text-gray-500">Posted {testimonials[activeTestimonial].date}</div>
                    </div>
                    
                    {/* Benefits Highlight */}
                    <div className="grid grid-cols-2 gap-3">
                      {benefits.map((benefit, index) => {
                        const Icon = benefit.icon
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-100"
                          >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${benefit.color.split(' ')[1]}`}>
                              <Icon className={`w-5 h-5 ${benefit.color.split(' ')[0]}`} />
                            </div>
                            <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:border-blue-300 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </motion.button>
                
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeTestimonial 
                          ? 'w-8 bg-gradient-to-r from-blue-500 to-cyan-500' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:border-blue-300 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* More Testimonials Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">More Patient Stories</h3>
            <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
              View all stories
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setActiveTestimonial(index)}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${testimonial.bgColor} flex items-center justify-center`}>
                      <span className="font-bold text-gray-900">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role} • {testimonial.age}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-blue-400 fill-current" />
                    <span className="text-sm font-medium">{testimonial.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-3">"{testimonial.content.substring(0, 120)}..."</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {testimonial.waitTime}
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read full
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full mb-4">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-blue-700">100% Secure & Trusted</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Health is Our Priority</h3>
              <p className="text-gray-600">Certified professionals and secure technology for your peace of mind.</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Verified Doctors</div>
                  <div className="text-sm text-gray-600">Board-certified</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">HIPAA Compliant</div>
                  <div className="text-sm text-gray-600">Secure data</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">24/7 Support</div>
                  <div className="text-sm text-gray-600">Always available</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience Better Healthcare?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who trust us with their health and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity">
              Book an Appointment
            </button>
            <button className="px-8 py-3 bg-white text-blue-600 border border-blue-200 rounded-full font-medium hover:bg-blue-50 transition-colors">
              View All Testimonials
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials