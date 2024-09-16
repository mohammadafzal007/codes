import React, { useRef, useState,useId } from "react";
import Section from "./mode";
const App = () => {
    const inputref = useRef(null);
    const [count, setCount] = useState(0)
    const pid=useId();
    console.o
console.log("component rerender")
    const focusinput = () => {
        inputref.current.style.border = "2px solid red";
    }

    const changeagainborder=()=>{
        inputref.current.style.border="2px solid blue"
    }
    return (
        <>
            <div>
                <input ref={inputref} type="text" />
                <button onClick={focusinput} onDoubleClick={changeagainborder}>Click Me to change border color</button>
                <button onClick={() => setCount(count + 1)}>Click Me to increment count</button>
                <h1>{count}</h1>

              <Section />
            </div>


        </>
    )
}


export default App;