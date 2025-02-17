/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

// Array

// Declaración

let myArray = []
let myArray2 = new Array() // De esta manera creamos un array en el cual le especificamos cuantos elmentos vamos a ingresat

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push 
//Agrega los elementos que mentamos dentro del parentesis en el array al final de la lista
myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

//Pop
console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift 
//Elimina el primer elemento del array y lo devuelve
console.log(myArray.shift())
console.log(myArray)

// unshift
//Agrega los elementos que le demos al principio del array
myArray.unshift("Brais", "mouredev")
console.log(myArray)

// length
// Con length podemos ver la longitud de nuestro array
console.log(myArray.length)

// clear
//De esta manera podemos borrar un array
console.log(myArray = [])//De esta manera es preferible
myArray.length = 0 // alternativa
console.log(myArray)

// slice
//De esta manera le decimos con que elementos  queremos quedarnos del array 
myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice
//El splice elimina desde el primer indice que le demos hasta el segundo indice que le demos
myArray.splice(1, 3)
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]

//De esta manera hacemos lo mismo con los dos indices y en el ultimo indice le indicamos si queremos agregar algo en el medio 
myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)