import { useState, useEffect } from 'react';

export default function useLocation(initial: number[]): [number[], string | null] {
  const [location, setCurrentLocation] = useState<number[]>(initial);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const newLocation = [position.coords.latitude, position.coords.longitude];
        setCurrentLocation(newLocation);
      },
      () => {
        setError('Ошибка получения местоположения:');
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return [location, error];
}
