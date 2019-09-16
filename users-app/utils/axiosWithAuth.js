import axios from 'axios'

export const axiosWithAuth = () =>
{
    return axios.create({
        headers:
        {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
}   