import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Skup" />
      <button onClick={focusInput}>Skup na polu</button>
    </div>
  );
};

export default FocusInput;
