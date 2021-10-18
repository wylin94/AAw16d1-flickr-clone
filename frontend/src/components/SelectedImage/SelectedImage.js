import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import styles from './SelectedImage.module.css';
import { deleteImage } from "../../store/image";
import { getAlbum } from '../../store/album';

function SelectedImage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { imageId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const currentImage = useSelector(state => state.image.find(
    ele => ele.id === +imageId
  ))

  if (!currentImage) {
    history.push('/pageNotFound');
  }

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    const toRemove = await dispatch(deleteImage(imageId));
    if (toRemove) {
      history.push(`/albums/${currentImage.albumId}`)
    }
  }

  useEffect(() => {
    dispatch(getAlbum());
  }, [dispatch])

  return (
    <>
      <div className={styles.selectedImageContainer}>
        <div className={styles.SelectedImageButtonContainer}>
          <NavLink title='Back' className={styles.backIcon} to={`/albums/${currentImage?.albumId}`}>
            <i class="fas fa-arrow-left"></i>
          </NavLink>
          {sessionUser.id === currentImage?.userId && 
            <button title="Delete Image" className={styles.deleteImage} onClick={handleDeleteClick}>
              <i class="fas fa-trash-alt"></i>
            </button>}
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={currentImage?.imageUrl} alt={currentImage?.description}></img>
        </div>
        
      </div>
    </>
  )
}

export default SelectedImage;