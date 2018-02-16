import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import MeasureListComponent from 'modules/measure/measure-component';
import ElementComponent from 'modules/element/element-component';

const Main = () => (

  <main>
    <ul>
        <li><Link to="/">Medidas</Link></li>
        <li><Link to="/elements">Itens</Link></li>
      </ul>

    <Switch>
      <Route exact path='/' component={ MeasureListComponent }/>
      <Route path="/elements" component={ ElementComponent }/> 
    </Switch>
  </main>
)

export default Main;
