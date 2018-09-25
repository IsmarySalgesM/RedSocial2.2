import React, { Component } from 'react';
import Navbar from '../navbar/navbar'
//import fire from '../config/fire';

class Home extends Component {
    // constructor(props) {
    //     super(props);
    //     this.logout = this.logout.bind(this);
    // }
 //<button onClick={this.logout}>Logout</button>} 

    // logout() {
    //     fire.auth().signOut();
    // }

    render() {
        return (
            <div>
               <Navbar />
            
            </div>
        );

    }

}

export default Home;