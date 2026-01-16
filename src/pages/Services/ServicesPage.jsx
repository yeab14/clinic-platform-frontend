import React, { useState } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useLocale } from '@/providers/LocaleProvider';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('basic');
  const [selectedService, setSelectedService] = useState(null);
  const { language } = useLocale();

  const servicesContent = {
    title: language === 'tr' ? 'Kardiyoloji Hizmetleri' : 'Cardiology Services',
    subtitle: language === 'tr' ? 'Kapsamlı Kalp Bakımı' : 'Comprehensive Heart Care',
    basicServices: language === 'tr' ? [
      {
        name: "Kapsamlı kardiyolojik değerlendirme",
        description: "Detaylı fizik muayene, risk faktörü analizi ve kişiye özel değerlendirme",
        details: "Tüm kardiyovasküler sistemin kapsamlı incelenmesi, risk faktörlerinin belirlenmesi ve kişiselleştirilmiş tedavi planı oluşturulması"
      },
      {
        name: "Elektrokardiyografi (EKG) ve ritim takibi",
        description: "Kalp ritim bozukluklarının tanı ve takibi",
        details: "12 derivasyon EKG, Holter monitörizasyonu, olay kaydedici ile ritim bozukluklarının tanı ve tedavi takibi"
      },
      {
        name: "Transtorasik, transözofageal ve stres ekokardiyografi",
        description: "Kalbin yapısal ve fonksiyonel değerlendirmesi",
        details: "Kalp kapaklarının, kasılma gücünün, duvar hareketlerinin ve doğumsal anomalilerin ultrason ile değerlendirilmesi"
      },
      {
        name: "Bilgisayarlı tomografi koroner anjiyografi",
        description: "Koroner arter hastalığının non-invaziv değerlendirmesi",
        details: "Koroner arterlerin 3 boyutlu görüntülenmesi, kalsiyum skorlaması ve darlıkların erken teşhisi"
      },
      {
        name: "İnvaziv koroner anjiyografi",
        description: "Altın standart koroner arter değerlendirmesi",
        details: "Kasıktan veya koldan girilerek koroner arterlerin direkt görüntülenmesi ve gerekirse müdahale imkanı"
      },
      {
        name: "Kapak hastalıklarının değerlendirilmesi ve takibi",
        description: "Kalp kapak hastalıklarının tanı ve tedavi yönetimi",
        details: "Kapak darlıkları ve yetmezliklerinin ekokardiyografik değerlendirmesi, medikal tedavi ve girişimsel/serrahi seçeneklerin planlanması"
      },
      {
        name: "Aort hastalıkları ve pulmoner hipertansiyon değerlendirmesi",
        description: "Aort anevrizması, disseksiyonu ve pulmoner hipertansiyon tanısı",
        details: "Aort genişlemeleri, yırtılmaları ve akciğer damar basıncı yüksekliğinin tanı ve tedavi stratejilerinin belirlenmesi"
      }
    ] : [
      {
        name: "Comprehensive cardiology evaluation",
        description: "Detailed physical examination, risk factor analysis and personalized assessment",
        details: "Comprehensive examination of cardiovascular system, determination of risk factors and creation of personalized treatment plan"
      },
      {
        name: "Electrocardiography (ECG) and rhythm monitoring",
        description: "Diagnosis and follow-up of heart rhythm disorders",
        details: "12-lead ECG, Holter monitoring, event recorder for diagnosis and treatment follow-up of rhythm disorders"
      },
      {
        name: "Transthoracic, transesophageal, and stress echocardiography",
        description: "Structural and functional assessment of the heart",
        details: "Ultrasound evaluation of heart valves, contraction strength, wall motions and congenital anomalies"
      },
      {
        name: "Computed coronary angiography",
        description: "Non-invasive assessment of coronary artery disease",
        details: "3D imaging of coronary arteries, calcium scoring and early diagnosis of stenosis"
      },
      {
        name: "Invasive coronary angiography",
        description: "Gold standard coronary artery assessment",
        details: "Direct imaging of coronary arteries through groin or arm access with intervention possibility if needed"
      },
      {
        name: "Valvular heart disease assessment and follow-up",
        description: "Diagnosis and treatment management of heart valve diseases",
        details: "Echocardiographic evaluation of valve stenosis and insufficiencies, planning of medical treatment and interventional/surgical options"
      },
      {
        name: "Aortic diseases and pulmonary hypertension evaluation",
        description: "Diagnosis of aortic aneurysm, dissection and pulmonary hypertension",
        details: "Diagnosis and treatment strategies for aortic dilatations, dissections and elevated pulmonary artery pressure"
      }
    ],
    advancedServices: language === 'tr' ? [
      {
        name: "Kronik Total Oklüzyon (CTO) tedavisi",
        description: "Tamamen tıkalı koroner damarların açılması",
        details: "Uzun süredir tamamen tıkalı koroner damarların özel tekniklerle açılması işlemi"
      },
      {
        name: "Kalıcı kalp pili implantasyonu",
        description: "Kalp ritim bozukluklarının kalıcı tedavisi",
        details: "Bradyarrhythmias (yavaş ritim bozuklukları) için kalıcı pacemaker implantasyonu"
      },
      {
        name: "İmplante Edilebilir Kardiyoverter-Defibrilatör (ICD)",
        description: "Ani kalp durması riskine karşı koruma",
        details: "Yüksek riskli hastalarda ani kardiyak ölümü önlemek için ICD implantasyonu"
      },
      {
        name: "Transkateter Aort Kapak İmplantasyonu (TAVI)",
        description: "Aort darlığının ameliyatsız tedavisi",
        details: "Yüksek riskli aort darlığı hastalarında ameliyatsız kapak değişimi işlemi"
      },
      {
        name: "Mitral balon valvüloplasti",
        description: "Mitral darlığının balonla tedavisi",
        details: "Mitral kapak darlığının balon kateter ile genişletilmesi işlemi"
      },
      {
        name: "Koroner arter bypass cerrahisi (CABG)",
        description: "Koroner arter hastalığının cerrahi tedavisi",
        details: "Tıkalı koroner arterlerin bypass edilmesi için kalp cerrahisi ile koordinasyon"
      },
      {
        name: "Cerrahi kapak işlemleri",
        description: "Kalp kapak hastalıklarının cerrahi tedavisi",
        details: "Kapak tamiri veya değişimi için kalp cerrahisi ile koordinasyon"
      }
    ] : [
      {
        name: "Chronic Total Occlusion (CTO) treatment",
        description: "Opening of completely blocked coronary arteries",
        details: "Procedure to open completely blocked coronary arteries using special techniques"
      },
      {
        name: "Pacemaker implantation",
        description: "Permanent treatment for heart rhythm disorders",
        details: "Permanent pacemaker implantation for bradyarrhythmias (slow rhythm disorders)"
      },
      {
        name: "Implantable Cardioverter-Defibrillators (ICDs)",
        description: "Protection against sudden cardiac arrest risk",
        details: "ICD implantation to prevent sudden cardiac death in high-risk patients"
      },
      {
        name: "Transcatheter Aortic Valve Implantation (TAVI)",
        description: "Non-surgical treatment of aortic stenosis",
        details: "Non-surgical valve replacement procedure in high-risk aortic stenosis patients"
      },
      {
        name: "Mitral balloon valvuloplasty",
        description: "Balloon treatment of mitral stenosis",
        details: "Procedure to widen mitral valve stenosis using balloon catheter"
      },
      {
        name: "Coronary artery bypass surgery (CABG)",
        description: "Surgical treatment of coronary artery disease",
        details: "Coordination with cardiac surgery for bypassing blocked coronary arteries"
      },
      {
        name: "Surgical valve procedures",
        description: "Surgical treatment of heart valve diseases",
        details: "Coordination with cardiac surgery for valve repair or replacement"
      }
    ]
  };

  const categories = [
    { 
      id: 'basic', 
      label: language === 'tr' ? 'Temel Hizmetler' : 'Basic Services', 
      services: servicesContent.basicServices
    },
    { 
      id: 'advanced', 
      label: language === 'tr' ? 'İleri İşlemler' : 'Advanced Procedures', 
      services: servicesContent.advancedServices
    },
  ];

  const currentServices = categories.find(cat => cat.id === activeCategory)?.services || [];

  return (
    <section className="relative py-16 overflow-hidden bg-white">
      <div className="relative container-custom px-4">
       
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700">
              {language === 'tr' ? 'Uzman Kardiyoloji' : 'Specialized Cardiology'}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {servicesContent.title}
          </h1>
          
          <p className="text-xl text-gray-600">
            {servicesContent.subtitle}
          </p>
        </div>

      
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedService(service)}
              className={`bg-white rounded-2xl p-6 border cursor-pointer transition-all ${
                selectedService?.name === service.name 
                  ? 'border-blue-500 shadow-lg' 
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

    
        {activeCategory === 'advanced' && (
          <div className="mt-8 text-center text-gray-600 text-sm max-w-2xl mx-auto">
            {language === 'tr' 
              ? 'İleri işlemler, güvenli ve en uygun hasta yönetimi için uzman merkezlerle koordinasyon içinde planlanmaktadır.'
              : 'Advanced procedures are coordinated with specialized centers to ensure safe and optimal patient care.'
            }
          </div>
        )}


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
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedService.name}
                      </h2>
                      <p className="text-gray-600">{selectedService.description}</p>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-bold text-gray-900 mb-4">
                      {language === 'tr' ? 'Hizmet Detayları' : 'Service Details'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedService.details}
                    </p>
                  </div>
                  
                  {activeCategory === 'advanced' && (
                    <div className="bg-blue-50 rounded-lg p-4 mb-8">
                      <p className="text-blue-800 text-sm">
                        {language === 'tr' 
                          ? 'Bu işlem, güvenli ve en uygun hasta yönetimi için uzman merkezlerle koordinasyon içinde planlanmaktadır.'
                          : 'This procedure is coordinated with specialized centers to ensure safe and optimal patient care.'
                        }
                      </p>
                    </div>
                  )}

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
    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
    onClick={() => setSelectedService(null)}
  >
    {language === 'tr' ? 'İletişim' : 'Contact'}
  </Link>
  <Link
    to="/appointment"
    className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
    onClick={() => setSelectedService(null)}
  >
    {language === 'tr' ? 'Randevu' : 'Appointment'}
  </Link>
</div>

                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesPage;