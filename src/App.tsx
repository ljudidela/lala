import { useState } from 'react';
import { Header } from './components/Header';
import { VideoPlayer } from './components/VideoPlayer';
import { CameraList } from './components/CameraList';
import { MapView } from './components/MapView';
import { CAMERAS } from './data/cameras';
import { Camera } from './types';
import { cn } from './lib/utils';

function App() {
  const [selectedCamera, setSelectedCamera] = useState<Camera>(CAMERAS[0]);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header viewMode={viewMode} setViewMode={setViewMode} />

      <main className="flex-1 pt-16 p-4 md:p-6 overflow-hidden">
        <div className="max-w-7xl mx-auto h-[calc(100vh-6rem)] flex flex-col lg:flex-row gap-6">
          
          {/* Left Column: Player & Info */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            <div className="flex-none">
              <VideoPlayer camera={selectedCamera} />
            </div>
            
            <div className="flex-1 bg-card rounded-xl p-6 border border-border overflow-y-auto">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{selectedCamera.title}</h2>
                  <p className="text-muted-foreground">{selectedCamera.description}</p>
                </div>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  LIVE
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="bg-secondary/50 p-3 rounded-lg">
                  <span className="block text-xs uppercase tracking-wider opacity-70">Latitude</span>
                  <span className="font-mono text-foreground">{selectedCamera.location.lat.toFixed(4)}</span>
                </div>
                <div className="bg-secondary/50 p-3 rounded-lg">
                  <span className="block text-xs uppercase tracking-wider opacity-70">Longitude</span>
                  <span className="font-mono text-foreground">{selectedCamera.location.lng.toFixed(4)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: List or Map */}
          <div className="w-full lg:w-1/3 flex flex-col bg-card rounded-xl border border-border overflow-hidden h-full">
            <div className="p-4 border-b border-border bg-secondary/20">
              <h3 className="font-semibold text-foreground">
                {viewMode === 'list' ? 'Available Cameras' : 'Camera Map'}
              </h3>
            </div>
            
            <div className="flex-1 relative overflow-hidden">
              <div className={cn(
                "absolute inset-0 transition-transform duration-500 ease-in-out",
                viewMode === 'list' ? "translate-x-0" : "-translate-x-full"
              )}>
                <CameraList 
                  cameras={CAMERAS} 
                  selectedId={selectedCamera.id} 
                  onSelect={setSelectedCamera} 
                />
              </div>
              
              <div className={cn(
                "absolute inset-0 transition-transform duration-500 ease-in-out",
                viewMode === 'map' ? "translate-x-0" : "translate-x-full"
              )}>
                <MapView 
                  cameras={CAMERAS} 
                  selectedCamera={selectedCamera} 
                  onSelect={setSelectedCamera} 
                />
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}