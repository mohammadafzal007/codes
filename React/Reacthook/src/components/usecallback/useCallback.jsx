import React ,{useState,useCallback} from "react";
import List from "./components/usecallback/List";



const App=()=>{
  const [count,setCount]=useState(0);

  //her our child component is also render because count when state change the whole app.jsx render from starting
//and the js understand the changeword function is change 
 //thats why our list component is also render again and again.
//  to avoid this we use useCallback();
  // const changeword=()=>{              
  //        return "word"                  
  // }

  // now our list component is not render until we do not provide any dependcy to the useCallback function 
  // const changeword=useCallback(()=>"word",[])     
  
  
  // like we provide a count to the function then it render again but when we want not at every render 
  //now in this we provide count to changeword but our component not render so we provide the dependency count in
  // useCallback() function 
  // const changeword=useCallback(()=>{return "word : " + count},[]) 
  

  // so we add count to our dependencies now our list component render when the count state change not at every render 
  const changeword=useCallback(()=>{return "word : " + count},[count]) 

  return (   
    <>
    <List changeword={changeword}/>
    <div>
<h1>Count:{count}</h1>
<button onClick={()=>setCount(()=>count+1)}>Click Me</button>
    </div>
    </>
  )
}

export default App;