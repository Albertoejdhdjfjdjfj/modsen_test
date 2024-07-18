import { FETCH_PLACE, RESPONSE_PLACE } from './actionTypes';
import { Action } from '../../interfaces';
import { Feature } from '../../interfaces';

export function fetchPlace(payload: string): Action<string> {
  return {
    type: FETCH_PLACE,
    payload: payload
  };
}

export function responsePlace(payload: Feature): Action<Feature> {
  return {
    type: RESPONSE_PLACE,
    payload: payload
  };
}
