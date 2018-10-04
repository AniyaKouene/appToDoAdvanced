import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'


import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {actionCounter} from './middleware/actionCounter'
import reducers from "./reducers";

import App from "./components/App";
import './components/index.css';

const invariant = require("redux-immutable-state-invariant").default();
const createStoreWithMiddleware = applyMiddleware(
    invariant,
    thunk,
    actionCounter
    )(createStore);
ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);


