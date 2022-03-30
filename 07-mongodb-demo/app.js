const mongoose = require('mongoose');

/* probamos la conexion. A la funcion connect le enviamos la ruta FQDN para 
conectarnos a la base de datos*/
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>console.log('conectado a MongoDB...'))
.catch(err=> console.log('no se pudo conectar con mogdb', err));


//creamos un schema
const cursoSchema = new mongoose.Schema({
    nombre    : String,
    autor     : String,
    etiquetas : [String],
    fecha     :{type: Date, default:Date.now},
    publicado : Boolean
});

//creamos el modelo para el schema
const curso = mongoose.model('curso', cursoSchema);

async function crearCurso(){
    const curSo = new curso({
        nombre: 'Angular para principiantes',
        autor: 'Sr. R',
        etiquetas: ['desarrollo web', 'Framework'],
        publicado: true
    })
    const resultado = await curSo.save();
    console.log(resultado);
}
//crearCurso();

//CONSULTAR DOCUMENTOS
async function listarCursos(){

    /* definimos una constante que recibira como respuesta del modelo, a traves
    de un atributo find que lista todos los elementos */
    //const cursos = await curso
    //.find({publicado: true})//nos trae todos los publicados
    //.limit(10)//le ponemos un limite
    //.sort({autor: -1})//1 nos muestra de forma ascendente y -1 desendente
    //.select({nombre:1, etiquetas:1})
    //console.log(cursos);
   
    //********OPERADORES DE COMPARACION***********
    //(eq)   (equal, igual)
    //(ne)   (not equal, no igual)
    //(gt)   (grater than, mayor que)
    //(gte)  (greater than or equal to, mayor o igual que)
    //(lt)   (less than, menor que)
    //(lte)  (less than or equal to, menor o igual que)
    //(in)   
    //(min)  (not in)
    //or 
    //and

    //PAGINACION
    const numeroPage = 2;
    const sizePage = 10;

    const cursos = await curso
    //.find({precio: {$gte:10, $lte:30}})muestrame los cursos que esten entre 10 y 30 de precio
    //.find({precio: {$in: [10, 15, 25]}})precios especificos
    //.find()
    //.and([{autor:'Bruno'}, {publicado: true}])
    // EMPIECE CON LA PALABRA Bru
    //.find({ autor: /^Bru/})
    //CUANDO TERMINA EN UNA PALABRA O EXPRESION
    //.find({autor: /no$/})
    //CUANDO UN CAMPO TIENE UN CONTENIDO ESPECIFICO
    .find({autor: /.*no.*/})
    .skip((numeroPage-1)*sizePage)
    //.limit(10)
    .limit(sizePage)
    .sort({autor: -1})
    //.select({nombre:1, etiquetas:1})
    .select({autor: 1, nombre:1, etiquetas:1})
    console.log(cursos);
}

//listarCursos();

/* **********ACTUALIZAR*********** */

async function actualizarCurso(id){
/* const cURSO = await curso.findById(id);
if(!cURSO){
    console.log('El curso no existe');
    return;
    }
    cURSO.publicado = false;
    cURSO.autor = "Bruno Ponce"; */

    //otra forma
    /*  
    curso.set({
        publicado: false,
        autor:'Bruno Ponce'
    })
*/

    /* const resultado = await cURSO.save();
    console.log(resultado); */

    //actualizar 1
    /* const resultado = await curso.updateMany({_id: id}, {
        $set: {
            autor: 'Bruno',
            publicado: true
        }
    })
    console.log(resultado); */

    //actualizar 2
    const resultado = await curso.findByIdAndUpdate(id, {
        $set: {
            autor: 'DEV RUMPELS',
            publicado: false
        }
    })
    console.log(resultado)
}

//actualizarCurso('62407b98cddf9e65bdb7af03');

/* CONSOLA: nos trae el objeto reemplazamos, mas no el actual
{
  _id: new ObjectId("62407b98cddf9e65bdb7af03"),
  nombre: 'Node JS desde CERO',
  autor: 'RUMPELSTILTSKIN',
  etiquetas: [ 'desarrollo web', 'Back end' ],
  publicado: true,
  fecha: 2022-03-27T14:58:32.857Z,
  __v: 0
}
*/

//ELIMINAR DOCUMENTOS 

async function eliminarDocumento(id){
    const result = await curso.deleteOne({_id:id});
    //const resultado = await curso.findByIdAndDelete(id);
    console.log(result);
}

eliminarDocumento('62407a816852c2319f98f9d7');