import React, { useState, useCallback, useMemo } from 'react';
import Child1 from '../components/Child1';
import Child2 from '../components/Child2';

const UseMemo: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrement1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1])

  const handleIncrement2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2])

  const slowFunction = useMemo(() => {
    for(let i = 0; i < 10 ** 9; i+= 1) {
      i += 1;
      i -=1;
    }

    if(count1 % 2 == 0) {
      return 'red';
    }

    if(count1 % 3 == 0) {
      return 'blue';
    }

    if(count1 % 4 == 0) {
      return 'green'
    }

    return 'orange'
  }, [count1])

  return (
    <div>
      <Child1 slowFunction={slowFunction} value={count1} setValue={handleIncrement1} />
      <Child2 value={count2} setValue={handleIncrement2} />
    </div>
  )
}

export default UseMemo;
