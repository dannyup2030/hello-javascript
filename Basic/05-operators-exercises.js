/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 6;
let b = 20
let suma = a + b
let resta = a - b
let division = a / b
let multiplicacion = a * b
let modulo = a % b
let exponente = b ** a

console.log(modulo)
// 2. Crea una variable para cada tipo de operación de asignación,

let variable_asigna = 10

console.log(variable_asigna += a)
console.log(variable_asigna -= a)
console.log(variable_asigna /= a)
console.log(variable_asigna *= a)
console.log(variable_asigna %= a)
console.log(variable_asigna **= a)


//    que haga uso de las variables utilizadas para las operaciones aritméticas

console.log(((resta * suma) + (resta ** 2)) + (division * (multiplicacion ** 3)));



// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(suma > resta)
console.log(division < suma)
console.log(modulo === 6)
console.log(multiplicacion > resta)
console.log(multiplicacion > suma)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

let falso = false;
let verdadero = true;
let num1 = 5
let num2 = 6

console.log(falso === verdadero)
console.log(num1 < num2  && num1 >= 9)
console.log(num1 === "5" )
console.log(num2 >= 5 && num2 < num1)
console.log(Boolean(num2) === verdadero);
// 5. Utiliza el operador lógico and

console.log(num1 < 6 && 6 === num2 || num2 > num1)

// 6. Utiliza el operador lógico or
console.log(num2 <= 10 || num2 > num1)
// 7. Combina ambos operadores lógicos
console.log(num1 < 6 && 6 === num2 || num2 > num1)

// 8. Añade alguna negación
console.log(!false)
console.log(num1 !== 6 && !(num2 <= num1)); 


// 9. Utiliza el operador ternario
let sol = false
sol ? console.log("Esta soleado") : console.log("No esta soleado")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(num1 < num2 && num2 < 10 || !(num1 > num2));
