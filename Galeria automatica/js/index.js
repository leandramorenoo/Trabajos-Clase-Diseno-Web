const inputLink = document.getElementById('input')
const btn = document.getElementById('boton')
const containerGaleria = document.getElementById('contenedor')
const clearGallery = document.getElementById('clear-gallery')

let gallery = localStorage.getItem('gallery') != null ? JSON.parse(localStorage.getItem('gallery')) : []

gallery.forEach((image) => {
    const newImage = document.createElement('img')
    newImage.classList.add('gallery__image')// añ4adir clase
    newImage.src = image

    containerGaleria.appendChild(newImage)

})

btn.addEventListener('click', (e) => {

    e.preventDefault()

    console.log('click')
    if (inputLink.value != '') { // Revisar que el valor no esta vacio NO el obj
        gallery.unshift(inputLink.value)
        localStorage.setItem('gallery', JSON.stringify(gallery))
        containerGaleria.innerHTML = ''
        gallery.forEach((image) => {
            const newImage = document.createElement('img')
            newImage.classList.add('gallery__image')// añ4adir clase
            newImage.src = image

            containerGaleria.appendChild(newImage)

        })
    }
    console.log(gallery)
})

clearGallery.addEventListener('click', () => {
    localStorage.removeItem('gallery')
    containerGaleria.innerHTML = ''
    gallery = []
})