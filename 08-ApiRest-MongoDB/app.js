//(3)
const usuarios = require('./routes/usuarios');
const cursos = require('./routes/cursos');
const auth = require('./routes/auth');
//(B)
//const usuario = require('./routes/usuarios'); 
//(1)importamos express 
const express = require('express');
//(2)importamos mongoose
const mongoose = require('mongoose');
const config = require('config');
const { use } = require('./routes/usuarios');
//(2)CONECTARNOS A LA BD
//mongoose.connect('mongodb://localhost:27017/demo')
mongoose.connect(config.get('configDB.HOST'))
.then(()=>console.log('conectado a MongoDB...'))
.catch(err=> console.log('no se pudo conectar con mongodb', err));

//(1)
const app = express();
/* //(B)
app.use(express.json());
app.use(express.urlencoded({extended: true}));//nos permite leer las url
app.use('/api/usuarios', usuarios) 
 */
//(3)
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/usuarios', usuarios);
app.use('/api/cursos', cursos);
app.use('/api/auth', auth);
//(1)
const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log('Api RESTFul ejecutandose...');
})