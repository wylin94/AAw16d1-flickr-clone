import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { csrfFetch } from '../../store/csrf';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [searchInput, setSearchInput] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [albums, setAlbums] = useState([]);


  useEffect(() => {
    const searchFetch = async () => {
      const res = await csrfFetch('/api/albums');
      if (res.ok) {
        const albums = await res.json();
        setAlbums(albums);
      }
    }
    searchFetch();
  }, [])


  useEffect(() => {
    if (searchInput) {setShowSearch(true);};
    if (!albums.find(album => album.title.toLowerCase().includes(searchInput.toLowerCase()))) {setShowSearch(false);};
    document.addEventListener('click', () => setShowSearch(false));
    return () => document.removeEventListener("click", () => setShowSearch(false));
  }, [searchInput, albums])


  const handleSearchResultClick = () => {
    setSearchInput('');
    document.getElementById('searchInput').value = '';
  }


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='homepageNavContainer'>
        <div className='homepageNavContainer2'>
          <ul className='homepageNavul'>
            <li className='homepageNavli'>
              <div className='homepageNavLeft'>
                <NavLink className='homepageLogoText' exact to="/">
                  <img src={'/images/veilr-logo.png'} alt="Logo" className='homepageLogoImage'></img>
                  veilr
                </NavLink>
                <NavLink className='you' to={`/users/${sessionUser.id}/myAlbums`}>You</NavLink>
                {/* <NavLink className={styles.explore} exact to="/">Explore</NavLink> */}
              </div>
              <div className='homepageNavRight' id='testtest'>
                <div className='homepageNavSearchBarContainer'>
                  <div className='homepageSearchIcon'><i class="fas fa-search"></i></div>
                  <input className='homepageNavSearchBar' id={(searchInput.length>0&&showSearch)?'searchInput':''} placeholder='Albums' type='text' onChange={e => {setSearchInput(e.target.value)}}></input>
                  {showSearch && <div className='homepageNavSearchBarResultContainer'>
                    {albums.filter(album => {
                      if (searchInput === '') {return null}
                      else if (album.title.toLowerCase().includes(searchInput.toLowerCase())) {return album}
                      return null;
                    }).slice(0, 5).map(album => {
                      return (
                        <NavLink className='albumUsernameAnchor' to={`/albums/${album.id}`} onClick={handleSearchResultClick}>
                          <div className='homepageNavSearchBarResultUsername'>{album.User.username}</div>
                          <div className='homepageNavSearchBarResultTitle'>{album.title}</div>
                        </NavLink>
                      )
                    })}
                  </div>}
                </div>
                <a href='https://wylin94.github.io/' className='homepagePortfolioIcon'>
                  <i className="fas fa-address-card"></i>
                </a>
                <a href='https://www.linkedin.com/in/wylin94/' className='homepageLinkedinIcon'>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href='https://github.com/wylin94' className='homepageGithubIcon'>
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
      <div className='landingNavContainer'>
        <ul className='landingNavul'>
          <li className='landingNavli'>
            <NavLink className='landingLogoText' exact to="/">
              <img src={'/images/veilr-logo.png'} alt="Logo" className='landingLogoImage'></img>
              veilr
            </NavLink>
            <span className='landingLoginSignup'>
              <NavLink to="/login" className='landingLogin'>Log In</NavLink>
              <NavLink to="/signup" className='landingSignup'>Sign Up</NavLink>
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