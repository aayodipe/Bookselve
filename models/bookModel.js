const mongoose = require('mongoose')
const Schema =  mongoose.Schema
const BookSchema = new Schema({
   
     title: {
          type : String,
          require : true
     },
     authors:{ 
          type : String,
          require : true
     },
     description:{
          type : String,
          require : true
     },
     image:{
          type : String,
          require : true
     },
     link:{
          type : String,
          require : true
     },

     date: { type: Date, default: Date.now },
     
})


const Books= mongoose.model('books', BookSchema)
module.exports = Books 