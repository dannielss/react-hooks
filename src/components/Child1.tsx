import React from 'react';

const Child1 = ({ slowFunction, value, setValue}: { slowFunction?: string, value: number, setValue(): void }) => {
    console.log('render1')
    return (
        <button style={{ color: slowFunction }} onClick={setValue}>{value}</button>
    )
}

export default React.memo(Child1)