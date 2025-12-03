import React from 'react';
import { AiTool, ToolCategory } from '../types';
import { PlayCircle, Lock, Unlock } from 'lucide-react';

interface ToolCardProps {
  tool: AiTool;
  onClick: (tool: AiTool) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick }) => {
  return (
    <div 
      onClick={() => onClick(tool)}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer border border-slate-100 group flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden bg-white p-6 flex items-center justify-center border-b border-slate-50">
        <img 
          src={tool.imageUrl} 
          alt={tool.name} 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm shadow-sm flex items-center gap-1 border border-slate-100">
          {tool.category === ToolCategory.FREE ? (
            <><Unlock size={12} className="text-green-600" /> <span className="text-green-700">BEPUL</span></>
          ) : (
            <><Lock size={12} className="text-amber-600" /> <span className="text-amber-700">PULLIK</span></>
          )}
        </div>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <PlayCircle size={48} className="text-blue-600 drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100" />
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{tool.name}</h3>
        <p className="text-slate-600 text-sm line-clamp-2 mb-4 h-10">{tool.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tool.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};