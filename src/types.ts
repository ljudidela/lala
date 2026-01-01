export interface Camera {
  id: string;
  title: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  thumbnail: string;
  streamUrl: string;
  type: 'youtube' | 'hls';
}