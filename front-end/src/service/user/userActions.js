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

export const verifyuser=(code)=>async (dispatch)=>{
    const VERIFY_URL=`http://localhost:8080/user/accountconfirm/${code}`;
    dispatch(userRequest());
    try {
        const response = axios.get(VERIFY_URL)
        dispatch(userSavedSuccess(response));
        return Promise.resolve(response);
    }catch (error) {
        dispatch(userFailure(error.message));
        return Promise.reject(error);
    }
}

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

export const confirmpassworduser=(code)=>async (dispatch)=>{
    const VERIFY_URL=`http://localhost:8080/user/confirmpassword/${code}`;
    dispatch(userRequest());
    try {
        const response = axios.get(VERIFY_URL)
        dispatch(userSavedSuccess(response));
        return Promise.resolve(response);
    }catch (error) {
        dispatch(userFailure(error.message));
        return Promise.reject(error);
    }
}


export const confirmpasswordadmine=(code)=>async (dispatch)=>{
    const VERIFY_URL=`http://localhost:8080/user/confirmpassword/${code}`;
    dispatch(userRequest());
    try {
        const response = axios.get(VERIFY_URL)
        dispatch(userSavedSuccess(response));
        return Promise.resolve(response);
    }catch (error) {
        dispatch(userFailure(error.message));
        return Promise.reject(error);
    }
}


const userRequest = () => {
    return {
        type: UT.USER_REQUEST,
    };
};

const userSavedSuccess = (user) => {
    return {
        type: UT.USER_SAVED_SUCCESS,
        payload: user,
    };
};

const userSuccess = (users) => {
    return {
        type: UT.USER_SUCCESS,
        payload: users,
    };
};

const userFailure = (error) => {
    return {
        type: UT.USER_FAILURE,
        payload: error,
    };
};
