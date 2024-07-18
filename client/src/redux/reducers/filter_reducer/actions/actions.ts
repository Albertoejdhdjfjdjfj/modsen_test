import { ADD_CATEGORY, DELETE_CATEGORY, SET_RADIUS, INPUT_TEXT } from './actionTypes';
import { Action } from '../../interfaces';
import { Category } from '../../../../assets/constants/categories';

export function addCategory(payload: Category): Action<Category> {
  return {
    type: ADD_CATEGORY,
    payload: payload
  };
}

export function deleteCategory(payload: Category): Action<Category> {
  return {
    type: DELETE_CATEGORY,
    payload: payload
  };
}

export function setRadius(payload: number): Action<number> {
  return {
    type: SET_RADIUS,
    payload: payload
  };
}
