import { FETCH_PLACES, RESPONSE_PLACES } from './actionTypes';
import { Action } from '../../interfaces';
import { CategoryPlaces } from '../../interfaces';
import { Category } from '../../../../assets/constants/categories';

export function fetchPlaces(payload: {
  categories: Array<Category>;
  radius: number;
  location: number[];
}): Action<{ categories: Array<Category>; radius: number; location: number[] }> {
  return {
    type: FETCH_PLACES,
    payload: payload
  };
}

export function responsePlaces(payload: Array<CategoryPlaces>): Action<Array<CategoryPlaces>> {
  return {
    type: RESPONSE_PLACES,
    payload: payload
  };
}
