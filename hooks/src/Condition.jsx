import React,{useEffect,useState} from "react";

function Condition(){
      const [data, setData]=useState(0);
      const [count, setCount]=useState(0);
      useEffect(()=>{
        console.log('Will be called for both');
      })
      useEffect(()=>{
          console.log('Count updated to: '+count);
      },[count])                                                  // This is conditional use Effect 
      useEffect(()=>{
        console.log('Data updated to: '+data);
      },[data])
    


    return (
        <div>
            <hr />
            <h1>This is the Condition division</h1>
            <h2>This is data: {data}</h2>
            <h2>THis is count: {count}</h2>
            <button onClick={()=>{setData(data+1)}}>Update Data</button>
            <button onClick={()=>{setCount(count+1)}}>Update Count</button>
        </div>
    );
}

export default Condition;