import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { NavLink } from 'react-router-dom';

import * as sessionActions from '../../store/session';
import './ProfileButton.css';


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
    const preventBubble = document.getElementById('preventBubble')
    preventBubble.addEventListener('click', (e) => {
      e.stopPropagation();
    })
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/login');
  };

  let profileImg = 'block';
  // let profileIcon = 'none';
  if (sessionUser.profileImageUrl === '') {
    profileImg = 'none';
    // profileIcon = 'block';
  }

  // const [profileImg, setProfileImg] = useState('block');
  // const [profileIcon, setProfileIcon] = useState('none');

  // if (sessionUser.profileImageUrl === '') {
  //   setProfileImg('none');
  //   setProfileIcon('block');
  // }

  return (
    <div>
      <button className='profileButton' onClick={openMenu}>
        <img style={{display: profileImg}} className='profileButtonImg' src={sessionUser.profileImageUrl} alt="userProfileCover"></img>
        {/* <i style={{display: profileIcon}} className="fas fa-user-circle" /> */}
      </button>
      {showMenu && (
        <div className='profileDropdownContainer'>
          <ul className='profileDropdown'>
            <div className='profileDropdownUser' id='preventBubble'>
              <li className='profileDropdownName'>Hello, <NavLink className='profileDropdownNameLink'to={`/users/${sessionUser.id}/myAlbums`}>{user.username}</NavLink>!</li>
              <li className='profileDropdownEmail'>{user.email}</li>
            </div>
            <div className='profileDropdownLinkContainer'>
              <NavLink className='profileDropdownLink' to={`/users/${sessionUser.id}/myAlbums`}>You</NavLink>
              <a className='profileDropdownLink' href='https://wylin94.github.io/'>About the Developer</a>
              <a className='profileDropdownLink' href='https://www.linkedin.com/in/wylin94/'>LinkedIn</a>
              <a className='profileDropdownLink' href='https://github.com/wylin94'>Github</a>
              <div className='profileDropdownLink' onClick={logout}>Log Out</div>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;