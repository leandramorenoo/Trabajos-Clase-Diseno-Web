// Creamos una array que almacene las rutas de las imágenes en la carpeta media
const gallery = [
        //['media/img1.png', 'media/img1.webp', 'media/img1.aviff']
        'media/img1.png',
        'media/img2.png',
        'media/img3.png'
    ]

// Creamos una variable para almacenar el índice de la imagen actual, empezando por 0 (primera imagen)
let count = 0
// Creamos una variable vacía donde almacenaremos el setInterval más adelante
let intervalo
// Creamos una constante para el tiempo de espera entre imágenes en milisegundos
const timer = 2500
// Obtenemos el elemento HTML que representa la imagen rotativa
const imagenRotativa = document.getElementById('imagen-rotativa')

// Creamos una función que cambie la imagen actual por la siguiente
function cambiarImagen() {
    // Cambiamos la opacidad de la imagen rotativa a 0 para que desaparezca suavemente
    imagenRotativa.style.opacity = '0'
    // Creamos un SetTimeout para esperar 300ms antes de cambiar la imagen
    setTimeout (() => {
        // Incrementamos el índice de la imagen actual
        count++
        // Si el índice de la imagen actual es mayor o igual al largo de la array de imágenes:
        if (count >= gallery.length){
            // Reseteamos el índice de la imagen actual a 0
            count = 0
        } 
        // Cambiamos el src de la imagen rotativa por la siguiente
        imagenRotativa.src = gallery[count]   
        // Cambiamos la opacidad de la imagen rotativa a 1 para que aparezca suavemente
        imagenRotativa.style.opacity = '100%'
    
    }, 300);    
}

// Creamos una función que inicie el intervalo
function iniciar() {
    // Creamos un intervalo dentro de la variable que creamos vacía para este cometido en el que llame a la función anterior dándole como tiempo la constante que creamos con los milisegundos
    intervalo = setInterval(cambiarImagen, timer)
}
  
// Creamos una función que detenga el intervalo
function detener () {
    // Detenemos el intervalo con clearInterval
    clearInterval((intervalo))
}
    

// Añadimos un evento mouseenter a la imagen que ejecute la función que detenga el intervalo
imagenRotativa.addEventListener('mouseenter', detener)
// Añadimos un evento mouseleave a la imagen que ejecute la función que inicie el intervalo
imagenRotativa.addEventListener('mouseleave', iniciar)
// Llamamos a la función que inicia el intervalo para que se inicie al cargar la página
iniciar()