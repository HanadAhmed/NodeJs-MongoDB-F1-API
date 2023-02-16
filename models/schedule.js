const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schedule model
const ScheduleSchema = new Schema({
        season: {type: 'String', required: [true, 'Season is required']},
        round: {
            type: 'String',
            required: [true, 'round is required']
        },
        url: {
            type: 'String',
            required: [true, 'url is required']
        },
        raceName: {
            type: 'String',
            required: [true, 'raceName is required']
        },
        Circuit: {
            circuitId: {
                type: 'String',
                required: [true, 'circuitId is required']
            },
            url: {
                type: 'String',
                required: [true, 'url is required']
            },
            circuitName: {
                type: 'String',
                required: [true, 'circuitName is required']
            },
            Location: {
                geometry: {
                    type: {
                        type: 'String',
                        default: "Point",
                        required: [true, 'type is required']
                    },
                    coordinates: {
                        type: ['Number'],
                        index: "2dsphere",
                        required: [true, 'coordinates is required']
                    }
                },
                locality: {
                    type: 'String',
                    required: [true, 'locality is required']
                },
                country: {
                    type: 'String',
                    required: [true, 'country is required']
                }
            }
        },
        date: {
            type: 'String',
            required: [true, 'date is required']
        },
        time: {
            type: 'String',
            required: [true, 'time is required']
        }
    }, {versionKey: false}
);

const Schedule = mongoose.model('schedules', ScheduleSchema);

module.exports = Schedule;