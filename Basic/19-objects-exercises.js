/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
    let objeto = {
        name : "danny",
        edad : 25,
        profesion : "administrador de empresas"
    }
// 2. Accede y muestra su valor
for (let key in objeto) {
    console.log(key + ": " + objeto[key])
}
    console.log(objeto)
// 3. Agrega una nueva propiedad
    objeto.email = "dannyup2"
    console.log(objeto)
// 4. Elimina una de las 3 primeras propiedades
    delete objeto.name
    console.log(objeto)
// 5. Agrega una función e invócala
    objeto.funciones = function (n ,y){
        
        return `tus funciones son ${n} y se te pagara una cantidad de ${y} euros `
    }
    console.log(objeto.funciones("logistica y ventas", 2500))
// 6. Itera las propiedades del objeto
for(let key in objeto){
    console.log(`${key} : ${objeto[key]}`)
}
// 7. Crea un objeto anidado    
    let carros = {
        marca :"mercedez",
        modelo: 2024,
        uso:"nuevo",

        motos:{
        marca:"suzuki",
        modelo:2021,
        uso:"de segunda"
        }
    }
// 8. Accede y muestra el valor de las propiedades anidadas
for (let clave in carros) {
    if (carros.hasOwnProperty(clave)) {
      console.log(`${clave}: ${carros[clave]}`);
    }
    console.log(carros.motos)
  }
// 9. Comprueba si los dos objetos creados son iguales

//   let object1 = {
//     name:"dan"
//   }
//   let object2 = {
//     name:"dan"
//   }

let object1 = {
    name: "dan"
};

let object2 = {
    name: "dan"
};

// Función para comparar objetos (sin importar el orden de las propiedades)
function sonIguales(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    //Si tienen diferente cantidad de claves, no son iguales
    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        // Comparamos valores de cada clave
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(sonIguales(carros, objeto));

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(carros.marca == carros.motos.marca)
console.log(carros.marca == carros.marca)
console.log(carros.marca == objeto.edad)