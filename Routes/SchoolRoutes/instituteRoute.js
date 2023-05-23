const express = require( 'express' );
const institute = express.Router();


institute.get( '/', ( req, res ) => {
    console.log( "Get All Institute Data" );
} )
institute.get( '/:id', ( req, res ) => {
    console.log( "Get Single Institute Data" );

} )
institute.post( '/', ( req, res ) => {
    console.log( "POST  Institute Data" );

} )
institute.post( '/:id', ( req, res ) => {
    console.log( "POST  Institute Data By Id" );

} )
institute.delete( '/:id', ( req, res ) => {
    console.log( "Delete Institute Data" );

} )

module.exports = institute