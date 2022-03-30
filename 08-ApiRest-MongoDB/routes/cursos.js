//(3)
const express = require('express');
const Curso = require('../models/curso_model');
const verificarToken = require('../middleware/auth');
const  ruta = express.Router();

ruta.get('/', verificarToken, (req, res) => {
   /*  res.json({
        usuario: req.usuario
    }) */
    let resultado = listarCursos();
    resultado.then( cursos => {
res.json(cursos)
    }).catch(err =>{
        res.status(400).json({
            err
        })
    })
})

ruta.post('/', verificarToken, (req, res) => {
    let body = req.body;
    let resultado = crearCurso(req);

    resultado.then(course => {
        res.json({valor: course})
    }).catch(err =>{
        res.status(400).json({err})
    })
})

ruta.put('/:id', verificarToken, (req, res) => {
    let resultado = ActualizarCurso(req.params.id, req.body);
    resultado.then(curso => {
        res.json({curso})
    }).catch(err =>{
        res.status(400).json({
            err
        })
    })
})

ruta.delete('/:id', verificarToken, (req, res) => {
    let resultado = desactivarCurso(req.params.id);
    resultado.then(curso =>{
        res.json({
            curso
        })
    }).catch( err => {
        res.status(400).json({
            err
        })
    })
})

async function crearCurso(req){
    let curso = new Curso({
        titulo: req.body.titulo,
        autor:   req.usuario._id,
        descripcion: req.body.descripcion
    });
    return await curso.save();
}

async function listarCursos(){
    let cursos = await Curso
    .find({"estado": true})
    .populate('autor', 'nombre-_id');//para evitar mostrar datos importantes solo seleccionamos lo que ncesitamos
    return cursos;
}

async function ActualizarCurso(id, body){
let curso = await Curso.findByIdAndUpdate( id, {
    $set: {
           titulo:  body.titulo,
           descripcion: body.descripcion
    }
}, {new: true});
return curso;
}

async function desactivarCurso(id){
    let curso = await Curso.findByIdAndUpdate(id, {
        $set: {
            estado: false
        }
    }, {new: true});
    return curso;
}



module.exports = ruta;