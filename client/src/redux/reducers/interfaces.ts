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
  way: WayResponse | null;
  endPoint: [number, number] | null;
  location: [number, number];
}

export interface PlaceState {
  place: Feature | null;
}

export interface WayResponse {
  code: string;
  routes: {
    geometry: {
      coordinates: Array<[number, number]>;
      type: string;
    };
    legs: {
      steps: Array<any>;
      summary: string;
      weight: number;
      duration: number;
      distance: number;
    }[];
    weight_name: string;
    weight: number;
    duration: number;
    distance: number;
  }[];
  waypoints: {
    hint: string;
    distance: number;
    name: string;
    location: [number, number];
  }[];
}
