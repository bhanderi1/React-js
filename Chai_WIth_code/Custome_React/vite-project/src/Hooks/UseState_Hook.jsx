import React from 'react'

const UseState_Hook = () => {

    let counter = 5

    const addValue = () => {
        console.log("Value Added", Math.random());

    }
    return (
        <div>
            <h2>Counter value: {counter}</h2>

            <button onClick={addValue}>Add Value</button><br />
            <button>remove Value</button>
        </div>
    )
}

export default UseState_Hook
