import React from "react";
import { useState } from "react";

function Counter () {
    let [counter, setCounter] = useState(1)
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Add 1</button>
            <button onClick={() => setCounter(1)}>Reset</button>
            <button onClick={()=> setCounter(counter - 1)}>Subtract 1</button>
        </div>
    )

}

export default Counter;