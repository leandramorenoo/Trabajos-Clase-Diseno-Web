/*
// BOM
window.console.log()

// Temporizadores
setTimeout(() => {}, 1000) // necesita una función y el tiempo para funcionar
const miIntervalo = setInterval(() => {}, 300)
clearInterval(miIntervalo)

//Guardar datos
localStorage.setItem('usuario', 'Pedro')
sessionStorage.setItem('idioma', 'es') // necesita primero la CLAVE(idioma) y después el VALOR (es)

//Leer datos getItem
const usuario = localStorage.getItem('usuario')

//Borrar datos
localStorage.removeItem('usuario')
localStorage.clear()

//Guardar objetos
const usuario = {nombre: 'Pedro', edad: 30 };
localStorage.setItem('user',
    JSON.stringify(usuario));
*/

//Guardar Datos

let miMensaje = prompt()
localStorage.setItem('mensaje',miMensaje)