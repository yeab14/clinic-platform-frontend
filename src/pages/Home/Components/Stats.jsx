import React, {
  useEffect,
  useState,
} from 'react';

import { motion } from 'framer-motion';
import {
  Award,
  Calendar,
  Clock,
  FileText,
  Heart,
  Shield,
  TrendingUp,
} from 'lucide-react';

import { useLocale } from '@/providers/LocaleProvider';

const Stats = () => {
  const { content, language } = useLocale();
  const [activeStat, setActiveStat] = useState(0);
  
  // Core statistics - reduced from 16+ numbers to 4 key metrics
  const keyStats = [
    { 
      icon: Heart, 
      value: '850+', 
      label: language === 'tr' ? 'Kardiyoloji Hastası' : 'Cardiology Patients', 
      description: language === 'tr' ? 'Başarıyla tedavi edildi' : 'Successfully treated',
      gradient: 'from-primary-600 to-blue-500'
    },
    { 
      icon: Shield, 
      value: '98.5%', 
      label: language === 'tr' ? 'Doğru Teşhis Oranı' : 'Accurate Diagnosis Rate', 
      description: language === 'tr' ? 'Kanıta dayalı tanı' : 'Evidence-based diagnosis',
      gradient: 'from-emerald-500 to-green-500'
    },
    { 
      icon: Clock, 
      value: '35 dk', 
      label: language === 'tr' ? 'Detaylı Muayene' : 'Detailed Examination', 
      description: language === 'tr' ? 'Ortalama muayene süresi' : 'Average consultation time',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: TrendingUp, 
      value: '94%', 
      label: language === 'tr' ? 'İyileşme Oranı' : 'Recovery Rate', 
      description: language === 'tr' ? 'Kalp yetmezliği tedavisi' : 'Heart failure treatment',
      gradient: 'from-purple-500 to-primary-500'
    },
  ];

  // Professional summary - compact version
  const summaryStats = [
    { 
      value: "6+", 
      label: language === 'tr' ? 'Yıl Deneyim' : 'Years Experience',
      icon: Calendar
    },
    { 
      value: "12", 
      label: language === 'tr' ? 'Bilimsel Yayın' : 'Scientific Publications',
      icon: FileText
    },
    { 
      value: "4", 
      label: language === 'tr' ? 'Profesyonel Grup' : 'Professional Groups',
      icon: Award
    },
    { 
      value: "100%", 
      label: language === 'tr' ? 'Güvenli Uygulama' : 'Safe Practice',
      icon: Shield
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % keyStats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 md:py-20 bg-white">
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom px-4">
        {/* Simplified Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
            <Heart className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">
              {language === 'tr' ? 'Kanıta Dayalı Sonuçlar' : 'Evidence-Based Results'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'tr' ? 'Klinik Başarı' : 'Clinical Excellence'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'tr' 
              ? 'Dr. Redwan Seid Busery\'nin kardiyoloji pratiğinden öne çıkan göstergeler' 
              : 'Key indicators from Dr. Redwan Seid Busery\'s cardiology practice'
            }
          </p>
        </motion.div>

        {/* Main Stats Grid - Cleaner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyStats.map((stat, index) => {
            const Icon = stat.icon;
            const isActive = index === activeStat;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="relative bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 transition-all hover:shadow-lg">
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                    <Icon className={`w-6 h-6 ${isActive ? 'text-primary-600' : 'text-primary-500'}`} />
                  </div>

                  {/* Value */}
                  <div className="text-3xl font-bold mb-2">
                    <span className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.value}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm">{stat.description}</p>

                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-700 rounded-b-xl"
                    />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

      
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 md:p-8 border border-primary-100 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-primary-600" />
            <h3 className="text-xl font-bold text-gray-900">
              {language === 'tr' ? 'Başarı Karşılaştırması' : 'Success Comparison'}
            </h3>
          </div>
          
          <p className="text-gray-600 mb-6">
            {language === 'tr' 
              ? 'Uluslararası standartlara kıyasla daha yüksek iyileşme oranları'
              : 'Higher recovery rates compared to international standards'
            }
          </p>
          
         
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">{language === 'tr' ? 'Ortalama Başarı Oranı' : 'Average Success Rate'}</span>
              <span className="font-medium text-gray-700">74%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "74%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-gray-400 to-gray-500 rounded-full"
              />
            </div>
            
            <div className="flex justify-between text-sm mt-6">
              <span className="font-semibold text-primary-700">
                {language === 'tr' ? 'Dr. Busery Yaklaşımı' : 'Dr. Busery\'s Approach'}
              </span>
              <span className="font-semibold text-primary-600">94%</span>
            </div>
            <div className="h-3 bg-primary-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "94%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-gradient-to-r from-primary-600 to-primary-700 rounded-full relative"
              >
                <motion.div
                  animate={{ x: ["0%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-y-0 w-8 bg-white/30 blur-sm"
                />
              </motion.div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-primary-200">
            <div className="flex items-center gap-2 text-primary-700">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === 'tr' 
                  ? '+20% daha yüksek başarı oranı'
                  : '+20% higher success rate'
                }
              </span>
            </div>
          </div>
        </motion.div> */}

   
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {language === 'tr' ? 'Profesyonel Deneyim' : 'Professional Experience'}
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {summaryStats.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-primary-600 mb-1">{item.value}</div>
                  <div className="text-sm font-medium text-gray-700">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
          
          <p className="text-gray-600 text-sm mt-6 max-w-xl mx-auto">
            {language === 'tr' 
              ? '2018 yılından bu yana, uluslararası kılavuzlara dayalı kardiyoloji hizmeti'
              : 'Providing cardiology services based on international guidelines since 2018'
            }
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Stats;