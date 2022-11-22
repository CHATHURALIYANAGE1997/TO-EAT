import * as AT from "./authTypes";
import axios from "axios";


const AUTH_URL = "http://localhost:8080/user/login";

export const authenticateUser = (email, password) => async (dispatch) => {
  
};

export const logoutUser = () => {
    return (dispatch) => {
        dispatch(logoutRequest());
        localStorage.removeItem("jwtToken");
        dispatch(success({ username: "", isLoggedIn: false }));
    };
};
