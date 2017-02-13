import React, { Component, PropTypes } from 'react';
import { Route, Router } from 'react-router';
import { render } from 'react-dom';

export default class ProjectApp extends Component {
    render() {
        return (
            <div>
                Hello
            </div>
        );
    }
}

$(() => {
  render(
      <Router>
          <Route path="/" component={ProjectApp}>
                <Route path="about" component={About} />
          </Route>
    </Router>, document.body);
});
