import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useLocale } from '@/providers/LocaleProvider';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('basic');
  const [hoveredService, setHoveredService] = useState(null);
  const { content, language } = useLocale();

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
      label: language === 'tr' ? 'Temel Hizmetler' : 'Basic Services'
    },
    { 
      id: 'advanced', 
      label: language === 'tr' ? 'İleri İşlemler' : 'Advanced Procedures'
    },
  ];

  const currentServices = activeCategory === 'basic' 
    ? servicesContent.basicServices 
    : servicesContent.advancedServices.procedures;

  return (
    <section className="py-16 bg-gradient-to-b from-white via-blue-50/20 to-white">
      <div className="container-custom px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700">
              {language === 'tr' ? 'Uzman Kardiyoloji' : 'Specialized Cardiology'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {servicesContent.title}
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {servicesContent.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            {categories.map(category => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {currentServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg ${
                  activeCategory === 'basic' ? 'bg-blue-100' : 'bg-purple-100'
                } flex items-center justify-center flex-shrink-0`}>
                  <div className={`w-2 h-2 rounded-full ${
                    activeCategory === 'basic' ? 'bg-blue-600' : 'bg-purple-600'
                  }`} />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'tr' 
                      ? 'Detaylı değerlendirme ve uzman takibi'
                      : 'Detailed assessment and expert follow-up'
                    }
                  </p>
                </div>
              </div>

              {hoveredService === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 pt-4 border-t border-gray-100"
                >
                  <Link
                    to="/services"
                    className="inline-block text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {language === 'tr' ? 'Detaylı bilgi →' : 'More details →'}
                  </Link>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Advanced Services Note */}
        {activeCategory === 'advanced' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 rounded-xl p-6 mb-8 max-w-3xl mx-auto border border-blue-200"
          >
            <p className="text-blue-800 text-center">
              {language === 'tr' 
                ? 'İleri işlemler, güvenli ve en uygun hasta yönetimi için uzman merkezlerle koordinasyon içinde planlanmaktadır.'
                : 'Advanced procedures are coordinated with specialized centers to ensure safe and optimal patient care.'
              }
            </p>
          </motion.div>
        )}


      </div>
    </section>
  );
};

export default Services;