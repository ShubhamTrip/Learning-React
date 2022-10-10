import React from "react";
import './App.css'
import {Link} from 'react-router-dom'
function Nav(){
    return(
        <ul className="Nav">
             <li><Link to='/'>Home</Link></li>
             <li><Link to='/about'>About</Link></li>
        </ul>
    );
}

export default Nav;