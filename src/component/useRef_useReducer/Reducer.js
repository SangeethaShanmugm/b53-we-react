import React, { useReducer } from "react";

function Reducer() {
    //useReducer(()=>{},{define states})
    //action  => to be dispatch
    const [state, dispatch] = useReducer((state, action) => {
        //action Types => type, value
        if (action.type === "nameUpdate") {
            return {
                ...state,
                name: action.value
            }
        }
        if (action.type === "updatePass") {
            return {
                ...state,
                password: action.value
            }
        }
        if (action.type === "counterInc") {
            return {
                ...state,
                btn: state.btn + 1
            }
        }
        if (action.type === "counterDec") {
            return {
                ...state,
                btn: state.btn - 1
            }
        }

    },
        {
            //define states
            name: "Jack",
            btn: 1,
            password: "12345",
        });

    return (
        <div>
            <h1>Reducer</h1>
            <p>{state.name}</p>
            <p>Counter: {state.btn}</p>
            <p>{state.password}</p>
            {/* name */}
            <button onClick={() => dispatch({ type: "nameUpdate", value: "John" })}>GetValue</button>
            {/* password */}
            <input type="text" onChange={(e) => dispatch({ type: "updatePass", value: e.target.value })} />
            {/* btn */}
            <button onClick={() => dispatch({ type: "counterInc" })}>Increment</button>
            <button onClick={() => dispatch({ type: "counterDec" })}>Decrement</button>
        </div>
    );
}

export default Reducer;
