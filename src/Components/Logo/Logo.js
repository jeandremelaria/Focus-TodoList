import React from 'react';
import logo from '../../assets/logo/logo.svg';
import './Logo.css';

const Logo = () => {
   return (
    <div>
      <img alt="Focus Logo" src={logo} className="img__logo--width" />
    </div>
  );
}

export default Logo;