import { AiTool, ToolCategory } from './types';

export const AI_TOOLS: AiTool[] = [
  {
    id: '1',
    name: 'Google Gemini',
    description: "Google kompaniyasining eng kuchli sun'iy intellekt modeli. Matn yozish, tarjima qilish va kodlashda yordam beradi.",
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/512px-Google_Gemini_logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/S9yvW-P6yYk', // Russian Gemini Review
    link: 'https://gemini.google.com/',
    tags: ['Chatbot', 'Matn', 'Kodlash']
  },
  {
    id: '2',
    name: 'ChatGPT (Free)',
    description: "OpenAI tomonidan yaratilgan mashhur chatbot. Kundalik savollar va oddiy matnlar uchun ajoyib yechim.",
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/V6JzXQxG2T4', // Russian ChatGPT Tutorial
    link: 'https://chatgpt.com/',
    tags: ['Chatbot', 'Yordamchi']
  },
  {
    id: '3',
    name: 'Bing Image Creator',
    description: "Matn orqali rasmlar yaratish uchun bepul vosita. DALL-E 3 texnologiyasiga asoslangan.",
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bing_Fluent_Logo.svg/512px-Bing_Fluent_Logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/1_LzRkGk7h4', // Russian Bing Image Creator
    link: 'https://www.bing.com/images/create',
    tags: ['Tasvir', 'Dizayn']
  },
  {
    id: '4',
    name: 'Perplexity AI',
    description: "Ilmiy izlanishlar va manbalar bilan ishlash uchun eng yaxshi qidiruv tizimi.",
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.perplexity.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/N-y7XzC-l5M', // Russian Perplexity
    link: 'https://www.perplexity.ai/',
    tags: ['Qidiruv', 'Ilm-fan']
  },
  {
    id: '5',
    name: 'Midjourney',
    description: "Eng yuqori sifatli badiiy rasmlar yaratish uchun professional pullik vosita.",
    category: ToolCategory.PAID,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Midjourney_Emblem.png/512px-Midjourney_Emblem.png',
    videoUrl: 'https://www.youtube.com/embed/hB2gA2Yg2yI', // Russian Midjourney Guide
    link: 'https://www.midjourney.com/',
    tags: ['Tasvir', 'Art', 'Professional']
  },
  {
    id: '6',
    name: 'ChatGPT Plus',
    description: "GPT-4 modeliga kirish, fayllar bilan ishlash va tezkor javoblar olish imkoniyati.",
    category: ToolCategory.PAID,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/V6JzXQxG2T4', // Russian ChatGPT (Advanced features often covered here too)
    link: 'https://chatgpt.com/',
    tags: ['Chatbot', 'Advanced', 'Data']
  },
  {
    id: '7',
    name: 'Claude 3 Opus',
    description: "Katta hajmdagi matnlar va kitoblarni tahlil qilish uchun eng kuchli model.",
    category: ToolCategory.PAID,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Anthropic_logo.svg/512px-Anthropic_logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/Pj3hXQ-3dOQ', // Russian Claude 3 Review
    link: 'https://claude.ai/',
    tags: ['Tahlil', 'Yozuv']
  },
  {
    id: '8',
    name: 'Kimi.ai',
    description: "Katta hajmdagi hujjatlarni va kitoblarni tahlil qilish uchun eng kuchli vosita. 200 minggacha so'zni eslab qola oladi.",
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://kimi.moonshot.cn/&size=256',
    videoUrl: 'https://www.youtube.com/embed/d2bJ-L7L4Yk', // Russian General AI Overview (covering various models)
    link: 'https://kimi.moonshot.cn/',
    tags: ['Tahlil', 'Katta Matn', 'Ilm-fan']
  },
  {
    id: '9',
    name: 'Qwen 2.5',
    description: "Alibaba guruhining eng kuchli ochiq manbali modeli. Kodlash va matematika masalalarini yechishda juda aniq ishlaydi.",
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://tongyi.aliyun.com/qianwen/&size=256',
    videoUrl: 'https://www.youtube.com/embed/d2bJ-L7L4Yk', // Russian General AI Overview
    link: 'https://tongyi.aliyun.com/qianwen/',
    tags: ['Kodlash', 'Matematika', 'Ochiq Manba']
  },
  {
    id: '10',
    name: 'Minimax',
    description: "Mantiqiy fikrlash va insoniy muloqotga juda yaqin matnlar yaratish bo'yicha yetakchi modellaridan biri.",
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://hailuo.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/d2bJ-L7L4Yk', // Russian General AI Overview
    link: 'https://hailuo.ai/',
    tags: ['Chatbot', 'Mantiq', 'Muloqot']
  },
  {
    id: '11',
    name: 'Educaplay',
    description: "O'qituvchilar uchun interaktiv o'yinlar va multimedia darslarini yaratish platformasi. Sun'iy intellekt yordamida tezkor testlar tuzish mumkin.",
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.educaplay.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/wXJdM_6j5sE', // Russian Educaplay Tutorial
    link: 'https://www.educaplay.com/',
    tags: ['Ta\'lim', 'Interaktiv', 'O\'yinlar']
  }
];