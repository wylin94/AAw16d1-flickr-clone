import { useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { createAlbum } from '../../store/album';

function CreateAlbumForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector((state) => state.session.user.id)

  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    let newAlbum = await dispatch(createAlbum({url, title, userId}));
    if (newAlbum) {
      history.push('/myAlbums')
    }
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push('/myAlbums');
  };

  return (
    <>
      <h2>Create Album</h2>
      <form onSubmit={handleCreateSubmit}>
        <label>Album Cover Image URL</label>
        <input 
          type='text'
          placeholder='Image URL'
          required
          value={url}
          onChange={e => setUrl(e.target.value)} />
        <label>Album Title</label>
        <input 
          type='text'
          placeholder='Albume Title'
          required
          value={title}
          onChange={e => setTitle(e.target.value)} />
        <button type='submit'>Create</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </>
  )
}

export default CreateAlbumForm;