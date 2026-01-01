import React from 'react';
import { Video, Map as MapIcon } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center px-6 justify-between shadow-lg z-20 relative">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-600 rounded-lg">
          <Video className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">LA Live Cams</h1>
          <p className="text-xs text-slate-400">Real-time City Views</p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-2 text-sm text-slate-400">
        <MapIcon className="w-4 h-4" />
        <span>Interactive Map Active</span>
      </div>
    </header>
  );
};