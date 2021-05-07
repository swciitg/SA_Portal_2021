import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../../../constants";
import axios from "axios";
import "./AboutScreen.css";

const AboutScreen = () => {
  const [editorContent, setEditorContent] = useState(
    JSON.stringify(
      '<h3 style="font-size:2rem;font-weight:bold;">Sample Title</h3></br><p>This is a sample paragraph.Add content for about us section in the home page...</p>'
    )
  );

  useEffect(() => {
    const apiCall = () => {
      axios
        .get("http://localhost:8080/sa/api/home/about/")
        .then(({ data }) => {
          console.log(data);
          data.data && setEditorContent(data.data.HTMLString);
        })
        .catch((err) => console.log(err));
    };
    apiCall();
  }, []);

  useEffect(() => {
    document.getElementById("admin_about_preview").innerHTML = JSON.parse(
      editorContent
    );
  }, [editorContent]);

  return (
    <>
      <h1 className="text-3xl text-black pb-6">About</h1>

      <div className="mt-6">
        <Link
          className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
          to={{
            pathname: `${BASEURL}/admin/about/add`,
            formData: { editorContent },
          }}
        >
          Add/Edit About details
        </Link>
      </div>

      <div className="w-full flex flex-col sm:flex-row mt-5">
        <div className="w-2/3">
          <p className="text-2xl font-base">Preview</p>
          <div
            id="admin_about_preview"
            className="p-2 pl-0 sm:p-6 sm:pl-0"
          ></div>
        </div>
        <div className="about_code w-1/3">
          <p className="text-2xl font-base">Code</p>
          <div className="bg-gray-300 p-2 sm:p-6 font-mono rounded">
            <code>{JSON.parse(editorContent).substring(0, 450)}...</code>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutScreen;
