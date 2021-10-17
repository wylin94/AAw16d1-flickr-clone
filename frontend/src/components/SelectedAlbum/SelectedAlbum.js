import { useParams, useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import styles from './SelectedAlbum.module.css';
import { getAlbum, deleteAlbum } from "../../store/album";
import { getImage } from "../../store/image";
import CreateImageFormModal from '../CreateImageFormModal';
import EditAlbumFormModal from '../EditAlbumFormModal';

function SelectedAlbum() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {albumId} = useParams();
  const currentAlbum = useSelector(state => state.album.find(ele => ele.id === +albumId));
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

  const handleOpenClick = (e) => {
    const albumNav = document.querySelector("#imageNav");
    albumNav.scrollIntoView({behavior: "smooth"});
  }

  const handleBackUpClick = (e) => {
    const albumNav = document.querySelector("#scrollToImageContainer");
    albumNav.scrollIntoView({behavior: "smooth"});
  }

  useEffect(() => {
    dispatch(getAlbum());
  }, [dispatch])

  useEffect(() => {
    dispatch(getImage(albumId));
  }, [dispatch, albumId, sessionUser])

  //to solve render previous image at the very beginning
  useEffect(() => {
    const newImages = [];
    for (let i = 0; i < images.length; i++) {
      if (images[i].albumId === +albumId) {
        newImages.push(images[i]);
      }
    }
    setAlbumImages(newImages);
  }, [images, albumId]) 

  // window.scrollTo(0, 0);
  
  return (
    <div className={styles.selectedAlbumPage}>

      <div className={styles.albumCoverContainer} style={{backgroundImage: `url(${currentAlbum?.coverImageUrl})`}}>
        <div className={styles.darken}> 
          <h1 className={styles.inCoverTitle}>{currentAlbum?.title.toUpperCase()}</h1>
          <button className={styles.openScroll} onClick={handleOpenClick}>OPEN</button>
        </div>
      </div>

      <div id='imageNav' className={styles.albumNavContainer}>
        <div className={styles.albumNav}>
          <div className={styles.navLeft}> 
            <NavLink title='Back' className={styles.addImage} to={`/`}>
              <i class="fas fa-arrow-left"></i>
            </NavLink>
            <h2 className={styles.title}>{currentAlbum?.title}</h2>
          </div>
          <div className={styles.navRight}>
            {/* {sessionUser.id === currentAlbum.userId &&
              <NavLink title="Add Image"className={styles.addImage} to={`/createImage/${albumId}`}>
                <i class="fas fa-camera"></i>
              </NavLink>} */}
            <CreateImageFormModal />
            {/* {sessionUser.id === currentAlbum.userId && 
              <NavLink title="Edit Album" className={styles.editAlbum} to={`/albums/${albumId}/edit`}>
                <i class="fas fa-edit"></i>
              </NavLink>} */}
            <EditAlbumFormModal />
            {sessionUser.id === currentAlbum?.userId && 
              <button title="Delete Album" className={styles.deleteAlbum} onClick={handleDeleteClick}>
                <i class="fas fa-trash-alt"></i>
              </button>}
          </div>
        </div>
      </div>

      <div id='scrollToImageContainer' className={styles.imageContainer}>
        {currentAlbumImages.map(image => {
          return (
              <NavLink className={styles.aTag} key={image.id} to={`/images/${image.id}`}>
                <div className={styles.imageWrapper}>
                  <img className={styles.image} src={image.imageUrl} alt={image.description}></img>
                </div>
              </NavLink>
          )
        })}
      </div>
      
      <button className={styles.backToTop} onClick={handleBackUpClick}>BACK TO TOP</button>
    </div>
  )
}

export default SelectedAlbum;