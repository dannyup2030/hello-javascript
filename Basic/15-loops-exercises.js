/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(let i = 0 ; i <= 20 ; i++){
    console.log(i)
}

let j = 0
while(j <= 20){
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
for(let s = 1 ; s <=100 ; s++){
     suma  += s
    }
    console.log(`La suma total es ${suma}`)

let i = 0
let suma_while = 0
while(i <= 10){
    console.log(suma_while += i)
    i++
}

console.log(suma_while)

let a = 0
let suma_do = 0
do{
    suma_do += a
    a++
}while(a <= 10 )

    console.log(suma_do)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

let pares = [];
for(let i = 0; i <= 50; i++) {
    if(i % 2 === 0) {  // Verifica si el número es par
        pares.push(i);  // Agrega el número par al array
    }
}
console.log(pares);

let pares1 =[]
let c = 0
while(c <= 50){
    if(i % 2 === 0) {  // Verifica si el número es par
        pares.push(i);  // Agrega el número par al array
    }
}
console.log(pares);

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["Danny" ,"Alonso","ana","abril"]
for(let i = 0 ; i<=nombres.length ; i++){
    console.log(nombres[i])
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10