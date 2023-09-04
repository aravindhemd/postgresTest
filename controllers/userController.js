const User = require('../models/user');

const createUserTable = async(req,res) => {
    try{
        const user = await User.sync({force:false});
        res.send("User Table created successfully");
    } catch(err){
        console.log(err);
        throw new Error("Error creating user table");
    }
}

const createUser = async(req,res) => {
    try{
        let userData = req.body;
        const user = await User.create(userData);
        res.send(user);
    } catch(err){
        console.log(err);
        // throw new Error("Error creating user");
        res.send(err);
    }
};

const updateUser = async(req,res) => {
    try{
        let userData = req.body;
        const user = await User.update(userData, {where: {id: userData.id}});
        res.send(user);
    } catch(err){
        console.log(err);
        // throw new Error("Error updating user");
        res.send(err);
    }
};

const deleteUser = async(req,res) => {
	try{
		console.log(req.params.id);
		console.log(req.query.id)
    const user = await User.destroy({where: {id: req.params.id}});
		console.log(user);
		console.log("user");
    res.send(req.params.id + " deleted sucessfully");
  } catch(err){
    console.log(err);
    // throw new Error("Error deleting user");
    res.send(err);
  }
};

module.exports = {createUser, createUserTable, updateUser, deleteUser};
