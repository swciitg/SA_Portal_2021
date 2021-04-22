import axios from "axios";
import { BASEAPI } from "../constants";
const API = axios.create({
  baseURL: `${BASEAPI}`,
  withCredentials: true,
});

export const fetchUser = () => API.get("/current_user");
export const fetchAnnouncement = () => API.get("/home/announcement");
