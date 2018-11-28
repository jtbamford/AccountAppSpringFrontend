import React, { Component } from 'react';
import './Userpage.css';
import axios from 'axios';
import Popup from 'reactjs-popup';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import ReactDOM from 'react-dom';



class PrizePage extends Component {

constructor(props){
super(props);
this.state = {
  info: "",
  userID: "",
  username: "",
	IP:"http://localhost:",
	port:"8081"
}
}


goBack=()=> {
  this.props.history.push("/");
}

render() {
  return (
   <div className = "Userpage">
    <header className="Userpage-header">
    {this.getuser()}
    </header>

    <body className="Userpage-body">


</body>
</div>

);
}
}

export default PrizePage
