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
    accountNumber: "",
	IP:"http://localhost:",
	port:"8081"
  }
  }


  submit = () => {



       axios.post(this.state.IP+this.state.port+/*constant*/+/*Constant*/.).then(Response=> {

         this.setState({accountNumber:Response.data})
         this.props.history.push("/user/"+this.state.accountNumber);

  }






render() {
  return (
    <div className = "Homepage">
    <header className="Homepage-header">

    </header>

   <body className="Homepage-body">

   <form onSubmit={this.submit}>
        <label>
          First Name:
          <input type="text" value={this.state.value}/>
        </label>
        <label>
          Second Name:
          <input type="text" value={this.state.value}/>
        </label>
        <input type="submit" value="Submit" />
      </form>

</body>
</div>

);
}
}

export default withRouter(Homepage);
