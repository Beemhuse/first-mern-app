const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    creator:{
        type:String,
        required: true
    },
    selectedFile:String,
    date:{
        type: Date,
        default: Date.now
    }
});


module.exports = Book = mongoose.model('books', BookSchema)