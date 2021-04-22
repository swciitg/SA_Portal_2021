import React, { useState } from "react";

const AnnouncementForm = ({ type }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [important, setImportant] = useState(false);
  const [link, setLink] = useState("");

  const formSubmitHandler = () => {};
  return (
    <>
      <p className="text-xl pb-6 flex items-center">
        <i className="fas fa-list mr-3"></i> {type} Announcement
      </p>
      <div className="leading-loose">
        <form
          className="p-10 bg-white rounded shadow-xl"
          onSubmit={() => formSubmitHandler()}
        >
          <div className="">
            <label className="block text-sm text-gray-600" for="title">
              Title
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm text-gray-600" for="link">
              Link
            </label>
            <input
              className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
              id="link"
              name="link"
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Your Link"
            />
          </div>
          <div className="mt-2">
            <label className=" block text-sm text-gray-600" for="description">
              Description
            </label>
            <textarea
              className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
              id="description"
              name="description"
              rows="6"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Your description"
            ></textarea>
          </div>
          <div class="mt-2">
            <label className="block text-sm text-gray-600" for="imp">
              <input
                className="mr-2"
                id="imp"
                type="checkbox"
                name="imp"
                onChange={() => {
                  setImportant(!important);
                }}
              />
              Important
            </label>
          </div>
          <div className="mt-6">
            <button
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AnnouncementForm;
