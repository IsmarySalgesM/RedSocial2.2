import React, { Component } from 'react';
import '../wall/wall.css'
import { Input, Button, Card, Icon } from 'react-materialize';
import Contador from './contador';
import ImagenWall from './imagenWall'
// import firebase from 'firebase';

class Wall extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: '',
      act: 0,
      index: '',
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
      publishWall: publishWall
    }

    this.setState({
      ...this.state, //copiar el estado ... al nuevo objeto
      wall: this.state.wall.concat(dataPublish)
    });
  }

  onChange(name, event) {
    this.setState({
      ...this.state,
      [name]: event.target.value
    });
  }

  Delete(i) {
    console.log('hey')
    let wall = this.state.wall;
    wall.splice(i, 1);
    this.setState({
      wall: wall
    })
  }

  render() {
    let wall = this.state.wall;
    return (

      <div className='wallUser'>
        <Card className='CardRegister' textClassName='black-text'>
          <p><ImagenWall/> Hola, Maria! Bienvenida</p>
          <form>
            <Input s={10} placeholder="Hola WelcomLovers!!" onChange={e => this.onChange("inputVal", e)} type="text" />
            <div className='center-align'>
              <Button onClick={this.btnPublic}>Publicar</Button>
            </div>
          </form>
        </Card>
        <pre>
          {wall.map((walls, i) =>
            <Card className='cardWall' key={i} textClassName='black-text'>
              <h6>{walls.publishWall}</h6>
              <div>
                <Contador />
              </div>
              <div className="iconDelete">
                <a onClick={() => this.Delete(i)}><Icon>delete</Icon></a>
              </div>
              <div className="iconEdit">
                <a onClick={() => this.Edit(i)}><Icon>border_color</Icon></a>
              </div>
            </Card>
          )}
        </pre>
      </div>
    )
  }
}
export default Wall;