const mongoose = require( 'mongoose' )

const teacherSchema = new mongoose.Schema( {

} )


const teacherModel = mongoose.model( "TEACHER", teacherSchema )


module.exports = teacherModel