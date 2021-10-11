import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import styles from './LoginForm.module.css';

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
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <img src={'/images/veilr-logo.png'} alt="Veilr Logo" className={styles.logoImage}></img>
        <h6 className={styles.loginTitle}>Log in to Veilr</h6>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li className={styles.loginError} key={idx}>{error}</li>)}
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
        <form className={styles.demoForm} onSubmit={handleDemoSubmit}>
          <button type="submit">Demo</button>
        </form>
        <div className={styles.notMember}>
          Not a Veilr member? <a className={styles.notMemberSignup} href="/signup">Sign up here.</a>
        </div>
      </div>
      <div className={styles.landingPageFooter}>
        <div className={styles.footerLeft}>© 2021 Veilr. No rights reserved.</div>
        <div className={styles.footerRight}>
          <span>About the Developer</span>
          <a href='https://www.linkedin.com/in/wylin94/' className={styles.linkedinIcon}>
              <i className="fab fa-linkedin-in"></i>
          </a>
          <a href='https://github.com/wylin94' className={styles.githubIcon}>
              <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginFormPage;