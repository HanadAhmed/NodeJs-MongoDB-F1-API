const express = require('express');
const router = express.Router();
const Driver = require('../models/driver');

//get list of drivers from db
router.get('/driver', function(req, res, next) {
    Driver.find({}).then(function (driver) {
        res.send(driver);
    });
});

//get specific driver from db using id
router.get('/driver/find/:id', function(req, res, next) {
    Driver.findOne({_id: req.params.id}).then(function (driver) {
        res.send(driver);
    })
});

//get specific driver from db using position
router.get('/driver/position/find/:id', function(req, res, next) {
    Driver.findOne({position: req.params.id}).then(function (driver) {
        res.send(driver);
    })
});

//add new driver to drivers
router.post('/driver', function(req, res, next) {
    Driver.create(req.body).then(function (driver) {
        res.send(driver)
    }).catch(next);
});
//update existing driver in drivers
router.put('/driver/:id', function(req, res, next) {
    Driver.findByIdAndUpdate({_id:req.params.id}, req.body).then(function () {
        Driver.findOne({_id: req.params.id}).then(function (driver) {
            res.send(driver);
        })
    });
});
//delete driver from drivers
router.delete('/driver/:id', function(req, res, next) {
    Driver.findByIdAndRemove({_id:req.params.id}).then(function (driver) {
        res.send(driver)
    });
});

module.exports = router;