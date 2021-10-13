import EditAlbumForm from '../components/EditAlbumForm';
import { csrfFetch } from './csrf';

const LOAD = 'albums/LOAD';
const CREATE = 'album/CREATE';
const DELETEALBUM = 'album/DELETE';
const EDIT = 'album/EDIT';

const load = albums => ({
  type: LOAD,
  albums
})

const create = album => ({
  type: CREATE,
  album
})

const toDelete = albumId => ({
  type: DELETEALBUM,
  albumId
})

const toEdit = album => ({
  type: EDIT,
  album
})

export const getAlbum = () => async dispatch => {
  const res = await csrfFetch('/api/albums');
  if (res.ok) {
    const albums = await res.json(); //array
    dispatch(load(albums));
  }
}

export const getMyAlbum = (userId) => async dispatch => {
  const res = await csrfFetch(`/api/albums/${userId}`);
  if (res.ok) {
    const albums = await res.json(); //array
    dispatch(load(albums));
  }
}

export const createAlbum = (album) => async dispatch => {
  const { url, title, userId } = album;
  const res = await csrfFetch(`/api/albums/myAlbum`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({url, title, userId}),
  });
  if (res.ok) {
    const album = await res.json(); //object
    dispatch(create(album));
    return album;
  }
}

export const deleteAlbum = (albumId) => async dispatch => {
  const res = await csrfFetch(`/api/albums/${albumId}`, {
    method: 'DELETE'
  });
  if (res.ok) {
    const remove = await res.json();
    dispatch(toDelete(albumId));
    return remove;
  }
}

export const editAlbum = (album) => async dispatch => {
  const {url, title, albumId} = album;
  console.log(2222222)
  const res = await csrfFetch(`/api/albums/${albumId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({url, title,}),
  })
  console.log(55555555)
  if (res.ok) {
    console.log(666666)
    const edit = await res.json();
    console.log(777777)
    dispatch(toEdit(album));
    console.log(8888888)
    return edit;
  }
}

const albumReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD: {
      // const allAlbums = {};
      // action.albums.forEach(album => {
      //   allAlbums[album.id] = album;
      // });
      // return {...allAlbums}; //return object, therefore cannot sort in homepage
      return action.albums;
    }
    case CREATE: {
      const newAlbum = {...state}
      newAlbum[action.album.id] = action.album;
      return newAlbum;
    }
    case DELETEALBUM: {
      const newAlbum = {...state}
      delete newAlbum[action.albumId];
      return newAlbum;
    }
    case EDIT: {
      const newAlbum = [...state]
      newAlbum.forEach(ele => {
        if (ele.id === action.album.albumId) {
          ele.coverImageUrl = action.album.url;
          ele.title = action.album.title;
        }
      });
      console.log(1111111111)
      console.log(newAlbum)
      console.log(1111111111)
      return newAlbum;
    }
    default:
      return state;
  }
}

export default albumReducer;