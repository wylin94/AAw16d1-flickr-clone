
const LOAD = 'albums/LOAD'

const load = albums => ({
  type: LOAD,
  albums
})

export const getAlbum = () => async dispatch => {
  const res = await fetch('/api/albums');
  if (res.ok) {
    const albums = await res.json();
    dispatch(load(albums));
  }
}

export const getMyAlbum = (userId) => async dispatch => {
  const res = await fetch(`/api/albums/${userId}`);
  if (res.ok) {
    const albums = await res.json();
    dispatch(load(albums));
  }
}

export const createAlbum = (album) => async dispatch => {
  const { url, title, userId } = album;
  console.log(url, title, userId)
  const res = await fetch(`/api/albums/${userId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({url, title, userId}),
  });

  if (res.ok) {
    const albums = await res.json();
    dispatch(load(albums));
  }
}

const albumReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD: {
      const allAlbums = {};
      action.albums.forEach(album => {
        allAlbums[album.id] = album;
      });
      return {...allAlbums};
    }
    default:
      return state;
  }
}

export default albumReducer;