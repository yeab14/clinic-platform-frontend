// Updated locale.js with contact section
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
  
    services: {
      en: {
        title: "Cardiology Services",
        subtitle: "Comprehensive Heart Care",
        basicServices: [
          "Comprehensive cardiology evaluation",
          "Electrocardiography (ECG) and rhythm monitoring",
          "Transthoracic, transesophageal, and stress echocardiography",
          "Computed coronary angiography",
          "Invasive coronary angiography",
          "Valvular heart disease assessment and follow-up",
          "Aortic diseases and pulmonary hypertension evaluation"
        ],
        advancedServices: {
          title: "Advanced & Complex Procedures",
          description: "Advanced and complex procedures, including treatment of chronic total occlusion (CTO) coronary lesions, cardiac rhythm device implantations such as pacemakers and implantable cardioverter-defibrillators (ICDs), structural heart procedures like transcatheter aortic valve implantation (TAVI) and mitral balloon valvuloplasty, as well as coronary artery bypass surgery (CABG) and surgical valve procedures, are coordinated with specialized centers to ensure safe and optimal patient care.",
          procedures: [
            "Chronic Total Occlusion (CTO) treatment",
            "Pacemaker implantation",
            "Implantable Cardioverter-Defibrillators (ICDs)",
            "Transcatheter Aortic Valve Implantation (TAVI)",
            "Mitral balloon valvuloplasty",
            "Coronary artery bypass surgery (CABG)",
            "Surgical valve procedures"
          ]
        },
        features: [
          {
            icon: "Heart",
            title: "Evidence-Based Care",
            description: "All treatments follow the latest international guidelines"
          },
          {
            icon: "Activity",
            title: "Advanced Diagnostics",
            description: "State-of-the-art cardiac imaging and monitoring"
          },
          {
            icon: "Brain",
            title: "Personalized Plans",
            description: "Customized treatment plans for each patient"
          },
          {
            icon: "Shield",
            title: "Safe Coordination",
            description: "Complex procedures coordinated with specialized centers"
          }
        ],
        stats: [
          { value: "98%", label: "Diagnostic Accuracy" },
          { value: "24/7", label: "Emergency Support" },
          { value: "45 min", label: "Average Consultation" },
          { value: "500+", label: "Procedures Performed" }
        ]
      },
      tr: {
        title: "Kardiyoloji Hizmetleri",
        subtitle: "Kapsamlı Kalp Bakımı",
        basicServices: [
          "Kapsamlı kardiyolojik değerlendirme",
          "Elektrokardiyografi (EKG) ve ritim takibi",
          "Transtorasik, transözofageal ve stres ekokardiyografi",
          "Bilgisayarlı tomografi koroner anjiyografi",
          "İnvaziv koroner anjiyografi",
          "Kapak hastalıklarının değerlendirilmesi ve takibi",
          "Aort hastalıkları ve pulmoner hipertansiyon değerlendirmesi"
        ],
        advancedServices: {
          title: "İleri ve Kompleks İşlemler",
          description: "Kronik total oklüzyon (CTO) koroner lezyonların tedavisi, kalıcı kalp pili ve implante edilebilir kardiyoverter-defibrilatör (ICD) uygulamaları gibi kardiyak ritim cihazı işlemleri, transkateter aort kapak implantasyonu (TAVI) ve mitral balon valvüloplasti gibi yapısal kalp girişimleri ile koroner arter bypass cerrahisi (CABG) ve cerrahi kapak işlemleri gibi ileri ve kompleks uygulamalar, güvenli ve en uygun hasta yönetimi için uzman merkezlerle koordinasyon içinde planlanmaktadır.",
          procedures: [
            "Kronik Total Oklüzyon (CTO) tedavisi",
            "Kalıcı kalp pili implantasyonu",
            "İmplante Edilebilir Kardiyoverter-Defibrilatör (ICD)",
            "Transkateter Aort Kapak İmplantasyonu (TAVI)",
            "Mitral balon valvüloplasti",
            "Koroner arter bypass cerrahisi (CABG)",
            "Cerrahi kapak işlemleri"
          ]
        },
        features: [
          {
            icon: "Heart",
            title: "Kanıta Dayalı Bakım",
            description: "Tüm tedaviler en son uluslararası kılavuzlara uygun"
          },
          {
            icon: "Activity",
            title: "Gelişmiş Teşhis",
            description: "En son teknoloji kardiyak görüntüleme ve izleme"
          },
          {
            icon: "Brain",
            title: "Kişiselleştirilmiş Planlar",
            description: "Her hasta için özel tedavi planları"
          },
          {
            icon: "Shield",
            title: "Güvenli Koordinasyon",
            description: "Kompleks işlemler uzman merkezlerle koordine edilir"
          }
        ],
        stats: [
          { value: "%98", label: "Teşhis Doğruluğu" },
          { value: "7/24", label: "Acil Destek" },
          { value: "45 dk", label: "Ortalama Muayene" },
          { value: "500+", label: "Uygulanan İşlem" }
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
  
    contact: {
      en: {
        title: "Contact Information",
        subtitle: "Get in Touch",
        heroTitle: "Get in",
        heroHighlight: "Touch",
        heroDescription: "My dedicated support is ready to assist you. Choose the most convenient way to reach me for medical inquiries or appointments.",
        contactMethods: {
          whatsapp: {
            title: "WhatsApp Only",
            description: "For medical consultations and appointments via WhatsApp",
            features: ["Medical Consultation", "Appointment Booking", "Quick Response"]
          },
          email: {
            title: "Email",
            description: "For detailed inquiries and medical documentation",
            features: ["Detailed Response", "Medical Reports", "Follow-up"]
          },
          location: {
            title: "Hospital Address",
            description: "Acıbadem Kartal Hospital location and directions",
            features: ["Full Address", "Google Maps", "Navigation"]
          },
          linkedin: {
            title: "LinkedIn Profile",
            description: "Professional network and academic profile",
            features: ["Professional Network", "Academic Profile", "Connect"]
          }
        },
        form: {
          title: "Send a Message",
          description: "I'll respond within 24 hours",
          contactTypeLabel: "How can I help you? *",
          nameLabel: "Full Name *",
          namePlaceholder: "John Doe",
          emailLabel: "Email Address *",
          emailPlaceholder: "john@example.com",
          phoneLabel: "Phone Number",
          phonePlaceholder: "+90 (123) 456-7890",
          subjectLabel: "Subject *",
          subjectPlaceholder: "How can I help you?",
          messageLabel: "Message *",
          messagePlaceholder: "Please provide details about your inquiry, including any specific concerns or questions you may have...",
          securityNote: "Your information is secure and encrypted",
          submitButton: "Send Message",
          successTitle: "Message Sent Successfully!",
          successMessage: "I've received your message and will get back to you within 24 hours. For urgent matters, please use WhatsApp.",
          sendAnother: "Send Another Message"
        },
        contactTypes: [
          { value: 'general', label: 'General Inquiry', icon: 'MessageSquare' },
          { value: 'appointment', label: 'Book Appointment', icon: 'Calendar' },
          { value: 'medical', label: 'Medical Question', icon: 'Heart' },
          { value: 'emergency', label: 'Medical Emergency', icon: 'Zap' }
        ],
        operatingHours: {
          title: "Consultation Hours",
          description: "When you can reach me",
          hours: [
            { day: 'Monday - Friday', time: '8:00 AM - 8:00 PM', emergency: true },
            { day: 'Saturday', time: '9:00 AM - 5:00 PM', emergency: true },
            { day: 'Sunday', time: 'By Appointment Only', emergency: false },
            { day: '24/7', time: 'WhatsApp Emergency', emergency: true, highlight: true }
          ]
        },
        location: {
          title: "Hospital Location",
          description: "Find me at Acıbadem Kartal Hospital",
          name: "Acıbadem Kartal Hospital",
          address: "Çavuşoğlu, Sanayi Cd. No:1, 34873 Kartal / İstanbul",
          phone: "+90 553 418 6776 (WhatsApp only)",
          hours: "Mon-Fri: 8AM-8PM, Sat: 9AM-5PM",
          specialties: ["Cardiology", "Heart Care", "Medical Consultation"]
        },
        emergencyCta: {
          title: "Need Immediate Help?",
          description: "For urgent medical concerns, use WhatsApp for the fastest response.",
          button: "Contact on WhatsApp"
        },
        trustIndicators: {
          title: "Why Contact Me",
          items: [
            {
              title: "HIPAA Secure",
              description: "100% encrypted communication"
            },
            {
              title: "Expert Consultation",
              description: "Board-certified cardiology specialist"
            },
            {
              title: "Fast Response",
              description: "Typically within 2 hours"
            }
          ]
        }
      },
      tr: {
        title: "İletişim Bilgileri",
        subtitle: "İletişime Geçin",
        heroTitle: "İletişime",
        heroHighlight: "Geçin",
        heroDescription: "Tıbbi danışmanlık ve randevularınız için size yardımcı olmaya hazırım. Size en uygun iletişim yolunu seçin.",
        contactMethods: {
          whatsapp: {
            title: "Sadece WhatsApp",
            description: "WhatsApp üzerinden tıbbi danışmanlık ve randevu için",
            features: ["Tıbbi Danışmanlık", "Randevu Alma", "Hızlı Yanıt"]
          },
          email: {
            title: "E-posta",
            description: "Detaylı sorular ve tıbbi dokümantasyon için",
            features: ["Detaylı Yanıt", "Tıbbi Raporlar", "Takip"]
          },
          location: {
            title: "Hastane Adresi",
            description: "Acıbadem Kartal Hastanesi konumu ve yönlendirme",
            features: ["Tam Adres", "Google Haritalar", "Navigasyon"]
          },
          linkedin: {
            title: "LinkedIn Profili",
            description: "Profesyonel ağ ve akademik profil",
            features: ["Profesyonel Ağ", "Akademik Profil", "Bağlantı Kur"]
          }
        },
        form: {
          title: "Mesaj Gönder",
          description: "24 saat içinde yanıt vereceğim",
          contactTypeLabel: "Size nasıl yardımcı olabilirim? *",
          nameLabel: "Tam Ad *",
          namePlaceholder: "Ali Yılmaz",
          emailLabel: "E-posta Adresi *",
          emailPlaceholder: "ali@ornek.com",
          phoneLabel: "Telefon Numarası",
          phonePlaceholder: "+90 (123) 456-7890",
          subjectLabel: "Konu *",
          subjectPlaceholder: "Size nasıl yardımcı olabilirim?",
          messageLabel: "Mesaj *",
          messagePlaceholder: "Lütfen sorunuzla ilgili detayları, özel endişelerinizi veya sorularınızı belirtin...",
          securityNote: "Bilgileriniz güvenli ve şifrelenmiştir",
          submitButton: "Mesaj Gönder",
          successTitle: "Mesaj Başarıyla Gönderildi!",
          successMessage: "Mesajınızı aldım ve 24 saat içinde size dönüş yapacağım. Acil durumlar için lütfen WhatsApp'ı kullanın.",
          sendAnother: "Başka Mesaj Gönder"
        },
        contactTypes: [
          { value: 'general', label: 'Genel Soru', icon: 'MessageSquare' },
          { value: 'appointment', label: 'Randevu Al', icon: 'Calendar' },
          { value: 'medical', label: 'Tıbbi Soru', icon: 'Heart' },
          { value: 'emergency', label: 'Tıbbi Acil', icon: 'Zap' }
        ],
        operatingHours: {
          title: "Muayene Saatleri",
          description: "Ne zaman ulaşabilirsiniz",
          hours: [
            { day: 'Pazartesi - Cuma', time: '08:00 - 20:00', emergency: true },
            { day: 'Cumartesi', time: '09:00 - 17:00', emergency: true },
            { day: 'Pazar', time: 'Sadece Randevu İle', emergency: false },
            { day: '7/24', time: 'WhatsApp Acil', emergency: true, highlight: true }
          ]
        },
        location: {
          title: "Hastane Konumu",
          description: "Acıbadem Kartal Hastanesi'nde bulabilirsiniz",
          name: "Acıbadem Kartal Hastanesi",
          address: "Çavuşoğlu, Sanayi Cd. No:1, 34873 Kartal / İstanbul",
          phone: "+90 553 418 6776 (Sadece WhatsApp)",
          hours: "Pzt-Cum: 08:00-20:00, Cmt: 09:00-17:00",
          specialties: ["Kardiyoloji", "Kalp Bakımı", "Tıbbi Danışmanlık"]
        },
        emergencyCta: {
          title: "Acil Yardım mı Lazım?",
          description: "Acil tıbbi durumlar için en hızlı yanıtı WhatsApp'tan alabilirsiniz.",
          button: "WhatsApp'tan İletişim"
        },
        trustIndicators: {
          title: "Neden Benimle İletişime Geçmelisiniz",
          items: [
            {
              title: "HIPAA Güvenli",
              description: "%100 şifreli iletişim"
            },
            {
              title: "Uzman Danışmanlık",
              description: "Uzmanlık belgeli kardiyolog"
            },
            {
              title: "Hızlı Yanıt",
              description: "Genellikle 2 saat içinde"
            }
          ]
        }
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