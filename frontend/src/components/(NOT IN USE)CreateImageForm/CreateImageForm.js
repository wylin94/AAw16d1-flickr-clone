import { useState } from "react";
import { useHistory, useParams } from 'react-router';
import { useSelector, useDispatch } from "react-redux";

import { createImage } from '../../store/image';
import styles from "./CreateImageForm.module.css"

function CreateImageForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { albumId } = useParams();
  const userId = useSelector((state) => state.session.user.id)

  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    let newImage = await dispatch(createImage({url, description, userId, albumId}));
    if (newImage) {
      history.push(`/albums/${albumId}`)
    }
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push(`/albums/${albumId}`);
  };

  return (
    <div className={styles.createImageFormContainer}>
      <h2>Create Image</h2>
      <form onSubmit={handleCreateSubmit}>
        <label>Image URL</label>
        <input 
          type='text'
          placeholder='Image URL'
          required
          value={url}
          onChange={e => setUrl(e.target.value)} />
        <label>Image description</label>
        <input 
          type='text'
          placeholder='Albume Title'
          required
          value={description}
          onChange={e => setDescription(e.target.value)} />
        <button type='submit'>Create</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </div>
  )
}

export default CreateImageForm;