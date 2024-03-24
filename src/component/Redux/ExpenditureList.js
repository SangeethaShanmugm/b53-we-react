import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { deleteExp } from "./expSlice"

function ExpenditureList() {
    //useSelector((state) =>state.reducerName.expSliceName)
    //useSelector((state) =>state.expSliceName.stateName)
    const dispatch = useDispatch()
    const expenditureData = useSelector((state) => state.myExpenditure.expenditure)
    console.log("expenditureData", expenditureData)

    const deleteExpenditure = (id) => {
        dispatch(deleteExp(id))
    }
    return (
        <div>ExpenditureList
            {expenditureData.map((item) => (
                <li key={item.id}>{item.category}
                    <button onClick={() => deleteExpenditure(item.id)}>Delete</button></li>
            ))}
        </div>
    )
}

export default ExpenditureList