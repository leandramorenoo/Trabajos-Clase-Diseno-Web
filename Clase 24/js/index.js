/*
-- DATOS -- 
- String / Template string
- Boolean
- Number
- Null

-- KEYWORDS --
- let: declarar variables
- const: declarar constantes
- if, else, else if : crear condicionales
- function : declarar funciones

-- OBJETOS --
- console
- document (DOM)

-- FUNCIONES -- 
*/
// Nombrada 
function nombreFuncion(){
 //mi codigo
}

// Anonimas
let miFuncion = function (){
    // mi codigo
}

// Flecha (arrow)
let miArrow = ()=> {
    // mi codigo
}

// IIFE

(function () {
// mi codigo
})()

// ------------

// Condicionales

if (5>6) {
    // mi codigo
} else if (7 > 6){
    // mi codigo
} else {
    // mi codigo
}

// Condicionales ternarias
(5>6) ? '' : ''

// DOM
document.getElementById('') // -> Nodo (devuelve solo 1 nodo)
document.querySelector('a') // -> Nodo (devuelve solo 1 nodo)

document.getElementsByClassName('') // -> Node List (devuelve una lista de nodos)
document.querySelectorAll('') // -> Node List --> ESTA ES LA QUE CASI SIEMPRE SE VA A USAR <--
document.getElementsByTagName('') // -> Node List

let miElemento = document.getElementById('miTitulo')

miElemento.classList.add('')
miElemento.classList.remove('')
miElemento.classList.toggle('')

miElemento.innerText = ''
miElemento.innerHTML = ''

miElemento.style = ''







