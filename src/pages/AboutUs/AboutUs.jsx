import React, { useState } from 'react';

import { motion } from 'framer-motion';
import {
  Activity,
  Activity as ActivityIcon,
  Award,
  Brain,
  CheckCircle,
  GraduationCap,
  Heart,
  Heart as HeartIcon,
  Shield,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

import { useLocale } from '@/providers/LocaleProvider';

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const { content, language } = useLocale();

  const aboutContent = content?.about || {
    title: language === "tr" ? "Hakkımda" : "About Me",
    subtitle:
      language === "tr" ? "Kardiyoloji Uzmanı" : "Cardiology Specialist",
    paragraphs: [
      language === "tr"
        ? "Geniş bir yelpazedeki kardiyovasküler hastalıklara sahip hastalara kapsamlı kardiyoloji hizmeti sunan bir kardiyoloğum. Klinik pratiğim; doğru tanı, kişiye özel tedavi planlaması ve güncel bilimsel veriler ile uluslararası kılavuzlara dayalı uzun dönem takibi esas almaktadır."
        : "I am a cardiologist providing comprehensive care for patients with a wide range of cardiovascular conditions. My clinical practice focuses on accurate diagnosis, individualized treatment plans, and long-term follow-up based on current scientific evidence and international guidelines.",
      language === "tr"
        ? "Kardiyovasküler hastalıkların erken tanı ve risk değerlendirmesinden tedavi optimizasyonuna ve bakım sürekliliğine kadar tüm aşamalarını yönetmekteyim."
        : "I manage cardiovascular diseases across different stages, from early detection and risk evaluation to treatment optimization and continuity of care.",
    ],
  };

  const clinicalInterests = [
    {
      icon: HeartIcon,
      title: language === "tr" ? "Kalp yetmezliği" : "Heart failure",
      description: language === "tr" 
        ? "Akut ve kronik kalp yetmezliği yönetimi"
        : "Acute and chronic heart failure management"
    },
    {
      icon: ActivityIcon,
      title: language === "tr" ? "Koroner arter hastalığı" : "Coronary artery disease",
      description: language === "tr"
        ? "Tanı, stentleme ve medikal tedavi"
        : "Diagnosis, stenting and medical therapy"
    },
    {
      icon: Zap,
      title: language === "tr" ? "Ritim bozuklukları" : "Arrhythmias",
      description: language === "tr"
        ? "Aritmi tanı ve tedavisi"
        : "Arrhythmia diagnosis and treatment"
    },
    {
      icon: TrendingUp,
      title: language === "tr" ? "Hipertansiyon" : "Hypertension",
      description: language === "tr"
        ? "Kan basıncı kontrolü ve yönetimi"
        : "Blood pressure control and management"
    },
    {
      icon: Shield,
      title: language === "tr" ? "Kapak hastalıkları" : "Valvular heart disease",
      description: language === "tr"
        ? "Kapak hastalıkları tanı ve takibi"
        : "Valvular disease diagnosis and follow-up"
    },
    {
      icon: Target,
      title: language === "tr" ? "Aort ve periferik damar hastalıkları" : "Aortic and peripheral vascular diseases",
      description: language === "tr"
        ? "Vasküler hastalıkların yönetimi"
        : "Vascular disease management"
    },
    {
      icon: Activity,
      title: language === "tr" ? "Pulmoner hipertansiyon" : "Pulmonary hypertension",
      description: language === "tr"
        ? "Akciğer damar basıncı bozuklukları"
        : "Pulmonary vascular pressure disorders"
    },
    {
      icon: Brain,
      title: language === "tr" ? "Koruyucu kardiyoloji ve kardiyovasküler risk değerlendirmesi" : "Preventive cardiology and cardiovascular risk assessment",
      description: language === "tr"
        ? "Risk faktörü yönetimi ve koruyucu tedaviler"
        : "Risk factor management and preventive therapies"
    },
  ];

  const sections = [
    {
      icon: Heart,
      title: language === "tr" ? "Klinik Uygulama" : "Clinical Practice",
      details: [
        language === "tr"
          ? "Doğru tanı ve teşhis"
          : "Accurate diagnosis and assessment",
        language === "tr"
          ? "Kişiye özel tedavi planları"
          : "Individualized treatment plans",
        language === "tr"
          ? "Kanıta dayalı yaklaşım"
          : "Evidence-based approach",
      ],
    },
    {
      icon: Stethoscope,
      title: language === "tr" ? "Hasta Yönetimi" : "Patient Management",
      details: [
        language === "tr"
          ? "Erken tanı ve risk değerlendirmesi"
          : "Early detection and risk assessment",
        language === "tr" ? "Tedavi optimizasyonu" : "Treatment optimization",
        language === "tr" ? "Bakım sürekliliği" : "Continuity of care",
      ],
    },
    {
      icon: Brain,
      title: language === "tr" ? "Yaklaşımım" : "My Approach",
      details: [
        language === "tr" ? "Net iletişim" : "Clear communication",
        language === "tr" ? "Ortak karar alma" : "Shared decision-making",
        language === "tr" ? "Bütüncül yaklaşım" : "Holistic approach",
      ],
    },
    {
      icon: Activity,
      title: language === "tr" ? "Uzmanlık Alanları" : "Specializations",
      details: [
        language === "tr" ? "Kalp yetmezliği" : "Heart failure",
        language === "tr"
          ? "Koroner arter hastalığı"
          : "Coronary artery disease",
        language === "tr" ? "Ritim bozuklukları" : "Arrhythmias",
        language === "tr" ? "Hipertansiyon" : "Hypertension",
      ],
    },
  ];

  const education = [
    {
      year: "2018-2023",
      title:
        language === "tr"
          ? "Tıpta Uzmanlık (Kardiyoloji)"
          : "Medical Specialty in Cardiology",
      institution:
        language === "tr"
          ? "Marmara Üniversitesi Tıp Fakültesi, İstanbul"
          : "Marmara University, Faculty of Medicine, Istanbul",
    },
    {
      year: "2012-2018",
      title: language === "tr" ? "Tıp Fakültesi" : "Medical Degree",
      institution:
        language === "tr"
          ? "Ondokuz Mayıs Üniversitesi Tıp Fakültesi, Samsun"
          : "Ondokuz Mayıs University, Faculty of Medicine, Samsun",
    },
  ];

  const memberships = [
    language === "tr"
      ? "Türk Kardiyoloji Derneği (TKD)"
      : "Turkish Society of Cardiology (TKD)",
    language === "tr"
      ? "Avrupa Kardiyoloji Derneği (ESC)"
      : "European Society of Cardiology (ESC)",
  ];

  const titleParts = aboutContent.title.split(" ");
  const firstWord = titleParts[0];
  const remainingWords = titleParts.slice(1).join(" ");

  return (
    <section className="relative py-16 overflow-hidden bg-white">
      <div className="relative container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700">
              {language === "tr" ? "Hakkımda" : "About"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">
              {firstWord} {remainingWords}
            </span>
          </h1>

          <p className="text-xl text-gray-600">{aboutContent.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
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
                    {language === "tr"
                      ? "Kardiyoloji Uzmanı"
                      : "Cardiology Specialist"}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-5 h-5 text-primary-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  {language === "tr" ? "Eğitim" : "Education"}
                </h2>
              </div>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div className="text-primary-600 font-bold mb-2">
                      {item.year}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-5 h-5 text-primary-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  {language === "tr" ? "Klinik İlgi Alanları" : "Clinical Areas of Interest"}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {clinicalInterests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white rounded-xl p-4 border border-gray-200 hover:border-primary-200 hover:shadow-sm transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm mb-1">
                            {interest.title}
                          </h3>
                          <p className="text-gray-600 text-xs">
                            {interest.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveSection(index)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                      activeSection === index
                        ? "bg-primary-50 border-primary-200"
                        : "bg-white border-gray-200 hover:border-primary-200"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${
                        activeSection === index
                          ? "text-primary-600"
                          : "text-gray-500"
                      }`}
                    />
                    <span
                      className={`font-medium ${
                        activeSection === index
                          ? "text-primary-700"
                          : "text-gray-700"
                      }`}
                    >
                      {section.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  {React.createElement(sections[activeSection]?.icon || Heart, {
                    className: "w-6 h-6 text-white",
                  })}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {sections[activeSection]?.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {(sections[activeSection]?.details || []).map(
                  (detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-primary-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  {language === "tr" ? "Üyelikler" : "Memberships"}
                </h2>
              </div>

              <div className="space-y-3">
                {memberships.map((membership, index) => (
                  <div key={index} className="flex items-center gap-3">
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