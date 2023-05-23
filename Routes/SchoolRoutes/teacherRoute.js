const express = require( 'express' )
const teacherModel = require( '../../Models/studentModel' )
const { sendResponse } = require( '../../helper/helper' )


const teacher = express.Router();

teacher.get( '/', async ( req, res ) => {
    try {
        const result = await teacherModel.find();

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
teacher.get( '/:id', ( req, res ) => { console.log( "Get Individual Teacher Data " ); } )


teacher.post( '/', async ( req, res ) => {
    let { name, course, contact } = req.body
    try {
        let errArr = [];
        if ( !name ) {
            errArr.push( "Required : name " )
        }
        if ( !course ) {
            errArr.push( "Required : course " )
        }
        if ( !contact ) {
            errArr.push( "Required : contact " )
        }
        if ( errArr.length > 0 ) {
            res.send( sendResponse( false, errArr, null, "Required All Fields" ) ).status( 400 );
            return

        }
        else {
            let obj = { name, course, contact }
            let teacher = new teacherModel( obj )
            await teacher.save();
            if ( !teacher ) {
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
teacher.post( '/:id', ( req, res ) => { console.log( "POST Teacher Data By Id " ); } )
teacher.get( '/:id', ( req, res ) => { console.log( "Delete Teacher Data " ); } )

module.exports = teacher
