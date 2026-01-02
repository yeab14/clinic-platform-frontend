// Supported languages
export const LANGUAGES = {
    en: {
      code: 'en',
      name: 'English',
      flag: '🇺🇸',
      direction: 'ltr',
      nav: {
        home: "Home",
        services: "Services",
        doctors: "Doctors",
        appointment: "Appointment",
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
        services: "Hizmetler",
        doctors: "Doktorlar",
        appointment: "Randevu",
        contact: "İletişim"
      }
    }
  };
  
  // Language content
  export const CONTENT = {
    hero: {
      en: {
        titleLine1: "Healthcare That",
        titleHighlight: "Cares About You",
        description: "Experience next-generation healthcare with our intelligent platform. Book appointments in seconds, connect with top specialists, and manage your health journey seamlessly.",
        trustBadge: {
          title: "Trusted Healthcare",
          subtitle: "Since 2010"
        },
        features: [
          "AI-Powered Appointment System",
          "24/7 Telemedicine Support",
          "Same-Day Appointments",
          "No Paperwork Required"
        ],
        cta: {
          primary: "Book Appointment",
          secondary: "Watch Demo"
        },
        stats: {
          doctors: "Doctors",
          available: "Available Now",
          wait: "Average Wait"
        },
        doctorCard: {
          name: "Dr. Sarah Johnson",
          availability: "Available Today"
        },
        miniStats: [
          { value: "24/7", label: "Online Support" },
          { value: "98%", label: "Accuracy" },
          { value: "AI", label: "Powered" }
        ],
        scrollHint: "Scroll to explore"
      },
      tr: {
        titleLine1: "Sizi Önemseyen",
        titleHighlight: "Sağlık Hizmeti",
        description: "Akıllı platformumuzla yeni nesil sağlık hizmetini deneyimleyin. Saniyeler içinde randevu alın, uzman doktorlarla bağlanın ve sağlık yolculuğunuzu sorunsuz yönetin.",
        trustBadge: {
          title: "Güvenilir Sağlık Hizmeti",
          subtitle: "2010'dan Beri"
        },
        features: [
          "Yapay Zeka Destekli Randevu Sistemi",
          "7/24 Tele-Tıp Desteği",
          "Aynı Gün Randevu",
          "Kağıt İşlemi Yok"
        ],
        cta: {
          primary: "Randevu Al",
          secondary: "Demoyu İzle"
        },
        stats: {
          doctors: "Doktor",
          available: "Şu Anda Müsait",
          wait: "Ortalama Bekleme"
        },
        doctorCard: {
          name: "Dr. Sarah Johnson",
          availability: "Bugün Müsait"
        },
        miniStats: [
          { value: "7/24", label: "Çevrimiçi Destek" },
          { value: "%98", label: "Doğruluk" },
          { value: "YZ", label: "Destekli" }
        ],
        scrollHint: "Keşfetmek için kaydırın"
      }
    },
  
    common: {
      en: {
        logoSubtitle: "Premium Healthcare",
        bookNow: "Book Now",
        emergency: "Emergency",
        openHours: "Mon - Sat: 8AM - 8PM",
        address: "Çavuşoğlu Mahallesi (neighborhood) of Kartal district, on the Asian side of Istanbul",
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
        logoSubtitle: "Premium Sağlık Hizmeti",
        bookNow: "Hemen Randevu Al",
        emergency: "Acil",
        openHours: "Pzt - Cmt: 08:00 - 20:00",
        address: "Çavuşoğlu Mahallesi (neighborhood) of Kartal district, on the Asian side of Istanbul",
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