import React, { useState, useEffect } from "react";
import "./todo.css"



const getlocalstorage = () => {
    const list = localStorage.getItem("list")
    console.log(list)
    if (list) {
        return JSON.parse(list);
    }
    else {
        return []
    }
}
const Todo = () => {
    const [items, setitems] = useState(getlocalstorage());
    const [input, setInput] = useState("")
    const [tooglesubmit, setTooglesubmit] = useState(true);
    const [isedititem, setisedititem] = useState(null)
    const additems = () => {
        if (!input) {
            alert("no data available")
        }
        else if (input && !tooglesubmit) {
            setitems(items.map((ele) => {
                if (ele.id === isedititem) {
                    return { ...ele, name: input }

                }
                return ele
            })
            )
            setInput("")
            setTooglesubmit(true)
        }
        else 
        {
            const inputdata = { id: new Date().getTime().toString(), name: input }
            setitems([...items, inputdata]);
            setInput("")
        }
    }

    const delitems = (id) => {
        console.log(id)
        const updateditems = items.filter((ele) => {
            return (ele.id !== id
            )
        })
        setitems(updateditems);
    }

    const edititem = (id) => {
        const edititem = items.find((ele) => {
            return (
                ele.id === id
            )
        })
        setTooglesubmit(false);
        setInput(edititem.name);
        setisedititem(id)
        console.log(edititem);
    }

    const removeallitems = () => {
        setitems([])
    }
    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(items))
    }, [items])
    return (
        <>
            <h1 style={{ 'text-align': 'center' }}>ToDo App</h1>
            <div >
                <div >
                    <hr />
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                    {tooglesubmit ?
                        <button className="addbtn" onClick={additems}>Add item</button> :
                        <button className="editbtn" onClick={additems}>Edit item</button>
                    }
                </div>
                <div >
                    {items.map((ele) => {
                        return (
                            <div key={ele.id} className="todo" >
                                <h3 >{ele.name}</h3>
                                <button className="delbtn" onClick={() => delitems(ele.id)}>Delete</button>
                                <button className="delbtn" onClick={() => edititem(ele.id)}>Edit</button>
                            </div>)
                    })}
                    <button className="rembtn" onClick={removeallitems}>Remove All</button>
                </div>
            </div>

        </>
    )
}


export default Todo;