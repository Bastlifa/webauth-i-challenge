const express = require('express')
const usersRouter = require('./users/usersRouter')
const cors = require('cors')
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)
const dbConnection = require('./data/db-config')

const sessionConfig =
{
    name: 'cookiename',
    secret: process.env.SESSION_SECRET || 'this is a secret thing, but not really',
    cookie:
    {
        maxAge: 1000*60*60,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
    store: new KnexSessionStore(
        {
            knex: dbConnection,
            tablename: 'knexsessions',
            sidfieldname: 'sessionid',
            createtable: true,
            clearInterval: 1000*60*38,
        }
    )
}

const server = express()

server.use(express.json())
server.use(session(sessionConfig))
server.use('/api', usersRouter)
server.use(cors())

server.get('/', (req, res) =>
{
    res.status(200).json({ message: 'Server is running!' })
})

module.exports = server