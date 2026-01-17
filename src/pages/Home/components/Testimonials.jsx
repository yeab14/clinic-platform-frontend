import React, { useState } from 'react';

import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from 'lucide-react';

import { useLocale } from '@/providers/LocaleProvider';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { language } = useLocale();

  const testimonials = language === 'tr' ? [
    {
      id: 1,
      name: "Ahmet Y.",
      condition: "Kalp ritim bozukluğu",
      content: "Dr. Busery'nin yaklaşımı ve tedavisi sayesinde sağlığıma kavuştum. Çok profesyonel ve ilgili bir doktor.",
      rating: 5
    },
    {
      id: 2,
      name: "Ayşe K.",
      condition: "Hipertansiyon",
      content: "Randevu sistemi çok pratik, bekleme süresi çok kısa. Dr. Busery tüm sorularımı detaylıca cevapladı.",
      rating: 5
    },
    {
      id: 3,
      name: "Mehmet T.",
      condition: "Koroner arter hastalığı",
      content: "Tedavi sürecimde gösterdiği özen ve takip için çok teşekkür ederim. Kesinlikle tavsiye ediyorum.",
      rating: 5
    },
  ] : [
    {
      id: 1,
      name: "John D.",
      condition: "Arrhythmia",
      content: "Thanks to Dr. Busery's approach and treatment, I regained my health. A very professional and caring doctor.",
      rating: 5
    },
    {
      id: 2,
      name: "Maria S.",
      condition: "Hypertension",
      content: "The appointment system is very practical, waiting time is very short. Dr. Busery answered all my questions in detail.",
      rating: 5
    },
    {
      id: 3,
      name: "Robert M.",
      condition: "Coronary artery disease",
      content: "Thank you very much for the care and follow-up during my treatment process. I definitely recommend him.",
      rating: 5
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-blue-50/20 to-white">
      <div className="container-custom px-4">
      
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700">
              {language === 'tr' ? 'Hasta Deneyimleri' : 'Patient Experiences'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'tr' ? 'Hasta Görüşleri' : 'Patient Testimonials'}
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === 'tr' 
              ? 'Hastalarımızın deneyimlerinden birkaç örnek'
              : 'A few examples from our patients\' experiences'
            }
          </p>
        </div>

      
        <div className="max-w-3xl mx-auto">
          <div className="relative">
        
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
             
              <div className="flex justify-center mb-4">
                <Quote className="w-8 h-8 text-blue-200" />
              </div>
              
             
              <div className="mb-6">
                <p className="text-gray-700 text-center italic">
                  "{testimonials[activeTestimonial].content}"
                </p>
              </div>
              
           
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-blue-500 fill-current" />
                  ))}
                </div>
              </div>
              
          
              <div className="text-center">
                <div className="font-medium text-gray-900">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonials[activeTestimonial].condition}
                </div>
              </div>
            </motion.div>

          
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-400 hover:shadow-sm transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeTestimonial 
                        ? 'w-6 bg-blue-600' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-400 hover:shadow-sm transition-all"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            {language === 'tr' 
              ? 'Daha fazla hasta deneyimi için bizimle iletişime geçebilirsiniz.'
              : 'Contact us for more patient experiences.'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;