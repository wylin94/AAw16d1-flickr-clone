import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import { getAllImage } from "../../store/image";
import { getAlbum } from '../../store/album';
import DeleteImageModal from './DeleteImageModal';
import './SelectedImage.css';

function SelectedImage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { imageId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const allImages = useSelector(state => state.image);
  const currentImage = useSelector(state => state.image.find(
    ele => ele.id === +imageId
  ))

  if (allImages.length > 0 && !currentImage) {
    history.push('/pageNotFound');
  }

  useEffect(() => {
    dispatch(getAllImage());
  }, [dispatch])

  useEffect(() => {
    dispatch(getAlbum());
  }, [dispatch])

  return (
      <div className='selectedImageContainer'>
        <div className='SelectedImageButtonContainer'>
          <NavLink title='Back' className='selectedImageBackIcon' to={`/albums/${currentImage?.albumId}`}>
            <i className="fas fa-arrow-left"></i>
          </NavLink>
          {sessionUser.id === currentImage?.userId && <DeleteImageModal />}
        </div>
        <div className='selectedImageImageContainer'>
          <img className='selectedImageImage' src={currentImage?.imageUrl} alt={currentImage?.description}></img>
        </div>
      </div>
  )
}

export default SelectedImage;