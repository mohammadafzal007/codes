import React, { useState } from 'react';
import "./dragndrop.css"

const dragndrop = () => {
    const TODO = 'TODO';
    const DOING = 'DOING';
    const DONE = 'DONE';
    const [input, setinput] = useState("");
    const [tasks, settasks] = useState([])
    const [dragtask, setdragtask] = useState(null)
    const [updateitem, setupdateitem] = useState(null)
    const handleclick = (e) => {
        if (e.keyCode === 13) 
        {

         if (updateitem) {

                const obj = {
                    id: updateitem.id,
                    title: input,
                    status: updateitem.status
                }
                const copytask = [...tasks];
                const filterlist = copytask.filter((item) => item.id !== updateitem.id);
                settasks((prevtasks) => [...filterlist, obj])
                setupdateitem(null)
            }
            else{
                
                const obj = {
                    id: Date.now(),
                    title: input,
                    status: 'TODO'
                }
                settasks([...tasks, obj])
            }
            setinput("")
        }

    }

    const handleondrag = (e, task) => {
        setdragtask(task);

    }

    const handledragndrop = (status_) => {
        settasks(tasks.map((item) => {
            if (item.id === dragtask.id) {
                return { ...item, status: status_ }
            }
            return item
        }))
        setdragtask(null)
    }



    const handleondrop = (e) => {
        const status = e.target.getAttribute('data-status')
        console.log("Dropping", status)
        if (status == TODO) {
            handledragndrop(TODO)
        }
        else if (status == DOING) {
            handledragndrop(DOING)
        }
        else if (status == DONE) {
            handledragndrop(DONE)
        }
    }

    const handleondragover = (e) => {
        e.preventDefault();
    }

    const deletetask = (task) => {
        const updatetasks = tasks.filter((item) => {
            return item.id !== task.id
        })
        settasks(updatetasks)
    }

    const edittask = (task) => {
        setinput(task.title)
        setupdateitem(task)
        console.log(task)
        console.log(updateitem)
    }

    // console.log(dragtask)
    return (
        <div className="container">
            <h1>Task Manager</h1>
            <hr />
            <div >
                <input type="text" value={input} onChange={(e) => setinput(e.target.value)} onKeyDown={handleclick} />
            </div>
            <div className="board">
                <div className="todo"
                    data-status={TODO}
                    onDrop={handleondrop}
                    onDragOver={handleondragover}>
                    <h2 className="todo-col">Todo</h2>
                    {
                        tasks.length && tasks.map((task) => {
                            return (
                                task.status === "TODO" &&
                                <div className="task-items" draggable key={task.id} onDrag={(e) => handleondrag(e, task)}>
                                    {task.title}
                                    <div className="btns">
                                        <span className="btn" onClick={() => edittask(task)}>✏️</span>
                                        <span className="btn" onClick={() => deletetask(task)}>🗑️</span>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="doing"
                    data-status={DOING}
                    onDrop={handleondrop}
                    onDragOver={handleondragover}>
                    <h2 className="doing-col" data-status={DOING}>Doing</h2>
                    {
                        tasks.length && tasks.map((task) => {
                            return (
                                task.status === "DOING" &&
                                <div draggable className="task-items" key={task.id} onDrag={(e) => handleondrag(e, task)} >{task.title}
                                
                                     <div className="btns">
                                        <span className="btn" onClick={() => edittask(task)}>✏️</span>
                                        <span className="btn" onClick={() => deletetask(task)}>🗑️</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="done"
                    data-status={DONE}
                    onDrop={handleondrop}
                    onDragOver={handleondragover}>
                    <h2 className="done-col">Done</h2>
                    {
                        tasks.length && tasks.map((task) => {
                            return (
                                task.status === "DONE" &&
                                <div draggable className="task-items" key={task.id} onDrag={(e) => handleondrag(e, task)} >{task.title} 
                                    <div className="btns">
                                        <span className="btn" onClick={() => edittask(task)}>✏️</span>
                                        <span className="btn" onClick={() => deletetask(task)}>🗑️</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default dragndrop