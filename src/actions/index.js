import {
    SET_AUTHENTIFICATION,
    INCREMENT_ACTION_COUNT,
    ADD_RESSOURCES,
    PARSE_MESSAGE,
    PARSE_ERROR,
    RESET_ERROR
} from './action-types';
import axios from 'axios';

const BASE_URL = "http://localhost:3090";

export function setAuthentification(isLoggedIn) {
    return {
        type: SET_AUTHENTIFICATION,
        payload: isLoggedIn
    };
};
export function incrementActionCount() {
    return {
        type: INCREMENT_ACTION_COUNT,
    };
};

export function addRessources() {
    return {
        type: ADD_RESSOURCES,
    };
};
export function signupUser({
    email,
    password
}, history) {
    return function (dispatch) {
        axios.post(`${BASE_URL}/signup`, {
            email,
            password
        }).then((res) => {
            localStorage.setItem("token", res.data.token);
            dispatch(setAuthentification(true));
            history.push("/ressources")
        }).catch(error => {
            console.log(error);

        });
    }
};

export function signinUser({
    email,
    password
}, history) {
    return function (dispatch) {
        axios.post(`${BASE_URL}/signin`, {
            email,
            password
        }).then((res) => {
            localStorage.setItem("token", res.data.token);
            dispatch(setAuthentification(true));
            history.push("/ressources")
        }).catch(error => {
            console.log(error);

        });
    }
};

export function signoutUser() {
    return function (dispatch) {
        dispatch(setAuthentification(false));
        localStorage.removeItem("token");
    };
};

export function getSpecialRessources() {
    return function (dispatch) {
        axios.get(`${BASE_URL}/specialRessources`, {
            headers: {
                authorization: localStorage.getItem("token")
            },
        }).then((res) => {
            console.log(res.data.result)
            dispatch({
                type: PARSE_MESSAGE,
                payload: res.data.result
            });
        }).catch(error => {
            console.log(error);

        });
    }
};

export function parseError(errorMessage) {
    return {
        type: PARSE_ERROR,
        payload: errorMessage
    }
};

export function resetError() {
    return {
        type: RESET_ERROR
    }
};