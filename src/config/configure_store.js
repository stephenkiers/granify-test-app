import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../app/reducers'

const storeCompose = compose(
                applyMiddleware(thunk),
                window.devToolsExtension ? window.devToolsExtension({ maxAge: 200 }) : f => f
            );
export default function configureStore(initialState) {
    return createStore(reducers, initialState, storeCompose);
}

