import React, { useDebugValue, useEffect, useState } from 'react';

const useIsOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useDebugValue(isOnline ? 'Online' : 'Offline');

    const goOnline = () => setIsOnline(true);

    const goOffline = () => setIsOnline(false);

    useEffect(() => {
        window.addEventListener("online", goOnline);
        window.addEventListener("offline", goOffline);

        return () => {
        window.removeEventListener("online", goOnline);
        window.removeEventListener("offline", goOffline);
        };
    }, []);

    return isOnline;
}
const UseDebugValue = () => {
    const isOnline = useIsOnline();    

    console.log(isOnline)
    return (
        <div>Olá</div>
    )
}

export default UseDebugValue;