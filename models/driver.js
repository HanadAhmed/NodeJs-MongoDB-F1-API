const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create driver model
const DriverSchema = new Schema(
    {
        position: {
            type: 'String',
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
        wins: {
            type: 'Number',
            required: [true, 'wins is required']
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
        Constructors: [
                {
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
                }]
    }, {versionKey: false}
);

const Driver = mongoose.model('drivers', DriverSchema);

module.exports = Driver;