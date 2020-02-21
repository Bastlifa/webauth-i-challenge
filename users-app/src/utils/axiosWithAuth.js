import axios from 'axios'
axios.defaults.withCredentials = true

export const axiosWithAuth = () =>
{
    const token = localStorage.getItem('token')
    return axios.create({
        headers:
        {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
}   