const express = require( 'express' );
const instituteModel = require( '../../Models/instituteModel' )
const { sendResponse } = require( '../../helper/helper' )

const institute = express.Router();


institute.get( '/', async ( req, res ) => {
    try {
        const result = await instituteModel.find();

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
institute.get( '/:id', ( req, res ) => {
    console.log( "Get Single Institute Data" );

} )
institute.post( '/', async ( req, res ) => {
    let { name, address, shortName, tel } = req.body
    try {
        let errArr = []
        if ( !name ) {
            errArr.push( "Required : name " )
        }
        if ( !address ) {
            errArr.push( "Required : address " )
        }
        if ( !shortName ) {
            errArr.push( "Required : shortName " )
        }
        if ( !tel ) {
            errArr.push( "Required : telphone Number " )
        }
        if ( errArr.length > 0 ) {
            res.send( sendResponse( false, errArr, null, "Required All Fields" ) ).status( 400 );
            return

        }
        else {
            let obj = { name, address, shortName, tel }
            let institute = new instituteModel( obj )
            await institute.save();
            if ( !institute ) {
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
institute.post( '/:id', ( req, res ) => {
    console.log( "POST  Institute Data By Id" );

} )
institute.delete( '/:id', ( req, res ) => {
    console.log( "Delete Institute Data" );

} )

module.exports = institute