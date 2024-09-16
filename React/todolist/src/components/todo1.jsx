import React ,{useState,useEffect}from 'react'
const getlocalstorage=()=>{
    const getlist=localStorage.getItem("items");
    if(getlist)
    {
        return JSON.parse(getlist)
    }
    else{
        return []
    }
}
const todo1 = () => {
    const [input,setinput]=useState("");
    const [items,setitems]=useState(getlocalstorage())
    const [tooglesubmit,setTooglesubmit]=useState(true)
    const [edititemid,setedititemid]=useState(true)
    const additem=(e)=>{
        const inputdata={id:new Date().getTime().toString(),name:input}
        if (!input)
        {
            alert("no data input")
        }
        else if(!tooglesubmit && input)
        {
            setitems(items.map((ele)=>{
                if(ele.id==edititemid)
                {
                    return {...ele,name:input}
                }
                return ele
                
            })
        )
            setinput("")
        
        }
        else{
            setitems([...items,inputdata]);
            setinput("")
            document.getElementById("in").focus();

        }
        
    }

    const deleteitem=(id)=>{
        console.log(id)
      const updatedlist=items.filter((ele)=>{
         return ele.id !==id
      })
      setitems(updatedlist)
    }

    const edititem=(id)=>{
        const editeditem=items.find((ele)=>{
            return id===ele.id
            })
            console.log(editeditem)
            setinput(editeditem.name)
            setTooglesubmit(false);
            setedititemid(id);
            document.getElementById("in").focus();
    }
const removeall=()=>{
    setitems([])
}
    useEffect(()=>{
        localStorage.setItem("items",JSON.stringify(items));
    },[items])

  return (
    <>
    
    <div>
<h1>To Do App</h1>
<div>
    <form>

    <input id="in" type="text" value={input} onChange={(e)=>setinput(e.target.value)}/>
    {
        tooglesubmit?<button type="submit" onClick={additem}>Add Item</button>:
        <button type="submit" onClick={additem}>Edit Item</button>
    }
    </form>
</div>

<div>
    {
        items.map((ele)=>{
            return (
                <div key={ele.id}>
                    <h3>{ele.name}</h3>
                    <button onClick={()=>edititem(ele.id)}>Edit </button>
                    <button onClick={()=>deleteitem(ele.id)}>Delete </button>
                </div>
            )
        })
    }
</div>
<button onClick={removeall}>Remove All</button>
    </div>
    </>
  )
}

export default todo1;