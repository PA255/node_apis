const bcrypt = require('bcrypt');

const hash_password = (password)=>{
    let hash = bcrypt.hash(password,10);
    return hash
}

const password_compare = (password, hash_password)=>{
    let result = bcrypt.compare(password,hash_password);
    return result
}

module.exports = {
    hash_password,
    password_compare
}