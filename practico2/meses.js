/*2. Escriba un programa que solicite al usuario ingresar un número entero del 1 al
12 representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es
marzo, etc. Deberá guardar esta información en alguna de las estructuras ya
vistas, es decir, 1 = enero, 2 = febrero, 3 = marzo, etc para luego ser utilizada en
el texto a imprimir. Su programa deberá ser guardado en un archivo meses.js y
consistirá de imprimir por consola la cantidad de días que tiene el mes
ingresado bajo el siguiente formato:
"La cantidad de dias del mes de [mes] es [cantidadDeDias]"
Por ejemplo: si el número ingresado es 1, su programa imprimirá “La cantidad
de dias del mes de enero es 31”. */
const readlineSync = require("readline-sync");
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre","noviembre", "diciembre"];
const cantidadDeDias = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];
const numeroMes = readlineSync.question("Ingrese numero de mes(del 1 al 12): ");
if (numeroMes >= 1 && numeroMes <= 12) {
    const mes = meses[numeroMes - 1];
    const cantidadDiasMes = cantidadDeDias [numeroMes - 1];
    console.log("La cantidad de dias del mes "+ mes + " es " + cantidadDiasMes);
} else {
    console.log("No existe Mes");

}