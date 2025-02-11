/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
// Hola mundo
// 2. Escribe un comentario en varias líneas
/**Este es un comentario de varias lineas */
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let undefineded;
let verdad = true;
let nullValue = null;
let num = 5
let BigInt = 444858494564548545654824545448n
let falso = false;
let decimal = 1.89
let mySymbol = Symbol("danny")
let numbig = 80564582589745632584789554787878554n
let nombre = "danny"
// 4. Imprime por consola el valor de todas las variables
console.log(undefineded)
console.log(verdad)
console.log(falso)
console.log(nullValue)
console.log(num)
console.log(BigInt)
console.log(decimal)
console.log(mySymbol)
console.log(numbig)
console.log(nombre)
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof undefineded)
console.log(typeof verdad)
console.log(typeof falso)
console.log(typeof nullValue)
console.log(typeof num)
console.log(typeof BigInt)
console.log(typeof decimal)
console.log(typeof mySymbol)
console.log(typeof numbig)
console.log(typeof nombre)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
undefineded = undefined
verdad = false;
nullValue = null;
num = 5
BigInt = 84444858494564548545654824545448n
falso = true;
decimal = 1.89
mySymbol = Symbol("danny")
numbig = 8880564582589745632584789554787878554n
nombre = "daniel"
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

undefineded = null
verdad = "false";
nullValue = undefined;
num = 84444858494564548545654824545448n
BigInt = 5
falso = "true";
decimal = 1.89
mySymbol = true
numbig = 88
nombre = false

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const danny = "es mi nombre"
const answer = false
const answer2 = true
const numero1 = 23
const simbolo_4 = Symbol("5")
const indefinido = undefined
const valor_nulo = null


// 9. A continuación, modifica los valores de las constantes

danny = ana
answer = 5
answer2 = 60
numero1 = 23
simbolo_4 = Symbol("5")
indefinido = undefined
valor_nulo = null
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
/**Solo una porque ya las demas no ejecutan sin embargo no se va `poder cambiar el const
 * ya que el valr es fijo al menos de que sea del mismo tipo
 */
// ana is not defined
