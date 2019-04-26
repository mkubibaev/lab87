import axios from '../../axios-api';
import {push} from 'connected-react-router';
import {NotificationManager} from 'react-notifications';
import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS, LOGOUT_USER_FAILURE,
    LOGOUT_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    REGISTER_USER_SUCCESS
} from "./actionTypes";

const registerUserSuccess = user => ({type: REGISTER_USER_SUCCESS, user});
const registerUserFailure = error => ({type: REGISTER_USER_FAILURE, error});

const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, user});
const loginUserFailure = error => ({type: LOGIN_USER_FAILURE, error});

const logoutUserSuccess = () => ({type: LOGOUT_USER_SUCCESS});
const logoutUserFailure = error => ({type: LOGOUT_USER_FAILURE, error});

export const registerUser = userData => {
    return async dispatch => {
        try {
            const response = await axios.post('/users', userData);

            dispatch(registerUserSuccess(response.data.user));
            NotificationManager.success(response.data.message);
            dispatch(push('/'));
        } catch (error) {

            if (error.response && error.response.data) {
                dispatch(registerUserFailure(error.response.data));
            } else {
                dispatch(registerUserFailure({global: 'No connection'}));
            }

        }
    };
};

export const loginUser = userData => {
    return async dispatch => {
        try {
            const response = await axios.post('/users/sessions', userData);

            console.log(response);

            dispatch(loginUserSuccess(response.data.user));
            NotificationManager.success(response.data.message);
            dispatch(push('/'));
        } catch (error) {
            if (error.response && error.response.data) {
                dispatch(loginUserFailure(error.response.data));
            } else {
                dispatch(loginUserFailure({global: 'No connection'}));
            }
        }
    }
};

export const logoutUser = () => {
    return async (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {'Authorization': token}};

        try {
            const response = await axios.delete('/users/sessions', config);
            dispatch(logoutUserSuccess());
            NotificationManager.success(response.data.message);
        } catch (e) {
            dispatch(logoutUserFailure(e));
        }
    }
};
