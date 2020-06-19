import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';

function App() {
  let [number,setNumber]=useState(55);
  return (
    <div className="App">
   Hello World
   <Parent num={number}></Parent>
   <button onClick={()=>{setNumber(++number)}}>Increase Number</button>
    </div>
  );
}

export default App;
