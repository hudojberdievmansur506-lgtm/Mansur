import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { ChatMessage, Language } from '../types';

interface AiTutorProps {
  language: Language;
}

const GREETINGS = {
  uz: "Assalomu alaykum! Men GDPI virtual yordamchisiman. Sun'iy intellekt bo'yicha qanday savolingiz bor?",
  ru: "Здравствуйте! Я виртуальный помощник ГГПИ. Какой у вас вопрос по искусственному интеллекту?",
  en: "Hello! I am the GSPI virtual assistant. What question do you have about artificial intelligence?"
};

const SYSTEM_PROMPTS = {
  uz: "Siz Guliston Davlat Pedagogika Instituti talabalari uchun yordamchi o'qituvchisiz. Javoblaringiz qisqa, aniq va do'stona bo'lsin. O'zbek tilida javob bering.",
  ru: "Вы помощник преподавателя для студентов Гулистанского государственного педагогического института. Ваши ответы должны быть краткими, четкими и дружелюбными. Отвечайте на русском языке.",
  en: "You are a teaching assistant for students of Gulistan State Pedagogical Institute. Keep your answers short, clear, and friendly. Answer in English."
};

const ERROR_MSGS = {
  uz: "Xatolik yuz berdi. Iltimos qayta urinib ko'ring.",
  ru: "Произошла ошибка. Пожалуйста, попробуйте еще раз.",
  en: "An error occurred. Please try again."
};

const WAIT_MSGS = {
    uz: "Uzr, hozir javob bera olmayman.",
    ru: "Извините, я не могу ответить прямо сейчас.",
    en: "Sorry, I cannot answer right now."
}

export const AiTutor: React.FC<AiTutorProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  // Reset messages when language changes, or just keep history? Let's reset for clarity or just append a new greeting.
  // For simplicity, we initialize with the current language greeting, but if lang changes, we don't automatically clear chat unless intended.
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: GREETINGS['uz'] } 
  ]);
  
  // Update greeting if language changes and chat hasn't started essentially (length 1)
  useEffect(() => {
     if (messages.length === 1 && messages[0].role === 'model') {
         setMessages([{ role: 'model', text: GREETINGS[language] }]);
     }
  }, [language]);

  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: `User asks: ${userMessage}` }] }
        ],
        config: {
            systemInstruction: SYSTEM_PROMPTS[language],
        }
      });

      const text = response.text || WAIT_MSGS[language];
      
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: ERROR_MSGS[language] }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all z-50 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="AI Yordamchi"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 z-50 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <h3 className="font-bold">GDPI AI {language === 'uz' ? 'Yordamchi' : language === 'ru' ? 'Помощник' : 'Assistant'}</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex gap-2">
               <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                 <Bot size={16} />
               </div>
               <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                 <div className="flex gap-1">
                   <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                   <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                   <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                 </div>
               </div>
             </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={language === 'uz' ? "Savolingizni yozing..." : language === 'ru' ? "Напишите свой вопрос..." : "Type your question..."}
                className="flex-1 px-4 py-2 border border-slate-300 rounded-full text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};