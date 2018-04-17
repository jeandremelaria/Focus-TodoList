import React from 'react';
import '../Greeting/Greeting.css';
import Parser from 'html-react-parser';

const Greeting = () => {
  //Variables
  const title = 'Welcome to <span className="brand">Fo</span><em>cus</em>';
  const greetingSubtitle = 'Use Focus to track your to-do’s & manage projects';

  return (
    <div className="greetingBackground">
        <h5>{Parser(title)}</h5>
        <p>{greetingSubtitle}</p>
    </div>
  );
}

export default Greeting;