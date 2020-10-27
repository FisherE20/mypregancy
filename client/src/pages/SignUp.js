import React, { useState } from "react";
import axios from "axios";
// import Container from "../components/Container/index";
// import Col from "../components/Col/index";
// import Row from "../components/Row/index";

function Signup() {
  const [signupusername, setUsername] = useState();
  const [signupemail, setEmail] = useState();
  const [signuppassword, setPassword] = useState();
  const [duedate, setDuedate] = useState();
  const [nickname, setNickname] = useState();
  

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log("username is " + signupusername);
  //   console.log("email is " + signupemail);
  //   console.log("password is " + signuppassword);
  //   console.log("duedate is " + duedate);
  //   console.log("nickname is " + nickname);
  // };

  const register = (e) => {
    e.preventDefault();
    axios.post(
     "/api/signup",
     {
        username: signupusername,
        email: signupemail,
        password: signuppassword,
        duedate: duedate,
        nickname: nickname
      }
    ).then((res) => console.log(res));
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
        <form onSubmit={register}>
        <div className="grid-container">
          <div className="">
          <div className="medium-6 cell">
          <label>Username
          <input className="form-control" type="text" placeholder="Username" name="username" onChange={(e) => setUsername(e.target.value)} />
          </label>
        </div>
        <div className="medium-6 cell">
          <label>Email
          <input className="form-control" type="text" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
          <div className="medium-6 cell">
          <label>Password
          <input className="form-control" type="text" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <div className="medium-6 cell">
          
          <label>Baby's Nickname</label>
          <input className="form-control" type="text" placeholder="Optional" name="nickname" onChange={(e) => setNickname(e.target.value)} />
        </div>
        <div className="medium-6 cell">
          <label>Due Date</label>
          <input className="form-control" type="text" placeholder="Optional" name="duedate" onChange={(e) => setDuedate(e.target.value)} />
        </div>
      </div>
      <a href="/signin" className="button" onClick={register}>Submit</a>
      </div> 
      
          </form>
      </div>
  );
}

export default Signup;
