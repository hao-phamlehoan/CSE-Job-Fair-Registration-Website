import React, { useState, useEffect } from 'react'
import './App.css';
import Axios from 'axios';

function App() {
  const [boothid, setBoothid] = useState("")
  const [location, setLocation] = useState("")
  const [size, setSize] = useState("")
  const [price, setPrice] = useState("")
  const [boothlist , setboothlist] = useState([])
  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
        setboothlist(response.data);    
    })
  },[])


  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      idbooth: boothid,
      location: location,
      size: size,
      price: price
    }).then(() => { alert("success insert") })

    setboothlist([...boothlist,{idbooth: boothid,
      location: location,
      size: size,
      price: price}])
  }

  return (
    <div className="App">
      <h1>ADD BOOTH</h1>
      <div className="form">
        <label>BOOTH ID</label>
        <input type="text" name="boothid" onChange={(e) => {
          setBoothid(e.target.value);
        }} />
        <label>LOCATION</label>
        <input type="text" name="location" onChange={(e) => {
          setLocation(e.target.value);
        }} />
        <label>SIZE</label>
        <input type="text" name="size" onChange={(e) => {
          setSize(e.target.value);
        }} />
        <label>PRICE</label>
        <input type="text" name="price" onChange={(e) => {
          setPrice(e.target.value);
        }} />
        <button onClick={submitReview}>Add</button>
        {boothlist.map((value)=>{
          return <h3>BoothID : {value.idbooth} | Location: {value.location}|Size: {value.size}|Price: {value.price}</h3>
        })}
      </div>
    </div>
  );
}

export default App;
