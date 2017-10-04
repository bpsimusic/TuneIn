import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import App from './app';
import ProfileContainer from './profileContainer';
import StreamContainer from './streamContainer';


const Root = ({store}) => {
  return (<Provider store={store}>
    <HashRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/profile" component={ProfileContainer} />
        <StreamContainer />
      </div>

    </HashRouter>
  </Provider>);
};

export default Root;
