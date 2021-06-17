import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { updateEditorState } from "../../../actions/about";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

const AboutForm = ({ type, formData }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  //const [htmlString, setHtmlString] = useState("");

  const onEditorStateChange = (editorState) => {
    window.localStorage.setItem(
      "aboutContentHtml",
      JSON.stringify(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    );
    // setHtmlString(
    //   JSON.stringify(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    // );
    setEditorState(editorState);
  };

  return (
    <>
      <p>About Form</p>

      <div className="editor">
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            // image: {
            //   uploadCallback: uploadImageCallBack,
            //   alt: { present: true, mandatory: true },
            // },
          }}
        />
      </div>
    </>
  );
};

export default AboutForm;
