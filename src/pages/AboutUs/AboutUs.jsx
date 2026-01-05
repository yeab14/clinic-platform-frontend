import React, { useState } from 'react';

import { motion } from 'framer-motion';
import {
  Activity,
  Award,
  Brain,
  CheckCircle,
  GraduationCap,
  Heart,
  Stethoscope,
  Users,
} from 'lucide-react';

import { useLocale } from '@/providers/LocaleProvider';

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const { content, language } = useLocale();
  
  const aboutContent = content?.about || {
    title: language === 'tr' ? 'Hakkımda' : 'About Me',
    subtitle: language === 'tr' ? 'Kardiyoloji Uzmanı' : 'Cardiology Specialist',
    paragraphs: [
      language === 'tr' 
        ? 'Geniş bir yelpazedeki kardiyovasküler hastalıklara sahip hastalara kapsamlı kardiyoloji hizmeti sunan bir kardiyoloğum. Klinik pratiğim; doğru tanı, kişiye özel tedavi planlaması ve güncel bilimsel veriler ile uluslararası kılavuzlara dayalı uzun dönem takibi esas almaktadır.'
        : 'I am a cardiologist providing comprehensive care for patients with a wide range of cardiovascular conditions. My clinical practice focuses on accurate diagnosis, individualized treatment plans, and long-term follow-up based on current scientific evidence and international guidelines.',
      language === 'tr' 
        ? 'Kardiyovasküler hastalıkların erken tanı ve risk değerlendirmesinden tedavi optimizasyonuna ve bakım sürekliliğine kadar tüm aşamalarını yönetmekteyim.'
        : 'I manage cardiovascular diseases across different stages, from early detection and risk evaluation to treatment optimization and continuity of care.',
    ]
  };

  const sections = [
    {
      icon: Heart,
      title: language === 'tr' ? 'Klinik Uygulama' : 'Clinical Practice',
      details: [
        language === 'tr' ? 'Doğru tanı ve teşhis' : 'Accurate diagnosis and assessment',
        language === 'tr' ? 'Kişiye özel tedavi planları' : 'Individualized treatment plans',
        language === 'tr' ? 'Kanıta dayalı yaklaşım' : 'Evidence-based approach',
      ]
    },
    {
      icon: Stethoscope,
      title: language === 'tr' ? 'Hasta Yönetimi' : 'Patient Management',
      details: [
        language === 'tr' ? 'Erken tanı ve risk değerlendirmesi' : 'Early detection and risk assessment',
        language === 'tr' ? 'Tedavi optimizasyonu' : 'Treatment optimization',
        language === 'tr' ? 'Bakım sürekliliği' : 'Continuity of care',
      ]
    },
    {
      icon: Brain,
      title: language === 'tr' ? 'Yaklaşımım' : 'My Approach',
      details: [
        language === 'tr' ? 'Net iletişim' : 'Clear communication',
        language === 'tr' ? 'Ortak karar alma' : 'Shared decision-making',
        language === 'tr' ? 'Bütüncül yaklaşım' : 'Holistic approach',
      ]
    },
    {
      icon: Activity,
      title: language === 'tr' ? 'Uzmanlık Alanları' : 'Specializations',
      details: [
        language === 'tr' ? 'Kalp yetmezliği' : 'Heart failure',
        language === 'tr' ? 'Koroner arter hastalığı' : 'Coronary artery disease',
        language === 'tr' ? 'Ritim bozuklukları' : 'Arrhythmias',
        language === 'tr' ? 'Hipertansiyon' : 'Hypertension'
      ]
    },
  ];

  const education = [
    {
      year: language === 'tr' ? '2018-2023' : '2018-2023',
      title: language === 'tr' ? 'Tıpta Uzmanlık' : 'Medical Specialty',
      institution: language === 'tr' ? 'Marmara Üniversitesi Tıp Fakültesi, Kardiyoloji' : 'Marmara University, Faculty of Medicine, Cardiology',
    },
    {
      year: language === 'tr' ? '2012-2018' : '2012-2018',
      title: language === 'tr' ? 'Tıp Fakültesi' : 'Medical School',
      institution: language === 'tr' ? 'Ondokuz Mayıs Üniversitesi' : 'Ondokuz Mayıs University',
    }
  ];

  const memberships = [
    language === 'tr' ? 'Türk Kardiyoloji Derneği' : 'Turkish Society of Cardiology',
    language === 'tr' ? 'Türk Tabipleri Birliği' : 'Turkish Medical Association',
  ];

  const titleParts = aboutContent.title.split(' ');
  const firstWord = titleParts[0];
  const remainingWords = titleParts.slice(1).join(' ');

  return (
    <section className="relative py-16 overflow-hidden bg-white">
      <div className="relative container-custom px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
            <Heart className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">
              {language === 'tr' ? 'Uzman Kardiyolog' : 'Board Certified Cardiologist'}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">{firstWord}</span>{' '}
            <span className="text-primary-600">
              {remainingWords}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600">
            {aboutContent.subtitle}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column: Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Introduction Card */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Dr. Redwan Seid Busery
                  </h2>
                  <p className="text-primary-600 font-medium">
                    {language === 'tr' ? 'Kardiyoloji Uzmanı' : 'Cardiology Specialist'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-700 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-5 h-5 text-primary-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  {language === 'tr' ? 'Eğitim' : 'Education'}
                </h2>
              </div>
              
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div className="text-primary-600 font-bold mb-2">{item.year}</div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-700">{item.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Sections */}
          <div className="space-y-8">
            {/* Sections Selector */}
            <div className="flex flex-wrap gap-2 mb-6">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveSection(index)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${activeSection === index 
                      ? 'bg-primary-50 border-primary-200' 
                      : 'bg-white border-gray-200 hover:border-primary-200'}`}
                  >
                    <Icon className={`w-4 h-4 ${activeSection === index ? 'text-primary-600' : 'text-gray-500'}`} />
                    <span className={`font-medium ${activeSection === index ? 'text-primary-700' : 'text-gray-700'}`}>
                      {section.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Section Details */}
            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                  {React.createElement(sections[activeSection]?.icon || Heart, { className: "w-6 h-6 text-white" })}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {sections[activeSection]?.title}
                  </h3>
                </div>
              </div>
              
              <div className="space-y-3">
                {(sections[activeSection]?.details || []).map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Memberships Section */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-primary-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  {language === 'tr' ? 'Üyelikler' : 'Memberships'}
                </h2>
              </div>
              
              <div className="space-y-3">
                {memberships.map((membership, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <Award className="w-4 h-4 text-primary-600" />
                    <span className="text-gray-800">{membership}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;