// route.js

const express = require('express');
const {addAcc,checkAcc,updateUser} = require('../controllers/user-controller.js');
const router = express.Router();

// const User = require('./User'); // Import the User model
router.post('/signupadd',addAcc);
router.post('/signupcheck',checkAcc)
router.post('/updateuser',updateUser)
// router.post('profile/edit',editAcc);
// router.post('profile/delete',deleteAcc);
module.exports = router;

// Define a route to create and save a new user
