const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const ContactSchema = new Schema( {
    nombre: String,
    email: String,
    telefono: Number
} );

module.exports = mongoose.model( 'contacts', ContactSchema );