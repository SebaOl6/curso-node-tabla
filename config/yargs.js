const { describe, boolean } = require('yargs');

const argv=require('yargs')
            .option('b',{
                alias:'base',
                type:'number',
                demandOption:true,
                describe:'Base de la tabla de multiplicar'
            })
            .option('l',{
                alias:'listar',                               //yargs para uso de comandos
                type:'boolean',
                default: false,
                describe:'Muestra la tabla en consola'
            })
            .option('h',{
                alias:'hasta',
                type:'number',
                default:10,
                describe:'Numero hasta donde llega la tabla'
            })
            .check((argv,options) => {
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero'
                }
                return true;
            })
            .argv;

module.exports= argv;