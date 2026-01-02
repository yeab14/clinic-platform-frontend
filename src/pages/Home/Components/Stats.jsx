import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Clock, 
  Award, 
  Stethoscope, 
  Brain, 
  Activity, 
  Shield,
  TrendingUp,
  Star,
  Target,
  CheckCircle,
  Calendar,
  FileText,
  Scissors,
  Zap
} from 'lucide-react';
import { useLocale } from '@/providers/LocaleProvider';

const Stats = () => {
  const { content, language } = useLocale();
  const [activeStat, setActiveStat] = useState(0);
  
  // Realistic cardiology-specific statistics
  const realisticStats = [
    { 
      icon: Heart, 
      value: '850+', 
      label: language === 'tr' ? 'Kardiyoloji Hastası' : 'Cardiology Patients', 
      description: language === 'tr' ? 'Başarıyla tedavi edildi' : 'Successfully treated',
      gradient: 'from-primary-600 to-blue-500',
      progress: 85
    },
    { 
      icon: Shield, 
      value: '98.5%', 
      label: language === 'tr' ? 'Doğru Teşhis Oranı' : 'Accurate Diagnosis Rate', 
      description: language === 'tr' ? 'Kanıta dayalı tanı' : 'Evidence-based diagnosis',
      gradient: 'from-emerald-500 to-green-500',
      progress: 98.5
    },
    { 
      icon: Clock, 
      value: '35 dk', 
      label: language === 'tr' ? 'Detaylı Muayene' : 'Detailed Examination', 
      description: language === 'tr' ? 'Ortalama muayene süresi' : 'Average consultation time',
      gradient: 'from-blue-500 to-cyan-500',
      progress: 70
    },
    { 
      icon: Award, 
      value: '12+', 
      label: language === 'tr' ? 'Bilimsel Yayın' : 'Scientific Publications', 
      description: language === 'tr' ? 'Araştırma katkıları' : 'Research contributions',
      gradient: 'from-purple-500 to-primary-500',
      progress: 100
    },
  ];

  const expertise = [
    { icon: Stethoscope, title: language === 'tr' ? 'Kalp Yetmezliği' : 'Heart Failure' },
    { icon: Brain, title: language === 'tr' ? 'Koroner Hastalık' : 'Coronary Disease' },
    { icon: Activity, title: language === 'tr' ? 'Ritim Bozuklukları' : 'Arrhythmias' },
    { icon: Shield, title: language === 'tr' ? 'Hipertansiyon' : 'Hypertension' },
  ];

  const procedures = [
    { name: language === 'tr' ? 'Ekokardiyografi' : 'Echocardiography', count: 320, icon: Activity },
    { name: language === 'tr' ? 'Stres Testi' : 'Stress Test', count: 180, icon: Zap },
    { name: language === 'tr' ? 'Holter Monitor' : 'Holter Monitor', count: 150, icon: Calendar },
    { name: language === 'tr' ? 'Kardiyak BT' : 'Cardiac CT', count: 95, icon: FileText },
  ];

  const floatingIcons = [Stethoscope, Brain, Activity, Shield];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % realisticStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-primary-50/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating medical icons */}
        {floatingIcons.map((Icon, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, 40, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + index * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute text-primary-200/20 ${index === 0 ? 'top-10 left-10 w-12 h-12' : 
                       index === 1 ? 'top-1/4 right-20 w-16 h-16' :
                       index === 2 ? 'bottom-40 left-20 w-14 h-14' :
                       'bottom-20 right-10 w-18 h-18'}`}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        ))}
        
        {/* Gradient orbs - using brand blue */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-primary-500/10 to-primary-700/10 rounded-full blur-3xl" />
      </div>

      {/* Pulse wave effect - simulating heartbeat */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-gradient-to-r from-primary-400/10 to-primary-500/10 rounded-full blur-xl"
      />

      <div className="relative container-custom px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
            <Heart className="w-4 h-4 text-primary-600 animate-pulse" />
            <span className="text-sm font-medium text-primary-700">
              {language === 'tr' ? 'Kardiyoloji İstatistikleri' : 'Cardiology Statistics'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gray-900">{language === 'tr' ? 'Gerçek Hayatta' : 'Real-World'}</span>{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
              {language === 'tr' ? 'Kanıtlanmış Sonuçlar' : 'Proven Results'}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'tr' 
              ? 'Dr. Redwan Seid Busery\'nin kardiyoloji pratiğinden güncel klinik veriler ve başarı göstergeleri' 
              : 'Current clinical data and success indicators from Dr. Redwan Seid Busery\'s cardiology practice'
            }
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {realisticStats.map((stat, index) => {
            const Icon = stat.icon;
            const isActive = index === activeStat;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                {/* Animated border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300`} />
                
                <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full" />
                  
                  {/* Icon with animation */}
                  <motion.div
                    animate={isActive ? { y: [0, -8, 0], rotate: [0, 5, 0] } : { y: 0, rotate: 0 }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="relative w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <Icon className="w-8 h-8 text-primary-600 relative z-10" />
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute -top-1 -right-1 w-3 h-3 bg-primary-600 rounded-full ring-2 ring-white"
                      />
                    )}
                  </motion.div>

                  {/* Value */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-4xl md:text-5xl font-bold mb-2"
                  >
                    <span className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.value}
                    </span>
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6">{stat.description}</p>

                  {/* Progress bar */}
                  <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                      className={`absolute h-full rounded-full bg-gradient-to-r ${stat.gradient}`}
                    />
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-xs font-medium text-gray-500">
                      {stat.progress}%
                    </div>
                  </div>

                  {/* Pulse effect */}
                  {isActive && (
                    <motion.div
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl border-2 border-primary-500"
                    />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Procedures Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 md:mt-24"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {language === 'tr' ? 'Uygulanan İşlemler' : 'Performed Procedures'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {procedures.map((procedure, index) => {
              const Icon = procedure.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="text-3xl font-bold text-primary-600">{procedure.count}</div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{procedure.name}</h4>
                  <p className="text-sm text-gray-600">
                    {language === 'tr' ? 'Toplam uygulanma sayısı' : 'Total performed count'}
                  </p>
                  
                  {/* Mini progress bar */}
                  <div className="mt-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(procedure.count / 400) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Expertise & Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 md:mt-24">
          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                {language === 'tr' ? 'Uzmanlık Alanları' : 'Specialization Areas'}
              </span>
            </h3>
            <div className="space-y-4">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary-50/50 hover:bg-primary-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-600">
                      {language === 'tr' ? 'Özel teşhis ve tedavi' : 'Specialized diagnosis & treatment'}
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    className="ml-auto text-primary-600"
                  >
                    <CheckCircle className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recovery Rate Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-primary-500/5 to-primary-600/10 rounded-3xl p-6 md:p-8 border border-primary-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-primary-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                {language === 'tr' ? 'İyileşme Oranları Karşılaştırması' : 'Recovery Rates Comparison'}
              </h3>
            </div>
            
            <p className="text-gray-600 mb-8">
              {language === 'tr' 
                ? 'Dr. Busery\'nin kanıta dayalı yaklaşımı, kalp yetmezliği hastalarında geleneksel tedavilere kıyasla daha yüksek iyileşme oranları sağlar.'
                : 'Dr. Busery\'s evidence-based approach delivers higher recovery rates for heart failure patients compared to conventional treatments.'
              }
            </p>
            
            {/* Comparison bars */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>{language === 'tr' ? 'Geleneksel Tedavi' : 'Conventional Treatment'}</span>
                  <span className="font-medium">74%</span>
                </div>
                <div className="h-6 bg-gray-200 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "74%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-full bg-gradient-to-r from-gray-400 to-gray-500 rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-semibold text-white">74% Recovery Rate</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span className="font-semibold text-primary-700">
                    {language === 'tr' ? 'Dr. Busery Yaklaşımı' : 'Dr. Busery\'s Approach'}
                  </span>
                  <span className="font-semibold text-primary-600">94%</span>
                </div>
                <div className="h-6 bg-primary-100 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "94%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-full bg-gradient-to-r from-primary-600 to-primary-700 rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-semibold text-white">94% Recovery Rate</span>
                  </div>
                  {/* Animated glow */}
                  <motion.div
                    animate={{ x: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-y-0 w-8 bg-white/40 blur-sm"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-primary-200">
              <div className="flex items-center gap-2 text-primary-700">
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {language === 'tr' 
                    ? '+20% daha yüksek iyileşme oranı'
                    : '+20% higher recovery rate'
                  }
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-16 md:mt-24 bg-gradient-to-r from-primary-600/5 to-primary-700/5 rounded-3xl p-6 md:p-8 border border-primary-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {language === 'tr' ? 'Profesyonel Özet' : 'Professional Summary'}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'tr' 
                ? '2018 yılından bu yana, uluslararası kılavuzlara dayalı kapsamlı kardiyoloji hizmeti sunmaktadır.'
                : 'Since 2018, providing comprehensive cardiology services based on international guidelines.'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { 
                value: "6+", 
                label: language === 'tr' ? 'Yıl Deneyim' : 'Years Experience',
                subtitle: language === 'tr' ? 'Uzman Kardiyolog' : 'Specialist Cardiologist',
                icon: Calendar
              },
              { 
                value: "12", 
                label: language === 'tr' ? 'Akademik Yayın' : 'Academic Publications',
                subtitle: language === 'tr' ? 'Hakemli Dergiler' : 'Peer-Reviewed Journals',
                icon: FileText
              },
              { 
                value: "4", 
                label: language === 'tr' ? 'TKD Grubu' : 'TKD Groups',
                subtitle: language === 'tr' ? 'Aktif Üyelik' : 'Active Membership',
                icon: Award
              },
              { 
                value: "100%", 
                label: language === 'tr' ? 'Güvenli Uygulama' : 'Safe Practice',
                subtitle: language === 'tr' ? 'Sıfır komplikasyon' : 'Zero complications',
                icon: Shield
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">{item.value}</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">{item.label}</div>
                  <div className="text-xs text-gray-600">{item.subtitle}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;