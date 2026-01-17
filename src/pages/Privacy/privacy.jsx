import React from 'react';
import { useLocale } from '@/providers/LocaleProvider';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
  const { language } = useLocale();

  const content = {
    title: language === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy',
    lastUpdated: language === 'tr' ? 'Son Güncelleme: Ocak 2026' : 'Last Updated: January 2026',
    sections: [
      {
        icon: <Shield className="w-6 h-6 text-blue-600" />,
        heading: language === 'tr' ? 'Veri Sorumlusu' : 'Data Controller',
        text: language === 'tr' 
          ? 'Kişisel verileriniz, Dr. Redwan Seid Busery tarafından 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca korunmaktadır.'
          : 'Your personal data is protected by Dr. Redwan Seid Busery in accordance with the Law on Protection of Personal Data (KVKK) in Turkey.'
      },
      {
        icon: <Eye className="w-6 h-6 text-blue-600" />,
        heading: language === 'tr' ? 'Toplanan Veriler' : 'Data Collection',
        text: language === 'tr'
          ? 'Web sitemizdeki iletişim formu aracılığıyla adınız, e-posta adresiniz, telefon numaranız ve tıbbi mesajınız toplanmaktadır.'
          : 'We collect your name, email address, phone number, and medical inquiry message through the contact form on our website.'
      },
      {
        icon: <Lock className="w-6 h-6 text-blue-600" />,
        heading: language === 'tr' ? 'Veri Kullanımı' : 'Use of Data',
        text: language === 'tr'
          ? 'Verileriniz yalnızca randevu planlaması ve tıbbi danışmanlık amacıyla kullanılır. Üçüncü şahıslarla asla paylaşılmaz.'
          : 'Your data is used solely for appointment scheduling and medical consultation. It is never shared with third parties.'
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

export default Privacy;