
// Objeto es una entidad que contiene propiedades y metodos, se genera dentro de una variable y se accede a sus propiedades mediante la notacion de puntos

//ARRAY
// Son contenedores inteligentes que almacenan no solo valores, sino también comportamientos.
//Es una entidad que contiene propiedades y métodos. Se genera dentro de una variable y se accede a sus propiedades y metodos mediante corchetes
/*let botella = {
    alto: '45cm',
    color: 'verde'
}

botella.color = 'azul'

const miArray = [1, 'Pepe', true, 2, '😊']
miArray[4]

let productos = [
    {nombre: 'Botella', precio: 15, añadir: ()=> {}},
    {nombre: 'Mantel', precio: 10, añadir: ()=> {}},
    {nombre: 'Casco', precio: 20, añadir: ()=> {}},
    {nombre: 'Móvil', precio: 150, añadir: ()=> {}},
]

console.log(productos[productos.length -1]) // Propiedad es LENGHT - sirve para obtener el número de elementos o la cantidad de caracteres que tiene un objeto


*/

let productos = [
    {nombre: 'Botella', precio: 15, añadir: ()=> {}},
    {nombre: 'Mantel', precio: 10, añadir: ()=> {}},
    {nombre: 'Casco', precio: 20, añadir: ()=> {}},
    {nombre: 'Móvil', precio: 150, añadir: ()=> {}},
]

productos.forEach((producto) => {
    console.log(producto.nombre)
})


let iconos = ['⚽', '🏀']

iconos.unshift('🥎') 
iconos.push('🏈') 

iconos.splice(1, 2, '⚾')
iconos.indexOf('🏈') 
iconos.reverse()
iconos.join(' - ')

iconos.map((icono) => {
    return icono + '🏆'
})

iconos.find((icono) => icono.includes('🏆'))
iconos.some((icono) => icono.includes('🏆'))

let iconosCopa = iconos.filter((icono) => icono.includes('🏆'))

console.log(iconos)

/*
let palabras = ['hola', 'chao']

palabras.unshift('si') 
palabras.push('no') 
palabras.splice(1, 2, 'pq')
palabras.indexOf('no') 
palabras.reverse()
//iconos.join()

console.log(palabras)*/