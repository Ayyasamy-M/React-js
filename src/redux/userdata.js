import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreamentByAmount, decrement, increamentByAmount, increment, reset } from "./counterSlice";


export function Userdata(){

    // let olddata=[
    //     {price:12,content:"data1"},
    //     {price:13,content:"data2"}];
    //     console.log(olddata);

    const [data,setdata]=useState(0);
    let handleValue=(e)=>{
        setdata(e.target.value);
    };
    let getValue=Number(data)||0;

    const count=useSelector((state)=>state.counter.count);
    const dispatch=useDispatch();
    let resetAll=()=>{
        setdata(0);
        dispatch(reset());
    }


    return(
        <>
        <p>Userdata</p>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
        <br/>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <br/>
        <br/>

        <input type="text" value={data} onChange={handleValue}/>
        <br/>
        <br/>
        <button onClick={()=>dispatch(increamentByAmount(getValue))}>Click+</button>
        <br/>
        <button onClick={()=>dispatch(decreamentByAmount(getValue))}>Click-</button>
        <br/>
        <br/>
             
        <button onClick={()=>dispatch(resetAll)}>Reset</button>
        </>
    );
}