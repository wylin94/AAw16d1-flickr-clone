import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { NavLink } from 'react-router-dom';

import * as sessionActions from '../../store/session';
import styles from './ProfileButton.module.css';


function ProfileButton({ user }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/login');
  };

  let profileImg = 'block';
  let profileIcon = 'none';
  if (sessionUser.profileImageUrl === '') {
    profileImg = 'none';
    profileIcon = 'block';
  }

  // const [profileImg, setProfileImg] = useState('block');
  // const [profileIcon, setProfileIcon] = useState('none');

  // if (sessionUser.profileImageUrl === '') {
  //   setProfileImg('none');
  //   setProfileIcon('block');
  // }

  return (
    <div>
      <button className={styles.profileButton} onClick={openMenu}>
        <img style={{display: profileImg}} className={styles.profileButtonImg} src={sessionUser.profileImageUrl} alt="userProfileCover"></img>
        <i style={{display: profileIcon}} className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <div className={styles.profileDropdownContainer}>
          <ul className={styles.profileDropdown}>
            <li className={styles.profileDropdownName}>Hello, <NavLink className={styles.profileDropdownNameLink}to={`/users/${sessionUser.id}/myAlbums`}>{user.username}</NavLink>!</li>
            <li className={styles.profileDropdownEmail}>{user.email}</li>
            <li>
              <button className={styles.profileDropdownLogout} onClick={logout}>Log Out</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;