/*let array = ['A', true, 23]
let objeto = {
    nombre: 'Pepito',
    edad: 23,
    beber: () => {}
}

objeto.beber()
console.log()

let miSuperArray = [
    //unshift
    {nombre: 'Bruno', edad:23, nota: 10}, // iterar el array es como recorrer
    {nombre: 'Leandra', edad:27, nota: 10}
    //push
]

//alumnos[0].nombre // cuando quiero mostrar el nombre del primer array

alumnos.unshift()
alumnos.push()

alumnos.forEach((alumno) => {
    console.log(alumno.nombre)

})*/

/*const list = document.querySelectorAll('li')
console.log(list)

list.forEach((item) => {
    item.style.color = 'red'
})



let saludar = saludo => console.log(saludo)

saludar('Hola')*/

fetch('https://hp-api.onrender.com/api/characters')
.then(response => response.json())
.then(data => {
    data.forEach(personaje => {
        console.log(personaje.name)
    })
        
    
})