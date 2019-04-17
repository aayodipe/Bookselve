const mongoose = require('mongoose')
const Schema =  mongoose.Shema

const BookSchema = new Schema({
     title: {
          type = String,
          require = true
     },
     auctors:{ 
          type = String,
          require = true
     },
     description:{
          type = String,
          require = true
     },
     image:{
          type = String,
          require = true
     },
     link:{
          type = String,
          require = true
     }
     
})

module.exports = Books = mongoose.model('books', BookSchema)