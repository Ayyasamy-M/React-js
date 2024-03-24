import React from "react";

import { Link, useNavigate } from "react-router-dom";

function Output(){


    const navigate=useNavigate();
    let change=()=>{
        navigate("./Product.js");
    }
    return(<>
    
    <div>
        <li>
        <Link to="/home">home</Link>
        </li>

        <li>
        <Link to="/product">product</Link>
        </li>
        
        <button onClick={change}></button>

        </div>
    
    
    </>)
}
export {Output};