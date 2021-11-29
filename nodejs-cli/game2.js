const prompt = require('prompt-sync')({ sigint: true }); 
console.log('************************');
console.log(`El arreglo: [1,2,3,4,5]`);
console.log('************************');
console.log('1) Duplicar\n2) Imprimir\n3) Sumar 2\n4) Cerrar\n');

const arr = [1, 2, 3, 4, 5];

while (true) {
    operacion = prompt('Que transformación deseas realizar: ');
    
    let respuesta = '';
    let opLabel = '';

    if(operacion == 1){
        //duplicar
        opLabel = 'Duplicar: ';
        respuesta = arr.map(n => n * 2);
    }
    if (operacion == 2) {
        // impimir
        opLabel = 'Imprimir: ';
        respuesta = arr;
    }
    if (operacion == 3) {
        // sumar 2
        opLabel = 'Sumar 2: ';
        respuesta = arr.map(n => n + 2);
    }
    if (operacion == 4) {
        // cerrar
        console.clear();
        setTimeout(() => {
            console.log('    ----------------------\n    | Programa terminado |\n    ----------------------');
        }, 500);
        break; 
                
    }
    console.log(opLabel + respuesta+'\n');
}


