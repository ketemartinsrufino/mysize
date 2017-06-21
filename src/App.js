import React, { Component } from 'react';
import './App.css';
import MeasureForm from './modules/measure/measure-form';
import Header from "./modules/header";
import MeasureList from "./modules/measure/measure-list";
import 'configs/firebase';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import sagas from 'modules/measure/sagas';

class App extends Component {


  componentWillMount() {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = composeWithDevTools({});
    const middlewares = [
      sagaMiddleware,
    ];

    this.store = createStore(
        combineReducers({
          lista: (state = [], action) => {
            if(action.type ===  'successfull' ) {
              return action.payload;
            }
            return state;
          },
          item: (state ={
              key: '',
              datacriacao: new Date().getTime(),
              peso: '',
              altura: '',
              cintura: '',
              abdomen: '',
              quadril: '',
              imc: '',
            }, action) => {

            if(action.type === 'Edit') {
              return action.payload;
            }
            return state;
          }
        }),
        composeEnhancers(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(sagas);
  }


  render() {
    return (
        <Provider store = {this.store}>
          <div className="App">
            <Header/>
              <div className="mdc-layout-grid">
                  <div className="mdc-layout-grid__inner">
                      <MeasureList/>
                      <MeasureForm/>
                  </div>
              </div>
          </div>
        </Provider>
    );
  }
}

export default App;
