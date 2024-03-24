import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Output } from "./link";
import Product from "./Product";
import Home from "./Home";


function Parent_router(){
    return(<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Output/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
    </Routes>
    </BrowserRouter>
    </>)
}

export {Parent_router};