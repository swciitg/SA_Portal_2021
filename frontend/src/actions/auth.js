import { AUTH, GET_USER } from "../constants";
import * as api from "../api";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push("/admin");
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserAction = () => async (dispatch) => {
  try {
    const res = await api.fetchUser();
    console.log(res);
    dispatch({ type: GET_USER, data: res.data });
  } catch (error) {
    console.log(error);
  }
};
