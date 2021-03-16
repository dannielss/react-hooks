import React, { useRef } from 'react';
import Child3, { Child3Ref } from '../components/Child3';

const UseImperativeHandle = () => {
    const ref = useRef<Child3Ref>(null);

    const hello = () => {
        ref.current?.sayHello(ref.current?.name);
    }

    return (
        <>
            <Child3 ref={ref}/>
            <button onClick={hello}>Clique aqui!</button>
        </>
    )
}

export default UseImperativeHandle;