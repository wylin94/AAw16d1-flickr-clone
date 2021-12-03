import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import styles from './SignupForm.module.css';

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
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <img src={'/images/veilr-logo.png'} alt="Veilr Logo" className={styles.logoImage}></img>
        <h6 className={styles.loginTitle}>Sign up for Veilr</h6>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li className={styles.loginError} key={idx}>{error}</li>)}
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
        <form className={styles.demoForm} onSubmit={handleDemoSubmit}>
          <button type="submit">Demo</button>
        </form>
        <div className={styles.agree}>
          By signing up, you agree with Veilr's Terms of Services<br/>and Privacy Policy, which we do not have at the moment.
        </div>
        <div className={styles.notMember}>
          Already a Veilr member? <a className={styles.notMemberSignup} href="/login">Log in here.</a>
        </div>
      </div>
      <div className={styles.landingPageFooter}>
        <div className={styles.footerLeft}>© 2021 Veilr. All rights reserved.</div>
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

export default SignupFormPage;