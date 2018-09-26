import React, { Component } from 'react';
import '../wall/wall.css'
import { Input, Button, Card } from 'react-materialize';
import Contador from './contador';
// import firebase from 'firebase';

class Wall extends Component {
  constructor() {
    super();
    this.state = {
      inputVal : '',
      wall: []
    }
    this.btnPublic = this.btnPublic.bind(this)
  }

  // componentDidMount() {
  //   this.refs.publish.focus();
  // }

  btnPublic(e) {
    e.preventDefault()

    let wall = this.state.wall;
    let publishWall = this.state.inputVal;
    console.log(publishWall)

    
    let dataPublish = {
      publishWall : publishWall
    }

    this.setState({
      ...this.state, //copiar el estado ... al nuevo objeto
      wall : this.state.wall.concat(dataPublish)
    });
  }

  onChange(name, event){
    this.setState({
      ...this.state,
      [name] : event.target.value
    });
  }

  render() {
    let wall = this.state.wall;
    return (
      <div>
        <Card className='CardRegister' textClassName='black-text'>
          <form>
            <Input s={10} placeholder="Hola WelcomLovers!!"  onChange={e=>this.onChange("inputVal", e)} type="text" />
            <div className='center-align'>
              <Button onClick={this.btnPublic}>Publicar</Button>
            </div>
          </form>
        </Card>
        <pre>
          {wall.map((walls, i) =>
            <Card className='red' key ={i} textClassName='black-text'>
              {walls.publishWall}
              <Contador/>
            </Card>
          )}
        </pre>
      </div>
    )
  }
}
export default Wall;