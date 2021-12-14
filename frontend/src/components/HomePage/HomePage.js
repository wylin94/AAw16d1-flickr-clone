import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './HomePage.css';
import { getAlbum } from '../../store/album';

function HomePage() {
  const dispatch = useDispatch();
  const albums = useSelector((state) => Object.values(state.album))

  useEffect(() => {
    dispatch(getAlbum());
  }, [dispatch])

  // window.scrollTo(0, 0);
  
  return (
    <div className='homePageContainer'>
      <div className='homePageAlbumContainer'>
        <div className='homePageAlbums'>
          {albums.map(album => {
            return (
              <div key={album.id} className='homePageAlbum'>
                <NavLink to={`/albums/${album.id}`}>
                  <img className='homePageAlbumCover' src={album.coverImageUrl} alt={album.title}></img>
                </NavLink>
                <div className='homePageAlbumInfo'>
                  <div>
                    <img className='homePageProfilePicture' src={album.User.profileImageUrl} alt="userProfileCover"></img>
                  </div>
                  <div>
                    <NavLink className='homePageAlbumUsernameAnchor' to={`/users/${album.userId}/myAlbums`}>
                      <div className='homePageAlbumUsername'>{album.User.username}</div>
                    </NavLink>
                    <div className='homePageAlbumTitle'>{album.title}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomePage;