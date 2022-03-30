//(A)trabajaremos con un modelo basado en un esquema de mongoDB
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  email: {
      type: String,
      required: true,
      unique: true //de esta manera se duplicaran datos referentes al email
  },
  nombre: {
      type: String,
      required: true
  }, 
  password: {
      type: String,
      required: true
  }, 
  estado: {
      type: Boolean,
      default: true
      /* al momento de crearse el usuario, este campo se asignara autoamticamente */
  }, 
  image: {
      type: String,
      required:false
  }
})

//EXPORTAMOS
module.exports = mongoose.model('Usuario', usuarioSchema);