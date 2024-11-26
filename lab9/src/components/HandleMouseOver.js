import React, { useState } from 'react';

const HandleMouseOver = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  const style = {
    margin: '20px',
    padding: '10px',
    border: '1px solid',
    backgroundColor: hovered ? 'lightblue' : 'white',
    cursor: 'pointer',
    color: hovered ? 'darkblue' : 'black',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={style}
    >
      Najedź myszką, by zmienić kolor tła i tekstu!
    </div>
  );
};

export default HandleMouseOver;
