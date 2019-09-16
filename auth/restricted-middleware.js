const bcryptjs = require('bcryptjs')
const users = require('../users/usersHelper')

module.exports = function restricted(req, res, next)
{
    const {username, password} = req.headers

    if(username && password)
    {
        users.findBy({username})
            .first()
            .then(user =>
                {
                    if(user && bcryptjs.compareSync(password, user.password))
                    {
                        next()
                    }
                    else
                    {
                        res.status(401).json({ message: 'Invalid Credentials' })
                    }
                })
            .catch(err =>
                {
                    res.status(500).json(error)
                })
    }
    else res.status(401).json({ message: `Please provide valid credentials` })
}
