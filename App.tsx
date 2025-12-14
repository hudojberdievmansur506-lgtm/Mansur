import React, { useState } from 'react';
import { BookOpen, GraduationCap, Play, ArrowLeft, LayoutGrid, List, ExternalLink, MessageCircle, Youtube, Search, Globe } from 'lucide-react';
import { AI_TOOLS } from './constants';
import { AiTool, ToolCategory, Language } from './types';
import { ToolCard } from './components/ToolCard';
import { AiTutor } from './components/AiTutor';

const TRANSLATIONS = {
  uz: {
    title: "GDPI",
    subtitle: "AI O'quv Platformasi",
    searchPlaceholder: "AI vositalarni qidirish...",
    home: "Bosh Sahifa",
    free: "Bepul AIlar",
    paid: "Pullik AIlar",
    heroTitle: "Sun'iy Intellektni",
    heroSubtitle: "Professional O'rganing",
    heroDesc: "Zamonaviy ta'lim texnologiyalari va sun'iy intellekt vositalaridan samarali foydalanishni o'rganing. Talabalar va hodimlar uchun maxsus platforma.",
    startFree: "Bepul Kurslarni Boshlash",
    proTools: "Professional Vositalar",
    whyPlatform: "Nega aynan bu platforma?",
    whyDesc: "Biz sizga eng zamonaviy va foydali bilimlarni berishga intilamiz",
    videoLessons: "Video Darsliklar",
    videoDesc: "Har bir sun'iy intellekt vositasidan qanday foydalanish bo'yicha qadam-ba-qadam video qo'llanmalar.",
    extList: "Kengaytirilgan Ro'yxat",
    listDesc: "Eng so'nggi va samarali bepul hamda pullik AI vositalarining saralangan ro'yxati.",
    academicHelp: "Akademik Yordam",
    academicDesc: "Ilmiy ishlar, maqolalar va dars jarayonlarida AIdan to'g'ri foydalanish metodikasi.",
    results: "Qidiruv natijalari",
    found: "ta natija topildi",
    freeDesc: "Talabalar uchun eng samarali bepul vositalar to'plami.",
    paidDesc: "Kengaytirilgan imkoniyatlarga ega professional AI modellari.",
    noResults: "Natija topilmadi",
    noResultsDesc: "So'rovingiz bo'yicha hech narsa topilmadi. Boshqa so'z bilan qidirib ko'ring.",
    emptyCat: "Hozircha bu bo'limda ma'lumot yo'q.",
    viewAll: "Barcha vositalarni ko'rish",
    back: "Ortga qaytish",
    viewVideo: "Videoni ko'rish uchun bosing",
    videoNotAvailable: "Video darslik mavjud emas",
    watchYoutube: "YouTube'da ko'rish",
    gotoPlatform: "Platformaga o'tish",
    aboutTool: "Ushbu vosita haqida",
    howToUse: "Qanday foydalaniladi?",
    step1: "Ro'yxatdan o'tish jarayoni juda oddiy.",
    step2: "Talabalar uchun maxsus imkoniyatlar mavjud bo'lishi mumkin.",
    step3: "Kundalik ta'lim jarayonida samarali foydalanish bo'yicha yuqoridagi videoni ko'ring.",
    noteTitle: "GDPI Talabalari uchun eslatma:",
    noteDesc: "Har qanday sun'iy intellekt vositasidan foydalanganda, olingan ma'lumotlarni qayta tekshirish va akademik halollik prinsiplariga rioya qilish muhim.",
    footerDesc: "Guliston Davlat Pedagogika Instituti talabalari va hodimlari uchun maxsus sun'iy intellekt o'quv platformasi.",
    rights: "Barcha huquqlar himoyalangan.",
    questions: "Savollar va takliflar uchun:",
    telegram: "Telegram orqali",
    contactAdmin: "Admin bilan bog'lanish",
    universityName: "Guliston Davlat Pedagogika Instituti",
    toolsCount: "ta AI Vositasi",
    projectAuthor: "Dastur loyihasi: M.Z.Xudayberdiyev"
  },
  ru: {
    title: "ГГПИ",
    subtitle: "Учебная платформа ИИ",
    searchPlaceholder: "Поиск инструментов ИИ...",
    home: "Главная",
    free: "Бесплатные ИИ",
    paid: "Платные ИИ",
    heroTitle: "Изучайте Искусственный Интеллект",
    heroSubtitle: "Профессионально",
    heroDesc: "Научитесь эффективно использовать современные образовательные технологии и инструменты ИИ. Специальная платформа для студентов и сотрудников.",
    startFree: "Начать бесплатные курсы",
    proTools: "Профессиональные инструменты",
    whyPlatform: "Почему именно эта платформа?",
    whyDesc: "Мы стремимся предоставить вам самые современные и полезные знания",
    videoLessons: "Видеоуроки",
    videoDesc: "Пошаговые видеоинструкции по использованию каждого инструмента искусственного интеллекта.",
    extList: "Расширенный список",
    listDesc: "Отобранный список новейших и эффективных бесплатных и платных инструментов ИИ.",
    academicHelp: "Академическая помощь",
    academicDesc: "Методика правильного использования ИИ в научных работах, статьях и учебном процессе.",
    results: "Результаты поиска",
    found: "результатов найдено",
    freeDesc: "Набор самых эффективных бесплатных инструментов для студентов.",
    paidDesc: "Профессиональные модели ИИ с расширенными возможностями.",
    noResults: "Результатов не найдено",
    noResultsDesc: "По вашему запросу ничего не найдено. Попробуйте другие ключевые слова.",
    emptyCat: "В этом разделе пока нет информации.",
    viewAll: "Посмотреть все инструменты",
    back: "Назад",
    viewVideo: "Нажмите для просмотра видео",
    videoNotAvailable: "Видеоурок недоступен",
    watchYoutube: "Смотреть на YouTube",
    gotoPlatform: "Перейти на платформу",
    aboutTool: "Об этом инструменте",
    howToUse: "Как использовать?",
    step1: "Процесс регистрации очень прост.",
    step2: "Могут быть специальные возможности для студентов.",
    step3: "Посмотрите видео выше для эффективного использования в учебном процессе.",
    noteTitle: "Примечание для студентов ГГПИ:",
    noteDesc: "При использовании любых инструментов ИИ важно перепроверять полученную информацию и соблюдать принципы академической честности.",
    footerDesc: "Специальная учебная платформа по искусственному интеллекту для студентов и сотрудников Гулистанского государственного педагогического института.",
    rights: "Все права защищены.",
    questions: "По вопросам и предложениям:",
    telegram: "Через Telegram",
    contactAdmin: "Связаться с админом",
    universityName: "Гулистанский государственный педагогический институт",
    toolsCount: "Инструментов ИИ",
    projectAuthor: "Автор проекта: М.З. Худайбердиев"
  },
  en: {
    title: "GSPI",
    subtitle: "AI Learning Platform",
    searchPlaceholder: "Search AI tools...",
    home: "Home",
    free: "Free AIs",
    paid: "Paid AIs",
    heroTitle: "Learn Artificial Intelligence",
    heroSubtitle: "Professionally",
    heroDesc: "Learn to effectively use modern educational technologies and AI tools. A special platform for students and staff.",
    startFree: "Start Free Courses",
    proTools: "Professional Tools",
    whyPlatform: "Why this platform?",
    whyDesc: "We strive to provide you with the most modern and useful knowledge",
    videoLessons: "Video Tutorials",
    videoDesc: "Step-by-step video guides on how to use each artificial intelligence tool.",
    extList: "Extended List",
    listDesc: "A curated list of the latest and most effective free and paid AI tools.",
    academicHelp: "Academic Support",
    academicDesc: "Methodology for the correct use of AI in research papers, articles, and the educational process.",
    results: "Search results",
    found: "results found",
    freeDesc: "A collection of the most effective free tools for students.",
    paidDesc: "Professional AI models with advanced features.",
    noResults: "No results found",
    noResultsDesc: "Nothing found for your query. Try searching with other words.",
    emptyCat: "No information available in this section yet.",
    viewAll: "View all tools",
    back: "Go back",
    viewVideo: "Click to watch video",
    videoNotAvailable: "Video tutorial not available",
    watchYoutube: "Watch on YouTube",
    gotoPlatform: "Go to platform",
    aboutTool: "About this tool",
    howToUse: "How to use?",
    step1: "The registration process is very simple.",
    step2: "There may be special opportunities for students.",
    step3: "Watch the video above for effective use in the daily learning process.",
    noteTitle: "Note for GSPI Students:",
    noteDesc: "When using any AI tool, it is important to double-check the information obtained and adhere to the principles of academic integrity.",
    footerDesc: "Special artificial intelligence learning platform for students and staff of Gulistan State Pedagogical Institute.",
    rights: "All rights reserved.",
    questions: "For questions and suggestions:",
    telegram: "Via Telegram",
    contactAdmin: "Contact Admin",
    universityName: "Gulistan State Pedagogical Institute",
    toolsCount: "AI Tools",
    projectAuthor: "Project by: M.Z. Xudayberdiyev"
  }
};

