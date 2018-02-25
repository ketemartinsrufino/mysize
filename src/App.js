import React, { Component } from 'react';
import 'App.css';

import 'configs/firebase';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import sagas from 'modules/measure/sagas/sagas';
import {lista, item} from './modules/measure/redux/reducers';
import {listElement, elementItem} from 'modules/element/redux/reducers';

import Header from "modules/header";
import Main from './MainContent';

import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  componentWillMount() {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = composeWithDevTools({});
    const middlewares = [
      sagaMiddleware,
    ];

    this.store = createStore(
        combineReducers({lista, item, listElement, elementItem}),
        composeEnhancers(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(sagas);
  }


  render() {
    return (
      <BrowserRouter>  
        <Provider store = {this.store}>
          <div className="App">
            <Header/>
            <Main></Main>
          </div>
        </Provider>
      </BrowserRouter>  
    );
  }
}

export default App;
