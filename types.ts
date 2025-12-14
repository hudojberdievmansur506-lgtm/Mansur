export enum ToolCategory {
  FREE = 'TEKIN',
  PAID = 'PULLIK'
}

export type Language = 'uz' | 'ru' | 'en';

export interface LocalizedText {
  uz: string;
  ru: string;
  en: string;
}

export interface AiTool {
  id: string;
  name: string;
  description: LocalizedText;
  fullDescription?: LocalizedText; // Extended description for the detail view
  category: ToolCategory;
  imageUrl: string;
  videoUrl?: string; // URL for the tutorial
  link: string; // Official website link
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}