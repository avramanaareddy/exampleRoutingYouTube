import React from 'react';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
const Shop=()=>{

  useEffect(()=>{
    fetchItems();
  },[])
const [items, setItems]=useState([])
const fetchItems=async ()=>{
 
const data = await fetch("https://reqres.in/api/users?page=2");
const items= await data.json();
console.log(items.data);
setItems(items.data)
}
return (<div>
  {items.map(item=>{
    return( 
    <Link to={`/shop/${item.id}`}><h1 key={item.id}>{item.first_name}, {item.last_name}</h1></Link>
    )
  })}
 
  
</div>)
}
export default Shop;