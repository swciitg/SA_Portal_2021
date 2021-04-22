import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./reducers/auth";
import {
  announcementDeleteReducer,
  announcementReducer,
} from "./reducers/announcement";

const reducer = combineReducers({
  auth,
  announcementDeleteReducer,
  announcementReducer,
});

const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
