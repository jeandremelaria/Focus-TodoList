import React from 'react';
import {Button, Icon, Row, Col} from 'react-materialize';
import './LandingPageView.css';

import LoginButton from '../../Components/Buttons/loginButton/loginButton';
import BgImage from '../../Components/Bg/Bg';

const landingPageView = () => {
  return (
    <Row>
      <Col s={12} m={9}>
        <BgImage />
      </Col>

      <Col s={12} m={3}>
        <LoginButton className="button__margin--top" name="Google"/>
        <LoginButton className='' name="Facebook"/>
        <LoginButton className='' name="Email"/>
      </Col>
    </Row>
      );
};

export default landingPageView; 