import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';

import styles from './MyAlbum.module.css';
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
    <div className={styles.homePageContainer}>

      <div className={styles.profileContainer} style={{backgroundImage: `url(${currentAlbum[0]?.User.coverImageUrl || currentUser.user.coverImageUrl})`}}>
      {/* <div className={styles.profileContainer} style={{backgroundImage: `url(${currentUser.user.coverImageUrl})`}}> */}
        <div className={styles.profileWrapper}>
          <img className={styles.profilePicture} src={currentAlbum[0]?.User.profileImageUrl || currentUser.user.profileImageUrl} alt="profileImage"></img>
          <div className={styles.profileName}>{currentAlbum[0]?.User.username || currentUser.user.username}</div>
        </div>
      </div>

      <div className={styles.albumNavContainer}>
        {/* <NavLink title="Add Album" className={styles.addAlbum} to='/createAlbum'>
          <i class="fas fa-folder-plus"></i>
        </NavLink> */}
        <NavLink title='Back' className={styles.backIcon} to={`/`}>
          <i class="fas fa-arrow-left"></i>
        </NavLink>
        <CreateAlbumFormModal />
      </div>

      <div className={styles.myAlbumAlbumContainer}>
        <div className={styles.albums}>
          {albums.length === 0 && <div className={styles.noAlbum}>You don't have any albums yet.</div>}
          {albums.length > 0 && albums.map(album => {
            return (
              <div key={album.id} className={styles.album}>
                <NavLink to={`/albums/${album.id}`}>
                  <img className={styles.albumCover} src={album.coverImageUrl} alt={album.title}></img>
                </NavLink>
                <div className={styles.albumInfo}>
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








// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';

// import styles from './MyAlbum.module.css';
// import { getMyAlbum } from '../../store/album';
// import CreateAlbumFormModal from '../CreateAlbumFormModal';

// function MyAlbum() {
//   const dispatch = useDispatch();
//   const albums = useSelector((state) => state.album); // removed object.value and still work
//   const currentUser = useSelector((state) => state.session);
//   const userId = currentUser.user.id;

//   useEffect(() => {
//     dispatch(getMyAlbum(userId));
//   }, [dispatch, userId])

//   return (
//     <div className={styles.homePageContainer}>

//       <div className={styles.profileContainer} style={{backgroundImage: `url(${currentUser.user.coverImageUrl})`}}>
//         <div className={styles.profileWrapper}>
//           <img className={styles.profilePicture} src={currentUser.user.profileImageUrl} alt="profileImage"></img>
//           <div className={styles.profileName}>{currentUser.user.username}</div>
//         </div>
//       </div>

//       <div className={styles.homePageAlbumContainer}>
//         <div>
//           {/* <NavLink title="Add Album" className={styles.addAlbum} to='/createAlbum'>
//             <i class="fas fa-folder-plus"></i>
//           </NavLink> */}
//           <CreateAlbumFormModal />
//         </div>
//         <div className={styles.albums}>
//           {albums.map(album => {
//             return (
//               <div key={album.id} className={styles.album}>
//                 <NavLink to={`/albums/${album.id}`}>
//                   <img className={styles.albumCover} src={album.coverImageUrl} alt={album.title}></img>
//                 </NavLink>
//                 <div className={styles.albumInfo}>
//                   <span>{album.title}</span>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>

    
//     </div>
//   )
// }

// export default MyAlbum;