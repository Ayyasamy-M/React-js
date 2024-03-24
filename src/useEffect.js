import React,{useEffect, useState} from "react";


function Useeffect(){

    const[values,setValues]=useState([]);
    console.log(values);

    useEffect(()=>{

        console.log("hello");
       fetch("https://jsonplaceholder.typicode.com/users")
       .then ((res)=>res.json())
        .then(data=>{
            console.log(data)
        setValues(data);
        });
    },[]);
    return(<>
    <div>{values.map((v)=>(
        <p key={v.id}>{v.name}<br/>
        {v.username}<br/>
        </p>))}</div>
    </>)
}

export {Useeffect};