import React,{useState,useEffect} from 'react'
import "./faqques.css"
const Faqques = ({ ele, index }) => {
    const [isshow,setisshow]=useState(false);
useEffect(()=>{

    if (index==0)
    {
        setisshow(true)
    }
},[])
const handleclick=()=>{
setisshow((isshow)=>!isshow)
}

    return (
        <>

            <div className="container">
                <div className="question">
                    <button className={isshow?"arrow":""} onClick={handleclick}> > </button>
                    <h3 className="">{ele.question}</h3>
                </div>
                {isshow &&
                    <div className="answer">
                    {ele.answer}
                </div>}
            </div>
        </>
    )
}

export default Faqques;