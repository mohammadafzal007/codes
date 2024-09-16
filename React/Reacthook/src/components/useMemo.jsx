import React,{useState,useMemo} from "react";
const nums=new Array(30_000_000).fill(0).map((_,i)=>{
  return {index:i,
  ismagical:i===29_000_000
  }
})
const App=()=>{
  const [count,setCount]=useState(0);
  const [numbers,setNumbers]=useState(nums);
  // const magical=numbers.find((item)=>item.ismagical===true)
  const magical=useMemo(()=>numbers.find((item)=>item.ismagical===true),[])

  console.log("rerender")

  return (
  <>
  <h1>Magical number {magical.index}</h1>
  <h1>{count}</h1>
  <button onClick={()=>setCount(count+1)}>Click Me</button>
  </>
  )
}

export default App;