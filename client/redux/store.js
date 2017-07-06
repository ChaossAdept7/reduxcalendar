/**
 * Created by serj on 5/23/17.
 */
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger'
//Redux Thunk middleware allows you to write action creators that return a function instead of an action
import thunk from 'redux-thunk';
//some middleware
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, createLogger()));
    /* apply saga */
    sagaMiddleware.run(sagas);
    return store
}