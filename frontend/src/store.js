import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./reducers/auth";
import announcements from "./reducers/announcements";
import about from "./reducers/about";
import categories from "./reducers/category";
import forms from "./reducers/form";
import events from "./reducers/events";
import rules from "./reducers/rules";
import links from "./reducers/utilities";
import courses from "./reducers/courses";
import schLinks from "./reducers/schLinks";

const reducer = combineReducers({
  auth,
  announcements,
  about,
  categories,
  forms,
  events,
  rules,
  links,
  courses,
  schLinks,
});

const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
