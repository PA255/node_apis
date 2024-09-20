let jwt = require('jsonwebtoken')
const user = require('../services/user');
let dotenv = require('dotenv');
dotenv.config();
let secret_key = process.env.secret_key

let { password_compare, hash_password } = require('../utils/helper')

const add_user = async (req, res) => {
    try {
        let { username, password } = req.body;

        password = await hash_password(password);
        let result = await user().add({ username, password });

        res.status(201).json({ message: 'User Registered Succesfully', data: result });
    }
    catch (error) {
        console.log('error')
        console.log(error)
        res.status(400).json({ error: 'Not working Now Try Later' });
    }
};

const login = async (req, res) => {
    try {
        let { username, password } = req.body;
        let user_result = await user().fetch({ username });

        if(!password){
            return res.status(400).json({ error: 'Password is required', data: {} });

        }

        if (user_result == null) {
            return res.status(400).json({ error: 'User not found', data: {} });
        }

        
        
        let compare_password_result = await password_compare(password, user_result.password);
        if(compare_password_result == false){
            return res.status(400).json({ error: 'Unauthorized user!', data: {} });
        }
        
        const token = jwt.sign({ id: user._id }, secret_key, { expiresIn: '1h' });        
        res.status(200).json({ message:"Successfully logged in", token })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ error: 'error' });
    }
};

module.exports = { add_user, login }