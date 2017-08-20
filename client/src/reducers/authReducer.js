import { FETCH_USER } from '../actions/types';

//this reducer return among 3 things: null, user model or false
export default function(state = null, action) {
    console.log('authReducer');
    switch(action.type) {
        case FETCH_USER:
            return action.payload || false; // if action.payload is not empty, return it else return false
        default:
            return state;
    }
}