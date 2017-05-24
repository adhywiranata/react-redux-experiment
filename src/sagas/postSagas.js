import { put, call, takeEvery } from 'redux-saga/effects';

import * as ActionTypes from '../actions/constants';
import * as Api from '../services/apis';

// worker saga to fetchPosts
export function* fetchPosts() {
  yield put({ type: ActionTypes.FETCH_POST_LOADING });
  try {
    const postsData = yield call(Api.fetchPosts);
    yield put({ type: ActionTypes.FETCH_POST_SUCCESS, payload: postsData.data });
  } catch(e) {
    yield put({ type: ActionTypes.FETCH_POST_FAILED, payload: e.message });
  }
}

// watcher saga to fetchPosts
export function* watcherFetchPosts() {
  yield takeEvery(ActionTypes.FETCH_POSTS, fetchPosts);
}
