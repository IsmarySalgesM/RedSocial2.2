import React, { Component } from 'react';
import fire from '../config/fire'
import '../navbar/navbar.css'
import {Navbar,NavItem} from 'react-materialize';

class Navegation extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
   console.log('click');
 }

  render() {
    return (
      <div>
        <Navbar brand='' right>
          <NavItem  href={process.env.PUBLIC_URL + '/Wall'}>Muro</NavItem >
          <NavItem  href={process.env.PUBLIC_URL + '/Profile'}>Perfil</NavItem >
          <NavItem  onClick={(this.logout)}>Cerrar Sesión</NavItem >
        </Navbar>

      </div>
    )
  }
}
export default Navegation;
