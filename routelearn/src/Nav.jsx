import React from "react";
import './App.css'
import {NavLink} from 'react-router-dom'
function Nav(){
    return(
        <ul className="nav">
             <li><NavLink style={({isActive})=>{return {backgroundColor: isActive? 'green' : null }}}
             to="/" className="navlink">Home</NavLink></li>
             <li><NavLink style={({isActive})=>{return {backgroundColor: isActive? 'green' : null }}}
             to='/career' className="navlink">Careers</NavLink></li>
             <li><NavLink style={({isActive})=>{return {backgroundColor: isActive? 'green' : null }}}
             to='/about' className="navlink">About</NavLink></li>
             <li><NavLink style={({isActive})=>{return {backgroundColor: isActive? 'green' : null }}}
             to='/User/shubham' className="navlink">Shubham</NavLink></li>
             <li><NavLink style={({isActive})=>{return {backgroundColor: isActive? 'green' : null }}}
             to='/User/anil' className="navlink">Anil</NavLink></li>
             <li><NavLink style={({isActive})=>{return {backgroundColor: isActive? 'green' : null }}}
             to='/nopage' className="navlink">No page</NavLink></li>
        </ul>
    );
}

export default Nav;