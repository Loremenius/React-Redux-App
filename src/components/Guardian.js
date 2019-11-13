import React from "react";
import Clan from "./Clan";
import Characters from "./Characters";
import { connect } from "react-redux";


const Guardian = (props) =>{

    console.log(props.displayName);
    return(
        <div>
            <h1>{props.displayName}</h1>
            <h2>Characters</h2>
            <div className="characters">
                {props.characterData.map(((item,index)=>
                    <Characters key={index} character={item} classData={props.classData} raceData={props.raceData}/>
                ))}
            </div>
            <Clan/>
        </div>
    )
}


function mapStateToProps(state){
    return {
        characterData: state.guardian.characterData,
        displayName: state.guardian.displayName,
        classData: state.classData,
        raceData:state.raceData
    }
}
export default connect(mapStateToProps,{})(Guardian);