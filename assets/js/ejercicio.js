/*1. Programa que pida dos numeros y nos diga cual es el mayor, el menor y si son iguales
2. PLUS: Si los numeros no son un número o son menores o iguales a cero, nos vuelva a pedir*/

const numero1 = parseInt(prompt('Ingresa 1 numero'));
const numero2 = parseInt(prompt('Ingresa 2 numero'));

while(numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
    
}

    if( numero1 < numero2){
    document.write(`<h1>${numero1} es el menor</h1>`);
    }
    else if ( numero1 > numero2){
    document.write(`<h1>${numero2} es el menor</h1>`);
    }

    if( numero1 > numero2){
    document.write(`<h1>${numero1} es el mayor</h1>`);
    }
    else if ( numero1 < numero2){
    document.write(`<h1>${numero2} es el mayor</h1>`);
    }

    if( numero1 == numero2){
    document.write(`<h1>${numero1} es igual a ${numero2}</h1>`);

    }
