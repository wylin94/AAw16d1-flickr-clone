import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MyAlbum.module.css';
import { getMyAlbum } from '../../store/album';

function MyAlbum() {
  const dispatch = useDispatch();
  const albums = useSelector((state) => Object.values(state.album))
  const userId = useSelector((state) => state.session.user.id)

  useEffect(() => {
    dispatch(getMyAlbum(userId));
  }, [dispatch, userId])

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.homePageAlbumContainer}>
        <NavLink to='/createAlbumForm'>New Album</NavLink>
        <div className={styles.albums}>
          {albums.map(album => {
            return (
              <div key={album.id}className={styles.album}>
                <img className={styles.albumCover} src={album.coverImageUrl} alt={album.title}></img>
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