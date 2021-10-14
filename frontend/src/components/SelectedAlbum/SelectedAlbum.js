import { useParams, useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import styles from './SelectedAlbum.module.css';
import { deleteAlbum } from "../../store/album";
import { getImage } from "../../store/image";

function SelectedAlbum() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {albumId} = useParams();
  const currentAlbum = useSelector(state => state.album.find(ele => ele.id === +albumId))
  const sessionUser = useSelector(state => state.session.user);
  const images = useSelector(state => state.image)

  const [currentAlbumImages, setAlbumImages] = useState([]);

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    const toRemove = await dispatch(deleteAlbum(albumId));
    if (toRemove) {
      history.push('/myAlbums')
    }
  }

  useEffect(() => {
    dispatch(getImage(currentAlbum));
  }, [dispatch, currentAlbum, sessionUser])

  useEffect(() => {
    const newImages = [];
    for (let i = 0; i < images.length; i++) {
      if (images[i].albumId === +albumId) {
        newImages.push(images[i]);
      }
    }
    setAlbumImages(newImages);
  }, [images, albumId])

  return (
    <div className={styles.selectedAlbumContainer}>

      <div className={styles.albumCoverContainer}>
        <img ClassName={styles.albumCoverImage} src={currentAlbum.coverImageUrl} alt="albumCover"></img>
      </div>

      <div className={styles.albumNavContainer}>
        <h2>{currentAlbum.title}</h2>
        <div>
          {sessionUser.id === currentAlbum.userId && 
            <NavLink to={`/albums/${albumId}/edit`}>
              <i class="fas fa-edit"></i>
            </NavLink>}
          {sessionUser.id === currentAlbum.userId && 
            <button onClick={handleDeleteClick}>
              <i class="fas fa-trash-alt"></i>
            </button>}
          {sessionUser.id === currentAlbum.userId &&
            <NavLink to={`/createImage/${albumId}`}>
              <i class="fas fa-camera"></i>
            </NavLink>}
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.images}>
          {currentAlbumImages.map(image => {
            return (
              <div key={image.id} className={styles.image}>
                <NavLink to={`/images/${image.id}`}>
                  <img className={styles.imageCover} src={image.imageUrl} alt={image.description}></img>
                </NavLink>
              </div>
            )
          })}
        </div>
      </div>
      
    </div>
  )
}

export default SelectedAlbum;