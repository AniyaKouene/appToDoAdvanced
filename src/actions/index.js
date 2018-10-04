import {
    SET_AUTHENTIFICATION,
    INCREMENT_ACTION_COUNT,
    ADD_RESSOURCES
} from './action-types';
import axios from 'axios';

const BASE_URL = "http://localhost:3090"
export function setAuthentification(isLoggedIn) {
    return {
        type: SET_AUTHENTIFICATION,
        payload: isLoggedIn
    };
}

export function incrementActionCount() {
    return {
        type: INCREMENT_ACTION_COUNT,
    };
}

export function addRessources() {
    return {
        type: ADD_RESSOURCES,
    };
}

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
}

export function signoutUser(){
    return function(dispatch){
        dispatch(setAuthentification(false));
        localStorage.removeItem("token");
    };
}