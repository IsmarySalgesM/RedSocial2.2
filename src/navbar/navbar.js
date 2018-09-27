import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../navbar/navbar.css'
import { Navbar, NavItem } from 'react-materialize'
import Logo from '../login/logo';

import Wall from '../wall/wall';
//import Profile from '../profile/profile';

const Navegation = () => (
  <Router>
    <div>
      <Navbar brand='' right>
        <a href="#!" class="brand-logo sizeLogo"><Logo/></a>
        <br></br>
        <NavItem href='../wall/wall.js'>Muro</NavItem>
        <NavItem href='../profile/profile.js'>Perfil</NavItem>
        <NavItem onClick={(this.logout)}>Cerrar Sesión</NavItem>
      </Navbar>
      
      
    </div>
  </Router>
);




export default Navegation;
