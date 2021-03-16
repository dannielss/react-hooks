import React, { useEffect, useLayoutEffect, useState } from 'react';

const UseLayoutEffect = () => {
    const [state, setState] = useState('');
    
    useEffect(() => {
        setState('Daniel de Sousa')
    }, [])
    
    useLayoutEffect(() => {
        setState('Daniel')
    }, [])


    return (
        <div>Olá {state}</div>
    )
}

export default UseLayoutEffect;