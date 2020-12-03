import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

export default function configureStore() {
    const store = createStore(
        reducer,
        applyMiddleware(logger)
    )
    return store;
}