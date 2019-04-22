const express = require('express')
const router = require('express').Router()
const controllers = require('../../controllers/index')


// Matches with "/api/books"
router.route('/')
  .get(controllers.findAll)
  .post(controllers.create)



// Matches with "/api/books/:id"
  router.route('/:title')
  .get(controllers.findOne)
  .put(controllers.updateOne)
  .delete(controllers.deleteOne)

  module.exports = router