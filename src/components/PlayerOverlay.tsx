import React from 'react';
import ReactPlayer from 'react-player';
import { Camera } from '../types';
import { X, Maximize2 } from 'lucide-react';

interface Props {
  camera: Camera | null;
  onClose: () => void;
}

export const PlayerOverlay: React.FC<Props> = ({ camera, onClose }) => {
  if (!camera) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-white">{camera.title}</h2>
            <p className="text-sm text-slate-400">{camera.location}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="relative aspect-video bg-black">
          <ReactPlayer
            url={camera.streamUrl}
            width="100%"
            height="100%"
            playing
            controls
            config={{
              youtube: {
                playerVars: { showinfo: 1, autoplay: 1 }
              }
            }}
          />
        </div>
        
        <div className="p-4 bg-slate-900 flex justify-between items-center">
           <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-red-500 uppercase">Live Feed</span>
           </div>
           <button className="text-slate-400 hover:text-white flex items-center gap-2 text-sm">
             <Maximize2 className="w-4 h-4" />
             <span>Full Theater Mode</span>
           </button>
        </div>
      </div>
    </div>
  );
};