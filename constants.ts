import { AiTool, ToolCategory } from './types';

export const AI_TOOLS: AiTool[] = [
  {
    id: '1',
    name: 'Google Gemini',
    description: {
        uz: "Google kompaniyasining eng ilg'or multimodal sun'iy intellekt modeli. U matnlar yozish, dastur kodlarini tahlil qilish, matematik masalalarni yechishda yuqori aniqlik bilan ishlaydi.",
        ru: "Самая передовая мультимодальная модель ИИ от Google. Отлично справляется с написанием текстов, анализом кода и решением математических задач.",
        en: "Google's most advanced multimodal AI model. Works with high precision in writing texts, analyzing program codes, and solving mathematical problems."
    },
    fullDescription: {
        uz: "Google kompaniyasining eng ilg'or multimodal sun'iy intellekt modeli. Gemini nafaqat matn, balki tasvir, audio va video ma'lumotlarni ham tushunish va qayta ishlash qobiliyatiga ega.",
        ru: "Самая передовая мультимодальная модель искусственного интеллекта от Google. Gemini способен понимать и обрабатывать не только текст, но и изображения, аудио и видеоданные. Он открывает широкие возможности для студентов и преподавателей.",
        en: "Google's most advanced multimodal artificial intelligence model. Gemini has the ability to understand and process not only text but also image, audio, and video data."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/512px-Google_Gemini_logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/S9yvW-P6yYk',
    link: 'https://gemini.google.com/',
    tags: ['Chatbot', 'Matn', 'Kodlash']
  },
  {
    id: '2',
    name: 'ChatGPT (Free)',
    description: {
        uz: "OpenAI kompaniyasining inqilobiy chatboti. Kundalik vazifalar, insholar yozish va g'oyalar generatsiyasi uchun dunyodagi eng mashhur yordamchi.",
        ru: "Революционный чат-бот от OpenAI. Самый популярный в мире помощник для повседневных задач, написания эссе и генерации идей.",
        en: "OpenAI's revolutionary chatbot. The world's most popular assistant for daily tasks, essay writing, and idea generation."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/V6JzXQxG2T4',
    link: 'https://chatgpt.com/',
    tags: ['Chatbot', 'Yordamchi']
  },
  {
    id: '3',
    name: 'Bing Image Creator',
    description: {
        uz: "DALL-E 3 texnologiyasiga asoslangan kuchli tasvir generatori. Shunchaki tasvirlash orqali yuqori sifatli rasmlar yaratish imkonini beradi.",
        ru: "Мощный генератор изображений на базе DALL-E 3. Позволяет создавать высококачественные изображения просто по описанию.",
        en: "Powerful image generator based on DALL-E 3 technology. Allows creating high-quality images simply by describing them."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bing_Fluent_Logo.svg/512px-Bing_Fluent_Logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/X_5w3b_1sZA',
    link: 'https://www.bing.com/images/create',
    tags: ['Tasvir', 'Dizayn']
  },
  {
    id: '4',
    name: 'Perplexity AI',
    description: {
        uz: "An'anaviy qidiruv tizimlarining yangi avlodi. Savollarga aniq manbalar va havolalar bilan javob beradi.",
        ru: "Новое поколение поисковых систем. Отвечает на вопросы с точными источниками и ссылками.",
        en: "The new generation of search engines. Answers questions with precise sources and links."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.perplexity.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/N-y7XzC-l5M',
    link: 'https://www.perplexity.ai/',
    tags: ['Qidiruv', 'Ilm-fan']
  },
  {
    id: '5',
    name: 'Midjourney',
    description: {
        uz: "Sun'iy intellekt yordamida san'at asarlari yaratish bo'yicha dunyodagi eng kuchli platforma. (Faqat Discord orqali ishlaydi).",
        ru: "Самая мощная в мире платформа для создания произведений искусства с помощью ИИ. (Работает через Discord).",
        en: "The world's most powerful platform for creating art using AI. (Works only via Discord)."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Midjourney_Emblem.png/512px-Midjourney_Emblem.png',
    videoUrl: 'https://www.youtube.com/embed/hB2gA2Yg2yI',
    link: 'https://www.midjourney.com/',
    tags: ['Tasvir', 'Art', 'Professional']
  },
  {
    id: '6',
    name: 'ChatGPT Plus',
    description: {
        uz: "GPT-4 modeliga kirish imkonini beradi. Fayllarni tahlil qilish, rasm chizish va ma'lumotlar tahlili kabi professional funksiyalarga ega.",
        ru: "Доступ к модели GPT-4. Профессиональные функции: анализ файлов, рисование изображений и анализ данных.",
        en: "Access to the GPT-4 model. Professional features like file analysis, image generation, and data analysis."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/V6JzXQxG2T4',
    link: 'https://chatgpt.com/',
    tags: ['Chatbot', 'Advanced', 'Data']
  },
  {
    id: '7',
    name: 'Claude 3 Opus',
    description: {
        uz: "Katta hajmdagi matnlar, kitoblar va hujjatlarni tahlil qilishda, shuningdek, insoniy uslubda matn yozishda juda kuchli model.",
        ru: "Мощная модель для анализа больших текстов, книг и документов, а также написания текстов в человеческом стиле.",
        en: "A powerful model for analyzing large texts, books, and documents, as well as writing text in a human-like style."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Anthropic_logo.svg/512px-Anthropic_logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/Pj3hXQ-3dOQ',
    link: 'https://claude.ai/',
    tags: ['Tahlil', 'Yozuv']
  },
  {
    id: '8',
    name: 'Kimi.ai',
    description: {
        uz: "Moonshot AI tomonidan yaratilgan, katta xotiraga ega model. Butun kitoblar yoki katta hujjatlar to'plamini tahlil qilish imkonini beradi.",
        ru: "Модель с большой памятью от Moonshot AI. Позволяет анализировать целые книги или наборы больших документов.",
        en: "A large-memory model created by Moonshot AI. Allows analyzing entire books or large sets of documents."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://kimi.moonshot.cn/&size=256',
    videoUrl: 'https://youtu.be/M7M01iVXNA4?si=XvSXS5lPoM3rI6Gb',
    link: 'https://kimi.moonshot.cn/',
    tags: ['Tahlil', 'Katta Matn', 'Ilm-fan']
  },
  {
    id: '9',
    name: 'Qwen 2.5',
    description: {
        uz: "Alibaba guruhining ochiq manbali modeli. Dasturlash va matematika masalalarini yechishda yuqori natijalarni ko'rsatadi.",
        ru: "Модель с открытым исходным кодом от Alibaba. Показывает высокие результаты в программировании и математике.",
        en: "Alibaba Group's open-source model. Shows high results in programming and solving math problems."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://tongyi.aliyun.com/qianwen/&size=256',
    videoUrl: 'https://www.youtube.com/embed/S9yvW-P6yYk',
    link: 'https://tongyi.aliyun.com/qianwen/',
    tags: ['Kodlash', 'Matematika', 'Ochiq Manba']
  },
  {
    id: '10',
    name: 'Minimax',
    description: {
        uz: "Mantiqiy fikrlash, rejalashtirish va insoniy muloqotga juda yaqin tabiiy matnlar yaratish bo'yicha yetakchi modellardan biri.",
        ru: "Одна из ведущих моделей по логическому мышлению, планированию и созданию естественных текстов.",
        en: "One of the leading models for logical reasoning, planning, and creating natural human-like texts."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://hailuo.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/V6JzXQxG2T4',
    link: 'https://hailuo.ai/',
    tags: ['Chatbot', 'Mantiq', 'Muloqot']
  },
  {
    id: '11',
    name: 'Educaplay',
    description: {
        uz: "O'qituvchilar uchun interaktiv o'yinlar, krossvordlar va multimedia darslarini yaratish platformasi.",
        ru: "Платформа для создания интерактивных игр, кроссвордов и мультимедийных уроков для учителей.",
        en: "Platform for creating interactive games, crosswords, and multimedia lessons for teachers."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.educaplay.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://www.educaplay.com/',
    tags: ['Ta\'lim', 'Interaktiv', 'O\'yinlar']
  },
  {
    id: '12',
    name: 'Research Rabbit',
    description: {
        uz: "Ilmiy tadqiqotlar uchun vizual xarita. Maqolalar o'rtasidagi bog'liqlikni ko'rsatadi.",
        ru: "Визуальная карта для научных исследований. Показывает связи между статьями.",
        en: "Visual map for scientific research. Shows connections between papers."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://researchrabbit.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://researchrabbit.ai/',
    tags: ['Tadqiqot', 'Ilm-fan', 'Vizual']
  },
  {
    id: '13',
    name: 'Google Lens',
    description: {
        uz: "Vizual qidiruv vositasi. Rasmdagi matnlarni tarjima qilish va uy vazifalarini yechishda yordam beradi.",
        ru: "Инструмент визуального поиска. Помогает переводить текст с картинок и решать домашние задания.",
        en: "Visual search tool. Helps translate text from images and solve homework."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png',
    videoUrl: 'https://www.youtube.com/embed/W7S_2bY7WwI',
    link: 'https://lens.google/',
    tags: ['Qidiruv', 'Tarjima', 'Vizual']
  },
  {
    id: '14',
    name: 'Napkin.ai',
    description: {
        uz: "Matnni professional sxemalar va grafikaga aylantiruvchi vosita.",
        ru: "Инструмент, превращающий текст в профессиональные схемы и графику.",
        en: "Tool that turns text into professional diagrams and graphics."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://napkin.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/Qj_D-R_X-X',
    link: 'https://napkin.ai/',
    tags: ['Dizayn', 'Taqdimot', 'Vizual']
  },
  {
    id: '15',
    name: 'City Walks Live',
    description: {
        uz: "Dunyo shaharlari bo'ylab virtual sayohat. Til o'rganish va madaniyat bilan tanishish uchun foydali.",
        ru: "Виртуальные прогулки по городам мира. Полезно для изучения языков и культуры.",
        en: "Virtual walks through cities of the world. Useful for learning languages and culture."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://citywalks.live/&size=256',
    videoUrl: 'https://www.youtube.com/embed/Hu1G5s6W2wU',
    link: 'https://citywalks.live/',
    tags: ['Sayohat', 'Madaniyat', 'Dam olish']
  },
  {
    id: '16',
    name: 'RetroGames',
    description: {
        uz: "Afsonaviy video o'yinlarni brauzerda o'ynash imkonini beruvchi bepul kutubxona.",
        ru: "Бесплатная библиотека легендарных видеоигр, в которые можно играть в браузере.",
        en: "Free library of legendary video games playable in the browser."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.retrogames.cz/&size=256',
    videoUrl: 'https://www.youtube.com/embed/Kj7d6t2t1_U',
    link: 'https://www.retrogames.cz/',
    tags: ['O\'yinlar', 'Dam olish', 'Tarix']
  },
  {
    id: '17',
    name: 'Loecsen',
    description: {
        uz: "Chet tillarini mustaqil o'rganuvchilar uchun mo'ljallangan bepul platforma.",
        ru: "Бесплатная платформа для самостоятельного изучения иностранных языков.",
        en: "Free platform for self-study of foreign languages."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.loecsen.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/1_LzRkGk7h4',
    link: 'https://www.loecsen.com/',
    tags: ['Til o\'rganish', 'Ta\'lim', 'Audio']
  },
  {
    id: '18',
    name: 'TypingClub',
    description: {
        uz: "Kompyuterda tez yozishni o'rgatuvchi mukammal platforma.",
        ru: "Отличная платформа для обучения слепой печати.",
        en: "Excellent platform for learning touch typing."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://static.typingclub.com/m/corp/img/typingclub-logo.png',
    videoUrl: 'https://www.youtube.com/embed/7g93h3_U',
    link: 'https://www.typingclub.com/',
    tags: ['Ko\'nikma', 'Tez yozish', 'Ta\'lim']
  },
  {
    id: '19',
    name: 'Cymath',
    description: {
        uz: "Matematik masalalarni bosqichma-bosqich yechib beruvchi onlayn yordamchi.",
        ru: "Онлайн-помощник, решающий математические задачи с пошаговым объяснением.",
        en: "Online solver that provides step-by-step solutions to math problems."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.cymath.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/w6zL8J-LwO4',
    link: 'https://www.cymath.com/',
    tags: ['Matematika', 'Yechim', 'Aniq fanlar']
  },
  {
    id: '20',
    name: 'Aithor',
    description: {
        uz: "Talabalar uchun akademik yozuv yordamchisi. Insho va kurs ishlarida yordam beradi.",
        ru: "Помощник по академическому письму для студентов. Помогает с эссе и курсовыми.",
        en: "Academic writing assistant for students. Helps with essays and term papers."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://aithor.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://aithor.com/',
    tags: ['Yozuv', 'Akademik', 'Yordamchi']
  },
  {
    id: '21',
    name: 'PhET Simulations',
    description: {
        uz: "Fizika, kimyo va biologiya bo'yicha interaktiv simulyatsiyalar.",
        ru: "Интерактивные симуляции по физике, химии и биологии.",
        en: "Interactive simulations for physics, chemistry, and biology."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://phet.colorado.edu/images/phet-logo-trademarked.png',
    videoUrl: 'https://www.youtube.com/embed/uG5X5X5X5X',
    link: 'https://phet.colorado.edu/',
    tags: ['Fizika', 'Kimyo', 'Simulyatsiya']
  },
  {
    id: '22',
    name: 'Alison',
    description: {
        uz: "Minglab bepul onlayn kurslar va sertifikatlar platformasi.",
        ru: "Платформа с тысячами бесплатных онлайн-курсов и сертификатов.",
        en: "Platform with thousands of free online courses and certificates."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://alison.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/G5X5X5X5X5',
    link: 'https://alison.com/',
    tags: ['Kurslar', 'Sertifikat', 'Karyera']
  },
  {
    id: '23',
    name: 'Emergent Mind',
    description: {
        uz: "Eng so'nggi ilmiy maqolalar va AI yangiliklarini jamlovchi platforma.",
        ru: "Платформа, собирающая последние научные статьи и новости ИИ.",
        en: "Platform aggregating the latest research papers and AI news."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.emergentmind.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://www.emergentmind.com/',
    tags: ['AI News', 'Ilm-fan', 'Trend']
  },
  {
    id: '24',
    name: 'Mindluster',
    description: {
        uz: "Dasturlash va dizayn bo'yicha bepul video kurslar to'plami.",
        ru: "Коллекция бесплатных видеокурсов по программированию и дизайну.",
        en: "Collection of free video courses on programming and design."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.mindluster.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/M5X5X5X5X5',
    link: 'https://www.mindluster.com/',
    tags: ['Kurslar', 'Dasturlash', 'Ta\'lim']
  },
  {
    id: '25',
    name: 'Nolej',
    description: {
        uz: "O'quv materiallarini avtomatik ravishda interaktiv darslarga aylantiruvchi AI.",
        ru: "ИИ, автоматически превращающий учебные материалы в интерактивные уроки.",
        en: "AI that automatically turns study materials into interactive lessons."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nolej.io/&size=256',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://nolej.io/',
    tags: ['Ta\'lim', 'Kurslar', 'Interaktiv']
  },
  {
    id: '26',
    name: 'Kampus.ai',
    description: {
        uz: "Tashkilotlar uchun xodimlar tajribasi va o'quv platformasi.",
        ru: "Платформа обучения и опыта сотрудников для организаций.",
        en: "Employee experience and learning platform for organizations."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://kampus.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/K5X5X5X5X5',
    link: 'https://kampus.ai/',
    tags: ['Boshqaruv', 'Tahlil', 'HR']
  },
  {
    id: '27',
    name: 'QuillBot',
    description: {
        uz: "Matnni qayta yozish, grammatikani tuzatish va plagiatni tekshirish vositasi.",
        ru: "Инструмент для переписывания текста, исправления грамматики и проверки на плагиат.",
        en: "Tool for paraphrasing text, fixing grammar, and checking for plagiarism."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://quillbot.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://quillbot.com/',
    tags: ['Yozuv', 'Tarjima', 'Tahrir']
  },
  {
    id: '28',
    name: 'Yupp (Yippity)',
    description: {
        uz: "Matn asosida avtomatik testlar va savol-javoblar tuzuvchi AI.",
        ru: "ИИ, создающий автоматические тесты и викторины на основе текста.",
        en: "AI that generates automatic quizzes and Q&A based on text."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://yippity.io/&size=256',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://yippity.io/',
    tags: ['Test', 'Viktorina', 'Tezkor']
  },
  {
    id: '29',
    name: 'Krea AI',
    description: {
        uz: "Real vaqt rejimida chizilgan oddiy shakllarni professional rasmga aylantiradi.",
        ru: "Превращает простые наброски в профессиональные изображения в реальном времени.",
        en: "Turns simple sketches into professional images in real-time."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.krea.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/X_5w3b_1sZA',
    link: 'https://www.krea.ai/',
    tags: ['Dizayn', 'Art', 'Real-time']
  },
  {
    id: '30',
    name: 'Viggle',
    description: {
        uz: "Statik rasmni harakatga keltirib, video animatsiya yaratuvchi vosita.",
        ru: "Инструмент для создания видеоанимации из статичных изображений.",
        en: "Tool for creating video animation from static images."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://viggle.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/V5X5X5X5X5',
    link: 'https://viggle.ai/',
    tags: ['Video', 'Animatsiya', '3D']
  },
  {
    id: '31',
    name: 'Hedra',
    description: {
        uz: "Matn va audio asosida gapiruvchi AI personajlar yaratish platformasi.",
        ru: "Платформа для создания говорящих ИИ-персонажей на основе текста и аудио.",
        en: "Platform for creating talking AI characters based on text and audio."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.hedra.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/H5X5X5X5X5',
    link: 'https://www.hedra.com/',
    tags: ['Avatar', 'Video', 'Audio']
  },
  {
    id: '32',
    name: 'Adobe Express',
    description: {
        uz: "Dizayn bilimisiz professional grafikalar yaratish uchun onlayn vosita.",
        ru: "Онлайн-инструмент для создания профессиональной графики без навыков дизайна.",
        en: "Online tool for creating professional graphics without design skills."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.adobe.com/express/&size=256',
    videoUrl: 'https://www.youtube.com/embed/A5X5X5X5X5',
    link: 'https://www.adobe.com/express/',
    tags: ['Dizayn', 'SMM', 'Grafika']
  },
  {
    id: '33',
    name: 'Freepik',
    description: {
        uz: "Dizaynerlar uchun eng katta bepul resurslar (rasm, vektor) bazasi.",
        ru: "Крупнейшая база бесплатных ресурсов (фото, векторы) для дизайнеров.",
        en: "Largest database of free resources (photos, vectors) for designers."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.freepik.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/X_5w3b_1sZA',
    link: 'https://www.freepik.com/',
    tags: ['Rasm', 'Vektor', 'Resurs']
  },
  {
    id: '34',
    name: '123apps',
    description: {
        uz: "Video, audio va PDF tahrirlash uchun bepul onlayn vositalar to'plami.",
        ru: "Набор бесплатных онлайн-инструментов для редактирования видео, аудио и PDF.",
        en: "Set of free online tools for editing video, audio, and PDF."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://123apps.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/O5X5X5X5X5',
    link: 'https://123apps.com/',
    tags: ['Instrumentlar', 'PDF', 'Video']
  },
  {
    id: '35',
    name: 'Jeopardylabs',
    description: {
        uz: "Intellektual o'yinlar va viktorinalar yaratish platformasi.",
        ru: "Платформа для создания интеллектуальных игр и викторин.",
        en: "Platform for creating intellectual games and quizzes."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://jeopardylabs.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://jeopardylabs.com/',
    tags: ['O\'yin', 'Viktorina', 'Ta\'lim']
  },
  {
    id: '36',
    name: 'Qoder',
    description: {
        uz: "Dasturchilar uchun kod yozishni tezlashtiruvchi AI yordamchi.",
        ru: "ИИ-помощник для программистов, ускоряющий написание кода.",
        en: "AI assistant for programmers speeding up coding."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.qodo.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/8_l-2_s-d-s',
    link: 'https://www.qodo.ai/',
    tags: ['Kodlash', 'Dasturlash', 'AI']
  },
  {
    id: '37',
    name: 'Base44 (Base64.ai)',
    description: {
        uz: "Hujjatlardan ma'lumotlarni avtomatik ajratib olish vositasi.",
        ru: "Инструмент для автоматического извлечения данных из документов.",
        en: "Tool for automated data extraction from documents."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://base64.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://base64.ai/',
    tags: ['Hujjat', 'Tahlil', 'AI']
  },
  {
    id: '38',
    name: 'Network.Bepress',
    description: {
        uz: "Ochiq kirish (Open Access) repozitoriysi. Ilmiy maqolalar bazasi.",
        ru: "Репозиторий открытого доступа. База научных статей.",
        en: "Open Access repository. Database of research papers."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://network.bepress.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://network.bepress.com/',
    tags: ['Ilm-fan', 'Maqola', 'Tadqiqot']
  },
  {
    id: '39',
    name: 'Naturalwrite',
    description: {
        uz: "Matnlarni insoniylashtirish va qayta yozish vositasi.",
        ru: "Инструмент для очеловечивания и переписывания текстов.",
        en: "Tool for humanizing and rewriting texts."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://neuralwriter.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://neuralwriter.com/',
    tags: ['Yozuv', 'Parafraz', 'AI']
  },
  {
    id: '40',
    name: 'Genspark.ai',
    description: {
        uz: "Moslashtirilgan qidiruv natijalari beruvchi AI qidiruv tizimi.",
        ru: "Поисковая система ИИ, предоставляющая персонализированные результаты.",
        en: "AI search engine providing customized search results."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.genspark.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/N-y7XzC-l5M',
    link: 'https://www.genspark.ai/',
    tags: ['Qidiruv', 'G\'oya', 'AI']
  },
  {
    id: '41',
    name: 'Game AfifEdu',
    description: {
        uz: "O'quvchilar uchun ta'limiy o'yinlar to'plami.",
        ru: "Коллекция образовательных игр для учащихся.",
        en: "Collection of educational games for students."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://game.afifedu.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://game.afifedu.com/',
    tags: ['O\'yin', 'Ta\'lim', 'Interaktiv']
  },
  {
    id: '42',
    name: 'Sketchfab',
    description: {
        uz: "3D modellar va VR kontentlar platformasi.",
        ru: "Платформа для 3D-моделей и VR-контента.",
        en: "Platform for 3D models and VR content."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://sketchfab.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/X_5w3b_1sZA',
    link: 'https://sketchfab.com/',
    tags: ['3D', 'Dizayn', 'AR/VR']
  },
  {
    id: '43',
    name: 'Neal.Fun',
    description: {
        uz: "Noodatiy va qiziqarli veb-loyihalar to'plami.",
        ru: "Коллекция необычных и интересных веб-проектов.",
        en: "Collection of unusual and interesting web projects."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://neal.fun/&size=256',
    videoUrl: 'https://www.youtube.com/embed/Hu1G5s6W2wU',
    link: 'https://neal.fun/',
    tags: ['Interaktiv', 'Dam olish', 'Web']
  },
  {
    id: '44',
    name: 'Assemblr EDU',
    description: {
        uz: "Ta'lim uchun 3D va AR (To'ldirilgan Borliq) platformasi.",
        ru: "Платформа 3D и AR (Дополненной реальности) для образования.",
        en: "3D and AR (Augmented Reality) platform for education."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://assemblrworld.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://edu.assemblrworld.com/',
    tags: ['AR', '3D', 'Ta\'lim']
  },
  {
    id: '45',
    name: 'Simpop',
    description: {
        uz: "Ilmiy simulyatsiya modellari va o'yinlari.",
        ru: "Научные симуляционные модели и игры.",
        en: "Scientific simulation models and games."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://simpop.org/&size=256',
    videoUrl: 'https://www.youtube.com/embed/uG5X5X5X5X',
    link: 'https://simpop.org/',
    tags: ['Simulyatsiya', 'Ilm-fan', 'Geografiya']
  },
  {
    id: '46',
    name: 'QuadraticHQ',
    description: {
        uz: "Jadvallar va Python dasturlash tilini birlashtirgan tahlil vositasi.",
        ru: "Инструмент анализа, объединяющий таблицы и Python.",
        en: "Analysis tool combining spreadsheets and Python."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.quadratichq.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/G5X5X5X5X5',
    link: 'https://www.quadratichq.com/',
    tags: ['Data', 'Tahlil', 'Jadval']
  },
  {
    id: '47',
    name: 'Pixverse.ai',
    description: {
        uz: "Matn asosida video yaratuvchi sun'iy intellekt.",
        ru: "ИИ, создающий видео на основе текста.",
        en: "AI generating video based on text."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://pixverse.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/H5X5X5X5X5',
    link: 'https://pixverse.ai/',
    tags: ['Video', 'AI', 'Generativ']
  },
  {
    id: '48',
    name: 'Google Workspace Labs',
    description: {
        uz: "Google hujjatlari uchun AI yordamchisi.",
        ru: "ИИ-помощник для Google Документов.",
        en: "AI assistant for Google Workspace."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://workspace.google.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/S9yvW-P6yYk',
    link: 'https://workspace.google.com/solutions/ai/',
    tags: ['Ofis', 'Hujjat', 'Google']
  },
  {
    id: '49',
    name: 'Microsoft Designer',
    description: {
        uz: "Ijtimoiy tarmoqlar uchun dizaynlar yaratuvchi AI.",
        ru: "ИИ для создания дизайнов для соцсетей.",
        en: "AI for creating designs for social media."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://designer.microsoft.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/X_5w3b_1sZA',
    link: 'https://designer.microsoft.com/',
    tags: ['Dizayn', 'Grafika', 'Microsoft']
  },
  {
    id: '50',
    name: 'Media.io',
    description: {
        uz: "Onlayn media (video, audio) tahrirlash vositalari.",
        ru: "Онлайн-инструменты для редактирования медиа (видео, аудио).",
        en: "Online media (video, audio) editing tools."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.media.io/&size=256',
    videoUrl: 'https://www.youtube.com/embed/O5X5X5X5X5',
    link: 'https://www.media.io/',
    tags: ['Video', 'Audio', 'Tahrir']
  },
  {
    id: '51',
    name: 'Writesonic',
    description: {
        uz: "Marketing va bloglar uchun matn yozuvchi AI.",
        ru: "ИИ для написания текстов для маркетинга и блогов.",
        en: "AI writing tool for marketing and blogs."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://writesonic.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/V6JzXQxG2T4',
    link: 'https://writesonic.com/',
    tags: ['Yozuv', 'Kopirayting', 'AI']
  },
  {
    id: '52',
    name: 'Old Maps Online',
    description: {
        uz: "Tarixiy xaritalarni qidirish portali.",
        ru: "Портал для поиска исторических карт.",
        en: "Portal for searching historical maps."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.oldmapsonline.org/&size=256',
    videoUrl: 'https://www.youtube.com/embed/Hu1G5s6W2wU',
    link: 'https://www.oldmapsonline.org/',
    tags: ['Tarix', 'Xarita', 'Arxiv']
  },
  {
    id: '53',
    name: 'Radio Garden',
    description: {
        uz: "Dunyo radiolarini tinglash uchun interaktiv globus.",
        ru: "Интерактивный глобус для прослушивания мирового радио.",
        en: "Interactive globe for listening to world radio."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://radio.garden/&size=256',
    videoUrl: 'https://www.youtube.com/embed/Hu1G5s6W2wU',
    link: 'http://radio.garden/',
    tags: ['Radio', 'Dunyo', 'Musiqa']
  },
  {
    id: '54',
    name: 'Animagraffs',
    description: {
        uz: "Texnik qurilmalarning ishlashini tushuntiruvchi 3D animatsiyalar.",
        ru: "3D-анимации, объясняющие работу технических устройств.",
        en: "3D animations explaining how technical devices work."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://animagraffs.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/uG5X5X5X5X',
    link: 'https://animagraffs.com/',
    tags: ['3D', 'Ta\'lim', 'Mexanika']
  },
  {
    id: '55',
    name: 'Flourish',
    description: {
        uz: "Ma'lumotlarni interaktiv grafiklarga aylantirish vositasi.",
        ru: "Инструмент для превращения данных в интерактивные графики.",
        en: "Tool for turning data into interactive graphics."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://flourish.studio/&size=256',
    videoUrl: 'https://www.youtube.com/embed/Qj_D-R_X-X',
    link: 'https://flourish.studio/',
    tags: ['Data', 'Grafika', 'Vizual']
  },
  {
    id: '56',
    name: 'Cybrary',
    description: {
        uz: "Kiberxavfsizlik va IT bo'yicha bepul kurslar.",
        ru: "Бесплатные курсы по кибербезопасности и IT.",
        en: "Free courses on cybersecurity and IT."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.cybrary.it/&size=256',
    videoUrl: 'https://www.youtube.com/embed/8_l-2_s-d-s',
    link: 'https://www.cybrary.it/',
    tags: ['Kiberxavfsizlik', 'IT', 'Kurslar']
  },
  {
    id: '57',
    name: 'OverTheWire',
    description: {
        uz: "Linux va xavfsizlikni o'yin orqali o'rgatuvchi sayt.",
        ru: "Сайт для изучения Linux и безопасности через игры.",
        en: "Site for learning Linux and security through games."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://overthewire.org/&size=256',
    videoUrl: 'https://www.youtube.com/embed/8_l-2_s-d-s',
    link: 'https://overthewire.org/',
    tags: ['Xakerlik', 'O\'yin', 'Linux']
  },
  {
    id: '58',
    name: 'TryHackMe',
    description: {
        uz: "Kiberxavfsizlikni o'rganish uchun virtual laboratoriyalar.",
        ru: "Виртуальные лаборатории для изучения кибербезопасности.",
        en: "Virtual labs for learning cybersecurity."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://tryhackme.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/8_l-2_s-d-s',
    link: 'https://tryhackme.com/',
    tags: ['Kiberxavfsizlik', 'Laboratoriya', 'Amaliyot']
  },
  {
    id: '59',
    name: 'D-ID',
    description: {
        uz: "Rasmlarni gapirtiruvchi AI texnologiyasi.",
        ru: "Технология ИИ, заставляющая фотографии говорить.",
        en: "AI technology that makes photos speak."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.d-id.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/H5X5X5X5X5',
    link: 'https://www.d-id.com/',
    tags: ['Video', 'Avatar', 'AI']
  },
  {
    id: '60',
    name: 'WolframAlpha',
    description: {
        uz: "Matematik va ilmiy hisoblash tizimi.",
        ru: "Система математических и научных вычислений.",
        en: "Mathematical and scientific computing system."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.wolframalpha.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/w6zL8J-LwO4',
    link: 'https://www.wolframalpha.com/',
    tags: ['Matematika', 'Ilm-fan', 'Hisoblash']
  },
  {
    id: '61',
    name: 'Nobook',
    description: {
        uz: "Fizika va kimyo bo'yicha virtual laboratoriya.",
        ru: "Виртуальная лаборатория по физике и химии.",
        en: "Virtual laboratory for physics and chemistry."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.nobook.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/uG5X5X5X5X',
    link: 'https://www.nobook.com/',
    tags: ['Fizika', 'Kimyo', 'Laboratoriya']
  },
  {
    id: '62',
    name: 'Cool Math 4 Kids',
    description: {
        uz: "Bolalar uchun matematika o'rgatuvchi o'yinlar.",
        ru: "Обучающие математические игры для детей.",
        en: "Math learning games for kids."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.coolmath4kids.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/w6zL8J-LwO4',
    link: 'https://www.coolmath4kids.com/',
    tags: ['Matematika', 'Bolalar', 'O\'yin']
  },
  {
    id: '63',
    name: 'Creatie',
    description: {
        uz: "UI/UX dizaynlari yaratish uchun AI vosita.",
        ru: "ИИ-инструмент для создания UI/UX дизайна.",
        en: "AI tool for creating UI/UX designs."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://creatie.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/X_5w3b_1sZA',
    link: 'https://creatie.ai/',
    tags: ['Dizayn', 'UI/UX', 'AI']
  },
  {
    id: '64',
    name: 'V0.dev',
    description: {
        uz: "Matn orqali sayt interfeysi kodini yaratuvchi AI.",
        ru: "ИИ, создающий код интерфейса сайта по тексту.",
        en: "AI generating website interface code from text."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://v0.dev/&size=256',
    videoUrl: 'https://www.youtube.com/embed/8_l-2_s-d-s',
    link: 'https://v0.dev/',
    tags: ['Kodlash', 'Dizayn', 'Frontend']
  },
  {
    id: '65',
    name: 'Replit',
    description: {
        uz: "Onlayn kod yozish va ishga tushirish muhiti (IDE).",
        ru: "Онлайн среда для написания и запуска кода (IDE).",
        en: "Online coding and execution environment (IDE)."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://replit.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/8_l-2_s-d-s',
    link: 'https://replit.com/',
    tags: ['Kodlash', 'IDE', 'Dasturlash']
  },
  {
    id: '66',
    name: 'Animaker',
    description: {
        uz: "Animatsion videolar yaratish platformasi.",
        ru: "Платформа для создания анимационных видео.",
        en: "Platform for creating animated videos."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.animaker.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/V5X5X5X5X5',
    link: 'https://www.animaker.com/',
    tags: ['Animatsiya', 'Video', 'Dizayn']
  },
  {
    id: '67',
    name: 'Zapier',
    description: {
        uz: "Ish jarayonlarini avtomatlashtirish vositasi.",
        ru: "Инструмент автоматизации рабочих процессов.",
        en: "Workflow automation tool."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://zapier.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/G5X5X5X5X5',
    link: 'https://zapier.com/',
    tags: ['Avtomatlashtirish', 'Productivity', 'Biznes']
  },
  {
    id: '68',
    name: 'Descript',
    description: {
        uz: "Matnni o'zgartirish orqali videoni montaj qilish dasturi.",
        ru: "Программа для монтажа видео путем редактирования текста.",
        en: "Video editing software by editing text."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.descript.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/O5X5X5X5X5',
    link: 'https://www.descript.com/',
    tags: ['Video', 'Audio', 'Tahrir']
  },
  {
    id: '69',
    name: '10Web',
    description: {
        uz: "AI yordamida WordPress saytlarini yaratish.",
        ru: "Создание сайтов WordPress с помощью ИИ.",
        en: "Creating WordPress sites using AI."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://10web.io/&size=256',
    videoUrl: 'https://www.youtube.com/embed/8_l-2_s-d-s',
    link: 'https://10web.io/',
    tags: ['Veb-sayt', 'Wordpress', 'AI']
  },
  {
    id: '70',
    name: 'Looka',
    description: {
        uz: "AI yordamida logotip va brending yaratish.",
        ru: "Создание логотипов и брендинга с помощью ИИ.",
        en: "Creating logos and branding using AI."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://looka.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/X_5w3b_1sZA',
    link: 'https://looka.com/',
    tags: ['Dizayn', 'Logo', 'Brending']
  },
  {
    id: '71',
    name: 'Blooket',
    description: {
        uz: "Darslarni o'yin shaklida o'tkazish platformasi.",
        ru: "Платформа для проведения уроков в игровой форме.",
        en: "Platform for conducting lessons in game form."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.blooket.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://www.blooket.com/',
    tags: ['O\'yin', 'Ta\'lim', 'Viktorina']
  },
  {
    id: '72',
    name: 'Polypad',
    description: {
        uz: "Virtual matematika doskasi.",
        ru: "Виртуальная математическая доска.",
        en: "Virtual math board."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://mathigon.org/&size=256',
    videoUrl: 'https://www.youtube.com/embed/w6zL8J-LwO4',
    link: 'https://mathigon.org/polypad',
    tags: ['Matematika', 'Ta\'lim', 'Geometriya']
  },
  {
    id: '73',
    name: 'MathsBot',
    description: {
        uz: "Matematika o'qituvchilari uchun resurslar.",
        ru: "Ресурсы для учителей математики.",
        en: "Resources for math teachers."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://mathsbot.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/w6zL8J-LwO4',
    link: 'https://mathsbot.com/',
    tags: ['Matematika', 'O\'qituvchi', 'Resurs']
  },
  {
    id: '74',
    name: 'Rewordify',
    description: {
        uz: "Inglizcha matnlarni soddalashtiruvchi sayt.",
        ru: "Сайт, упрощающий английские тексты.",
        en: "Site for simplifying English texts."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://rewordify.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/1_LzRkGk7h4',
    link: 'https://rewordify.com/',
    tags: ['Til', 'O\'qish', 'Ta\'lim']
  },
  {
    id: '75',
    name: 'ITeacher.kz',
    description: {
        uz: "Pedagoglar uchun ta'lim portali.",
        ru: "Образовательный портал для педагогов.",
        en: "Educational portal for teachers."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://iteacher.kz/&size=256',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://iteacher.kz/',
    tags: ['Ta\'lim', 'Portal', 'O\'qituvchi']
  },
  {
    id: '76',
    name: 'ZeroGPT',
    description: {
        uz: "AI tomonidan yozilgan matnni aniqlovchi detektor.",
        ru: "Детектор для определения текста, написанного ИИ.",
        en: "Detector for identifying text written by AI."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.zerogpt.net/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://www.zerogpt.net/',
    tags: ['Detektor', 'Tekshiruv', 'AI']
  },
  {
    id: '77',
    name: 'NotebookLM',
    description: {
        uz: "Hujjatlar asosida ishlovchi shaxsiy AI yordamchi.",
        ru: "Персональный ИИ-помощник, работающий на основе документов.",
        en: "Personal AI assistant working based on documents."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://notebooklm.google.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/S9yvW-P6yYk',
    link: 'https://notebooklm.google.com/',
    tags: ['Tadqiqot', 'Yozuv', 'Google']
  },
  {
    id: '78',
    name: 'Scratch',
    description: {
        uz: "Bolalar uchun dasturlashni o'rganish platformasi.",
        ru: "Платформа обучения программированию для детей.",
        en: "Programming learning platform for kids."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Scratch_Logo_2023.png/512px-Scratch_Logo_2023.png',
    videoUrl: 'https://www.youtube.com/embed/8_l-2_s-d-s',
    link: 'https://scratch.mit.edu/',
    tags: ['Kodlash', 'Bolalar', 'Mantiq']
  },
  {
    id: '79',
    name: 'Pome.ai',
    description: {
        uz: "Taqdimotlar yaratish uchun AI vositasi.",
        ru: "ИИ-инструмент для создания презентаций.",
        en: "AI tool for creating presentations."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.pome.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/Z8g-J-k-l-m',
    link: 'https://www.pome.ai/',
    tags: ['Taqdimot', 'PPT', 'AI']
  },
  {
    id: '80',
    name: 'Google Veo',
    description: {
        uz: "Google tomonidan yaratilgan video generatsiya modeli.",
        ru: "Модель генерации видео от Google.",
        en: "Video generation model by Google."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://deepmind.google/&size=256',
    videoUrl: 'https://www.youtube.com/embed/H5X5X5X5X5',
    link: 'https://deepmind.google/technologies/veo/',
    tags: ['Video', 'AI', 'Google']
  },
  {
    id: '81',
    name: 'Google Lumiere',
    description: {
        uz: "Matnni videoga aylantiruvchi realistik model.",
        ru: "Реалистичная модель для превращения текста в видео.",
        en: "Realistic model for turning text into video."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://lumiere-video.github.io/&size=256',
    videoUrl: 'https://www.youtube.com/embed/H5X5X5X5X5',
    link: 'https://lumiere-video.github.io/',
    tags: ['Video', 'Research', 'AI']
  },
  {
    id: '82',
    name: 'Gemini Flash',
    description: {
        uz: "Tezkor ishlash uchun moslashtirilgan engil AI model.",
        ru: "Легкая модель ИИ, оптимизированная для быстрой работы.",
        en: "Lightweight AI model optimized for speed."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/512px-Google_Gemini_logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/S9yvW-P6yYk',
    link: 'https://deepmind.google/technologies/gemini/flash/',
    tags: ['Tezkor', 'Model', 'Google']
  },
  {
    id: '83',
    name: 'Google Imagen 3',
    description: {
        uz: "Google'ning eng yuqori sifatli rasm chizish modeli.",
        ru: "Самая качественная модель рисования от Google.",
        en: "Google's highest quality image generation model."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://deepmind.google/&size=256',
    videoUrl: 'https://www.youtube.com/embed/X_5w3b_1sZA',
    link: 'https://deepmind.google/technologies/imagen-3/',
    tags: ['Rasm', 'AI', 'Google']
  },
  {
    id: '84',
    name: 'Samsung Food',
    description: {
        uz: "Sun'iy intellektga asoslangan oshpazlik yordamchisi.",
        ru: "Кулинарный помощник на основе искусственного интеллекта.",
        en: "AI-powered cooking assistant."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://samsungfood.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/Hu1G5s6W2wU',
    link: 'https://samsungfood.com/',
    tags: ['Oshpazlik', 'Retsept', 'AI']
  },
  {
    id: '85',
    name: 'Google Coral',
    description: {
        uz: "Mahalliy AI (Edge AI) uchun platforma.",
        ru: "Платформа для локального ИИ (Edge AI).",
        en: "Platform for Edge AI."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://coral.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/8_l-2_s-d-s',
    link: 'https://coral.ai/',
    tags: ['Hardware', 'IoT', 'AI']
  },
  {
    id: '86',
    name: 'Playground AI',
    description: {
        uz: "Rasm yaratish va tahrirlash uchun kuchli platforma.",
        ru: "Мощная платформа для создания и редактирования изображений.",
        en: "Powerful platform for creating and editing images."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://playground.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/X_5w3b_1sZA',
    link: 'https://playground.com/',
    tags: ['Rasm', 'Dizayn', 'Tahrir']
  },
  {
    id: '87',
    name: 'BioDigital Human',
    description: {
        uz: "Inson anatomiyasining interaktiv 3D atlasi.",
        ru: "Интерактивный 3D-атлас анатомии человека.",
        en: "Interactive 3D atlas of human anatomy."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://human.biodigital.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/uG5X5X5X5X',
    link: 'https://human.biodigital.com/',
    tags: ['Tibbiyot', 'Anatomiya', '3D']
  },
  {
    id: '88',
    name: 'Manus AI',
    description: {
        uz: "Avtonom ishlaydigan sun'iy intellekt agenti.",
        ru: "Автономный агент искусственного интеллекта.",
        en: "Autonomous artificial intelligence agent."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://manus.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/G5X5X5X5X5',
    link: 'https://manus.ai/',
    tags: ['Agent', 'Avtomatlashtirish', 'AI']
  },
  {
    id: '89',
    name: 'Stitch (Fabricius)',
    description: {
        uz: "Qadimgi Misr iyerogliflarini o'rganish loyihasi.",
        ru: "Проект по изучению древнеегипетских иероглифов.",
        en: "Project for learning Ancient Egyptian hieroglyphs."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://stitch.withgoogle.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/Hu1G5s6W2wU',
    link: 'https://stitch.withgoogle.com/?pli=1',
    tags: ['Tarix', 'Madaniyat', 'Google']
  },
  {
    id: '90',
    name: 'Wayground',
    description: {
        uz: "AI vositalar va yangiliklar markazi.",
        ru: "Центр инструментов и новостей ИИ.",
        en: "Hub for AI tools and news."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://wayground.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://wayground.com/',
    tags: ['Platforma', 'AI', 'Resurs']
  },
  {
    id: '91',
    name: 'Emergent',
    description: {
        uz: "Ish faoliyatini tartibga soluvchi aqlli yordamchi.",
        ru: "Умный помощник для организации рабочего процесса.",
        en: "Smart assistant for organizing workflow."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://app.emergent.sh/&size=256',
    videoUrl: 'https://www.youtube.com/embed/G5X5X5X5X5',
    link: 'https://app.emergent.sh/',
    tags: ['Productivity', 'Reja', 'AI']
  },
  {
    id: '92',
    name: 'Duolingo Max',
    description: {
        uz: "GPT-4 asosidagi til o'rganish tajribasi.",
        ru: "Опыт изучения языка на базе GPT-4.",
        en: "Language learning experience based on GPT-4."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Duolingo_logo_2019.svg/512px-Duolingo_logo_2019.svg.png',
    videoUrl: 'https://www.youtube.com/embed/1_LzRkGk7h4',
    link: 'https://www.duolingo.com/',
    tags: ['Til', 'GPT-4', 'Ta\'lim']
  },
  {
    id: '93',
    name: 'Khanmigo',
    description: {
        uz: "Xan Akademiyasining shaxsiy AI o'qituvchisi.",
        ru: "Персональный ИИ-репетитор от Академии Хана.",
        en: "Khan Academy's personal AI tutor."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.khanacademy.org/&size=256',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://www.khanacademy.org/khan-labs',
    tags: ['Tutor', 'Matematika', 'Ta\'lim']
  },
  {
    id: '94',
    name: 'Chegg Study Pack',
    description: {
        uz: "Uy vazifalarini bajarishda yordam beruvchi platforma.",
        ru: "Платформа помощи в выполнении домашних заданий.",
        en: "Homework assistance platform."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.chegg.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://www.chegg.com/',
    tags: ['Yechim', 'Ekspert', 'Talaba']
  },
  {
    id: '95',
    name: 'Course Hero',
    description: {
        uz: "O'quv resurslari kutubxonasi.",
        ru: "Библиотека учебных ресурсов.",
        en: "Library of study resources."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.coursehero.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://www.coursehero.com/',
    tags: ['Resurs', 'Kutubxona', 'Talaba']
  },
  {
    id: '96',
    name: 'Speechify Premium',
    description: {
        uz: "Matnni ovozga aylantiruvchi (Text-to-Speech) dastur.",
        ru: "Программа преобразования текста в речь.",
        en: "Text-to-Speech application."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://speechify.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/O5X5X5X5X5',
    link: 'https://speechify.com/',
    tags: ['Audio', 'TTS', 'O\'qish']
  },
  {
    id: '97',
    name: 'Grammarly Premium',
    description: {
        uz: "Ingliz tili yozuvini tekshiruvchi mukammal vosita.",
        ru: "Отличный инструмент для проверки английского письма.",
        en: "Excellent tool for checking English writing."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.grammarly.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/1_LzRkGk7h4',
    link: 'https://www.grammarly.com/',
    tags: ['Yozuv', 'Grammatika', 'Ingliz tili']
  },
  {
    id: '98',
    name: 'Quillbot Premium',
    description: {
        uz: "Cheklovsiz parafrazlash va plagiatni tekshirish.",
        ru: "Неограниченное перефразирование и проверка на плагиат.",
        en: "Unlimited paraphrasing and plagiarism checking."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://quillbot.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://quillbot.com/',
    tags: ['Yozuv', 'Plagiat', 'Parafraz']
  },
  {
    id: '99',
    name: 'Jenni.ai',
    description: {
        uz: "Akademik maqolalar yozish uchun AI yordamchi.",
        ru: "ИИ-помощник для написания академических статей.",
        en: "AI assistant for writing academic papers."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://jenni.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://jenni.ai/',
    tags: ['Yozuv', 'Akademik', 'AI']
  },
  {
    id: '100',
    name: 'Elicit',
    description: {
        uz: "Ilmiy tadqiqotlar tahlilchisi.",
        ru: "Аналитик научных исследований.",
        en: "Scientific research analyst."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://elicit.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://elicit.com/',
    tags: ['Tadqiqot', 'Tahlil', 'Ilm-fan']
  },
  {
    id: '101',
    name: 'Consensus',
    description: {
        uz: "Ilmiy tasdiqlangan javoblarni qidirish tizimi.",
        ru: "Поисковая система научно подтвержденных ответов.",
        en: "Search engine for scientifically proven answers."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://consensus.app/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://consensus.app/',
    tags: ['Qidiruv', 'Fan', 'Isbot']
  },
  {
    id: '102',
    name: 'SciSpace',
    description: {
        uz: "Ilmiy maqolalarni tushuntirib beruvchi AI.",
        ru: "ИИ, объясняющий научные статьи.",
        en: "AI that explains scientific papers."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://typeset.io/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://typeset.io/',
    tags: ['PDF', 'Tahlil', 'Tadqiqot']
  },
  {
    id: '103',
    name: 'Genei Pro',
    description: {
        uz: "Tadqiqot va yozishni tezlashtiruvchi vosita.",
        ru: "Инструмент для ускорения исследований и письма.",
        en: "Tool for speeding up research and writing."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.genei.io/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://www.genei.io/',
    tags: ['Xulosa', 'Samaradorlik', 'AI']
  },
  {
    id: '104',
    name: 'Paperguide',
    description: {
        uz: "Tadqiqot materiallarini boshqarish platformasi.",
        ru: "Платформа управления исследовательскими материалами.",
        en: "Research material management platform."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://paperguide.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://paperguide.ai/',
    tags: ['Tadqiqot', 'Menejment', 'AI']
  },
  {
    id: '105',
    name: 'Caktus AI',
    description: {
        uz: "Talabalar uchun maxsus AI yordamchi.",
        ru: "Специальный ИИ-помощник для студентов.",
        en: "Special AI assistant for students."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.caktus.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://www.caktus.ai/',
    tags: ['Talaba', 'Yozuv', 'Kodlash']
  },
  {
    id: '106',
    name: 'WolframAlpha Pro',
    description: {
        uz: "Murakkab masalalarning bosqichma-bosqich yechimi.",
        ru: "Пошаговое решение сложных задач.",
        en: "Step-by-step solution of complex problems."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.wolframalpha.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/w6zL8J-LwO4',
    link: 'https://www.wolframalpha.com/pro',
    tags: ['Matematika', 'Fan', 'Yechim']
  },
  {
    id: '107',
    name: 'MagicSchool AI',
    description: {
        uz: "O'qituvchilar uchun dars rejalari tuzuvchi platforma.",
        ru: "Платформа для создания планов уроков для учителей.",
        en: "Platform for creating lesson plans for teachers."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.magicschool.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://www.magicschool.ai/',
    tags: ['O\'qituvchi', 'Reja', 'AI']
  },
  {
    id: '108',
    name: 'Eduaide.Ai',
    description: {
        uz: "O'qituvchilar uchun resurslar generatory.",
        ru: "Генератор ресурсов для учителей.",
        en: "Resource generator for teachers."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.eduaide.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://www.eduaide.ai/',
    tags: ['Resurs', 'O\'qituvchi', 'Generativ']
  },
  {
    id: '109',
    name: 'Diffit AI',
    description: {
        uz: "O'quv materiallarini moslashtirib beruvchi vosita.",
        ru: "Инструмент для адаптации учебных материалов.",
        en: "Tool for adapting learning materials."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://web.diffit.me/&size=256',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://web.diffit.me/',
    tags: ['Moslashuv', 'O\'qituvchi', 'Matn']
  },
  {
    id: '110',
    name: 'Brisk Teaching',
    description: {
        uz: "Ishlarni baholash va feedback beruvchi kengaytma.",
        ru: "Расширение для оценки работ и обратной связи.",
        en: "Extension for grading and feedback."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.briskteaching.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://www.briskteaching.com/',
    tags: ['Baholash', 'Feedback', 'Chrome']
  },
  {
    id: '111',
    name: 'Curipod',
    description: {
        uz: "Interaktiv dars slaydlarini yaratish platformasi.",
        ru: "Платформа для создания интерактивных слайдов уроков.",
        en: "Platform for creating interactive lesson slides."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://curipod.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://curipod.com/',
    tags: ['Interaktiv', 'Slayd', 'O\'yin']
  },
  {
    id: '112',
    name: 'Magic Form AI',
    description: {
        uz: "Google Forms uchun avtomatik test tuzuvchi.",
        ru: "Автоматический создатель тестов для Google Forms.",
        en: "Automatic quiz creator for Google Forms."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.magicform.app/&size=256',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://www.magicform.app/',
    tags: ['Google Forms', 'Test', 'Tezkor']
  },
  {
    id: '113',
    name: 'Formative AI',
    description: {
        uz: "Real vaqtda bilimni baholash platformasi.",
        ru: "Платформа для оценки знаний в реальном времени.",
        en: "Real-time knowledge assessment platform."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.formative.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://www.formative.com/',
    tags: ['Baholash', 'Jonli', 'Ta\'lim']
  },
  {
    id: '114',
    name: 'Gradescope',
    description: {
        uz: "Baholashni avtomatlashtiruvchi vosita.",
        ru: "Инструмент автоматизации оценивания.",
        en: "Grading automation tool."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.gradescope.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://www.gradescope.com/',
    tags: ['Baholash', 'Imtihon', 'Avtomatika']
  },
  {
    id: '115',
    name: 'Coursera Business',
    description: {
        uz: "Professional rivojlanish platformasi.",
        ru: "Платформа профессионального развития.",
        en: "Professional development platform."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/512px-Coursera-Logo_600x600.svg.png',
    videoUrl: 'https://www.youtube.com/embed/G5X5X5X5X5',
    link: 'https://www.coursera.org/business',
    tags: ['Sertifikat', 'Biznes', 'Malaka']
  },
  {
    id: '116',
    name: 'Synthesia',
    description: {
        uz: "Matnni professional videoga aylantirish.",
        ru: "Превращение текста в профессиональное видео.",
        en: "Turning text into professional video."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.synthesia.io/&size=256',
    videoUrl: 'https://www.youtube.com/embed/H5X5X5X5X5',
    link: 'https://www.synthesia.io/',
    tags: ['Video', 'Avatar', 'Multilingual']
  },
  {
    id: '117',
    name: 'Colossyan',
    description: {
        uz: "Korporativ ta'lim videolari yaratish.",
        ru: "Создание корпоративных обучающих видео.",
        en: "Creating corporate training videos."
    },
    category: ToolCategory.PAID,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.colossyan.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/H5X5X5X5X5',
    link: 'https://www.colossyan.com/',
    tags: ['Video', 'Trening', 'AI']
  },
  {
    id: '118',
    name: 'Scite.ai',
    description: {
        uz: "Ilmiy manbalarning ishonchliligini tekshirish.",
        ru: "Проверка достоверности научных источников.",
        en: "Checking the reliability of scientific sources."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://scite.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://scite.ai/',
    tags: ['Iqtibos', 'Tekshiruv', 'Ilm-fan']
  },
  {
    id: '119',
    name: 'Connected Papers',
    description: {
        uz: "Ilmiy maqolalar o'rtasidagi aloqalar grafigi.",
        ru: "График связей между научными статьями.",
        en: "Graph of connections between scientific papers."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.connectedpapers.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://www.connectedpapers.com/',
    tags: ['Vizual', 'Grafik', 'Tadqiqot']
  },
  {
    id: '120',
    name: 'Litmaps',
    description: {
        uz: "Adabiyotlar sharhini tayyorlash uchun xarita.",
        ru: "Карта для подготовки обзора литературы.",
        en: "Map for preparing literature review."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.litmaps.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://www.litmaps.com/',
    tags: ['Xarita', 'Adabiyot', 'Tadqiqot']
  },
  {
    id: '121',
    name: 'Google AI Studio',
    description: {
        uz: "Gemini modellarini sinash uchun vosita.",
        ru: "Инструмент для тестирования моделей Gemini.",
        en: "Tool for testing Gemini models."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/512px-Google_Gemini_logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/S9yvW-P6yYk',
    link: 'https://aistudio.google.com/',
    tags: ['Dasturlash', 'AI', 'Google']
  },
  {
    id: '122',
    name: 'Mendeley',
    description: {
        uz: "Akademik maqolalar menejeri.",
        ru: "Менеджер академических статей.",
        en: "Academic article manager."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Mendeley_Logo_Vertical.png/480px-Mendeley_Logo_Vertical.png',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://www.mendeley.com/',
    tags: ['Tadqiqot', 'Menejment', 'Reference']
  },
  {
    id: '123',
    name: 'Open Knowledge',
    description: {
        uz: "Ilmiy mavzular bo'yicha vizual xaritalar.",
        ru: "Визуальные карты по научным темам.",
        en: "Visual maps on scientific topics."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://openknowledgemaps.org/img/logos/okmaps-logo.png',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://openknowledgemaps.org/',
    tags: ['Qidiruv', 'Vizual', 'Ilm-fan']
  },
  {
    id: '124',
    name: 'Duolingo',
    description: {
        uz: "Til o'rganish uchun bepul dastur.",
        ru: "Бесплатное приложение для изучения языков.",
        en: "Free app for learning languages."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Duolingo_logo_2019.svg/512px-Duolingo_logo_2019.svg.png',
    videoUrl: 'https://www.youtube.com/embed/1_LzRkGk7h4',
    link: 'https://www.duolingo.com/',
    tags: ['Til', 'O\'yin', 'Ta\'lim']
  },
  {
    id: '125',
    name: 'Photomath',
    description: {
        uz: "Matematik misollarni rasmga olib yechish.",
        ru: "Решение математических примеров по фото.",
        en: "Solving math problems by taking a photo."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Photomath_logo.svg/512px-Photomath_logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/w6zL8J-LwO4',
    link: 'https://photomath.com/',
    tags: ['Matematika', 'Yechim', 'Mobil']
  },
  {
    id: '126',
    name: 'Microsoft Math',
    description: {
        uz: "Matematik masalalarni yechish yordamchisi.",
        ru: "Помощник в решении математических задач.",
        en: "Assistant in solving math problems."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wEaC?ver=f7b4',
    videoUrl: 'https://www.youtube.com/embed/w6zL8J-LwO4',
    link: 'https://math.microsoft.com/',
    tags: ['Matematika', 'Microsoft', 'Yechim']
  },
  {
    id: '127',
    name: 'Desmos',
    description: {
        uz: "Onlayn grafik kalkulyator.",
        ru: "Онлайн графический калькулятор.",
        en: "Online graphing calculator."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Desmos_logo.svg/512px-Desmos_logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/w6zL8J-LwO4',
    link: 'https://www.desmos.com/',
    tags: ['Matematika', 'Grafik', 'Kalkulyator']
  },
  {
    id: '128',
    name: 'Coursera (Audit)',
    description: {
        uz: "Bepul universitet kurslari.",
        ru: "Бесплатные университетские курсы.",
        en: "Free university courses."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/512px-Coursera-Logo_600x600.svg.png',
    videoUrl: 'https://www.youtube.com/embed/G5X5X5X5X5',
    link: 'https://www.coursera.org/',
    tags: ['Kurslar', 'Universitet', 'Ta\'lim']
  },
  {
    id: '129',
    name: 'Canva',
    description: {
        uz: "Dizayn yaratish platformasi.",
        ru: "Платформа для создания дизайна.",
        en: "Design creation platform."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/512px-Canva_icon_2021.svg.png',
    videoUrl: 'https://www.youtube.com/embed/X_5w3b_1sZA',
    link: 'https://www.canva.com/',
    tags: ['Dizayn', 'Grafika', 'SMM']
  },
  {
    id: '130',
    name: 'Pixlr',
    description: {
        uz: "Onlayn rasm tahrirlash dasturi.",
        ru: "Онлайн фоторедактор.",
        en: "Online photo editor."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Pixlr_logo.svg/512px-Pixlr_logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/X_5w3b_1sZA',
    link: 'https://pixlr.com/',
    tags: ['Rasm', 'Tahrir', 'Dizayn']
  },
  {
    id: '131',
    name: 'Photopea',
    description: {
        uz: "Fotoshopga o'xshash onlayn muharrir.",
        ru: "Онлайн-редактор, похожий на Photoshop.",
        en: "Online editor similar to Photoshop."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Photopea_logo.svg/512px-Photopea_logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/X_5w3b_1sZA',
    link: 'https://www.photopea.com/',
    tags: ['Rasm', 'PSD', 'Editor']
  },
  {
    id: '132',
    name: 'Clipchamp',
    description: {
        uz: "Video montaj qilish dasturi.",
        ru: "Программа для видеомонтажа.",
        en: "Video editing software."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Clipchamp_logo.svg/512px-Clipchamp_logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/O5X5X5X5X5',
    link: 'https://clipchamp.com/',
    tags: ['Video', 'Montaj', 'Microsoft']
  },
  {
    id: '133',
    name: 'Padlet',
    description: {
        uz: "G'oyalar uchun virtual doska.",
        ru: "Виртуальная доска для идей.",
        en: "Virtual board for ideas."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Padlet_logo.svg/512px-Padlet_logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://padlet.com/',
    tags: ['Doska', 'Hamkorlik', 'Ta\'lim']
  },
  {
    id: '134',
    name: 'Miro',
    description: {
        uz: "Rejalashtirish uchun onlayn doska.",
        ru: "Онлайн-доска для планирования.",
        en: "Online board for planning."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Miro_logo.svg/512px-Miro_logo.svg.png',
    videoUrl: 'https://www.youtube.com/embed/nHCt77gwE08',
    link: 'https://miro.com/',
    tags: ['Doska', 'Reja', 'Biznes']
  },
  {
    id: '135',
    name: 'SkyWork',
    description: {
        uz: "Ochiq kodli LLM modeli.",
        ru: "Модель LLM с открытым исходным кодом.",
        en: "Open source LLM model."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://skywork.kunlun.com/&size=256',
    videoUrl: 'https://www.youtube.com/embed/S9yvW-P6yYk',
    link: 'https://skywork.kunlun.com/',
    tags: ['LLM', 'Model', 'Ochiq Kod']
  },
  {
    id: '136',
    name: 'Deepsite v2',
    description: {
        uz: "AI yordamida veb-sayt dizayni.",
        ru: "Веб-дизайн с помощью ИИ.",
        en: "Website design using AI."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://deepsite.io/&size=256',
    videoUrl: 'https://www.youtube.com/embed/8_l-2_s-d-s',
    link: 'https://deepsite.io/', 
    tags: ['Veb-sayt', 'Dizayn', 'AI']
  },
  {
    id: '137',
    name: 'Design Arena',
    description: {
        uz: "Dizayn variantlarini solishtirish.",
        ru: "Сравнение вариантов дизайна.",
        en: "Comparing design variants."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://designarena.io/&size=256',
    videoUrl: 'https://www.youtube.com/embed/X_5w3b_1sZA',
    link: 'https://designarena.io/', 
    tags: ['Dizayn', 'UI/UX', 'Solishtirish']
  },
  {
    id: '138',
    name: 'Aura.build',
    description: {
        uz: "AI veb-sayt konstruktori.",
        ru: "Конструктор сайтов на ИИ.",
        en: "AI website builder."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://aura.build/&size=256',
    videoUrl: 'https://www.youtube.com/embed/8_l-2_s-d-s',
    link: 'https://aura.build/',
    tags: ['Veb-sayt', 'No-code', 'AI']
  },
  {
    id: '139',
    name: 'Runable',
    description: {
        uz: "Onlayn kodlash muhiti (Sandbox).",
        ru: "Онлайн среда кодирования (Песочница).",
        en: "Online coding environment (Sandbox)."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://runable.dev/&size=256',
    videoUrl: 'https://www.youtube.com/embed/8_l-2_s-d-s',
    link: 'https://runable.com/',
    tags: ['Kodlash', 'Sandbox', 'Dev']
  },
  {
    id: '140',
    name: 'SlideSpeak',
    description: {
        uz: "Fayllar asosida taqdimotlar tayyorlash.",
        ru: "Создание презентаций на основе файлов.",
        en: "Creating presentations based on files."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://slidespeak.co/&size=256',
    videoUrl: 'https://www.youtube.com/embed/Z8g-J-k-l-m',
    link: 'https://slidespeak.co/',
    tags: ['Taqdimot', 'PPT', 'Chat']
  },
  {
    id: '141',
    name: 'School Goat',
    description: {
        uz: "Talabalar uchun uy vazifa yordamchisi.",
        ru: "Помощник по домашним заданиям для студентов.",
        en: "Homework assistant for students."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://schoolgoat.ai/&size=256',
    videoUrl: 'https://www.youtube.com/embed/r_N5q4q6-mE',
    link: 'https://schoolgoat.ai/', 
    tags: ['Ta\'lim', 'Uy vazifa', 'Yordamchi']
  },
  {
    id: '142',
    name: 'Google Antigravity',
    description: {
        uz: "Fizika qonunlarini namoyish etuvchi loyiha.",
        ru: "Проект, демонстрирующий законы физики.",
        en: "Project demonstrating the laws of physics."
    },
    category: ToolCategory.FREE,
    imageUrl: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://elgoog.im/gravity/&size=256',
    videoUrl: 'https://www.youtube.com/embed/b-3_s-4_d',
    link: 'https://antigravity.google/',
    tags: ['Fizika', 'Interaktiv', 'Google']
  }
];