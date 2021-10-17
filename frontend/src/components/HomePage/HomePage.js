import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './HomePage.module.css';
import { getAlbum } from '../../store/album';

function HomePage() {
  const dispatch = useDispatch();
  const albums = useSelector((state) => Object.values(state.album))

  useEffect(() => {
    dispatch(getAlbum());
  }, [dispatch])

  // window.scrollTo(0, 0);
  
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.homePageAlbumContainer}>
        <h1>Explore</h1>
        <div className={styles.albums}>
          {albums.map(album => {
            return (
              <div key={album.id} className={styles.album}>
                <NavLink to={`/albums/${album.id}`}>
                  <img className={styles.albumCover} src={album.coverImageUrl} alt={album.title}></img>
                </NavLink>
                <div className={styles.albumInfo}>
                  <div>
                    <img className={styles.profilePicture} src={album.User.profileImageUrl} alt="userProfileCover"></img>
                  </div>
                  <div>
                    <div className={styles.albumUsername}>{album.User.username}</div>
                    <div className={styles.albumTitle}>{album.title}</div>
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