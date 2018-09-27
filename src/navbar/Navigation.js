import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import fire from '../config/fire'
import '../navbar/navbar.css'
import { Navbar, NavLink, Button } from 'react-materialize'
import Logo from '../login/logo';
import Logout from '../login/logOut'

import Wall from '../wall/wall';
import Profile from '../profile/profile';



const Navegation = () => {
  return (
    <div>
      <Navbar brand='' right>
        <a href="#!" class="brand-logo sizeLogo"><Logo/></a>
        <br></br>
        <NavLink href=''>Muro</NavLink>
        <NavLink href='../profile/profile.js'>Perfil</NavLink>
        <NavLink onClick={(this.logout)}>Cerrar Sesión</NavLink>
      
      </Navbar>
    
    </div>
  )
};




export default Navegation;
