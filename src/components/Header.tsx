import { Video, Map, List } from 'lucide-react';
import { cn } from '../lib/utils';

interface HeaderProps {
  viewMode: 'list' | 'map';
  setViewMode: (mode: 'list' | 'map') => void;
}

export function Header({ viewMode, setViewMode }: HeaderProps) {
  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50 px-4 md:px-6 flex items-center justify-between">
      <div className="flex items-center gap-2 text-primary">
        <Video className="w-6 h-6" />
        <h1 className="text-xl font-bold tracking-tight text-foreground">LA<span className="text-primary">Live</span></h1>
      </div>

      <div className="flex items-center gap-2 bg-secondary/50 p-1 rounded-lg">
        <button
          onClick={() => setViewMode('list')}
          className={cn(
            "p-2 rounded-md transition-all duration-200 flex items-center gap-2 text-sm font-medium",
            viewMode === 'list' 
              ? "bg-background text-foreground shadow-sm" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <List className="w-4 h-4" />
          <span className="hidden sm:inline">List View</span>
        </button>
        <button
          onClick={() => setViewMode('map')}
          className={cn(
            "p-2 rounded-md transition-all duration-200 flex items-center gap-2 text-sm font-medium",
            viewMode === 'map' 
              ? "bg-background text-foreground shadow-sm" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Map className="w-4 h-4" />
          <span className="hidden sm:inline">Map View</span>
        </button>
      </div>
    </header>
  );
}