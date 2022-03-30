const express = require('express');
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario_model');
//const Joi = require('@hapi/joi');
const  ruta = express.Router();

/* usaremos otro metodo para que compare la contraseña que está viniendo
del lado del cliente que puede ser una app mobile o web y que lo compare con
los datos que tenemos en la base de datos  */

module.exports = ruta; 

ruta.post('/', (req, res) =>{
    Usuario.findOne({email: req.body.email})
    .then(datos => {
       if(datos){
           /* creamos una constante para que nos compare la contraseña puesta por 
           el cliente con la que tenemos en la BD */
           const passwordValido = bcrypt.compareSync(req.body.password, datos.password);
        if(!passwordValido){
           return res.status(400).json({
               error: 'ok',
               msj: 'usuario o contraseña incorrecta'
           } )
        }
           const jwToken = jwt.sign({
            usuario: {_id: datos._id, nombre: datos.nombre, email: datos.email}
          }, config.get('configToken.SEED'), { expiresIn: config.get('configToken.timeExpiration')});
           //jwt.sign({_id: datos._id, nombre: datos.nombre, email: datos.email}, 'password')
           //res.send(jwToken);
           res.json({
               usuario: {
                   _id: datos._id,
                   nombre: datos.nombre,
                   email: datos.email
               },
               jwToken
           })
       }else{
           res.status(400).json({
               error:'ok',
               msj: 'usuario o contraseña incorrecta'
           })
       }
    }).catch(err =>{
        res.status(400).json({
            error: 'ok',
            msj: 'error en el servicio' + err
        })
    })

}) 