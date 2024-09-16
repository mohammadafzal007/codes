import React ,{useEffect,useState}from 'react';
import "./imagecarousel.css"

const imagecarousel = () => {
const [images,setimages]=useState([])
const [index,setindex]=useState(0)

const handleclick=(dir)=>{
    console.log(index)
    const lastindex=images.length-1;
  if(dir=="left")
  {
    if(index===0)
    {
        setindex(lastindex)
    }
    else {

        setindex((index) =>index-1);
    }
  }
  else if(dir==='right')
  {
    if(lastindex===index)
    {
        setindex(0)
    }
    else{
        setindex((index)=>index+1)
    }
  }
}

    const fetchimages= async ()=>{
        const url="https://www.reddit.com/r/aww/top/.json?t=all"
        const res= await fetch(url);
        const result= await res.json()
        const data=await result.data.children;
        console.log(data)
        const list=data.filter((item)=>
                                  item.data.url_overridden_by_dest.includes(".jpg")).map
                                  ((item)=>item.data.url_overridden_by_dest);
        setimages(list)
        
        console.log("list",list)
        console.log("Images",images)
        
    }
    useEffect(()=>{
fetchimages();
    },[])
  return (
<>
            {/* <h1 style={{'text-align':'center'}}>Image Carousel</h1> */}
        <button className="left" onClick={()=>handleclick("left")}>⬅️</button>
           <img src={images[index]} alt="not found"/>
        <button className="right" onClick={()=>handleclick("right")}>➡️</button>
</>
  
  )
}

export default imagecarousel