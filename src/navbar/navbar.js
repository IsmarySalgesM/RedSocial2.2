import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../navbar/navbar.css'
import Logo from '../login/logo';

import Wall from '../wall/wall';
//import Profile from '../profile/profile';

const Navbar = () => (
  <Router>
    <div>
      <nav>
        <div className="nav-wrapper">
        <a href="#!" class="brand-logo sizeLogo"><Logo/></a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li>
                <Link to="../wall/wall.js" className="">Muro</Link>
              </li>
              <li>
                <Link to="../profile/profile.js" className="">Perfil</Link>
              </li>
              <li>
                <Route exact path="../wall/wall.js" component={Wall} />
              </li>
            </ul>  

        </div>  
      </nav>  
    </div>
  </Router>
);


/*
class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" class="brand-logo sizeLogo"><Logo/></a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li><a href="#">Muro</a></li>
              <li><a href="#">Perfl</a></li>
              <li><a href="#">Cerrar Sesión</a></li>
            </ul>
          </div>
        </nav>
        <main>
          
        </main>
  
        <ul class="sidenav" id="mobile-demo">
          <li><a href="#">Muro</a></li>
          <li><a href="#">Perfl</a></li>
          <li><a href="#">Cerrar Sesión</a></li>
        </ul>
    
      </div>
    );
  }
}

*/

export default Navbar;
