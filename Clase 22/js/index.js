/*
KEY WORDS / palabras reservadas

let
var
const

if 
else
function
*/


if (5 <= 5) {
    console.log('Siii')
} else {
    console.log('Noo')
}

const EDAD = 18
let numero = 13

if (numero >= EDAD) {
    console.log('Pedes entrar')
} else {
    console.log (`No puedes entrar, intenta en ${EDAD - numero} años`)
}

num = 10

if (num > 70) {
    console.log ('Muy viejo')
} else if (num >=18) {
    console.log ('Eres mayor de edad')
} else {
    console.log ('Eres un bebe')
}

/* Escribir if/else de manera corta if-> (?) else-> (:) */

let cantidad = 13
let sacarCarnet = cantidad >= 18 ? true : false

console.log(cantidad >= 18 ? 'Si, es mayor' : 'No, es menor')
console.log(sacarCarnet ? 'Se puede sacar el carnet' : 'No se puede sacar el carnet')


const ID = 18 
let age = 21
let ticket = false

if (age >= ID && ticket ){
    console.log('Disfruta el concierto')
} else {
    console.log ('No puedes entrar')
}

/* log y saludar son lo mismo metodos*/

function saludar() {
    alert('Hola xoxo')
}


let cantidadProducto = 1

function sumar (){
    cantidadProducto++
}

function restar () {
    cantidadproducto--
}
