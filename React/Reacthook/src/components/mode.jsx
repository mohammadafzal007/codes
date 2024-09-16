import React,{useState} from 'react';


const section = () => {
    const [darkmode,setdarkMode]=useState(false);
    console.log(darkmode)
    const setdarkmode=()=>{
        if(darkmode==false)
        {
            setdarkMode(true)
            document.body.style.background="#4E4B51";
        }
        else{
            setdarkMode(false)
            document.body.style.background="white";

        }
    }
  return (
    <div>
        <button  className="">click</button>
        {/* <i className="fa-solid {mode?'fa-sun':'fa-moon'}"></i> */}
        <button onClick={setdarkmode} className={`fa-solid ${darkmode?"fa-sun":" fa-moon"}`} style={{width:'30px',padding:'5px'}}></button>

    </div>
  )
}

export default section