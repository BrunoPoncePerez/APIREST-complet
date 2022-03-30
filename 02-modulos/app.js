
//console.log('Señor R');

/* hemos echo referencia a un objeto llamado CONSOLE que tiene un metodo 
llamado LOG, que nos permite escribir algo como argumento.
El objeto CONSOLE es accesible desde cualquier lugar, es lo que se conoce 
como un OBJETO GLOBAL, que forma parte de un ambito global de un programa 
en NODE. Existen muchos metodos y funciones que forman parte de este ambito
global. Por ejemplo... */

//funciones para controlar tema de temporizadores:

 //setTimeout();
 //clearTimeout();
 //setInterval();
 //clearInterval();

/* estas son funciones de ambito global, las puedo usar en cualquiero 
programa o archivo que esté trabajando con NODE.

Cuando nosotros trabajamos con JS en el navegados, estos objetos forman 
parte de la ventana, cuando decimos ventana nos referimos al objeto WINDOW,
pero en este caso NODE no se ejecuta en un navegador, NODE se ejecuta en un 
proceso dentro del sistema operativo y este proceso almacena todo el proceso
de ejecucion que podemos encontrar dentro de estas definiciones globales y para
ello tenemos un objeto que reemplaza al objeto de WINDOW dentro de NODE, que
seria el objeto de GLOBAL...
*/

//global.console.log('Sr. R desde el OG')
//global.setTimeout();

/* o podemos usar el objeto THIS que hace referencia al mismo objeto global*/

//hacemos referencia al archivo datos.js

/* usamos require que forma parte del ambito global */

/* require('./datos');
console.log(global.test); */

/* el tema es que estos datos globales se pueden volver a modificar
 */

/* require('./datos');
global.test = "Bienvenido Rumpelstiltskin";
console.log(global.test); */

/* usar objetos globales es una mala practica, para ello existen los
modulos en NODE que nos permiten trabajar de una mejor manera */

/**************************************************************************/

//CREANDO UN MODULO

//console.log(module);

/* 
Module { ==> tenemos un objeto module
  id: '.',
  path: 'C:\\Users\\Ponce\\Desktop\\nodeJs\\modulos',
  exports: {},
  filename: 'C:\\Users\\Ponce\\Desktop\\nodeJs\\modulos\\app.js',
  loaded: false,
  children: [ ==> modulo hijo que es un segundo modulo
    Module {
      id: 'C:\\Users\\Ponce\\Desktop\\nodeJs\\modulos\\datos.js',
      path: 'C:\\Users\\Ponce\\Desktop\\nodeJs\\modulos',
      exports: {},
      filename: 'C:\\Users\\Ponce\\Desktop\\nodeJs\\modulos\\datos.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  ],
  paths: [
    'C:\\Users\\Ponce\\Desktop\\nodeJs\\modulos\\node_modules',
    'C:\\Users\\Ponce\\Desktop\\nodeJs\\node_modules',
    'C:\\Users\\Ponce\\Desktop\\node_modules',
    'C:\\Users\\Ponce\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}

En NODEJS un archivo separado se convierte en un módulo cuando lo utilizo 
dentro de un archivo
*/

/**************************************************************************/

//EXPORTANDO UN MODULO


/* creamos una variable y a esta variable le cargamos el modulo que 
creamos en la carpeta datos.js*/
//var datos = require('./datos');


/* const dato = require('./datos'); *///usar siempre const ya que la variable se puede modificar
/* este modulo tiene un metodo llamado datos pero lo exportamos con el nombre
de log, es decir que es el alias con el que se esta exportando */
//datos.log('Bienvenido Señor R');
//dato('Bienvenido Señor R');

//console.log(module);

/**************************************************************************/

/* dos objetos globales que nos muestran informacion sobre el manejo de 
archivos.. */

//console.log(__filename);
//C:\Users\Ponce\Desktop\nodeJs\modulos\app.js
/* tenemos informacion del archivo incluyendo toda su ruta */

//console.log(__dirname);
//C:\Users\Ponce\Desktop\nodeJs\modulos
/* tenemos informacion de la carpeta incluyendo toda su ruta */

