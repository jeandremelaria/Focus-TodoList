import React from 'react';
import {Button} from 'react-materialize';
import './loginButton.css';

const loginButton = (props) => {
  
  let buttonColor = '';
  props.name == 'Google' ? buttonColor = 'buttonGoogle--color' : '';
  props.name == 'Facebook' ? buttonColor = 'buttonFacebook--color' : '';
  props.name == 'Email' ? buttonColor = 'buttonEmail--color' : '';


  console.log(props);
return (
  <Button waves='light' className={buttonColor}>{props.name}</Button>
);
};




export default loginButton;