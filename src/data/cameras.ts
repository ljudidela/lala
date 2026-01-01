import { Camera } from '../types';

export const CAMERAS: Camera[] = [
  {
    id: '1',
    title: 'Santa Monica Pier',
    description: 'Live view of the iconic Santa Monica Pier and Pacific Park.',
    location: { lat: 34.0092, lng: -118.4976 },
    thumbnail: 'https://images.unsplash.com/photo-1533601017-dc61895e03c0?w=800&q=80',
    streamUrl: 'https://www.youtube.com/watch?v=owbO_6L81xM',
    type: 'youtube'
  },
  {
    id: '2',
    title: 'Venice Beach Boardwalk',
    description: 'The world-famous Venice Beach Boardwalk and Recreation Center.',
    location: { lat: 33.9850, lng: -118.4695 },
    thumbnail: 'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?w=800&q=80',
    streamUrl: 'https://www.youtube.com/watch?v=vvFullvKGTw',
    type: 'youtube'
  },
  {
    id: '3',
    title: 'Hollywood Blvd',
    description: 'Live cam from Hollywood Boulevard, Walk of Fame.',
    location: { lat: 34.1016, lng: -118.3267 },
    thumbnail: 'https://images.unsplash.com/photo-1540655037529-dec987208707?w=800&q=80',
    streamUrl: 'https://www.youtube.com/watch?v=1y_kfWUCFDQ',
    type: 'youtube'
  },
  {
    id: '4',
    title: 'Downtown LA Skyline',
    description: 'Panoramic view of the Downtown Los Angeles skyline.',
    location: { lat: 34.0522, lng: -118.2437 },
    thumbnail: 'https://images.unsplash.com/photo-1515896769750-31548aa180ed?w=800&q=80',
    streamUrl: 'https://www.youtube.com/watch?v=nKMuTet__lo',
    type: 'youtube'
  },
  {
    id: '5',
    title: 'Beverly Hills',
    description: 'Rodeo Drive and Wilshire Boulevard intersection.',
    location: { lat: 34.0696, lng: -118.4053 },
    thumbnail: 'https://images.unsplash.com/photo-1585241645928-1b73191377ce?w=800&q=80',
    streamUrl: 'https://www.youtube.com/watch?v=Qj3X7HqWq2c',
    type: 'youtube'
  },
  {
    id: '6',
    title: 'LAX Airport',
    description: 'Plane spotting at Los Angeles International Airport.',
    location: { lat: 33.9416, lng: -118.4085 },
    thumbnail: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80',
    streamUrl: 'https://www.youtube.com/watch?v=B1L49Vq_q5E',
    type: 'youtube'
  }
];