import React, { Component } from 'react';
import { Icon } from 'react-materialize'
class Contador extends Component {
    constructor() {
        super();
        this.state = {
            contador: 0
        }
    }
    render() {
        return (
            <div>
                <p>{this.state.contador}
                    <a onClick={this.contadorLikes.bind(this)}><Icon>public</Icon> </a>
                </p>
            </div>
        )
    }
    contadorLikes() {
        this.setState({
            contador: this.state.contador + 1
        })
    }
}
export default Contador;