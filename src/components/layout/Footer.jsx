import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Phone, Mail, Linkedin, Award, Stethoscope, ArrowUp, Clock, Shield, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocale } from '@/providers/LocaleProvider';

const Footer = () => {
  const { content, language } = useLocale();
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: language === 'tr' ? 'Ana Sayfa' : 'Home', path: '/' },
    { name: language === 'tr' ? 'Hakkımda' : 'About', path: '/about' },
    { name: language === 'tr' ? 'Hizmetler' : 'Services', path: '/services' },
    { name: language === 'tr' ? 'Eğitim' : 'Education', path: '/education' },
    { name: language === 'tr' ? 'İletişim' : 'Contact', path: '/contact' },
  ];

  const memberships = [
    language === 'tr' ? 'Türk Kardiyoloji Derneği' : 'Turkish Society of Cardiology',
    language === 'tr' ? 'Türk Tabipleri Birliği' : 'Turkish Medical Association',
    language === 'tr' ? 'TKD Girişimsel Kardiyoloji' : 'TKD Interventional Cardiology',
  ];

  const credentials = [
    { 
      icon: Shield, 
      title: language === 'tr' ? 'Kanıta Dayalı' : 'Evidence-Based',
      description: language === 'tr' ? 'Uluslararası Kılavuzlar' : 'International Guidelines'
    },
    { 
      icon: Clock, 
      title: language === 'tr' ? 'Detaylı Muayene' : 'Detailed Consultation',
      description: language === 'tr' ? 'Kişiselleştirilmiş Yaklaşım' : 'Personalized Approach'
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-20" />

      {/* Main Footer Content */}
      <div className="relative container-custom px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand & Introduction - 5 columns */}
          <div className="lg:col-span-5">
            <div className="flex items-start gap-4 mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-primary-100 flex items-center justify-center">
                  <Stethoscope className="w-3 h-3 text-primary-600" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Dr. Redwan Seid Busery
                </h2>
                <p className="text-lg text-primary-600 font-medium mb-3">
                  {language === 'tr' ? 'Kardiyoloji Uzmanı' : 'Cardiology Specialist'}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed max-w-lg">
                  {language === 'tr' 
                    ? 'Tanıdan tedavi planlamasına ve uzun dönem takibe kadar, güncel bilimsel veriler ve uluslararası kılavuzlar doğrultusunda kapsamlı kardiyoloji hizmeti sunmaktadır.'
                    : 'Providing comprehensive cardiology care, from diagnosis and treatment planning to long-term follow-up, based on current scientific evidence and international guidelines.'
                  }
                </p>
              </div>
            </div>

            {/* Credentials Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {credentials.map((credential, index) => {
                const Icon = credential.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm"
                  >
                    <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-900">{credential.title}</div>
                      <div className="text-xs text-gray-500">{credential.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Professional Memberships */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                {language === 'tr' ? 'Profesyonel Üyelikler' : 'Professional Memberships'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {memberships.map((membership, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-primary-50/50 rounded-lg border border-primary-100 hover:border-primary-200 transition-colors"
                  >
                    <Award className="w-3 h-3 text-primary-600" />
                    <span className="text-xs text-primary-800 font-medium">{membership}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation - 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-primary-600" />
              {language === 'tr' ? 'Navigasyon' : 'Navigation'}
            </h3>
            <nav className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information - 4 columns */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-primary-600" />
              {language === 'tr' ? 'İletişim Bilgileri' : 'Contact Information'}
            </h3>
            
            <div className="space-y-4">
              {/* Hospital Address with Card */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      {language === 'tr' ? 'Acıbadem Kartal Hastanesi' : 'Acıbadem Kartal Hospital'}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Çavuşoğlu, Sanayi Cd. No:1<br />
                      34873 Kartal / İstanbul
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Çavuşoğlu,+Sanayi+Cd.+No:1,+34873+Kartal/İstanbul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700 transition-colors"
                >
                  {language === 'tr' ? 'Haritada göster →' : 'View on Google Maps →'}
                </a>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-2 gap-3">
                {/* WhatsApp */}
                <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-900">
                      {language === 'tr' ? 'WhatsApp' : 'WhatsApp'}
                    </span>
                  </div>
                  <a
                    href="https://wa.me/905534186776"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors"
                  >
                    +90 553 418 6776
                  </a>
                </div>

                {/* Email */}
                <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-900">
                      {language === 'tr' ? 'E-posta' : 'Email'}
                    </span>
                  </div>
                  <a
                    href="mailto:redwan.busery@acibadem.com"
                    className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors text-xs truncate block"
                  >
                    redwan.busery@acibadem.com
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-900">LinkedIn</span>
                  </div>
                  <a
                    href="https://linkedin.com/in/redwan-seid-busery-cardiyology"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors text-xs truncate block"
                  >
                    Profil
                  </a>
                </div>

                {/* Consultation Hours */}
                <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-900">
                      {language === 'tr' ? 'Saatler' : 'Hours'}
                    </span>
                  </div>
                  <div className="text-xs text-gray-700">
                    <div>Mon-Fri: 8AM-8PM</div>
                    <div>Sat: 9AM-5PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-white">
              <Heart className="w-6 h-6 text-primary-400" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              © {currentYear} Dr. Redwan Seid Busery •{' '}
              <span className="text-primary-600 font-medium">
                {language === 'tr' 
                  ? 'Kardiyoloji Uzmanı' 
                  : 'Cardiology Specialist'
                }
              </span>
            </p>
            <p className="text-xs text-gray-500 mt-2 max-w-xl">
              {language === 'tr'
                ? 'Bu sitedeki tıbbi bilgiler bilgilendirme amaçlıdır. Tanı ve tedavi için mutlaka bir doktora danışınız.'
                : 'Medical information on this site is for informational purposes only. Always consult a physician for diagnosis and treatment.'
              }
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-xs text-gray-600 hover:text-primary-600 transition-colors font-medium"
            >
              {language === 'tr' ? 'Gizlilik' : 'Privacy'}
            </Link>
            <Link
              to="/terms"
              className="text-xs text-gray-600 hover:text-primary-600 transition-colors font-medium"
            >
              {language === 'tr' ? 'Şartlar' : 'Terms'}
            </Link>
            <Link
              to="/sitemap"
              className="text-xs text-gray-600 hover:text-primary-600 transition-colors font-medium"
            >
              {language === 'tr' ? 'Site Haritası' : 'Sitemap'}
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-200 z-50 group"
      >
        <ArrowUp className="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors mx-auto" />
      </motion.button>
    </footer>
  );
};

export default Footer;