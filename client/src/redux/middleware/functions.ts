import { CategoryPlaces, Feature, YandexMapResponse } from '../reducers/interfaces';
import { Category } from '../../assets/constants/categories';
const API_KEY = '63a11a7b-be77-459c-be69-f0bb1d042caf';

export async function fetchCategoryPlaces(
  categories: Array<Category>,
  radius: number,
  location: number[]
): Promise<Array<CategoryPlaces>> {
  const data: Array<CategoryPlaces> = await Promise.all(
    categories.map(async (el) => {
      const response = await fetch(
        `https://search-maps.yandex.ru/v1/?text=${el.text}&type=biz&lang=ru_RU&apikey=${API_KEY}&rspn=1&spn=${radius / 111},${radius / 111}&ll=${location[1]},${location[0]}&results=100`
      );
      const places: YandexMapResponse = await response.json();
      return { category: el, places: places.features };
    })
  );

  return data;
}

export async function fetchPlace(place: string): Promise<Feature> {
  const response = await fetch(
    `https://search-maps.yandex.ru/v1/?text=${place}&type=biz&lang=ru_RU&apikey=${API_KEY}&results=1`
  );
  const data: YandexMapResponse = await response.json();

  return data.features[0];
}
