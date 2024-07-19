import { RESPONSE_PLACES, RESPONSE_WAY, SET_END_POINT, SET_LOCTAION,STOP_ROUTE } from './actions/actionTypes';
import { Action } from '../interfaces';
import { MapState, CategoryPlaces } from '../interfaces';

const initialState: MapState = {
  places: [],
  way: null,
  location: [55.76, 37.64],
  endPoint: null
};

export function map_reducer(
  state: MapState = initialState,
  action: Action<Array<CategoryPlaces> | Array<[number, number] | [number, number]|undefined>>
): MapState {
  switch (action.type) {
    case RESPONSE_PLACES:
      return {
        ...state,
        places: action.payload
      };

    case RESPONSE_WAY:
      return {
        ...state,
        way: action.payload
      };

    case SET_END_POINT:
      return {
        ...state,
        endPoint: action.payload
      };

    case SET_LOCTAION:
      return {
        ...state,
        location: action.payload
      };

      case STOP_ROUTE:
      return {
        ...state,
        way: null,
        endPoint:null
      };
  }

  return state;
}
