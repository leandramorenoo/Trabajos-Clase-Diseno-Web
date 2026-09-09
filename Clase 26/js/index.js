//Guardo todo elemento que necesito utilizar
// Pienso en la finalidad del proyecto:
    // El usuario rellena el campo de texto
    // El usuario le da click al boton de "crear titulo"
    // - Al hacer click se activa una funcion
        // -- Si el campo de testo NO esta vacio
        // -- Se genera un H1 dentro del contenedor con el valor del campo de texto
        // -- Si el campo esta vacio, aparce un mensaje en pantalla

const boton = document.getElementById('createElement')
const input = document.getElementById('title')
const contenedor = document.getElementById('contenedorTitulo')
const colorSelector = document.getElementById('color')

boton.addEventListener('click', (e) => {

    e.preventDefault()
    if (input.value != '' ){
      const nuevoValor =  document.createElement('h1') 
      nuevoValor.classList.add('titulo')
      nuevoValor.innerText = input.value
      nuevoValor.style.color = colorSelector.value

        /*if (colorSelector.value == 'rojo'){
            nuevoValor.style = 'color: red'

        } else if (colorSelector.value == 'azul'){
            nuevoValor.style = 'color: blue'

        } else {
            nuevoValor.style = 'color: green'
        }*/

    contenedor.appendChild(nuevoValor)
    alert('Guardado el titulo')

    } else {
        alert('Escribe un titulo')
    }
}) 

// palabras reservadas: hacen algo, ejecuta una accion distinta
// objetos : solo hay propiedad (te devuelve un valor, lo devuelve js, lo puedo cambiar) y metodo (es como una funcion, no me devuelve nada, ejecuta algo una accion, SIEMPRE CON ())

let edad = ''
const DNI = ''
var nombre = ''

function saludar(){

}