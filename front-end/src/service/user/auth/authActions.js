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

const loginRequest = () => {
    return {
        type: AT.LOGIN_REQUEST,
    };
};

const logoutRequest = () => {
    return {
        type: AT.LOGOUT_REQUEST,
    };
};

export const success = (isLoggedIn) => {
    return {
        type: AT.SUCCESS,
        payload: isLoggedIn,
    };
};

const failure = () => {
    return {
        type: AT.FAILURE,
        payload: false,
    };
};
