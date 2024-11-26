import React, { useReducer } from 'react';

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Licznik z Reducer: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Zwiększ</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Zmniejsz</button>
    </div>
  );
};

export default Reducer;
