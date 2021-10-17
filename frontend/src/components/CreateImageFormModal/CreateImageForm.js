import { useState } from "react";
import { useParams } from 'react-router';
import { useSelector, useDispatch } from "react-redux";

import { createImage } from '../../store/image';
import styles from "./CreateImageForm.module.css"

function CreateImageForm({onClose}) {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const userId = useSelector((state) => state.session.user.id)

  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    let newImage = await dispatch(createImage({url, description, userId, albumId}));
    if (newImage) {
      onClose();
    }
  }

  return (
    <div className={styles.createImageFormContainer}>
      <h2 className={styles.createImageFormTitle}>Create Image</h2>
      <form className={styles.createImageForm} onSubmit={handleCreateSubmit}>
        <label>URL</label>
        <input 
          type='text'
          required
          value={url}
          onChange={e => setUrl(e.target.value)} />
        <label>Description</label>
        <input 
          type='text'
          required
          value={description}
          onChange={e => setDescription(e.target.value)} />
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateImageForm;