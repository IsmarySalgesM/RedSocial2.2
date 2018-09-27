import React, { Component } from 'react';
import '../login/login';
import logoWall from '/home/laboratoria/again-red/src/img/WhatsApp Image 2018-09-27 at 10.52.33.jpeg';
class ImagenWall extends Component {

  render() {
    return (
      <div className="imagenWall">
        <img className="logoImagenWall" src={logoWall} alt="logo people wall"/>
      </div>
    )
  }
}

export default ImagenWall;