//CONSOLA
/* 
C:\Users\Ponce\Desktop\nodeJs\modulos\app.js
C:\Users\Ponce\Desktop\nodeJs\modulos
*/

//METODO PATH proporciona utilidades para trabajar con rutas de archivos y directorios

//const path = require('path');

/* el metodo parse me permite retornar como objeto y poder tener 
en representacion de propiedades elementos que forman parte del PATH o de 
la ruta, ya sea del directorio o del archivo  */

//const objPath = path.parse(__filename);

/* console.log(objPath); */

//CONSOLA:

/* 
{
  root: 'C:\\', ==> DIRECTORIO RAIZ
  dir: 'C:\\Users\\Ponce\\Desktop\\nodeJs\\modulos', ==>DIRECCION
  base: 'app.js', ==>NOMBRE BASE(extension y nombre del archivo)
  ext: '.js', ==> EXTENSION
  name: 'app' ==> NOMBRE
}
Son propiedades del archivo que el modulo PATH a desglosado o convertido
en un objeto y por lo tanto nosotros podemos trabajar con cualquiera
de estos valores... ejemplo...
*/

//console.log(objPath.base);

//CONSOLA:

//C:\Users\Ponce\Desktop\nodeJs\modulos>node app.js
//app.js

/**************************************************************************/


//MODULO OS me permite obtener informacion del sistema operativo

/* 
const os = require('os');

var memoriaLibre = os.freemem();
var memoriaTotal = os.totalmem();

console.log(`Memoria libre: ${memoriaLibre}`);
console.log(`Memoria total: ${memoriaTotal}`);
*/

//CONSOLA

//Memoria libre: 10076913664
//Memoria total: 17001664512


/**************************************************************************/


//MODULO FILE SYSTEM podemos manejar carpetas o archivos desde NODE

/* acá no encontramos con un detalle a diferencia de los metodos 
anteriores. Ejemplo, si queremos listar el contenido de un directorio
 debemos utilizar el metodo readdir.
 Pero vemos que hay un readdir sincrono y un asincrono, si regresamos un poco
 a callbacks son funciones que se ejecutan dentro de otra o en segunndo
 plano.
 Cuando realizamos estas aplicaciones que se ejecutan dentro del navegador
 tenemos que ver si estas seran asincrona o sincronas, por ejemplo si tenemos
 una carpeta con muchos archivos y a node le va a llevar cierto tiempo
 ejecutar esos archivos, lo recomendable seria utilizar la funcion callback
  del tipo asincrono, ya que con este metodo yo puedo saber
  si la tarea se termina de ejecutar en un tiempo determinado, ya que si yo 
  utilizo la funcion sincrona lo que hará es bloquear las tareas*/


  //const fs = require('fs');

  //const archivos = fs.readdirSync('./');

  //console.log(archivos);

  //CONSOLA

  //[ 'app.js', 'datos.js' ] ==> ARCHIVOS DE ESTA CARPETA RAIZ

  /* nos carga rapido por que son dos archivos, pero depende del escenario
  en que nosotros la usemos. si hay una carpeta con muchos archivos a
  NODE le va a llevar un poco más de tiempo  leer eso y es ahi donde usamos
  las funcion asincrona*/

  /* fs.readdir('./', function(err, files){
      if(err) console.log('Error', err);
      else console.log('resultado', files);
  }); */

  //CONSOLA

  //resultado [ 'app.js', 'datos.js' ]


/**************************************************************************/


//MODULO EVENTS

/* Este modulo genera una clase, para lo cual tenemos que crear
una instancia para poder trabajar con sus funciones o la funcionalidad misma
de los eventos. La clase se llama EventEmitter y tenemos metodos que podemos
utilizar en la documentacion de NODE.

Cuando nos referimos a eventos, decimos que son acciones que se van a 
dar ante algo que se pueda presentar en un momento determinado. Por ejemplo, 
en una aplicacion web un evento podria ser cuando demos click en un
boton, cuando movamos el mouse sobre un enlace, scroll, escribir... y se denominan
eventos por que yo puedo programarles respuestas a esas acciones. 
Cuando creamos un evento (accion) tambien tenemos que pasarle automaticamente
un Listener o escucha...

creamos o emitimos un evento con (  emitter.emit(eventName[...args])  )
el evento emit tiene un eventName que es el nombre del evento que vamos a tener
que registrar y tiene una parte opcional como argumentos que podemos enviar
Para emitir el evento tenemos que registrarlo y para eso utilizamos el metodo
ON...
 */

