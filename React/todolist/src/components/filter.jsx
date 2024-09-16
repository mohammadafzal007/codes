import React ,{useState,useEffect}from 'react'
import items from "./items.js"
import "./filter.css"
const filter = () => {
    const filters = ["Bags", "Watches", "Sports", "Sunglasses"];
    const [filterdata, setfilterdata] = useState(items);
    const [activefilter,setactivefilter]=useState([])
    const handleclick=(e)=>{
        const category=e.target.id;
        console.log(category)
        if(activefilter.includes(category))
        {
        const filters=activefilter.filter((ele)=>ele!==category)
        setactivefilter(filters)
        }
        else{
            setactivefilter([...activefilter,category])
        }
        console.log(activefilter)
    }


    const filterproducts=()=>{
        if(activefilter.length)
        {
            const tempfilters=items.filter((item)=>activefilter.includes(item.category))
            console.log(tempfilters)
            setfilterdata(tempfilters)
        }
        else{
            setfilterdata(items)
        }
    }

    useEffect(()=>{
filterproducts();
    },[activefilter])
    return (
        <>
            <div className="container">
                <div className="filters" onClick={handleclick}>
                    {filters.map((item, idx) => {
                        return (
                            <button className={activefilter.includes(item)?"selected":""} key={idx} id={item}>{item}</button>
                        )
                    })}
                </div>

                <div className="product-list">
                    {
                        filterdata.map((item, idx) => {
                            return (
                                <div className="item" key={idx} id={item.name}>
                                    <p>{item.name}</p>
                                    <p className="category">{item.category}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default filter