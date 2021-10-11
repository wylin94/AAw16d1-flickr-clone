

export const getAlbum = () => async dispatch => {
  const res = await fetch('/api/albums');

  if (res.ok) {

  }
}

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALBUM: {

      return {
      };
    }
  
    default:
      return state;
  }
}

export default albumReducer;