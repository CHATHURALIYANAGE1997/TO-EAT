import * as UT from "./userTypes";
import axios from "axios";


const REGISTER_URL = "http://localhost:8080/user/signup";


export const registerUser = (userObject) => async (dispatch) => {
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
