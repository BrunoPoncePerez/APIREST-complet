//global.test = "Bienvenido Señor R";

/* Creamos un modulo llamado DATOS y asumimos que en este modulo hacemos
uso de datos de una url, para poder cargar requerimientos HTTP que yo
pueda enviar y se pueda recibir*/

/*var url = "http://bruno.w/datos";

function dato(mensaje){
     esto sucede cuando enviamos un HTTP request 
        console.log(mensaje);
}
*/

/*
function leerDatos(){
     esta funcion al no ser exportada, es una funcion privada que
    solo será utilizada dentro de este modulo 
}
*/

/* para poder exportar algo y hacer la diferenciacion de lo que 
veiamos en los objetos globales, yo puedo especificar que cosa voy a 
exportar de este modulo, puedo exportar una funcion o todas las funciones
que pueda tener este modulo o simplemente un solo dato y al momento de
hacer la exportacion lo trabajamos de la siguiente forma...*/

//module.exports.log = dato;
/* log vendria a ser como un alias del cual va a depender cuando lo exportamos
en otros archivos. Como vemos dentro del modulo, la funcion dato, existe
como dato, pero es exportado como log*/
//module.exports.url = url;


//console.log(module);

/* importamos este valor de datos al archivo app.js */

/* 
Module {
  id: '.',
  path: 'C:\\Users\\Ponce\\Desktop\\nodeJs\\modulos',
  exports: { log: [Function: dato] }, ==> VEMOS QUE ESTÁ EXPORTANDO LA FUNCION LOG!!! pero en realidad hace referencia  a la funcion dato
  filename: 'C:\\Users\\Ponce\\Desktop\\nodeJs\\modulos\\datos.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\Ponce\\Desktop\\nodeJs\\modulos\\node_modules',
    'C:\\Users\\Ponce\\Desktop\\nodeJs\\node_modules',
    'C:\\Users\\Ponce\\Desktop\\node_modules',
    'C:\\Users\\Ponce\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}
*/

/**************************************************************************/

//CARGAR UN MODULO (1)

//var url = "http://bruno.w/datos";

//function dato(mensaje){
    /* esto sucede cuando enviamos un HTTP request */
        //console.log(mensaje);
//}
//module.exports.log = dato;
/* al tener un solo metodo de exportacion podemos quitarlo y exportar 
directamente la funcion */
//module.exports = dato;

//console.log(module);


