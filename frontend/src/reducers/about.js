import { ABOUT_UPDATE_EDITORSTATE } from "../constants/index";
import { EditorState } from "draft-js";

const defaultState = {
  editorState: EditorState.createEmpty(),
};

const about = (aboutContent = defaultState, { type, payload }) => {
  //console.log("about", payload);
  switch (type) {
    case ABOUT_UPDATE_EDITORSTATE:
      return { ...aboutContent, payload };
    default:
      return aboutContent;
  }
};

export default about;
