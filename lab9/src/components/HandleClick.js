import React from 'react';

const HandleClick = () => {
  const handleClick = () => {
    alert('Kliknięto przycisk!');
  };

  return (
    <div>
      <button onClick={handleClick}>Kliknij mnie</button>
    </div>
  );
};

export default HandleClick;