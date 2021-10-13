import { useParams, useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteAlbum } from "../../store/album";

function SelectedAlbum() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {albumId} = useParams();

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    const toRemove = await dispatch(deleteAlbum(albumId));
    if (toRemove) {
      history.push('/myAlbums')
    }
  }

  // const handleEditClick = async (e) => {
  //   e.preventDefault();
  //   const edit = await dispatch(editAlbum(albumId));
  //   if (edit) {
  //     history.push('/myAlbums')
  //   }
  // }

  return (
    <div>
      <div>
        <NavLink to={`/editAlbumForm/${albumId}`}>Edit Album</NavLink>
        {/* <button onClick={handleEditClick}>Edit Album</button> */}
        <button onClick={handleDeleteClick}>Delete Album</button>
        <span></span>
        <div>
      
        </div>
      </div>
    </div>
  )
}

export default SelectedAlbum;