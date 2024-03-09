import React, { useState } from 'react'

function Counter() {

    const [data, setData] = useState(0)
    return (
        <div className="App">
            <h1>Counter App</h1>
            <h1>{data}</h1>
            <button style={{ border: "2px solid green", background: "none", color: "green" }} onClick={() => setData(data + 1)}>+</button>
            <button style={{ border: "2px solid blueviolet", background: "none", color: "blueviolet" }} onClick={() => setData(0)}>Reset</button>
            <button style={{ border: "2px solid red", background: "none", color: "red" }} onClick={() => setData(data - 1)}>-</button>
        </div>
    )
}

export default Counter