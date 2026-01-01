import React, { useState } from 'react';
import { Header } from './components/Header';
import { CameraCard } from './components/CameraCard';
import { Map } from './components/Map';
import { PlayerOverlay } from './components/PlayerOverlay';
import { CAMERAS } from './data/cameras';
import { Camera } from './types';

function App() {
  const [selectedCamera, setSelectedCamera] = useState<Camera | null>(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handleCameraSelect = (camera: Camera) => {
    setSelectedCamera(camera);
    setIsPlayerOpen(true);
  };

  return (
    <div className="min-h-screen bg-la-dark flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden h-[calc(100vh-64px)]">
        {/* Sidebar List */}
        <aside className="w-full lg:w-[400px] bg-slate-900/50 border-r border-slate-800 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-slate-800">
            <h2 className="text-lg font-semibold text-white">Available Cameras</h2>
            <p className="text-sm text-slate-400">{CAMERAS.length} locations online</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {CAMERAS.map((camera) => (
              <CameraCard 
                key={camera.id} 
                camera={camera} 
                isActive={selectedCamera?.id === camera.id}
                onClick={() => handleCameraSelect(camera)}
              />
            ))}
          </div>
        </aside>

        {/* Map Area */}
        <section className="flex-1 relative bg-slate-950">
          <Map 
            cameras={CAMERAS} 
            selectedCamera={selectedCamera} 
            onSelect={handleCameraSelect} 
          />
          
          {/* Floating Info for Desktop if no player open */}
          {!isPlayerOpen && (
            <div className="absolute bottom-8 left-8 z-[400] bg-slate-900/90 backdrop-blur p-4 rounded-lg border border-slate-700 max-w-xs hidden md:block">
              <h3 className="text-white font-bold">Explore Los Angeles</h3>
              <p className="text-slate-400 text-sm mt-1">Click on a marker or select from the list to view the live feed.</p>
            </div>
          )}
        </section>
      </main>

      {/* Video Player Modal */}
      {isPlayerOpen && (
        <PlayerOverlay 
          camera={selectedCamera} 
          onClose={() => setIsPlayerOpen(false)} 
        />
      )}
    </div>
  );
}

export default App;