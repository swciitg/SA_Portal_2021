import axios from "axios";
import { BASEAPI } from "../constants";
const API = axios.create({
  baseURL: `${BASEAPI}`,
  withCredentials: true,
});

export const fetchUser = () => API.get("/current_user");
export const fetchAnnouncement = () => API.get("/home/announcement");
export const createAnnouncement = (newAnnouncement) =>
  API.post("/home/announcement", newAnnouncement);
export const editAnnouncement = (id, updatedAnnouncement) =>
  API.put(`/home/announcement/${id}`, updatedAnnouncement);
export const deleteAnnouncement = (id) =>
  API.delete(`/home/announcement/${id}`);
