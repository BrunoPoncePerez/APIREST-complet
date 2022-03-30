//(3)
const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
//(A)importamos el usuario model
const Usuario = require('../models/usuario_model');
const Joi = require('@hapi/joi');
const verificarToken = require('../middleware/auth');
const  ruta = express.Router();
const schema = Joi.object({
    nombre: Joi.string()
    .min(3)
    .max(10)
    .required(),

    password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/),

    email: Joi.string()
    .email({minDomainSegments: 2, tlds: {allow:['com', 'net']}})
})
/* creamos una funcion middleware para que valide los token */
/* let verificarToken = (req, res, next) =>{
    let token = req.get('Authorization');
    jwt.verify(token, config.get('configToken.SEED'), (err, decoded) => {
        if(err){
            return res.status(401).json({
                err
            })
        }
     necesitamos al usuario que viene en el payloaded 
        req.usuario = decoded.usuario;
        next();
    })
} esta funcio la movimos la carpeta middleware, archivo auth*/
ruta.get('/', verificarToken, (req, res) => {
    let resultado = listarUsuario();
    resultado.then(usuarios => {
        res.json(usuarios)
    }).catch(err => {
        res.status(400).json({
         err
        })
    })
});
//...trabajamos la promesa
ruta.post('/', (req, res) => {
  let body = req.body; //request que viene desde el cliente

  /* para evitar que se registren varios usuarios con un mismo correo */
  Usuario.findOne({email: body.email}, (err, user) => {
      if(err){
          return res.status(400).json({error: 'Server Error'});
      }
      if(user){
          //si el usuario existe
          return res.status(400).json({
              msj: 'El usuario ya existe'
          });
      }
  })
  //destructuracion
  const {error, value} = schema.validate({nombre: body.nombre, email: body.email});
  if(!error){
     let resultado = crearUsuario(body);
      /* en esta promesa tenemos un valor correcto que es el valor 
      que se a insertado en la BD o en todo caso podria tener un error*/
    
      resultado.then(user => {
          res.json({
              nombre: user.nombre,
              email: user.email
          })
      }).catch(err => {
          res.status(400).json({
              err
          })
      })

  }else {
      res.status(400).json({
          error
      })
  }
})/* nos queda llamar la funcion en nuestra app.js (B) */
/* el dato por el cual actualizaremos la funcion, será el email */
ruta.put('/:email', verificarToken, (req, res) =>{
const {error, value} = schema.validate({nombre: req.body.nombre});
/* solo validamos el nombre, por que en actucalizarUsuario estamos actualizando 
el nombre y la contraseña */
    if(!error){
        let resultado = actualizarUsuario(req.params.email, req.body);
        resultado.then(valor => {
        res.json({
          nombre: valor.nombre,
          email:  valor.email 
        }) 
        }).catch(err => {
            res.status(400).json({
                 err
            })
        })
    }else{
        res.status(400).json({
            error
        }) 
   }
})

ruta.delete('/:email', verificarToken, (req, res) => {
    let resultado = desactivarUsuario(req.params.email);
    resultado.then(valor => {
        res.json({
          nombre:  valor.nombre,
          email:  valor.email
        })
    }).catch(err => {
        res.status(400).json({
            err
    })
    })
})

//(A)Post
/* el body es lo que recibimos dentro del ApiRest como parametro desde el
cliente, que puede ser una aplicacion mobile o web */
async function crearUsuario(body){
    let usuario = new Usuario({
        email      :body.email,
        nombre     :body.nombre,
        password   :bcrypt.hashSync(body.password, 10)
        /* hashSync lo hace de forma directa sin necesidad de utilizar alguna promesa. 
        Esta recibe dos parametros y el salto que en este caso es 10 */
        /* hasta acá tenemos los tres datos requeridos */
    });
    return await usuario.save();/*nos devuelve una promesa y esa promesa
    la vamos a trabajar en el metodo POST*/
}

async function listarUsuario(){
let usuarios = await Usuario.find({"estado": true})
.select({nombre:1, email:1});//con esto evitamos que se muestre informacion sencible
return usuarios;
}

//(B)PUT
async function actualizarUsuario(email, body){
    /* en este caso no usaremos new por que vamos a consultar la base 
    de datos y al mismo tiempo realizaremos la actualizacion */
let usuario = await Usuario.findOneAndUpdate({"email": email}, {
    $set:  {
        nombre: body.nombre,
        password: body.password
    } 
}, {new: true});
return usuario;
}

/* no se acostumbra a eliminar datos salvo algunas circunstancias,
lo que normalmente se hace es desactivar los datos */

async function desactivarUsuario(email){//no recibimos el body ya que solo actualizaremos por el email
let usuario = await Usuario.findOneAndUpdate({"email": email}, {
   $set: {
       estado: false
   } 
}, {new: true});
return usuario;
}

module.exports = ruta;