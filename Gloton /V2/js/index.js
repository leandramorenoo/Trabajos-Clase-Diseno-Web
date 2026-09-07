// Seleccionamos el elemento HTML con id "gloton" y lo guardamos en una constante
const miElemento = document.getElementById('gloton')
// Seleccionamos el elemento HTML con id "points" y lo guardamos en una constante
const puntos = document.getElementById('points')
// Seleccionamos el botón para subir de nivel y lo guardamos en una constante
const boton = document.getElementById('btn-subir-nivel')
// Ocultamos el botón de subir nivel al cargar la página
boton.style = 'display:none;'

// Creamos una variable para llevar el conteo de puntos, empezando en 0
let conteoPuntos = 0
// Creamos una variable para llevar el conteo del nivel, empezando en 1
let conteoNivel = 1
// Creamos una función llamada "alimentar" que se ejecutará cuando hagamos click en el botón
function alimentar(){
    // Verificamos si los puntos son menores a 10
    if (conteoPuntos < 10) {
        // Incrementamos los puntos en 1
        conteoPuntos++     
        // Actualizamos el texto visible en el elemento "points" con el nuevo valor de puntos   
        puntos.innerText = conteoPuntos     
        // Mantenemos oculto el botón de subir nivel mientras se alimenta
        boton.style = 'display:none;'
   } else  {// Si los puntos ya son 10 o más, ejecutamos este código

        // Removemos la clase que muestra la cara triste  
        gloton.classList.remove('ri-emotion-unhappy-fill')     
        // Añadimos la clase que muestra la cara feliz
        gloton.classList.add('ri-emotion-laugh-fill')        
        // Mostramos el botón para subir de nivel
        boton.style = 'display: block;'
   }  
}

// Creamos una función llamada "subirNivel" que se ejecutará cuando se haga clic en el botón
function subirNivel(){
    // Incrementamos el nivel en 1 (sumamos 1 al valor actual)   
    conteoNivel++ 
    // Actualizamos el texto visible en el elemento "points" con el valor actual de puntos 
    puntos.innerText = conteoPuntos
    // Aumentamos el tamaño de la fuente del elemento "gloton" según los puntos acumulados 
    gloton.style = `font-size: calc(3rem + ${conteoPuntos}rem)`   
    // Ocultamos nuevamente el botón de subir nivel
    boton.style = 'display:none;'
}

    