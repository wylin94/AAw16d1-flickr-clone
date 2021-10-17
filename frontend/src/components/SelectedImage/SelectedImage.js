import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SelectedImage.module.css';
import { deleteImage } from "../../store/image";

function SelectedImage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { imageId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const currentImage = useSelector(state => state.image.find(
    ele => ele.id === +imageId
  ))

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    const toRemove = await dispatch(deleteImage(imageId));
    if (toRemove) {
      history.push(`/albums/${currentImage.albumId}`)
    }
  }

  return (
    <>
      <div className={styles.selectedImageContainer}>
        <div className={styles.SelectedImageButtonContainer}>
          {sessionUser.id === currentImage.userId && <button>Back</button>}
          {sessionUser.id === currentImage.userId && <button onClick={handleDeleteClick}>Delete Image</button>}
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={currentImage.imageUrl} alt={currentImage.description}></img>
        </div>
        
      </div>
    </>
  )
}

export default SelectedImage;