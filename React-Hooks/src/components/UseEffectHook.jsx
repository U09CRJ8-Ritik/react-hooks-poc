import React, { useEffect, useState } from 'react'
import axios from "axios";

const UseEffectHook = () => {

    const [data, setData] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
            setData(response.data[1].email);
        })

    }, [])

    return (
        <div>
            <h2>Hello {data}</h2>
        </div>
    )
}

export default UseEffectHook
