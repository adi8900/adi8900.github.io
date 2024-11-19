import React, { useState } from 'react';

const LoadDataFromJson = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLoadData = () => {
    setLoading(true);
    fetch('/data.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={handleLoadData}>Załaduj dane</button>
      
      {loading && <p>Ładowanie danych...</p>}  {}
      
      {data && (
        <div>
          <h2>Załadowani użytkownicy:</h2>
          <ul>
            {data.users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LoadDataFromJson;
