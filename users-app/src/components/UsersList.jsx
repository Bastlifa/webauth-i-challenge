import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {getUsers} from "../actions"
import { UserGrid, UserCard } from './Styles'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        margin: '25px auto',
        backgroundColor: "#000000",
        color: "#FFFFFF",
        '&:hover': {
            color: "#000000"
        }
    }
}));

const UsersList = props =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [localUsers, setLocalUsers] = useState([])
    const classes = useStyles()
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
            <Button onClick={handleLogout} className={classes.button}>Logout</Button>
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