import React, { useState } from 'react'

const ChildComponent = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <button onClick={() => {
                setToggle(!toggle);
            }}>
                Button From Child
            </button>

            {toggle && <h1>Hello World</h1>}
        </div>
    )
}

export default ChildComponent
