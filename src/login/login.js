import React, { Component } from 'react';
import '../login/login.css'
import Logo from './logo'
import fire from '../config/fire'
import { Row, Col, Container } from 'react-grid-system'
import { Input, Button, Card, Icon } from 'react-materialize';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error);
    });
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).then((u) => { console.log(u) })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <Container className='Login'>
        <Row >
          <Col sm={4}>
          </Col>
          <Col sm={4}>
            <Card className='CardRegister' textClassName='black-text'>
              <form>
                <Logo />
                <Input s={10} value={this.state.email} onChange={this.handleChange} type="email" name="email" ><Icon>contact_mail</Icon></Input>
                <Input s={10} value={this.state.password} onChange={this.handleChange} type="password" name="password" ><Icon>lock_outline</Icon></Input>
                <div className='center-align'>
                <Button className='btnRegister center-align' type="submit" onClick={this.login}>Login</Button>
                </div>
                <div className='center-align'>
                <h6>¿No tienes cuenta?</h6>
                <Button className='center-align' onClick={this.signup}>Registrate</Button>
              </div>
              </form>
            </Card>     
          </Col>
          <Col sm={4}>
          </Col>
        </Row>
</Container>
    );
  }
}
export default Login;