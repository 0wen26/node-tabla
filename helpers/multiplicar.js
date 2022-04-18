
const fs = require('fs');
const colors = require('colors');



const crearArchivoTabla = async(base =5, listar = false ,hasta = 10) => {

    try {
        let salida,consola = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`);
            consola += (`${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`);

        }
        
        if(listar){
            console.log('==========================================================='.green);
            console.log('tabla del '.green , colors.blue(base));
            console.log('==========================================================='.green);
            console.log(consola);
        }         
        
        //guardar en el archivo tabla-5.txt
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;
    } catch (error) {
        console.log(error);
    }        
}
module.exports = {
    crearArchivoTabla
}