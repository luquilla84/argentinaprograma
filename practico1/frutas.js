/*5. Manejo de arreglos: Deberás crear un programa y guardarlo en el archivo
frutas.js que cumpla los siguiente requisitos:
a. Crea un arreglo vacío con el nombre de frutas.*/
let frutas = [];

/*b. Agrega cinco frutas distintas al arreglo. Puede ser mediante el uso de
variables o no.*/
frutas.push("Anana");
frutas.push("Sandia");
frutas.push("Uva");
frutas.push("Melon");
frutas.push("Kiwi");
/*console.log(frutas)*/

/*c. Deberás obtener el última fruta agregada y guardarla en la variable
ultima. Además deberás imprimir su valor por consola, respetando el
siguiente formato
“La ultima fruta agregada fue: [ultima]”*/
let ultima = frutas[frutas.length - 1];
console.log("La ultima fruta agregada fue: "+ultima);

/*d. Deberás obtener la primera fruta agregada y guardarla en la variable
primera. Además deberás imprimir su valor por consola, respetando el
siguiente formato
“La primera fruta agregada fue: [primera]” */
let primera = frutas[0];
console.log("La primer fruta agregada fue: "+primera);

