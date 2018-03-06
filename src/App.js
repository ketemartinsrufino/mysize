import React, { Component } from 'react';
import 'App.css';

import Header from "modules/header";
import Main from './MainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main></Main>
      </div>
    );
  }
}

export default App;
