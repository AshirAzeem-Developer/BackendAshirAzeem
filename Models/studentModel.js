const mongoose = require( 'mongoose' )

const studentSchema = new mongoose.Schema( {
    firstName: {

        type: String,
        required: true
    },
    lastName: {

        type: String,
        required: true
    },
    : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: String,
    }

} )

const studentModel = mongoose.model( "STUDENT", studentSchema )

module.exports = studentModel