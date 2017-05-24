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
export function* watchFetchPosts() {
  yield takeEvery(ActionTypes.FETCH_POSTS, fetchPosts);
}


function* addPost(action) {
  yield put({ type: ActionTypes.ADD_POST_LOADING });
  yield call(Api.addPost, action.payload);
  try {
    yield put({ type: ActionTypes.ADD_POST_SUCCESS, payload: action.payload });
  } catch(e) {
    yield put({ type: ActionTypes.ADD_POST_FAILED, payload: e.message });
  }
}

export function* watchAddPost() {
  yield takeEvery(ActionTypes.ADD_POST, addPost);
}
