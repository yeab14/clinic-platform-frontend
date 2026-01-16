// src/pages/BlogPage.jsx
import React, { useState } from 'react';

import { motion } from 'framer-motion';
import {
  ChevronRight,
  Clock,
  FileText,
  Tag,
  User,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { useLocale } from '@/providers/LocaleProvider';

const BlogPage = () => {
  const { language } = useLocale();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogContent = {
    title: language === 'tr' ? 'Hasta Eğitimi ve Blog' : 'Patient Education & Blog',
    subtitle: language === 'tr' 
      ? 'Kardiyovasküler sağlık hakkında bilimsel ve anlaşılır içerikler' 
      : 'Scientific yet understandable content about cardiovascular health',
    description: language === 'tr'
      ? 'Bu bölümde, kalp ve damar sağlığı hakkında güncel bilimsel verileri, pratik önerileri ve hasta eğitim içeriklerini paylaşıyorum. Tüm yazılar uluslararası kılavuzlar ve kanıta dayalı tıp temelinde hazırlanmıştır.'
      : 'In this section, I share current scientific data, practical recommendations, and patient education content about heart and vascular health. All articles are prepared based on international guidelines and evidence-based medicine.'
  };

  const categories = [
    { id: 'all', label: language === 'tr' ? 'Tümü' : 'All', count: 3 },
    { id: 'prevention', label: language === 'tr' ? 'Koruyucu Kardiyoloji' : 'Preventive Cardiology', count: 2 },
    { id: 'diseases', label: language === 'tr' ? 'Kalp Hastalıkları' : 'Heart Diseases', count: 1 },
    { id: 'treatment', label: language === 'tr' ? 'Tedaviler' : 'Treatments', count: 0 },
    { id: 'lifestyle', label: language === 'tr' ? 'Yaşam Tarzı' : 'Lifestyle', count: 0 }
  ];


  const blogArticles = [
    {
      id: 1,
      slug: 'koroner-kalp-hastaligi-ve-korunma',
      title: language === 'tr' 
        ? 'Koroner Kalp Hastalığı: Risk Faktörleri ve Korunma Yolları' 
        : 'Coronary Heart Disease: Risk Factors and Prevention Methods',
      excerpt: language === 'tr'
        ? 'Koroner arter hastalığı dünyada en sık görülen kalp hastalığıdır. Bu yazıda, risk faktörlerini azaltmak ve kalp krizini önlemek için kanıta dayalı stratejileri öğreneceksiniz.'
        : 'Coronary artery disease is the most common heart disease worldwide. In this article, you will learn evidence-based strategies to reduce risk factors and prevent heart attacks.',
      content: language === 'tr'
        ? 'Koroner kalp hastalığı, kalbi besleyen damarların daralması veya tıkanması sonucu oluşur. Sigara, yüksek tansiyon, diyabet, yüksek kolesterol ve genetik faktörler başlıca risk faktörleridir. Düzenli egzersiz, Akdeniz diyeti ve düzenli kontrol önemli korunma yöntemleridir.'
        : 'Coronary heart disease occurs due to narrowing or blockage of the arteries supplying blood to the heart. Smoking, high blood pressure, diabetes, high cholesterol, and genetic factors are main risk factors. Regular exercise, Mediterranean diet, and regular check-ups are important prevention methods.',
      category: 'prevention',
      readTime: language === 'tr' ? '6 dakika' : '6 minutes',
      date: '2024-01-15',
      author: 'Dr. Redwan Seid Busery',
      tags: language === 'tr' 
        ? ['koroner arter', 'kalp krizi', 'risk faktörleri', 'korunma'] 
        : ['coronary artery', 'heart attack', 'risk factors', 'prevention'],
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800'
    },
    {
      id: 2,
      slug: 'kalp-yetmezligi-tedavi-ve-takip',
      title: language === 'tr' 
        ? 'Kalp Yetmezliği: Modern Tedavi Yaklaşımları ve Yaşam Kalitesi' 
        : 'Heart Failure: Modern Treatment Approaches and Quality of Life',
      excerpt: language === 'tr'
        ? 'Kalp yetmezliği kronik bir durumdur ancak uygun tedavi ve yaşam tarzı değişiklikleri ile kontrol altına alınabilir. Güncel tedavi protokollerini ve hasta önerilerini bu yazıda bulabilirsiniz.'
        : 'Heart failure is a chronic condition but can be managed with appropriate treatment and lifestyle changes. Find current treatment protocols and patient recommendations in this article.',
      content: language === 'tr'
        ? 'Kalp yetmezliği, kalbin vücudun ihtiyaçlarını karşılayacak kadar kan pompalayamaması durumudur. Semptom yönetimi, ilaç tedavisi ve yaşam tarzı değişiklikleri tedavinin temelini oluşturur. Yeni ilaçlar ve cihaz tedavileri ile yaşam kalitesi önemli ölçüde artırılabilir.'
        : 'Heart failure is when the heart cannot pump enough blood to meet the body\'s needs. Symptom management, medication therapy, and lifestyle changes form the basis of treatment. Quality of life can be significantly improved with new medications and device therapies.',
      category: 'diseases',
      readTime: language === 'tr' ? '8 dakika' : '8 minutes',
      date: '2024-01-10',
      author: 'Dr. Redwan Seid Busery',
      tags: language === 'tr' 
        ? ['kalp yetmezliği', 'tedavi', 'yaşam kalitesi', 'takip'] 
        : ['heart failure', 'treatment', 'quality of life', 'follow-up'],
      imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800'
    },
    {
      id: 3,
      slug: 'yuksek-tansiyon-diyet-egzersiz',
      title: language === 'tr' 
        ? 'Hipertansiyon Yönetimi: Diyet ve Egzersiz Önerileri' 
        : 'Hypertension Management: Diet and Exercise Recommendations',
      excerpt: language === 'tr'
        ? 'Yüksek tansiyon sinsi bir hastalıktır ancak doğru beslenme ve düzenli fiziksel aktivite ile kontrol altına alınabilir. DASH diyeti ve etkili egzersiz programları hakkında detaylı bilgi.'
        : 'High blood pressure is a silent disease but can be controlled with proper nutrition and regular physical activity. Detailed information about DASH diet and effective exercise programs.',
      content: language === 'tr'
        ? 'Hipertansiyon, kalp hastalıkları ve inme için önemli bir risk faktörüdür. Tuz kısıtlaması, potasyumdan zengin besinler, düzenli aerobik egzersiz ve stres yönetimi kan basıncı kontrolünde kritik rol oynar. DASH diyeti kanıta dayalı en etkili beslenme yaklaşımlarından biridir.'
        : 'Hypertension is a major risk factor for heart disease and stroke. Salt restriction, potassium-rich foods, regular aerobic exercise, and stress management play critical roles in blood pressure control. The DASH diet is one of the most effective evidence-based nutritional approaches.',
      category: 'prevention',
      readTime: language === 'tr' ? '7 dakika' : '7 minutes',
      date: '2024-01-05',
      author: 'Dr. Redwan Seid Busery',
      tags: language === 'tr' 
        ? ['hipertansiyon', 'diyet', 'egzersiz', 'DASH diyeti'] 
        : ['hypertension', 'diet', 'exercise', 'DASH diet'],
      imageUrl: 'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&w=800'
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? blogArticles 
    : blogArticles.filter(article => article.category === selectedCategory);

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
              {language === 'tr' ? 'Bilimsel İçerik' : 'Scientific Content'}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {blogContent.title}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            {blogContent.subtitle}
          </p>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            {blogContent.description}
          </p>
        </motion.div>

       
        <div className="mb-8 md:mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{category.label}</span>
                {category.count > 0 && (
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-blue-500'
                      : 'bg-gray-300'
                  }`}>
                    {category.count}
                  </span>
                )}
              </button>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500">
              {language === 'tr' 
                ? `${blogArticles.length} makale • Tümü kanıta dayalı tıp temelinde`
                : `${blogArticles.length} articles • All based on evidence-based medicine`
              }
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
            
              <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
               
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2">
                    <div className={`px-3 py-1 text-xs font-medium rounded-full ${
                      article.category === 'prevention' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {categories.find(c => c.id === article.category)?.label}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
               
                <Link to={`/blog/${article.slug}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </Link>
                
               
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                
             
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{article.author}</div>
                      <div className="text-xs text-gray-500">{article.date}</div>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    <span>{language === 'tr' ? 'Devamını oku' : 'Read more'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                
              
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {language === 'tr' ? 'Yeni İçeriklerden Haberdar Olun' : 'Stay Updated with New Content'}
              </h3>
              
              <p className="text-gray-600">
                {language === 'tr'
                  ? 'Yeni blog yazıları ve güncel kardiyoloji bilgileri için e-posta listesine katılın.'
                  : 'Join the email list for new blog posts and current cardiology information.'
                }
              </p>
            </div>
            
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={language === 'tr' ? 'E-posta adresiniz' : 'Your email address'}
                  className="flex-1 px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  {language === 'tr' ? 'Abone ol' : 'Subscribe'}
                </button>
              </div>
              
              <p className="text-xs text-gray-500 text-center">
                {language === 'tr'
                  ? 'Ayda en fazla 1 e-posta gönderiyoruz. İstediğiniz zaman abonelikten çıkabilirsiniz.'
                  : 'We send maximum 1 email per month. You can unsubscribe at any time.'
                }
              </p>
            </form>
          </div>
        </motion.div>

     
      </div>
    </div>
  );
};

export default BlogPage;