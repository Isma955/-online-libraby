const mongoose = require('mongoose')
const { modelName } = require('./book.model')

const genreSchema = mongoose.Schema({
    name : String
})

const Genre = mongoose.model('Genre', genreSchema)

module.exports = Genre