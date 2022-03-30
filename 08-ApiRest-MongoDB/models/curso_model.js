//(A)trabajaremos con un modelo basado en un esquema de mongoDB
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cursoSchema = new mongoose.Schema({
  titulo: {
      type: String,
      required: true
  },
  autor:{
      type: schema.Types.ObjectId, ref: 'Usuario'
  },
  descripcion: {
      type: String,
      required: false
  }, 
  estado: {
      type: Boolean,
      default: true
  }, 
  image: {
      type: String,
      required:false
  },
  alumno: {
       type: Number,
       default: 0
    }, 
    califica: {
        type: Number,
        default: 0
    }
})

//EXPORTAMOS
module.exports = mongoose.model('Curso', cursoSchema);