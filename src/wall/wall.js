import React, { Component } from 'react';
import '../wall/wall.css'
import { Input, Button, Card } from 'react-materialize';
// import firebase from 'firebase';

class Wall extends Component {
  constructor() {
    super();
    this.state = {
      index : '',
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
    let publishWall = this.refs.publish.value;
    console.log(publishWall)

    
    let dataPublish = {
      publishWall
    }

    wall.push(dataPublish);

    this.setState({ wall });
  }

  render() {
    let wall = this.state.wall;
    return (
      <div>
        <Card className='CardRegister' textClassName='black-text'>
          <form>
            <Input s={10} placeholder="Hola WelcomLovers!!" ref="publish" type="text" />
            <div className='center-align'>
              <Button onClick={this.btnPublic}>Publicar</Button>
            </div>
          </form>
        </Card>
        <pre>
          {wall.map((walls, i) =>
            <Card className='red' key ={i} textClassName='black-text'>
              {walls.publish}
              <h6>holi</h6>
            </Card>
          )}
        </pre>
      </div>
    )
  }
}
export default Wall;
