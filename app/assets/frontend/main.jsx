import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'
import { hashHistory } from 'react-router'

import Follow from './components/Follow';
import Index from './components/Index';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(
      <Router history={hashHistory} >
        <Route component={App}>
          <Route path='/' component={Index} />
          <Route path='follow' component={Follow} />
        </Route>
      </Router>,
      reactNode
    );
  }
};
$(documentReady);
