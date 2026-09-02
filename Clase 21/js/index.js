/*
console.log ('Holi')
- Console solo tiene métodos
- Metodos son ACCIONES, son funciones dentro del objeto
- El objeto es console
- El . punto es como la llave para acceder a propiedades y métodos 
- Log es un metodo de registro (registro)
- () son argumentos 
- Si uso un metodo necesito un argumento () (aunque este vacio)
- Las variables son let y const (var pero ya no se utiliza en js)
- Let y const nos permite declarar (son palabras clave, no se pueden repetir)
- Let crea auna variable
- Despues de una variable como let y const va un nombre y despues el valor 
-Const -> no cambia su valor, se crea y se queda asi
- si es un metodo en parentesis ()
- Si es una propiedad es con =
- */

/* 
let nombre = 'Pedro'
nombre = 'Ale'

- Let estoy declarando una variable y no la vuelvo a redeclarar
- Let se puede cambiar el valor, no se puede dejar vacio
- nombre es el identificador 
- = se abre
- 'Pedro' es el valor 
- Se suele escribir en cammelcase nombreAlumno
*/

let nombrePepa = 'Pepa'

console.log (nombrePepa)

/* 
const NOMBRE = "Pepe"

- Se usa para valores que -NO- cambian como un dni
- Se suele escribir en mayusculas
- 
*/

const DNI = ''

/* 
- string "" ''
- boolean true/false
- number 
- null (no tiene valor)
*/

let nombre = 'Pepito'
let templateString 
let edad = 23

console.log('Se llama ' + nombre + ' y tiene ' + edad + ' años')
console.log (`Se llama ${nombre} y tiene ${edad} años opc 2`)

let cantidad = 4
let prenda = 'camisas'
let color = 'rojas'
cantidad++


console.log (`${nombre} tiene ${cantidad} ${prenda} ${color}`)
console.log (`${nombrePepa} compro ${edad} dulces`)
