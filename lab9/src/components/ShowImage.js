import React, { useState } from 'react';

const ShowImage = () => {
  const [imageVisible, setImageVisible] = useState(false);

  const showImage = () => {
    setImageVisible(true);
  };

  return (
    <div>
      <button onClick={showImage}>Pokaż obraz</button>
      {imageVisible && <img src="/logo192.png" alt="Logo" />}
    </div>
  );
};

export default ShowImage;