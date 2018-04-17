import React from 'react';
import {Button} from 'react-materialize';
import propTypes from 'prop-types';
import './loginButton.css';

const loginButton = (props) => {
  
  const name = props.name;
  let buttonColor = '';

  if(name === 'Google') {
     buttonColor = 'buttonGoogle--color button button__margin--top';
  }

  if(name === 'Facebook') {
    buttonColor = 'buttonFacebook--color button';
  }

  if(name === 'Email') {
    buttonColor = 'buttonEmail--color button button__margin--bottom';
  }

  return (<Button waves='light' className={buttonColor}>{name}</Button>);
};

export default loginButton;

// Validatig Proptypes
loginButton.propTypes = {
  name: propTypes.string
};