import * as UT from "./userTypes";
import axios from "axios";


export const registerUser = (userObject) => async (dispatch) => {
    const REGISTER_URL = "http://localhost:8080/user/signup";
    dispatch(userRequest());
    try {
        const response = await axios.post(REGISTER_URL, userObject);
        dispatch(userSavedSuccess(response.data));
        return Promise.resolve(response.data);
    } catch (error) {
        dispatch(userFailure(error.message));
        return Promise.reject(error);
    }
};

export const forgotpassword = (userObject) => async (dispatch) => {
    console.log(userObject);
    const FORGOT_PASSWORD_URL="http://localhost:8080/user/forgotpassword"
    dispatch(userRequest());
    try {
        const response = await axios.post(FORGOT_PASSWORD_URL, userObject);
        dispatch(userSavedSuccess(response.data));
        return Promise.resolve(response.data);
    } catch (error) {
        dispatch(userFailure(error.message));
        return Promise.reject(error);
    }
};
