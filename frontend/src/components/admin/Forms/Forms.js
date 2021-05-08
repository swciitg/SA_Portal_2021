import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createForm, editForm } from "../../../actions/forms";

import { BASEURL } from "../../../constants";
const Form = ({ type, formData }) => {
  const [formNo, setFormNo] = useState(
    formData && formData.formNo ? formData.formNo : ""
  );

  const [subject, setSubject] = useState(
    formData && formData.subject ? formData.subject : ""
  );

  const [file, setFile] = useState(
    formData && formData.title ? formData.title : ""
  );

  const form_id = formData && formData._id;

  const dispatch = useDispatch();
  const history = useHistory();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("path", file);
    formData.append("formNo", formNo);
    formData.append("subject", subject);

    console.log(formData);

    if (type === "Add") dispatch(createForm(formData));
    else dispatch(editForm(form_id, formData));

    history.push(`${BASEURL}/admin/forms`);
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
          <div className="mt-2">
            <label className="block text-sm text-gray-600" htmlFor="formNo">
              Form Number
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="formNo"
              name="formNo"
              type="text"
              value={formNo}
              onChange={(e) => setFormNo(e.target.value)}
              placeholder="formNo"
              required
            />
          </div>

          <div className="mt-2">
            <label className="block text-sm text-gray-600" htmlFor="subject">
              Subject
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="subject"
              name="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              required
            />
          </div>

          <div className="mt-2">
            <input
              type="file"
              name="form"
              onChange={(e) => setFile(e.target.files[0])}
              placeholder="Subject"
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
    </>
  );
};

export default Form;
