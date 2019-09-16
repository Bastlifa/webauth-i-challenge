import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {getUsers} from "../actions"
import { UserGrid, UserCard } from './Styles'

const UsersList = props =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [localUsers, setLocalUsers] = useState([])
    
    useEffect(_ =>
        {
            dispatch(getUsers())
        }, [])
    useEffect(_ =>
        {
            setLocalUsers(state.users)
            console.log(localUsers)
        }, [state.users])

    const handleLogout = _ =>
    {
        localStorage.removeItem('token')
        props.history.push('/')
    }

    return (
        <>
            <button onClick={handleLogout}>Logout</button>
            <UserGrid>
                {localUsers.map((user, index) => 
                <UserCard key={index}>
                    <h1>{user.username}</h1>
                </UserCard>)}
            </UserGrid>
        </>
    )
}

export default UsersList