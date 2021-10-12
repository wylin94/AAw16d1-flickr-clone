import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";

import * as sessionActions from '../../store/session';
import styles from './ProfileButton.module.css';


function ProfileButton({ user }) {
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

  return (
    <div>
      <button className={styles.profileButton} onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <div className={styles.profileDropdownContainer}>
          <ul className={styles.profileDropdown}>
            <li className={styles.profileDropdownName}>{user.username}</li>
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