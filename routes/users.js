const express = require('express')
const router = express.Router();
const {add_user, login } = require('../controller/user')

router.post('/register',add_user);
router.post('/login',login);

module.exports = router;