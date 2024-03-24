import React, { useState } from "react";

function Usestate(){

const[data,setdata] =useState(0);



let change=()=>{
    console.log("hello")
};

    return(
        <>
        <p>usestate</p>
        <hi>{data}</hi>
        <button onClick={()=>setdata(data+1)}>increment </button>
        <button onClick={()=>setdata(data-1)}>decrement </button>
        <Props_data name="ayya" age={23} find= {data}/>
        <Props_data_1 datas={data}/>
        </>
    );
}


function Props_data(props){

    return(
        <>
        <p>Props_data</p>
        <hi>{props.find}</hi>
        </>
    )
}

function Props_data_1(props){

    const[values,setvalues]=useState("");
    // const[find,setfind]=useState([{search:values}]);
    return(
        <>
        <p>Props_data</p>
        <hi>{props.datas}</hi>

        <input type="text" placeholder="enter your name" onChange={(e)=>{
            console.log(e.target.value);
            setvalues(e.target.value);    
                }}
                value={values}
            />

        <h1>{values}</h1>
        </>
    )
}

export {Usestate};

// function Props_data(name,dob,age){

//     return(
//         <>
//         <p>Props_data</p>
//         </>
//     )
// }


// Props_data("susee",12,22);