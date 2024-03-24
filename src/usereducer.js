import React, { useReducer } from "react";

function Usereducer( state,action){
switch (action.type) {
    case "increment":
        return{count:state.count+1};

        case "decrement":
        return{count:state.count-1};
    default:
        break;
}

}
function Parent_reduce(){

    const[state,dispatch]=useReducer(Usereducer,{count:0});

    return(
        <>
        <p>reducer</p>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
        </>
    );
}

export{Parent_reduce};