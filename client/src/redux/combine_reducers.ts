import { combineReducers, Reducer } from 'redux';
import { filter_reducer } from './reducers/filter_reducer/filter_reducer';
import { map_reducer } from './reducers/map_reducer/map_reducer';
import { FilterState, MapState } from './reducers/interfaces';

export interface State {
  filter_state: FilterState;
  map_state: MapState;
}

const rootReducer: Reducer<State> = combineReducers<State>({
  filter_state: filter_reducer,
  map_state: map_reducer
});

export default rootReducer;
