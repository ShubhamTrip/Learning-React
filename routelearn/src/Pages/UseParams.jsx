import React from 'react'
import {useSearchParams} from 'react-router-dom'
function UseParams(){
    
    const [searchparams,setsearchparams]=useSearchParams();
    const data = searchparams.get('data');
    return(  
        <>
           <h1>This is the Params section.</h1>
           <h2>This is the value of params : {data}</h2>
           <input placeholder='Enter data' onChange={(e)=>setsearchparams({text: e.target.value ,data:10})}/>
        </>
    );
}

export default UseParams;