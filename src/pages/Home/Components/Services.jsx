import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Heart, 
  Activity, 
  Brain, 
  Shield, 
  Sparkles, 
  Zap, 
  Star, 
  Plus, 
  CheckCircle,
  Stethoscope,
  Microscope,
  Target,
  Clock,
  Users,
  Award,
  FileText,
  Activity as Monitor
} from 'lucide-react';
import { useLocale } from '@/providers/LocaleProvider';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('basic');
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
    }
  };

  const categories = [
    { 
      id: 'basic', 
      label: language === 'tr' ? 'Temel Hizmetler' : 'Basic Services', 
      count: servicesContent.basicServices.length,
      icon: Stethoscope
    },
    { 
      id: 'advanced', 
      label: language === 'tr' ? 'İleri İşlemler' : 'Advanced Procedures', 
      count: servicesContent.advancedServices.procedures.length,
      icon: Activity
    },
  ];

  const stats = [
    { 
      value: servicesContent.stats?.[0]?.value || "98%", 
      label: servicesContent.stats?.[0]?.label || (language === 'tr' ? 'Teşhis Doğruluğu' : 'Diagnostic Accuracy'), 
      icon: Target 
    },
    { 
      value: servicesContent.stats?.[1]?.value || "24/7", 
      label: servicesContent.stats?.[1]?.label || (language === 'tr' ? 'Acil Destek' : 'Emergency Support'), 
      icon: Zap 
    },
    { 
      value: servicesContent.stats?.[2]?.value || "45 min", 
      label: servicesContent.stats?.[2]?.label || (language === 'tr' ? 'Ortalama Muayene' : 'Average Consultation'), 
      icon: Clock 
    },
    { 
      value: servicesContent.stats?.[3]?.value || "500+", 
      label: servicesContent.stats?.[3]?.label || (language === 'tr' ? 'Uygulanan İşlem' : 'Procedures Performed'), 
      icon: Activity 
    },
  ];

 

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-primary-50/20 to-white">
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

      <div className="relative container-custom px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary-600 animate-pulse" />
            <span className="text-sm font-medium text-primary-700">
              {language === 'tr' ? 'Uzman Kardiyoloji' : 'Specialized Cardiology'}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">{servicesContent.title.split(' ')[0]}</span>{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-teal bg-clip-text text-transparent">
                {servicesContent.title.split(' ').slice(1).join(' ')}
              </span>
              <motion.div
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary-500 via-accent-teal to-primary-500 rounded-full"
              />
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto mb-10">
            {servicesContent.subtitle}
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-200'
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
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Services List */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {activeCategory === 'basic' ? (
                <motion.div
                  key="basic"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <Stethoscope className="w-6 h-6 text-primary-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      {language === 'tr' ? 'Temel Kardiyoloji Hizmetleri' : 'Basic Cardiology Services'}
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    {servicesContent.basicServices.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onMouseEnter={() => setHoveredService(index)}
                        onMouseLeave={() => setHoveredService(null)}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary-50/50 transition-colors cursor-pointer group"
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          hoveredService === index 
                            ? 'bg-gradient-to-br from-primary-600 to-primary-700' 
                            : 'bg-primary-100'
                        }`}>
                          <CheckCircle className={`w-5 h-5 ${
                            hoveredService === index ? 'text-white' : 'text-primary-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                            {service}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {language === 'tr' 
                              ? 'Detaylı değerlendirme ve takip' 
                              : 'Detailed assessment and follow-up'
                            }
                          </p>
                        </div>
                        {hoveredService === index && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-primary-600 rounded-full"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="advanced"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-3xl p-8 border border-primary-100 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <Activity className="w-6 h-6 text-primary-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      {servicesContent.advancedServices.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {servicesContent.advancedServices.description}
                  </p>
                  
                  <div className="space-y-4">
                    {servicesContent.advancedServices.procedures.map((procedure, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-primary-100"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Award className="w-4 h-4 text-white" />
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
              )}
            </AnimatePresence>

    
          </div>

          {/* Right: Service Details & Information */}
          <div className="space-y-8">
            {/* Service Details Card */}
            <div className="bg-gradient-to-br from-primary-600/10 to-primary-700/10 rounded-3xl p-8 border border-primary-100 shadow-xl overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-primary-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === 'tr' ? 'Kardiyoloji Konsültasyonu' : 'Cardiology Consultation'}
                  </h3>
                  <p className="text-primary-600 font-medium">
                    {language === 'tr' ? 'Dr. Redwan Seid Busery' : 'Dr. Redwan Seid Busery'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">
                    {language === 'tr' ? 'Kapsam' : 'Scope'}
                  </h4>
                  <ul className="space-y-2">
                    {[
                      language === 'tr' ? 'Kapsamlı kardiyak değerlendirme' : 'Comprehensive cardiac assessment',
                      language === 'tr' ? 'Risk faktörü analizi' : 'Risk factor analysis',
                      language === 'tr' ? 'Teşhis testleri planlaması' : 'Diagnostic test planning',
                      language === 'tr' ? 'Tedavi stratejisi geliştirme' : 'Treatment strategy development'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">
                    {language === 'tr' ? 'Randevu Süreci' : 'Appointment Process'}
                  </h4>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="text-lg font-bold text-primary-600 mb-1">45-60 dk</div>
                      <div className="text-sm text-gray-600">
                        {language === 'tr' ? 'Ortalama süre' : 'Average duration'}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-lg font-bold text-primary-600 mb-1">1:1</div>
                      <div className="text-sm text-gray-600">
                        {language === 'tr' ? 'Birebir konsültasyon' : 'One-on-one consultation'}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-lg font-bold text-primary-600 mb-1">24 saat</div>
                      <div className="text-sm text-gray-600">
                        {language === 'tr' ? 'Sonuç bekleme' : 'Result turnaround'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link
                to="/appointment"
                className="group mt-8 inline-flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <span>{language === 'tr' ? 'Randevu Al' : 'Book Appointment'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                  {language === 'tr' ? 'Ek Bilgiler' : 'Additional Information'}
                </span>
              </h4>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-primary-600" />
                    <h5 className="font-bold text-gray-900">
                      {language === 'tr' ? 'Koordinasyon' : 'Coordination'}
                    </h5>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {language === 'tr' 
                      ? 'İleri ve kompleks işlemler için Acıbadem, Memorial gibi önde gelen sağlık merkezleriyle koordinasyon sağlanmaktadır.'
                      : 'Advanced and complex procedures are coordinated with leading healthcare centers such as Acıbadem, Memorial, and others.'
                    }
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-primary-600" />
                    <h5 className="font-bold text-gray-900">
                      {language === 'tr' ? 'Belgeler' : 'Documents'}
                    </h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      language === 'tr' ? 'Önceki test sonuçları' : 'Previous test results',
                      language === 'tr' ? 'İlaç listesi' : 'Medication list',
                      language === 'tr' ? 'Tıbbi geçmiş' : 'Medical history'
                    ].map((doc, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-lg"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 text-white shadow-xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {language === 'tr' ? 'Sorularınız mı var?' : 'Questions?'}
                  </h3>
                  <p className="opacity-90">
                    {language === 'tr' 
                      ? 'Ücretsiz ön danışma için iletişime geçin' 
                      : 'Contact us for a free preliminary consultation'
                    }
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-all"
                >
                  <span>{language === 'tr' ? 'İletişim' : 'Contact'}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/appointment"
            className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 font-bold rounded-xl hover:from-primary-100 hover:to-primary-200 transition-all shadow-lg hover:shadow-xl"
          >
            <Heart className="w-6 h-6" />
            <span className="text-lg">
              {language === 'tr' ? 'Kardiyoloji Konsültasyonu Randevusu Al' : 'Book Cardiology Consultation'}
            </span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;