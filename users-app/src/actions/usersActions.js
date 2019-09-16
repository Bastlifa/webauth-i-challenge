import { axiosWithAuth } from '../utils'
import axios from 'axios'

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"
export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAIL = "REGISTER_FAIL"
export const GET_USERS_START = "GET_USERS_START"
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"
export const GET_USERS_FAIL = "GET_USERS_FAIL"

const endpoint = ''

export const registerUser = (regInfo, history) => dispatch =>
{
    dispatch({ type: REGISTER_START })

    axios
        .post(`${endpoint}/register`, regInfo)
        .then(res =>
            {
                console.log(`res from register: `, res)
                dispatch({ type: REGISTER_SUCCESS })
                history.push(`${endpoint}/login`)
            })
        .catch(err =>
            {
                console.log(`err from register: ${err}`)
                dispatch({ type: REGISTER_FAIL })
            })
}   

export const loginUser = (loginInfo) => dispatch =>
{
    dispatch({ type: LOGIN_START })

    axiosWithAuth()
        .post(`${endpoint}`, (loginInfo))
            .then(res =>
                {
                    console.log("res from loginUser:", res)
                    dispatch({ type: LOGIN_SUCCESS, payload: res })
                })
            .catch(err =>
                {
                    console.log("err from loginUser:", err)
                    dispatch({ type: LOGIN_FAIL, payload: err })
                })
}