import React from 'react';

const Child2 = ({ value, setValue}: { value: number, setValue(): void }) => {
    console.log('render2')
    return (
        <button onClick={setValue}>{value}</button>
    )
}

export default React.memo(Child2)