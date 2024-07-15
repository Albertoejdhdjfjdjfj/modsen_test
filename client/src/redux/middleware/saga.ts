import { takeEvery, put, all, call } from 'redux-saga/effects';
import { FETCH_PLACES } from '../reducers/map_reducer/actions/actionTypes';
import { responsePlaces } from '../reducers/map_reducer/actions/actions';
import { Action, CategoryPlaces, YandexMapResponse } from '../reducers/interfaces';
import { Category } from '../../assets/constants/categories';
const API_KEY = '63a11a7b-be77-459c-be69-f0bb1d042caf';

export function* rootSaga() {
  yield all([watchFetchPlaces()]);
}

function* watchFetchPlaces() {
  yield takeEvery(FETCH_PLACES, fetchPlaces);
}

function* fetchPlaces(
  action: Action<{ categories: Array<Category>; radius: number; location: number[] }>
) {
  const { categories, radius, location } = action.payload;
  const data: CategoryPlaces[] = yield call(fetchCategoryPlaces, categories, radius, location);
  yield put(responsePlaces(data));
}

async function fetchCategoryPlaces(
  categories: Array<Category>,
  radius: number,
  location: number[]
) {
  const data: Array<CategoryPlaces> = await Promise.all(
    categories.map(async (el) => {
      const response = await fetch(
        `https://search-maps.yandex.ru/v1/?text=${el.text}&type=biz&lang=ru_RU&apikey=${API_KEY}&rspn=1&spn=${radius / 111},${radius / 111}&ll=${location[1]},${location[0]}&results=100`
      );
      const places: YandexMapResponse = await response.json();
      return { category: el, places: places.features };
    })
  );

  return data;
}
