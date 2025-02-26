/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 0; i <= 20; i++) {
    console.log(i)
}

let j = 0
while (j <= 20) {
    console.log(j)
    j++
}

let x = 0
do {
    console.log(x)
    x++
} while (x <= 20)

// 2. Crea un bucle que sume todos los números del 1 al 10 y muestre el resultado
let suma = 0
for (let s = 1; s <= 100; s++) {
    suma += s
}
console.log(`La suma total es ${suma}`)

let i = 0
let suma_while = 0
while (i <= 10) {
    console.log(suma_while += i)
    i++
}

console.log(suma_while)

let a = 0
let suma_do = 0
do {
    suma_do += a
    a++
} while (a <= 10)

console.log(suma_do)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

let pares = [];
for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {  // Verifica si el número es par
        pares.push(i);  // Agrega el número par al array
    }
}
console.log(pares);

let pares1 = []
let c = 0
while (c <= 50) {
    c++
    if (c % 2 === 0) {  // Verifica si el número es par
        pares1.push(c);  // Agrega el número par al array
    }
}
console.log(pares);

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["Danny", "Alonso", "ana", "abril"]
for (let l = 0; l <= nombres.length - 1; l++) {
    console.log(nombres[l])
}

let v = 0;
while (v <= nombres.length - 1) {
    console.log(nombres[v])
    v++
}

let f = 0
do {
    console.log(nombres[f])
    f++
} while (f <= nombres.length - 1)
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = "Hola, ¿cómo estás?";
let contadorVocales = 0;
let vocales = "aeiouAEIOU"; // Incluye mayúsculas para contar ambas

// for (let i = 0; i < texto.length; i++) {
//     if (vocales.includes(texto[i])) {
//         contadorVocales++;
//     }
// }

let g = 0
// while(g < texto.length){
//     if(vocales.includes(texto[g])){
//         contadorVocales++
//     }
//     g++
// }

do{
    g++
    if(vocales.includes(texto[g])){
        contadorVocales++
    }
}while(g < texto.length)
console.log(`El número de vocales es: ${contadorVocales}`);



// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numerosm = [0 ,4,6,8]
let resultado = 1
for(let i = 1 ; i <= numerosm.length - 1 ; i++){
    resultado *= numerosm[i]; 
    console.log(resultado)
}
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5


for (let i = 0; i <= 10; i++) {
    let multiplicacion = 5 * i;
    console.log(`5 * ${i} = ${multiplicacion}`);
}

// 8. Usa un bucle para invertir una cadena de texto
let hola = "Hola mundo"
let newString = "";
for(let i = hola.length - 1 ; i >= 0  ; i--){
     newString += hola[i]
    }
    console.log(hola)
    console.log(newString)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let num1 = 0;
let num2 = 1;

console.log(num1); // Primer número de la secuencia
console.log(num2); // Segundo número de la secuencia

for (let i = 2; i < 10; i++) { // Comenzamos desde 2 porque ya tenemos los dos primeros números
    let siguiente = num1 + num2;
    console.log(siguiente);
    num1 = num2;
    num2 = siguiente;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
 
let oldarray = [10,4,5 ,50,45,75,48]
let newarray = []
for(let i = 0; i <= oldarray.length - 1 ; i++){
    if(oldarray[i] > 10){
        newarray.push(oldarray[i]
            
        )     
    }
}
console.log(newarray)