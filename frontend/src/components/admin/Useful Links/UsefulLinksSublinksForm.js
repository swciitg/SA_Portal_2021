import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { BASEURL } from "../../../constants";
import { createUsefulSublink, editUsefulSublink } from "../../../actions/useful.links";

const UsefulSublinksForm = ({ type, formData }) => {
  const [name, setName] = useState(
    formData && formData.name ? formData.name : ""
  );

  const [priority_number, setPriority] = useState(
    formData && formData.priority_number ? formData.priority_number : ""
  );

  const [url, setUrl] = useState(formData && formData.url ? formData.url : "");

  const { link_id } = useParams();
  const sublink_id = formData && formData._id;

  const dispatch = useDispatch();
  const history = useHistory();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (type === "Add")
      dispatch(createUsefulSublink(link_id, { name, priority_number, url })).then(
        () => {
          history.push(`${BASEURL}/admin/useful-links/${link_id}`);
        }
      );
    else
      dispatch(
        editUsefulSublink(link_id, sublink_id, { name, priority_number, url })
      ).then(() => {
        history.push(`${BASEURL}/admin/useful-links/${link_id}`);
      });
    //window.location.replace(`${BASEURL}/admin/utilities/${link_id}`);
  };

  return (
    <>
      <h1 className="text-3xl text-black pb-6">{type} Useful Sublinks</h1>

      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
          <p className="text-xl pb-6 flex items-center">
            <i className="fas fa-list mr-3"></i> {type} Useful Sublinks
          </p>
          <div
            className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 mt-2"
            role="alert"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
            </svg>
            <p>The link should start with "https://"</p>
          </div>
          <div className="leading-loose">
            <form
              className="p-10 bg-white rounded shadow-xl"
              onSubmit={(e) => formSubmitHandler(e)}
            >
              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="priority_number"
                >
                  Priority Number
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="priority_number"
                  name="priority_number"
                  type="number"
                  value={priority_number}
                  onChange={(e) => setPriority(e.target.value)}
                  placeholder="Priority Number"
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="url">
                  URL
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="url"
                  name="url"
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="URL"
                  required
                />
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

export default UsefulSublinksForm;
