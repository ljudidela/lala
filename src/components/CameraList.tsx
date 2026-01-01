import { Camera } from '../types';
import { cn } from '../lib/utils';
import { PlayCircle } from 'lucide-react';

interface CameraListProps {
  cameras: Camera[];
  selectedId: string;
  onSelect: (camera: Camera) => void;
}

export function CameraList({ cameras, selectedId, onSelect }: CameraListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 p-4 overflow-y-auto h-full">
      {cameras.map((cam) => (
        <div
          key={cam.id}
          onClick={() => onSelect(cam)}
          className={cn(
            "group relative rounded-lg overflow-hidden cursor-pointer border transition-all duration-300 hover:shadow-lg hover:border-primary/50",
            selectedId === cam.id 
              ? "border-primary ring-1 ring-primary shadow-md bg-secondary/30"
              : "border-border bg-card"
          )}
        >
          <div className="aspect-video relative overflow-hidden">
            <img 
              src={cam.thumbnail} 
              alt={cam.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
            {selectedId === cam.id && (
              <div className="absolute inset-0 border-4 border-primary/50 pointer-events-none animate-pulse" />
            )}
          </div>
          <div className="p-3">
            <h3 className={cn(
              "font-semibold truncate",
              selectedId === cam.id ? "text-primary" : "text-foreground"
            )}>
              {cam.title}
            </h3>
            <p className="text-xs text-muted-foreground truncate">{cam.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}