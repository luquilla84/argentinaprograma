/*Escribir un programa que:
a. Defina una variable nombre.
b. Guarde en la variable nombre tu nombre real.*/
let nombre = "Lucas";

/*c. Defina y asigne, en un mismo paso, la variable apellido. El valor a
asignar deberá ser tu apellido real.*/
let apellido = "Brocanelli";

/*d. Repita el paso anterior, pero esta vez definiendo la variable edad y
asignandole tu edad real.*/
let edad = "39";

/*e. Por último, imprime por consola un mensaje que respete el siguiente
formato:
"Hola, [nombre] [apellido]. Tienes [edad] años."
Este programa deberá ser guardado en un archivo llamado
miNombreCompleto.js*/

/*console.log("Hola, "+nombre," "+apellido,".Tienes "+edad,"años." );*/

console.log("Hola %s %s. Tienes %i años.", nombre, apellido, edad);