import React, { useState } from 'react';

const ChangeStyle = () => {
  const [style, setStyle] = useState({ color: 'black', fontSize: '16px' });

  const changeStyle = () => {
    setStyle((prevState) => ({
      ...prevState,
      color: prevState.color === 'black' ? 'blue' : 'black',
      fontSize: prevState.fontSize === '16px' ? '20px' : '16px',
    }));
  };

  return (
    <div>
      <button onClick={changeStyle}>Zmień styl</button>
      <p style={style}>Tekst zmieniający styl!</p>
    </div>
  );
};

export default ChangeStyle;
