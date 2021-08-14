import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './components/main'
import Home from './components/home'
import Accordion from './components/accordion'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/topics/:id" component={Home}/>
        <Route path="/accordion" component={Accordion}/>
        <Route path="/" component={Main}/>
      </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

