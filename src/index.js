import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Freeroom from './Freeroom';



ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/about' component={About} />
        <Route path='/freeroom' component={Freeroom} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PW
serviceWorker.unregister();
