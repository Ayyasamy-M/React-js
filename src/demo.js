import React from "react";
import './App.css';


function Parent(){
return(
<>
<div id="demo">hello</div>
<Child/>
</>
); 
}

function Child(){
    return(
        <>
        <div>child</div>
        <Child1/>
        </>
    )
}

function Child1(){
    return(
        <>
        <div>Child1</div>
        </>
    )
}

export { Parent};