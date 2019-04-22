const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT ||3000
const router = require('./routes')
const app =  express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router)

// DB config
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

app.listen(PORT, ()=>{
     console.log(` Server listen to port ${PORT}`)
})

