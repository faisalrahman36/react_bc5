import React, { useState, useReducer } from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  //let [number,setNumber]=useState(55);
  let value  =useState(81);
  return (
    <ValueContext.Provider value={value}>


    
    <div className="App">
   Hello World
   <Parent ></Parent>

    </div> 
    </ValueContext.Provider>
  );
}

export default App;
