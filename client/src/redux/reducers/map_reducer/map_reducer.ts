import { RESPONSE_PLACES } from './actions/actionTypes';
import { Action } from '../interfaces';
import { MapState, CategoryPlaces } from '../interfaces';

const initialState: MapState = {
  places: []
};

export function map_reducer(
  state: MapState = initialState,
  action: Action<Array<CategoryPlaces>>
): MapState {
  switch (action.type) {
    case RESPONSE_PLACES:
      return {
        ...state,
        places: action.payload
      };
  }

  return state;
}
