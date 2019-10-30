import axios from "axios";

const initialState={
    user: null,
    loggedIn: false

}

const UPDATE_USER='UPDATE_USER'
const LOGOUT ='LOGOUT'
const GET_USER='GET_USER'



export default function reducer (state = initialState, action) {
    switch(action.type) {
        case UPDATE_USER:
            return {...state, user: action.payload}
            default: return state;
    }
}

export function updateUser (user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}

export function getUser() {
    return {
        type: GET_USER,
        payload: axios.get(URL.user).then(res => res.data)
    }
}