import { put, call, takeEvery, all } from 'redux-saga/effects';

import { FETCH_USERS, FETCH_USER_LOADING, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from './constants';
import * as Api from '../services/apis';

// worker saga to fetchUsers
export function* fetchUsers() {
  yield put({ type: FETCH_USER_LOADING });
  try {
    const usersData = yield call(Api.fetchUsers);
    yield put({ type: FETCH_USER_SUCCESS, payload: usersData.data });
  } catch(e) {
    yield put({ type: FETCH_USER_FAILED, payload: e.message });
  }
}

export function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS, fetchUsers);
}

// run all sagas at once
export default function* rootSaga() {
  yield all([
    watchFetchUsers(),
  ])
}
