import React, { forwardRef, useImperativeHandle } from 'react';

export interface Child3Ref {
    sayHello(name: string): void
    name: string
}

const Child3: React.ForwardRefRenderFunction<Child3Ref, any> = (props, ref) => {

    const sayHello = (name: string) => {
        console.log(`Hello ${name}`)
    }

    useImperativeHandle(ref, () => {
        return {
            sayHello,
            name: 'Daniel'
        }
    })

    return (
        <div>Child 3</div>
    )
}

export default forwardRef(Child3);