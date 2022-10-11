import React from "react";
import './App.css'
import {NavLink} from 'react-router-dom'
function Nav(){
    return(
        <ul className="nav">
             <li><NavLink /*style={({isActive})=>{return {backgroundColor: isActive? 'green' : null }}}*/
             className="navlink" to="/" end>Home</NavLink></li>
             <li><NavLink /*style={({isActive})=>{return {backgroundColor: isActive? 'green' : null }}}*/
             to='/Career' className="navlink">Careers</NavLink></li>
             <li><NavLink /*style={({isActive})=>{return {backgroundColor: isActive? 'green' : null }}}*/          // same for others
             to='/About' className="navlink">About</NavLink></li>
             <li><NavLink to='/User/shubham' className="navlink">Shubham</NavLink></li>
             <li><NavLink to='/User/anil' className="navlink">Anil</NavLink></li>
             <li><NavLink to='/nopage' className="navlink">No page</NavLink></li>
             <li><NavLink to='/Useparams?data=100&text=' className="navlink">Use Params</NavLink></li>
        </ul>
    );
}

export default Nav;