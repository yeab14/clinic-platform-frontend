import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Navigation,
  Phone,
  Send,
  Shield,
  Sparkles,
  Star,
  Users,
  X,
  Zap,
} from 'lucide-react';
import { useLocale } from '@/providers/LocaleProvider';

const ContactPage = () => {
  const { content, language } = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactType: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeInfo, setActiveInfo] = useState(null);

  // Hospital address and Google Maps URL
  const hospitalAddress = "Çavuşoğlu, Sanayi Cd. No:1, 34873 Kartal/İstanbul";
  const encodedAddress = encodeURIComponent(hospitalAddress);
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.478278858471!2d29.180827315412032!3d40.90831797931219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9c6bcdd6b3d%3A0x5e3c5c2c8c8c8c8c!2s${encodedAddress}!5e0!3m2!1sen!2str!4v1641234567890!5m2!1sen!2str`;
  const googleMapsUrl = `https://maps.google.com/?q=${encodedAddress}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        contactType: 'general'
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Get translations from content
  const tContact = content?.contact || {};
  const tCommon = content?.common || {};

  const contactInfo = [
    {
      icon: MessageCircle,
      title: tContact?.contactMethods?.whatsapp?.title || 'WhatsApp Only',
      details: '+90 553 418 6776',
      description: tContact?.contactMethods?.whatsapp?.description || 'For medical consultations and appointments via WhatsApp',
      color: 'from-green-500 to-emerald-500',
      features: tContact?.contactMethods?.whatsapp?.features || ['Medical Consultation', 'Appointment Booking', 'Quick Response'],
      gradient: 'from-green-500/10 via-green-400/5 to-emerald-500/10',
      link: 'https://wa.me/905534186776',
      type: 'whatsapp'
    },
    {
      icon: Mail,
      title: tContact?.contactMethods?.email?.title || 'Email',
      details: 'redwan.busery@acibadem.com',
      description: tContact?.contactMethods?.email?.description || 'For detailed inquiries and medical documentation',
      color: 'from-blue-600 to-indigo-600',
      features: tContact?.contactMethods?.email?.features || ['Detailed Response', 'Medical Reports', 'Follow-up'],
      gradient: 'from-blue-600/10 via-blue-500/5 to-indigo-600/10',
      link: 'mailto:redwan.busery@acibadem.com',
      type: 'email'
    },
    {
      icon: Building,
      title: tContact?.contactMethods?.location?.title || 'Hospital Address',
      details: tContact?.location?.name || 'Acıbadem Kartal Hospital',
      description: tContact?.contactMethods?.location?.description || 'Acıbadem Kartal Hospital location and directions',
      color: 'from-blue-500 to-cyan-500',
      features: tContact?.contactMethods?.location?.features || ['Full Address', 'Google Maps', 'Navigation'],
      gradient: 'from-blue-500/10 via-blue-400/5 to-cyan-500/10',
      link: googleMapsUrl,
      type: 'location'
    },
    {
      icon: Linkedin,
      title: tContact?.contactMethods?.linkedin?.title || 'LinkedIn Profile',
      details: 'linkedin.com/in/redwan-seid-busery-cardiyology',
      description: tContact?.contactMethods?.linkedin?.description || 'Professional network and academic profile',
      color: 'from-blue-700 to-violet-600',
      features: tContact?.contactMethods?.linkedin?.features || ['Professional Network', 'Academic Profile', 'Connect'],
      gradient: 'from-blue-700/10 via-blue-600/5 to-violet-600/10',
      link: 'https://linkedin.com/in/redwan-seid-busery-cardiyology',
      type: 'linkedin'
    }
  ];

  const getIconComponent = (iconName) => {
    const icons = {
      MessageSquare,
      Calendar,
      Heart,
      Zap,
      Users,
      Shield,
      Star
    };
    return icons[iconName] || MessageSquare;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tr from-blue-500/3 to-indigo-500/3 rounded-full blur-3xl" />
        
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 15, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            className={`absolute w-1 h-1 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full ${
              i % 4 === 0 ? 'top-1/4 left-1/4' :
              i % 4 === 1 ? 'top-2/3 right-1/3' :
              i % 4 === 2 ? 'bottom-1/4 left-1/3' :
              'top-2/3 left-2/3'
            }`}
          />
        ))}
      </div>

      <div className="relative container-custom px-4 py-8 md:py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full mb-4 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-sm font-medium text-blue-700">
              {language === 'en' ? '24/7 WhatsApp Support' : '7/24 WhatsApp Desteği'}
            </span>
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gray-900">{tContact?.heroTitle || 'Get in'}</span>{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                {tContact?.heroHighlight || 'Touch'}
              </span>
              <motion.div
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              />
            </span>
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
            {tContact?.heroDescription || 'My dedicated support is ready to assist you. Choose the most convenient way to reach me for medical inquiries or appointments.'}
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const isActive = activeInfo === index;
            
            return (
              <motion.a
                key={index}
                href={info.link}
                target={info.type !== 'email' ? "_blank" : "_self"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveInfo(isActive ? null : index)}
                className={`relative cursor-pointer block ${
                  isActive ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                }`}
              >
                <div className={`bg-gradient-to-br ${info.gradient} rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      {info.type === 'whatsapp' && (
                        <span className="px-2.5 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
                          24/7
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {info.description}
                    </p>
                    
                    <div className={`font-medium text-sm md:text-base mb-3 ${
                      info.type === 'whatsapp' ? 'text-green-600' :
                      info.type === 'email' ? 'text-blue-600' :
                      info.type === 'location' ? 'text-cyan-600' :
                      'text-indigo-600'
                    }`}>
                      {info.details}
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {info.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-xs font-medium rounded-lg"
                        >
                          {feature}
                        </span>
                      ))}
                      {info.features.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                          +{info.features.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 hover:opacity-5 rounded-xl md:rounded-2xl transition-opacity`} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
              <div className="p-5 md:p-6 lg:p-8">
                {/* Success Message */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 text-lg mb-2">
                              {tContact?.form?.successTitle || 'Message Sent Successfully!'}
                            </h3>
                            <p className="text-gray-600 mb-4">
                              {tContact?.form?.successMessage || 'I\'ve received your message and will get back to you within 24 hours. For urgent matters, please use WhatsApp.'}
                            </p>
                            <button
                              onClick={() => setIsSubmitted(false)}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:shadow-md transition-all"
                            >
                              <Send className="w-4 h-4" />
                              <span>{tContact?.form?.sendAnother || 'Send Another Message'}</span>
                            </button>
                          </div>
                          <button
                            onClick={() => setIsSubmitted(false)}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                          >
                            <X className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                      {tContact?.form?.title || 'Send a Message'}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {tContact?.form?.description || 'I\'ll respond within 24 hours'}
                    </p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      {tContact?.form?.contactTypeLabel || 'How can I help you? *'}
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {(tContact?.contactTypes || []).map((type, index) => {
                        const Icon = getIconComponent(type.icon);
                        const isSelected = formData.contactType === type.value;
                        
                        return (
                          <motion.button
                            key={type.value}
                            type="button"
                            onClick={() => handleChange({ target: { name: 'contactType', value: type.value } })}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${
                              isSelected
                                ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 shadow-sm'
                                : 'bg-white border-gray-200 hover:border-blue-200'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              isSelected
                                ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                                : 'bg-gray-100'
                            }`}>
                              <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-gray-500'}`} />
                            </div>
                            <span className={`text-xs font-medium ${
                              isSelected ? 'text-blue-700' : 'text-gray-700'
                            }`}>
                              {type.label}
                            </span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {tContact?.form?.nameLabel || 'Full Name *'}
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                          <Users className="w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                          placeholder={tContact?.form?.namePlaceholder || 'John Doe'}
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {tContact?.form?.emailLabel || 'Email Address *'}
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                          <Mail className="w-5 h-5" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                          placeholder={tContact?.form?.emailPlaceholder || 'john@example.com'}
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {tContact?.form?.phoneLabel || 'Phone Number'}
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                          <Phone className="w-5 h-5" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                          placeholder={tContact?.form?.phonePlaceholder || '+90 (123) 456-7890'}
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {tContact?.form?.subjectLabel || 'Subject *'}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                        placeholder={tContact?.form?.subjectPlaceholder || 'How can I help you?'}
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {tContact?.form?.messageLabel || 'Message *'}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all resize-none"
                      placeholder={tContact?.form?.messagePlaceholder || 'Please provide details about your inquiry...'}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-gray-100">
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-500" />
                        <span>{tContact?.form?.securityNote || 'Your information is secure and encrypted'}</span>
                      </div>
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-xl hover:shadow-lg transition-all"
                    >
                      <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      <span>{tContact?.form?.submitButton || 'Send Message'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Operating Hours */}
            <div className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-lg p-5 md:p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {tContact?.operatingHours?.title || 'Consultation Hours'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {tContact?.operatingHours?.description || 'When you can reach me'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {(tContact?.operatingHours?.hours || [
                  { day: 'Monday - Friday', time: '8:00 AM - 8:00 PM', emergency: true },
                  { day: 'Saturday', time: '9:00 AM - 5:00 PM', emergency: true },
                  { day: 'Sunday', time: 'By Appointment Only', emergency: false },
                  { day: '24/7', time: 'WhatsApp Emergency', emergency: true, highlight: true }
                ]).map((hour, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-xl ${
                      hour.highlight
                        ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200'
                        : 'bg-gray-50'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-gray-900">{hour.day}</div>
                      <div className="text-sm text-gray-600">{hour.time}</div>
                    </div>
                    {hour.emergency && (
                      <div className="flex items-center gap-1">
                        <Zap className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-medium text-blue-600">
                          {language === 'en' ? 'Emergency' : 'Acil'}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Hospital Location with Map */}
            <div className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {tContact?.location?.title || 'Hospital Location'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {tContact?.location?.description || 'Find me at Acıbadem Kartal Hospital'}
                    </p>
                  </div>
                </div>
                
                {/* Map Container */}
                <div className="mb-6">
                  <div className="w-full h-48 rounded-xl overflow-hidden border border-gray-200">
                    <iframe
                      src={googleMapsEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Acıbadem Kartal Hospital Location"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="mt-3 flex justify-end">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <Navigation className="w-4 h-4" />
                      {language === 'en' ? 'Open in Google Maps' : 'Google Haritalar\'da Aç'}
                    </a>
                  </div>
                </div>
                
                {/* Location Details */}
                <div className="p-4 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-xl border border-blue-100">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-gray-900">
                      {tContact?.location?.name || 'Acıbadem Kartal Hospital'}
                    </h4>
                    <span className="px-2.5 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full">
                      {language === 'en' ? 'Main Hospital' : 'Ana Hastane'}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        {tContact?.location?.address || hospitalAddress}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        {tContact?.location?.phone || '+90 553 418 6776 (WhatsApp only)'}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        {tContact?.location?.hours || 'Mon-Fri: 8AM-8PM, Sat: 9AM-5PM'}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {(tContact?.location?.specialties || ['Cardiology', 'Heart Care', 'Medical Consultation']).slice(0, 2).map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white text-blue-700 text-xs font-medium rounded-lg"
                        >
                          {specialty}
                        </span>
                      ))}
                      {tContact?.location?.specialties && tContact.location.specialties.length > 2 && (
                        <span className="px-2 py-1 bg-white text-gray-600 text-xs font-medium rounded-lg">
                          +{tContact.location.specialties.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>




          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;