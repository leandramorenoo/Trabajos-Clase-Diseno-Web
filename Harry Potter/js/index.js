
fetch('https://hp-api.onrender.com/api/characters')
.then(response => response.json())

.then(data => {
    data.forEach(personaje => {
        console.log(personaje.name) 
        const container = document.getElementById('container')
        const newCard = document.createElement('div')
        newCard.classList.add('harry-potter__card')
        newCard.innerHTML = `
        <img src="${personaje.image}">
        <h2>${personaje.name}</h2>
        <h3>${personaje.house}</h3>

        `
        container.appendChild(newCard)
    })
    
})