import React from "react";
import {Link, Outlet} from 'react-router-dom';
function About(){
    return(
        <div>
            <h1>Hello this is the about page</h1>
             <br />
            <h2>Here we will see nested Routing</h2>
            <Link to='Contact'>Contact Us</Link>
            <Outlet/>
        </div>
    );
}

export default About;