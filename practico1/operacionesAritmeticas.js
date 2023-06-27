/* PARTE 2: COMANDOS BÁSICOS
3. Operadores aritméticos:
a. Crea cuatro variables que contengan valores numéricos.
*/
let num1 = 2;
let num2 = 2;
let num3 = 10;
let num4 = 21;

/*b. Suma las dos primeras variables y guarda el resultado en otra variable.*/
let suma = (num1 + num2);

/*c. Resta la cuarta variable de la tercera y almacena el resultado en otra
variable.*/
let resta = (num4 - num3);

/*d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el
resultado en una variable llamada resultadoFinal. El producto debe ser
44. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.*/
let multiplicacion = (suma * resta);
let resultadoFinal = multiplicacion;

/*e. Escribe un cálculo que verifique si resultadoFinal es un número par.
Almacene el resultado en una variable llamada esPar.*/
let esPar = resultadoFinal % 2 === 0;

/*f. Imprima por consola un mensaje con el siguiente formato:
“Mis variables iniciales fueron: [var1], [var2], [var3] y [var4]. La
respuesta a verificar si el resultado final es par es: [esPar]”*/
console.log("Mis variables iniciales fueron: %i, %i, %i, %i. La respuesta a verificar si el resultado final es par es: "+esPar, num1, num2, num3, num4);


/*g. Deberá guardar este programa en un archivo llamado
operacionesAritmeticas.js*/