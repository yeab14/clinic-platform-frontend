import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Stethoscope, 
  Brain, 
  Activity, 
  Sparkles, 
  Target, 
  Users, 
  Shield, 
  Award, 
  Clock, 
  Calendar,
  FileText,
  BookOpen,
  GraduationCap,
  Star,
  CheckCircle
} from 'lucide-react';
import { useLocale } from '@/providers/LocaleProvider';

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const { content, language } = useLocale();
  
  // Get about content from locale - safely handle if content.about is undefined
  const aboutContent = content?.about || {
    title: language === 'tr' ? 'Hakkımda' : 'About Me',
    subtitle: language === 'tr' ? 'Kardiyoloji Uzmanı' : 'Cardiology Specialist',
    paragraphs: [
      language === 'tr' 
        ? 'Geniş bir yelpazedeki kardiyovasküler hastalıklara sahip hastalara kapsamlı kardiyoloji hizmeti sunan bir kardiyoloğum. Klinik pratiğim; doğru tanı, kişiye özel tedavi planlaması ve güncel bilimsel veriler ile uluslararası kılavuzlara dayalı uzun dönem takibi esas almaktadır.'
        : 'I am a cardiologist providing comprehensive care for patients with a wide range of cardiovascular conditions. My clinical practice focuses on accurate diagnosis, individualized treatment planning, and long-term follow-up based on current scientific evidence and international guidelines.',
      language === 'tr' 
        ? 'Kardiyovasküler hastalıkların erken tanı ve risk değerlendirmesinden tedavi optimizasyonuna ve bakım sürekliliğine kadar tüm aşamalarını yönetmekteyim. İleri tanısal veya tedavi edici işlemler gerektiğinde, güvenli, zamanında ve entegre hasta yönetimi sağlamak amacıyla uzman merkezlerle iş birliği içinde koordinasyon sağlamaktayım.'
        : 'I manage cardiovascular diseases across different stages, from early detection and risk evaluation to treatment optimization and continuity of care. When advanced diagnostic or therapeutic procedures are required, I coordinate patient care in collaboration with specialized centers to ensure safe, timely, and integrated management.',
      language === 'tr' 
        ? 'Hasta-hekim iletişimi, ortak karar alma ve bireysel hasta ihtiyaçlarını gözeten bütüncül bir yaklaşım benim için önceliklidir.'
        : 'I place strong emphasis on clear communication, shared decision-making, and a holistic approach that considers both medical findings and individual patient needs.'
    ]
  };

  // Sections for the About page
  const sections = [
    {
      icon: Heart,
      title: language === 'tr' ? 'Klinik Uygulama' : 'Clinical Practice',
      color: 'from-primary-600 to-blue-500',
      iconBg: 'bg-gradient-to-br from-primary-600/20 to-blue-500/20',
      gradient: 'from-primary-600/10 via-primary-500/5 to-blue-500/10',
      details: [
        language === 'tr' ? 'Doğru tanı ve teşhis' : 'Accurate diagnosis and assessment',
        language === 'tr' ? 'Kişiye özel tedavi planları' : 'Individualized treatment plans',
        language === 'tr' ? 'Kanıta dayalı yaklaşım' : 'Evidence-based approach',
        language === 'tr' ? 'Uluslararası kılavuz uyumu' : 'International guideline compliance'
      ],
      stat: language === 'tr' ? '98% doğru teşhis' : '98% accurate diagnosis'
    },
    {
      icon: Stethoscope,
      title: language === 'tr' ? 'Hasta Yönetimi' : 'Patient Management',
      color: 'from-primary-700 to-primary-800',
      iconBg: 'bg-gradient-to-br from-primary-700/20 to-primary-800/20',
      gradient: 'from-primary-700/10 via-primary-600/5 to-primary-800/10',
      details: [
        language === 'tr' ? 'Erken tanı ve risk değerlendirmesi' : 'Early detection and risk assessment',
        language === 'tr' ? 'Tedavi optimizasyonu' : 'Treatment optimization',
        language === 'tr' ? 'Bakım sürekliliği' : 'Continuity of care',
        language === 'tr' ? 'İleri tanısal işlem koordinasyonu' : 'Advanced procedure coordination'
      ],
      stat: language === 'tr' ? '+1.000 hasta' : '+1,000 patients'
    },
    {
      icon: Brain,
      title: language === 'tr' ? 'Yaklaşımım' : 'My Approach',
      color: 'from-blue-500 to-primary-600',
      iconBg: 'bg-gradient-to-br from-blue-500/20 to-primary-600/20',
      gradient: 'from-blue-500/10 via-blue-400/5 to-primary-600/10',
      details: [
        language === 'tr' ? 'Net iletişim' : 'Clear communication',
        language === 'tr' ? 'Ortak karar alma' : 'Shared decision-making',
        language === 'tr' ? 'Bütüncül yaklaşım' : 'Holistic approach',
        language === 'tr' ? 'Bireysel hasta ihtiyaçları' : 'Individual patient needs'
      ],
      stat: language === 'tr' ? '96% hasta memnuniyeti' : '96% patient satisfaction'
    },
    {
      icon: Activity,
      title: language === 'tr' ? 'Uzmanlık Alanları' : 'Specializations',
      color: 'from-primary-600 to-emerald-500',
      iconBg: 'bg-gradient-to-br from-primary-600/20 to-emerald-500/20',
      gradient: 'from-primary-600/10 via-primary-500/5 to-emerald-500/10',
      details: [
        language === 'tr' ? 'Kalp yetmezliği' : 'Heart failure',
        language === 'tr' ? 'Koroner arter hastalığı' : 'Coronary artery disease',
        language === 'tr' ? 'Ritim bozuklukları' : 'Arrhythmias',
        language === 'tr' ? 'Hipertansiyon' : 'Hypertension'
      ],
      stat: language === 'tr' ? '12+ yayın' : '12+ publications'
    },
  ];

  const floatingElements = [
    { icon: Heart, style: 'top-1/4 left-5 w-8 h-8 text-primary-400/20' },
    { icon: Stethoscope, style: 'top-3/4 right-10 w-10 h-10 text-primary-300/15' },
    { icon: Brain, style: 'bottom-1/3 left-8 w-12 h-12 text-primary-500/10' },
    { icon: Target, style: 'top-10 right-1/4 w-6 h-6 text-primary-400/20' }
  ];

  // Education timeline
  const education = [
    {
      year: language === 'tr' ? '2018-2023' : '2018-2023',
      title: language === 'tr' ? 'Tıpta Uzmanlık' : 'Medical Specialty',
      institution: language === 'tr' ? 'Marmara Üniversitesi Tıp Fakültesi, Kardiyoloji Anabilim Dalı' : 'Marmara University, Faculty of Medicine, Department of Cardiology',
      location: language === 'tr' ? 'İstanbul, Türkiye' : 'Istanbul, Turkey',
      description: language === 'tr' ? 'Kardiyoloji uzmanlık eğitimi' : 'Cardiology specialty training'
    },
    {
      year: language === 'tr' ? '2012-2018' : '2012-2018',
      title: language === 'tr' ? 'Tıp Fakültesi' : 'Medical School',
      institution: language === 'tr' ? 'Ondokuz Mayıs Üniversitesi' : 'Ondokuz Mayıs University',
      location: language === 'tr' ? 'Samsun, Türkiye' : 'Samsun, Turkey',
      description: language === 'tr' ? 'Tıp doktoru derecesi' : 'Doctor of Medicine degree'
    }
  ];

  // Memberships
  const memberships = [
    language === 'tr' ? 'Türk Kardiyoloji Derneği (Asıl Üye)' : 'Turkish Society of Cardiology (Full Member)',
    language === 'tr' ? 'Türk Tabipleri Birliği' : 'Turkish Medical Association',
    language === 'tr' ? 'TKD Girişimsel Kardiyoloji Çalışma Grubu' : 'TKD Interventional Cardiology Working Group',
    language === 'tr' ? 'TKD Aritmi, Kapak Hastalıkları, Kardiyak Görüntüleme ve Pulmoner Vasküler Hastalıklar Çalışma Grupları' : 'TKD Arrhythmia, Valvular Heart Diseases, Cardiac Imaging, and Pulmonary Vascular Working Groups'
  ];

  // Safely split title
  const titleParts = aboutContent.title.split(' ');
  const firstWord = titleParts[0];
  const remainingWords = titleParts.slice(1).join(' ');

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Elements */}
        {floatingElements.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 8 + index * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`absolute ${item.style}`}
            >
              <Icon className="w-full h-full" />
            </motion.div>
          );
        })}
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-400/10 to-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary-500/5 to-primary-700/5 rounded-full blur-3xl" />
        
        {/* Medical Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1d4ed8 1px, transparent 0)`,
            backgroundSize: '40px 40px'
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
              {language === 'tr' ? 'Uzman Kardiyolog' : 'Board Certified Cardiologist'}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">{firstWord}</span>{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-teal bg-clip-text text-transparent">
                {remainingWords}
              </span>
              <motion.div
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary-500 via-accent-teal to-primary-500 rounded-full"
              />
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 font-medium mb-10">
            {aboutContent.subtitle}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Introduction Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {language === 'tr' ? 'Dr. Redwan Seid Busery' : 'Dr. Redwan Seid Busery'}
                  </h2>
                  <p className="text-primary-600 font-medium">
                    {language === 'tr' ? 'Kardiyoloji Uzmanı' : 'Cardiology Specialist'}
                  </p>
                </div>
              </div>
              
              {/* Biography */}
              <div className="space-y-6">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-700 leading-relaxed text-lg"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              
              {/* Professional Highlights */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-8 pt-6 border-t border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {language === 'tr' ? 'Profesyonel Özellikler' : 'Professional Highlights'}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Calendar, label: language === 'tr' ? '6+ Yıl Deneyim' : '6+ Years Experience' },
                    { icon: Award, label: language === 'tr' ? 'Uzman Kardiyolog' : 'Board Certified' },
                    { icon: Users, label: language === 'tr' ? '1.000+ Hasta' : '1,000+ Patients' },
                    { icon: Star, label: language === 'tr' ? '96% Memnuniyet' : '96% Satisfaction' },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-primary-50 rounded-xl"
                      >
                        <Icon className="w-5 h-5 text-primary-600" />
                        <span className="text-sm font-medium text-gray-800">{item.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Education Section */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-3xl p-8 border border-primary-100">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'tr' ? 'Eğitim' : 'Education'}
                </h2>
              </div>
              
              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 pb-6 border-l-2 border-primary-300 last:pb-0"
                  >
                    <div className="absolute -left-2.5 top-0 w-5 h-5 bg-primary-600 rounded-full" />
                    <div className="text-primary-600 font-bold mb-1">{item.year}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-700 font-medium mb-1">{item.institution}</p>
                    <p className="text-gray-600 text-sm mb-2">{item.location}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Sections */}
          <div className="space-y-8">
            {/* Interactive Sections Selector */}
            <div className="flex flex-wrap gap-3 mb-8">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={index}
                    onClick={() => setActiveSection(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all ${activeSection === index 
                      ? 'bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200 shadow-md' 
                      : 'bg-white border-gray-200 hover:border-primary-200'}`}
                  >
                    <div className={`w-10 h-10 rounded-lg ${section.iconBg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${activeSection === index ? 'text-primary-600' : 'text-gray-500'}`} />
                    </div>
                    <span className={`font-medium ${activeSection === index ? 'text-primary-700' : 'text-gray-700'}`}>
                      {section.title}
                    </span>
                    {activeSection === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Active Section Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`bg-gradient-to-br ${sections[activeSection]?.gradient || 'from-primary-600/10 via-primary-500/5 to-blue-500/10'} rounded-3xl p-8 border border-gray-100 shadow-xl overflow-hidden`}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #1d4ed8 1px, transparent 0)`,
                    backgroundSize: '30px 30px'
                  }} />
                </div>
                
                {/* Section Header */}
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sections[activeSection]?.color || 'from-primary-600 to-blue-500'} flex items-center justify-center shadow-lg`}
                  >
                    {React.createElement(sections[activeSection]?.icon || Heart, { className: "w-8 h-8 text-white" })}
                  </motion.div>
                  
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {sections[activeSection]?.title || (language === 'tr' ? 'Klinik Uygulama' : 'Clinical Practice')}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 rounded-full">
                      <Sparkles className="w-3 h-3 text-primary-600" />
                      <span className="text-sm font-medium text-primary-700">
                        {sections[activeSection]?.stat || (language === 'tr' ? '98% doğru teşhis' : '98% accurate diagnosis')}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Section Details */}
                <div className="space-y-4 mb-8 relative z-10">
                  {(sections[activeSection]?.details || []).map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Memberships Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'tr' ? 'Üyelikler' : 'Memberships'}
                </h2>
              </div>
              
              <div className="space-y-4">
                {memberships.map((membership, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-primary-50/50 rounded-xl hover:bg-primary-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <Award className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="font-medium text-gray-800">{membership}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { 
                  value: "98%", 
                  label: language === 'tr' ? 'Doğruluk' : 'Accuracy', 
                  icon: Target,
                  color: 'text-emerald-600',
                  bg: 'bg-emerald-50'
                },
                { 
                  value: "30 dk", 
                  label: language === 'tr' ? 'Muayene' : 'Consultation', 
                  icon: Clock,
                  color: 'text-primary-600',
                  bg: 'bg-primary-50'
                },
                { 
                  value: "12+", 
                  label: language === 'tr' ? 'Yayın' : 'Publications', 
                  icon: FileText,
                  color: 'text-purple-600',
                  bg: 'bg-purple-50'
                },
                { 
                  value: "6+", 
                  label: language === 'tr' ? 'Yıl' : 'Years', 
                  icon: Calendar,
                  color: 'text-blue-600',
                  bg: 'bg-blue-50'
                },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`${stat.bg} rounded-2xl p-5 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all`}
                  >
                    <Icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 bg-gradient-to-r from-primary-600/5 to-primary-700/5 rounded-3xl p-8 md:p-12 border border-primary-100"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {language === 'tr' ? 'Tıbbi Felsefem' : 'Medical Philosophy'}
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {language === 'tr' 
                ? 'Hastalarıma sadece bir kalp hastalığı değil, bütüncül bir insan olarak yaklaşıyorum. Tıbbi kararlarımızı birlikte alarak, tedavi planlarını her hastanın benzersiz ihtiyaçlarına ve yaşam tarzına göre uyarlıyorum.'
                : 'I approach my patients not just as a heart condition, but as a whole person. By making medical decisions together, I adapt treatment plans to each patient\'s unique needs and lifestyle.'
              }
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                language === 'tr' ? 'Kanıta Dayalı Tıp' : 'Evidence-Based Medicine',
                language === 'tr' ? 'Hasta Merkezli Bakım' : 'Patient-Centered Care',
                language === 'tr' ? 'Bütüncül Yaklaşım' : 'Holistic Approach',
                language === 'tr' ? 'Sürekli Eğitim' : 'Continuous Education'
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-primary-200 shadow-sm"
                >
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span className="text-sm font-medium text-gray-700">{principle}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;