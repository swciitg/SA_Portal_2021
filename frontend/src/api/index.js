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
export const fetchEvent = () => API.get("/home/events");
export const createEvent = (newEvent) => API.post("/home/events", newEvent);
export const editEvent = (id, updatedEvent) =>
  API.put(`/home/events/${id}`, updatedEvent);
export const deleteEvent = (id) => API.delete(`/home/events/${id}`);
export const fetchEventCategories = () => API.get("/home/events/categories");

//SCHOLARSHIP ROUTES
export const fetchScholarshipEdtr = () => API.get("/scholarship/editor");

//RULES ROUTES
export const fetchRule = () => API.get("/rules");
export const createRule = (newForm) => API.post("/rules", newForm);
export const editRule = (id, updatedForm) =>
  API.put(`/rules/${id}`, updatedForm);
export const deleteRule = (id) => API.delete(`/rules/${id}`);

//UTILITIES ROUTES
export const fetchLinks = () => API.get("/utilities");
export const createLink = (newRule) => API.post("/utilities", newRule);
export const editLink = (id, updatedRule) =>
  API.put(`/utilities/${id}`, updatedRule);
export const deleteLink = (id) => API.delete(`/utilities/${id}`);

export const fetchSublinks = (id) => API.get(`/utilities/${id}/sublinks`);
export const createSublink = (id, newSublink) =>
  API.post(`/utilities/${id}/sublinks`, newSublink);
export const editSublink = (id, sublink_id, newSublink) =>
  API.put(`/utilities/${id}/sublinks/${sublink_id}`, newSublink);
export const deleteSublink = (id, sublink_id) =>
  API.delete(`/utilities/${id}/sublinks/${sublink_id}`);

//COURSES ROUTES
export const fetchCourse = () => API.get("/saCourse");
export const createCourse = (newForm) => API.post("/saCourse", newForm);
export const editCourse = (id, updatedForm) =>
  API.put(`/saCourse/${id}`, updatedForm);
export const deleteCourse = (id) => API.delete(`/saCourse/${id}`);

//SCHOLARSHIP LINK ROUTES
export const fetchSchLink = () => API.get("/scholarship/pdf");
export const createSchLink = (newSchLink) =>
  API.post("/scholarship/pdf", newSchLink);
export const editSchLink = (id, updatedSchLink) =>
  API.put(`/scholarship/pdf/${id}`, updatedSchLink);
export const deleteSchLink = (id) => API.delete(`/scholarship/pdf/${id}`);

//Teams
export const fetchTeam = (ts) => API.get(`/team/${ts}`);
export const createTeam = (ts, newTeam) => API.post(`/team/${ts}`, newTeam);
export const editTeam = (ts, id, updatedTeam) =>
  API.put(`/team/${ts}/${id}`, updatedTeam);
export const deleteTeam = (ts, id) => API.delete(`/team/${ts}/${id}`);

//USERS-CHANGING ROUTES
export const fetchUsers = () => API.get("/users");
export const changeAdminStatus = (id) => API.put(`/users/${id}`);
export const deleteUser = (id) => API.delete(`/users/${id}`);

//GALLERY ROUTES
export const fetchImages = () => API.get("/gallery");
export const createImage = (newImg) => API.post("gallery", newImg);
export const deleteImage = (id) => API.delete(`/gallery/${id}`);

//ACHIEVEMENTS ROUTES
export const fetchAchievement = () => API.get("/home/achievements");
export const createAchievement = (achievement) =>
  API.post("/home/achievements", achievement);
export const editAchievement = (id, newAchievement) =>
  API.put(`/home/achievements/${id}`, newAchievement);
export const deleteAchievement = (id) => API.delete(`/home/achievements/${id}`);

//Navigation routes
export const fetchNavigation = () => API.get("/home/navigation");
export const createNavigation = (newNav) =>
  API.post("/home/navigation", newNav);
export const editNavigation = (id, updatedNav) =>
  API.put(`/home/navigation/${id}`, updatedNav);
export const deleteNavigation = (id) => API.delete(`/home/navigation/${id}`);

//SAC Routes
export const fetchsacLinks = () => API.get("/sac");
export const createsacLink = (newRule) => API.post("/sac", newRule);
export const editsacLink = (id, updatedRule) =>
  API.put(`/sac/${id}`, updatedRule);
export const deletesacLink = (id) => API.delete(`/sac/${id}`);

export const fetchsacSublinks = (id) => API.get(`/sac/${id}/sublinks`);
export const createsacSublink = (id, newSublink) =>
  API.post(`/sac/${id}/sublinks`, newSublink);
export const editsacSublink = (id, sublink_id, newSublink) =>
  API.put(`/sac/${id}/sublinks/${sublink_id}`, newSublink);
export const deletesacSublink = (id, sublink_id) =>
  API.delete(`/sac/${id}/sublinks/${sublink_id}`);

//UsefulLinks Routes
export const fetchUsefulLinks = () => API.get("/useful-links");
export const createUsefulLink = (newRule) => API.post("/useful-links", newRule);
export const editUsefulLink = (id, updatedRule) =>
  API.put(`/useful-links/${id}`, updatedRule);
export const deleteUsefulLink = (id) => API.delete(`/useful-links/${id}`);

export const fetchUsefulSublinks = (id) => API.get(`/useful-links/${id}/sublinks`);
export const createUsefulSublink = (id, newSublink) =>
  API.post(`/useful-links/${id}/sublinks`, newSublink);
export const editUsefulSublink = (id, sublink_id, newSublink) =>
  API.put(`/useful-links/${id}/sublinks/${sublink_id}`, newSublink);
export const deleteUsefulSublink = (id, sublink_id) =>
  API.delete(`/useful-links/${id}/sublinks/${sublink_id}`);
