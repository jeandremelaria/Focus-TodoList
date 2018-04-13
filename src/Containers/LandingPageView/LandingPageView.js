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

      <Col s={12} m={3} className='green'>
       {/* <LoginButton /> */}
        <div>Google button</div>
        <div>Facebook button</div>
        <div>Email button</div>
      </Col>
    </Row>
      );
};

export default landingPageView; 