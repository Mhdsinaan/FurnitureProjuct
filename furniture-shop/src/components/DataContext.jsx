import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

function DataContext() {
  const MyContext=createContext()
 
  const[post,setPost]=useState([])
  useEffect(()=>{
   
    const fecth=async()=>{
      try {
      const response=await axios.get("http://localhost:3000/products")
      setPost(response.data)
      }
      catch(error){
      console.log("error",Error);
      }
      
    };
    fecth();
  },[])
  return (
    <MyContext.Provider value={{post}}>
    <div>
      <ul>
        {post.map((items)=>(
          <li key={items.id}>
            <h2>{items.name}</h2>
            <p>{items.price}</p>
            <img src={items.image} alt={items.name} />
          </li>

        ))}
      </ul>
      
    </div>
    </MyContext.Provider>
    
  )
}


export default DataContext
