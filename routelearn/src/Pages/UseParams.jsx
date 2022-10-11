import React from 'react'
import {useSearchParams,useNavigate} from 'react-router-dom'
function UseParams(){
    
    const [searchparams,setsearchparams]=useSearchParams();
    const data = searchparams.get('data');

    const navi = useNavigate();
    return(  
        <>
           <h1>This is the Params section.</h1>
           <h2>This is the value of params : {data}</h2>
           <input placeholder='Enter data' onChange={(e)=>setsearchparams({text: e.target.value ,data:10})}/>
           <hr />
           <p>This button uses useNavigate hook of React routers. </p>
           <button onClick={()=>navi("/About")}>GO to About</button>
        </>
    );
}

export default UseParams;