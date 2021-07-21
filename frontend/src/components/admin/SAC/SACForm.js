import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createsacLink, editsacLink } from "../../../actions/sac";
import { BASEURL } from "../../../constants";

const SACForm = ({ type, formData }) => {
  const [name, setName] = useState(
    formData && formData.name ? formData.name : ""
  );

  const [priority_number, setPriority] = useState(
    formData && formData.priority_number ? formData.priority_number : ""
  );

  const link_id = formData && formData._id;

  const dispatch = useDispatch();
  const history = useHistory();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (type === "Add")
      dispatch(createsacLink({ name, priority_number })).then(() => {
        history.push(`${BASEURL}/admin/sac`);
      });
    else
      dispatch(
        editsacLink(link_id, {
          name,
          priority_number,
        })
      ).then(() => {
        history.push(`${BASEURL}/admin/sac`);
      });
    //window.location.replace(`${BASEURL}/admin/utilities`);
  };

  return (
    <>
      <h1 className="text-3xl text-black pb-6">{type} SAC Links</h1>

      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
          <p className="text-xl pb-6 flex items-center">
            <i className="fas fa-list mr-3"></i> {type} SAC Links
          </p>
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

export default SACForm;
