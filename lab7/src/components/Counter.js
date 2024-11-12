import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Licznik: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Zwiększ</button>
      <button onClick={() => setCount(count - 1)}>Zmniejsz</button>
    </div>
  );
};

export default Counter;
