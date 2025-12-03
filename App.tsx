import React, { useState } from 'react';
import { BookOpen, GraduationCap, Play, ArrowLeft, LayoutGrid, List, ExternalLink, MessageCircle, Youtube, Search } from 'lucide-react';
import { AI_TOOLS } from './constants';
import { AiTool, ToolCategory } from './types';
import { ToolCard } from './components/ToolCard';
import { AiTutor } from './components/AiTutor';

const App: React.FC = () => {
  const [view, setView] = useState<'HOME' | 'FREE' | 'PAID' | 'DETAIL' | 'SEARCH'>('HOME');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState<AiTool | null>(null);

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

  const filteredTools = (() => {
    if (view === 'SEARCH') {
      const query = searchQuery.toLowerCase().trim();
      return AI_TOOLS.filter(t => 
        t.name.toLowerCase().includes(query) || 
        t.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    if (view === 'FREE') return AI_TOOLS.filter(t => t.category === ToolCategory.FREE);
    if (view === 'PAID') return AI_TOOLS.filter(t => t.category === ToolCategory.PAID);
    return [];
  })();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <div 
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
            onClick={() => handleNavClick('HOME')}
          >
            <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:bg-blue-700 transition-colors">
              <GraduationCap size={28} />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-slate-800 leading-tight">GDPI</h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide">AI O'QUV PLATFORMASI</p>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-md relative">
             <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all shadow-sm"
                  placeholder="AI vositalarni qidirish..."
                  value={searchQuery}
                  onChange={handleSearch}
                />
             </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600 flex-shrink-0">
            <button onClick={() => handleNavClick('HOME')} className={`hover:text-blue-600 transition-colors ${view === 'HOME' ? 'text-blue-600' : ''}`}>Bosh Sahifa</button>
            <button onClick={() => handleNavClick('FREE')} className={`hover:text-blue-600 transition-colors ${view === 'FREE' ? 'text-blue-600' : ''}`}>Bepul AIlar</button>
            <button onClick={() => handleNavClick('PAID')} className={`hover:text-blue-600 transition-colors ${view === 'PAID' ? 'text-blue-600' : ''}`}>Pullik AIlar</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* HOME VIEW */}
        {view === 'HOME' && (
          <div className="animate-in fade-in duration-500">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-20 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-semibold mb-6">
                  Guliston Davlat Pedagogika Instituti
                </span>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Sun'iy Intellektni <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Professional O'rganing</span>
                </h2>
                <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                  Zamonaviy ta'lim texnologiyalari va sun'iy intellekt vositalaridan samarali foydalanishni o'rganing. Talabalar va hodimlar uchun maxsus platforma.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={() => handleNavClick('FREE')}
                    className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <BookOpen size={20} />
                    Bepul Kurslarni Boshlash
                  </button>
                  <button 
                    onClick={() => handleNavClick('PAID')}
                    className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold border border-slate-700 transition-all flex items-center justify-center gap-2"
                  >
                    <LayoutGrid size={20} />
                    Professional Vositalar
                  </button>
                </div>
              </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-slate-800">Nega aynan bu platforma?</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                    <BookOpen size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Video Darsliklar</h4>
                  <p className="text-slate-600">Har bir sun'iy intellekt vositasidan qanday foydalanish bo'yicha qadam-ba-qadam video qo'llanmalar.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-6">
                    <List size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Kengaytirilgan Ro'yxat</h4>
                  <p className="text-slate-600">Eng so'nggi va samarali bepul hamda pullik AI vositalarining saralangan ro'yxati.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-6">
                    <GraduationCap size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Akademik Yordam</h4>
                  <p className="text-slate-600">Ilmiy ishlar, maqolalar va dars jarayonlarida AIdan to'g'ri foydalanish metodikasi.</p>
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
                className="p-2 hover:bg-slate-200 rounded-full transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <div>
                <h2 className="text-3xl font-bold text-slate-800">
                  {view === 'SEARCH' 
                    ? `Qidiruv natijalari: "${searchQuery}"`
                    : view === 'FREE' ? 'Bepul Sun\'iy Intellektlar' : 'Pullik (Professional) Vositalar'
                  }
                </h2>
                <p className="text-slate-500">
                  {view === 'SEARCH'
                    ? `${filteredTools.length} ta natija topildi`
                    : view === 'FREE' 
                      ? "Talabalar uchun eng samarali bepul vositalar to'plami." 
                      : "Kengaytirilgan imkoniyatlarga ega professional AI modellari."
                  }
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map(tool => (
                <ToolCard key={tool.id} tool={tool} onClick={handleToolClick} />
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                <Search size={48} className="mx-auto text-slate-300 mb-4" />
                <p className="text-slate-500 text-lg">
                  {view === 'SEARCH' ? "So'rovingiz bo'yicha hech narsa topilmadi." : "Hozircha bu bo'limda ma'lumot yo'q."}
                </p>
                {view === 'SEARCH' && (
                  <button 
                    onClick={() => handleNavClick('HOME')}
                    className="mt-4 text-blue-600 font-medium hover:underline"
                  >
                    Barcha vositalarni ko'rish
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
                className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-6 transition-colors font-medium"
              >
                <ArrowLeft size={20} />
                Ortga qaytish
              </button>

              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                {/* Video/Image Section */}
                <div className="aspect-video w-full bg-slate-100 relative group overflow-hidden border-b border-slate-200">
                  {selectedTool.videoUrl ? (
                    <iframe 
                      src={selectedTool.videoUrl} 
                      title={selectedTool.name}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                       <img 
                        src={selectedTool.imageUrl} 
                        alt={selectedTool.name} 
                        className="w-1/3 h-auto max-h-[50%] object-contain mb-6 drop-shadow-sm"
                      />
                       <div className="flex flex-col items-center text-slate-400 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200">
                         <Play size={24} className="mb-1" />
                         <p className="font-medium text-sm">Video darslik mavjud emas</p>
                       </div>
                    </div>
                  )}
                </div>
                
                {/* Fallback Link */}
                {selectedTool.videoUrl && (
                    <div className="bg-slate-50 border-b border-slate-100 px-8 py-2 flex justify-end">
                         <a 
                            href={selectedTool.videoUrl.replace('embed/', 'watch?v=')} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-slate-500 hover:text-red-600 flex items-center gap-1 transition-colors"
                          >
                            <Youtube size={14} />
                            Video ochilmayaptimi? YouTube'da ko'rish
                          </a>
                    </div>
                )}

                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                         <h2 className="text-3xl font-bold text-slate-900">{selectedTool.name}</h2>
                         <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                           selectedTool.category === ToolCategory.FREE 
                             ? 'bg-green-100 text-green-700' 
                             : 'bg-amber-100 text-amber-700'
                         }`}>
                           {selectedTool.category === ToolCategory.FREE ? 'BEPUL' : 'PULLIK'}
                         </span>
                      </div>
                      <div className="flex gap-2">
                        {selectedTool.tags.map(tag => (
                          <span key={tag} className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">#{tag}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                        {selectedTool.videoUrl && (
                          <a 
                            href={selectedTool.videoUrl.replace('embed/', 'watch?v=')} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20 font-semibold"
                          >
                            <Youtube size={20} />
                            <span>YouTube'da ko'rish</span>
                          </a>
                        )}

                        <a 
                          href={selectedTool.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 font-semibold"
                        >
                          <span>Platformaga o'tish</span>
                          <ExternalLink size={18} />
                        </a>
                    </div>
                  </div>

                  <div className="prose prose-slate max-w-none">
                    <h3 className="text-xl font-semibold mb-4">Ushbu vosita haqida</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {selectedTool.description}
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-4">Qanday foydalaniladi?</h3>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-8">
                      <li>Ro'yxatdan o'tish jarayoni juda oddiy.</li>
                      <li>Talabalar uchun maxsus imkoniyatlar mavjud bo'lishi mumkin.</li>
                      <li>Kundalik ta'lim jarayonida samarali foydalanish bo'yicha yuqoridagi videoni ko'ring.</li>
                    </ul>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h4 className="font-semibold text-blue-900 mb-2">GDPI Talabalari uchun eslatma:</h4>
                      <p className="text-blue-800 text-sm">
                        Har qanday sun'iy intellekt vositasidan foydalanganda, olingan ma'lumotlarni qayta tekshirish va akademik halollik prinsiplariga rioya qilish muhim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-auto border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-2">GDPI AI Platforma</h4>
            <p className="text-sm mb-4">Guliston Davlat Pedagogika Instituti talabalari va hodimlari uchun maxsus.</p>
            <div className="text-xs opacity-60">
              &copy; {new Date().getFullYear()} Barcha huquqlar himoyalangan.
            </div>
          </div>

          <div className="text-center md:text-right">
             <p className="text-sm font-medium text-slate-300 mb-3">Savollar va takliflar uchun:</p>
             <div className="flex flex-col md:items-end gap-3">
               <a 
                 href="https://t.me/+998994705044" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center md:justify-end gap-3 px-5 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-white transition-all group"
               >
                 <div className="p-2 bg-blue-600 rounded-full text-white group-hover:scale-110 transition-transform">
                   <MessageCircle size={18} />
                 </div>
                 <div className="text-left">
                   <span className="block text-xs text-slate-400">Telegram orqali</span>
                   <span className="font-semibold">Admin bilan bog'lanish</span>
                 </div>
               </a>
             </div>
          </div>

        </div>
      </footer>

      {/* AI Assistant Floating Button */}
      <AiTutor />
    </div>
  );
};

export default App;