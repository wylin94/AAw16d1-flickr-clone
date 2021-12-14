import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Footer from "../Footer";
import * as sessionActions from '../../store/session';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential: 'Jack Lin', password: 'password' }))
  }

  return (
    <div className='loginPage'>
      <div className='loginContainer'>
        <img src={'/images/veilr-logo.png'} alt="Veilr Logo" className='logoImage'></img>
        <h6 className='loginTitle'>Log in to Veilr</h6>
        <form className='loginForm' onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li className='loginError' key={idx}>{error}</li>)}
          </ul>
          <div>
            <label>Username or Email</label>
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
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
          <button type="submit">Log In</button>
        </form>
        <form className='demoForm' onSubmit={handleDemoSubmit}>
          <button type="submit">Demo</button>
        </form>
        <div className='notMember'>
          Not a Veilr member? <a className='notMemberSignup' href="/signup">Sign up here.</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginFormPage;