import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import segmentsReducer from './reducers/traffic'
import segmentsJson from './data/segments.json'
import { PERSIST_KEY, persistStateInLocalStorage } from './persist/LocalStoragePersister'

const segments = JSON.parse(localStorage.getItem(PERSIST_KEY)).segments || segmentsJson;
const store = createStore(segmentsReducer, {segments});

store.subscribe(() => {
    const newState = store.getState();
    persistStateInLocalStorage(newState);
    console.log("state change", newState);
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
