import React, { Component } from 'react';
import '../login/login';
import logoApp from '../img/logo-welcome2.png';

class Logo extends Component {

  render() {
    return (
      <div className="center-align">
        <img className="logoRedSocial" src={logoApp} alt="logo welcome"/>
      </div>
    )
  }
}

export default Logo;