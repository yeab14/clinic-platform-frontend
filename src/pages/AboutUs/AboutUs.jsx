import React, { useState } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import {
  Activity,
  ArrowRight,
  Award,
  Brain,
  Calendar,
  CheckCircle,
  ChevronRight,
  Globe,
  GraduationCap,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Shield,
  Sparkles,
  Stethoscope,
  Users,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { useLocale } from '@/providers/LocaleProvider';

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const { content, language } = useLocale();
  
  // Get about content from locale
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

  // Enhanced sections with more detail
  const sections = [
    {
      icon: Heart,
      title: language === 'tr' ? 'Klinik Uygulama' : 'Clinical Practice',
      subtitle: language === 'tr' ? 'Kanıta Dayalı Kardiyoloji' : 'Evidence-Based Cardiology',
      description: language === 'tr' 
        ? 'Tüm teşhis ve tedavi yaklaşımlarım, en güncel bilimsel araştırmalar ve uluslararası kılavuzlar temelinde şekillenir. Her hastanın benzersiz ihtiyaçlarını anlayarak, kişiselleştirilmiş tedavi planları geliştiriyorum.'
        : 'All my diagnostic and treatment approaches are shaped based on the latest scientific research and international guidelines. Understanding each patient\'s unique needs, I develop personalized treatment plans.',
      color: 'from-primary-600 to-blue-500',
      iconBg: 'bg-gradient-to-br from-primary-600/20 to-blue-500/20',
      gradient: 'from-primary-600/10 via-primary-500/5 to-blue-500/10',
      details: [
        language === 'tr' ? 'Güncel bilimsel verilerle doğru tanı' : 'Accurate diagnosis with current scientific data',
        language === 'tr' ? 'Kişiye özel tedavi stratejileri' : 'Personalized treatment strategies',
        language === 'tr' ? 'Uluslararası kılavuzlarla uyumlu bakım' : 'Care aligned with international guidelines',
        language === 'tr' ? 'Detaylı uzun dönem takip' : 'Detailed long-term follow-up'
      ],
      stat: '98%',
      statLabel: language === 'tr' ? 'Doğru Teşhis Oranı' : 'Accurate Diagnosis Rate'
    },
    {
      icon: Stethoscope,
      title: language === 'tr' ? 'Hasta Yönetimi' : 'Patient Management',
      subtitle: language === 'tr' ? 'Bütüncül Yaklaşım' : 'Holistic Approach',
      description: language === 'tr' 
        ? 'Hastalığın tüm evrelerinde kapsamlı yönetim sağlıyorum. İleri tıbbi prosedürler gerektiğinde, önde gelen sağlık merkezleriyle koordinasyon kurarak hastalarımın en iyi bakımı almasını sağlıyorum.'
        : 'I provide comprehensive management across all stages of disease. When advanced medical procedures are required, I coordinate with leading healthcare centers to ensure my patients receive the best care.',
      color: 'from-primary-700 to-primary-800',
      iconBg: 'bg-gradient-to-br from-primary-700/20 to-primary-800/20',
      gradient: 'from-primary-700/10 via-primary-600/5 to-primary-800/10',
      details: [
        language === 'tr' ? 'Erken tanı ve risk değerlendirmesi' : 'Early detection and risk assessment',
        language === 'tr' ? 'Tedavi optimizasyonu ve takip' : 'Treatment optimization and follow-up',
        language === 'tr' ? 'Uzman merkez koordinasyonu' : 'Specialist center coordination',
        language === 'tr' ? 'Bakım sürekliliği garantisi' : 'Guaranteed continuity of care'
      ],
      stat: '1,000+',
      statLabel: language === 'tr' ? 'Tedavi Edilen Hasta' : 'Patients Treated'
    },
    {
      icon: Brain,
      title: language === 'tr' ? 'İletişim Yaklaşımı' : 'Communication Approach',
      subtitle: language === 'tr' ? 'Hasta-Odaklı İletişim' : 'Patient-Centered Communication',
      description: language === 'tr' 
        ? 'Net ve şeffaf iletişim, tedavi sürecinin başarısında kritik öneme sahiptir. Hastalarımın tedavi kararlarına aktif katılımını teşvik ederek, birlikte en iyi sağlık sonuçlarına ulaşıyoruz.'
        : 'Clear and transparent communication is critical to the success of the treatment process. By encouraging my patients to actively participate in treatment decisions, we achieve the best health outcomes together.',
      color: 'from-blue-500 to-primary-600',
      iconBg: 'bg-gradient-to-br from-blue-500/20 to-primary-600/20',
      gradient: 'from-blue-500/10 via-blue-400/5 to-primary-600/10',
      details: [
        language === 'tr' ? 'Net ve anlaşılır tıbbi bilgilendirme' : 'Clear and understandable medical information',
        language === 'tr' ? 'Ortak karar alma süreçleri' : 'Shared decision-making processes',
        language === 'tr' ? 'Bireysel hasta ihtiyaçlarını dinleme' : 'Listening to individual patient needs',
        language === 'tr' ? 'Şeffaf tedavi planı paylaşımı' : 'Transparent treatment plan sharing'
      ],
      stat: '96%',
      statLabel: language === 'tr' ? 'Hasta Memnuniyeti' : 'Patient Satisfaction'
    },
    {
      icon: Activity,
      title: language === 'tr' ? 'Uzmanlık Alanları' : 'Specialization Areas',
      subtitle: language === 'tr' ? 'İleri Kardiyoloji' : 'Advanced Cardiology',
      description: language === 'tr' 
        ? 'Geniş bir kardiyovasküler hastalık yelpazesinde uzmanlaşmış olup, her durum için en uygun tanı ve tedavi yaklaşımlarını sunuyorum. Sürekli eğitimle bilgilerimi güncel tutuyorum.'
        : 'Specializing in a wide range of cardiovascular diseases, I provide the most appropriate diagnostic and treatment approaches for each condition. I keep my knowledge current through continuous education.',
      color: 'from-primary-600 to-emerald-500',
      iconBg: 'bg-gradient-to-br from-primary-600/20 to-emerald-500/20',
      gradient: 'from-primary-600/10 via-primary-500/5 to-emerald-500/10',
      details: [
        language === 'tr' ? 'Kalp yetmezliği yönetimi' : 'Heart failure management',
        language === 'tr' ? 'Koroner arter hastalığı teşhisi' : 'Coronary artery disease diagnosis',
        language === 'tr' ? 'Ritim bozuklukları tedavisi' : 'Arrhythmia treatment',
        language === 'tr' ? 'Hipertansiyon kontrolü' : 'Hypertension control'
      ],
      stat: '12+',
      statLabel: language === 'tr' ? 'Bilimsel Yayın' : 'Scientific Publications'
    },
  ];

  // Enhanced Education timeline with more detail
  const education = [
    {
      year: language === 'tr' ? '2018-2023' : '2018-2023',
      title: language === 'tr' ? 'Tıpta Uzmanlık' : 'Medical Specialty',
      institution: language === 'tr' ? 'Marmara Üniversitesi Tıp Fakültesi' : 'Marmara University Faculty of Medicine',
      department: language === 'tr' ? 'Kardiyoloji Anabilim Dalı' : 'Department of Cardiology',
      location: language === 'tr' ? 'İstanbul, Türkiye' : 'Istanbul, Turkey',
      description: language === 'tr' 
        ? '5 yıllık kapsamlı kardiyoloji uzmanlık eğitimi. Modern kardiyak görüntüleme, invaziv prosedürler ve hasta yönetimi konularında ileri düzey eğitim.'
        : '5-year comprehensive cardiology specialty training. Advanced training in modern cardiac imaging, invasive procedures, and patient management.',
      highlights: [
        language === 'tr' ? 'İleri kardiyak görüntüleme teknikleri' : 'Advanced cardiac imaging techniques',
        language === 'tr' ? 'Girişimsel kardiyoloji prosedürleri' : 'Interventional cardiology procedures',
        language === 'tr' ? 'Klinik hasta yönetimi' : 'Clinical patient management'
      ]
    },
    {
      year: language === 'tr' ? '2012-2018' : '2012-2018',
      title: language === 'tr' ? 'Tıp Fakültesi' : 'Medical School',
      institution: language === 'tr' ? 'Ondokuz Mayıs Üniversitesi' : 'Ondokuz Mayıs University',
      department: language === 'tr' ? 'Tıp Fakültesi' : 'Faculty of Medicine',
      location: language === 'tr' ? 'Samsun, Türkiye' : 'Samsun, Turkey',
      description: language === 'tr' 
        ? '6 yıllık tıp eğitimi. Temel tıp bilimleri, klinik rotasyonlar ve mezuniyet sonrası intörn doktorluk dönemi.'
        : '6-year medical education. Basic medical sciences, clinical rotations, and post-graduate internship period.',
      highlights: [
        language === 'tr' ? 'Temel tıp bilimleri eğitimi' : 'Basic medical sciences education',
        language === 'tr' ? 'Klinik rotasyon deneyimi' : 'Clinical rotation experience',
        language === 'tr' ? 'Mezuniyet sonrası intörn doktorluk' : 'Post-graduate internship'
      ]
    }
  ];

  // Enhanced Memberships with descriptions
  const memberships = [
    {
      name: language === 'tr' ? 'Türk Kardiyoloji Derneği' : 'Turkish Society of Cardiology',
      type: language === 'tr' ? 'Asıl Üye' : 'Full Member',
      description: language === 'tr' 
        ? 'Türkiye\'nin önde gelen kardiyoloji derneği, bilimsel gelişmeler ve mesleki standartlar'
        : 'Turkey\'s leading cardiology society for scientific developments and professional standards'
    },
    {
      name: language === 'tr' ? 'Türk Tabipleri Birliği' : 'Turkish Medical Association',
      type: language === 'tr' ? 'Üye' : 'Member',
      description: language === 'tr' 
        ? 'Türk hekimlerinin meslek örgütü, etik standartlar ve mesleki haklar'
        : 'Professional organization of Turkish physicians, ethical standards and professional rights'
    },
    {
      name: language === 'tr' ? 'TKD Girişimsel Kardiyoloji Çalışma Grubu' : 'TKD Interventional Cardiology Working Group',
      type: language === 'tr' ? 'Çalışma Grubu Üyesi' : 'Working Group Member',
      description: language === 'tr' 
        ? 'Girişimsel kardiyoloji alanında uzmanlaşma ve bilgi paylaşımı'
        : 'Specialization and knowledge sharing in interventional cardiology'
    },
    {
      name: language === 'tr' ? 'TKD Aritmi, Kapak Hastalıkları, Kardiyak Görüntüleme ve Pulmoner Vasküler Hastalıklar Çalışma Grupları' : 'TKD Arrhythmia, Valvular Heart Diseases, Cardiac Imaging, and Pulmonary Vascular Working Groups',
      type: language === 'tr' ? 'Çoklu Çalışma Grubu Üyeliği' : 'Multiple Working Group Membership',
      description: language === 'tr' 
        ? 'Kardiyolojinin çeşitli alt uzmanlık alanlarında sürekli eğitim ve gelişim'
        : 'Continuous education and development in various cardiology subspecialties'
    }
  ];

  // Practice principles
  const principles = [
    {
      icon: Shield,
      title: language === 'tr' ? 'Kanıta Dayalı Tıp' : 'Evidence-Based Medicine',
      description: language === 'tr' 
        ? 'Tüm tıbbi kararlar en güncel bilimsel araştırmalar ve uluslararası kılavuzlar temelinde verilir'
        : 'All medical decisions are based on the latest scientific research and international guidelines'
    },
    {
      icon: Users,
      title: language === 'tr' ? 'Hasta Merkezli Bakım' : 'Patient-Centered Care',
      description: language === 'tr' 
        ? 'Her hasta benzersizdir; tedavi planları kişisel ihtiyaçlara ve yaşam tarzına göre uyarlanır'
        : 'Each patient is unique; treatment plans are tailored to personal needs and lifestyle'
    },
    {
      icon: MessageSquare,
      title: language === 'tr' ? 'Şeffaf İletişim' : 'Transparent Communication',
      description: language === 'tr' 
        ? 'Tüm tıbbi bilgiler açık ve anlaşılır şekilde paylaşılır, hasta soruları özenle yanıtlanır'
        : 'All medical information is shared clearly and understandably, patient questions are carefully answered'
    },
    {
      icon: Globe,
      title: language === 'tr' ? 'Uluslararası Standartlar' : 'International Standards',
      description: language === 'tr' 
        ? 'Tanı ve tedavi yaklaşımları dünya çapında kabul görmüş kılavuzlara uygun şekilde uygulanır'
        : 'Diagnostic and treatment approaches are applied in accordance with globally accepted guidelines'
    }
  ];

  // Contact information
  const contactInfo = [
    {
      icon: MapPin,
      title: language === 'tr' ? 'Hastane Adresi' : 'Hospital Address',
      content: 'Çavuşoğlu, Sanayi Cd. No:1, 34873 Kartal / İstanbul',
      link: 'https://maps.google.com/?q=Çavuşoğlu,+Sanayi+Cd.+No:1,+34873+Kartal/İstanbul',
      linkText: language === 'tr' ? 'Haritada göster' : 'View on Map'
    },
    {
      icon: Phone,
      title: language === 'tr' ? 'Telefon (WhatsApp)' : 'Phone (WhatsApp)',
      content: '+90 553 418 6776',
      link: 'https://wa.me/905534186776',
      linkText: language === 'tr' ? 'WhatsApp\'tan yaz' : 'Message on WhatsApp'
    },
    {
      icon: Mail,
      title: language === 'tr' ? 'E-posta' : 'Email',
      content: 'redwan.busery@acibadem.com',
      link: 'mailto:redwan.busery@acibadem.com',
      linkText: language === 'tr' ? 'E-posta gönder' : 'Send Email'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'linkedin.com/in/redwan-seid-busery-cardiyology',
      link: 'https://linkedin.com/in/redwan-seid-busery-cardiyology',
      linkText: language === 'tr' ? 'Profili görüntüle' : 'View Profile'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/20 to-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary-500/5 to-primary-700/5 rounded-full blur-3xl" />
        
        {/* Floating Elements */}
        {[Heart, Stethoscope, Brain, Activity].map((Icon, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(index) * 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + index * 3,
              repeat: Infinity,
              delay: index * 1,
            }}
            className={`absolute w-12 h-12 text-primary-200/10 ${
              index === 0 ? 'top-20 left-10' :
              index === 1 ? 'top-1/3 right-20' :
              index === 2 ? 'bottom-1/3 left-1/4' :
              'bottom-20 right-10'
            }`}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        ))}
      </div>

      <div className="relative container-custom px-4 py-12 md:py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary-600 animate-pulse" />
            <span className="text-sm font-medium text-primary-700">
              {language === 'tr' ? 'Uzman Kardiyolog' : 'Board Certified Cardiologist'}
            </span>
          </motion.div>
          
 

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">{aboutContent.title.split(' ')[0]}</span>{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-blue-500 bg-clip-text text-transparent">
                {aboutContent.title.split(' ').slice(1).join(' ')}
              </span>
              <motion.div
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-primary-500 rounded-full"
              />
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 font-medium mb-10">
            <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">
              {aboutContent.subtitle}
            </span>
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Introduction Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Dr. Redwan Seid Busery
                  </h2>
                  <p className="text-primary-600 font-medium text-lg">
                    {language === 'tr' ? 'Kardiyoloji Uzmanı' : 'Cardiology Specialist'}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {language === 'tr' ? '2018\'den Beri Uzman Kardiyolog' : 'Board Certified Cardiologist Since 2018'}
                  </p>
                </div>
              </div>
              
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
            </motion.div>

            {/* Education Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8 border border-primary-100 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-8 h-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'tr' ? 'Eğitim Geçmişi' : 'Educational Background'}
                </h2>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative pl-10 pb-8 ${index < education.length - 1 ? 'border-l-2 border-primary-300' : ''}`}
                    onMouseEnter={() => setActiveTimeline(index)}
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gradient-to-br from-primary-600 to-blue-500 rounded-full shadow-lg" />
                    <div className="text-primary-600 font-bold text-lg mb-1">{edu.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.title}</h3>
                    <div className="space-y-2 mb-3">
                      <p className="text-gray-800 font-medium">{edu.institution}</p>
                      <p className="text-gray-600">{edu.department}</p>
                      <p className="text-gray-500 text-sm">{edu.location}</p>
                    </div>
                    <p className="text-gray-700 mb-3">{edu.description}</p>
                    
                    {/* Highlights */}
                    <div className="space-y-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Interactive Sections */}
          <div className="space-y-8">
            {/* Practice Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {language === 'tr' ? 'Tıbbi İlkelerim' : 'Medical Principles'}
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary-600" />
                        </div>
                        <h3 className="font-bold text-gray-900">{principle.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{principle.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Interactive Professional Sections */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <motion.button
                      key={index}
                      onClick={() => setActiveSection(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all ${activeSection === index 
                        ? 'bg-gradient-to-r from-primary-600 to-blue-500 text-white shadow-lg' 
                        : 'bg-white border-gray-200 hover:border-primary-300 hover:shadow-md'}`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{section.title}</span>
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
                  className={`bg-gradient-to-br ${sections[activeSection]?.gradient || 'from-primary-600/10 via-primary-500/5 to-blue-500/10'} rounded-3xl p-8 border border-primary-100 shadow-lg`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sections[activeSection]?.color || 'from-primary-600 to-blue-500'} flex items-center justify-center shadow-lg`}>
                      {React.createElement(sections[activeSection]?.icon || Heart, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {sections[activeSection]?.title}
                      </h3>
                      <p className="text-primary-600 font-medium">
                        {sections[activeSection]?.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    {sections[activeSection]?.description}
                  </p>
                  
                  <div className="space-y-3">
                    {sections[activeSection]?.details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-800">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-primary-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{sections[activeSection]?.statLabel}</span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">
                        {sections[activeSection]?.stat}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-600 to-blue-500 rounded-3xl p-8 text-white shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6">
                {language === 'tr' ? 'İletişim Bilgileri' : 'Contact Information'}
              </h2>
              
              <div className="space-y-4 mb-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="text-sm text-blue-200 mb-1">{info.title}</div>
                        <div className="font-medium mb-1">{info.content}</div>
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-100 hover:text-white transition-colors inline-flex items-center gap-1"
                        >
                          {info.linkText}
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 w-full py-3 bg-white text-primary-700 font-bold rounded-xl hover:bg-blue-50 transition-all"
              >
                <span>{language === 'tr' ? 'İletişim Sayfası' : 'Contact Page'}</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Memberships Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              {language === 'tr' ? 'Profesyonel Üyelikler' : 'Professional Memberships'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {memberships.map((membership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl border border-primary-100 hover:border-primary-300 transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">{membership.name}</h3>
                  <div className="inline-flex items-center gap-2 px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-2">
                    {membership.type}
                  </div>
                  <p className="text-sm text-gray-600">{membership.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-blue-500 rounded-3xl p-12 text-white shadow-2xl overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  {language === 'tr' ? 'Kardiyoloji Konsültasyonu' : 'Cardiology Consultation'}
                </h2>
                <p className="text-blue-100 text-lg mb-6 max-w-2xl">
                  {language === 'tr'
                    ? 'Kişiselleştirilmiş kardiyoloji değerlendirmesi için randevu alın. Kanıta dayalı yaklaşımım ve uluslararası standartlardaki uzmanlığımla sağlık yolculuğunuzda yanınızdayım.'
                    : 'Book an appointment for personalized cardiology assessment. With my evidence-based approach and international standard expertise, I am with you on your health journey.'
                  }
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-200" />
                    <span>{language === 'tr' ? 'Gizlilik Garantili' : 'Privacy Guaranteed'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-200" />
                    <span>{language === 'tr' ? 'Hızlı Yanıt' : 'Fast Response'}</span>
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
      </div>
    </div>
  );
};

export default About;