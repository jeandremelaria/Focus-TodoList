import React from 'react';
import {Row, Col} from 'react-materialize';
import './LandingPageView.css';

import LoginButton from '../../Components/Buttons/LoginButton/LoginButton';
import BgImage from '../../Components/Bg/Bg';
import Greeting from '../../Components/Greeting/Greeting';

const landingPageView = () => {
  return (
    <Row>
      <Col s={12} m={9}>
        <BgImage />
      </Col>

      <Col s={12} m={3}>
        <LoginButton/>
        <Greeting />
      </Col>
    </Row>
      );
};

export default landingPageView; 