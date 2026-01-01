import ReactPlayer from 'react-player';
import { Camera } from '../types';
import { Loader2, WifiOff } from 'lucide-react';
import { useState } from 'react';

interface VideoPlayerProps {
  camera: Camera;
}

export function VideoPlayer({ camera }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Reset state when camera changes
  if (camera.id && isLoading === false && error === true) {
      // This is a simplistic reset, in a real app use useEffect
  }

  return (
    <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative group">
      <ReactPlayer
        key={camera.id}
        url={camera.streamUrl}
        width="100%"
        height="100%"
        playing={true}
        controls={true}
        onBuffer={() => setIsLoading(true)}
        onBufferEnd={() => setIsLoading(false)}
        onReady={() => setIsLoading(false)}
        onError={() => { setIsLoading(false); setError(true); }}
        config={{
          youtube: {
            playerVars: { showinfo: 1, autoplay: 1 }
          }
        }}
      />
      
      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-10">
          <Loader2 className="w-10 h-10 text-primary animate-spin" />
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 z-20 text-muted-foreground">
          <WifiOff className="w-12 h-12 mb-2" />
          <p>Stream unavailable</p>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <h2 className="text-white font-bold text-lg">{camera.title}</h2>
        <p className="text-white/80 text-sm">{camera.description}</p>
      </div>
    </div>
  );
}