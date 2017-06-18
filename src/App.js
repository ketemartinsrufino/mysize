import React, { Component } from 'react';
import './App.css';
import MeasureForm from './modules/measure/measure-form';
import Header from "./modules/header";
import MeasureList from "./modules/measure/measure-list";
import 'configs/firebase';

class App extends Component {

  render() {
    return (
        <div className="App">
            <Header/>
            <div className="mdc-layout-grid">
                <div className="mdc-layout-grid__inner">
                    <MeasureList/>
                    <MeasureForm/>
                </div>
            </div>
        </div>

    );
  }
}

export default App;
