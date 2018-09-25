import React, { Component } from 'react';
import fire from '../config/fire';
import Home from '../login/home';
import Login from '../login/login';

class User extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
       
      } else {
        this.setState({ user: null });
        
      }
    });
  }
  render() {
    return (
     <div>{this.state.user ? ( <Home/>) : (<Login />)}</div>
    )
}
}

 export default User;
