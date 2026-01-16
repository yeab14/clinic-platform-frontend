import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import {
  Check,
  ChevronDown,
  Globe,
} from 'lucide-react';

import { useLocale } from '@/providers/LocaleProvider';

const FLAG_IMAGES = {
    en: "https://flagcdn.com/w20/us.png",
    tr: "https://flagcdn.com/w20/tr.png"
  };
  
  const FLAG_GRADIENTS = {
    en: 'from-blue-500 via-red-500 to-white',
    tr: 'from-red-500 to-white'
  };
  
  export const LanguageSelector = ({ variant = 'desktop', className = '' }) => {
    const { language, languages, changeLanguage } = useLocale();
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  
    const handleLanguageChange = (langCode) => {
      changeLanguage(langCode);
      setIsOpen(false);
      
      const button = document.querySelector(`[data-lang="${langCode}"]`);
      if (button) {
        button.classList.add('scale-95');
        setTimeout(() => button.classList.remove('scale-95'), 150);
      }
    };
  
    const FlagDisplay = ({ countryCode, size = 'md' }) => {
      const sizeClass = size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8';
      
      return (
        <div className={`relative ${sizeClass} rounded-full overflow-hidden border-2 border-white shadow-md`}>
          <img
            src={FLAG_IMAGES[countryCode]}
            alt={`${languages[countryCode].name} flag`}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br ${FLAG_GRADIENTS[countryCode]} text-white text-xs font-bold">
                  ${countryCode.toUpperCase()}
                </div>
              `;
            }}
          />
        </div>
      );
    };
  
    if (variant === 'desktop') {
      return (
        <div ref={dropdownRef} className={`relative ${className}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-primary-500/20 to-accent-teal/20 backdrop-blur-sm border border-primary-300/50 transition-all duration-300 text-white shadow-lg hover:shadow-xl hover:from-primary-500/30 hover:to-accent-teal/30"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 to-accent-teal/20" />
            
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-400/10 to-accent-teal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex items-center gap-3">
              <FlagDisplay countryCode={language} size="sm" />
              
              <span className="text-sm font-semibold tracking-wide">
                {languages[language].name}
              </span>
              
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-primary-200"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </div>
          </motion.button>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="absolute top-full mt-3 right-0 min-w-[220px] z-50"
              >
                <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="relative p-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary-600" />
                      <h3 className="text-sm font-semibold text-gray-700">
                        {language === 'tr' ? 'Dil Seçin' : 'Select Language'}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {language === 'tr' ? 'Web sitesi dilini değiştirin' : 'Change website language'}
                    </p>
                  </div>
                  
                  <div className="p-2">
                    {Object.values(languages).map((lang) => (
                      <motion.button
                        key={lang.code}
                        data-lang={lang.code}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`relative w-full flex items-center gap-3 p-3 rounded-xl mb-1 transition-all duration-200 ${
                          language === lang.code
                            ? 'bg-gradient-to-r from-primary-50 to-primary-100/50 border border-primary-100'
                            : 'hover:bg-gray-50/80'
                        }`}
                      >
                        {language === lang.code && (
                          <motion.div
                            layoutId="activeLang"
                            className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-teal/5 rounded-xl"
                          />
                        )}
                        
                        <div className="relative z-10 flex items-center gap-3 w-full">
                          <div className="relative flex-shrink-0">
                            <FlagDisplay countryCode={lang.code} />
                          </div>
                          
                          <div className="flex-1 text-left">
                            <div className="flex items-center justify-between">
                              <span className={`font-medium ${
                                language === lang.code ? 'text-primary-700' : 'text-gray-700'
                              }`}>
                                {lang.name}
                              </span>
                              {language === lang.code && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="text-primary-600"
                                >
                                  <Check className="w-4 h-4" />
                                </motion.div>
                              )}
                            </div>
                            <span className="text-xs text-gray-500 block mt-0.5">
                              {lang.code.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }
  
    if (variant === 'mobile-icon') {
      return (
        <div ref={dropdownRef} className={`relative ${className}`}>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="group relative p-3 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-primary-300 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-400/5 to-accent-teal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute inset-0 rounded-2xl bg-primary-500/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <Globe className="w-5 h-5 text-gray-700 group-hover:text-primary-600 transition-colors" />
            </div>
          </motion.button>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                className="absolute top-full mt-3 right-0 min-w-[200px] z-50"
              >
                <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-700">
                      {language === 'tr' ? 'Dil Seçin' : 'Select Language'}
                    </h3>
                  </div>
                  
                  <div className="p-2">
                    {Object.values(languages).map((lang) => (
                      <motion.button
                        key={lang.code}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl mb-1 transition-colors ${
                          language === lang.code
                            ? 'bg-primary-50 text-primary-700'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <FlagDisplay countryCode={lang.code} size="sm" />
                        
                        <span className="font-medium">{lang.name}</span>
                        
                        {language === lang.code && (
                          <Check className="w-4 h-4 ml-auto text-primary-600" />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }
  
    if (variant === 'mobile-full') {
      return (
        <div className={`mb-6 pb-6 border-b border-gray-200 ${className}`}>
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-primary-600" />
            <h3 className="text-lg font-bold text-gray-800">
              {language === 'tr' ? 'Dil Seçenekleri' : 'Language Options'}
            </h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {Object.values(languages).map((lang) => (
              <motion.button
                key={lang.code}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleLanguageChange(lang.code)}
                className={`relative p-4 rounded-2xl border-2 transition-all duration-300 ${
                  language === lang.code
                    ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-primary-100/50 shadow-lg'
                    : 'border-gray-200 hover:border-primary-300 hover:shadow-md'
                }`}
              >
                {language === lang.code && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-teal/10 blur-sm" />
                )}
                
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <FlagDisplay countryCode={lang.code} size="lg" />
                  
                  <div className="text-center">
                    <div className={`font-bold ${
                      language === lang.code ? 'text-primary-700' : 'text-gray-700'
                    }`}>
                      {lang.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {lang.code.toUpperCase()}
                    </div>
                  </div>
                  
                  {language === lang.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center"
                    >
                      <Check className="w-3 h-3 text-white" />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              {language === 'tr' ? 'Dil tercihiniz kaydedildi' : 'Your language preference has been saved'}
            </p>
          </div>
        </div>
      );
    }
  
    return null;
  };