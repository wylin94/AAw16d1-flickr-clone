import { useParams, useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import './SelectedAlbum.css';
import { getAlbum, deleteAlbum, getMyAlbum } from "../../store/album";
import { getImage } from "../../store/image";
import CreateImageFormModal from '../CreateImageFormModal';
import EditAlbumFormModal from '../EditAlbumFormModal';

function SelectedAlbum() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {albumId} = useParams();
  const currentAlbum = useSelector(state => state.album.find(ele => ele.id === +albumId));
  const sessionUser = useSelector(state => state.session.user);
  const images = useSelector(state => state.image);

  const [currentAlbumImages, setAlbumImages] = useState([]);

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    const toRemove = await dispatch(deleteAlbum(albumId));
    if (toRemove) {
      history.push(`/users/${currentAlbum.userId}/myAlbums`)
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

  // useEffect(() => {
  //   if (currentAlbum !== undefined) {
  //     dispatch(getMyAlbum(currentAlbum[0]?.User.id));
  //   };
  // }, [dispatch, currentAlbum])

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
    <div className='selectedAlbumPage'>
      <div className='selectedAlbumAlbumCoverContainer' style={{backgroundImage: `url(${currentAlbum?.coverImageUrl})`}}>
        <div className='selectedAlbumDarken'> 
          <h1 className='selectedAlbumInCoverTitle'>{currentAlbum?.title.toUpperCase()}</h1>
          <button className='selectedAlbumOpenScroll' onClick={handleOpenClick}>OPEN</button>
        </div>
      </div>
      <div id='imageNav' className='selectedAlbumAlbumNavContainer'>
        <div className='selectedAlbumAlbumNav'>
          <div className='selectedAlbumNavLeft'> 
            <NavLink title='Back' className='selectedAlbumGoBack' to={`/`}>
              <i className="fas fa-arrow-left"></i>
            </NavLink>
            <h2 className='selectedAlbumTitle'>{currentAlbum?.title}</h2>
          </div>
          <div className='selectedAlbumNavRight'>
            {/* {sessionUser.id === currentAlbum.userId &&
              <NavLink title="Add Image"className='addImage' to={`/createImage/${albumId}`}>
                <i className="fas fa-camera"></i>
              </NavLink>} */}
            {sessionUser.id === currentAlbum?.userId && <CreateImageFormModal />}
            {/* {sessionUser.id === currentAlbum.userId && 
              <NavLink title="Edit Album" className='editAlbum' to={`/albums/${albumId}/edit`}>
                <i className="fas fa-edit"></i>
              </NavLink>} */}
            {sessionUser.id === currentAlbum?.userId && <EditAlbumFormModal />}
            {sessionUser.id === currentAlbum?.userId && 
              <button title="Delete Album" className='selectedAlbumDeleteAlbum' onClick={handleDeleteClick}>
                <i className="fas fa-trash-alt"></i>
              </button>}
          </div>
        </div>
      </div>
      {currentAlbumImages.length === 0 && <div className='selectedAlbumNoImage'>You don't have any photos yet.</div>}
      <div id='scrollToImageContainer' className='selectedAlbumImageContainer'>
        {currentAlbumImages.length > 0 && currentAlbumImages.map(image => {
          return (
              <NavLink className='selectedAlbumaTag' key={image.id} to={`/images/${image.id}`}>
                <div className='selectedAlbumImageWrapper'>
                  <img className='selectedAlbumImage' src={image.imageUrl} alt={image.description}></img>
                </div>
              </NavLink>
          )
        })}
      </div>
      <button className='selectedAlbumBackToTop' onClick={handleBackUpClick}>BACK TO TOP</button>
    </div>
  )
}

export default SelectedAlbum;