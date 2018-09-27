import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wall from './wall/wall';
import Profile from './profile/profile';
import User from './login/userAuth';


 

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
    <div>
      <Route exact path="/" component={User} />
      <Route path="/Wall" component={Wall} />     
      <Route path="/Profile" component={Profile} />     
    </div>          
  </Router>
  );  
};

 export default App;

