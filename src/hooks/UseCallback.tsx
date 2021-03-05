import React, { useState, useCallback } from 'react';

const UseCallback: React.FC = () => {
  const [state, setState] = useState(1);
  const [state2, setState2] = useState(false);

  const callback = () => {
    setState2(!state2)
  }
  const double = useCallback(() => {
    const x = state * 2
    setState(x)
  }, [state])

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={double}>Dobrar</button>
      <button onClick={callback}>Teste</button>
    </div>
  );
}

export default UseCallback;
