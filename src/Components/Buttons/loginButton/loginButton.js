import React from 'react';
import {Button} from 'react-materialize';
import './loginButton.css';

const loginButton = (props) => {

  let buttonColor = '';
  props.name === 'Google' ? buttonColor = 'buttonGoogle--color button button__margin--top' : '';
  props.name === 'Facebook' ? buttonColor = 'buttonFacebook--color button' : '';
  props.name == 'Email' ? buttonColor = 'buttonEmail--color button' : '';

  return (<Button waves='light' className={buttonColor}>{props.name}</Button>);
};

export default loginButton;