import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./reducers/auth";
import announcements from "./reducers/announcements";
import about from "./reducers/about";
import categories from "./reducers/category";
import forms from "./reducers/form";
import events from "./reducers/events";
import eventscategory from "./reducers/eventscategory";
import rules from "./reducers/rules";
import sacs from "./reducers/sac";
import sacsublinks from "./reducers/sacsublinks";
import links from "./reducers/utilities";
import sublinks from "./reducers/sublinks";
import courses from "./reducers/courses";
import schLinks from "./reducers/schLinks";
import teams from "./reducers/teams";

import users from "./reducers/user";
import images from "./reducers/gallery";
import achievements from "./reducers/achievements";

import navigations from "./reducers/navigation";
const reducer = combineReducers({
  auth,
  announcements,
  about,
  categories,
  forms,
  events,
  eventscategory,
  rules,
  links,
  courses,
  sacs,
  sacsublinks,
  schLinks,
  sublinks,
  teams,
  users,
  images,
  achievements,
  navigations,
});

const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
