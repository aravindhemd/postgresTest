const express = require('express');
const userRoutes = express.Router();
const {createUser, createUserTable,updateUser, deleteUser} = require('../controllers/userController')

userRoutes.post('/create', createUser);
userRoutes.get('/createTable', createUserTable);
userRoutes.put('/update', updateUser);
userRoutes.delete('/delete/:id', deleteUser);

module.exports = userRoutes;

//nest.js
//Koa