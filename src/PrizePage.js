import React, { Component } from 'react';

import axios from 'axios';
import ReactDOM from 'react-dom';

import * as ConstClass from './const.js';




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


  componentDidMount = () => {
  axios.get(ConstClass.ENDPOINT_ACCAPI + ConstClass.PRIZE_PATH + this.props.match.params.accountNumber).then(response => {
  this.setState({
  prizeOutcome: response.data
  })
  })
  }

  render() {
  return (

  <div id="prizeDiv">
  <p> {this.state.prizeOutcome}</p>
  <button onClick={this.goBack} >Back</button>
  </div>

  )
  }
  }

export default PrizePage
