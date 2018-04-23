import React, {Component} from 'react';
import {Button} from 'react-materialize';
import './loginButton.css';

class LoginButton extends Component {
  state = {
    buttons:[
      {name:'Google', class:'buttonGoogle--color button button__margin--top'},
      {name:'Facebook', class:'buttonFacebook--color button'},
      {name:'Email', class:'buttonEmail--color button button__margin--bottom'}
    ]
  }
  render() {
    const button = this.state.buttons;

    return (
    <div>
      <Button waves='light' className={button[0].class}>{button[0].name}</Button>
      <Button waves='light' className={button[1].class}>{button[1].name}</Button>
      <Button waves='light' className={button[2].class}>{button[2].name}</Button>
    </div>
  );
  }
}

export default LoginButton;
