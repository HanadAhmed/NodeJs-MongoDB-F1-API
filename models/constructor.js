const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create constructor model
const ConstructorSchema = new Schema(
    {
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
        wins: {
            type: 'Number',
            required: [true, 'wins is required']
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
        }
    }, {versionKey: false}
);

const Constructor = mongoose.model('constructors', ConstructorSchema);

module.exports = Constructor;