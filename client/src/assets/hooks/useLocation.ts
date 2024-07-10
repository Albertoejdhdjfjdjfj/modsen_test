import { useState, useEffect } from 'react';

export default function useLocation(initial: number[]): [number[], string | null] {
  const [location, setLocation] = useState<number[]>(initial);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const newLocation = [position.coords.latitude, position.coords.longitude];
        setLocation(newLocation);
      },
      () => {
        setError('Ошибка получения местоположения:');
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return [location, error];
}
