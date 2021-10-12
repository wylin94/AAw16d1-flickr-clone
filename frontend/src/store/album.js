import { csrfFetch } from './csrf';

const LOAD = 'albums/LOAD';
const CREATE = 'album/CREATE';
const DELETEALBUM = 'album/DELETE';

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

export const deleteAlbum = (id) => async dispatch => {
  const {albumId} = id;
  const res = await csrfFetch(`/api/albums/${albumId}`, {
    method: 'DELETE'
  });
  if (res.ok) {
    const remove = await res.json();
    dispatch(toDelete(albumId));
    return remove;
  }
}

const albumReducer = (state = {}, action) => {
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
    default:
      return state;
  }
}

export default albumReducer;