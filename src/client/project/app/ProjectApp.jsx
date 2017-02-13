import React, { Component, PropTypes } from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import { render } from 'react-dom';

export default class ProjectApp extends Component {
    render() {
        return (
            <div>
                Hello react
            </div>
        );
    }
}

$(() => {
  render(
      <Router history={browserHistory}>
          <Route path="/project/app" component={ProjectApp}>
          </Route>
      </Router>, document.getElementById('projectApp'));
});
