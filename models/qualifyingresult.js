const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create qualifyingresult model
const QualifyingResultSchema = new Schema(
    {
        number: {
            type: 'Number',
            required: [true, 'number is required']
        },
        position: {
            type: 'Number',
            required: [true, 'position is required']
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
        Q1: {
            type: 'String',
            required: [true, 'Q1 is required']
        },
        Q2: {
            type: 'String',
            required: [true, 'Q2 is required']
        },
        Q3: {
            type: 'String',
            required: [true, 'Q3 is required']
        }
    }, {versionKey: false}
);

const QualifyingResult = mongoose.model('qualifyingResults', QualifyingResultSchema);

module.exports = QualifyingResult;