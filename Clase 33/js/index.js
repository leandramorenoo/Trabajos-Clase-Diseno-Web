let randomNum = Math.random()
console.log(randomNum * 20)

let roundNum = Math.round(0.5)
console.log(roundNum)

console.log(Math.E)

fetch ('hp-api.onrender.com/api/characters')
.then(response => response.json())
.then(data => {
    console.jog(data)
})
.catch(error => console.log('Error: '+ error))
.finally(data => alert ('Completado'))