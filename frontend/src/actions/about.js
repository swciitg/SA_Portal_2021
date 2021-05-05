import { ABOUT_UPDATE_EDITORSTATE } from "../constants/index";

export const updateEditorState = (editorState) => ({
  type: ABOUT_UPDATE_EDITORSTATE,
  payload: editorState,
});
