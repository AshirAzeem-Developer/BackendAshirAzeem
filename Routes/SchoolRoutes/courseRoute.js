const express = require( 'express' );

const course = express.Router();

course.get( '/', ( req, res ) => {
    console.log( "Get All course Data" );
} )
course.get( '/:id', ( req, res ) => {
    console.log( "Get Single course Data" );

} )
course.post( '/', ( req, res ) => {
    console.log( "POST  course Data" );

} )
course.post( '/:id', ( req, res ) => {
    console.log( "POST  course Data By Id" );

} )
course.delete( '/:id', ( req, res ) => {
    console.log( "Delete course Data" );

} )

module.exports = course