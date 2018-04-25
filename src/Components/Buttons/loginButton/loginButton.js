import React, {Component} from 'react';
import {Button} from 'react-materialize';
import './LoginButton.css';

class LoginButton extends Component {
  state = {
    buttons:[
      {id:'google', name:'Google', class:'buttonGoogle--color button button__margin--top'},
      {id:'facebook', name:'Facebook', class:'buttonFacebook--color button'},
      {id:'email', name:'Email', class:'buttonEmail--color button button__margin--bottom'},
    ]
  }
  render() {
    const button = this.state.buttons;
    return (
    <div>
      {this.state.buttons.map(button => 
        <Button waves='light' className={button.class}>{button.name}</Button>
      )}
    </div>
  );
  }
}

export default LoginButton;
