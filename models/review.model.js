const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema ({
    name : String
})

const Review = mongoose.model('Schemas', reviewSchema )

module.exports = Review