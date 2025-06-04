
import React, { useEffect, useRef, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    mapboxgl: any;
  }
}

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Karnataka coordinates (approximate center)
  const karnatakaCoords = [75.7139, 15.3173];
  
  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    // Load Mapbox GL JS
    const script = document.createElement('script');
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js';
    script.onload = () => {
      const link = document.createElement('link');
      link.href = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);

      // Initialize map
      window.mapboxgl.accessToken = mapboxToken;
      
      map.current = new window.mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: karnatakaCoords,
        zoom: 8
      });

      // Add navigation controls
      map.current.addControl(new window.mapboxgl.NavigationControl());

      // Add markers for our locations
      const locations = [
        {
          coords: [75.7139, 15.3173],
          title: 'ECONUT Head Office',
          description: 'Main coconut processing center'
        },
        {
          coords: [76.2711, 15.8497],
          title: 'Coconut Farm 1',
          description: 'Organic coconut plantation'
        },
        {
          coords: [74.8560, 15.4909],
          title: 'Coconut Farm 2',
          description: 'Sustainable farming site'
        }
      ];

      locations.forEach(location => {
        // Create custom marker
        const el = document.createElement('div');
        el.className = 'custom-marker';
        el.style.cssText = `
          background-color: #16a34a;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          cursor: pointer;
        `;

        // Create popup
        const popup = new window.mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div style="padding: 8px;">
              <h3 style="margin: 0 0 4px 0; font-weight: bold; color: #16a34a;">${location.title}</h3>
              <p style="margin: 0; color: #666; font-size: 14px;">${location.description}</p>
            </div>
          `);

        // Add marker to map
        new window.mapboxgl.Marker(el)
          .setLngLat(location.coords)
          .setPopup(popup)
          .addTo(map.current);
      });

      setIsMapLoaded(true);
    };
    document.head.appendChild(script);
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap();
    }
  };

  return (
    <div className="h-96 relative">
      {!isMapLoaded && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
          <div className="text-center p-8 max-w-md">
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Interactive Map</h3>
            <p className="text-gray-600 mb-6">
              Enter your Mapbox token to view our locations in Karnataka's coconut farming region
            </p>
            <form onSubmit={handleTokenSubmit} className="space-y-4">
              <div>
                <Label htmlFor="mapboxToken" className="text-left block mb-2">
                  Mapbox Public Token
                </Label>
                <Input
                  id="mapboxToken"
                  type="text"
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  placeholder="pk.eyJ1..."
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Load Map
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Get your token at{' '}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                mapbox.com
              </a>
            </p>
          </div>
        </div>
      )}
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default InteractiveMap;
