import { all } from 'redux-saga/effects';

import { watchFetchUsers, watchAddUser } from './userSagas';
import { watcherFetchPosts } from './postSagas';

// run all sagas at once
export default function* rootSaga() {
  yield all([
    watchFetchUsers(),
    watchAddUser(),
    watcherFetchPosts(),
  ]);
}
