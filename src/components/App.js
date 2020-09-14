import React from 'react';
import Nav from './Nav'
import {Link} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home  from './Body'
import fire from './fire'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <div className="main">
      <Router>
        <div className="App">
          <div className="navTop">
            <div className="leftNavBtns">
              <Link to="/"><button className="homeBtn">Home</button></Link>
              <select  className="selectGroup" id="selectGroup">
                <option value="Random Algorithim">Groups</option>
                <option value="Alphabetic">Classmates</option>
                <option value="Reverse Alphabetic">Colleague</option>
              </select>
            </div>
            <h3>WHOSE NEXT PERSON</h3>
            <div>
              <Link to="/login"><button className="signupBtn">Sign in</button></Link>
              <Link to="/signup"><button className="signinBtn">Sign up</button></Link>
            </div>
          </div>
          
          <Switch>
            <Route path="/" exact component ={()=><Home />} />
            <Route path="/login" exact component ={()=><Login />} />
            <Route path="/signup" exact component ={()=><Signup />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
