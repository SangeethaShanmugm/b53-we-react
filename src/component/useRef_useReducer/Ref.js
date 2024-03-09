import React, { useRef } from "react";

export function Ref() {
    const inputRef = useRef();
    const count = useRef(0)

    const handleInputChange = () => {
        console.log("handleInputChange", inputRef.current.value)
    }

    const handleSubmit = () => {
        console.log("handleSubmit", inputRef.current.value)
    }

    const handleClick = () => {
        count.current += 1
        console.log("Inc count", count.current)
    }
    return (
        <div>
            <h1>Ref</h1>
            <input type="text" ref={inputRef} onChange={handleInputChange} />
            <button onClick={handleSubmit}>getValue</button>

            <p>Count: {count.current}</p>
            <button onClick={handleClick}>Increment</button>

        </div>
    );
}
