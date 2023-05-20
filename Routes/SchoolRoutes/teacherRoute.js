const express = require( 'express' )


const teacher = express.Router();

teacher.get( '/', ( req, res ) => {
    res.send( "Get All Teacher Data" )
    console.log( "Get All Teacher Data " );
} )
teacher.get( '/:id', ( req, res ) => { console.log( "Get Individual Teacher Data " ); } )
teacher.post( '/', ( req, res ) => { console.log( "POST  Teachers Data " ); } )
teacher.post( '/:id', ( req, res ) => { console.log( "POST Teacher Data By Id " ); } )
teacher.get( '/:id', ( req, res ) => { console.log( "Delete Teacher Data " ); } )

module.exports = teacher
