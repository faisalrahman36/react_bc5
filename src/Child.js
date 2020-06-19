import React, { useContext } from 'react';
import ValueContext from './ValueContext';


function Child(props) {
  let value= useContext(ValueContext);
  let updatevalue=value[1]
  return (
    <div className="App">
Child number  using value {value} <br/> 
Child number using value[0] {value[0]}
<button onClick={()=>{updatevalue(++value[0])}}>Increase Value</button>
    </div>
  );
}

export default Child;