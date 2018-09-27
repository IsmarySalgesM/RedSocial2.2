import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wall from './wall/wall';
import Profile from './profile/profile';
import User from './login/userAuth';
import * as routes from '../src/config/routes';

 

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
      <div>
        <Route exact path={routes.USER} component={User} />
        <Route exact path={routes.WALL} component={Wall} />
        <Route exact path={routes.PROFILE} component={Profile} />
      </div>
    </Router>
  );  
};

 export default App;
