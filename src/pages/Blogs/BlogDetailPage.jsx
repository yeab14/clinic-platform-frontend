// src/pages/BlogDetailPage.jsx
import React, {
  useEffect,
  useState,
} from 'react';

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Bookmark,
  Calendar,
  ChevronRight,
  Clock,
  Facebook,
  FileText,
  Linkedin,
  Share2,
  Tag,
  Twitter,
  User,
} from 'lucide-react';
import {
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom';

import { useLocale } from '@/providers/LocaleProvider';

const BlogDetailPage = () => {
  const { language } = useLocale();
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

 
  const allArticles = [
    {
      id: 1,
      slug: 'koroner-kalp-hastaligi-ve-korunma',
      title: language === 'tr' 
        ? 'Koroner Kalp Hastalığı: Risk Faktörleri ve Korunma Yolları' 
        : 'Coronary Heart Disease: Risk Factors and Prevention Methods',
      content: language === 'tr' ? `
        <h2>Koroner Kalp Hastalığı Nedir?</h2>
        <p>Koroner kalp hastalığı, kalbi besleyen koroner arterlerin daralması veya tıkanması sonucu ortaya çıkan bir durumdur. Bu durum, kalp kasının yeterince oksijen ve besin alamamasına neden olur.</p>
        
        <h2>Ana Risk Faktörleri</h2>
        <h3>Değiştirilemeyen Faktörler</h3>
        <ul>
          <li><strong>Yaş:</strong> 45 yaş üstü erkekler, 55 yaş üstü kadınlar</li>
          <li><strong>Cinsiyet:</strong> Erkeklerde daha sık görülür</li>
          <li><strong>Aile öyküsü:</strong> Birinci derece akrabalarda erken kalp hastalığı</li>
        </ul>
        
        <h3>Değiştirilebilir Faktörler</h3>
        <ul>
          <li><strong>Sigara:</strong> En önemli değiştirilebilir risk faktörü</li>
          <li><strong>Yüksek tansiyon:</strong> 140/90 mmHg üzeri değerler</li>
          <li><strong>Diyabet:</strong> Kan şekeri kontrolünün önemi</li>
          <li><strong>Yüksek kolesterol:</strong> LDL kolesterol yüksekliği</li>
          <li><strong>Obezite:</strong> Vücut kitle indeksi 30 üzeri</li>
          <li><strong>Fiziksel hareketsizlik:</strong> Haftada 150 dakika egzersiz önerisi</li>
        </ul>
        
        <h2>Korunma Yöntemleri</h2>
        <h3>Yaşam Tarzı Değişiklikleri</h3>
        <p><strong>Akdeniz Diyeti:</strong> Zeytinyağı, balık, meyve-sebze, tam tahıllar</p>
        <p><strong>Düzenli Egzersiz:</strong> Haftada 5 gün 30 dakika orta şiddette aktivite</p>
        <p><strong>Stres Yönetimi:</strong> Meditasyon, yoga, nefes egzersizleri</p>
        
        <h3>Düzenli Kontroller</h3>
        <ul>
          <li>Yıllık kan basıncı ölçümü</li>
          <li>5 yılda bir lipid profili</li>
          <li>Diyabet taraması (risk faktörü varsa)</li>
        </ul>
        
        <h2>Önemli Belirtiler</h2>
        <div class="warning-box">
          <strong>Acil durum belirtileri:</strong>
          <ul>
            <li>Göğüs ağrısı veya baskı hissi</li>
            <li>Nefes darlığı</li>
            <li>Çene, boyun veya kol ağrısı</li>
            <li>Bulantı veya baş dönmesi</li>
          </ul>
        </div>
        
        <h2>Sonuç</h2>
        <p>Koroner kalp hastalığı önlenebilir bir hastalıktır. Risk faktörlerinin erken tespiti ve yaşam tarzı değişiklikleri ile kalp krizi riski önemli ölçüde azaltılabilir.</p>
      ` : `
        <h2>What is Coronary Heart Disease?</h2>
        <p>Coronary heart disease is a condition that occurs due to narrowing or blockage of the coronary arteries that supply blood to the heart. This situation prevents the heart muscle from receiving sufficient oxygen and nutrients.</p>
        
        <h2>Main Risk Factors</h2>
        <h3>Non-modifiable Factors</h3>
        <ul>
          <li><strong>Age:</strong> Men over 45, women over 55</li>
          <li><strong>Gender:</strong> More common in men</li>
          <li><strong>Family history:</strong> Early heart disease in first-degree relatives</li>
        </ul>
        
        <h3>Modifiable Factors</h3>
        <ul>
          <li><strong>Smoking:</strong> Most important modifiable risk factor</li>
          <li><strong>High blood pressure:</strong> Values above 140/90 mmHg</li>
          <li><strong>Diabetes:</strong> Importance of blood sugar control</li>
          <li><strong>High cholesterol:</strong> Elevated LDL cholesterol</li>
          <li><strong>Obezity:</strong> Body mass index over 30</li>
          <li><strong>Physical inactivity:</strong> Recommendation of 150 minutes exercise per week</li>
        </ul>
        
        <h2>Prevention Methods</h2>
        <h3>Lifestyle Changes</h3>
        <p><strong>Mediterranean Diet:</strong> Olive oil, fish, fruits-vegetables, whole grains</p>
        <p><strong>Regular Exercise:</strong> 30 minutes moderate activity 5 days a week</p>
        <p><strong>Stress Management:</strong> Meditation, yoga, breathing exercises</p>
        
        <h3>Regular Check-ups</h3>
        <ul>
          <li>Annual blood pressure measurement</li>
          <li>Lipid profile every 5 years</li>
          <li>Diabetes screening (if risk factors present)</li>
        </ul>
        
        <h2>Important Symptoms</h2>
        <div class="warning-box">
          <strong>Emergency symptoms:</strong>
          <ul>
            <li>Chest pain or pressure sensation</li>
            <li>Shortness of breath</li>
            <li>Jaw, neck or arm pain</li>
            <li>Nausea or dizziness</li>
          </ul>
        </div>
        
        <h2>Conclusion</h2>
        <p>Coronary heart disease is a preventable disease. Early detection of risk factors and lifestyle changes can significantly reduce heart attack risk.</p>
      `,
      excerpt: language === 'tr'
        ? 'Koroner arter hastalığı dünyada en sık görülen kalp hastalığıdır. Bu yazıda, risk faktörlerini azaltmak ve kalp krizini önlemek için kanıta dayalı stratejileri öğreneceksiniz.'
        : 'Coronary artery disease is the most common heart disease worldwide. In this article, you will learn evidence-based strategies to reduce risk factors and prevent heart attacks.',
      category: 'prevention',
      readTime: language === 'tr' ? '6 dakika' : '6 minutes',
      date: '2024-01-15',
      author: 'Dr. Redwan Seid Busery',
      authorTitle: language === 'tr' ? 'Kardiyoloji Uzmanı' : 'Cardiology Specialist',
      authorBio: language === 'tr'
        ? 'Acıbadem Kartal Hastanesi\'nde kardiyoloji uzmanı. Koroner arter hastalığı ve önleyici kardiyoloji alanında uzmanlaşmıştır.'
        : 'Cardiology specialist at Acıbadem Kartal Hospital. Specialized in coronary artery disease and preventive cardiology.',
      tags: language === 'tr' 
        ? ['koroner arter', 'kalp krizi', 'risk faktörleri', 'korunma', 'yaşam tarzı'] 
        : ['coronary artery', 'heart attack', 'risk factors', 'prevention', 'lifestyle'],
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200',
      views: 1243,
      shares: 89
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
      authorTitle: language === 'tr' ? 'Kardiyoloji Uzmanı' : 'Cardiology Specialist',
      authorBio: language === 'tr'
        ? 'Acıbadem Kartal Hastanesi\'nde kardiyoloji uzmanı. Kalp yetmezliği ve kapak hastalıkları alanında uzmanlaşmıştır.'
        : 'Cardiology specialist at Acıbadem Kartal Hospital. Specialized in heart failure and valve diseases.',
      tags: language === 'tr' 
        ? ['kalp yetmezliği', 'tedavi', 'yaşam kalitesi', 'takip'] 
        : ['heart failure', 'treatment', 'quality of life', 'follow-up'],
      imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200',
      views: 892,
      shares: 45
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
      authorTitle: language === 'tr' ? 'Kardiyoloji Uzmanı' : 'Cardiology Specialist',
      authorBio: language === 'tr'
        ? 'Acıbadem Kartal Hastanesi\'nde kardiyoloji uzmanı. Hipertansiyon ve metabolik sendrom alanında uzmanlaşmıştır.'
        : 'Cardiology specialist at Acıbadem Kartal Hospital. Specialized in hypertension and metabolic syndrome.',
      tags: language === 'tr' 
        ? ['hipertansiyon', 'diyet', 'egzersiz', 'DASH diyeti'] 
        : ['hypertension', 'diet', 'exercise', 'DASH diet'],
      imageUrl: 'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&w=1200',
      views: 1107,
      shares: 67
    }
  ];

  useEffect(() => {

    const foundArticle = allArticles.find(a => a.slug === slug);
    
    if (foundArticle) {
      setArticle(foundArticle);

      const related = allArticles
        .filter(a => a.id !== foundArticle.id && a.category === foundArticle.category)
        .slice(0, 2);
      
   
      if (related.length === 0) {
        setRelatedArticles(allArticles.filter(a => a.id !== foundArticle.id).slice(0, 2));
      } else {
        setRelatedArticles(related);
      }
      
     
      document.title = `${foundArticle.title} | Dr. Redwan Seid Busery`;
    } else {

      navigate('/blog');
    }
  }, [slug, language, navigate]);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = article?.title || '';
    const text = article?.excerpt || '';
    
    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text)}`, '_blank');
        break;
      default:
        if (navigator.share) {
          navigator.share({
            title: title,
            text: text,
            url: url
          });
        } else {
          navigator.clipboard.writeText(url);
     
          alert(language === 'tr' ? 'Bağlantı kopyalandı!' : 'Link copied!');
        }
    }
    setShowShareMenu(false);
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{language === 'tr' ? 'Yükleniyor...' : 'Loading...'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Back Button */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container-custom px-4 py-4">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{language === 'tr' ? 'Blog\'a dön' : 'Back to Blog'}</span>
          </Link>
        </div>
      </div>

      <div className="container-custom px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 md:mb-12"
          >
 
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-blue-700" />
              <span className="text-sm font-medium text-blue-700">
                {article.category === 'prevention' 
                  ? (language === 'tr' ? 'Koruyucu Kardiyoloji' : 'Preventive Cardiology')
                  : (language === 'tr' ? 'Kalp Hastalıkları' : 'Heart Diseases')
                }
              </span>
            </div>
            
        
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
        
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{article.author}</div>
                  <div className="text-sm text-gray-500">{article.authorTitle}</div>
                </div>
              </div>
              
              <div className="h-6 w-px bg-gray-300"></div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">{article.date}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">{article.readTime}</span>
              </div>
            </div>
            
          
            <div className="rounded-2xl overflow-hidden mb-8">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
            
          
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
              
        
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-2 rounded-lg transition-colors ${
                    isBookmarked 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  aria-label={language === 'tr' ? 'Yer işaretine ekle' : 'Bookmark'}
                >
                  <Bookmark className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} />
                </button>
                
                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
                    aria-label={language === 'tr' ? 'Paylaş' : 'Share'}
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                  
                  {showShareMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[160px] z-20"
                    >
                      <button
                        onClick={() => handleShare('copy')}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {language === 'tr' ? 'Bağlantıyı kopyala' : 'Copy link'}
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
                      >
                        <Twitter className="w-4 h-4" />
                        Twitter
                      </button>
                      <button
                        onClick={() => handleShare('facebook')}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
                      >
                        <Facebook className="w-4 h-4" />
                        Facebook
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <style>{`
              .prose {
                line-height: 1.8;
                color: #374151;
              }
              .prose h2 {
                color: #1f2937;
                margin-top: 2.5rem;
                margin-bottom: 1rem;
                font-weight: 700;
                font-size: 1.75rem;
              }
              .prose h3 {
                color: #374151;
                margin-top: 2rem;
                margin-bottom: 0.75rem;
                font-weight: 600;
                font-size: 1.5rem;
              }
              .prose p {
                margin-bottom: 1.5rem;
                color: #4b5563;
              }
              .prose ul, .prose ol {
                margin-bottom: 1.5rem;
                padding-left: 1.5rem;
              }
              .prose li {
                margin-bottom: 0.5rem;
                color: #4b5563;
              }
              .prose strong {
                color: #1f2937;
                font-weight: 600;
              }
              .warning-box {
                background-color: #fef3c7;
                border-left: 4px solid #d97706;
                padding: 1.5rem;
                margin: 2rem 0;
                border-radius: 0.5rem;
              }
              .warning-box strong {
                color: #92400e;
                display: block;
                margin-bottom: 0.75rem;
                font-size: 1.125rem;
              }
              .warning-box ul {
                margin-bottom: 0;
              }
              .prose a {
                color: #2563eb;
                text-decoration: none;
              }
              .prose a:hover {
                text-decoration: underline;
              }
            `}</style>
            
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
            
          
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{article.author}</h4>
                  <p className="text-gray-600 text-sm mb-2">{article.authorBio}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500">
                      {language === 'tr' ? 'Son güncelleme:' : 'Last updated:'} {article.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

      
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {language === 'tr' ? 'Bu Makaleyi Paylaşın' : 'Share This Article'}
                </h3>
                <p className="text-gray-600">
                  {language === 'tr'
                    ? 'Kalp sağlığı hakkında doğru bilgi paylaşımı hayat kurtarır.'
                    : 'Sharing accurate information about heart health saves lives.'
                  }
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => handleShare('twitter')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1DA1F2] text-white font-medium rounded-lg hover:bg-[#1a8cd8] transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                  <span>Twitter</span>
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white font-medium rounded-lg hover:bg-[#166fe5] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white font-medium rounded-lg hover:bg-[#0959ad] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </button>
              </div>
            </div>
          </motion.div>

          
          {relatedArticles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'tr' ? 'İlgili Makaleler' : 'Related Articles'}
                </h2>
                <Link 
                  to="/blog"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <span>{language === 'tr' ? 'Tümünü gör' : 'View all'}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link 
                    key={relatedArticle.id}
                    to={`/blog/${relatedArticle.slug}`}
                    className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-4">
                        {relatedArticle.category === 'prevention' 
                          ? (language === 'tr' ? 'Koruyucu Kardiyoloji' : 'Preventive Cardiology')
                          : (language === 'tr' ? 'Kalp Hastalıkları' : 'Heart Diseases')
                        }
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{relatedArticle.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

        
     
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;