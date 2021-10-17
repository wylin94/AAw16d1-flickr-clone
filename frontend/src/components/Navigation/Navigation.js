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
      <div className={styles.homepageNavContainer}>
        <div className={styles.homepageNavContainer2}>
          <img src={'/images/veilr-logo.png'} alt="Logo" className={styles.homepageLogoImage}></img>
          <ul className={styles.homepageNavul}>
            <li className={styles.homepageNavli}>

              <div className={styles.homepageNavLeft}>
                <NavLink className={styles.homepageLogoText} exact to="/">veilr</NavLink>
                <NavLink className={styles.you} exact to="/myAlbums">You</NavLink>
                {/* <NavLink className={styles.explore} exact to="/">Explore</NavLink> */}
              </div>

              <div className={styles.homepageNavRight}>
                <a href='https://www.linkedin.com/in/wylin94/' className={styles.homepageLinkedinIcon}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href='https://github.com/wylin94' className={styles.homepageGithubIcon}>
                  <i className="fab fa-github"></i>
                </a>
                <ProfileButton user={sessionUser} />
              </div>

            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      <div className={styles.landingNavContainer}>
        <img src={'/images/veilr-logo.png'} alt="Logo" className={styles.landingLogoImage}></img>
        <ul className={styles.landingNavul}>
          <li className={styles.landingNavli}>
            <NavLink className={styles.landingLogoText} exact to="/">veilr</NavLink>
            <span className={styles.landingLoginSignup}>
              <NavLink to="/login" className={styles.landingLogin}>Log In</NavLink>
              <NavLink to="/signup" className={styles.landingSignup}>Sign Up</NavLink>
            </span>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <>
      {isLoaded && sessionLinks}
    </>
  );
}

export default Navigation;