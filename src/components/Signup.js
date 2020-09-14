import React, { Component } from 'react'
import fire from './fire';
import {withRouter} from 'react-router-dom'

class Signup extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
      email : "",
      password : "",
      confirmPassword: '',
      message: ""
    }
  }

  signup(e){ //Sigup the user and create in firebase Authentication 
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then((u)=>{
      this.setState({message: "Signed up"})
      this.props.history.push("/")
    })
    .catch((err)=>{  //Performing all necessary validation and return the message
      this.setState({message: err.message})
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit(e) {
    const { password, confirmPassword } = this.state;
    //Perform confirm password validation and return the message
    if (password !== confirmPassword) {
      e.preventDefault();
      this.setState({message: "Passwords don't match"})
    } else {
      this.signup(e)
    }
  }

  render() {
    return (

      <form className="signup">
        <br/><br/><br/>
        <h3 className="logTitle">Create your account</h3>
        <br/><br/>
        <div className="form-group">
          <label className="inputs">Enter Email address</label>
          <input type="email" name="email" id="email" onChange={this.handleChange} value={this.state.email} className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label className="inputs">Enter Password</label>
          <input type="password" name="password" id="password" onChange={this.handleChange} value={this.state.password} className="form-control" placeholder="Enter password" />
        </div>

        <div className="form-group">
          <label className="inputs">Confim Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" onChange={this.handleChange} value={this.state.confirmPassword} className="form-control" placeholder="Confirm password" />
        </div>

        <div className="notUser">
            <button type="submit" onClick={this.handleSubmit} className="loginBtn">Sign Up</button>
            <p className="switchText text-right">
            Already registered? <a href="/login">Sign In</a>
            </p>
        </div>
        <h6 className="error">{this.state.message}</h6>
      </form>
    )
  }
}
export default withRouter(Signup);

