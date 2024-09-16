import React,{useContext} from "react";
import noteContext from "../context/context";
export const Contact=()=>{
    const a=useContext(noteContext);
    return  <h1>Hello contact page {a.salary}</h1>;
};