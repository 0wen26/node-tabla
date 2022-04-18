const { crearArchivoTabla } = require('./helpers/multiplicar');
const colors = require('colors');
const  argv  = require('./config/yargs');

// imprimir tabla de multiplicar del 5
console.clear();
console.log(argv);

crearArchivoTabla(argv.b, argv.l,argv.h)
    .then(archivo => console.log(`Archivo creado: ${archivo.rainbow}`))
   .catch(e => console.log(e));
    