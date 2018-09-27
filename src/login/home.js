import React, { Component } from 'react';
import Wall from '../wall/wall';
import Navegation from '../navbar/navbar';
import ImagenWall from '../wall/imagenWall';
import fire from '../config/fire';

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div>
        <Navegation />
        <Wall />          
      </div>
    );
  }
}

export default Home;