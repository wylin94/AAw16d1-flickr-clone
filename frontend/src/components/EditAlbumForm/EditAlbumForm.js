import { useState } from "react";
import { useParams, useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { editAlbum } from '../../store/album';

function EditAlbumForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const albumId = params.albumId
  const userId = useSelector((state) => state.session.user.id)

  // const selectedAlbum = useSelector((state) => state.album.find(ele => ele.id === albumId));
  console.log(11111111111)
  // console.log(selectedAlbum);
  // const currentUrl = selectedAlbum.coverImageUrl;
  // const currentTitle = selectedAlbum.title;

  const [url, setUrl] = useState();
  const [title, setTitle] = useState();

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    let edit = await dispatch(editAlbum({url, title, userId}));
    if (edit) {
      history.push('/myAlbums')
    }
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push('/myAlbums');
  };

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
        <button type='submit'>Create</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </>
  )
}

export default EditAlbumForm;