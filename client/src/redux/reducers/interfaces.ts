import { Category } from '../../assets/constants/categories';

export interface Action<T> {
  type: string;
  payload: T;
}

export interface FilterState {
  categories: Array<Category>;
  radius: number;
}

export interface YandexMapResponse {
  features: Feature[];
  total: number;
  bounds: [number, number][];
}

export interface Feature {
  type: 'Feature';
  geometry: {
    type: 'Point';
    coordinates: [number, number];
  };
  properties: {
    name: string;
    description?: string;
    CompanyMetaData: {
      id: string;
      name: string;
      address: string;
      url?: string;
      Phones: Array<{ type: string; formatted: string }>;
      Categories: {
        name: string;
      }[];
      Hours: {
        text: string;
      };
    };
  };
}

export interface CategoryPlaces {
  category: Category;
  places: Array<Feature>;
}

export interface MapState {
  places: Array<CategoryPlaces>;
}

export interface PlaceState {
  place: Feature | null;
}
