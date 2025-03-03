/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let array = ["leon","zebra","tigre","perro","gato"]
// 2. Añade dos más. Uno al principio y otro al final
array.push("conejo")
array.unshift("avestruz")
console.log(array)

// 3. Elimina el que se encuentra en tercera posición
array.splice(3,1)
console.log(array)

// 4. Crea un set que almacene cinco libros

let newset = new Set(["padre rico","la culpa de la vaca","mejora habitos","el caballero de la amardura oxidada","animales"])
console.log(newset)

// 5. Añade dos más. Uno de ellos repetido
newset.add("camino al exito")
console.log(newset)
newset.add("mejora habitos")
console.log(newset)

// 6. Elimina uno concreto a tu elección
console.log(newset.delete("la culpa de la vaca"))
console.log(newset)

console.log(newset.size)
// 7. Crea un mapa que asocie el número del mes a su nombre
let newmap = new Map();
newmap = new Map([
    [1,"Enero"],
    [2,"Febrero"],
    [3,"Marzo"],
    [4,"Abril"],
    [5,"danny"]
])
console.log(newmap)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(newmap.has(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
newmap.set("6",array=["pimavera","verano","invierno","otoño"])
console.log(newmap)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let newarray = ["ciberseguridad","programacion","tecnologia","software"]

let set_new = new Set(newarray)
console.log(set_new)

newmap.set("7" , set_new)
console.log(newmap)

