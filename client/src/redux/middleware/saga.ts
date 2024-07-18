import { takeEvery, put, all, call } from 'redux-saga/effects';
import { FETCH_PLACES } from '../reducers/map_reducer/actions/actionTypes';
import { FETCH_PLACE } from '../reducers/place_reducer/actions/actionTypes';
import { responsePlaces } from '../reducers/map_reducer/actions/actions';
import { responsePlace } from '../reducers/place_reducer/actions/actions';
import { Action, CategoryPlaces, Feature } from '../reducers/interfaces';
import { Category } from '../../assets/constants/categories';
import { fetchCategoryPlaces, fetchPlace } from './functions';

export function* rootSaga() {
  yield all([watchCategoryPlaces(), watchPlace()]);
}

function* watchCategoryPlaces() {
  yield takeEvery(FETCH_PLACES, getCategoryPlaces);
}

function* getCategoryPlaces(
  action: Action<{ categories: Array<Category>; radius: number; location: number[] }>
) {
  const { categories, radius, location } = action.payload;
  const data: CategoryPlaces[] = yield call(fetchCategoryPlaces, categories, radius, location);
  yield put(responsePlaces(data));
}

function* watchPlace() {
  yield takeEvery(FETCH_PLACE, getPlace);
}

function* getPlace(action: Action<string>) {
  const data: Feature = yield call(fetchPlace, action.payload);
  yield put(responsePlace(data));
}
