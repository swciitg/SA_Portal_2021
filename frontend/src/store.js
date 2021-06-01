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
import links from "./reducers/utilities";
import sublinks from "./reducers/sublinks";
import courses from "./reducers/courses";
import schLinks from "./reducers/schLinks";
import counsellingteam from "./reducers/counsellingteams";
import gymkhanateam from "./reducers/gymkhanateams";
import newsacteam from "./reducers/newsacteam";
import visitartteam from "./reducers/visitartteam";
import hostelteam from "./reducers/hostelteam";

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
  schLinks,
  sublinks,
  gymkhanateam,
  counsellingteam,
  newsacteam,
  visitartteam,
  hostelteam,
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
