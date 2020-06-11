import React, { useState } from 'react';
import Vdata from './Vdata'

import Temp from './Temp'
import './App.css';

import Content from './Component/Data';

function App() {
  
  let [count,setCount]=useState(0)
  let [isDay,setDay]=useState(true)
  let[temp ,setTemp]=useState(19)
  


  return (
    <div className={`box ${isDay ? '' : 'daylight'}`}>

  <h1> {isDay ? 'Good Morning' : 'Good Night'}</h1>


  <button onClick={() => setDay(!isDay)} id="btn"> 


        Update Day
      </button>

  
      
     
     <Vdata counter={count} ></Vdata>

     

     <button onClick={() => setCount(count+1)}>Value Increment</button>

     <button onClick={() => setCount(count-1)}>Value  Decrement</button>

     <button onClick={() => setCount(count=0)}>Reset Value</button>

     <Temp counter={temp}></Temp>

  <h3>Temperature = {temp<20 ? 'Normal': 'High'}</h3>


     <button onClick={() => setTemp(temp+1)}>Value Increment</button>

     <button onClick={() => setTemp(temp-1)}>Value  Decrement</button>

     <button onClick={() => setTemp(temp=0)}>Reset Value</button>

 
          
   

       <Content  />

     

      

    </div>
  );
}

export default App;
