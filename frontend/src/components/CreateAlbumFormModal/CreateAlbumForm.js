import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAlbum } from '../../store/album';
import styles from "./CreateAlbumForm.module.css"

function CreateAlbumForm({onClose}) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id)

  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    let newAlbum = await dispatch(createAlbum({url, title, userId}));
    if (newAlbum) {
      onClose();
    }
  }

  return (
    <div className={styles.createAlbumFormContainer}>
      <h2 className={styles.createAlbumFormTitle}>Create Album</h2>
      <form className={styles.createAlbumForm} onSubmit={handleCreateSubmit}>
        <label>Album Cover Image URL</label>
        <input 
          type='text'
          required
          value={url}
          onChange={e => setUrl(e.target.value)} />
        <label>Title</label>
        <input 
          type='text'
          required
          value={title}
          onChange={e => setTitle(e.target.value)} />
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateAlbumForm;