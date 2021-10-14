import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MyAlbum.module.css';
import { getMyAlbum } from '../../store/album';

function MyAlbum() {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.album); // removed object.value and still work
  const userId = useSelector((state) => state.session.user.id);

  useEffect(() => {
    dispatch(getMyAlbum(userId));
  }, [dispatch, userId])

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.homePageAlbumContainer}>
        <h1>You</h1>
        <div>
          <NavLink to='/createAlbum'>Add Album</NavLink>
        </div>
        <div className={styles.albums}>
          {albums.map(album => {
            return (
              <div key={album.id} className={styles.album}>
                <NavLink to={`/albums/${album.id}`}>
                  <img className={styles.albumCover} src={album.coverImageUrl} alt={album.title}></img>
                </NavLink>
                <span>{album.User.username}</span>
                <span>{album.title}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MyAlbum;