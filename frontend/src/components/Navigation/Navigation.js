import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import styles from './Navigation.module.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <span className={styles.loginSignup}>
        <NavLink to="/login" className={styles.login}>Log In</NavLink>
        <NavLink to="/signup" className={styles.signup}>Sign Up</NavLink>
      </span>
    );
  }

  return (
    <div className={styles.navigationContainer}>
      <img src={'/images/veilr-logo.png'} alt="Logo" className={styles.logoImage}></img>
      <ul className={styles.navigationul}>
        <li className={styles.navigationli}>
          <NavLink className={styles.logoText} exact to="/">veilr</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;