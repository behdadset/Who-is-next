import React,{ useState } from 'react';
import {Link} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Body  from './Body'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import fire from './fire'

function App() {
  const [userId, setUserId] = useState(null)
  const [nameList, setNameList] = useState(null)
  const [listId, setListId] = useState(null)

  fire.auth().onAuthStateChanged((user) =>{
    if(user.uid && user.uid !== userId){
      setUserId(user.uid)
      fire.database().ref(user.uid).child("groups").child("classmastes").child("names").on("value",res => {
        setNameList(res.val())
      })
      
    }
  })
  
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
            <Route path="/" exact component ={()=><Body uId={userId} names={nameList}/>} />
            <Route path="/login" exact component ={()=><Login />} />
            <Route path="/signup" exact component ={()=><Signup />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
