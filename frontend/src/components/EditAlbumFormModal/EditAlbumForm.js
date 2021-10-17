import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { getMyAlbum, editAlbum } from '../../store/album';
import styles from "./EditAlbumForm.module.css"

function EditAlbumForm({onClose}) {
  const dispatch = useDispatch();
  const {albumId} = useParams();
  // const userId = useSelector((state) => state.session.user.id)
  const albums = useSelector((state) => state.album);

  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const toEdit = await dispatch(editAlbum({url, title, albumId}));
    if (toEdit) {
      onClose();
    }
  }

  // useEffect(() => {
  //   dispatch(getMyAlbum(userId));
  // }, [dispatch, userId])
  
  useEffect(() => {
    if (albums.length !== 0) {
      const selectedAlbum = albums.find(elem => elem.id === +albumId);
      setUrl(selectedAlbum.coverImageUrl);
      setTitle(selectedAlbum.title);
    } 
  }, [albums, albumId])

  return (
    <div className={styles.editAlbumFormContainer}>
      <h2 className={styles.editAlbumFormTitle}>Edit Album</h2>
      <form className={styles.editAlbumForm} onSubmit={handleEditSubmit}>
        <label>Album Cover Image URL</label>
        <input 
          type='text'
          required
          value={url}
          onChange={e => setUrl(e.target.value)} />
        <label>Album Title</label>
        <input 
          type='text'
          required
          value={title}
          onChange={e => setTitle(e.target.value)} />
        <button type='submit'>Edit</button>
      </form>
    </div>
  )
}

export default EditAlbumForm;