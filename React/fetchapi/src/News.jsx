import React from 'react'
import "./App.css"

const News = ({title,url}) => {

    

  return (
    <div>
        <h1>{title}</h1>
        <img src={url} alt="image"/>
    </div>
  )
}

export default News