import {createStore, applyMiddleware} from 'redux';
import reducers from './modules/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
