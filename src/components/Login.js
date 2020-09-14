import React, { Component } from 'react'
import fire from './fire';
import {withRouter} from 'react-router-dom'

class Login extends Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state={
      email : "",
      password : "",
      message: ""
    }
  }

  login(e){ //Login and read the user from firebase Authentication
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
      this.setState({message: u.message})
      this.props.history.push("/")
    })
    .catch((err)=>{
      this.setState({message: err.message})

    })
  }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return(
        <div>
            <form className="login">
            <br/><br/><br/>
            <h3 className="logTitle">Login to you account</h3>
            <br/><br/>
            <div className="form-group">
                <label className="inputs">Enter Email address</label>
                <input type="email" name="email" id="email" onChange={this.handleChange} value={this.state.email} className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label className="inputs">Enter Password</label>
                <input type="password" name="password" id="password" onChange={this.handleChange} value={this.state.password} className="form-control" placeholder="Enter password" />
            </div>
            
            <div className="notUser">
            <button onClick={this.login} type="submit" className="loginBtn">Login</button>
                <p className="switchText text-right">
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>
            </div>
            <h6 className="error">{this.state.message}</h6>
            </form>
        </div>
    )
  }
}

export default withRouter(Login);
