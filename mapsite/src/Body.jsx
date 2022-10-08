import React from "react";
import CardSection from "./Components/CardSection";
import Form from './Components/Form';
import './CSS/Body.css';
function Body(){
    return(
        <div className="body">
             <CardSection />
             <Form />
        </div>
    );
        
    
}

export default Body;