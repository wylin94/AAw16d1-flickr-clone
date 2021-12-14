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
          <ul className={styles.homepageNavul}>
            <li className={styles.homepageNavli}>
              <div className={styles.homepageNavLeft}>
                <NavLink className={styles.homepageLogoText} exact to="/">
                  <img src={'/images/veilr-logo.png'} alt="Logo" className={styles.homepageLogoImage}></img>
                  veilr
                </NavLink>
                <NavLink className={styles.you} to={`/users/${sessionUser.id}/myAlbums`}>You</NavLink>
                {/* <NavLink className={styles.explore} exact to="/">Explore</NavLink> */}
              </div>

              <div className={styles.homepageNavRight}>
                <a href='https://wylin94.github.io/' className={styles.homepagePortfolioIcon}>
                  <i className="fas fa-user-circle"></i>
                </a>
                <a href='https://www.linkedin.com/in/wylin94/' className={styles.homepageLinkedinIcon}>
                  <i className="fab fa-linkedin"></i>
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
        <ul className={styles.landingNavul}>
          <li className={styles.landingNavli}>
            <NavLink className={styles.landingLogoText} exact to="/">
              <img src={'/images/veilr-logo.png'} alt="Logo" className={styles.landingLogoImage}></img>
              veilr
            </NavLink>
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