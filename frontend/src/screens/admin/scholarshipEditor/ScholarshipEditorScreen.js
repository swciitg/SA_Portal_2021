import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASEAPI, BASEURL } from "../../../constants";
import axios from "axios";
import "./ScholarshipEditorScreen.css";
import { defMarkup } from "./constants";

const ScholarshipEditorScreen = () => {
  const [editorContent, setEditorContent] = useState(JSON.stringify(defMarkup));

  useEffect(() => {
    const apiCall = () => {
      axios
        .get(`${BASEAPI}/scholarship/editor`)
        .then(({ data }) => {
          console.log("Scholar editor data", data);
          data.data && setEditorContent(data.data.HTMLString);
        })
        .catch((err) => console.log(err));
    };
    apiCall();
  }, []);

  useEffect(() => {
    document.getElementById("admin_schEdit_preview").innerHTML = JSON.parse(
      editorContent
    );
  }, [editorContent]);

  return (
    <>
      <h1 className="text-3xl text-black pb-6">
        Scholarships Rules and Ordianances
      </h1>

      <div className="mt-6">
        <Link
          className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
          to={{
            pathname: `${BASEURL}/admin/scholarshipEditor/add`,
            formData: { editorContent },
          }}
        >
          Add/Edit details
        </Link>
      </div>

      <div className="w-full flex flex-col sm:flex-row mt-5">
        <div className="w-full sm:w-3/3">
          <p className="text-2xl font-base">Preview</p>
          <div
            id="admin_schEdit_preview"
            className="p-2 pl-0 sm:p-6 sm:pl-0"
          ></div>
        </div>
        {/* <div className="about_code w-full sm:w-1/3">
          <p className="text-2xl font-base">Code</p>
          <div className="bg-gray-300 p-2 sm:p-6 font-mono rounded">
            <code>{JSON.parse(editorContent).substring(0, 450)}...</code>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ScholarshipEditorScreen;
