import React, { useState } from "react";
import Editor from "suneditor-react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  createAchievement,
  editAchievement,
} from "../../../actions/achievement";
import { BASEURL } from "../../../constants/index";

const AchievementForm = ({ type, formData }) => {
  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const [editorHtmlString, setEditorHtmlString] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const achievement_id = formData && formData._id;

  const changeHandler = (content) => {
    console.log(content);
    setEditorHtmlString(JSON.stringify(content));
  };

  const submitHandler = () => {
    console.log("Clicked");
    const formData = {
      HTMLString: editorHtmlString,
    };
    if (type === "Add") dispatch(createAchievement(formData));
    else if (type === "Edit")
      dispatch(editAchievement(achievement_id, formData));

    history.push(`${BASEURL}/admin/achievements`);
  };

  return (
    <div>
      <p className="text-3xl font-bold mb-3">Achievement Form</p>
      <Editor
        setContents={type === "Edit" && JSON.parse(formData.HTMLString)}
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
            ["table", "link", "image", "video"],
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
                ["table", "link", "image", "video"],
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
                ["table", "link", "image", "video"],
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
        {type === "Add" ? "ADD" : "EDIT"}
      </button>
    </div>
  );
};

export default AchievementForm;
