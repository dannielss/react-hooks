import React, { useEffect, useRef } from 'react';

const UseRef: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focus = () => {
    inputRef.current?.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={focus}>Foco</button>
    </div>
  );
}

export default UseRef;
