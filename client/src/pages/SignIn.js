import React, { useState } from "react";
import Axios from "axios"
// import Container from "../components/Container/index";
// import Col from "../components/Col/index";
// import Row from "../components/Row/index"


function SignIn() {
  const [signinusername, setUsername] = useState();
  const [signinpassword, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + signinusername);
    console.log("password is " + signinpassword);
  };

  const login = (e) => {
    e.preventDefault();
    Axios.post(
      "/api/signin",
      {
        username: signinusername,
        password: signinpassword
      },
      
    ).then((res) => console.log(res));
  };

  return (
      <div>
        <div className="mt-4">
          <h2>Sign In</h2>
        </div>
          <form onSubmit={handleSubmit}>
          <div className="grid-container">
            <div className="">
            <div className="medium-6 cell">
            <label>Username
            <input className="form-control" type="text" placeholder="Username" name="username" onChange={(e) => setUsername(e.target.value)} />
            </label>
          </div>
            <div className="medium-6 cell">
            <label>Password
            <input className="form-control" type="text" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
            </label>
          </div>
          <a href="/home" className="button" onClick = {login} >Submit</a>
          <p>Not Registered? <a href="/SignUp">Create an Account</a></p>
          </div>
          </div>
            </form>
          </div>
        
    );
  }

export default SignIn;
