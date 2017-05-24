import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../actions/sagas';

import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(thunk, logger, sagaMiddleware);
const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export default store;
