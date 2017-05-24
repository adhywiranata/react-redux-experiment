import { all } from 'redux-saga/effects';

import { watchFetchUsers, watchAddUser } from './userSagas';
import { watchFetchPosts, watchAddPost } from './postSagas';

// run all sagas at once
export default function* rootSaga() {
  yield all([
    watchFetchUsers(),
    watchAddUser(),
    watchFetchPosts(),
    watchAddPost(),
  ]);
}
