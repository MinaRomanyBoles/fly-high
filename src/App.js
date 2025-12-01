import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Globe, Menu, X, ChevronRight, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, Target, Eye, Zap, Shield, Award, TrendingUp, Code, Palette, BarChart, Send, MessageCircle, User } from 'lucide-react';

const FlyHighWebsite = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShadowMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
    const angle = Math.atan2(offsetY, offsetX); // -PI to PI
    const hue = ((angle + Math.PI) / (2 * Math.PI)) * 120; // map to 0-120 (red to green through yellow)
    const intensity = Math.min(0.55, 0.25 + distance / 600);
    e.currentTarget.style.setProperty('--shadow-x', `${offsetX / 12}px`);
    e.currentTarget.style.setProperty('--shadow-y', `${offsetY / 12}px`);
    e.currentTarget.style.setProperty('--shadow-blur', `${24 + distance / 6}px`);
    e.currentTarget.style.setProperty('--shadow-color', `hsla(${hue}, 90%, 60%, ${intensity})`);
  };

  const handleShadowLeave = (e) => {
    e.currentTarget.style.removeProperty('--shadow-x');
    e.currentTarget.style.removeProperty('--shadow-y');
    e.currentTarget.style.removeProperty('--shadow-blur');
    e.currentTarget.style.removeProperty('--shadow-color');
  };

  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      teamNav: 'Our Team',
      contact: 'Contact Us',
      heroTitle: 'FLY HIGH',
      heroSubtitle: 'Digital Innovation Agency',
      heroDescription: 'We help businesses soar to new heights with cutting-edge digital solutions',
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      aboutTitle: 'About FlyHigh',
      aboutText: 'We are a leading digital agency specializing in innovative solutions that help businesses soar to new heights. Our team of experts delivers exceptional results through creativity, technology, and strategic thinking.',
      ourMission: 'Our Mission',
      missionText: 'To empower businesses with innovative digital solutions that drive growth and success in the modern digital landscape.',
      ourVision: 'Our Vision',
      visionText: 'To be the most trusted digital partner for businesses worldwide, setting new standards in digital excellence and innovation.',
      advantages: 'Why Choose Us',
      services: 'Our Services',
      teamWork: 'FlyHigh Team',
      teamText: 'Talented professionals dedicated to bringing your vision to life',
      footer: '© 2025 FlyHigh. All rights reserved.',
      contactTitle: 'Get In Touch',
      contactText: 'Ready to take your business to new heights?',
      sendMessage: 'Send Message',
      ourAdvantages: 'Our Advantages',
    },
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      contact: "اتصل بنا",
      heroTitle: "FlyHigh",
      heroSubtitle: "وكالة الابتكار الرقمي",
      heroDescription: "نساعد الشركات على التحليق نحو آفاق جديدة بفضل حلول رقمية متطورة",
      learnMore: "اعرف المزيد",
      getStarted: "ابدأ الآن",
      aboutTitle: "FlyHigh عن",
      aboutText: "نحن وكالة رقمية رائدة متخصصة في الحلول المبتكرة التي تساعد الشركات على الارتقاء إلى آفاق جديدة. يقدم فريق خبرائنا نتائج استثنائية عبر الإبداع والتكنولوجيا والتفكير الاستراتيجي.",
      ourMission: "مهمتنا",
      missionText: "تمكين الشركات بحلول رقمية مبتكرة تدفع النمو والنجاح في العصر الرقمي.",
      ourVision: "رؤيتنا",
      visionText: "أن نكون الشريك الرقمي الأكثر ثقة للأعمال حول العالم، ونضع معايير جديدة للتميز والابتكار.",
      advantages: "لماذا تختارنا",
      services: "خدماتنا",
      teamWork: "FlyHigh فريق",
      teamText: "محترفون موهوبون يكرسون خبراتهم لتحقيق رؤيتك",
      footer: "© 2025 FlyHigh. جميع الحقوق محفوظة.",
      contactTitle: "تواصل معنا",
      contactText: "جاهز لرفع عملك إلى مستوى جديد؟",
      sendMessage: "أرسل رسالة",
      ourAdvantages: "مميزاتنا",
    }
  };

  translations.ar.teamNav = translations.en.teamNav;

  const t = translations[language];

  const navLinkClass = (extra = '') =>
    `text-sm font-semibold uppercase tracking-wider transition ${extra} ${
      darkMode
        ? 'text-white hover:text-blue-200'
        : scrolled
        ? 'text-gray-900 hover:text-blue-600'
        : 'text-white hover:text-blue-200'
    }`;

  const advantages = [
    { 
      icon: <Zap className="w-12 h-12" />, 
      title: language === 'en' ? 'Fast Delivery' : 'تسليم سريع', 
      description: language === 'en' ? 'Quick turnaround times without compromising quality' : 'أوقات تسليم سريعة دون المساس بالجودة' 
    },
    { 
      icon: <Shield className="w-12 h-12" />, 
      title: language === 'en' ? 'Reliable' : 'موثوق', 
      description: language === 'en' ? 'Trusted by 100+ satisfied clients worldwide' : 'موثوق به من قبل أكثر من 100 عميل راضٍ في جميع أنحاء العالم' 
    },
    { 
      icon: <Award className="w-12 h-12" />, 
      title: language === 'en' ? 'Quality First' : 'الجودة أولاً', 
      description: language === 'en' ? 'Excellence in every project we deliver' : 'التميز في كل مشروع نقدمه' 
    },
    { 
      icon: <TrendingUp className="w-12 h-12" />, 
      title: language === 'en' ? 'Growth Focused' : 'التركيز على النمو', 
      description: language === 'en' ? 'Results-driven strategies that matter' : 'استراتيجيات موجهة نحو النتائج تحقق الفرق' 
    },
  ];

  const services = [
    { 
      icon: <Code className="w-16 h-16" />, 
      title: language === 'en' ? 'Web Development' : 'تطوير الويب', 
      description: language === 'en' ? 'Custom websites and powerful web applications tailored to your needs' : 'مواقع مخصصة وتطبيقات ويب قوية مصممة خصيصاً لاحتياجاتك' 
    },
    { 
      icon: <Palette className="w-16 h-16" />, 
      title: language === 'en' ? 'UI/UX Design' : 'تصميم واجهة وتجربة المستخدم', 
      description: language === 'en' ? 'Beautiful, intuitive designs that create memorable user experiences' : 'تصاميم جميلة وبديهية تخلق تجارب مستخدم لا تُنسى' 
    },
    { 
      icon: <BarChart className="w-16 h-16" />, 
      title: language === 'en' ? 'Digital Marketing' : 'التسويق الرقمي', 
      description: language === 'en' ? 'Strategic marketing solutions that drive real business growth' : 'حلول تسويقية استراتيجية تحفز نمو الأعمال الحقيقي' 
    },
    { 
      icon: <Send className="w-16 h-16" />, 
      title: language === 'en' ? 'Helicopter Gift Drops' : 'إسقاط هدايا بالمروحيات', 
      description: language === 'en' ? 'Aerial gifting activations with precise coordination' : 'تنفيذ حملات إسقاط هدايا جوية بتنسيق دقيق' 
    },
    { 
      icon: <Send className="w-16 h-16" />, 
      title: language === 'en' ? 'Drone Filming' : 'تصوير درون', 
      description: language === 'en' ? 'High-impact aerial shots for any production' : 'لقطات جوية مؤثرة لأي إنتاج' 
    },
    { 
      icon: <BarChart className="w-16 h-16" />, 
      title: language === 'en' ? 'Aerial Ads & Campaigns' : 'إعلانات وحملات جوية', 
      description: language === 'en' ? 'Sky-high brand awareness with aerial campaigns' : 'زيادة الوعي بالعلامة عبر حملات جوية مميزة' 
    },
    { 
      icon: <Send className="w-16 h-16" />, 
      title: language === 'en' ? 'Broadcast & Distribution' : 'بث وتوزيع', 
      description: language === 'en' ? 'End-to-end broadcast and delivery for your content' : 'حلول بث وتوزيع متكاملة لمحتواك' 
    },
    { 
      icon: <Palette className="w-16 h-16" />, 
      title: language === 'en' ? 'Podcast Production (Audio + Video)' : 'إنتاج بودكاست (صوت وصورة)', 
      description: language === 'en' ? 'Studio-grade podcast creation across formats' : 'إنتاج بودكاست بجودة استوديو لكل الصيغ' 
    },
    { 
      icon: <Palette className="w-16 h-16" />, 
      title: language === 'en' ? 'Music Videos & Visual Clips' : 'فيديوهات موسيقية ولقطات بصرية', 
      description: language === 'en' ? 'Stylized visuals that amplify your sound' : 'مرئيات مميزة تعزز أعمالك الموسيقية' 
    },
    { 
      icon: <Code className="w-16 h-16" />, 
      title: language === 'en' ? 'Scriptwriting & Creative Direction' : 'كتابة نصوص وإخراج إبداعي', 
      description: language === 'en' ? 'Concept to script to on-set direction' : 'من الفكرة إلى النص إلى الإخراج في موقع التصوير' 
    },
    { 
      icon: <Palette className="w-16 h-16" />, 
      title: language === 'en' ? 'Editing, Grading, Sound Design' : 'مونتاج وتصحيح ألوان وتصميم صوت', 
      description: language === 'en' ? 'Post-production polish for picture and sound' : 'صقل كامل للصوت والصورة في مرحلة ما بعد الإنتاج' 
    },
    { 
      icon: <BarChart className="w-16 h-16" />, 
      title: language === 'en' ? 'Real Estate & Urban Filming' : 'تصوير عقاري وحضري', 
      description: language === 'en' ? 'Showcase properties and cities from every angle' : 'إبراز العقارات والمدن من كل الزوايا' 
    },
    { 
      icon: <TrendingUp className="w-16 h-16" />, 
      title: language === 'en' ? 'Billboard & Outdoor Campaigns' : 'حملات لوحات خارجية', 
      description: language === 'en' ? 'Impactful outdoor media planning and execution' : 'تخطيط وتنفيذ مؤثر للإعلانات الخارجية' 
    },
    { 
      icon: <Code className="w-16 h-16" />, 
      title: language === 'en' ? 'Website Design & SEO' : 'تصميم مواقع وتحسين محركات البحث (SEO)', 
      description: language === 'en' ? 'High-performing websites optimized for search' : 'مواقع عالية الأداء محسّنة للظهور في البحث' 
    },
    { 
      icon: <TrendingUp className="w-16 h-16" />, 
      title: language === 'en' ? 'Building a Strong Online Presence' : 'بناء حضور رقمي قوي', 
      description: language === 'en' ? 'Holistic digital footprint across channels' : 'بصمة رقمية متكاملة عبر القنوات' 
    },
    { 
      icon: <BarChart className="w-16 h-16" />, 
      title: language === 'en' ? 'TV Shows & Documentary Films' : 'برامج تلفزيونية وأفلام وثائقية', 
      description: language === 'en' ? 'Full-cycle production for TV and docs' : 'إنتاج متكامل للبرامج التلفزيونية والأفلام الوثائقية' 
    },
    { 
      icon: <Palette className="w-16 h-16" />, 
      title: language === 'en' ? 'Drama & Short Films' : 'دراما وأفلام قصيرة', 
      description: language === 'en' ? 'Narrative storytelling with cinematic craft' : 'سرد قصصي بصناعة سينمائية متقنة' 
    },
    { 
      icon: <BarChart className="w-16 h-16" />, 
      title: language === 'en' ? 'Commercial Ads Production' : 'إنتاج الإعلانات التجارية', 
      description: language === 'en' ? 'Concept-to-delivery spots that sell' : 'إعلانات من الفكرة حتى التسليم تحقق المبيعات' 
    },
    { 
      icon: <TrendingUp className="w-16 h-16" />, 
      title: language === 'en' ? 'Live Event Coverage' : 'تغطية الأحداث المباشرة', 
      description: language === 'en' ? 'On-the-ground crews for live moments' : 'فرق ميدانية لالتقاط اللحظات الحية' 
    },
    { 
      icon: <TrendingUp className="w-16 h-16" />, 
      title: language === 'en' ? 'Conferences & Corporate Events' : 'مؤتمرات وفعاليات شركات', 
      description: language === 'en' ? 'Professional coverage for business gatherings' : 'تغطية احترافية لفعاليات الشركات' 
    },
    { 
      icon: <TrendingUp className="w-16 h-16" />, 
      title: language === 'en' ? 'Concerts & Mega Shows' : 'حفلات موسيقية وعروض كبرى', 
      description: language === 'en' ? 'Stage-to-screen capture for major shows' : 'تصوير العروض الكبرى باحترافية عالية' 
    },
    { 
      icon: <TrendingUp className="w-16 h-16" />, 
      title: language === 'en' ? 'VIP Parties & Private Events' : 'حفلات VIP وفعاليات خاصة', 
      description: language === 'en' ? 'Discreet coverage for exclusive occasions' : 'تغطية راقية للفعاليات الخاصة والحصرية' 
    },
    { 
      icon: <BarChart className="w-16 h-16" />, 
      title: language === 'en' ? 'Multi-Cam Coverage & Highlight Reels' : 'تغطية بعدة كاميرات وملخصات للفعاليات', 
      description: language === 'en' ? 'Dynamic edits and highlights from every angle' : 'مونتاج ديناميكي وملخصات من كل الزوايا' 
    },
    { 
      icon: <Palette className="w-16 h-16" />, 
      title: language === 'en' ? 'Reels & Motion Graphics' : 'ريلز وموشن جرافيك', 
      description: language === 'en' ? 'Short-form visuals with motion flair' : 'مرئيات قصيرة بإبداع موشن جرافيك' 
    },
    { 
      icon: <Palette className="w-16 h-16" />, 
      title: language === 'en' ? 'Social Media Content' : 'محتوى منصات التواصل', 
      description: language === 'en' ? 'Always-on content tailored for platforms' : 'محتوى مستمر مصمم لمنصات التواصل' 
    },
    { 
      icon: <TrendingUp className="w-16 h-16" />, 
      title: language === 'en' ? 'Creative Strategy & Brand Messaging' : 'استراتيجية إبداعية ورسائل العلامة', 
      description: language === 'en' ? 'Clear narratives that strengthen your brand voice' : 'رسائل واضحة تعزز صوت علامتك التجارية' 
    },
    { 
      icon: <Code className="w-16 h-16" />, 
      title: language === 'en' ? 'Content Shoots for Ads & Commercials' : 'تصوير محتوى للإعلانات والإعلانات التجارية', 
      description: language === 'en' ? 'Production-ready shoots optimized for campaigns' : 'تصوير جاهز للحملات التسويقية والإعلانات' 
    },
  ];
  const advantagesExtra = [
    {
      title: language === 'en' ? 'Innovation & Technology' : 'الابتكار والتقنية',
      description: language === 'en'
        ? 'Advanced drone filming, dynamic editing, and modern media tools'
        : 'تصوير درون متقدم، مونتاج ديناميكي، وأدوات إعلامية حديثة',
    },
    {
      title: language === 'en' ? 'Client-Centered Approach' : 'نهج يركز على العميل',
      description: language === 'en'
        ? "We listen, adapt, and tailor each project to the client's needs"
        : 'نستمع ونطور ونخصص كل مشروع وفق احتياجات العميل',
    },
    {
      title: language === 'en' ? 'Results You Can Measure' : 'نتائج يمكن قياسها',
      description: language === 'en'
        ? 'Our work is built to deliver the engagement, reach, and real-world impact'
        : 'عملنا مصمم لتحقيق التفاعل والانتشار والأثر الواقعي',
    },
  ];

  // chunk services into pages of 6 items (2 rows x 3 columns)
  const servicePages = [];
  for (let i = 0; i < services.length; i += 6) {
    servicePages.push(services.slice(i, i + 6));
  }

  const servicesContainerRef = useRef(null);

  const scrollServices = (direction) => {
    const container = servicesContainerRef.current;
    if (!container) return;
    const width = container.getBoundingClientRect().width;
    container.scrollBy({ left: direction === 'next' ? width : -width, behavior: 'smooth' });
  };
  const team = [
    { 
      name: language === 'en' ? 'Ahmed Abo El Magd' : 'أحمد أبو المجد', 
      role: language === 'en' ? 'Founder & General Manager' : 'المؤسس والمدير العام',
      email: 'aboelmagd@flyhigh.com.eg',
      image: '/Ahmed%20Abo%20El%20Magd.png'
    },
    { 
      name: language === 'en' ? 'Mohamed Ragab' : 'محمد رجب', 
      role: language === 'en' ? 'Managing Director' : 'المدير التنفيذي',
      email: 'ragab@flyhigh.com.eg',
      image: '/Mohamed%20Ragab.png'
    },
    { 
      name: language === 'en' ? 'Mohamed Tawfik' : 'محمد توفيق', 
      role: language === 'en' ? 'Senior Producer' : 'منتج أول',
      email: 'mtawfik@flyhigh.com.eg',
      image: '/Mohamed%20Tawfik.png'
    },
    { 
      name: language === 'en' ? 'Mostafa Kamal' : 'مصطفى كمال', 
      role: language === 'en' ? 'Digital Marketing Manager' : 'مدير التسويق الرقمي',
      email: 'mkamal@flyhigh.com.eg',
      image: '/Mostafa%20Kamal.png'
    },
  ];

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300 ${language === 'ar' ? 'rtl' : 'ltr'} font-sans`}>
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-gray-900 shadow-md' : 'bg-white shadow-md') : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold tracking-tight">
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>FLY</span>
              <span className="text-blue-500">HIGH</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className={navLinkClass()}>{t.home}</a>
              <a href="#about" className={navLinkClass()}>{t.about}</a>
              <a href="#services" className={navLinkClass()}>{t.services}</a>
              <a href="#our-advantages" className={navLinkClass()}>{t.ourAdvantages}</a>
              <a href="#team" className={navLinkClass()}>{t.teamNav}</a>
              <a href="#contact" className={navLinkClass()}>{t.contact}</a>
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} transition shadow-sm`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className={`px-3 py-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} transition shadow-sm flex items-center space-x-1`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-bold">{language === 'en' ? 'AR' : 'EN'}</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#home" className={navLinkClass('block')}>{t.home}</a>
              <a href="#about" className={navLinkClass('block')}>{t.about}</a>
              <a href="#services" className={navLinkClass('block')}>{t.services}</a>
              <a href="#our-advantages" className={navLinkClass('block')}>{t.ourAdvantages}</a>
              <a href="#team" className={navLinkClass('block')}>{t.teamNav}</a>
              <a href="#contact" className={navLinkClass('block')}>{t.contact}</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section - Paper Kit Style with Video Background */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Blur Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            {t.heroTitle}
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 opacity-90">
            {t.heroSubtitle}
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light">
            {t.heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 inline-flex items-center justify-center">
              {t.getStarted} <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#about" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 inline-flex items-center justify-center">
              {t.learnMore}
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Paper Card Style */}
      <section id="about" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">
            {t.aboutTitle}
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
          <div className="max-w-4xl mx-auto text-center text-xl leading-relaxed mb-20 opacity-80">
            {t.aboutText}
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div
              className={`p-10 rounded-3xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-700' : 'border-gray-100'} interactive-shadow transition-all transform hover:-translate-y-2`}
              onMouseMove={handleShadowMove}
              onMouseLeave={handleShadowLeave}
            >
              <Target className="w-16 h-16 text-blue-500 mb-6" />
              <h3 className="text-3xl font-bold mb-6">{t.ourMission}</h3>
              <p className="text-lg leading-relaxed opacity-80">{t.missionText}</p>
            </div>
            <div
              className={`p-10 rounded-3xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-700' : 'border-gray-100'} interactive-shadow transition-all transform hover:-translate-y-2`}
              onMouseMove={handleShadowMove}
              onMouseLeave={handleShadowLeave}
            >
              <Eye className="w-16 h-16 text-blue-500 mb-6" />
              <h3 className="text-3xl font-bold mb-6">{t.ourVision}</h3>
              <p className="text-lg leading-relaxed opacity-80">{t.visionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className={`py-24 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">{t.advantages}</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-20"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-md text-center transition-all transform hover:-translate-y-2 interactive-shadow border ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}
                onMouseMove={handleShadowMove}
                onMouseLeave={handleShadowLeave}
              >
                <div className="text-blue-500 flex justify-center mb-6">{advantage.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{advantage.title}</h3>
                <p className="text-base leading-relaxed opacity-70">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">{t.services}</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-20"></div>
          <div className="relative">
              <div className="flex justify-between mb-4">
                <button
                  onClick={() => scrollServices('prev')}
                  className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition text-sm font-semibold"
                >
                  {language === 'en' ? 'Prev' : 'السابق'}
                </button>
                <button
                  onClick={() => scrollServices('next')}
                  className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition text-sm font-semibold"
                >
                  {language === 'en' ? 'Next' : 'التالي'}
                </button>
              </div>
              <div
                ref={servicesContainerRef}
                className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {servicePages.map((page, pageIndex) => (
                  <div key={pageIndex} className="min-w-full snap-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6">
                      {page.map((service, index) => (
                        <div
                          key={index}
                          className={`p-12 rounded-3xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-700' : 'border-gray-100'} interactive-shadow transition-all transform hover:-translate-y-3 text-center`}
                          onMouseMove={handleShadowMove}
                          onMouseLeave={handleShadowLeave}
                        >
                          <div className="text-blue-500 mb-8 flex justify-center">{service.icon}</div>
                          <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                          <p className="text-lg leading-relaxed opacity-80">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Advantages (additional) */}
        <section id="our-advantages" className={`py-24 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">{t.ourAdvantages}</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {advantagesExtra.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-10 rounded-3xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-700' : 'border-gray-100'} interactive-shadow transition-all transform hover:-translate-y-2`}
                  onMouseMove={handleShadowMove}
                  onMouseLeave={handleShadowLeave}
                >
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-lg leading-relaxed opacity-80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Team Section - Horizontal Scrolling */}
      <section id="team" className={`py-24 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">{t.teamWork}</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-center text-xl mb-12 max-w-2xl mx-auto opacity-70">{t.teamText}</p>
          
          {/* Horizontal Scrolling Container */}
          <div className="relative p-6">
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className={`flex-none w-80 p-8 rounded-3xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-md text-center transition-all transform hover:-translate-y-2 interactive-shadow border ${darkMode ? 'border-gray-700' : 'border-gray-100'} snap-center`}
                  onMouseMove={handleShadowMove}
                  onMouseLeave={handleShadowLeave}
                >
                  <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-blue-500 shadow-lg">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{member.name}</h3>
                  <p className="text-blue-500 font-semibold text-lg mb-4">{member.role}</p>
                  <a href={`mailto:${member.email}`} className={`text-sm ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition flex items-center justify-center gap-2`}>
                    <Mail className="w-4 h-4" />
                    {member.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">{t.contactTitle}</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-2xl text-center mb-16 opacity-80">{t.contactText}</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div
                className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} text-center shadow-md interactive-shadow transition-all transform hover:-translate-y-1`}
                onMouseMove={handleShadowMove}
                onMouseLeave={handleShadowLeave}
              >
                <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <p className="font-semibold text-lg">info@flyhigh.com.eg</p>
              </div>
              <div
                className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} text-center shadow-md interactive-shadow transition-all transform hover:-translate-y-1`}
                onMouseMove={handleShadowMove}
                onMouseLeave={handleShadowLeave}
              >
                <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <p className="font-semibold text-lg">+201550435615</p>
              </div>
              <div
                className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} text-center shadow-md interactive-shadow transition-all transform hover:-translate-y-1`}
                onMouseMove={handleShadowMove}
                onMouseLeave={handleShadowLeave}
              >
                <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <p className="font-semibold text-lg">Cairo, Egypt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 ${darkMode ? 'bg-gray-950 border-t border-gray-800' : 'bg-gray-900 text-white'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <div className="text-4xl font-bold mb-3">
                <span className="text-white">FLY</span>
                <span className="text-blue-500">HIGH</span>
              </div>
              <p className="text-gray-400 text-lg">{t.footer}</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a
                href="https://www.linkedin.com/in/minaromany/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gray-800 text-white shadow-md interactive-shadow transition transform hover:-translate-y-1"
                onMouseMove={handleShadowMove}
                onMouseLeave={handleShadowLeave}
              >
                <User className="w-5 h-5 text-red-400" />
                <span className="text-sm">
                  Created By <span className="font-semibold underline">Mina Romany</span>
                </span>
              </a>
              <div className="flex space-x-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all transform hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-400 flex items-center justify-center transition-all transform hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition-all transform hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-all transform hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/+201550435615" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-800 hover:bg-green-500 flex items-center justify-center transition-all transform hover:scale-110">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-all transform hover:scale-110">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FlyHighWebsite;







