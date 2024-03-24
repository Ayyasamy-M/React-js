import React, { createContext, useContext, useState } from "react";

const values=createContext("");

function Context_fun(){

    const[data,setdata]=useState("welcome")
    return(<>
    <values.Provider value={data}>
        
        <Fun_1/>
    <Fun_2/>

    </values.Provider>
    </>)
}

function Fun_1(){

    const context_value=useContext(values)
    return(<>
    <h1>{context_value}</h1>
    <p>Fun_1</p>
    </>)
}
function Fun_2(){
    const context_value=useContext(values)

    return(<>
    <h2>{context_value}</h2>
    <p>Fun_2</p>
    </>)
}
export {Context_fun};