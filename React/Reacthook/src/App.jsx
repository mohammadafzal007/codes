import React,{useReducer,useState} from 'react'

const initialstate=[];
const reducer=(state,action)=>{
  switch(action.type){
    case 'Add':
      console.log(state,action)
      return [...state,action.payload]
    case 'Delete':
      console.log(state,action)
      return state.filter((item)=>item.id!==action.payload)
      
    }
}
const App = () => {
  const [items,dispatch]=useReducer(reducer,initialstate);
  const [input,setinput]=useState("");
  
  const additem=()=>{
    const newitem={id:new Date().getTime().toString(),name:input}
    dispatch({type:'Add',payload:newitem})
    setinput("")
    
  }
  const removeitem=(id)=>{
    dispatch({type:'Delete',payload:id})
  }
 
  return (
    <>
    <div>
  <input type="text" value={input} onChange={(e)=>setinput(e.target.value)}/>
  <button onClick={additem}>Add</button>
    </div>
    <div>
      {items.map((item)=>{
        return (<div key={item.id}>
          <h1>{item.name}</h1>
          <button onClick={()=>removeitem(item.id)}>Delete</button>
        </div>)
      })}
    </div>
    </>
  )
}

export default App