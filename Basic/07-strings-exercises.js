/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let nombre = "danny"
let saludo =`Hola ${nombre},como estas`
let presentacion = `, me llamo ana `
console.log(saludo + presentacion)
// 2. Muestra la longitud de una cadena de texto
console.log(saludo.length - 1)
// 3. Muestra el primer y último carácter de un string
console.log(saludo[21])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(nombre.toUpperCase())
console.log(nombre.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let despedida = `Chao 
espero te
vaya super bien `
// 6. Interpola el valor de una variable en un string
console.log(`${saludo}  ${presentacion}  , que te vaya bien un gusto ` )
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(saludo.replace(" ","-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(saludo.includes("ana"))
console.log(saludo.includes("danny"))
// 9. Comprueba si dos strings son iguales
console.log(saludo === presentacion)
console.log(typeof saludo === typeof presentacion)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(saludo.length === nombre.length)