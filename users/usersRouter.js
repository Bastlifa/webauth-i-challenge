const express = require('express')
const bcryptjs = require('bcryptjs')
const users = require('./usersHelper')
const restricted = require('../auth/restricted-middleware')
const cors = require('cors')
const uuidv4 = require('uuid/v4')

const router = express.Router()

router.use(cors())

router.get('/users', restricted, (req, res) =>
{
    users.find()
        .then(response =>
            {
                res.status(200).json(response)
            })
        .catch(error =>
            {
                res.status(500).json({ errorMessage: `Internal Error: Could not get users` })
            })
})

router.post('/login', (req, res) =>
{
    if(!req.body.username && !req.body.password)
    {
        res.status(400).json({ errorMessage: "Missing username or password" })
    }
    else
    {
        let { username, password } = req.body
        users.findBy({username}).first()
            .then(user =>
                {
                    if(user && bcryptjs.compareSync(password, user.password)) 
                    {
                        req.session.userid = user.id
                        res.status(200).json({ message: `Welcome ${user.username}!`})
                        //TODO: send cookie with res
                    }
                    else
                    {
                        res.status(401).json({ errorMessage: `You shall not pass!` })
                    }
                })
            .catch(error =>
                {
                    console.log('error', error)
                    res.status(500).json({ errorMessage: `Internal Error: Could not post login` })
                })
    }
})

router.post('/register', (req, res) =>
{
    if(!req.body.username || !req.body.password)
    {
        res.status(400).json({ errorMessage: "Missing username or password" })
    }
    else
    {
        let user = req.body
        const hash = bcryptjs.hashSync(user.password, 12)
        user.password = hash
        users.add(user)
            .then(response =>
                {
                    res.status(201).json({response,  token: uuidv4()})
                })
            .catch(error =>
                {
                    console.log(error)
                    res.status(500).json({ errorMessage: `Internal Error: Could not register` })
                })
    }
})

router.get('/logout', (req, res) =>
{
    if(req.session)
    {
        req.session.destroy(err =>
            {
                if(err) res.status(500).json({ message: 'failed to logout' })
                else res.status(200).json({ message: 'Goodbye' })
            })
    }
    else res.status(200).json({ message: 'You weren\'t logged in to begin with' })
})

module.exports = router