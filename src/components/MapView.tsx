import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Camera } from '../types';
import { divIcon } from 'leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

interface MapViewProps {
  cameras: Camera[];
  selectedCamera: Camera;
  onSelect: (camera: Camera) => void;
}

// Component to fly to selected marker
function MapController({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 13, { duration: 1.5 });
  }, [center, map]);
  return null;
}

const createCustomIcon = (isSelected: boolean) => {
  return divIcon({
    className: 'bg-transparent',
    html: `<div class="relative flex items-center justify-center">
             <div class="w-4 h-4 rounded-full ${isSelected ? 'bg-primary animate-ping' : ''} absolute opacity-75"></div>
             <div class="relative w-8 h-8 rounded-full border-2 ${isSelected ? 'border-primary bg-primary text-primary-foreground' : 'border-white bg-slate-800 text-white'} shadow-xl flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
             </div>
             ${isSelected ? '<div class="absolute -bottom-2 w-2 h-2 bg-primary rotate-45"></div>' : ''}
           </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

export function MapView({ cameras, selectedCamera, onSelect }: MapViewProps) {
  return (
    <MapContainer 
      center={[34.0522, -118.2437]} 
      zoom={10} 
      className="w-full h-full rounded-xl z-0"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <MapController center={[selectedCamera.location.lat, selectedCamera.location.lng]} />
      
      {cameras.map((cam) => (
        <Marker 
          key={cam.id} 
          position={[cam.location.lat, cam.location.lng]}
          icon={createCustomIcon(cam.id === selectedCamera.id)}
          eventHandlers={{
            click: () => onSelect(cam),
          }}
        >
          <Popup className="custom-popup">
            <div className="p-1">
              <h3 className="font-bold text-sm">{cam.title}</h3>
              <p className="text-xs text-gray-500">Click to watch</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}