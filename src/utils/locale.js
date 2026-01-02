// Updated locale file with stats section
export const LANGUAGES = {
    en: {
      code: 'en',
      name: 'English',
      flag: '🇺🇸',
      direction: 'ltr',
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        education: "Education",
        contact: "Contact"
      }
    },
    tr: {
      code: 'tr',
      name: 'Türkçe',
      flag: '🇹🇷',
      direction: 'ltr',
      nav: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        services: "Hizmetler",
        education: "Eğitim",
        contact: "İletişim"
      }
    }
  };
  
  export const CONTENT = {
    hero: {
      en: {
        titleLine1: "Dr. Redwan Seid Busery",
        titleHighlight: "Cardiology Specialist",
        description: "Providing comprehensive cardiology care, from diagnosis and treatment planning to long-term follow-up, based on current scientific evidence and international guidelines.",
        trustBadge: {
          title: "Board Certified Cardiologist",
          subtitle: "Since 2018"
        },
        features: [
          "Personalized Treatment Plans",
          "Advanced Cardiac Diagnostics",
          "International Guideline-Based Care",
          "Comprehensive Follow-up"
        ],
        cta: {
          primary: "Book Consultation",
          secondary: "View Services"
        },
        stats: {
          doctors: "Specialist",
          available: "Consulting Hours",
          wait: "Response Time"
        },
        doctorCard: {
          name: "Dr. Redwan Seid Busery",
          availability: "Accepting New Patients"
        },
        miniStats: [
          { value: "Cardiology", label: "Specialization" },
          { value: "Evidence", label: "Based Care" },
          { value: "Int'l", label: "Guidelines" }
        ],
        scrollHint: "Discover Comprehensive Care"
      },
      tr: {
        titleLine1: "Dr. Redwan Seid Busery",
        titleHighlight: "Kardiyoloji Uzmanı",
        description: "Tanıdan tedavi planlamasına ve uzun dönem takibe kadar, güncel bilimsel veriler ve uluslararası kılavuzlar doğrultusunda kapsamlı kardiyoloji hizmeti sunmaktadır.",
        trustBadge: {
          title: "Uzman Kardiyolog",
          subtitle: "2018'den Beri"
        },
        features: [
          "Kişiselleştirilmiş Tedavi Planları",
          "Gelişmiş Kardiyak Teşhis",
          "Uluslararası Kılavuz Tabanlı Bakım",
          "Kapsamlı Takip"
        ],
        cta: {
          primary: "Randevu Al",
          secondary: "Hizmetleri Gör"
        },
        stats: {
          doctors: "Uzman",
          available: "Muayene Saatleri",
          wait: "Yanıt Süresi"
        },
        doctorCard: {
          name: "Dr. Redwan Seid Busery",
          availability: "Yeni Hasta Kabul Ediyor"
        },
        miniStats: [
          { value: "Kardiyoloji", label: "Uzmanlık" },
          { value: "Kanıta", label: "Dayalı Bakım" },
          { value: "Uluslar.", label: "Kılavuzlar" }
        ],
        scrollHint: "Kapsamlı Bakımı Keşfedin"
      }
    },
  
    about: {
      en: {
        title: "About Me",
        subtitle: "Cardiology Specialist",
        paragraphs: [
          "I am a cardiologist providing comprehensive care for patients with a wide range of cardiovascular conditions. My clinical practice focuses on accurate diagnosis, individualized treatment planning, and long-term follow-up based on current scientific evidence and international guidelines.",
          "I manage cardiovascular diseases across different stages, from early detection and risk evaluation to treatment optimization and continuity of care. When advanced diagnostic or therapeutic procedures are required, I coordinate patient care in collaboration with specialized centers to ensure safe, timely, and integrated management.",
          "I place strong emphasis on clear communication, shared decision-making, and a holistic approach that considers both medical findings and individual patient needs."
        ]
      },
      tr: {
        title: "Hakkımda",
        subtitle: "Kardiyoloji Uzmanı",
        paragraphs: [
          "Geniş bir yelpazedeki kardiyovasküler hastalıklara sahip hastalara kapsamlı kardiyoloji hizmeti sunan bir kardiyoloğum. Klinik pratiğim; doğru tanı, kişiye özel tedavi planlaması ve güncel bilimsel veriler ile uluslararası kılavuzlara dayalı uzun dönem takibi esas almaktadır.",
          "Kardiyovasküler hastalıkların erken tanı ve risk değerlendirmesinden tedavi optimizasyonuna ve bakım sürekliliğine kadar tüm aşamalarını yönetmekteyim. İleri tanısal veya tedavi edici işlemler gerektiğinde, güvenli, zamanında ve entegre hasta yönetimi sağlamak amacıyla uzman merkezlerle iş birliği içinde koordinasyon sağlamaktayım.",
          "Hasta-hekim iletişimi, ortak karar alma ve bireysel hasta ihtiyaçlarını gözeten bütüncül bir yaklaşım benim için önceliklidir."
        ]
      }
    },
  
    stats: {
      en: {
        title: "Excellence in Cardiology",
        subtitle: "Professional Achievements",
        stats: [
          { 
            value: "1,000+", 
            label: "Trusted Patients", 
            description: "Successfully treated with comprehensive care"
          },
          { 
            value: "98%", 
            label: "Satisfaction Rate", 
            description: "Patient satisfaction and positive outcomes"
          },
          { 
            value: "30 min", 
            label: "Detailed Consultation", 
            description: "Average comprehensive examination time"
          },
          { 
            value: "10+", 
            label: "Publications", 
            description: "Scientific contributions to cardiology"
          }
        ],
        expertise: [
          "Cardiac Diagnosis",
          "Risk Assessment",
          "Treatment Optimization",
          "Preventive Care"
        ],
        comparisonTitle: "Higher Recovery Rates",
        comparisonDescription: "Our evidence-based approach results in significantly improved patient outcomes compared to industry standards.",
        comparisonOurClinic: "Our Approach",
        comparisonIndustry: "Industry Average",
        memberships: [
          "Turkish Society of Cardiology",
          "Turkish Medical Association",
          "TKD Interventional Cardiology"
        ]
      },
      tr: {
        title: "Kardiyolojide Mükemmellik",
        subtitle: "Profesyonel Başarılar",
        stats: [
          { 
            value: "1.000+", 
            label: "Güvenilen Hasta", 
            description: "Kapsamlı bakımla başarıyla tedavi edildi"
          },
          { 
            value: "%98", 
            label: "Memnuniyet Oranı", 
            description: "Hasta memnuniyeti ve olumlu sonuçlar"
          },
          { 
            value: "30 dk", 
            label: "Detaylı Muayene", 
            description: "Ortalama kapsamlı muayene süresi"
          },
          { 
            value: "10+", 
            label: "Yayın", 
            description: "Kardiyolojiye bilimsel katkılar"
          }
        ],
        expertise: [
          "Kardiyak Teşhis",
          "Risk Değerlendirmesi",
          "Tedavi Optimizasyonu",
          "Önleyici Bakım"
        ],
        comparisonTitle: "Daha Yüksek İyileşme Oranları",
        comparisonDescription: "Kanıta dayalı yaklaşımımız, sektör standartlarına kıyasla önemli ölçüde gelişmiş hasta sonuçları sağlar.",
        comparisonOurClinic: "Bizim Yaklaşımımız",
        comparisonIndustry: "Sektör Ortalaması",
        memberships: [
          "Türk Kardiyoloji Derneği",
          "Türk Tabipleri Birliği",
          "TKD Girişimsel Kardiyoloji"
        ]
      }
    },
  
    common: {
      en: {
        logoSubtitle: "Cardiology Excellence",
        bookNow: "Book Now",
        emergency: "Emergency",
        openHours: "Mon - Sat: 8AM - 8PM",
        address: "Çavuşoğlu Mahallesi, Kartal, Istanbul",
        searchPlaceholder: "Search doctors, services, symptoms...",
        selectLanguage: "Select Language",
        languageDescription: "Choose your preferred language",
        languageSettingsSaved: "Language settings are saved automatically",
        mobileMenu: {
          languageSettings: "Language Settings",
          languagePreferenceSaved: "Your preference will be saved across all visits"
        }
      },
      tr: {
        logoSubtitle: "Kardiyoloji Mükemmelliği",
        bookNow: "Hemen Randevu Al",
        emergency: "Acil",
        openHours: "Pzt - Cmt: 08:00 - 20:00",
        address: "Çavuşoğlu Mahallesi, Kartal, İstanbul",
        searchPlaceholder: "Doktor, hizmet, semptom ara...",
        selectLanguage: "Dil Seçin",
        languageDescription: "Tercih ettiğiniz dili seçin",
        languageSettingsSaved: "Dil ayarları otomatik olarak kaydedilir",
        mobileMenu: {
          languageSettings: "Dil Ayarları",
          languagePreferenceSaved: "Tercihiniz tüm ziyaretlerinizde kaydedilecek"
        }
      }
    }
  };