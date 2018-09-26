import React, { Component } from 'react';
import '../wall/wall.css'
import { Input, Button, Card } from 'react-materialize';
// import firebase from 'firebase';

class Wall extends Component {
  constructor() {
    super();
    this.state = {
      index : '',
      inputVal : '',
      wall: []
    }
    this.btnPublic = this.btnPublic.bind(this)
  }

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

    console.log("Holi > "+event.target.value);
  }

  Edit(i){
    console.log('click')
    let wall = this.state.wall[i];
    console.log(wall)
    this.publishWall = wall.inputVal
    console.log(wall.inputVal);
    this.setState({
      act :1,
      index: i
    })
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
            </Card>
          )}
        </pre>
      </div>
    )
  }
}
export default Wall;