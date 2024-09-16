import React from 'react';
import './modalshow.css';

const Modal = ({closeoffer,acceptedoffer,handlescreen}) => {

  return (
    <div className="modal" onClick={handlescreen}>
    <div className="modal-content">
<button className="close-offer" onClick={closeoffer}>❌</button>
<h3 className="offer-desc">Click to see offer</h3>
<button className="accept-offer" onClick={acceptedoffer}>Accept Offer</button>
    </div>
    </div>
  )
}

export default Modal