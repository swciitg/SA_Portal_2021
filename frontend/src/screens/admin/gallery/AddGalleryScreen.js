import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createImage } from "../../../actions/gallery";
import { useHistory } from "react-router-dom";
import { BASEURL } from "../../../constants";

const AddGalleryScreen = () => {
  const [file, setFile] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("path", file);
    dispatch(createImage(formData));
    history.push(`${BASEURL}/admin/gallery`);
  };
  return (
    <>
      <h1 class="text-3xl text-black pb-6">Upload</h1>

      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
          <div class="leading-loose">
            <form
              class="p-10 bg-white rounded shadow-xl"
              onSubmit={(e) => formSubmitHandler(e)}
            >
              <div class="mt-2">
                <label class="block text-sm text-gray-600" for="file">
                  Image
                </label>
                <input
                  class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  placeholder="File"
                  required
                />
              </div>

              <div class="mt-6">
                <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddGalleryScreen;
