import React, { useState } from "react";
import Editor from "suneditor-react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASEURL, BASEAPI } from "../../../constants/index";

const AboutFormSun = ({ type, formData }) => {
  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const [editorHtmlString, setEditorHtmlString] = useState("");
  const history = useHistory();

  const changeHandler = (content) => {
    setEditorHtmlString(JSON.stringify(content));
  };

  const submitHandler = () => {
    const url = `${BASEAPI}/home/about/`;
    const formData = {
      HTMLString: editorHtmlString,
    };
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    };
    axios
      .post(url, formData, config)
      .then((res) => {
        history.push(`${BASEURL}/admin/about`);
        //window.location.replace(`${BASEURL}/admin/about`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p className="text-3xl font-bold mb-3">Home About Us</p>
      <Editor
        setContents={JSON.parse(formData.editorContent)}
        onChange={changeHandler}
        enableToolbar={true}
        showToolbar={true}
        height="100%"
        lang="en"
        name="content"
        setOptions={{
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize", "formatBlock"],
            ["table", "link"],
            ["bold", "underline", "italic", "strike"],
            ["fontColor", "hiliteColor", "textStyle"],
            ["removeFormat"],
            ["outdent", "indent"],
            ["align", "horizontalRule", "list", "lineHeight"],
            ["fullScreen", "codeView"],
            ["preview"],
            [
              "%1279",
              [
                ["undo", "redo"],
                ["font", "fontSize", "formatBlock"],
                ["table", "link"],
                ["bold", "underline", "italic", "strike"],
                [
                  ":r-More Rich-default.more_plus",
                  "fontColor",
                  "hiliteColor",
                  "textStyle",
                  "removeFormat",
                  "outdent",
                  "indent",
                  "align",
                  "horizontalRule",
                  "list",
                  "lineHeight",
                  "fullScreen",
                  "codeView",
                  "preview",
                ],
              ],
            ],
            [
              "%767",
              [
                ["undo", "redo"],
                [
                  ":t-More Text-default.more_text",
                  "font",
                  "fontSize",
                  "formatBlock",
                ],
                ["table", "link"],
                [
                  ":r-More Rich-default.more_plus",
                  "bold",
                  "underline",
                  "italic",
                  "strike",
                  "fontColor",
                  "hiliteColor",
                  "textStyle",
                  "removeFormat",
                  "outdent",
                  "indent",
                  "align",
                  "horizontalRule",
                  "list",
                  "lineHeight",
                  "fullScreen",
                  "codeView",
                  "preview",
                ],
              ],
            ],
          ],
          imageURLInput: true,
          resizingBar: true,
        }}
        width="100%"
      />
      <button
        className="my-3 px-3 py-1 bg-gray-900 text-white rounded-md"
        onClick={submitHandler}
      >
        ADD
      </button>
    </div>
  );
};
export default AboutFormSun;
