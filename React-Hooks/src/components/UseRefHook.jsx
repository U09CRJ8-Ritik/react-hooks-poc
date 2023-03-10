import React, { useRef, useState } from 'react'

const UseRefHook = () => {

    const [name, setName] = useState("Hello World");

    const inputRef = useRef(null);

    const onClickHandler = () => {
        setName(inputRef.current.value);
        console.log(inputRef.current.value);
        inputRef.current.value='';
        inputRef.current.focus();
    }

    return (
        <div>
            <h1>{name}</h1>
            <input type="text" placeholder='Enter Name' ref={inputRef} />
            <button onClick={onClickHandler}>Change Name</button>
        </div>
    )
}

export default UseRefHook
