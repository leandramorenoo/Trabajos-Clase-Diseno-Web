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
