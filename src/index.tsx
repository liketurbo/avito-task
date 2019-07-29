import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { Route, Router } from './components/Router';
import main from './pages/main';

ReactDOM.render(
  <App>
    <Router>
      <Route exact path="/" component={main} />
    </Router>
  </App>,
  document.getElementById('root')
);
