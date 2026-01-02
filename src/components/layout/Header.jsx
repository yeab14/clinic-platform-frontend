import React, {
  useEffect,
  useRef,
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
  Search,
  Shield,
  Sparkles,
  X,
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchInputRef = useRef(null);
  const location = useLocation();
  const { getCommon, getNavItems } = useLocale();

  const navItems = getNavItems();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      console.log('Searching for:', searchValue);
      // Implement search logic here
    }
  };

  return (
    <>
      {/* Top Bar - Premium */}
      <div className="w-full bg-gradient-to-r from-primary-900 via-primary-700 to-primary-600 text-white">
        <div className="container-custom px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            {/* Left side - Contact info */}
            <div className="flex items-center gap-6">
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

            {/* Right side - Emergency contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="hidden md:flex items-center gap-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full blur animate-pulse" />
                  <div className="w-2 h-2 bg-emerald-400 rounded-full relative z-10" />
                </div>
                <span className="text-sm font-medium">
                  {getCommon('emergency')}: (123) 456-7890
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Header - Premium */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-2' 
            : 'bg-gradient-to-r from-white via-primary-50/30 to-white py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-4 group">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                {/* Glow effect */}
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/40 to-accent-teal/40 blur-xl"
                />
                
                {/* Logo container */}
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 shadow-2xl flex items-center justify-center group-hover:shadow-3xl transition-shadow duration-300">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/30">
                    <span className="text-white text-2xl font-black">+</span>
                  </div>
                </div>

                {/* Floating particles */}
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-primary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              <div className="relative">
                <motion.h1
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl font-black bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 bg-clip-text text-transparent tracking-tight"
                >
                  ClinicCare
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-sm text-gray-600 flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-primary-600" />
                  {getCommon('logoSubtitle')}
                </motion.p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
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
                      className={`relative px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                        active
                          ? 'text-primary-700'
                          : 'text-gray-700 hover:text-primary-600'
                      }`}
                    >
                      {/* Background on hover/active */}
                      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                        active
                          ? 'bg-gradient-to-r from-primary-100/80 to-primary-50/80 border border-primary-200 shadow-sm'
                          : 'group-hover:bg-white/80 group-hover:shadow-md'
                      }`} />
                      
                      <span className="relative z-10 flex items-center gap-2">
                        {item.label}
                        {active && (
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
                        )}
                      </span>
                      
                      {/* Underline animation */}
                      <motion.div
                        layoutId={`nav-underline-${item.path}`}
                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${
                          active
                            ? 'w-3/4 bg-gradient-to-r from-primary-500 to-accent-teal'
                            : 'w-0 group-hover:w-1/2 bg-primary-400'
                        }`}
                      />
                    </motion.div>
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
          

              {/* Language Selector - Desktop (next to Book Now) */}
              <div className="hidden lg:flex items-center gap-3">
                <div className="relative">
                  <LanguageSelector variant="desktop" />
                </div>

                {/* Book Now Button */}
                <Link
                  to="/appointment"
                  className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 group-hover:from-primary-500 group-hover:to-accent-teal transition-all duration-500" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -inset-x-full -inset-y-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  <Calendar className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">{getCommon('bookNow')}</span>
                  <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Search Button - Desktop */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="hidden lg:flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </motion.button>

              {/* Mobile Actions */}
              <div className="flex items-center gap-2 lg:hidden">

                {/* Mobile Menu Toggle */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="relative p-3 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-all"
                >
                  {isMenuOpen ? (
                    <X className="w-5 h-5 text-gray-700" />
                  ) : (
                    <Menu className="w-5 h-5 text-gray-700" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="hidden lg:block mt-4 overflow-hidden"
              >
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder={getCommon('searchPlaceholder')}
                    className="w-full pl-14 pr-4 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-2xl shadow-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Search
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Menu - Premium */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed top-0 right-0 w-full max-w-sm h-full bg-gradient-to-b from-white via-white to-primary-50/30 backdrop-blur-xl shadow-2xl z-50 overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Language Selector */}
                <LanguageSelector variant="mobile-full" />

                {/* Navigation Links */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider px-2">
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
                          className={`group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                            active
                              ? 'bg-gradient-to-r from-primary-50 to-primary-100/50 border border-primary-200 text-primary-700'
                              : 'hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          <span className="font-medium">{item.label}</span>
                          <div className="flex items-center gap-2">
                            {active && (
                              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                            )}
                            <ChevronRight className={`w-4 h-4 transition-transform ${
                              active ? 'text-primary-600' : 'text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1'
                            }`} />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Emergency Contact - Mobile */}
                <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-4 border border-primary-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500">{getCommon('emergency')}</p>
                      <a className="text-lg font-bold text-gray-800">(123) 456-7890</a>
                    </div>
                  </div>
                </div>

                {/* Book Now Button - Mobile */}
                <Link
                  to="/appointment"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full"
                >
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 p-4 text-center">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute -inset-x-full -inset-y-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Calendar className="w-5 h-5 text-white" />
                      <span className="font-bold text-white">{getCommon('bookNow')}</span>
                    </div>
                  </div>
                </Link>

                {/* Footer */}
                <div className="pt-6 border-t border-gray-200">
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