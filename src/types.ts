export interface Camera {
  id: string;
  title: string;
  location: string;
  thumbnail: string;
  streamUrl: string;
  coordinates: [number, number]; // [lat, lng]
  type: 'youtube' | 'hls';
}