import React, { Component } from 'react';
import axios from 'axios';
import UserPage from './UserPage';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import * as ConstClass from './const.js';



class Homepage extends Component {

  constructor(){
  super();
  this.state = {
    accountNumber: "",
  }
  }


  submit = () => {



       axios.post(ConstClass.ENDPOINT_ACCAPI+ConstClass.ACCOUNT_TYPE,
         {
           "firstName":document.getElementById('firstnameinput').value,
           "lastName":document.getElementById('secondnameinput').value,
           "accountType":ConstClass.ACCOUNT_TYPE
         }
       ).then(Response=> {



         this.setState({accountNumber:Response.data.accountNumber})
         this.props.history.push("/user/"+"1");
  });
}






render() {
  return (
    <div className = "Homepage">
    <header className="Homepage-header">

    </header>

   <body className="Homepage-body">

   <input id="firstnameinput" type="text" onKeyPress={this.handlekeypress}
   	placeholder="First Name.."
         /> <br/> <br/>


   <input id="secondnameinput" type="text"
 	placeholder="Last Name..."
   /> <br/> <br/>
   <button className="btn" onClick={this.submit}>Sign In</button>

</body>
</div>

);
}
}

export default withRouter(Homepage);
