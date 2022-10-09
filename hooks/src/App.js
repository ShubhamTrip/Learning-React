import './App.css';
import React, {useState,useEffect} from 'react';
import Condition from './Condition';
function App() {
  const [data,setData]=useState(0);
  useEffect(()=>{
    console.log(data);
  })
  return (
    <div className="App">
       <h1>Hello React :{data}</h1>
       <button onClick={()=>{setData(data+1)}}>Click</button> 
      <Condition />  
    </div>
  );
}

export default App;
