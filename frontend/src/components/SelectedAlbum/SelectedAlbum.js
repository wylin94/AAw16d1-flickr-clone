import { useParams, useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { deleteAlbum } from "../../store/album";

function SelectedAlbum() {
  const dispatch = useDispatch();
  const history = useHistory();
  const albumId = useParams();

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    const toRemove = await dispatch(deleteAlbum(albumId));
    if (toRemove) {
      history.push('/myAlbums')
    }
  }

  return (
    <div>
      <div>
        <span>Edit Album</span>
        <button onClick={handleDeleteClick}>Delete Album</button>
        <span></span>
        <div>
      
        </div>
      </div>
    </div>
  )
}

export default SelectedAlbum;