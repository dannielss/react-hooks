import React, { useEffect } from 'react';

const UseEffect = () => {

  useEffect(() => {
    document.title = 'new title';
  }, [])

  return <div />;
}

export default UseEffect;
