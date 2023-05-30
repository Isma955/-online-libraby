const Book = require("../models/book.model")
const User = require("../models/user.model")

module.exports.booksController = {
    addBook : async (req, res) => {
        const addBook = await Book.create ({
            name: req.body.name
        })
        res.json(addBook)
    },
    allBook : async (req, res) => {
        const allBook = await Book.find({})
        res.json(allBook)
    },
    deleteBook : async (req, res) => {
        const deleteBook = await Book.findByIdAndDelete(req.params.id);
        res.json(`${deleteBook} удалена`)
    },
    updateBook : async( req, res) => {
        const updateBook = await Book.findByIdAndUpdate(req.params.id,({name : req.body.name}))
        res.json(updateBook)
    },
    confiscateBook : async (req, res) => {
        const user = await User.findByIdAndUpdate(req.params.id,{$set : {rentedBooks : []}});
        const book = await Book.updateMany({userId:req.params.id}, {$set :{userId : null}});
        const userBlocked  = await User.findByIdAndUpdate(req.params.id, {$set:{isBlocked : true}})
        
        res.json(user)
        res.json(book)
        res.json(userBlocked)

    },
    rentBook : async( req, res) => {

        const { id } = req.params
        const { userId } = req.body


        const book = await Book.findById(id)
        const user = await User.findById(userId)

        if(user.isBlocked == true) {
            return res.json('вы заблокированы')
        }

        if(book.userId) {
            return res.json('эта книга уже арендована другим пользователем')
        }
        
        if( user.rentedBooks.length >= 3) {
            return res.json('нельзя арендовать больше 3-ех книг одновременно')
        }

        await Book.findByIdAndUpdate(id,{
            userId : userId
        })

        await User.findByIdAndUpdate(userId,{
            $push : {
                rentedBooks: id
            },
        })
        res.json('успешно')
    },
    returnBook : async (req, res) => {
        const book = await Book.findByIdAndUpdate(req.params.id, {$set: {userId : null}})
        const user = await User.findByIdAndUpdate(req.body.userId , {$pull : {
            rentedBooks : req.params.id}})
            res.json(user)
            res.json(book)
            
    }
}