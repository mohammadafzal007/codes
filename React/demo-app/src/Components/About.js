import React,{useContext} from "react";
import noteContext from "../context/context";


export const About=()=>{

    const a=useContext(noteContext);
    return <h1 > Hello About page {a.name}</h1>;
    
};