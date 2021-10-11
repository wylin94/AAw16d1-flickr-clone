import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './MyAlbum.module.css';
import { getAlbum } from '../../store/album';

function MyAlbum() {
  const dispatch = useDispatch();
  const albums = useSelector((state) => Object.values(state.album))

  console.log(albums)
  useEffect(() => {
    dispatch(getAlbum());
  }, [dispatch])

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.homePageAlbumContainer}>
        <h6>Albums</h6>
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