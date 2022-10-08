import React, {useState} from 'react';

function Form(){
      const[name, setName]=useState("");

       function inpChange(event){
         setName(event.target.value);
      }

             const [nm,setNm]=useState('');

      function handleClick(event){
           setNm(name);
   
           event.preventDefault();   // PRevents the form to refresh the page..
     }
    return(
        <div>
            <h1>Form section</h1>
            <br/>
            <h2>Hello {nm}</h2>
             <form onSubmit={handleClick}>
               <input placeholder='Enter name' onChange={inpChange} value={name}></input>
               <button >Click Here</button>
             </form>
        </div>
    );

}

export default Form;