const express = require('express')
const usersRouter = require('./users/usersRouter')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use('/api', usersRouter)
server.use(cors())

server.get('/', (req, res) =>
{
    res.status(200).json({ message: 'Server is running!' })
})

module.exports = server