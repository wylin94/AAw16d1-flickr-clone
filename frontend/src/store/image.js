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

export const getImage = (albumId) => async dispatch => {
  const res = await csrfFetch(`/api/images/${albumId}`);
  if (res.ok) {
    const images = await res.json();
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
    dispatch(toDelete(imageId));
    return remove;
  }
}

const imageReducer = ( state = [], action) => {
  switch (action.type) {
    case LOAD: {
      return action.images;
    }
    case CREATE: {
      const newImage = [...state];
      newImage.unshift(action.image);
      return newImage;
    }
    case DELETEIMAGE: {
      const currentImages = [...state];
      const newImages = currentImages.filter(ele => {
        return ele.id !== action.albumId;
      })
      return newImages;
    }

    default:
      return state;
    }
}

export default imageReducer;