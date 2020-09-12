import React from 'react';
import Nav from './Nav'
import Body from './Body'
import Login from './Login'


function App() {

  function signInHandler() {
    console.log("Signin")
    document.getElementById("body").style.display = "none";
    document.getElementById("selectGroup").style.display = "none";
    document.getElementById("login").style.display = "inline";
  }
  
  function homeHandler() {
    console.log("Signin")
    document.getElementById("body").style.display = "inline";
    document.getElementById("selectGroup").style.display = "inline";
    document.getElementById("login").style.display = "none";
  }

  return (
    <div className="main">
      <div className="App">
        <div className="navTop">
                <div className="leftNavBtns">
                  <button onClick={homeHandler} className="homeBtn">Home</button>
                  <select  className="selectGroup" id="selectGroup">
                      <option value="Random Algorithim">Groups</option>
                      <option value="Alphabetic">Classmates</option>
                      <option value="Reverse Alphabetic">Colleague</option>
                  </select>
                </div>
                <h3>WHOSE NEXT PERSON</h3>
                <button onClick={signInHandler} className="signin">Sign in</button>
            </div>
        <div id="body">
          <Nav />
          <Body />
        </div>
        <div id="login">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
