import React from 'react'
import { render } from 'react-dom'
import {Provider } from 'react-redux'
import configure_store from '../configure_store'
import App from '../../app/App'
import initialState from '../initial_state'

// Create Redux store with initial state
const store = configure_store(initialState);

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('granify')
);