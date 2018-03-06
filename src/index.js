import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

// Redux dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// Sagas and Reducers
import sagas from 'modules/measure/sagas/sagas';
import {lista, item} from './modules/measure/redux/reducers';
import {listElement, elementItem} from 'modules/element/redux/reducers';

import 'configs/firebase';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});
const middlewares = [
  sagaMiddleware,
];

const store = createStore(
    combineReducers({lista, item, listElement, elementItem}),
    composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagas);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
