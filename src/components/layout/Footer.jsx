import { motion } from 'framer-motion';
import {
  ArrowUp,
  Clock,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { useLocale } from '@/providers/LocaleProvider';

const Footer = () => {
  const { language } = useLocale();
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: language === 'tr' ? 'Ana Sayfa' : 'Home', path: '/' },
    { name: language === 'tr' ? 'Hakkımda' : 'About', path: '/about' },
    { name: language === 'tr' ? 'Hizmetler' : 'Services', path: '/services' },
    { name: language === 'tr' ? 'Randevu' : 'Appointment', path: '/appointment' },
    { name: language === 'tr' ? 'İletişim' : 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-blue-800 text-white">
      <div className="container-custom px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  Dr. Redwan Seid Busery
                </h2>
                <p className="text-lg text-cyan-300 font-medium">
                  {language === 'tr' ? 'Kardiyoloji Uzmanı' : 'Cardiology Specialist'}
                </p>
              </div>
            </div>
            <p className="text-blue-200 text-sm mb-4">
              {language === 'tr' 
                ? 'Güncel bilimsel veriler ve uluslararası kılavuzlar doğrultusunda kardiyoloji hizmeti.'
                : 'Cardiology care based on current scientific evidence and international guidelines.'
              }
            </p>
            
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/redwan-seid-busery-cardiology/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-900/20 rounded-lg flex items-center justify-center hover:bg-blue-900/30 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {language === 'tr' ? 'Hızlı Erişim' : 'Quick Links'}
            </h3>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-blue-200 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {language === 'tr' ? 'İletişim' : 'Contact'}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <a
                    href="https://wa.me/905534186776"
                    className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                  >
                    +90 553 418 6776
                  </a>
                  <p className="text-xs text-blue-300">
                    {language === 'tr' ? 'WhatsApp' : 'WhatsApp'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <a
                    href="mailto:info@redwanbusery.com"
                    className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                  >
                    info@redwanbusery.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {language === 'tr' ? 'Acıbadem Kartal Hastanesi' : 'Acıbadem Kartal Hospital'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {language === 'tr' ? 'Çalışma Saatleri' : 'Working Hours'}
                  </p>
                  <p className="text-xs text-blue-300">
                    Mon-Fri: 8AM-8PM<br />
                    Sat: 9AM-5PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-300">
              © {currentYear} Dr. Redwan Seid Busery
            </p>
            
            <div className="flex items-center gap-4">
              <Link
                to="/privacy"
                className="text-sm text-blue-300 hover:text-white transition-colors"
              >
                {language === 'tr' ? 'Gizlilik' : 'Privacy'}
              </Link>
              <Link
                to="/terms"
                className="text-sm text-blue-300 hover:text-white transition-colors"
              >
                {language === 'tr' ? 'Şartlar' : 'Terms'}
              </Link>
              <Link
                to="/sitemap"
                className="text-sm text-blue-300 hover:text-white transition-colors"
              >
                {language === 'tr' ? 'Site Haritası' : 'Sitemap'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-10 h-10 bg-blue-600 rounded-lg shadow-lg z-50 flex items-center justify-center"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;