import {
  GALLERY_CREATE_REQUEST,
  GALLERY_DELETE_REQUEST,
  GALLERY_LIST_REQUEST,
} from "../constants";

const images = (images = [], action) => {
  switch (action.type) {
    case GALLERY_LIST_REQUEST:
      return action.payload;
    case GALLERY_DELETE_REQUEST:
      return images.filter((image) => image._id !== action.payload);
    case GALLERY_CREATE_REQUEST:
      return [...images, action.payload];
    default:
      return images;
  }
};

export default images;
