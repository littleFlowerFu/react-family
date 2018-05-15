import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Page1 from '../pages/Page1/Page1';

const getRouter = () => (
  <Router>
      <div>
          <ul>
              <li><Link to="/">首页</Link></li>
              <li><Link to="/page1">Page1</Link></li>
          </ul>
          <Route exact path="/" component={Home}/>
          <Route path="/page1" component={Page1}/>
      </div>
  </Router>
);
export default getRouter;