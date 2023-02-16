const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create raceresult model
const RaceResultSchema = new Schema(
    {
        number: {
            type: 'Number',
            required: [true, 'number is required']
        },
        position: {
            type: 'Number',
            required: [true, 'position is required']
        },
        positionText: {
            type: 'String',
            required: [true, 'positionText is required']
        },
        points: {
            type: 'Number',
            required: [true, 'points is required']
        },
        Driver: {
            driverId: {
                type: 'String',
                required: [true, 'driverId is required']
            },
            permanentNumber: {
                type: 'Number',
                required: [true, 'permanentNumber is required']
            },
            code: {
                type: 'String',
                required: [true, 'code is required']
            },
            url: {
                type: 'String',
                required: [true, 'url is required']
            },
            givenName: {
                type: 'String',
                required: [true, 'givenName is required']
            },
            familyName: {
                type: 'String',
                required: [true, 'familyName is required']
            },
            dateOfBirth: {
                type: 'String',
                required: [true, 'dateOfBirth is required']
            },
            nationality: {
                type: 'String',
                required: [true, 'nationality is required']
            }
        },
        Constructor: {
            constructorId: {
                type: 'String',
                required: [true, 'constructorId is required']
            },
            url: {
                type: 'String',
                required: [true, 'url is required']
            },
            name: {
                type: 'String',
                required: [true, 'name is required']
            },
            nationality: {
                type: 'String',
                required: [true, 'nationality is required']
            }
        },
        grid: {
            type: 'Number',
            required: [true, 'grid is required']
        },
        laps: {
            type: 'Number',
            required: [true, 'laps is required']
        },
        status: {
            type: 'String',
            required: [true, 'status is required']
        },
        Time: {
            millis: {
                type: 'String',
                required: [true, 'type is required']
            },
            time: {
                type: 'String',
                required: [true, 'type is required']
            }
        },
        FastestLap: {
            rank: {
                type: 'Number',
                required: [true, 'type is required']
            },
            lap: {
                type: 'Number',
                required: [true, 'type is required']
            },
            Time: {
                time: {
                    type: 'String',
                    required: [true, 'time is required']
                }
            },
            AverageSpeed: {
                units: {
                    type: 'String',
                    required: [true, 'units is required']
                },
                speed: {
                    type: 'String',
                    required: [true, 'speed is required']
                }
            }
        }
    }, {versionKey: false}
);

const RaceResult = mongoose.model('raceResults', RaceResultSchema);

module.exports = RaceResult;