import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  createAnnouncement,
  editAnnouncement,
} from "../../../actions/announcement";
import { listCategories } from "../../../actions/category";
import { BASEURL } from "../../../constants";
const AnnouncementForm = ({ type, formData }) => {
  const categories = useSelector((state) => state.categories);
  //const categories = [{ name: "c" }, { name: "b" }, { name: "a" }];
  console.log(categories);
  const [title, setTitle] = useState(
    formData && formData.title ? formData.title : ""
  );
  const [description, setDescription] = useState(
    formData && formData.description ? formData.description : ""
  );
  const [important, setImportant] = useState(
    formData && formData.important ? formData.important : false
  );
  const [link, setLink] = useState(
    formData && formData.link ? formData.link : ""
  );
  const [category, setCategory] = useState(
    formData && formData.category ? formData.category : ""
  );

  const announcement_id = formData && formData._id;

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (type === "Add")
      dispatch(
        createAnnouncement({ title, description, important, link, category })
      );
    else
      dispatch(
        editAnnouncement(announcement_id, {
          title,
          description,
          important,
          link,
          category,
        })
      );

    history.push(`${BASEURL}/admin/announcements`);
  };

  return (
    <>
      <p className="text-xl pb-6 flex items-center">
        <i className="fas fa-list mr-3"></i> {type} Announcement
      </p>
      <div className="leading-loose">
        <form
          className="p-10 bg-white rounded shadow-xl"
          onSubmit={(e) => formSubmitHandler(e)}
        >
          <div className="">
            <label className="block text-sm text-gray-600" htmlFor="title">
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
              required
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm text-gray-600" htmlFor="link">
              Link
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="link"
              name="link"
              type="text"
              value={link}
              required
              onChange={(e) => setLink(e.target.value)}
              placeholder="Your Link"
            />
          </div>
          <div className="mt-2">
            <label
              className=" block text-sm text-gray-600"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
              id="description"
              name="description"
              rows="4"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Your description"
            ></textarea>
          </div>

          <div className="mt-2">
            <label className="block text-sm text-gray-600" htmlFor="category">
              Category
            </label>
            <input
              className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
              list="categories"
              id="category"
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
            <datalist id="categories">
              {categories.map((category, key) => {
                return <option key={key} value={category.name} />;
              })}
            </datalist>
          </div>

          <div className="mt-2">
            <label className="block text-sm text-gray-600" htmlFor="important">
              <input
                className="mr-2"
                id="important"
                type="checkbox"
                name="impprtant"
                onChange={() => {
                  setImportant(!important);
                }}
                checked={important}
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
