import React, {
  useEffect,
  useState,
} from 'react';

import {
  motion,
  useAnimation,
} from 'framer-motion';
import {
  Activity,
  ArrowRight,
  Calendar,
  Clock,
  Heart,
  Play,
  Shield,
  Stethoscope,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import doctorImg from '@/assets/images/Dr2.png';
import { useLocale } from '@/providers/LocaleProvider';

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const { content, language } = useLocale();

  const services = [
    { 
      icon: Stethoscope, 
      text: language === 'tr' ? 'Koroner Anjiyografi' : 'Coronary Angiography',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      icon: Heart, 
      text: language === 'tr' ? 'Kalp Yetmezliği Tedavisi' : 'Heart Failure Treatment',
      color: 'from-red-500 to-red-600'
    },
    { 
      icon: Activity, 
      text: language === 'tr' ? 'Ritim Bozuklukları' : 'Arrhythmia Treatment',
      color: 'from-green-500 to-green-600'
    },
    { 
      icon: Shield, 
      text: language === 'tr' ? 'Hipertansiyon Yönetimi' : 'Hypertension Management',
      color: 'from-purple-500 to-purple-600'
    },
  ];

  const stats = [
    { 
      icon: Users, 
      value: '1,000+', 
      label: language === 'tr' ? 'Hasta' : 'Patients', 
      color: 'from-blue-500 to-blue-600'
    },
    { 
      icon: Clock, 
      value: '30 dk', 
      label: language === 'tr' ? 'Muayene' : 'Consultation', 
      color: 'from-emerald-500 to-green-600'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [language]);

  useEffect(() => {
    controls.start({
      scale: [1, 1.08, 1],
      transition: { duration: 0.5, ease: "easeInOut" }
    });
  }, [currentStat, controls]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/20 pt-6 pb-8 md:py-12 lg:py-16">
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-primary-400/10 to-primary-300/8 rounded-full blur-2xl md:blur-3xl"
        />
      </div>

      <div className="relative container-custom px-4">
    
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
         
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:hidden order-1"
          >
       
            <div className="text-center mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl sm:text-3xl font-bold mb-2"
              >
                <span className="bg-gradient-to-r from-primary-600 to-accent-teal bg-clip-text text-transparent">
                  Dr. Redwan Seid Busery
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="flex items-center justify-center gap-2"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div className="text-center">
                  <h2 className="text-lg font-bold text-gray-900">
                    {language === 'tr' ? 'Kardiyoloji Uzmanı' : 'Cardiology Specialist'}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {language === 'tr' ? 'Acıbadem Kartal Hospital' : 'Acıbadem Kartal Hospital'}
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.2 }}
  className="relative mb-6"
>
  <div className="relative rounded-xl overflow-hidden shadow-lg">
    <div className="absolute inset-0 bg-gradient-to-br from-primary-800/10 to-accent-teal/10 z-10" />
    <img 
      src={doctorImg}
      alt={language === 'tr' ? "Dr. Redwan Seid Busery" : "Dr. Redwan Seid Busery"}
      className="w-full object-cover"
    />
  </div>
</motion.div>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:hidden order-2 mb-6"
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {language === 'tr' ? 'Uzmanlık Alanları' : 'Specializations'}
              </h3>
              <p className="text-sm text-gray-600">
                {language === 'tr' ? 'Kapsamlı kardiyoloji hizmetleri' : 'Comprehensive cardiology services'}
              </p>
            </div>

       
            <div className="grid grid-cols-2 gap-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.1 }}
                  className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-2`}>
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs font-medium text-gray-800 text-center leading-tight">
                    {service.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:hidden order-3 mb-6"
          >
            <p className="text-gray-700 text-center mb-6 leading-relaxed bg-white/80 p-4 rounded-xl border border-gray-100">
              {content.description}
            </p>

          

         
            <div className="flex flex-col gap-3">
              <Link
                to="/appointment"
                className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-700 to-primary-800 text-white font-bold rounded-lg shadow-md transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                <span>{content.cta.primary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-primary-300 text-primary-800 font-bold rounded-lg hover:border-primary-400 transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                <span>{content.cta.secondary}</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden lg:block relative z-10"
          >
            <div className="mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-5xl lg:text-6xl font-bold leading-tight mb-3"
              >
                <div className="relative">
                  <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-teal bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                    {content.titleLine1}
                  </span>
                </div>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 mt-4"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full blur-sm opacity-50" />
                  <div className="relative w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {content.titleHighlight}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-base text-gray-600 font-medium">
                      {language === 'tr' ? 'Acıbadem Kartal Hospital' : 'Acıbadem Kartal Hospital'}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-lg text-gray-700 mb-6 leading-relaxed"
            >
              {content.description}
            </motion.p>

        
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + index * 0.08 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                    <div className={`relative w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-base text-gray-800 font-medium">{service.text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

           
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex gap-3 mb-6"
            >
              <Link
                to="/appointment"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-700 to-primary-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                <span>{content.cta.primary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-primary-300 text-primary-800 font-bold rounded-xl hover:border-primary-400 hover:shadow-lg transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                <span>{content.cta.secondary}</span>
              </Link>
            </motion.div>
          </motion.div>

     
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-800/10 to-accent-teal/10 z-10" />
                <img 
                  src={doctorImg}
                  alt={language === 'tr' ? "Dr. Redwan Seid Busery" : "Dr. Redwan Seid Busery"}
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;