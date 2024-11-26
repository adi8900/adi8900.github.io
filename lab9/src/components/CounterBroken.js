import React from 'react';

const CounterBroken = () => {
  let count = 0;

  const increment = () => {
    count += 1;
    console.log('Aktualny stan licznika:', count);
  };

  return (
    <div>
      <p>Aktualny stan licznika: {count}</p>
      <button onClick={increment}>Zwiększ</button>
    </div>
  );
};

export default CounterBroken;