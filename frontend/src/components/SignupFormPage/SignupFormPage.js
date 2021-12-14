import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Footer from "../Footer";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential: 'Jack Lin', password: 'password' }))
  }

  return (
    <div className='loginPage'>
      <div className='loginContainer'>
        <img src={'/images/veilr-logo.png'} alt="Veilr Logo" className='loginLogoImage'></img>
        <h6 className='loginTitle'>Sign up for Veilr</h6>
        <form className='loginForm' onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li className='loginError' key={idx}>{error}</li>)}
          </ul>
          <div>
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <form className='loginDemoForm' onSubmit={handleDemoSubmit}>
          <button type="submit">Demo</button>
        </form>
        <div className='loginAgree'>
          By signing up, you agree with Veilr's Terms of Services<br/>and Privacy Policy, which we do not have at the moment.
        </div>
        <div className='loginNotMember'>
          Already a Veilr member? <a className='loginNotMemberSignup' href="/login">Log in here.</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignupFormPage;