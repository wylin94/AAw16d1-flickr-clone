import { csrfFetch } from './csrf';

const LOAD = 'images/LOAD';
const CREATE = 'image/CREATE';
const DELETEIMAGE = 'iamge/DELETE';

const load = images => ({
  type: LOAD,
  images
});

const create = image => ({
  type: CREATE,
  image
});

const toDelete = imageId => ({
  type: DELETEIMAGE,
  imageId
});

export const getImage = (currentAlbum) => async dispatch => {
  const res = await csrfFetch(`/api/images/${currentAlbum.id}`);
  if (res.ok) {
    const images = await res.json();
    console.log(11111)
    console.log('type of image:', typeof images)
    console.log('why is this array then?', images)
    dispatch(load(images));
  }
}

export const createImage = (image) => async dispatch => {
  const { url, description, userId, albumId } = image;
  const res = await csrfFetch(`/api/images`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({url, description, userId, albumId}),
  });
  if (res.ok) {
    const image = await res.json();
    console.log(222222)
    console.log(typeof image)
    console.log(image)
    dispatch(create(image));
    return image;
  }
}

export const deleteImage = (imageId) => async dispatch => {
  const res = await csrfFetch(`/api/images/${imageId}`, {
    method: 'DELETE'
  });
  if (res.ok) {
    const remove = await res.json();
    
    console.log(222222)
    console.log(typeof remove)
    console.log(remove)
    dispatch(toDelete(imageId));
    return remove;
  }
}

const imageReducer = ( state = [], action) => {
  switch (action.type) {
    case LOAD: {
      return action.images;
    }



    default:
      return state;
    }
}

export default imageReducer;