import React, { Component, useState } from 'react'

export default function DemoUseState() {
    const [count, setCount] = useState(1);
    const handleIncrease = () => {
        setCount((prev) => {
            return prev + 1
        })
        setCount((prev) => {
            return prev + 1
        })
        setCount((prev) => {
            return prev + 1
        })
    }
    return (
        <div>
            DemoUseState
            <h4>Count:{count}</h4>
            <button onClick={handleIncrease}>Increase</button>
            <hr />
            <Child
                message={message}
                onChangeMessage={(msg) => setMessage(msg)}
            />
        </div>
    )
}
