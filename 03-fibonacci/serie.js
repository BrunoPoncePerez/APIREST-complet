const fs = require('fs');
const { resolve } = require('path');

//CREAMOS UN MODULO
let crearSerie = (cantidad) => {

  return new Promise ((resolve, reject)=> {

  

    let fibo1 = 1;
    let fibo2 = 1;
    let serie = '';

    serie += `${fibo1}\n`;

    for(i = 2; i <= cantidad; i++){
      serie += `${fibo2}\n`;
      fibo2 = fibo1 + fibo2;
      fibo1 = fibo2 - fibo1; 
    }


    fs.writeFile('fibonacci.txt', serie, (err)=>{
        if(err) /* throw err */
        reject ('Error al crear el archivo');
        else
        resolve ('El archivo fue creado con exito...');
        //console.log('El archivo fue creado con exito...')
    })
  })
}

/* entonces nos quedaria usar este archivo en app.js */

//creamos la exportacion del modulo

module.exports = {
  crearSerie
}
