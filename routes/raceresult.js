const express = require('express');
const router = express.Router();
const Race = require('../models/raceresult');

//get list of races from db
router.get('/race', function(req, res, next) {
    Race.find({}).then(function (race) {
        res.send(race);
    });
});

//get specific race from db using id
router.get('/race/find/:id', function(req, res, next) {
    Race.findOne({_id: req.params.id}).then(function (race) {
        res.send(race);
    })
});

//get specific race from db using driver name
router.get('/race/name/find/:id', function(req, res, next) {
    Race.findOne({"Driver.driverId": req.params.id}).then(function (race) {
        res.send(race);
    })
});

//add new race to races
router.post('/race', function(req, res, next) {
    Race.create(req.body).then(function (race) {
        res.send(race)
    }).catch(next);
});
//update existing race in races
router.put('/race/:id', function(req, res, next) {
    Race.findByIdAndUpdate({_id:req.params.id}, req.body).then(function () {
        Race.findOne({_id: req.params.id}).then(function (race) {
            res.send(race);
        })
    });
});
//delete race from races
router.delete('/race/:id', function(req, res, next) {
    Race.findByIdAndRemove({_id:req.params.id}).then(function (race) {
        res.send(race)
    });
});

module.exports = router;