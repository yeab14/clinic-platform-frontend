import {
  useEffect,
  useState,
} from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import {
  Calendar,
  ChevronRight,
  Clock,
  MapPin,
  Menu,
  Phone,
  Shield,
  Sparkles,
  Heart,
  X,
  Stethoscope
} from 'lucide-react';
import {
  Link,
  useLocation,
} from 'react-router-dom';

import { LanguageSelector } from '@/components/LanguageSelector';
import { useLocale } from '@/providers/LocaleProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { getCommon, getNavItems } = useLocale();

  const navItems = getNavItems();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <div className="w-full bg-gradient-to-r from-primary-900 via-primary-700 to-primary-600 text-white">
        <div className="px-3 sm:px-4">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:flex items-center gap-2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-sm" />
                  <Clock className="w-4 h-4 relative z-10" />
                </div>
                <span className="text-sm font-medium">{getCommon('openHours')}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="hidden md:flex items-center gap-2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-sm" />
                  <MapPin className="w-4 h-4 relative z-10" />
                </div>
                <span className="text-sm font-medium">{getCommon('address')}</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="hidden md:flex items-center gap-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full blur animate-pulse" />
                  <div className="w-2 h-2 bg-emerald-400 rounded-full relative z-10" />
                </div>
                <span className="text-sm font-medium">
                  {getCommon('Whatsapp')} : +90 553 418 6776
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-2' 
            : 'bg-gradient-to-r from-white via-primary-50/30 to-white py-4'
        }`}
      >
        <div className="px-3 sm:px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 sm:gap-4 group">
            <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-primary-100 flex items-center justify-center">
                  <Stethoscope className="w-3 h-3 text-primary-600" />
                </div>
              </div>

              <div className="relative">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Dr. Redwan Seid Busery
                </h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-xs sm:text-sm text-gray-600 flex items-center gap-1.5"
                >
                  <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-600" />
                  {getCommon('logoSubtitle')}
                </motion.p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 sm:gap-2">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="group relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-medium transition-all duration-300 ${
                        active
                          ? 'text-primary-700'
                          : 'text-gray-700 hover:text-primary-600'
                      }`}
                    >
                      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                        active
                          ? 'bg-gradient-to-r from-primary-100/80 to-primary-50/80 border border-primary-200 shadow-sm'
                          : 'group-hover:bg-white/80 group-hover:shadow-md'
                      }`} />
                      
                      <span className="relative z-10 flex items-center gap-1.5">
                        <span className="text-sm sm:text-base">{item.label}</span>
                        {active && (
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
                        )}
                      </span>
                    </motion.div>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden lg:flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <LanguageSelector variant="desktop" />
                </div>

                <Link
                  to="/appointment"
                  className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 group-hover:from-primary-500 group-hover:to-accent-teal transition-all duration-500" />
                  
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -inset-x-full -inset-y-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                  <span className="relative z-10 text-sm sm:text-base">{getCommon('bookNow')}</span>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
                <div className="relative">
                  <LanguageSelector variant="mobile-icon" />
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="relative p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-all"
                >
                  {isMenuOpen ? (
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                  ) : (
                    <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed top-0 right-0 w-full max-w-sm h-full bg-gradient-to-b from-white via-white to-primary-50/30 backdrop-blur-xl shadow-2xl z-50 overflow-y-auto"
            >
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">Menu</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <LanguageSelector variant="mobile-full" />

                <div className="space-y-2">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider px-2">
                    Navigation
                  </h3>
                  <div className="space-y-1">
                    {navItems.map((item) => {
                      const active = location.pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`group flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 ${
                            active
                              ? 'bg-gradient-to-r from-primary-50 to-primary-100/50 border border-primary-200 text-primary-700'
                              : 'hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          <span className="font-medium text-sm sm:text-base">{item.label}</span>
                          <div className="flex items-center gap-1.5">
                            {active && (
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
                            )}
                            <ChevronRight className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${
                              active ? 'text-primary-600' : 'text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5'
                            }`} />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-3 sm:p-4 border border-primary-100">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500">{getCommon('emergency')}</p>
                      <a className="text-base sm:text-lg font-bold text-gray-800">(123) 456-7890</a>
                    </div>
                  </div>
                </div>

                <Link
                  to="/appointment"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full"
                >
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 p-3 sm:p-4 text-center">
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute -inset-x-full -inset-y-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      <span className="font-bold text-white text-sm sm:text-base">{getCommon('bookNow')}</span>
                    </div>
                  </div>
                </Link>

                <div className="pt-4 sm:pt-6 border-t border-gray-200">
                  <p className="text-center text-xs text-gray-500">
                    Premium Healthcare Services
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}