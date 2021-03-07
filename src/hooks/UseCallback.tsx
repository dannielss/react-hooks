import React, { useState, useCallback, useMemo } from 'react';
import Child1 from '../components/Child1';
import Child2 from '../components/Child2';

const UseCallback: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrement1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1])

  const handleIncrement2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2])

  return (
    <div>
      <Child1 value={count1} setValue={handleIncrement1} />
      <Child2 value={count2} setValue={handleIncrement2} />
    </div>
  )
}

export default UseCallback;
