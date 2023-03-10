import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = "Hello World";
    }, [])

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, [])


    return (
        <div>
            <h1><input type="text" value="This is a useLayoutEffect Hook" ref={inputRef} /></h1>
        </div>
    )
}

export default UseLayoutEffect
