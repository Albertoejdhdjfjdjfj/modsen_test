import {
  FETCH_PLACES,
  RESPONSE_PLACES,
  FETCH_WAY,
  RESPONSE_WAY,
  SET_END_POINT,
  SET_LOCTAION,
  STOP_ROUTE
} from './actionTypes';
import { Action, WayResponse } from '../../interfaces';
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

export function fetchWay(payload: {
  start: [number, number];
  end: [number, number];
}): Action<{ start: [number, number]; end: [number, number] }> {
  return {
    type: FETCH_WAY,
    payload: payload
  };
}

export function responseWay(payload: WayResponse): Action<WayResponse> {
  return {
    type: RESPONSE_WAY,
    payload: payload
  };
}

export function setLocation(payload: [number, number]): Action<[number, number]> {
  return {
    type: SET_LOCTAION,
    payload: payload
  };
}

export function setEndPoint(payload: [number, number]): Action<[number, number]> {
  return {
    type: SET_END_POINT,
    payload: payload
  };
}

export function stopRoute(): Action<undefined> {
  return {
    type: STOP_ROUTE,
    payload: undefined
  };
}
