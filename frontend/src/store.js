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

const reducer = combineReducers({
  auth,
  announcements,
  about,
  categories,
  forms,
  events,
  rules,
});

const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
