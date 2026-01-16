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
  Award as AwardIcon,
  Brain,
  Calendar,
  Clock,
  Heart,
  Play,
  Shield,
  Sparkles,
  Star,
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
  const { content, language, t } = useLocale();

  const stats = [
    { 
      icon: Users, 
      value: '1,000+', 
      label: language === 'tr' ? 'Güvenilen Hasta' : 'Trusted Patients', 
      color: 'from-blue-500 to-blue-600',
      description: language === 'tr' ? 'Memnuniyet Oranı' : 'Satisfaction Rate'
    },
    { 
      icon: Star, 
      value: '4.9', 
      label: language === 'tr' ? 'Hasta Değerlendirmesi' : 'Patient Rating', 
      color: 'from-amber-500 to-yellow-600',
      description: language === 'tr' ? 'Mükemmel Bakım' : 'Excellent Care'
    },
    { 
      icon: AwardIcon, 
      value: '10+', 
      label: language === 'tr' ? 'Yayın' : 'Publications', 
      color: 'from-purple-500 to-purple-600',
      description: language === 'tr' ? 'Bilimsel Katkı' : 'Scientific Contribution'
    },
    { 
      icon: Clock, 
      value: '30 min', 
      label: language === 'tr' ? 'Detaylı Konsültasyon' : 'Detailed Consultation', 
      color: 'from-emerald-500 to-green-600',
      description: language === 'tr' ? 'Kişisel İlgi' : 'Personal Attention'
    },
  ];

  const features = [
    { 
      icon: Stethoscope, 
      text: content.features[0],
      color: 'from-primary-600 to-blue-500'
    },
    { 
      icon: Activity, 
      text: content.features[1],
      color: 'from-accent-teal to-emerald-500'
    },
    { 
      icon: Brain, 
      text: content.features[2],
      color: 'from-accent-purple to-primary-500'
    },
    { 
      icon: Shield, 
      text: content.features[3],
      color: 'from-primary-700 to-primary-800'
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
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/20 py-8 md:py-12 lg:py-16">
     
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
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary-400/10 via-accent-teal/8 to-primary-300/8 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-teal/8 via-primary-500/8 to-accent-blue/8 rounded-full blur-3xl"
        />
      </div>

      <div className="relative container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
       
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10"
          >
         
            {/* <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block group mb-6"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
                <div className="relative flex items-center gap-3 px-4 py-2.5 bg-white/95 backdrop-blur-sm rounded-xl border border-white/40 shadow-lg">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-900 rounded-full blur" />
                    <div className="relative w-10 h-10 bg-gradient-to-br from-primary-700 to-primary-900 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary-800 leading-tight">
                      {t('trustBadge.title')}
                    </div>
                    <div className="text-xs text-gray-600 leading-tight">
                      {t('trustBadge.subtitle')}
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-primary-400 ml-1 animate-pulse" />
                </div>
              </div>
            </motion.div> */}

         
            <div className="mb-6">
            
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3"
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
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
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
              className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed bg-gradient-to-r from-gray-50 to-white/50 p-5 rounded-xl border border-gray-100 shadow-sm"
            >
              {content.description}
            </motion.p>

       
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + index * 0.08 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    <div className={`relative w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}>
                      <div className="absolute inset-0 bg-white/10 rounded-lg blur-sm" />
                      <feature.icon className="w-5 h-5 text-white relative z-10" />
                    </div>
                    <span className="text-sm md:text-base text-gray-800 font-medium leading-tight">{feature.text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-3 mb-6"
            >
              <Link
                to="/appointment"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-700 to-primary-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  animate={isHovered ? 
                    { background: "linear-gradient(90deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)" } : 
                    { background: "linear-gradient(90deg, #1e40af 0%, #1d4ed8 100%)" }
                  }
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                />
                
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -inset-x-full -inset-y-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                <Calendar className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10 text-base">{content.cta.primary}</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                
                <Sparkles className="absolute -top-1 -right-1 w-6 h-6 text-primary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm border border-primary-300 text-primary-800 font-bold rounded-xl hover:border-primary-400 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                <span className="text-base">{content.cta.secondary}</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/0 to-accent-teal/0 group-hover:from-primary-500/5 group-hover:to-accent-teal/5 transition-all duration-300" />
              </Link>
            </motion.div>

           
            {/* <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-4 pt-6 border-t border-gray-100"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">TKD Certified</div>
                  <div className="text-xs text-gray-600">Turkish Cardiology</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                  <AwardIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">ESC Member</div>
                  <div className="text-xs text-gray-600">European Society</div>
                </div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right Column - Clean Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
    
            <div className="relative">
   
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-full h-60 bg-gradient-to-br from-primary-500/15 via-accent-teal/15 to-primary-400/15 rounded-2xl rotate-3 blur-xl hidden md:block"
              />
              
           
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-800/10 via-primary-600/15 to-accent-teal/10 z-10" />
                
                <img 
                  src={doctorImg}
                  alt={language === 'tr' ? "Dr. Redwan Seid Busery" : "Dr. Redwan Seid Busery"}
                  className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[3/2] lg:aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <div className="text-xs text-gray-500 mb-1">{content.scrollHint}</div>
          <div className="w-5 h-8 border-2 border-primary-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full mt-1"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;