import React from 'react';
import {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
const ItemDetails=({match})=>{

  const[item, setItem]=useState({})
   console.log(match.params.itemId);
useEffect(()=>{
 fetchItem()
},[]);
const fetchItem=async ()=>{
const fetchItem= await fetch(`https://reqres.in/api/users/${match.params.itemId}`);
const itemData =await fetchItem.json();
console.log(itemData.data);
setItem(itemData.data)
}
return (<div>
  <p>
  <h1> Inside item details page</h1>
 <h1>User Number: {item.id}</h1>
 <h1>First Name: {item.first_name}</h1>
 <h1>Last Name: {item.last_name}</h1>
 <h1>Email : {item.email}</h1>
 <img src={item.avatar}/>
 </p>
</div>)
}
export default ItemDetails;