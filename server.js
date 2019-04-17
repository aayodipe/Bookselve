const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT ||3000
const app =  express();
// DB config
const db = require('./config/key').mongoURL

// Connect to mongoose
mongoose
.connect(db)
.then(()=>console.log('MongoDB Connected'))
.catch(err => console.log(err))

// Get Routes
const books = require('./routes/api/books')
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')


// Use Routes
app.use('/api/books', books)
app.use('/api/users', users)
app.use('/api/profile', profile)

//Root Router
app.get('/',(req, res)=>{
     res.json({Hello:'Greeting from here'})
})




app.listen(PORT, ()=>{
     console.log(`Server running on port ${PORT}`)
})