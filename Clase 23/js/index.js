/*
-Objetos (console, window, document)
-Métodos - (Lo que puedo hacer) 
-Propiedades /Variables es como lo mismo

-- KEYWORDS --
- let: declarar variables
- const: declarar constantes
- if, else, else if : crear condicionales
- function : declarar funciones

-- DATOS -- 
- String / Template string
- Boolean
- Number
- Null

-- OPERADORES --
- + , - ,* , /, %
- ++, -- , **
- =, +=, -=, *=, /=
- ==, ===, !=, !==, > , <, <=, <=
-- &&, ||, ! 

-- FUNCTION --

function saludar() {
    console.log('Hola')
}

Se puede guardar una funcion dentro de una variable:

let miFuncion = function() {}
miFunction()


*/

/*let miFuncion = function() {}
miFunction()

let despedir = () => {} */

/*(function() { // Se muestra una vez y despues se borra, sirve para datos de banco o cosas que no quiero que se guarden - Hacerlo por buenas practicas

    function empezar() {
        console.log('Hola bienvenido')
    }

    empezar() /* Para mostrar en consola, lo ejecuta 

    let chao = () => {
        console.log ('Prueba')
    }

    chao()

    let compra = 1

    function sumar() {
        compra++
        console.log (compra)
    }

    sumar()

})()*/

/*
(function() { // Se muestra una vez y despues se borra, sirve para datos de banco o cosas que no quiero que se guarden

})()*/

/* Scope */

let nombre = "Pepe"

let saberEdad = function() {
    let inicial = prompt('Año de nacimiento')
    let edad = 2026 - inicial
    console.log(nombre)

    if (edad >= 18) {
        alert(`Tiene ${edad} años, es mayor de edad`)
        
    }else {
        alert(`Tiene ${edad} años. Aún es menor de edad`)
    }

    return edad
}

function dialogo(personaje, dialogo, cuack) {
    console.log(`${personaje}: ${cuack ? 'Cuack --' : ''}-- ${dialogo}`)
}

dialogo('Pato', '¿Cómo estas?', true)
dialogo('Pedro', 'Bien ¿Y tu?', false)

/* Document Object Model - DOM */

const miTitulo = document.getElementById('mi-titulo')

miTitulo.innerText = 'Pepe'
miTitulo.style = 'color: red'


miTitulo.classList.add('pepito')
miTitulo.classList.remove('small')
miTitulo.classList.toggle('texto')
miTitulo.classList.contains('')
console.log(miTitulo.classList)

/* Menu desplegable */

const menu = document.getElementById('menu')
const toggleMenuIcon = document.getElementById('toggleMenuIcon')

function toggleMenu() {

    menu.classList.toggle('hidden')
    toggleMenuIcon.classList.toggle('white')
}