import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Posty:</h2>
      {data ? (
        <ul>
          {data.slice(0, 5).map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>Ładowanie...</p>
      )}
    </div>
  );
};

export default FetchData;
