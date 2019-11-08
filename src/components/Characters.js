import React from "react";

const Characters = (props) =>{

    return(
        <div className="character">
            <img src= {`https://www.bungie.net/${props.character.emblemBackgroundPath}`}/>
            <p>Light Level: {props.character.light}</p>
            <p>Total minutes played: {props.character.minutesPlayedTotal}</p>
        </div>
    )
}

export default Characters;