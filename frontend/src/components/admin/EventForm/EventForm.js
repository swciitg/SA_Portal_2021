import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, editEvent } from "../../../actions/event";
import { listEventCategories } from "../../../actions/eventcategory";
import { BASEURL } from "../../../constants";
import moment from "moment";
import { useHistory } from "react-router-dom";

const EventForm = ({ type, formData }) => {
  const categories = useSelector((state) => state.categories);
  const history = useHistory();

  const [title, setTitle] = useState(
    formData && formData.title ? formData.title : ""
  );

  const [link, setLink] = useState(
    formData && formData.link ? formData.link : ""
  );

  const [eventDate, seteventDate] = useState(
    formData && formData.eventDate ? formData.eventDate : ""
  );
  const [imgPath, setimgPath] = useState(
    formData && formData.imgPath ? formData.imgPath : ""
  );
  const [category, setCategory] = useState(
    formData && formData.category ? formData.category : ""
  );

  const event_id = formData && formData._id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listEventCategories());
  }, [dispatch]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("eventDate", eventDate);
    formData.append("title", title);
    formData.append("link", link);
    formData.append("category", category);
    formData.append("image", imgPath);
    if (type === "Add")
      dispatch(createEvent(formData)).then(() => {
        history.push(`${BASEURL}/admin/events`);
      });
    else if (type === "Edit")
      dispatch(editEvent(event_id, formData)).then(() => {
        history.push(`${BASEURL}/admin/events`);
      });
  };

  return (
    <>
      <h1 className="text-3xl text-black pb-6">{type} Event</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
          <p className="text-xl pb-6 flex items-center">
            <i className="fas fa-list mr-3"></i> {type} Events
          </p>

          <div className="leading-loose">
            <form
              className="p-10 bg-white rounded shadow-xl"
              onSubmit={(e) => formSubmitHandler(e)}
            >
              <div className="mt-2">
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
                  link
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="link"
                  name="link"
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="Link"
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="eventDate"
                >
                  Event Date
                </label>
                <input
                  className="px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  type="Date"
                  name="eventDate"
                  value={moment(eventDate).format("YYYY-MM-DD")}
                  onChange={(e) => seteventDate(e.target.value)}
                  placeholder="Set Image Date"
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="imgPath"
                >
                  Upload Event Image
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={(e) => setimgPath(e.target.files[0])}
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="category"
                >
                  Event Category
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
                    return <option key={key} value={category.category} />;
                  })}
                </datalist>
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
        </div>
      </div>
    </>
  );
};

export default EventForm;
