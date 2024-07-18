import { RESPONSE_PLACE, SET_PLACE } from './actions/actionTypes';
import { Action } from '../interfaces';
import { PlaceState, Feature } from '../interfaces';

const initialState: PlaceState = {
  place: null
};

export function place_reducer(
  state: PlaceState = initialState,
  action: Action<Feature>
): PlaceState {
  switch (action.type) {
    case RESPONSE_PLACE:
      return {
        ...state,
        place: action.payload
      };

    case SET_PLACE:
      return {
        ...state,
        place: action.payload
      };
  }

  return state;
}
