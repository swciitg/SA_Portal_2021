import {
    EVENT_CREATE_REQUEST,
    EVENT_DELETE_REQUEST,
    EVENT_LIST_REQUEST,
  } from "../constants";
  
  const events = (events = [], action) => {
    switch (action.type) {
      case EVENT_LIST_REQUEST:
        return action.payload;
      case EVENT_CREATE_REQUEST:
        return [...events, action.payload];
      case EVENT_DELETE_REQUEST:
        return events.filter(
          (event) => event._id !== action.payload
        );
      default:
        return events;
    }
  };
  
  export default events;
  