const express = require('express');
const router = express.Router();
const Qualifying = require('../models/qualifyingresult');

//get list of qualifying from db
router.get('/qualifying', function(req, res, next) {
    Qualifying.find({}).then(function (qualifying) {
        res.send(qualifying);
    });
});

//get specific qualifying from db using id
router.get('/qualifying/find/:id', function(req, res, next) {
    Qualifying.findOne({_id: req.params.id}).then(function (qualifying) {
        res.send(qualifying);
    })
});

//add new qualifying to qualifyingresults
router.post('/qualifying', function(req, res, next) {
    Qualifying.create(req.body).then(function (qualifying) {
        res.send(qualifying)
    }).catch(next);
});
//update existing qualifying in qualifyingresults
router.put('/qualifying/:id', function(req, res, next) {
    Qualifying.findByIdAndUpdate({_id:req.params.id}, req.body).then(function () {
        Qualifying.findOne({_id: req.params.id}).then(function (qualifying) {
            res.send(qualifying);
        })
    });
});
//delete qualifying from qualifyingresults
router.delete('/qualifying/:id', function(req, res, next) {
    Qualifying.findByIdAndRemove({_id:req.params.id}).then(function (qualifying) {
        res.send(qualifying)
    });
});

module.exports = router;