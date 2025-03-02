/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
    function suma(a,b){
        return a + b
    }

    let sumatoria = (a,b) => a + b
    console.log(sumatoria(5,6))
    console.log(suma(5,5))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let number = [5,8,9,10]
let mayorque = function mayor(array){
        let mayor = array[0]
        for(let i = 0 ; i <= array.length - 1 ; i++){
            if(array[i] > mayor){
                mayor = array[i]
            }
        }
        return mayor
    }

    function obtenerMayor(array) {
        return Math.max(...array); // El spread convierte el array en una lista de argumentos
    }
    
    let numeros = [5, 8, 9, 10];
    console.log(obtenerMayor(numeros)); // 10
    
    console.log(mayorque(number))
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

    function numeroVocales(mensaje){
        let contador = 0
        let vocales = "aeiouAEIOU"
        for(let i = 0 ; i < mensaje.length  ; i++){
            if(vocales.includes(mensaje[i])){
                contador++
            }
        }
        return contador
    }
    console.log(numeroVocales("danny"))

   

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let array2 = ["manzana","pera", "banano"]
let mayusculas = (array => {
    return array.map((e) => e.toUpperCase())
})
console.log(mayusculas(array2))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

let esPrimo = (num) => {
    if (num <= 1) return false; // 0 y 1 no son primos
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Si es divisible por algún número que no sea 1 y él mismo, no es primo
        }
    }
    return true;
};

console.log(esPrimo(4)); // false (porque 4 no es primo)
console.log(esPrimo(7)); // true (porque 7 es primo)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let arraynuevo = ["Danny", "ana", "abril", "celeste"];
let arrayviejo = ["Danny", "ana", "maicol", "nicol"];

function identificador(arr, arr2) {
    const setArr2 = new Set(arr2)
    return [...new Set(arr.filter(elemento => setArr2.has(elemento)))];

}

// Llamamos a la función y mostramos el resultado
console.log(identificador(arraynuevo, arrayviejo));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let newarray3 = [1,2,3,5,6,7,8]
function sumaTotal(array){
    return array.
    filter(e=>e % 2 === 0)
    .reduce((acum , num) => acum + num ,0)
}
console.log(`La suma total de los pares es: ${sumaTotal(newarray3)}`);
console.log(sumaTotal(newarray3))
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevacion(arra){
    return arra.map(e => Math.pow(e, 2))
}
console.log(elevacion(newarray3))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let arrayInvertido = []
const cadena = string =>{
    let array = [...string]
   for(let i = array.length - 1 ; i>= 0 ; i--){
    arrayInvertido.push(array[i])
   }
    return string = arrayInvertido.toString()
    
}
console.log(cadena("hola como estas"))

// 10. Crea una función que calcule el factorial de un número dado

function factorial(n) {
    if (n === 0) return 1; // 0! es 1 por definición
    let array = []
    for(let i = 1 ; i<= n ; i++){
        array.push(i)
    }
    return array.reduce((acum,num) => acum * num,1)

    //otra forma
    // return Array.from({ length: n }, (_, i) => i + 1) // Creamos un array [1, 2, ..., n]
    //     .reduce((acum, num) => acum * num, 1); // Multiplicamos todos los valores
}

console.log(factorial(5)); //  120
console.log(factorial(7)); //  5040
console.log(factorial(0)); //  1

