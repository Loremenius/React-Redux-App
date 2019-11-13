import React from "react";

const Characters = (props) =>{

    return(
        <div className="character">
            <img src= {`https://www.bungie.net/${props.character.emblemBackgroundPath}`}/>
            <p>Class: {props.classData[props.character.classHash.toString()].displayProperties.name}</p>
            <p>Race: {props.raceData[props.character.raceHash.toString()].genderedRaceNamesByGenderHash[props.character.genderHash.toString()]}</p>
            <p>Light Level: {props.character.light}</p>
            <p>Total minutes played: {props.character.minutesPlayedTotal}</p>
        </div>
    )
}

export default Characters;