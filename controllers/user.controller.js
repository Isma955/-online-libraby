const User = require('../models/user.model');
// const { all } = require('../routes/book.routes');

module.exports.userController = {
    addUser : async (req, res) => {
        const addUser = await User.create({
            name : req.body.name
        })
        res.json(addUser)
    },
    allUser : async (req, res) => {
        const allUser = await User.find({})
        res.json(allUser)
    }
}