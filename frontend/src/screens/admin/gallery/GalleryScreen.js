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
      <h1 className="text-3xl text-black pb-6">Image Uploads</h1>
      <div className="mt-6">
        <Link
          className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
          to={`${BASEURL}/admin/gallery/add`}
        >
          Add Images
        </Link>
      </div>

      <div className="w-full mt-6 overflow-auto">
        <div className="bg-white">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {images.map(({ path, _id }) => {
                  return (
                    <div className="p-2 lg:w-1/2">
                      <div className="h-full border-2 rounded-lg border-gray-200 border-opacity-70 p-1  items-center sm:justify-start justify-center">
                        <img
                          alt="upload"
                          className="rounded-lg h-48 md:mr-2 sm:mb-0 mb-4 object-cover"
                          src={`${BASEAPI}/gallery/${_id}`}
                        />
                        <button
                          className="m-2 px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded hover:text-red-500"
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
