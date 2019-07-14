const express = require( 'express' );
const router = express.Router();

const Contact = require( '../models/contact' );

router.get( '/', async ( req, res ) => {
    const contacts = await Contact.find();
    res.render( 'index', { 
        contacts: contacts,
        edit: false
     } );
} );

//async - await -> mostrar por consola mensaje de la instruccion
router.post( '/add', async ( req, res ) => {
    const contact = new Contact( req.body );
    await contact.save();
    res.redirect( '/' );
} );

router.get( '/borrar/:id', async ( req, res ) => {
    const { id } = req.params;
    await Contact.remove( { _id: id } );
    res.redirect( '/' );
} );

router.get( '/editar/:id', async ( req, res ) => {
    const { id } = req.params;
    const contact = await Contact.findById( id );
    const contacts = await Contact.find();
    res.render( 'index', {
        contacts: contacts,
        edit: true,
        contact: contact
    } );
} );

router.post( '/editar/:id', async ( req, res ) => {
    const { id } = req.params;
    await Contact.update( { _id: id }, req.body );
    res.redirect( '/' );
} );

module.exports = router;