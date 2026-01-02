import React, { useState } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import {
  Activity,
  Activity as Monitor,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Filter,
  Heart,
  Search,
  Shield,
  Sparkles,
  Star,
  Stethoscope,
  Target,
  X,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { useLocale } from '@/providers/LocaleProvider';

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('basic');
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const { content, language } = useLocale();

  // Get services content from locale
  const servicesContent = content?.services || {
    title: language === 'tr' ? 'Kardiyoloji Hizmetleri' : 'Cardiology Services',
    subtitle: language === 'tr' ? 'Kapsamlı Kalp Bakımı' : 'Comprehensive Heart Care',
    basicServices: language === 'tr' ? [
      "Kapsamlı kardiyolojik değerlendirme",
      "Elektrokardiyografi (EKG) ve ritim takibi",
      "Transtorasik, transözofageal ve stres ekokardiyografi",
      "Bilgisayarlı tomografi koroner anjiyografi",
      "İnvaziv koroner anjiyografi",
      "Kapak hastalıklarının değerlendirilmesi ve takibi",
      "Aort hastalıkları ve pulmoner hipertansiyon değerlendirmesi"
    ] : [
      "Comprehensive cardiology evaluation",
      "Electrocardiography (ECG) and rhythm monitoring",
      "Transthoracic, transesophageal, and stress echocardiography",
      "Computed coronary angiography",
      "Invasive coronary angiography",
      "Valvular heart disease assessment and follow-up",
      "Aortic diseases and pulmonary hypertension evaluation"
    ],
    advancedServices: {
      title: language === 'tr' ? 'İleri ve Kompleks İşlemler' : 'Advanced & Complex Procedures',
      description: language === 'tr' 
        ? 'Kronik total oklüzyon (CTO) koroner lezyonların tedavisi, kalıcı kalp pili ve implante edilebilir kardiyoverter-defibrilatör (ICD) uygulamaları gibi kardiyak ritim cihazı işlemleri, transkateter aort kapak implantasyonu (TAVI) ve mitral balon valvüloplasti gibi yapısal kalp girişimleri ile koroner arter bypass cerrahisi (CABG) ve cerrahi kapak işlemleri gibi ileri ve kompleks uygulamalar, güvenli ve en uygun hasta yönetimi için uzman merkezlerle koordinasyon içinde planlanmaktadır.'
        : 'Advanced and complex procedures, including treatment of chronic total occlusion (CTO) coronary lesions, cardiac rhythm device implantations such as pacemakers and implantable cardioverter-defibrillators (ICDs), structural heart procedures like transcatheter aortic valve implantation (TAVI) and mitral balloon valvuloplasty, as well as coronary artery bypass surgery (CABG) and surgical valve procedures, are coordinated with specialized centers to ensure safe and optimal patient care.',
      procedures: language === 'tr' ? [
        "Kronik Total Oklüzyon (CTO) tedavisi",
        "Kalıcı kalp pili implantasyonu",
        "İmplante Edilebilir Kardiyoverter-Defibrilatör (ICD)",
        "Transkateter Aort Kapak İmplantasyonu (TAVI)",
        "Mitral balon valvüloplasti",
        "Koroner arter bypass cerrahisi (CABG)",
        "Cerrahi kapak işlemleri"
      ] : [
        "Chronic Total Occlusion (CTO) treatment",
        "Pacemaker implantation",
        "Implantable Cardioverter-Defibrillators (ICDs)",
        "Transcatheter Aortic Valve Implantation (TAVI)",
        "Mitral balloon valvuloplasty",
        "Coronary artery bypass surgery (CABG)",
        "Surgical valve procedures"
      ]
    },
    stats: [
      { value: "98%", label: language === 'tr' ? 'Teşhis Doğruluğu' : 'Diagnostic Accuracy' },
      { value: "24/7", label: language === 'tr' ? 'Acil Destek' : 'Emergency Support' },
      { value: "45 min", label: language === 'tr' ? 'Ortalama Muayene' : 'Average Consultation' },
      { value: "500+", label: language === 'tr' ? 'Uygulanan İşlem' : 'Procedures Performed' }
    ]
  };

  // Enhanced service details for cards
  const basicServicesEnhanced = servicesContent.basicServices.map((service, index) => ({
    id: index + 1,
    name: service,
    description: language === 'tr' 
      ? 'Detaylı değerlendirme ve uzman takibi'
      : 'Detailed assessment and expert follow-up',
    duration: index % 2 === 0 ? '30-45 dk' : '45-60 dk',
    features: language === 'tr' ? [
      'Uzman değerlendirme',
      'Detaylı raporlama',
      'Takip planı',
      'Kişiselleştirilmiş yaklaşım'
    ] : [
      'Expert assessment',
      'Detailed reporting',
      'Follow-up plan',
      'Personalized approach'
    ],
    icon: index % 3 === 0 ? Heart : index % 3 === 1 ? Activity : Monitor,
    color: index % 3 === 0 ? 'from-primary-600 to-blue-500' : 
           index % 3 === 1 ? 'from-emerald-500 to-green-500' : 
           'from-blue-500 to-cyan-500'
  }));

  const advancedServicesEnhanced = servicesContent.advancedServices.procedures.map((service, index) => ({
    id: 100 + index + 1,
    name: service,
    description: language === 'tr'
      ? 'Uzman merkezlerle koordineli ileri tedavi'
      : 'Advanced treatment coordinated with specialized centers',
    duration: '60-120 dk',
    features: language === 'tr' ? [
      'Uzman koordinasyon',
      'İleri teknoloji',
      'Güvenli yönetim',
      'Kapsamlı takip'
    ] : [
      'Specialist coordination',
      'Advanced technology',
      'Safe management',
      'Comprehensive follow-up'
    ],
    icon: index % 3 === 0 ? Shield : index % 3 === 1 ? Award : Target,
    color: index % 3 === 0 ? 'from-purple-500 to-primary-500' : 
           index % 3 === 1 ? 'from-amber-500 to-yellow-500' : 
           'from-red-500 to-orange-500'
  }));

  const categories = [
    { 
      id: 'basic', 
      label: language === 'tr' ? 'Temel Hizmetler' : 'Basic Services', 
      count: basicServicesEnhanced.length,
      icon: Stethoscope,
      services: basicServicesEnhanced
    },
    { 
      id: 'advanced', 
      label: language === 'tr' ? 'İleri İşlemler' : 'Advanced Procedures', 
      count: advancedServicesEnhanced.length,
      icon: Activity,
      services: advancedServicesEnhanced
    },
  ];

  const currentServices = categories.find(cat => cat.id === activeCategory)?.services || [];

  const filteredServices = currentServices.filter(service => 
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-primary-50/10 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Medical Elements */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-primary-400/10 to-primary-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary-500/5 to-primary-700/5 rounded-full blur-3xl"
        />
        
        {/* Heartbeat Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1d4ed8 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="relative container-custom px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary-600 animate-pulse" />
            <span className="text-sm font-medium text-primary-700">
              {language === 'tr' ? 'Uzman Kardiyoloji' : 'Specialized Cardiology'}
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">{servicesContent.title.split(' ')[0]}</span>{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-blue-500 bg-clip-text text-transparent">
                {servicesContent.title.split(' ').slice(1).join(' ')}
              </span>
              <motion.div
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-primary-500 rounded-full"
              />
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            {servicesContent.subtitle}
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {servicesContent.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400 group-hover:text-primary-600 transition-colors" />
            <input
              type="text"
              placeholder={language === 'tr' ? 'Hizmet ara...' : 'Search services...'}
              className="w-full pl-14 pr-6 py-4 bg-white rounded-2xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all text-lg shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <motion.div
              animate={{ rotate: searchTerm ? [0, 360] : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              <Filter className="w-5 h-5 text-primary-400" />
            </motion.div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-primary-600 to-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-200 hover:bg-primary-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.label}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    activeCategory === category.id
                      ? 'bg-white/20'
                      : 'bg-primary-100 text-primary-700'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence>
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedService(service)}
                  className="group relative cursor-pointer bg-white rounded-3xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                >
                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex items-center gap-1 text-primary-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-bold">4.9</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gradient-to-r from-primary-50 to-blue-50 text-primary-700 text-xs font-medium rounded-lg"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-16 h-16 text-primary-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {language === 'tr' ? 'Hizmet bulunamadı' : 'No services found'}
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              {language === 'tr' 
                ? 'Arama kriterlerinizi gözden geçirin. Kardiyoloji hizmetlerimiz hakkında daha fazla bilgi için bizimle iletişime geçebilirsiniz.'
                : 'Try adjusting your search criteria. Contact us for more information about our cardiology services.'
              }
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-600 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <X className="w-5 h-5" />
              <span>{language === 'tr' ? 'Filtreleri Temizle' : 'Clear Filters'}</span>
            </button>
          </motion.div>
        )}

        {/* Advanced Services Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8 border border-primary-100 shadow-lg mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-8 h-8 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              {servicesContent.advancedServices.title}
            </h2>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            {servicesContent.advancedServices.description}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicesContent.advancedServices.procedures.slice(0, 4).map((procedure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-primary-100"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{procedure}</h3>
                  <p className="text-sm text-gray-600">
                    {language === 'tr' 
                      ? 'Uzman merkezlerle koordineli' 
                      : 'Coordinated with specialized centers'
                    }
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Consultation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-blue-500 rounded-3xl p-12 text-white shadow-2xl overflow-hidden relative mb-12"
        >
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  x: [0, Math.sin(i) * 10, 0],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className={`absolute w-16 h-16 border-2 border-white/20 rounded-full ${
                  i === 0 ? 'top-10 left-10' :
                  i === 1 ? 'top-20 right-20' :
                  i === 2 ? 'bottom-10 left-1/4' :
                  i === 3 ? 'bottom-20 right-1/3' :
                  'top-1/2 left-1/2'
                }`}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  {language === 'tr' ? 'Kardiyoloji Konsültasyonu' : 'Cardiology Consultation'}
                </h3>
                <p className="text-blue-100 text-lg mb-6 max-w-2xl">
                  {language === 'tr'
                    ? 'Dr. Redwan Seid Busery ile kişiselleştirilmiş kardiyoloji değerlendirmesi için randevu alın.'
                    : 'Book an appointment with Dr. Redwan Seid Busery for personalized cardiology assessment.'
                  }
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-200" />
                    <span>{language === 'tr' ? 'Kanıta Dayalı' : 'Evidence-Based'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-200" />
                    <span>{language === 'tr' ? 'Aynı Gün Yanıt' : 'Same Day Response'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-200" />
                    <span>{language === 'tr' ? 'Uzman Kardiolog' : 'Specialist Cardiologist'}</span>
                  </div>
                </div>
              </div>
              <Link
                to="/appointment"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-6 h-6" />
                <span>{language === 'tr' ? 'Randevu Al' : 'Book Appointment'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

       

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center`}>
                        <selectedService.icon className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          {selectedService.name}
                        </h2>
                        <p className="text-gray-600">{selectedService.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4">
                        {language === 'tr' ? 'Hizmet Detayları' : 'Service Details'}
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">{language === 'tr' ? 'Süre' : 'Duration'}</span>
                          <span className="font-semibold text-gray-900">{selectedService.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">{language === 'tr' ? 'Değerlendirme' : 'Assessment'}</span>
                          <span className="font-semibold text-gray-900">
                            {language === 'tr' ? 'Uzman Kardiolog' : 'Specialist Cardiologist'}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4">
                        {language === 'tr' ? 'Özellikler' : 'Features'}
                      </h3>
                      <ul className="space-y-2">
                        {selectedService.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      {language === 'tr' 
                        ? 'Detaylı bilgi ve randevu için'
                        : 'For detailed information and appointment'
                      }
                    </div>
                    <div className="flex gap-3">
                      <Link
                        to="/contact"
                        className="px-6 py-3 bg-gradient-to-r from-primary-600 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                        onClick={() => setSelectedService(null)}
                      >
                        {language === 'tr' ? 'İletişim' : 'Contact'}
                      </Link>
                      <Link
                        to="/appointment"
                        className="group inline-flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 text-gray-900 font-bold rounded-xl hover:border-primary-300 hover:shadow-xl transition-all"
                        onClick={() => setSelectedService(null)}
                      >
                        <Calendar className="w-5 h-5" />
                        <span>{language === 'tr' ? 'Randevu Al' : 'Book Appointment'}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServicesPage;