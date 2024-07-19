import { ADD_CATEGORY, DELETE_CATEGORY, SET_RADIUS, INPUT_TEXT } from './actions/actionTypes';
import { Action } from '../interfaces';
import { Category } from '../../../assets/constants/categories';
import { FilterState } from '../interfaces';

const initialState: FilterState = {
  categories: [],
  radius: 5
};

export function filter_reducer(
  state: FilterState = initialState,
  action: Action<string | number | object>
): FilterState {
  switch (action.type) {
    case ADD_CATEGORY:
      if (
        typeof action.payload === 'object' &&
        'icon' in action.payload &&
        'text' in action.payload
      ) {
        return {
          ...state,
          categories: [...state.categories, action.payload]
        };
      }
      break;

    case DELETE_CATEGORY:
      if (
        typeof action.payload === 'object' &&
        'icon' in action.payload &&
        'text' in action.payload
      ) {
        return {
          ...state,
          categories: state.categories.filter((el: Category) => el.text !== action.payload.text)
        };
      }
      break;

    case SET_RADIUS:
      if (typeof action.payload === 'number') {
        return {
          ...state,
          radius: action.payload
        };
      }
      break;
  }

  return state;
}
