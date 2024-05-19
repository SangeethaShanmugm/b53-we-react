import React, { useState } from 'react'
import Exp_useEffect from './Exp_useEffect'

function Hooks() {
    // const name = "John"
    const [name, setName] = useState("John")

    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            {/* useState */}
            {/* <input type="text" value={name} onChange={handleChange} />
            <p>Hello {name}</p> */}
            {/* useEffect */}
            <Exp_useEffect  nm={name} setName={setName} />
        </div>
    )
}

export default Hooks