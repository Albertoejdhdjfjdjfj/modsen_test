import { takeEvery, put, all, call } from 'redux-saga/effects';
import { FETCH_PLACES, FETCH_WAY } from '../reducers/map_reducer/actions/actionTypes';
import { FETCH_PLACE } from '../reducers/place_reducer/actions/actionTypes';
import { responsePlaces, responseWay } from '../reducers/map_reducer/actions/actions';
import { responsePlace } from '../reducers/place_reducer/actions/actions';
import { Action, CategoryPlaces, Feature, WayResponse } from '../reducers/interfaces';
import { Category } from '../../assets/constants/categories';
import { fetchCategoryPlaces, fetchPlace, fetchWay } from './functions';

export function* rootSaga() {
  yield all([watchCategoryPlaces(), watchPlace(), watchWay()]);
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

function* watchWay() {
  yield takeEvery(FETCH_WAY, getWay);
}

function* getWay(
  action: Action<{ start: [number, number]; end: [number, number] }>
): Generator<any, void, WayResponse> {
  const data: WayResponse = yield call(fetchWay, action.payload.start, action.payload.end);
  yield put(responseWay(data));
}
