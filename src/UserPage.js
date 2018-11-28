import React, { Component } from 'react';
import './Userpage.css';
import axios from 'axios';
import Popup from 'reactjs-popup';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import ReactDOM from 'react-dom';



class UserInfo extends Component {

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

getuser=()=>{

  axios.get(this.state.IP+this.state.port+'/TheBookClubJava/api/Library/getUser/'+this.props.match.params.accountNumber).then(Response=> {

    this.setState({username:Response.data.username})
  })

}


goBack=()=> {
  this.props.history.push("/");
}

render() {
  return (
   <div className = "Userpage">
    <header className="Userpage-header">
    {this.getuser()}
    {this.state.username}'s Library
    </header>

    <body className="Userpage-body">


</body>
</div>

);
}
}

export default UserPage
