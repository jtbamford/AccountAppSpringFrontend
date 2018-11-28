import React, { Component } from 'react';

import axios from 'axios';
import ReactDOM from 'react-dom';



class UserPage extends Component {


  constructor(props){
  super(props);
  this.state = {
    account: ""
  }
  }

  getAccountNumber=()=>{
    axios.get('this.state.IP + this.state.port + this.propse.match.params.accountNumber')
    .then(Response=> {
      this.setState({account:Response.data})
    })

  }

  enterDraw = () =>{
      console.log("this works")
      // CHANGE ROUTER PAGE BEING RENDERED
  }


  render() {

      const account = this.state.account;

    return (
     <div className = "Userpage">
      <header className="Userpage-header">
      {this.getAccountNumber()}
      <p>Account Successfully Created: {account.accountNumber}</p>
      {account.firstName}'s Account
      </header>
      <body className="Userpage-body">
      <p>Click Here To Enter Prize Draw</p>
      <button onClick={this.enterDraw}>Enter Draw</button>

  </body>
  </div>

  );
  }
  }

export default UserPage
