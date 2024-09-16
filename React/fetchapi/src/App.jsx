import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './Navbar';
import News from './News';
import InfiniteScroll from 'react-infinite-scroll-component'; 

function App() {
  let pageSize=50;
  const[category,setCategory]=useState("business")
  const[news,setNews]=useState([])
  const [loading,setLoading]=useState(false)
  const[totalresults,settotalResults]=useState(0);
  const[page,setPage]=useState(1);

 const fetchdata=async (category)=>{
  const url=`https://newsapi.org/v2/everything?q=${category}&from=2024-08-30&sortBy=popularity&apiKey=edf66adc50674684b9d37df0467f0b3c&page=${page}&pageSize=${pageSize}`;
setLoading(true)
  const req= await fetch(url);
  const res=await req.json();
  const data=res;
  console.log(data.articles)
  console.log(data.totalResults)
  setNews(data.articles)
  settotalResults(data.totalResults)
setLoading(false)
 }

 const fetchmoredata=async (category)=>{
  const url=`https://newsapi.org/v2/everything?q=${category}&from=2024-08-30&sortBy=popularity&apiKey=edf66adc50674684b9d37df0467f0b3c&page=${page}&pageSize=${pageSize}`;
setLoading(true)
setPage(page+1)
  const req= await fetch(url);
  const res=await req.json();
  const data=res;
  console.log(data.articles)
  setNews(news.concat(data.articles))
  settotalResults(data.totalResults)
setLoading(false)
 }


  useEffect(()=>{
fetchdata(category);
  },[category])
 

  return (
    <>
    <Navbar category={category} setCategory={setCategory}/>
 
    <InfiniteScroll
  dataLength={news.length} //This is important field to render the next data
  next={fetchmoredata}
  hasMore={news.length!==totalresults}>
 
    <div>

    {news.map((item,index)=>{
      return(
        <News key={index} title={item.title} url={item.urlToImage}/>
      )
    })}
    </div>

    </InfiniteScroll>

  
    </>
  )
}

export default App
