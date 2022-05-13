const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async(base = 5, listar,hasta=10) => {   //funcion para ver si algo sale bien o mal (async y al final el return)
    try{
       
        
        let salida= '';
    
        for (let i = 1; i <= hasta; i++) {
                                                    
            salida += `${base} x ${i} = ${base * i }\n`;           //tabla de multiplicar con metodo for      \n=salto de linea
        }
        

        if(listar==true){
            console.log(colors.cyan('============'));
            console.log(colors.cyan('Tabla del:', base));
            console.log(colors.cyan('============'));
            console.log(colors.rainbow(salida));
        }
         
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida,);      // metodo para crear archivos 
        
        return`tabla-${base}.txt`;

    }catch(err) {
        throw err;
    }
       
    
    }


   



module.exports = {
    crearArchivo
}