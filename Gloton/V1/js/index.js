// Seleccionamos el elemento HTML con id "gloton" y lo guardamos en una constante
const miElemento = document.getElementById('gloton')
// Seleccionamos el elemento HTML con id "points" y lo guardamos en una constante
const puntos = document.getElementById('points')
// Creamos una variable para llevar el conteo de puntos, empezando en 0
let conteoPuntos = 0
// Creamos una función llamada "alimentar" que se ejecutará cuando hagamos click en el botón
function alimentar(){
    // Verificamos si los puntos son menores a 10
    if (conteoPuntos < 10) {
        // Incrementamos los puntos en 1
        conteoPuntos++
        /* let calc = 3 + conteoPuntos */
        // Actualizamos el texto visible en el elemento "points" con el nuevo valor de puntos
        puntos.innerText = conteoPuntos
        // Aumentamos el tamaño de la fuente del elemento "gloton" dinámicamente. El tamaño base es 3rem + los puntos acumulados en rem
        gloton.style = `font-size: calc(3rem + ${conteoPuntos}rem)`

    } else {  // Si los puntos ya son 10 o más, ejecutamos este código
        // Removemos la clase que muestra la cara triste 
        gloton.classList.remove('ri-emotion-unhappy-fill')
        // Añadimos la clase que muestra la cara feliz
        gloton.classList.add('ri-emotion-laugh-line')
    }
}
    
        
        
        
   
             
        