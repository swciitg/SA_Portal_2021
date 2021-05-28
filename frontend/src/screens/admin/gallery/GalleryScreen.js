import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { listForms, deleteForm } from "../../../actions/forms";
import { listImages, deleteImage } from "../../../actions/gallery";
import { BASEURL, BASEAPI } from "../../../constants";

const GalleryScreen = () => {
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listImages());
  }, [dispatch]);

  return (
    <>
      <h1 class="text-3xl text-black pb-6">Image Uploads</h1>
      <div class="mt-6">
        <Link
          class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
          to={`${BASEURL}/admin/gallery/add`}
        >
          Add Images
        </Link>
      </div>

      <div class="w-full mt-6 overflow-auto">
        <div class="bg-white">
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">
                {images.map(({ path, _id }) => {
                  return (
                    <div class="p-2 lg:w-1/2">
                      <div class="h-full border-2 rounded-lg border-gray-200 border-opacity-70 p-1  items-center sm:justify-start justify-center">
                        <img
                          alt="upload"
                          class="rounded-lg h-48 md:mr-2 sm:mb-0 mb-4 object-cover"
                          src={`${BASEAPI}/gallery/${_id}`}
                        />
                        <button
                          class="m-2 px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded hover:text-red-500"
                          onClick={() => {
                            dispatch(deleteImage(_id));
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default GalleryScreen;
