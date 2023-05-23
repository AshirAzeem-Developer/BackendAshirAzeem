const express = require( 'express' );
const courseModel = require( '../../Models/courseModel' )
const { sendResponse } = require( '../../helper/helper' )
const course = express.Router();

course.get( '/', async ( req, res ) => {
    try {
        const result = await courseModel.find();

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
course.get( '/:id', ( req, res ) => {
    console.log( "Get Single course Data" );

} )
course.post( '/', async ( req, res ) => {
    let { name, duration, fee, shortName } = req.body
    try {
        let errArr = []
        if ( !name ) {
            errArr.push( "Required : name " )
        }
        if ( !duration ) {
            errArr.push( "Required : duration " )
        }
        if ( !fee ) {
            errArr.push( "Required : fee " )
        }
        if ( !shortName ) {
            errArr.push( "Required : shortName " )
        }
        if ( errArr.length > 0 ) {
            res.send( sendResponse( false, errArr, null, "Required All Fields" ) ).status( 400 );
            return

        }
        else {
            let obj = { name, duration, fee, shortName };
            let course = new courseModel( obj )
            await course.save();
            if ( !course ) {
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
course.post( '/:id', ( req, res ) => {
    console.log( "POST  course Data By Id" );

} )
course.delete( '/:id', ( req, res ) => {
    console.log( "Delete course Data" );

} )

module.exports = course