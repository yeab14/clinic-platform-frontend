import React from 'react';
import { useLocale } from '@/providers/LocaleProvider';
import { AlertCircle, Scale, Globe, Info } from 'lucide-react';

const Terms = () => {
  const { language } = useLocale();

  const content = {
    title: language === 'tr' ? 'Kullanım Şartları' : 'Terms of Service',
    lastUpdated: language === 'tr' ? 'Son Güncelleme: Ocak 2026' : 'Last Updated: January 2026',
    sections: [
      {
        icon: <AlertCircle className="w-6 h-6 text-red-600" />,
        heading: language === 'tr' ? 'Tıbbi Uyarı' : 'Medical Disclaimer',
        text: language === 'tr'
          ? 'Bu web sitesindeki içerik yalnızca bilgilendirme amaçlıdır. Acil tıbbi durumlarda lütfen en yakın sağlık kuruluşuna başvurun veya 112yi arayın.'
          : 'The content on this website is for informational purposes only. In case of a medical emergency, please visit the nearest health center or call emergency services (112 in Turkey).'
      },
      {
        icon: <Scale className="w-6 h-6 text-blue-600" />,
        heading: language === 'tr' ? 'Danışmanlık Hizmeti' : 'Consultation Service',
        text: language === 'tr'
          ? 'Web sitesi üzerinden yapılan iletişim, resmi bir doktor-hasta ilişkisi kurmaz. Kesin teşhis için fiziksel muayene gereklidir.'
          : 'Communication via the website does not establish a formal doctor-patient relationship. A physical examination is required for a definitive diagnosis.'
      },
      {
        icon: <Globe className="w-6 h-6 text-blue-600" />,
        heading: language === 'tr' ? 'Geçerli Hukuk' : 'Governing Law',
        text: language === 'tr'
          ? 'Bu şartlar Türkiye Cumhuriyeti kanunlarına tabidir. Her türlü uyuşmazlıkta İstanbul Mahkemeleri yetkilidir.'
          : 'These terms are governed by the laws of the Republic of Turkey. Istanbul Courts have jurisdiction over any disputes.'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{content.title}</h1>
        <p className="text-gray-500 mb-10">{content.lastUpdated}</p>
        
        <div className="space-y-12">
          {content.sections.map((section, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-1">{section.icon}</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{section.heading}</h2>
                <p className="text-gray-600 leading-relaxed">{section.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terms;