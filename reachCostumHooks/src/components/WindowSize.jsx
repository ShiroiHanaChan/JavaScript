import React, {useEffect, useState} from 'react';

function WindowSize() {

    function getSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }

    const [size, setSize] = useState(getSize())

    useEffect(() => {
        window.addEventListener('resize', handleResize, false);

        console.log(size.width)
        function handleResize() {
            setSize(getSize())
        }

        return () => {
            // Cleanup function, sempre executada quando antes da componente ser destruída e antes de cada render da componente
            window.removeEventListener('resize', handleResize, false);
        }
    }, []);
    // Array de dependências do Effect.

    return (
        <>
            <p>Width: {size.width}, Height: {size.height}</p>
        </>
    );
}

export default WindowSize;
