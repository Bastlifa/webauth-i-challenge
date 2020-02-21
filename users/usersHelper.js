const db = require('../data/db-config')

module.exports =
{
    find,
    findBy,
    add,
    findByID
}

function find() 
{
    return db('users')
}

function findBy(filter)
{
    return db('users').where(filter)
}

function add(user)
{
    return db('users')
        .insert(user, 'id')
        .then(ids =>
            {
                const [id] = ids
                return findByID(id)
            })
}

function findByID(id)
{
    return db('users')
        .where({id})
        .first()
}