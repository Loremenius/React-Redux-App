import React, {useState} from "react";
import { connect } from "react-redux";
import { fetchGuardian } from "../actions"
import  Guardian  from "./Guardian";

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
      console.log(props.guardian)
      function checkData(){
          if(props.guardian.displayName !== "" && props.isFetching === false && props.error === null){
              return(<Guardian/>)
          }else{
              return(<div></div>)
          }
      }
    return(
        <div className ="list">
            <form>
                <input type= "text" name="task" onChange={handleNameChange} value={name}></input>
                <button onClick={handleSearchName}>Find Guardian</button>
            </form>
            {props.isFetching && <div>Fetching Guardian</div>}
            {props.error && <div>{props.error}</div>}
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