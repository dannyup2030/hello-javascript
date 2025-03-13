/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
    let array = ["danny" , "ana ","abril","max","lola"]
  
    let number = [1,2,3,4,5]
    console.log(number.slice(0,2))

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
  let [value1 ,value2]= number

// 3. Usa desestructuración para extraer dos propiedades de un objeto
    let person = {
        name : "ana",
        edad : 20,
        trabajo:"programacion",
        saludo: {
            pais : " españa",
            lenguaje : "Español"
        }


    }
    let {name , edad } = person
    console.log(name)
    console.log(edad)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
    let {name:nombre , edad :age }= person
    console.log(nombre)
    console.log(age)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
    let {trabajo,saludo:{ pais : country}  } = person
    console.log(trabajo)
    console.log(country)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let newarray = [1 ,2 , 3, 4]
let nuevoArray = [...array,...newarray]
console.log(nuevoArray)
// 7. Usa propagación para crear una copia de un array
let copia = [...newarray]
console.log(copia)
// 8. Usa propagación para combinar dos objetos en uno nuevo

let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}

let objecto5 = {...person3,...person}
console.log(objecto5)

// 9. Usa propagación para crear una copia de un objeto

let newObject = {...person}
console.log(newObject)

// 10. Combina desestructuración y propagación

let {name:nombre2,edad:age20 ,...saludo} =newObject
