const db = require('../models')

module.exports = {
     findAll: function (req, res) {
          db.Books
               .find(req.body)
               .sort({
                    author: -1
               })
               .then(resp => res.json(resp))
               .catch(err => res.status(444).json(err))
     },
     findOne: function (req, res) {
          db.Books
               .findOne({title:req.params.title})
               .then(resp => res.json(resp))
               .catch(err => res.status(444).json(resp))
     },
     create: function (req, res) {
          db.Books
                .create(req.body.title)
                .then(resp =>res.json(resp))
                .catch(err =>res.status(400).json(resp.resp))

     },
     updateOne:function(req, res){
          db.Books
               .findOneAndUpdate({_id:req.params.id}, req.body)
               .then(resp=>res.json(resp))
               .catch(err =>res.status(422).json(err))
     },
     deleteOne: function(req, res){
          db.Books
          .findOneAndDelete({_id:req.params.id})
          .then(resp =>res.json(resp))
          .catch(err =>res.status(422).json(err))
     }


}