//declaramos la clase
const eventEmitter = require('events');

/* para trabajar con esta clase debemos crear una instancia, que es un
objeto de la misma...
por ejemplo: 
Creamos una clase PERSONA y a partir de esta podemos crear varios objetos
PERSONA, un objeto con el nombre de DAVID, otro con el nombre de MARK y asi...
cuando hablamos de propiedades o metodos, quiere decir que es una estructura
 de un objeto que a su vez es una instancia de una clase, que vendria a ser 
 una plantilla para poder crear objetos */

 //creamos un objeto

 const emitter = new eventEmitter(); //new por que es un objeto que vamos a instanciar

//registramos el listener

emitter.on('mensajeLoger', (arg) =>console.log('Hola de nuevo Sr. R...', arg))

//registramos el evento

emitter.emit('mensajeLoger');

/* haremos la prueba con los argumentos que si bien son opcionales, son muy
utilizados.
Se pueden mandar eventos de diferente forma, ya sea en arreglos o por separado. 
mandar como objeto es una buena practica cuando se quieren enviar
varios datos al mismo tiempo*/

emitter.emit('mensajeLoger', { id: 1, url: 'http://Sr_R.com' });
 

/**************************************************************************/

//MODULO HTTP (1)

/*Es el modulo mas utilizado para crear nuestras servidores web, nos permite
crear API REST que nos permiten crear comunicaciones con aplicaciones. cuando
entramos a la documentacion, vemos que tenemos una cierta cantidad de clases
de las cuales derivan sus respectivas funciones. utilizaremos la clase HTTP.SERVER que a su 
vez hereda una clase llamada NET.SERVER que nos permite usar el protoclo
TCP IPC para poder escuchar conecciones a treves de ciertos puertos que nosotros
mismos asignamos por medio del conectionListener
  */

//const http = require('http');

//creamos el servidor
//const server = http.createServer();

//se liste a travez de un puerto

//server.listen(3000);
//console.log('servidor escuchando en el puerto 3000...');

//CONSOLA

//servidor escuchando en el puerto 3000...

/* vemos que el proceso no termina porque el eventlistener queda a la escucha,
habre un puerto 3000 y se queda esperando peticiones. cuando abrimos en el
navegador = localhost:3000, espera una conexion */

/* const http = require('http');
const server = http.createServer();

//programar acciones

server.on('connection', (puerto)=>{
    console.log('nueva conexion...');
})

server.listen(3000);
console.log('servidor escuchando en el puerto 3000...'); */

//CONSOLA

//nueva conexion...

/* al momento de colocar localhost:3000 en el navegador, slata en la 
consola... nueva conexion... que quiere decir que nos creo la conexion.
El servidor queda esperando peticiones en el puerto 3000, en este caso 
como todavia no hemos porgramado la respuesta ante ese tipo de conexiones
 */


//MODULO HTTP (2)
/* cuando programamos un evendo generamos una respuesta que se da por el lado
del servidor, haremos que la respuesta sea enviada tambien al cliente
 que es el navegador web, para ello haremos unos cambios en nuestro codigo*/

const http = require('http');
const server = http.createServer((req, res)=>{
    /* creamos una request que seria la ruta raiz */
    if(req.url === '/'){
        res.write('Bienvenido Rumpelstiltskin');
        res.end();
    }
    if(req.url === '/api/productos'){
        res.write(JSON.stringify(['Sr.R', 'RUMPELSTILTSKIN', 'Virgil']));
        res.end();
    }
});

//programar acciones

/* server.on('connection', (puerto)=>{
    console.log('nueva conexion...');
}) */

server.listen(3000);
console.log('servidor escuchando en el puerto 3000...');


