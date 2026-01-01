import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Camera } from '../types';
import L from 'leaflet';
import { Video } from 'lucide-react';
import { renderToStaticMarkup } from 'react-dom/server';

// Fix for default leaflet icons in React
const createCustomIcon = () => {
  const iconHtml = renderToStaticMarkup(
    <div className="w-8 h-8 bg-blue-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
      <Video className="w-4 h-4 text-white" />
    </div>
  );

  return L.divIcon({
    html: iconHtml,
    className: 'custom-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
};

const customIcon = createCustomIcon();

// Component to handle map flying
const MapUpdater: React.FC<{ center: [number, number] }> = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 13, {
      duration: 1.5
    });
  }, [center, map]);
  return null;
};

interface Props {
  cameras: Camera[];
  selectedCamera: Camera | null;
  onSelect: (camera: Camera) => void;
}

export const Map: React.FC<Props> = ({ cameras, selectedCamera, onSelect }) => {
  const defaultCenter: [number, number] = [34.0522, -118.2437]; // LA Center

  return (
    <MapContainer 
      center={defaultCenter} 
      zoom={10} 
      className="w-full h-full rounded-xl overflow-hidden shadow-2xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      
      {selectedCamera && <MapUpdater center={selectedCamera.coordinates} />}

      {cameras.map((cam) => (
        <Marker 
          key={cam.id} 
          position={cam.coordinates} 
          icon={customIcon}
          eventHandlers={{
            click: () => onSelect(cam),
          }}
        >
          <Popup className="custom-popup">
            <div className="text-slate-900 font-semibold">
              {cam.title}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};