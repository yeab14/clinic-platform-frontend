import { useState } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import {
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  Shield,
  Users,
} from 'lucide-react';

import { useLocale } from '@/providers/LocaleProvider';

const ContactPage = () => {
  const { language } = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const hospitalAddress = "Çavuşoğlu, Sanayi Cd. No:1, 34873 Kartal/İstanbul";
  const encodedAddress = encodeURIComponent(hospitalAddress);
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.478278858471!2d29.180827315412032!3d40.90831797931219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9c6bcdd6b3d%3A0x5e3c5c2c8c8c8c8c!2s${encodedAddress}!5e0!3m2!1sen!2str!4v1641234567890!5m2!1sen!2str`;
  const googleMapsUrl = `https://maps.google.com/?q=${encodedAddress}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = {
    whatsapp: '+90 553 418 6776',
    email: 'info@redwanbusery.com',
    address: hospitalAddress,
    hospital: language === 'tr' ? 'Acıbadem Kartal Hastanesi' : 'Acıbadem Kartal Hospital'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white">
      <div className="relative container-custom px-4 py-8 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
        
            <span className="text-sm font-medium text-blue-700">
              {language === 'en' ? '24/7 WhatsApp Support' : '7/24 WhatsApp Desteği'}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'tr' ? 'İletişim' : 'Contact'}
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            {language === 'tr' 
              ? 'Dr. Redwan Seid Busery ile iletişime geçmek için aşağıdaki yöntemleri kullanabilirsiniz. Tıbbi danışmanlık ve randevu için WhatsApp ile hemen iletişime geçin.'
              : 'You can use the following methods to contact Dr. Redwan Seid Busery. Use WhatsApp for immediate medical consultation and appointment booking.'
            }
          </p>
        </motion.div>

   
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
     
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="p-6">
            
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 overflow-hidden"
                    >
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1">
                              {language === 'tr' ? 'Mesajınız Gönderildi' : 'Message Sent'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {language === 'tr'
                                ? 'Mesajınızı aldım. Size 24 saat içinde dönüş yapacağım. Acil durumlar için lütfen WhatsApp kullanın.'
                                : 'I have received your message. I will get back to you within 24 hours. For urgent matters, please use WhatsApp.'
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {language === 'tr' ? 'Mesaj Gönder' : 'Send Message'}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {language === 'tr' ? '24 saat içinde dönüş' : 'Response within 24 hours'}
                    </p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'tr' ? 'Ad Soyad *' : 'Full Name *'}
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                          placeholder={language === 'tr' ? 'Adınız Soyadınız' : 'Your name'}
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'tr' ? 'E-posta *' : 'Email *'}
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                          placeholder={language === 'tr' ? 'email@example.com' : 'email@example.com'}
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'tr' ? 'Telefon' : 'Phone'}
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                          placeholder={language === 'tr' ? '+90 (5__) ___-____' : '+90 (5__) ___-____'}
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'tr' ? 'Konu *' : 'Subject *'}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        placeholder={language === 'tr' ? 'Mesajınızın konusu' : 'Message subject'}
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'tr' ? 'Mesaj *' : 'Message *'}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none resize-none"
                      placeholder={language === 'tr' ? 'Mesajınızı buraya yazın...' : 'Write your message here...'}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-600 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-500" />
                      <span>{language === 'tr' ? 'Güvenli ve şifreli' : 'Secure and encrypted'}</span>
                    </div>
                    
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Send className="w-5 h-5" />
                      <span>{language === 'tr' ? 'Mesajı Gönder' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

         
          <div className="space-y-6">
   
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    {language === 'tr' ? 'İletişim Bilgileri' : 'Contact Information'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'tr' ? 'Doğrudan iletişim' : 'Direct contact methods'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/905534186776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900">WhatsApp</div>
                    <div className="text-green-700">{contactInfo.whatsapp}</div>
                    <div className="text-sm text-gray-600">
                      {language === 'tr' ? 'Tıbbi danışmanlık ve randevu' : 'Medical consultation & appointment'}
                    </div>
                  </div>
                </a>
                
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors"
                >
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-blue-700">{contactInfo.email}</div>
                    <div className="text-sm text-gray-600">
                      {language === 'tr' ? 'Detaylı sorular ve belgeler' : 'Detailed questions & documents'}
                    </div>
                  </div>
                </a>
                
              </div>
            </div>

       
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {language === 'tr' ? 'Konum' : 'Location'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {language === 'tr' ? 'Acıbadem Kartal Hastanesi' : 'Acıbadem Kartal Hospital'}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-300">
                    <iframe
                      src={googleMapsEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Acıbadem Kartal Hospital Location"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="mt-3 flex justify-end">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <Navigation className="w-4 h-4" />
                      {language === 'en' ? 'Open in Maps' : 'Haritada Aç'}
                    </a>
                  </div>
                </div>
              </div>
            </div>

         
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    {language === 'tr' ? 'Çalışma Saatleri' : 'Working Hours'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'tr' ? 'Randevu saatleri' : 'Appointment hours'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2">
                  <span className="font-medium text-gray-900">{language === 'tr' ? 'Pazartesi - Cuma' : 'Monday - Friday'}</span>
                  <span className="text-gray-700">8:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span className="font-medium text-gray-900">{language === 'tr' ? 'Cumartesi' : 'Saturday'}</span>
                  <span className="text-gray-700">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                  <span className="font-medium text-blue-700">24/7</span>
                  <span className="text-blue-600 font-medium">{language === 'tr' ? 'WhatsApp Destek' : 'WhatsApp Support'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;