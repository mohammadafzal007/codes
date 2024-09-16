import React ,{useState} from 'react';
import "./modalshow.css"
import Modal from './Modal';

const modalshow = () => {
    const[showmodal,setshowmodal]=useState(false);
    const [acceptoffer,setacceptoffer]=useState(false)
    const handleclick=()=>{
        setshowmodal(true)
    }
    const closeoffer=()=>{
        setshowmodal(false)
    }
    
    const acceptedoffer=()=>{
        setacceptoffer(true);
        setshowmodal(false)
    }

    const handlescreen=(e)=>{
        console.log(e.target.className)
        
        if(e.target.className==='modal')
        { 
            setshowmodal(false)
        }
        }
  return (
    <>
    <div className="main">
        {!acceptoffer && <button onClick={handleclick} className="showoffer-btn">Show Offer</button>}
        {acceptoffer && <div className="showoffer-btn">Offer Accepted</div>}
    </div>
    {showmodal && <Modal acceptedoffer={acceptedoffer} closeoffer={closeoffer} handlescreen={handlescreen}/>}
    </>
  )
}

export default modalshow