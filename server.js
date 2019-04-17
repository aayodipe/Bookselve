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

//Root Router
app.get('/',(req, res)=>{
     res.json({Hello:'Greeting from here'})
})




app.listen(PORT, ()=>{
     console.log(`Server running on port ${PORT}`)
})