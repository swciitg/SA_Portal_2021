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

  const [link, setLink] = useState(
    formData && formData.link ? formData.link : ""
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
    formData.append("link", link);

    console.log(formData);

    if (type === "Add") dispatch(createForm(formData)).then(() => {
      history.push(`${BASEURL}/admin/forms`);
    });
    else dispatch(editForm(form_id, formData)).then(() => {
      history.push(`${BASEURL}/admin/forms`);
    });
    //window.location.replace(`${BASEURL}/admin/forms`);
  };

  return (
    <>
      <h1 class="text-3xl text-black pb-6">{type} Forms</h1>

      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
          <p class="text-xl pb-6 flex items-center">
            <i class="fas fa-list mr-3"></i> {type} Forms
          </p>
          <div
            class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3"
            role="alert"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
            </svg>
            <p>You need to add form pdf or link</p>
          </div>
          <div
            class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 mt-2"
            role="alert"
          >
            <svg
              class="w-4 h-4 mr-2"
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
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="subject"
                >
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
                  placeholder="File"
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
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="Link"
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

export default Form;
