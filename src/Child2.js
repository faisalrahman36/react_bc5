import React, { useContext,useReducer } from 'react';

import ValueContext from './ValueContext';
import numberReducer from './numberReducer';

function Child2() {
let [state,dispatch] = useReducer(numberReducer,10);
// dispatch can be any name 
return (
    <div className="App">
Child2  {state} 
 
 <button onClick={()=>{dispatch({type:"INCREMENT",val:67})}}>Increment</button>
 <button onClick={()=>{dispatch({type:"DECREMENT",val:10})}}> Decrement</button>
</div>
  );
}

export default Child2;