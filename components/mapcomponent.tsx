"use client";
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Set the path for Leaflet icons
L.Icon.Default.imagePath = '/images/';

// Define a type for marker data
type MarkerData = {
  position: [number, number];
  name: string;
  imageUrl: string;
};

const MapComponent: React.FC = () => {
  // Coordinates for the Trakya region
  const center: [number, number] = [40.978, 27.515];

  // Markers data with image URLs
  const markers: MarkerData[] = [
    { position: [41.1726, 27.4963], name: "Muratlı Projesi", imageUrl: "/images/features-03-image-03.png" },
    { position: [40.978, 27.515], name: "Tekirdağ Proje 1", imageUrl: "/images/logo.webp"  },
    { position: [41.018, 27.515], name: "Tekirdağ Proje 2", imageUrl: "/images/logo.webp"  },
    { position: [41.278, 27.515], name: "Tekirdağ Proje 3", imageUrl: "/images/logo.webp"  },
    { position: [40.578, 27.515], name: "Marmara Adası Projesi", imageUrl: "/images/logo.webp"  },
    { position: [41.400002 , 27.350000], name: "Kırklareli Projesi", imageUrl: "/images/logo.webp"  },
    { position: [41.431318, 27.091797], name: "Babaeski Projesi", imageUrl: "/images/logo.webp"  },
    { position: [41.272166, 27.968067], name: "Çerkezköy Projesi", imageUrl: "/images/logo.webp"  },
    { position: [41.2365, 27.7088], name: "Ergene Projesi", imageUrl: "/images/logo.webp"  },
    { position: [41.1383, 27.9191], name: "Çorlu Projesi", imageUrl: "/images/logo.webp"  }
  ];

  return (
    <MapContainer center={center} zoom={9} className="rounded-xl h-[30rem] w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((marker, idx) => (
        <Marker key={idx} position={marker.position}>
          <Popup>
            <div className='w-full h-full text-center font-bold'>
              <h2>{marker.name}</h2>
              <img src={marker.imageUrl} alt={marker.name} className='max-w-52 h-auto' />
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
