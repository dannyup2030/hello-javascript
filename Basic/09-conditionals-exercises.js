/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria
let pase = 2
if(pase == 1){
    console.log("Puede pasar")
} else if(pase == 0){
    console.log("No tiene pase")
}else {
    console.log("Esta en proceso de sacar el pase")
}


let cliente = "danny"
if(cliente === "danny"){
    console.log("Es el propietario")
}else{
    console.log("Es el comprador")
}

let wallet = 2500
const dinero = wallet <= 3000 ? "Saldo insuficiente " : "Pago realizado"
console.log(dinero)
// 1. Imprime por consola tu nombre si una variable toma su valor

let variablex = undefined;

if(variablex === undefined){
    console.log("danny")
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "Dannyup"
let password = 2020

if(user === "Dannyup" && password === 2020 ){
    console.log("Ingreso exitoso")  
}else{
    console.log("Algun dato esta equivocado")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num = 0

if(num  * 1 === num ){
    console.log("Es positivo")
}else if(num * 1 === 0){
    console.log("El valor es 0")
}else {
    console.log("Es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let años = 16
let edad_ideal = 18 
if(años >= edad_ideal){
    console.log("Puede votar")
}else{
    console.log(`Todavia te faltan ${ edad_ideal- años } para poder votar ` )
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let adulto = 18
let menor  =  17
let edad = 19
let mayor_edad  = edad <= menor ? "Menor" || edad >= adulto : "mayor"
console.log(mayor_edad)


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 9
if(mes == 1 || mes === 2){
    console.log("verano")
} else if(mes == 3 || mes == 4 || mes ==5 ){
    console.log("invierno ")
} else if(mes == 6 || mes == 7 || mes === 8){
    console.log("otoño")
}else{
    console.log("primavera")
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch
var año = 2023
var date ;
switch(mes){
    case 1:
        date = new Date(año,mes,0).getDate()
    break
    case 2:
        date = new Date(año,mes,0).getDate()
        break
    case 3:
        date = new Date(año,mes,0).getDate()
        break
    case 4:
        date = new Date(año,mes,0).getDate()
        break
    case 5:
        date = new Date(año,mes,0).getDate()
        break
    case 6:
        date = new Date(año,mes,0).getDate()
        break
    case 7:
        date = new Date(año,mes,0).getDate()
        break
    case 8:
        date = new Date(año,mes,0).getDate()
        break
    case 9:
        date = new Date(año,mes,0).getDate()
        break
    case 10:
        date = new Date(año,mes,0).getDate()
        break
    case 11:
        date = new Date(año,mes,0).getDate()
        break
    case 12:
        date = new Date(año,mes,0).getDate()  
        break
}
console.log(date)
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let languague = "English"

switch(languague){
    case "English":
        console.log("Hi!")
        break
    case "Español":
        console.log("Hola")
        break
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes2 = 1
let mensaje

switch(mes2){
    case 1 :
    mensaje = "verano ";
    break

    case 2:
        mensaje = "invierno"
        break
    case 3:
        mensaje = "Otoño"
        break
}

console.log(`Estamos en el mes de ${mensaje}`)
// 10. Usa un switch para hacer de nuevo el ejercicio 7
 let dia = new Date(2025,mes2,0)
 console.log(dia)

 