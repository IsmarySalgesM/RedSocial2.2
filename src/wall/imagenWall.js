import React, { Component } from 'react';
import '../login/login';
import logoWall from '../img/architecture-cityscape-cityview-34166.jpg';
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