/*
Clase 21 - Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=6565
*/

// Strings (cadenas de texto)

// Concatenación

let myName = "danny"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[11])
console.log(greeting[6])

// Métodos comunes

console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Hola")) // Índice
console.log(greeting.indexOf("Brais"))
console.log(greeting.indexOf("MoureDev"))
console.log(greeting.includes("Hola")) // Includes comprubea si existe
console.log(greeting.includes("Brais"))
console.log(greeting.includes("MoureDev"))
console.log(greeting.slice(0, 10)) // Sección
console.log(greeting.replace("Brais", "MoureDev")) // Reemplazo

// Template literals (plantillas literales)
/**Sirve para incorporar mensajes ,strings de varias lineas */

// Strings en varias líneas
let message = `Hola, este
es mi
curso de
JavaScript`
console.log(message)

// Interpolación de valores
let email = "dannyup@hotmail.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)