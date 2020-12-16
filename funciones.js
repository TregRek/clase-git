function concatenar (texto1, texto2) {
    console.log(texto1 + ' ' + texto2);
}

function sumar (num1, num2) {
    console.log(num1+num2);
}

module.exports = concatenar;

let multiplicar = function multiplicar (num1,num2){
    if(num1 == 0 || num2 == 0){
        return 0;
    }else{
        return num1 * num2;
    }
} 

function tonteando (){
    console.log("simplemente generando errores");
}

module.exports = tonteando;