const App: React.FC = () => {
  const [view, setView] = useState<'HOME' | 'FREE' | 'PAID' | 'DETAIL' | 'SEARCH'>('HOME');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState<AiTool | null>(null);
  const [language, setLanguage] = useState<Language>('uz');

  const t = TRANSLATIONS[language];

  const freeCount = AI_TOOLS.filter(t => t.category === ToolCategory.FREE).length;
  const paidCount = AI_TOOLS.filter(t => t.category === ToolCategory.PAID).length;

  const handleToolClick = (tool: AiTool) => {
    setSelectedTool(tool);
    setView('DETAIL');
    window.scrollTo(0, 0);
  };

  const handleNavClick = (newView: 'HOME' | 'FREE' | 'PAID') => {
    setView(newView);
    setSearchQuery('');
    window.scrollTo(0, 0);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      setView('SEARCH');
    } else {
      if (view === 'SEARCH') setView('HOME');
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  const filteredTools = (() => {
    if (view === 'SEARCH') {
      const query = searchQuery.toLowerCase().trim();
      return AI_TOOLS.filter(tool => {
        const nameMatch = tool.name.toLowerCase().includes(query);
        const tagMatch = tool.tags.some(tag => tag.toLowerCase().includes(query));
        // Search in the current language description
        const descMatch = tool.description[language].toLowerCase().includes(query);
        return nameMatch || tagMatch || descMatch;
      });
    }
    if (view === 'FREE') return AI_TOOLS.filter(t => t.category === ToolCategory.FREE);
    if (view === 'PAID') return AI_TOOLS.filter(t => t.category === ToolCategory.PAID);
    return [];
  })();

  const handleVideoClick = (url: string) => {
    const watchUrl = url.replace('embed/', 'watch?v=');
    window.open(watchUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <div 
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
            onClick={() => handleNavClick('HOME')}
          >
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2.5 rounded-xl text-white shadow-lg shadow-blue-200 group-hover:shadow-blue-300 transition-all duration-300">
              <GraduationCap size={26} />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-slate-800 leading-tight tracking-tight">{t.title}</h1>
              <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">{t.subtitle}</p>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-md relative hidden sm:block">
             <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-2xl leading-5 bg-slate-50/50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 sm:text-sm transition-all shadow-sm group-hover:bg-white"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={handleSearch}
                />
             </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile Search Icon (visible on small screens) */}
             <div className="sm:hidden p-2 text-slate-500" onClick={() => setView('SEARCH')}>
                <Search size={24} />
             </div>

            {/* Language Switcher */}
            <div className="relative group">
               <div className="flex items-center gap-1 bg-slate-100/80 px-2 py-1.5 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                  <Globe size={16} className="text-slate-500" />
                  <select 
                    value={language} 
                    onChange={handleLanguageChange}
                    className="bg-transparent text-sm font-medium text-slate-700 focus:outline-none cursor-pointer"
                  >
                    <option value="uz">O'zbek</option>
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                  </select>
               </div>
            </div>

            <nav className="hidden md:flex gap-1 p-1 bg-slate-100/50 rounded-xl flex-shrink-0">
              <button 
                onClick={() => handleNavClick('HOME')} 
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${view === 'HOME' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'}`}
              >
                {t.home}
              </button>
              <button 
                onClick={() => handleNavClick('FREE')} 
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${view === 'FREE' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'}`}
              >
                {t.free} <span className="ml-1 opacity-60 text-xs">({freeCount})</span>
              </button>
              <button 
                onClick={() => handleNavClick('PAID')} 
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${view === 'PAID' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'}`}
              >
                {t.paid} <span className="ml-1 opacity-60 text-xs">({paidCount})</span>
              </button>
            </nav>
          </div>
        </div>
        {/* Mobile Search Field (visible when clicked/active) */}
         {view === 'SEARCH' && (
           <div className="sm:hidden px-4 pb-4">
              <input
                type="text"
                autoFocus
                className="block w-full px-4 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={handleSearch}
              />
           </div>
         )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* HOME VIEW */}
        {view === 'HOME' && (
          <div className="animate-in fade-in duration-500">
            {/* Hero Section */}
            <section className="bg-blue-50/60 py-24 px-4 relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
              </div>

              <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase">
                      {t.universityName}
                    </span>
                     <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-wide uppercase shadow-sm">
                      {AI_TOOLS.length} {t.toolsCount}
                    </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
                  {t.heroTitle} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t.heroSubtitle}</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                  {t.heroDesc}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={() => handleNavClick('FREE')}
                    className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                  >
                    <BookOpen size={20} className="group-hover:scale-110 transition-transform" />
                    {t.startFree}
                  </button>
                  <button 
                    onClick={() => handleNavClick('PAID')}
                    className="px-8 py-4 bg-white text-slate-700 rounded-2xl font-bold border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-700 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                  >
                    <LayoutGrid size={20} />
                    {t.proTools}
                  </button>
                </div>
              </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{t.whyPlatform}</h3>
                <p className="mt-4 text-slate-500 max-w-2xl mx-auto">{t.whyDesc}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-100 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-slate-900">{t.videoLessons}</h4>
                  <p className="text-slate-600 leading-relaxed">{t.videoDesc}</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-emerald-100/50 hover:border-emerald-100 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <List size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-slate-900">{t.extList} ({AI_TOOLS.length})</h4>
                  <p className="text-slate-600 leading-relaxed">{t.listDesc}</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-amber-100/50 hover:border-amber-100 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-slate-900">{t.academicHelp}</h4>
                  <p className="text-slate-600 leading-relaxed">{t.academicDesc}</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* LIST VIEW (Free, Paid, or Search) */}
        {(view === 'FREE' || view === 'PAID' || view === 'SEARCH') && (
          <div className="max-w-7xl mx-auto px-4 py-12 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={() => handleNavClick('HOME')}
                className="p-3 hover:bg-white hover:shadow-md rounded-xl transition-all text-slate-500 hover:text-blue-600"
              >
                <ArrowLeft size={24} />
              </button>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  {view === 'SEARCH' 
                    ? `${t.results}: "${searchQuery}"`
                    : view === 'FREE' ? `${t.free} (${freeCount})` : `${t.paid} (${paidCount})`
                  }
                </h2>
                <p className="text-slate-500 mt-1">
                  {view === 'SEARCH'
                    ? `${filteredTools.length} ${t.found}`
                    : view === 'FREE' 
                      ? t.freeDesc
                      : t.paidDesc
                  }
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map(tool => (
                <ToolCard key={tool.id} tool={tool} onClick={handleToolClick} language={language} />
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-300">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                   <Search size={32} className="text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{t.noResults}</h3>
                <p className="text-slate-500 mt-2 max-w-sm mx-auto">
                  {view === 'SEARCH' ? t.noResultsDesc : t.emptyCat}
                </p>
                {view === 'SEARCH' && (
                  <button 
                    onClick={() => handleNavClick('HOME')}
                    className="mt-6 text-blue-600 font-semibold hover:text-blue-700 hover:underline"
                  >
                    {t.viewAll}
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* DETAIL VIEW */}
        {view === 'DETAIL' && selectedTool && (
          <div className="max-w-5xl mx-auto px-4 py-12 animate-in zoom-in-95 duration-300">
             <button 
                onClick={() => {
                    // Go back to the previous context if possible, or default to Home/Category
                    if (searchQuery) setView('SEARCH');
                    else setView(selectedTool.category === ToolCategory.FREE ? 'FREE' : 'PAID');
                }}
                className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-6 transition-colors font-medium group"
              >
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all">
                   <ArrowLeft size={20} />
                </div>
                <span>{t.back}</span>
              </button>

              <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
                {/* Video/Image Section */}
                <div className="aspect-video w-full bg-slate-50 relative group overflow-hidden border-b border-slate-100">
                  {selectedTool.videoUrl ? (
                    <div 
                      onClick={() => handleVideoClick(selectedTool.videoUrl!)}
                      className="w-full h-full relative cursor-pointer group"
                    >
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 z-10 group-hover:bg-slate-900/20 transition-colors backdrop-blur-[2px] group-hover:backdrop-blur-none">
                           <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 animate-in fade-in zoom-in">
                             <Play size={40} className="text-blue-600 ml-2" fill="currentColor" />
                           </div>
                           <span className="absolute bottom-8 text-slate-700 font-bold bg-white/80 px-6 py-2.5 rounded-full text-sm backdrop-blur-md shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                              {t.viewVideo}
                           </span>
                        </div>
                        <img 
                          src={selectedTool.imageUrl} 
                          alt={selectedTool.name} 
                          className="w-full h-full object-contain p-16 mix-blend-multiply"
                        />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-slate-50">
                       <img 
                        src={selectedTool.imageUrl} 
                        alt={selectedTool.name} 
                        className="w-1/3 h-auto max-h-[50%] object-contain mb-8 drop-shadow-md mix-blend-multiply"
                      />
                       <div className="flex flex-col items-center text-slate-400 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
                         <Play size={24} className="mb-1" />
                         <p className="font-medium text-sm">{t.videoNotAvailable}</p>
                       </div>
                    </div>
                  )}
                </div>
                
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                         <h2 className="text-4xl font-bold text-slate-900">{selectedTool.name}</h2>
                         <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase ${
                           selectedTool.category === ToolCategory.FREE 
                             ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
                             : 'bg-amber-100 text-amber-700 border border-amber-200'
                         }`}>
                           {selectedTool.category === ToolCategory.FREE ? (language === 'uz' ? 'BEPUL' : language === 'ru' ? 'БЕСПЛАТНО' : 'FREE') : (language === 'uz' ? 'PULLIK' : language === 'ru' ? 'ПЛАТНО' : 'PAID')}
                         </span>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {selectedTool.tags.map(tag => (
                          <span key={tag} className="text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">#{tag}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        {selectedTool.videoUrl && (
                          <a 
                            href={selectedTool.videoUrl.replace('embed/', 'watch?v=')} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FF0000] text-white rounded-xl hover:bg-[#CC0000] transition-colors shadow-lg shadow-red-500/20 font-bold"
                          >
                            <Youtube size={22} />
                            <span>{t.watchYoutube}</span>
                          </a>
                        )}

                        <a 
                          href={selectedTool.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 font-bold"
                        >
                          <span>{t.gotoPlatform}</span>
                          <ExternalLink size={20} />
                        </a>
                    </div>
                  </div>

                  <div className="prose prose-lg prose-slate max-w-none">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-10">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 mt-0">{t.aboutTool}</h3>
                        <p className="text-slate-600 leading-relaxed m-0">
                        {selectedTool.fullDescription ? selectedTool.fullDescription[language] : selectedTool.description[language]}
                        </p>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.howToUse}</h3>
                    <ul className="space-y-3 text-slate-600 mb-10 list-none pl-0">
                      <li className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                        <span>{t.step1}</span>
                      </li>
                      <li className="flex gap-3">
                         <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                        <span>{t.step2}</span>
                      </li>
                      <li className="flex gap-3">
                         <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                        <span>{t.step3}</span>
                      </li>
                    </ul>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 flex gap-4 items-start">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                          <GraduationCap size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-1 mt-0 text-lg">{t.noteTitle}</h4>
                        <p className="text-blue-800 text-base m-0 leading-relaxed">
                            {t.noteDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 mt-auto border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                 <div className="bg-blue-600 p-2 rounded-lg text-white">
                    <GraduationCap size={24} />
                 </div>
                 <h4 className="text-white font-bold text-2xl tracking-tight">{t.title}</h4>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm mx-auto md:mx-0 leading-relaxed">{t.footerDesc}</p>
            <div className="text-sm font-medium text-slate-500">
              &copy; {new Date().getFullYear()} {t.rights}
            </div>
            <div className="text-sm font-medium text-slate-500 mt-2">
              {t.projectAuthor}
            </div>
          </div>

          <div className="text-center md:text-right">
             <p className="text-base font-medium text-slate-300 mb-4">{t.questions}</p>
             <div className="flex flex-col md:items-end gap-3">
               <a 
                 href="https://t.me/+998994705044" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center md:justify-end gap-4 px-6 py-4 bg-slate-800 hover:bg-slate-700 rounded-2xl text-white transition-all group border border-slate-700 hover:border-slate-600"
               >
                 <div className="p-2.5 bg-blue-600 rounded-full text-white group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/50">
                   <MessageCircle size={20} />
                 </div>
                 <div className="text-left">
                   <span className="block text-xs text-slate-400 font-medium uppercase tracking-wide">{t.telegram}</span>
                   <span className="font-bold text-lg">{t.contactAdmin}</span>
                 </div>
               </a>
             </div>
          </div>

        </div>
      </footer>

      {/* AI Assistant Floating Button */}
      <AiTutor language={language} />
    </div>
  );
};

export default App;