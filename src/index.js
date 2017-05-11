'use strict';
import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './container/App';


import store, { history } from './store/configureStore';


const router = (
  <BrowserRouter>
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={App}>
        </Route>
       </Router>
      </Provider>
  </BrowserRouter>
)


ReactDOM.render((router), document.querySelector('#root-container'));
