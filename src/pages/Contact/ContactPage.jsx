import { useState } from 'react';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Loader2,
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
  const [status, setStatus] = useState('idle');

  const hospitalAddress = "Çavuşoğlu, Sanayi Cd. No:1, 34873 Kartal/İstanbul";
  const encodedAddress = encodeURIComponent(hospitalAddress);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      patient_name: formData.name,
      patient_email: formData.email,
      patient_phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: 'info@redwanbusery.com',
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 10000);
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
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
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-6"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {language === 'tr' ? 'Teşekkür Ederiz' : 'Thank You'}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {language === 'tr'
                        ? 'Mesajınız iletildi. E-posta onayını bekliyoruz. 24 saat içinde dönüş yapılacaktır.'
                        : 'Thank you. We are waiting for email confirmation. A response will be provided within 24 hours.'}
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      {language === 'tr' ? 'Yeni bir mesaj gönder' : 'Send another message'}
                    </button>
                  </motion.div>
                ) : (
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
                            placeholder="email@example.com"
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
                            placeholder="+90 (5__) ___-____"
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

                    {status === 'error' && (
                      <div className="text-red-600 text-sm font-medium">
                        {language === 'tr'
                          ? 'Bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp üzerinden iletişime geçin.'
                          : 'An error occurred. Please try again or contact via WhatsApp.'}
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-gray-200">
                      <div className="text-sm text-gray-600 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-500" />
                        <span>{language === 'tr' ? 'Güvenli ve şifreli' : 'Secure and encrypted'}</span>
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status === 'sending' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>{language === 'tr' ? 'Gönderiliyor...' : 'Sending...'}</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>{language === 'tr' ? 'Mesajı Gönder' : 'Send Message'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
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
                  <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-300 bg-gray-100">
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-gray-700 font-medium mb-2">
                        {contactInfo.hospital}
                      </p>
                      <p className="text-gray-600 text-sm text-center px-4">
                        {hospitalAddress}
                      </p>
                      <div className="mt-6">
                        <a
                          href={googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          <Navigation className="w-4 h-4" />
                          {language === 'en' ? 'Open in Google Maps' : 'Google Haritalar\'da Aç'}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <p className="text-sm text-gray-500">
                      {language === 'en' 
                        ? 'Click above to view location in Google Maps'
                        : 'Konumu Google Haritalar\'da görüntülemek için tıklayın'}
                    </p>
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