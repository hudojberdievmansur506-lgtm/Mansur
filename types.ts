export enum ToolCategory {
  FREE = 'TEKIN',
  PAID = 'PULLIK'
}

export interface AiTool {
  id: string;
  name: string;
  description: string;
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