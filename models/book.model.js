const mongoose = require('mongoose')
/*

Книга - Название, Id user кто арендует(if false = null), genre, review 

*/
const bookSchema = mongoose.Schema({

    name : String,
    userId : {
        ref  : "User",
        type : mongoose.SchemaTypes.ObjectId,
        default : null
    },
    genre : {
        ref: "Genre",
        type : mongoose.SchemaTypes.ObjectId,
        default : null
    },


})

const Book = mongoose.model('Books',bookSchema )

module.exports = Book