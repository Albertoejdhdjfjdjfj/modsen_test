import { useState, useEffect } from 'react';

export default function useLocation(initial: number[]): [number[], string | null] {
  const [location, setCurrentLocation] = useState<number[]>(initial);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const updateLocation = (position: GeolocationPosition) => {
      const newLocation = [position.coords.latitude, position.coords.longitude];
      setCurrentLocation(newLocation);
    };

    const errorHandler = (error: GeolocationPositionError) => {
      setError('Ошибка получения местоположения: ' + error.message);
    };

    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const watchId = navigator.geolocation.watchPosition(updateLocation, errorHandler, options);

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return [location, error];
}
