import React, { Component } from 'react';
import Wall from '../wall/wall'
import Navbar from '../navbar/navbar'
import Profile from '../profile/profile';

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
               <Wall />  
               <Profile />        
            </div>
        );

    }

}

export default Home;