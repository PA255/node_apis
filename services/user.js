const user = require('../models/user');

module.exports = () => {

    const add = (data) => {
        return new Promise((resolve, reject) => {
            user.create(data).then(resolve).catch(reject)
        })
    }

    const fetch = (query) => {
        return new Promise((resolve, reject) => {
            user.findOne(query).then(resolve).catch(reject)
        })
    }

    return{
        add,
        fetch
    }
}