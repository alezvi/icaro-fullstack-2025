console.log('hola soy contacto.js');

// bloque la carga de la pagina para mostrar el mensaje
// lo unico que puede hacer el usuario es clickear "Ok"
console.log('Bienvenido!');

// Creo la variable "nombre" para conservar el dato ingresado por el usuario
// que obtenemos pidiendole a traves de la funcion "prompt()"
// let nombre = prompt('Ingrese su nombre');

let nombre = process.argv[2];

console.log('El usuario ingreso el nombre: ' + nombre);
