import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { getMyAlbum, editAlbum } from '../../store/album';


function EditAlbumForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {albumId} = useParams();
  const userId = useSelector((state) => state.session.user.id)
  const albums = useSelector((state) => state.album);

  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    let edit = await dispatch(editAlbum({url, title, albumId}));
    if (edit) {
      history.push('/myAlbums')
    }
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push('/myAlbums');
  };

  useEffect(() => {
    dispatch(getMyAlbum(userId));
  }, [dispatch, userId])
  
  useEffect(() => {
    if (albums.length !== 0) {
      const selectedAlbum = albums.find(elem => elem.id === +albumId);
      setUrl(selectedAlbum.coverImageUrl);
      setTitle(selectedAlbum.title);
    } 
  }, [albums, albumId])

  return (
    <>
      <h2>Edit Album</h2>
      <form onSubmit={handleEditSubmit}>
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
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </>
  )
}

export default EditAlbumForm;