import React, { Component } from 'react';
import './profile.css';
import logoU from '../img/WhatsApp Image 2018-09-27 at 10.52.33.jpeg'
import Navegation from '../navbar/Navigation'
import { Card, Icon } from 'react-materialize';

class Profile extends Component {
  render() {
    return (
      <div>
      <Navegation />
      <div className="center-align">
        <Card className="cardProfile center-align">
          <img className="logoUsuario" src={logoU} alt="logo Usuario" />
          <p> Nombre:</p> Majo Salazar 
          <p> Edad:</p> 27 años 
          <p> Nacionalidad:</p> Chilena 
          <p> Intereses:</p> Comida venezolana, peruana (Vegetariana) <Icon>mood</Icon>
        </Card>
      </div>
      </div>
    )
  }
}


export default Profile;