import { useParams, useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { deleteAlbum } from "../../store/album";

function SelectedAlbum() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {albumId} = useParams();
  const album = useSelector(state => state.album.find(ele => ele.id === +albumId))
  const sessionUser = useSelector(state => state.session.user);

  const handleDeleteClick = async (e) => {
    console.log(1111111)
    e.preventDefault();
    const toRemove = await dispatch(deleteAlbum(albumId));
    console.log(77777)
    if (toRemove) {
      console.log(88888)
      history.push('/myAlbums')
    }
  }

  return (
    <div>
      <div>
        {sessionUser.id === album.userId && <NavLink to={`/albums/${albumId}/edit`}>Edit Album</NavLink>}
        {sessionUser.id === album.userId && <button onClick={handleDeleteClick}>Delete Album</button>}
        <span></span>
        <div>
      
        </div>
      </div>
    </div>
  )
}

export default SelectedAlbum;