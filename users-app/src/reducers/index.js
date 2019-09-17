import {  
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
} from '../actions'

const initialState =
{
    users: [],
    isLoading: false,
    error: '',

}

export const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
        
                error: "",
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case REGISTER_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
        
                error: "",
            }
        case REGISTER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case GET_USERS_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case GET_USERS_SUCCESS:
            console.log('action from reducer', action.payload)
            return {
                ...state,
                isLoading: false,
                users: action.payload.data,
                error: "",
            }
        case GET_USERS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case LOGOUT_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case LOGOUT_SUCCESS:
            return initialState
        case LOGOUT_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}