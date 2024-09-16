import React, { useState, useEffect, useRef ,useCallback} from 'react'
import "./infinitescroll.css"
const infinitescroll = () => {
  const loaderref = useRef();
  const [images, setimages] = useState([]);
  const [page, setpage] = useState(2)
  const [loading, setloading] = useState(false)

  const fetchimages = async (index) => {
    const url = `https://jsonplaceholder.typicode.com/photos?_page=${index}}&_limit=9`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    console.log(index)
    return data
  }


  const getdata = useCallback(async () => {
    if (loading)
      return
    setloading(true)
    const data = await fetchimages(page)
    setimages((previmage)=>[...previmage,...data])
    setTimeout(() => {
      setloading(false)
    }, 3000);
    setpage((prevpage)=>prevpage + 1)
  }, [page, loading])


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0]
      // console.log(target)
      if (target.isIntersecting) {
        getdata();
      }
    })
    if (loaderref.current) {
      observer.observe(loaderref.current)
    }

    return () => {
      if (loaderref.current) {
        observer.unobserve(loaderref.current)
      }
    }

  }, [getdata])




  const fetchfirstpage = async () => {
    const data = await fetchimages(1);
    setimages(data)
  }

  useEffect(() => {
    fetchfirstpage()
  }, [])
  return (
    <div className="container">
      <h1>Infinite Scroll</h1>
      <hr />

      {
        images.map((imgbox, index) => {
          return (
            <div >
            <img src={imgbox.thumbnailUrl} alt={imgbox.title} key={index} />
            <h1>{imgbox.title}</h1>
            </div>
          )
        })
      }
      <div ref={loaderref}></div>
      <hr/>
{loading && <h1>Loading.....</h1>}

    </div>
  )
}

export default infinitescroll