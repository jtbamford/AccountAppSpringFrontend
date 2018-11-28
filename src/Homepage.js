import React, { Component } from 'react';
import './Homepage.css';
import axios from 'axios';
import UserInfo from './UserInfo';
import Popup from 'reactjs-popup';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import { withRouter } from 'react-router-dom';



class Homepage extends Component {

  constructor(){
  super();
  this.state = {
    user: "",
    accountNumber: "",
    message: "",
	IP:"http://localhost:",
	port:"8081"
  }
  }


  submit = () => {
     var username;

     username=document.getElementById('makeuser').value;
     if(username!=null) {
    // console.log(username);
     // change url to that of add user method
    axios.post(this.state.IP+this.state.port+'/TheBookClubJava/api/Library/createUser', {
       username: username
     }).then(Response =>{
       this.setState({message:Response.data.message})
       if(this.state.message==="user has been successfully added") {
       axios.get(this.state.IP+this.state.port+'/TheBookClubJava/api/Library/getUserByUsername/'+username).then(Response=> {

         this.setState({accountNumber:Response.data.accountNumber})
         this.props.history.push("/user/"+this.state.accountNumber);
       }
       )
     }
     }
     )
   }
  }




render() {
  return (
    <div className = "Homepage">
    <header className="Homepage-header">

    </header>

   <body className="Homepage-body">

</body>
</div>

);
}
}

export default withRouter(Homepage);
