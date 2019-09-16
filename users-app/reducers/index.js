import {  

} from '../actions'

export const reducer = (state = initialState, action) =>
{
    switch(action.payload)
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
            return {
                ...state,
                isLoading: false,
        
                error: "",
            }
        case GET_USERS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}