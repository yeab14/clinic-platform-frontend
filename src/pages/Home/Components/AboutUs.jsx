import React from 'react';

import {
  Award,
  GraduationCap,
  Heart,
} from 'lucide-react';

import { useLocale } from '@/providers/LocaleProvider';

const About = () => {
  const { language } = useLocale();
  
  return (
    <section className="py-12 bg-white">
      <div className="container-custom px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
            <Heart className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">
              {language === 'tr' ? 'Uzman Kardiyolog' : 'Board Certified Cardiologist'}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Dr. Redwan Seid Busery
          </h1>
          
          <p className="text-lg text-primary-600">
            {language === 'tr' ? 'Kardiyoloji Uzmanı' : 'Cardiology Specialist'}
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          {/* Biography */}
          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              {language === 'tr' 
                ? 'Geniş bir yelpazedeki kardiyovasküler hastalıklara sahip hastalara kapsamlı kardiyoloji hizmeti sunuyorum. Klinik pratiğim; doğru tanı, kişiye özel tedavi planlaması ve güncel bilimsel verilere dayalı takibi esas almaktadır.'
                : 'I provide comprehensive cardiology care for patients with a wide range of cardiovascular conditions. My clinical practice focuses on accurate diagnosis, individualized treatment plans, and follow-up based on current scientific evidence.'
              }
            </p>
          </div>

          {/* Education */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-primary-600" />
              <h2 className="text-xl font-bold text-gray-900">
                {language === 'tr' ? 'Eğitim' : 'Education'}
              </h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="text-primary-600 font-medium mb-1">
                  {language === 'tr' ? '2018-2023' : '2018-2023'}
                </div>
                <p className="text-gray-900 font-medium">
                  {language === 'tr' ? 'Marmara Üniversitesi Tıp Fakültesi, Kardiyoloji' : 'Marmara University, Faculty of Medicine, Cardiology'}
                </p>
              </div>
              
              <div>
                <div className="text-primary-600 font-medium mb-1">
                  {language === 'tr' ? '2012-2018' : '2012-2018'}
                </div>
                <p className="text-gray-900 font-medium">
                  {language === 'tr' ? 'Ondokuz Mayıs Üniversitesi' : 'Ondokuz Mayıs University'}
                </p>
              </div>
            </div>
          </div>

          {/* Memberships */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-primary-600" />
              <h2 className="text-xl font-bold text-gray-900">
                {language === 'tr' ? 'Üyelikler' : 'Memberships'}
              </h2>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-700">
                {language === 'tr' ? 'Türk Kardiyoloji Derneği' : 'Turkish Society of Cardiology'}
              </p>
              <p className="text-gray-700">
                {language === 'tr' ? 'Türk Tabipleri Birliği' : 'Turkish Medical Association'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;