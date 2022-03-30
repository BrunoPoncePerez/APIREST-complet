
function saludar(nombre){
    console.log( 'Hola ' + nombre);
}
saludar('Rumpelstiltskin');

//variables en ES5

var nombre = "Bruno";
console.log(nombre);

nombre = "Sr.R";
console.log(nombre);

//Variables en ES6

const nombre6 = "Rumpelstiltskin";
console.log(nombre6);

let edad = 24;
console.log(edad);

edad = 25;
console.log(edad);

//FUNCIONES FLECHA

//funciones en ES5:
 const years = [1997, 2000, 2009, 2015, 2016];

 var edad5 = years.map(function(el){
     return 2022 - el });
     console.log(edad5);

//funciones flecha ES6 
let edad6 = years.map(el => 2022 - el);
console.log(edad6);



 //FUNCIONES CALLBACK

 /* es parte de la programacion funcional. La funcion principal de una
 funcion CALLBACK es que permite recibir como parametro otra funcion 
 u otro metodo*/

 function mensaje(CALLBACK){
     console.log('mensaje antes de la llamada callback');
     CALLBACK();
 }
function saludo(){
    console.log('saludo despues de la llamada al callback');
}

mensaje(saludo);

/* primero hace la llamada a la consola de la funcion mensaje y luego
llama a la siguiente funcion. OJO solo estamos llamando a mensaje, pero
le pusimos como parametro otra funcion */

function sumar(num1, num2, callback){
   let resultado = num1 + num2;
   callback(resultado); 
}

function resultado(res){
    console.log(res);
}
sumar(5, 8, resultado);

/* uso comun de la funciones callback es cuando hacemos uso de la
funcion setTimeout en javascript */

setTimeout(function(){
    console.log('Después de 3 segundos aparezco')
}, 3000);

//ES6

setTimeout(()=> console.log('Después de 3 segundos aparezco'), 3000);

//PROMESAS
/* JS no es un lenguaje multihilo, en este caso solo tiene un hilo para
trabajar diferentes llamadas, para eso se crearon las llamadas callback
pero el detalle es que cuando las llamamos de forma anidadas, puedesn ir
creaciendo y creciendo hasta hacerce mas complejas y dificil de mantener
y esto se corrige con las PROMISE o promesas.

las promesas tienen 4 estados, las cuales se utilizan más es cuando la 
accion de la promesa se lleva a cabo con exito o FULLFILLED o REJECTED
cuando la accion de la promesa a tenido un fallo...

FULLFILLED -> la acción relacionada a la promesa se llevó a cabo con exito
REJECTED -> la acción relacionada a la promesa ha tenido un fallo
PENDIND ->aún no se ha determinado si la promesa fue FULLFILLED o REJECTED
SETTELD -> ya se ha determinado si la promesa fue FULLFILLED o REJECTED

estos son los cuatro estados por los que pasa una promesa.
*/

const mensajes = new Promise((resolve, reject) =>{
setTimeout(()=> {
    if(false  /* true */ )
    resolve('Después de 3 segundos aparezco')
    else
    reject('Ups! Hubo un error Sr. R')
}, 3000);
});

mensajes 
   .then(msj => {
       console.log(msj);
   })
   .catch(error => {
       console.log(error);
   })


//FUNCIONES AZYNC AWAIT

/*una funcion azincrona que se ejecuta en background, await = espera.
 es decir que es una funcion asincrona pero con espera. En este caso todas
 las funciones de tipo AZYNC devuelven un elemento del tipo promesa.
 
 Cuando la funcion AZYNC devuelve una promesa, esta promesa debe ser
 devuelta con un valor de resuelto o con su valor de rechazo y ambos deben
  manejados por la funcion asincrona, pero con una variacion...

  cada vez que usemos un async, tendremos un await o varios, nunca se utiliza
 una funcion aync que no tenga una funcion await dentro...
  */


  //const mensajes = new Promise((resolve, reject) =>{
  function mensaje(){  
      return new Promise((resolve, reject) =>{
        setTimeout(()=> {
          if(false /* true o false */)
              resolve('Después de 3 segundos aparezco')
          else
              reject('Ups! Hubo un error Sr. R')
          }, 3000);
      });
    }

    async function llamadaAsync(){
        console.log('llamando...')
        const resultado = await mensaje();
        //console.log(resultado);
        return resultado;
    }
    llamadaAsync().then(x => console.log(x)).catch(e => console.log(e));

    
/* no olvidemos que la funcion azyncrona devuelve una promesa y esa
promesa se ejecuta bien cuando no tenemos un error, pero al tener un 
rechazo o error, tenemos que controlarlo, con las promesas lo haciamos
a travez de cath */


    
//¿Qué es un Módulo en NODE?

/*NODE es un conjunto de librerias desarrolladas en JS que tiene un CORE
y este CORE permite hacer ciertas funcionalidades dentro de nuestras aplicaciones
donde podemos interactuar con el SISTEMA OPERATIVO (OS) por ejemplo.
Este CORE me permite a su vez trabajar con módulos que sean propios de
NODE o módulos que son creados por terceros.

Tenemos el módulo para trabajar con el OS, para saber cual es el sistema
operativo que se está ejecutando el node, cuanto de recursos tiene este sistema
operativo, cual es su version u otro dato adicional...

Tambien tenemos un módulo para el FL o FILE SISTEM, para trabajar con el
sistema de archivos, para poder moverme en las carpetas, crear archivos, poder
escribir en los archivos...

Tenemos el manejo de EVENTOS, ya que siempre es necesario contralar 
estos eventos en nuestras aplicaciones. tenemos los LOOP's que nos ayudan 
a ir registrando eventos de acuerdo a las acciones que podamos tener en 
nuestra aplicacion...

Y un módulo del tipo HTTP que nos permite implementar peticiones del tipo
HTTP y que NODE las pueda trabajar sin ningun problema, atender y poder 
crear nuestras API's...*/


//OBJETOS GLOBALES dentro de una aplicación con NODE

/* Utilizamos muchos de estos OG que hacen que nuestra aplicacion
sea dificil de mantener, por eso existen los módulos que resuelven estos
problemas... Veamos la carpeta de modulos */
