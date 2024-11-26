import React from 'react';

const Greeting = (props) => {
  return (
    <div className="greeting-container">
      <h1>Witaj, {props.name}!</h1>
      <p>Miło cię widzieć.</p>
    </div>
  );
};

export default Greeting;
