import React,{useEffect,useState} from 'react';

function PropsEffect(props){


    useEffect(()=>{
        console.log("Dta Prop called");
    },[props.dta])

    return(
        <div>
            <hr/>
            <h1>Using Props in UseEffect</h1>
            <h2>This is Prop Data: {props.dta}</h2>
            <h2>This is Prop Data: {props.cnt}</h2>
        </div>

    );
}

export default PropsEffect;