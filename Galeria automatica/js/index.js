const inputLink = document.getElementById('input')
const btn = document.getElementById('boton')
const containerGaleria = document.getElementById('contenedor')
let gallery = []

btn.addEventListener('click', (e) => {

    e.preventDefault()
    
    console.log('click')
    if (inputLink.value != '') { // Revisar que el valor no esta vacio NO el obj
        gallery.unshift(inputLink.value)

        gallery.forEach((imgae) => {
            const newImage = document.createElement('img')
            newImage.classList.add('gallery__image')// añ4adir clase
            newImage.src = inputLink.value

            containerGaleria.appendChild(newImage)

        })
    }
})