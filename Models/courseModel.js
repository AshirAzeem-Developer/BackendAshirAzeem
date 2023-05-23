const mongoose = require( 'mongoose' )

const CourseSchema = new mongoose.Schema( {
    namae: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    fees: {
        type: String,
        required: true
    },

    shortName: {
        type: String,
        required: true
    }
} )

const courseModel = mongoose.Model( 'COURSE', CourseSchema )

module.exports = courseModel
