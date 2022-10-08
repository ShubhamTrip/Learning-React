import React from "react";
import content from "./content.js";

function mapData(con){
   return (
    <div className="emoCard">
             <h1>{con.place}</h1>
             <div className="emoInfo">
                <img src={con.img} alt="img" />
                <p>{con.txt}</p>
             </div>
        </div>
   );
}

function EmoCard(){
    return (
        content.map(mapData)
    );
}

export default EmoCard;