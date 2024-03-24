import React, { useRef } from 'react'
import { addExp } from './expSlice'
import { useDispatch } from 'react-redux'

function Expenditure() {
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    const addNewExp = () => {
        console.log(inputRef.current.value)
        const newExp = inputRef.current.value
        dispatch(addExp(newExp))
    }

    return (
        <div style={{
            textAlign: "center",

        }} >
            <input type="text" ref={inputRef} />
            <button onClick={addNewExp}>Add Exp</button>
        </div>
    )
}

export default Expenditure