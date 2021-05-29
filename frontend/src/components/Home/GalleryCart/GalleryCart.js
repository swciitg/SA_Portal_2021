import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./GalleryCart.css";
import Gallery from "react-photo-gallery";
import { BASEAPI } from "../../../constants";
import { listImages } from "../../../actions/gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const GalleryCart = () => {
  const gallery = useSelector((state) => state.images);

  const photos = gallery.map(({ _id, img_width, img_height }) => {
    const total = img_height + img_width;
    return {
      src: `${BASEAPI}/gallery/${_id}`,
      width: (img_width / total) * 10,
      height: (img_height / total) * 10,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listImages());
  }, [dispatch]);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div class="main_img_gallery_container bg-blue-50">
      <Gallery
        photos={photos}
        margin={5}
        //onClick={openLightbox}
      />
      {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
    </div>
  );
};

export default GalleryCart;
