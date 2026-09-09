const btnCrearTitulo = document.getElementById('btnCrearTitulo')
const inputTextoTitulo = document.getElementById('textoTitulo')

// Guardo el contacto
const container = document.getElementById('container')

btnCrearTitulo.addEventListener('click', (e) => {
    e.preventDefault()

    if (inputTextoTitulo.value != '') {

        // Creo el elemento
        const miTitulo = document.createElement('h1')

        // Le doy estilo a mi nuevo elemento
        miTitulo.classList.add('title-xl')
        miTitulo.innerText = inputTextoTitulo.value

        // Le entrego el elemento al contacto
        container.appendChild(miTitulo)

    } else {
        inputTextoTitulo.style = 'border: solid 1px red'
        inputTextoTitulo.placeholder = 'Rellena el título'
    }
})

/*
// El boton que escuchara el evento de click y que creara un nuevo elemento adjudicado al contenedor
const btnCreateElement = document.getElementById('createElement')
// El recipiente en el que vamos a adjuntar el nuevo elemento
const contenedorTitulo = document.getElementById('contenedorTitulo')
const inputTitle = document.getElementById('title')

btnCreateElement.addEventListener('click', () => {
    if (inputTitle.value != '') {
        const newElement = document.createElement('h1')
        newElement.classList.add('mi-titulo')
        newElement.innerText = inputTitle.value
        contenedorTitulo.appendChild(newElement)
    } else {
        alert('Escribe el titulo')
    } 
})


*/
