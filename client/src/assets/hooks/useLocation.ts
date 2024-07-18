import { useState, useEffect } from 'react';

export default function useLocation(initial: number[]): [number[], string | null] {
  const [location, setCurrentLocation] = useState<number[]>(initial);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const updateLocation = (position: GeolocationPosition) => {
      const newLocation = [position.coords.latitude, position.coords.longitude];
      setCurrentLocation(newLocation);
      setError(null);
    };

    const errorHandler = (error: GeolocationPositionError) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          setError('Ошибка получения местоположения: доступ запрещен');
          break;
        case error.POSITION_UNAVAILABLE:
          setError('Ошибка получения местоположения: недоступно');
          break;
        case error.TIMEOUT:
          setError('Ошибка получения местоположения: время ожидания истекло');
          break;
        default:
          setError('Ошибка получения местоположения: неизвестная ошибка');
          break;
      }
    };

    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    const watchId = navigator.geolocation.watchPosition(updateLocation, errorHandler, options);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return [location, error];
}
