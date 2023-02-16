const express = require('express');
const router = express.Router();
const Schedule = require('../models/schedule');

//get nearest race to specific coordinates
router.get('/schedule/near', function(req, res, next) {
    Schedule.aggregate().near({
        near: {
            'type': 'Point',
            'coordinates': [parseFloat(req.query.long), parseFloat(req.query.lat)]},
            maxDistance: 1999999,
            spherical: true,
            distanceField: "dist"
        }).then(function (schedules){
        res.send(schedules)
        console.log(schedules)
    });
});

//get specific race from db using id
router.get('/schedule/find/:id', function(req, res, next) {
    Schedule.findOne({_id: req.params.id}).then(function (schedule) {
            res.send(schedule);
})
});

//get list of races from db
router.get('/schedule', function(req, res, next) {
    Schedule.find({}).sort({date: 1}).then(function (schedule) {
        res.send(schedule);
    });
});

//add new race to schedule
router.post('/schedule', function(req, res, next) {
Schedule.create(req.body).then(function (schedule) {
    res.send(schedule)
}).catch(next);
});

//update existing race in schedule
router.put('/schedule/:id', function(req, res, next) {
Schedule.findByIdAndUpdate({_id:req.params.id}, req.body).then(function () {
    Schedule.findOne({_id: req.params.id}).then(function (schedule) {
        res.send(schedule);
    })
});
});

//delete race from schedule
router.delete('/schedule/:id', function(req, res, next) {
Schedule.findByIdAndRemove({_id:req.params.id}).then(function (schedule) {
    res.send(schedule)
});
});

module.exports = router;