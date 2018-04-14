import React from 'react';
import '../Greeting/Greeting.css';

const Greeting = () => {
  return (
    <div className="greetingBackground">
        <h5>Welcome to <span className="brand">Fo</span><em>cus</em></h5>
        <p>Use Focus to track your to-do’s &amp; manage projects</p>
    </div>
  );
}

export default Greeting;