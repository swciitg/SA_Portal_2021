import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Gallery from "react-photo-gallery";
import { BASEAPI } from "../../../constants";
import { listImages } from "../../../actions/gallery";

const GalleryCart = () => {
  const gallery = useSelector((state) => state.images);
  const photos = gallery.map(({ _id }) => {
    return { src: `${BASEAPI}/gallery/${_id}`, direction: "row" };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listImages());
  }, [dispatch]);
  console.log(photos);

  return (
    <div class="min-h-screen">
      <Gallery photos={photos} />
    </div>
  );
};

export default GalleryCart;
