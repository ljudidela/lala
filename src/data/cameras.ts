import { Camera } from '../types';

// Real coordinates and YouTube Live IDs for LA locations
export const CAMERAS: Camera[] = [
  {
    id: '1',
    title: 'Venice Beach Boardwalk',
    location: 'Venice, CA',
    thumbnail: 'https://img.youtube.com/vi/D9dr83-1b_A/maxresdefault.jpg',
    streamUrl: 'https://www.youtube.com/watch?v=D9dr83-1b_A',
    coordinates: [33.9850, -118.4695],
    type: 'youtube'
  },
  {
    id: '2',
    title: 'Santa Monica Pier',
    location: 'Santa Monica, CA',
    thumbnail: 'https://img.youtube.com/vi/86YLFOog4GM/maxresdefault.jpg',
    streamUrl: 'https://www.youtube.com/watch?v=86YLFOog4GM',
    coordinates: [34.0092, -118.4976],
    type: 'youtube'
  },
  {
    id: '3',
    title: 'Hollywood Walk of Fame',
    location: 'Hollywood, CA',
    thumbnail: 'https://img.youtube.com/vi/qC5Kxs75W9Q/maxresdefault.jpg',
    streamUrl: 'https://www.youtube.com/watch?v=qC5Kxs75W9Q',
    coordinates: [34.1016, -118.3267],
    type: 'youtube'
  },
  {
    id: '4',
    title: 'LAX Airport',
    location: 'Los Angeles, CA',
    thumbnail: 'https://img.youtube.com/vi/B0YF_V7VqLw/maxresdefault.jpg',
    streamUrl: 'https://www.youtube.com/watch?v=B0YF_V7VqLw',
    coordinates: [33.9416, -118.4085],
    type: 'youtube'
  },
  {
    id: '5',
    title: 'Beverly Hills',
    location: 'Beverly Hills, CA',
    thumbnail: 'https://img.youtube.com/vi/Qj3q7z4qKqQ/maxresdefault.jpg',
    streamUrl: 'https://www.youtube.com/watch?v=Qj3q7z4qKqQ',
    coordinates: [34.0736, -118.4004],
    type: 'youtube'
  },
  {
    id: '6',
    title: 'Downtown LA Skyline',
    location: 'Los Angeles, CA',
    thumbnail: 'https://img.youtube.com/vi/DnZ1_g1fJkQ/maxresdefault.jpg',
    streamUrl: 'https://www.youtube.com/watch?v=DnZ1_g1fJkQ',
    coordinates: [34.0522, -118.2437],
    type: 'youtube'
  }
];