import React, {Component} from 'react';
import './App.css';
import Homepage from './Homepage';
import UserPage from './UserPage';
import PrizePage from './PrizePage';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'



class App extends Component {

  render() {
    return (
      <RouterCode/>
    );
  }

}

export default App;

function RouterCode() {
    return (
    <Router>
        <div>

            <hr />
            <Route exact path="/" component={Homepage} />
            <Route path="/user/:accountNumber" component={UserPage}/>
            <Route path="/prize/:accountNumber" component={PrizePage}/>
        </div>
    </Router>
);
}
