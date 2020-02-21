const server = require('./server')
const PORT = process.env.PORT || 5000

// const corsOptions = {origin: 'http://localhost:3000'}
// server.use(cors(corsOptions))


server.listen(PORT, _ =>
{
    console.log(`listening on port ${PORT}`)
})