import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer, apiStart } from './reducer';
import { mainSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);
const store = createStore(reducer, enhancer);

sagaMiddleware.run(mainSaga);
store.dispatch(apiStart())
