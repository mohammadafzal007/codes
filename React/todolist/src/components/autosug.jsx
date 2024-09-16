import React, { useState, useEffect } from 'react';
import "./autosug.css"

const Autosug = () => {
//states
    const [food, setFood] = useState("");
    const [items, setitems] = useState([])
    const [bucket, setbucket] = useState([])

    //data fetch from api
    const fetch_data = async (food) => {
        const url = `https://api.frontendeval.com/fake/food/${food}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setitems(data)

    }
//first render
    useEffect(() => {
        if (food.length >= 2) {
            fetch_data(food);
        }
    }, [food])

//push item to dropdown
    const pushitem = (idx) => {
        console.log(items[idx])
        const inputdata = { id: new Date().getTime().toString(), name: items[idx], isdone: false }
        setbucket([...bucket, inputdata]);
        setFood("")
    }

    //create strikethrough now completed 
    const strikethrough = (idx) => {

        setbucket(bucket.map((ele) => {
            if (idx === ele.id) {
                return { ...ele, isdone: !ele.isdone }
            }
            return ele
        }))

    }

    //delete from bucket
    const deleteitem = (idx) => {
        const updatedbucket = bucket.filter((ele) => {
            return ele.id !== idx
        })
        setbucket(updatedbucket)
    }
    return (
        <>
            <h1 style={{ 'text-align': 'center' }}>Auto suggestion App</h1>
            <hr/>
            <div className="container">
                <div className="input">
                    <input type="text" value={food} placeholder="Search Here ...." onChange={(e) => setFood(e.target.value)} />
                </div>
                {food.length >= 2 ?
                    <div className="suggestbox">
                        {
                            items.map((ele, ind) => {
                                return (
                                    <div className="box" key={ind} onClick={() => pushitem(ind)}>{ele}</div>
                                )
                            })
                        }
                    </div> : null
                }
                <div className="bucket">
                    {bucket.map((ele) => {
                        return (
                            <div className="product" key={ele.id}>
                                <button onClick={() => strikethrough(ele.id)}>✔️</button>
                                <div className={ele.isdone ? "strikethrough1" : ""} > {ele.name}</div>
                                <button onClick={() => deleteitem(ele.id)}>❌</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Autosug;