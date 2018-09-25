import React, { Component } from 'react';
import '../login/login';
import logoApp from '/home/laboratoria/again-red/src/logo-welcome2.png';
class Logo extends Component {

  render() {
    return (
      <div className="center-align">
        <img className="logoRedSocial" src={logoApp} />
      </div>
    )
  }
}

export default Logo;