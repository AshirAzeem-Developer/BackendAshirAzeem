const express = require( 'express' )

const student = express.Router();

student.get( '/', ( req, res ) => {
    console.log( "Get All Student Data " );
} )

student.get( '/:id', ( req, res ) => {
    console.log( "Get  Student Data by id " );
} )

student.post( '/', ( req, res ) => {
    console.log( "POST All Student Data " );
} )

student.get( '/:id', ( req, res ) => {
    console.log( "POST  Student Data  by Id" );
} )

student.get( '/:id', ( req, res ) => {
    console.log( "Delete  Student Data " );
} )

module.exports = student