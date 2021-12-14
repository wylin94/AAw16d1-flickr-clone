import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';

import './MyAlbum.css';
import { getMyAlbum } from '../../store/album';
import CreateAlbumFormModal from '../CreateAlbumFormModal';

function MyAlbum() {
  const dispatch = useDispatch();
  const {userId} = useParams();
  const albums = useSelector((state) => state.album);
  const currentUser = useSelector((state) => state.session);
  // const userId = currentUser.user.id;

  const [currentAlbum, setCurrentAlbum] = useState([]);

  useEffect(() => {
    dispatch(getMyAlbum(userId));
  }, [dispatch, userId])

  useEffect(() => {
    const newAlbums = [];
    for (let i = 0; i < albums.length; i++) {
      if (albums[i].userId === +userId) {
        newAlbums.push(albums[i]);
      }
    }
    setCurrentAlbum(newAlbums);
  }, [albums, userId]) 

  return (
    <div className='MyAlbumContainer'>

      <div className='MyAlbumProfileContainer' style={{backgroundImage: `url(${currentAlbum[0]?.User.coverImageUrl || currentUser.user.coverImageUrl})`}}>
      {/* <div className='profileContainer' style={{backgroundImage: `url(${currentUser.user.coverImageUrl})`}}> */}
        <div className='MyAlbumProfileWrapper'>
          <img className='MyAlbumProfilePicture' src={currentAlbum[0]?.User.profileImageUrl || currentUser.user.profileImageUrl} alt="profileImage"></img>
          <div className='MyAlbumProfileName'>{currentAlbum[0]?.User.username || currentUser.user.username}</div>
        </div>
      </div>

      <div className='MyAlbumNavContainer'>
        <NavLink title='Back' className='MyAlbumBackIcon' to={`/`}>
          <i class="fas fa-arrow-left"></i>
        </NavLink>
        <CreateAlbumFormModal />
      </div>

      <div className='myAlbumAlbumContainer'>
        <div className='myAlbumAlbums'>
          {albums.length === 0 && <div className='myAlbumNoAlbum'>You don't have any albums yet.</div>}
          {albums.length > 0 && albums.map(album => {
            return (
              <div key={album.id} className='myAlbumAlbum'>
                <NavLink to={`/albums/${album.id}`}>
                  <img className='myAlbumAlbumCover' src={album.coverImageUrl} alt={album.title}></img>
                </NavLink>
                <div className='myAlbumAlbumInfo'>
                  <span>{album.title}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    
    </div>
  )
}

export default MyAlbum;