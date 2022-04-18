//yargs
const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demand: true,
        desc: 'Es la base de la tabla de multiplicar'
    })
    .check((argv,options)=> {
        if(isNaN(argv.b)){
            throw new Error('El valor introducido no es un numero');
        }
        return true;
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        desc: 'Listar las tablas de multiplicar'
    })
    .option('h',{
        alias:'hasta',
        type: 'number',
        default: 10,
        desc: 'Hasta que numero quieres la tabla'
    })
    .argv;

module.exports = argv;