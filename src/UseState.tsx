import React, { useState } from 'react';

function UseState() {
  const [state, setState] = useState<number>(1)
  
  return (
    <div>
      { state }
    </div>
  );
}

export default UseState;
