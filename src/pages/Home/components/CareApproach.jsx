import React from 'react';

import { motion } from 'framer-motion';
import {
  Heart,
  Shield,
  Target,
  Users,
} from 'lucide-react';

import { useLocale } from '@/providers/LocaleProvider';

const CareApproach = () => {
  const { language } = useLocale();

  const carePrinciples = [
    {
      icon: Heart,
      title: language === 'tr' ? 'Bütüncül Bakım' : 'Holistic Care',
      description: language === 'tr'
        ? 'Tüm vücut sistemini göz önünde bulundurarak tedavi planlıyorum.'
        : 'I plan treatment considering the entire body system.',
    },
    {
      icon: Users,
      title: language === 'tr' ? 'Hasta Odaklı' : 'Patient-Focused',
      description: language === 'tr'
        ? 'Her hastayı bireysel olarak değerlendiriyorum.'
        : 'I evaluate each patient individually.',
    },
    {
      icon: Target,
      title: language === 'tr' ? 'Kanıta Dayalı' : 'Evidence-Based',
      description: language === 'tr'
        ? 'Güncel bilimsel verilere dayalı tedavi uyguluyorum.'
        : 'I provide treatment based on current scientific evidence.',
    },
    {
      icon: Shield,
      title: language === 'tr' ? 'Güvenli Uygulama' : 'Safe Practice',
      description: language === 'tr'
        ? 'En yüksek güvenlik standartlarını takip ediyorum.'
        : 'I follow the highest safety standards.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom px-4">
        <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            
            <span className="text-sm font-medium text-blue-600">
              {language === 'tr' ? 'Bakım Yaklaşımı' : 'Care Approach'}
            </span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {language === 'tr' ? 'Tedavi Felsefem' : 'My Treatment Philosophy'}
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'tr'
              ? 'Hastalarıma bireysel, kapsamlı ve kanıta dayalı kardiyoloji bakımı sunuyorum.'
              : 'I provide individualized, comprehensive, and evidence-based cardiology care to my patients.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {carePrinciples.map((principle, index) => {
            const Icon = principle.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                  {principle.title}
                </h3>

                <p className="text-gray-600 text-center text-sm">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareApproach;