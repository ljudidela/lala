import React from 'react';
import { Camera } from '../types';
import { Play, MapPin } from 'lucide-react';
import { clsx } from 'clsx';

interface Props {
  camera: Camera;
  isActive: boolean;
  onClick: () => void;
}

export const CameraCard: React.FC<Props> = ({ camera, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={clsx(
        "group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 border",
        isActive 
          ? "border-blue-500 ring-2 ring-blue-500/20 bg-slate-800"
          : "border-slate-800 bg-slate-900 hover:border-slate-600"
      )}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={camera.thumbnail} 
          alt={camera.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <div className={clsx(
            "w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300",
            isActive ? "scale-100 opacity-100" : "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100"
          )}>
            <Play className="w-6 h-6 text-white fill-white" />
          </div>
        </div>
        {isActive && (
          <div className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded flex items-center gap-1 animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            LIVE
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-white truncate">{camera.title}</h3>
        <div className="flex items-center gap-1 mt-1 text-slate-400 text-sm">
          <MapPin className="w-3 h-3" />
          <span>{camera.location}</span>
        </div>
      </div>
    </div>
  );
};