const express = require( 'express' )
const studentModel = require( '../../Models/studentModel' )
const { sendResponse } = require( '../../helper/helper' )


const student = express.Router();

student.get( '/', async ( req, res ) => {

    try {
        const result = await studentModel.find();

        if ( !result ) {
            res.send( sendResponse( false, null, "No Data Found" ) ).status( 404 )

        } else {
            res.send( sendResponse( true, result ) ).status( 200 )

        }
    } catch ( error ) {
        console.log( error );
        res.send( sendResponse( false, null, "Internal Server Error" ) ).status( 400 );
    }
} )
student.get( '/:id', ( req, res ) => {
    console.log( "Get Single Institute Data" );

} )


student.post( '/', async ( req, res ) => {
    let { firstName, lastName, email, password, contact } = req.body
    try {
        let errArr = []
        if ( !firstName ) {
            errArr.push( "Required : firstName " )
        }
        if ( !lastName ) {
            errArr.push( "Required : lastName " )
        }
        if ( !email ) {
            errArr.push( "Required : email " )
        }
        if ( !password ) {
            errArr.push( "Required : password " )
        }
        if ( !contact ) {
            errArr.push( "Required : contact " )
        }
        if ( errArr.length > 0 ) {
            res.send( sendResponse( false, errArr, null, "Required All Fields" ) ).status( 400 );
            return

        }
        else {
            let obj = { firstName, lastName, email, password, contact }
            let student = new studentModel( obj )
            await student.save();
            if ( !student ) {
                res.send( sendResponse( false, null, "Internal Server Error" ) ).status( 400 );
            } else {
                res.send( sendResponse( true, course, "Saved Successfully" ) ).status( 200 );
            }
        }
    }
    catch ( error ) {
        console.log( error );
        res.send( sendResponse( false, null, "Internal Server Error" ) );
    }

} )

student.post( '/:id', ( req, res ) => {
    console.log( "POST  Student Data  by Id" );
} )

student.delete( '/:id', ( req, res ) => {
    console.log( "Delete  Student Data " );
} )

module.exports = student