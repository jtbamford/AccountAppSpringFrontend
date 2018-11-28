import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import * as ConstClass from './const.js';

class UserPage extends Component {
  constructor(props){
  super(props);
  this.state = {
    account: []
  }
  }

  componentDidMount=()=>{
    axios.get(ConstClass.ENDPOINT_ACCAPI + ConstClass.PRIZE_PATH + this.props.match.params.accountNumber)
    .then(Response=> {
      this.setState({account:Response.data})
    })

  }
  enterDraw = () =>{
    this.props.history.push("/prize/"+ this.props.match.params.accountNumber)
  }
  render() {

    return (
     <div className = "Userpage">
      <header className="Userpage-header">

      <p>Account Successfully Created: {this.props.match.params.accountNumber}</p>
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
