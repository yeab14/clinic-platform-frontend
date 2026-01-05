import React, { useState } from 'react';

import { motion } from 'framer-motion';
import {
  Calendar,
  CheckCircle,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
} from 'lucide-react';

import { useLocale } from '@/providers/LocaleProvider';

const AppointmentPage = () => {
  const { language } = useLocale();
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = language === 'tr' ? [
    {
      id: 'basic',
      name: 'Temel Kardiyoloji Hizmetleri',
      services: [
        "Kapsamlı kardiyolojik değerlendirme",
        "Elektrokardiyografi (EKG) ve ritim takibi",
        "Transtorasik, transözofageal ve stres ekokardiyografi",
        "Bilgisayarlı tomografi koroner anjiyografi",
        "İnvaziv koroner anjiyografi",
        "Kapak hastalıklarının değerlendirilmesi ve takibi",
        "Aort hastalıkları ve pulmoner hipertansiyon değerlendirmesi"
      ]
    },
    {
      id: 'advanced',
      name: 'İleri Kardiyoloji İşlemleri',
      services: [
        "Kronik Total Oklüzyon (CTO) tedavisi",
        "Kalıcı kalp pili implantasyonu",
        "İmplante Edilebilir Kardiyoverter-Defibrilatör (ICD)",
        "Transkateter Aort Kapak İmplantasyonu (TAVI)",
        "Mitral balon valvüloplasti",
        "Koroner arter bypass cerrahisi (CABG)",
        "Cerrahi kapak işlemleri"
      ],
      note: language === 'tr' 
        ? 'İleri işlemler, uzman merkezlerle koordinasyon içinde planlanmaktadır.'
        : 'Advanced procedures are coordinated with specialized centers.'
    }
  ] : [
    {
      id: 'basic',
      name: 'Basic Cardiology Services',
      services: [
        "Comprehensive cardiology evaluation",
        "Electrocardiography (ECG) and rhythm monitoring",
        "Transthoracic, transesophageal, and stress echocardiography",
        "Computed coronary angiography",
        "Invasive coronary angiography",
        "Valvular heart disease assessment and follow-up",
        "Aortic diseases and pulmonary hypertension evaluation"
      ]
    },
    {
      id: 'advanced',
      name: 'Advanced Cardiology Procedures',
      services: [
        "Chronic Total Occlusion (CTO) treatment",
        "Pacemaker implantation",
        "Implantable Cardioverter-Defibrillators (ICDs)",
        "Transcatheter Aortic Valve Implantation (TAVI)",
        "Mitral balloon valvuloplasty",
        "Coronary artery bypass surgery (CABG)",
        "Surgical valve procedures"
      ],
      note: 'Advanced procedures are coordinated with specialized centers.'
    }
  ];

  const availableTimes = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSelectedService(null);
      setSelectedDate('');
      setSelectedTime('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white">
      <div className="relative container-custom px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
          
            <span className="text-sm font-medium text-blue-700">
              {language === 'tr' ? 'Uzman Kardiyoloji Randevusu' : 'Specialized Cardiology Appointment'}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'tr' ? 'Randevu Al' : 'Book Appointment'}
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            {language === 'tr' 
              ? 'Dr. Redwan Seid Busery ile kardiyoloji randevunuzu planlayın'
              : 'Schedule your cardiology appointment with Dr. Redwan Seid Busery'
            }
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 max-w-2xl mx-auto"
          >
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    {language === 'tr' ? 'Randevunuz Alındı' : 'Appointment Received'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'tr'
                      ? 'Randevu detaylarınızı WhatsApp üzerinden paylaşacağım. 24 saat içinde sizinle iletişime geçeceğim.'
                      : 'I will share your appointment details via WhatsApp. I will contact you within 24 hours.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Left: Appointment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {language === 'tr' ? 'Randevu Bilgileri' : 'Appointment Information'}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {language === 'tr' ? 'Lütfen aşağıdaki bilgileri doldurun' : 'Please fill in the information below'}
                    </p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Services Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      {language === 'tr' ? 'Hizmet Seçimi *' : 'Service Selection *'}
                    </label>
                    <div className="space-y-4">
                      {services.map(service => (
                        <div key={service.id} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            type="button"
                            onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                            className={`w-full p-4 text-left flex items-center justify-between transition-colors ${
                              selectedService === service.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                            }`}
                          >
                            <div className="font-medium text-gray-900">{service.name}</div>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              selectedService === service.id ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                            }`}>
                              {selectedService === service.id && (
                                <CheckCircle className="w-4 h-4 text-white" />
                              )}
                            </div>
                          </button>
                          
                          {selectedService === service.id && (
                            <div className="p-4 border-t border-gray-200 bg-gray-50">
                              <ul className="space-y-2">
                                {service.services.map((item, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{item}</span>
                                  </li>
                                ))}
                              </ul>
                              {service.note && (
                                <div className="mt-4 text-sm text-blue-800 bg-blue-50 p-3 rounded-lg">
                                  {service.note}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Date and Time Selection */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'tr' ? 'Tarih *' : 'Date *'}
                      </label>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'tr' ? 'Saat *' : 'Time *'}
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {availableTimes.map(time => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 text-sm rounded-lg border transition-colors ${
                              selectedTime === time
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                      {language === 'tr' ? 'Kişisel Bilgiler' : 'Personal Information'}
                    </h2>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {language === 'tr' ? 'Ad Soyad *' : 'Full Name *'}
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                            placeholder={language === 'tr' ? 'Adınız Soyadınız' : 'Your name'}
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {language === 'tr' ? 'E-posta *' : 'Email *'}
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                            placeholder="email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {language === 'tr' ? 'Telefon *' : 'Phone *'}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                          placeholder={language === 'tr' ? '+90 (5__) ___-____' : '+90 (5__) ___-____'}
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {language === 'tr' ? 'Ek Not' : 'Additional Note'}
                        </label>
                        <textarea
                          name="message"
                          rows="3"
                          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none resize-none"
                          placeholder={language === 'tr' ? 'Eklemek istediğiniz bir not varsa...' : 'Any additional notes...'}
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 border-t border-gray-200">
                    <button
                      type="submit"
                      disabled={!selectedService || !selectedDate || !selectedTime}
                      className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {language === 'tr' ? 'Randevuyu Gönder' : 'Send Appointment Request'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right: Contact & Info */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    {language === 'tr' ? 'İletişim' : 'Contact'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'tr' ? 'Doğrudan iletişim' : 'Direct contact'}
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
                    <div className="text-green-700">+90 553 418 6776</div>
                    <div className="text-sm text-gray-600">
                      {language === 'tr' ? 'Tıbbi danışmanlık' : 'Medical consultation'}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Working Hours */}
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

            {/* Location */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
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
              
              <div className="text-sm text-gray-700">
                {language === 'tr' 
                  ? 'Çavuşoğlu, Sanayi Cd. No:1, 34873 Kartal/İstanbul'
                  : 'Çavuşoğlu, Sanayi Cd. No:1, 34873 Kartal/İstanbul'
                }
              </div>
            </div>

            {/* Security Note */}
            <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <h4 className="font-medium text-gray-900">
                  {language === 'tr' ? 'Güvenlik Notu' : 'Security Note'}
                </h4>
              </div>
              <p className="text-sm text-blue-800">
                {language === 'tr'
                  ? 'Tüm iletişim bilgileriniz güvenli ve şifrelidir. Size yalnızca randevu ile ilgili bilgi verilecektir.'
                  : 'All your contact information is secure and encrypted. You will only receive information related to your appointment.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;