// Seleccionamos el elemento HTML con id "gloton" y lo guardamos en una constante
const miElemento = document.getElementById('gloton')
// Seleccionamos el elemento HTML con id "points" y lo guardamos en una constante
const puntos = document.getElementById('points')
// Seleccionamos el botón para subir de nivel y lo guardamos en una constante
const boton = document.getElementById('btn-subir-nivel')
// Ocultamos el botón de subir nivel al cargar la página
boton.style = 'display: none'

// Creamos una variable para llevar el conteo de puntos, empezando en 0
let conteoPuntos = 0 
// Creamos una variable que indica cuántos puntos se necesitan para el siguiente nivel
let puntosNivel = 10
// Creamos una variable para llevar el conteo del nivel, empezando en 1
let nivel = 1

// Creamos una función llamada "alimentar" que se ejecutará cuando se haga clic en el botón
function alimentar () {
    // Verificamos si los puntos son menores al objetivo del siguiente nivel
    if ( conteoPuntos < puntosNivel){
        conteoPuntos++ // Incrementamos los puntos en 1 (sumamos 1 al valor actual)        
        puntos.innerText = conteoPuntos// Actualizamos el texto visible en el elemento "points" con el nuevo valor de puntos        
        boton.style = 'display: none'// Mantenemos oculto el botón de subir nivel mientras se alimenta
    }else {
        gloton.classList.remove('ri-emotion-unhappy-fill') // Removemos la clase que muestra la cara triste        
        gloton.classList.add('ri-emotion-laugh-fill') // Añadimos la clase que muestra la cara feliz        
        boton.style = 'display: block'// Mostramos el botón para subir de nivel
    }
}
  
// Creamos una función llamada "subirNivel" que se ejecutará cuando se haga clic en el botón
 function subirNivel () {
    nivel++ // Incrementamos el nivel en 1 (sumamos 1 al valor actual)  
    puntos.innerText = conteoPuntos// Actualizamos el texto visible en el elemento "points" con el valor actual de puntos    
    gloton.style = `font-size: calc(3rem + ${conteoPuntos}rem)` // Aumentamos el tamaño de la fuente del elemento "gloton" según los puntos acumulados    
    boton.style = 'display: none'// Ocultamos nuevamente el botón de subir nivel    
    puntosNivel+=10 // Aumentamos en 10 el objetivo de puntos para el siguiente nivel +=10
 }      


    