import React from "react";
import Clan from "./Clan";
import Characters from "./Characters";
import { connect } from "react-redux";


const Guardian = (props) =>{

    return(
        <div>
            <h1>{props.displayName}</h1>
            <Clan/>
            {props.characterData.map(((item,index)=>
                <Characters key={index} character={item}/>
            ))}
        </div>
    )
}


function mapStateToProps(state){
    return {
        characterData: state.guardian.characterData,
        displayName: state.displayName
    }
}
export default connect(mapStateToProps,{})(Guardian);