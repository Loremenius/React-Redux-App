import React from 'react';
import './App.css';
import { connect } from "react-redux";
import GuardianList from "./components/GuardianList"



function App() {
  return (
    <div className="App">
      <GuardianList/>
    </div>
  );


}
function mapStateToProps(state){
  return {
    username: state.username
  }
}


export default connect(mapStateToProps,{})(App);
