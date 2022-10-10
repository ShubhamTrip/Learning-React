import React from "react";
import {Params, useParams} from "react-router-dom";

function User(){
    const params = useParams();
    const {name}= params;
    return (
        <div>
            <h1>I am {name}</h1>
            <h2>{name} is a great boy.</h2>
        </div>
    );
}

export default User;