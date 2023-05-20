const mongoose = require( 'mongoose' )

const instituteSchema = new mongoose.Schema( {

} )


const instituteModel =  mongoose.model( "INSTUTUTE", instituteSchema )


module.exports = instituteModel