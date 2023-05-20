const mongoose = require( 'mongoose' )

const studentSchema = new mongoose.Schema( {

} )


const studentModel = mongoose.model( "STUDENT", studentSchema )


module.exports = studentModel