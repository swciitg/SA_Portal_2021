import axios from "axios";
import { BASEAPI } from "../constants";
const API = axios.create({
  baseURL: `${BASEAPI}`,
  withCredentials: true,
});

export const fetchUser = () => API.get("/current_user");

//ANNOUNCEMENT ROUTES
export const fetchAnnouncement = () => API.get("/home/announcement");
export const createAnnouncement = (newAnnouncement) =>
  API.post("/home/announcement", newAnnouncement);
export const editAnnouncement = (id, updatedAnnouncement) =>
  API.put(`/home/announcement/${id}`, updatedAnnouncement);
export const deleteAnnouncement = (id) =>
  API.delete(`/home/announcement/${id}`);
export const fetchCategories = () => API.get("/home/announcement/categories");

//FORM ROUTES
export const fetchForm = () => API.get("/forms");
export const createForm = (newForm) => API.post("/forms", newForm);
export const editForm = (id, updatedForm) =>
  API.put(`/forms/${id}`, updatedForm);
export const deleteForm = (id) => API.delete(`/forms/${id}`);
//ABOUT ROUTES
export const fetchAbout = () => API.get("/home/about");

//Event Routes

export const fetchEvent = () => API.get("/home/event");
export const createEvent = (newEvent) =>
  API.post("/home/event", newEvent);
export const editEvent = (id, updatedEvent) =>
  API.put(`/home/event/${id}`, updatedEvent);
export const deleteEvent = (id) =>
  API.delete(`/home/event/${id}`);
export const fetchEventCategories = () => API.get("/home/event/categories");

//SCHOLARSHIP ROUTES
export const fetchScholarshipEdtr = () => API.get("/scholarship/editor");
