const express = require('express');
const router = express.Router();
const Constructor = require('../models/constructor');

//get list of constructors from db
router.get('/constructor', function(req, res, next) {
    Constructor.find({}).then(function (constructor) {
        res.send(constructor);
    });
});

//get specific constructor from db using id
router.get('/constructor/find/:id', function(req, res, next) {
    Constructor.findOne({_id: req.params.id}).then(function (constructor) {
        res.send(constructor);
    })
});

//add new constructor to constructor
router.post('/constructor', function(req, res, next) {
    Constructor.create(req.body).then(function (constructor) {
        res.send(constructor)
    }).catch(next);
});
//update existing race in constructor
router.put('/constructor/:id', function(req, res, next) {
    Constructor.findByIdAndUpdate({_id:req.params.id}, req.body).then(function () {
        Constructor.findOne({_id: req.params.id}).then(function (constructor) {
            res.send(constructor);
        })
    });
});

//delete constructor from constructor
router.delete('/constructor/:id', function(req, res, next) {
    Constructor.findByIdAndRemove({_id:req.params.id}).then(function (constructor) {
        res.send(constructor)
    });
});

module.exports = router;