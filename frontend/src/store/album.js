import { csrfFetch } from './csrf';

const LOAD = 'albums/LOAD'
const CREATE = 'albums/CREATE'

const load = albums => ({
  type: LOAD,
  albums
})

const create = album => ({
  type: CREATE,
  album
})

export const getAlbum = () => async dispatch => {
  const res = await fetch('/api/albums');
  if (res.ok) {
    const albums = await res.json(); //array
    dispatch(load(albums));
  }
}

export const getMyAlbum = (userId) => async dispatch => {
  const res = await fetch(`/api/albums/${userId}`);
  if (res.ok) {
    const albums = await res.json(); //array
    // console.log(albums)
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
    default:
      return state;
  }
}

export default albumReducer;