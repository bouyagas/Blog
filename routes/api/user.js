const express = require('express');
const userRoute = express.Router();

const { addUser, deleteUser } = require('../../models/user.js');
const sendJSONresp = (req, res) => res.json(res.user || []);

userRoute.route('/')
    .post(addUser, sendJSONresp);

userRoute.route('/:id')
    .delete(deleteUser, sendJSONresp);


module.exports = userRoute;
