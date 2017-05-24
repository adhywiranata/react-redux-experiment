import { put, call, takeEvery, all } from 'redux-saga/effects';

import * as ActionTypes from '../actions/constants';
import * as Api from '../services/apis';

// worker saga to fetchUsers
export function* fetchUsers() {
  yield put({ type: ActionTypes.FETCH_USER_LOADING });
  try {
    const usersData = yield call(Api.fetchUsers);
    yield put({ type: ActionTypes.FETCH_USER_SUCCESS, payload: usersData.data });
  } catch(e) {
    yield put({ type: ActionTypes.FETCH_USER_FAILED, payload: e.message });
  }
}

// watcher saga to fetchUsers
export function* watchFetchUsers() {
  yield takeEvery(ActionTypes.FETCH_USERS, fetchUsers);
}

// worker saga to addUser
export function* addUser(action) {
  yield put({ type: ActionTypes.ADD_USER_LOADING });
  yield call(Api.addUser, action.payload);
  console.log(action.payload);
  try {
    yield put({ type: ActionTypes.ADD_USER_SUCCESS, payload: action.payload });
  } catch(e) {
    yield put({ type: ActionTypes.ADD_USER_FAILED, payload: e.message });
  }
}

// watcher saga to addUser
export function* watchAddUser() {
  yield takeEvery(ActionTypes.ADD_USER, addUser);
}

// run all sagas at once
export default function* rootSaga() {
  yield all([
    watchFetchUsers(),
    watchAddUser(),
  ])
}
