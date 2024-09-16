import React, { useState, useEffect ,useRef} from 'react';

const Gallery = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const cache=useRef({});
  console.log(cache)
  
  // console.log(signal)
  useEffect(() => {
    const abortController=new AbortController();
  const {signal}=abortController;
    const fetchData = async () => {
      if(cache.current[query])
      {
        console.log('from cache')
        setResult(cache.current[query])
        return;
      }
      
      console.log('API CALL')
        const res = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=10`,{signal});
        const data = await res.json();
        // console.log(data)
        cache.current[query]=data.products;
        setResult(data.products); // Fallback to empty array if data.results is undefined
      
    }
// console.log(result)
    const timerid=setTimeout(fetchData,1000);
    return ()=>{
clearTimeout(timerid)
abortController.abort()
    }
  }, [query]);

  return (
    <>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />  
      </div>
      {result.length > 0 ? (
        result.map((item, index) => (
          <h4 key={index}  >{item.title}</h4>
        ))
      ) : (
        <h1>No images found</h1>
      )}
    </>
  );
};

export default Gallery;
