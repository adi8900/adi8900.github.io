import React, { useState } from 'react';

const UploadFile = () => {
  const [fileName, setFileName] = useState('');

  const uploadFile = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : '');
  };

  return (
    <div>
      <input type="file" onChange={uploadFile} />
      {fileName && <p>Wybrany plik: {fileName}</p>}
    </div>
  );
};

export default UploadFile;