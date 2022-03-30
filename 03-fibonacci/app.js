//SERIE DE FIBONACCI
// 1 1 2 3 5 8 13 21...

/* 
let fibo1 = 1;
let fibo2 = 1;
console.log(`${fibo1}`);

for(let i = 2; i <= 7; i++){
    console.log(`${fibo2}`);
    fibo2 = fibo1 + fibo2;
     fibo1 = fibo2 - fibo1; 
}
 */

/**************************************************************************/

//GUARDANDO LA SERIE EN UN ARCHIVO

/* const fs = require('fs');

let fibo1 = 1;
let fibo2 = 1;
let serie = '';

serie += `${fibo1}\n`;

for(i = 2; i <= 7; i++){
  serie += `${fibo2}\n`;
   fibo2 = fibo1 + fibo2;
   fibo1 = fibo2 - fibo1; 
}


fs.writeFile('fibonacci.txt', serie, (err)=>{
    if(err) throw err;
    console.log('El archivo fue creado con exito...')
}); */


/**************************************************************************/


//SEPARANDO EL CODIGO

/* se recomienda que el archivo principal, no tenga mucha logica dentro de su
contenido, por buena practica se recomienda llevar toda la logia hacia
otro archivo y despues solamente invocarlo. Llevamos entonces toda la logia
hacia serie.js y creamos un modulo.

una vez creado el modulo en serie.js lo exportamos....*/

const serie = require('./serie');


/* al momento de llamar la serie no me sale el metodo que hemos creado ya que
no hemos hecho la exportacion... volvemos a serie.js */

//let cantidad = 10;

/* serie.crearSerie(cantidad)
    .then(mensaje => console.log(mensaje))
    .catch(mensaje => console.log(mensaje)); */

/**************************************************************************/


//RECIBIENDO UN PARAMETRO PARA LA SERIE DESDE LA CONSOLA

/* Objeto PORCESS recibe un parametro ARGV que nos permite pasar datos
desde el comando de NODE.JS y mostrarse en el archivo requerido, es decir
podemos modificar parametros desde la consola. Un detalle es que que viene
como arreglo*/

/* let argv = process.argv;
console.log(argv); */

//CONSOLA 
/*}
nos devuelve un arreglo que contiene dos elementos:
El primer elemento es la ruta donde esta instalado NODE
El segundo elemento es la ruta del archivo que estamos ejecutando
[
'C:\\Program Files\\nodejs\\node.exe',
'C:\\Users\\Ponce\\Desktop\\nodeJs\\03-fibonacci\\app.js'
] 

//ENVIAMOS UN PARAMETRO DESDE LA CONSOLA

C:\Users\Ponce\Desktop\nodeJs\03-fibonacci>node app --serie=5
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Ponce\\Desktop\\nodeJs\\03-fibonacci\\app',
  '--serie=5' ==> ESTE TERCER PARAMETRO ES QUE QUEREMOS CAPTURAR
]

para capturar ese valor, como es un arreglo, lo capturamos por el indice

*/

/* let argv = process.argv;
let  valor = argv[2];
console.log(valor); */

//CONSOLA

/* 
C:\Users\Ponce\Desktop\nodeJs\03-fibonacci>node app --serie=5
--serie=5 
==>QUEREMOS SOLO EL 5, podemos separar (--serie=5) en dos partes
usando split y especificandole el elemento por el cual se pocederá 
ha hacer la separacion, en este caso será ('=')...
*/

/* let argv = process.argv;
let  valor = argv[2].split('=');
console.log(valor); */
//ejecutamos...

//CONSOLA
/* 
C:\Users\Ponce\Desktop\nodeJs\03-fibonacci>node app --serie=5
[ '--serie', '5' ]

Ahi tenemos lo elementos separados y apara acceder al (5), nos vasamos por el 
indice nuevamente
 */

let argv = process.argv;
let  valor = argv[2].split('=')[1];
//console.log(valor);

//CONSOLA
/* 
C:\Users\Ponce\Desktop\nodeJs\03-fibonacci>node app --serie=5
5
*/

/* ese valor lo colocamos en cantidad */

let cantidad = valor;

serie.crearSerie(cantidad)
    .then(mensaje => console.log(mensaje))
    .catch(mensaje => console.log(mensaje));


/* Ejecutamos el paramtro en la consola y luego vemos en el archivo
fibonacci.txt */

// CONSOLA

/* 
C:\Users\Ponce\Desktop\nodeJs\03-fibonacci>node app --series=100
El archivo fue creado con exito... 

y efectivamente realiza los cambios en el archivo de texto 

OJO!! puede dar un error al momento de variar la forma en la que ejecutamos
en la consola: node app --series=100, si cambiamos algo de acá nos marcará
dicho error y para otros datos se utilizan otras librerias.
*/