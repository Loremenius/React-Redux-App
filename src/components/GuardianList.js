import React, {useState} from "react";
import { connect } from "react-redux";
import { fetchGuardian } from "../actions"
import  Guardian  from "./Guardian";
import * as loading from "../img/ghostLoading2.gif"

const GuardianList = (props) =>{
    const [name, setName] = useState('');

    const handleNameChange = event => {
        setName(event.target.value);
      };
      const handleSearchName = (e) =>{
        e.preventDefault();
        props.fetchGuardian(name)
        setName('');
      }
      function checkData(){
          if(props.guardian.displayName !== "" && props.isFetching === false && props.error === null){
              return(<Guardian/>)
          }else{
              return(<div></div>)
          }
      }
    return(
        <div className ="list">
            <form className="form">
                <input type= "text" name="task" onChange={handleNameChange} value={name} placeholder="Enter Guardian's Username"></input>
                <br></br>
                <br></br>
                <button onClick={handleSearchName}>Find Guardian</button>
            </form>
            {props.isFetching && <img src={loading}/>}
            {props.error && <div>{props.error.message}</div>}
            {checkData()}
        </div>
    )

}
function mapStateToProps(state){
    return{
        isFetching: state.isFetching, 
        guardian: state.guardian, 
        error: state.error
    }
}
export default connect(mapStateToProps,{ fetchGuardian })(GuardianList)