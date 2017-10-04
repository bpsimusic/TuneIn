import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter, IndexRoute, Route} from 'react-router-dom';
import App from './app';


const Root = ({store}) => {
  return (<Provider store={store}>
    <HashRouter>
      <Route path="/" component={App}>

      </Route>
    </HashRouter>
  </Provider>);
};

export default Root;
