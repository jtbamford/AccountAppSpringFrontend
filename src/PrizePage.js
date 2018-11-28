import React, { Component } from 'react';

import axios from 'axios';
import ReactDOM from 'react-dom';



class PrizePage extends Component {
  constructor(props){
  super(props);
  this.state = {
  accountNumber: "",
  prizeOutcome: ""
  }
  }

  goBack=()=> {
    this.props.history.push("/");
  }


  ComponentWIllMount = () => {
  axios.get(this.state.IP + this.state.port + this.props.match.params.accountNumber).then(response => {
  this.setState({
  prizeOutcome: response.data
  })
  })
  }

  render() {
  const prizeOutcome = this.state.prizeOutcome;
  return (

  <div id="prizeDiv">
  <p> {prizeOutcome}</p>
  <button onClick={this.goBack} >Back</button>
  </div>

  )
  }
  }

export default PrizePage
