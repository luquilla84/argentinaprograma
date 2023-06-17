/*4. Escriba un programa que solicite al usuario ingresar un número del 1 al 7
representando un día de la semana. Guardar el programa en un archivo
diasDeLaSemana.js. La semana comienza el lunes y termina el domingo.
- Si el número es 1, muestra por consola el mensaje: "Hoy es lunes".
- Si el número es 2, muestra por consola el mensaje: "Hoy es martes".
- Si el número es 3, muestra por consola el mensaje: "Hoy es miércoles".
- Y así sucesivamente ...
- Para cualquier otro número, muestra por consola el mensaje: "Número
inválido".
NOTA: utilizar la sentencia switch-case. */
let readlineSync = require('readline-sync');
let numero = readlineSync.question("Ingrese un número del 1 al 7: ");
numero = Number(numero);
switch (numero) {
    case 1:
        console.log("Hoy es Lunes");
        break;
    case 2:
        console.log("Hoy es Martes");
         break;
    case 3:
        console.log("Hoy es Miercoles");
        break;
    case 4:
        console.log("Hoy es Jueves");
        break;
    case 5:
        console.log("Hoy es Viernes");
        break;
    case 6:
        console.log("Hoy es Sabado");
        break;
    case 7:
        console.log("Hoy es Domingo");
        break;
    default:
        console.log("Número inválido");
}

