
const edad = 20;
let imprimir = '';
switch(edad) {
    case 18:
        imprimir = 'Mensaje 18'
        console.log(18);
        break;

    case 20:
        imprimir = 'Mensaje 20'
        break;

    case 50:
        imprimir = 'Mensaje 50'
        break;
    default:
        imprimir ='Este mensaje por defecto'
        break;
}

document.write(imprimir);